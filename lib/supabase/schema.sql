-- Flimp AI Generator Database Schema
-- Run this in the Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── Users Profile (extends Supabase auth.users) ──────────────
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  company text,
  role text default 'member' check (role in ('admin', 'member', 'viewer')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ── Client Folders ────────────────────────────────────────────
create table public.folders (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  user_id uuid references auth.users on delete cascade not null,
  created_at timestamptz default now()
);

-- ── Content Items (uploaded files) ────────────────────────────
create table public.content (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  file_type text not null,
  folder_id uuid references public.folders on delete set null,
  user_id uuid references auth.users on delete cascade not null,
  storage_path text, -- Supabase Storage path
  extracted_text text, -- Extracted text from PDF/docs
  file_size bigint default 0,
  created_at timestamptz default now()
);

-- ── Projects ──────────────────────────────────────────────────
create table public.projects (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  client_name text not null,
  output_type text not null check (output_type in (
    'showcase', 'resource-center', 'virtual-fair',
    'benefits-at-a-glance', 'digital-benefits-guide',
    'digital-postcard', 'benefits-guide-pdf',
    'flyer-pdf', 'rate-sheet-pdf'
  )),
  user_id uuid references auth.users on delete cascade not null,
  status text default 'draft' check (status in ('draft', 'generating', 'published', 'archived')),
  config jsonb default '{}', -- Output-specific configuration (colors, branding, etc.)
  generated_url text, -- The shareable output URL
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ── Project-Content Junction ──────────────────────────────────
create table public.project_content (
  project_id uuid references public.projects on delete cascade,
  content_id uuid references public.content on delete cascade,
  primary key (project_id, content_id)
);

-- ── Output Analytics ──────────────────────────────────────────
create table public.output_views (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references public.projects on delete cascade not null,
  viewer_ip text,
  user_agent text,
  referrer text,
  viewed_at timestamptz default now()
);

-- ── Row Level Security ────────────────────────────────────────
alter table public.profiles enable row level security;
alter table public.folders enable row level security;
alter table public.content enable row level security;
alter table public.projects enable row level security;
alter table public.project_content enable row level security;
alter table public.output_views enable row level security;

-- Profiles: users can read/update their own profile
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Folders: users can CRUD their own folders
create policy "Users can manage own folders" on public.folders
  for all using (auth.uid() = user_id);

-- Content: users can CRUD their own content
create policy "Users can manage own content" on public.content
  for all using (auth.uid() = user_id);

-- Projects: users can CRUD their own projects
create policy "Users can manage own projects" on public.projects
  for all using (auth.uid() = user_id);

-- Project-Content: users can manage their own project associations
create policy "Users can manage own project content" on public.project_content
  for all using (
    exists (
      select 1 from public.projects
      where projects.id = project_content.project_id
      and projects.user_id = auth.uid()
    )
  );

-- Output views: anyone can insert (for tracking), project owners can read
create policy "Anyone can log views" on public.output_views
  for insert with check (true);
create policy "Project owners can view analytics" on public.output_views
  for select using (
    exists (
      select 1 from public.projects
      where projects.id = output_views.project_id
      and projects.user_id = auth.uid()
    )
  );

-- ── Indexes ───────────────────────────────────────────────────
create index idx_content_folder on public.content(folder_id);
create index idx_content_user on public.content(user_id);
create index idx_projects_user on public.projects(user_id);
create index idx_projects_status on public.projects(status);
create index idx_output_views_project on public.output_views(project_id);
