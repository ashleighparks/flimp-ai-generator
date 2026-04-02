'use client';
import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

// ── Types ──────────────────────────────────────────────────────────
export type ContentItem = {
  id: string;
  name: string;
  fileType: string;
  folder: string;
  content: string;
  size: number;
  uploadedAt: string;
};

export type OutputType = 'resource-center' | 'showcase' | 'virtual-fair' | 'benefits-at-a-glance' | 'digital-benefits-guide';

export type Project = {
  id: string;
  name: string;
  clientName: string;
  outputType: OutputType;
  sourceIds: string[];
  status: 'draft' | 'generating' | 'published';
  createdAt: string;
  generatedAt?: string;
};

// ── Demo data ──────────────────────────────────────────────────────
const DEMO_CONTENT: ContentItem[] = [
  { id: 'c1', name: 'RWJBH 2026 Benefits Guide.pdf', fileType: 'PDF', folder: 'RWJBarnabas Health', content: 'Medical Plans, Dental & Vision, Prescriptions...', size: 2400000, uploadedAt: '2026-03-28T10:00:00Z' },
  { id: 'c2', name: 'RWJBH Dental Summary.docx', fileType: 'DOCX', folder: 'RWJBarnabas Health', content: 'Guardian PPO dental plan details...', size: 185000, uploadedAt: '2026-03-28T10:05:00Z' },
  { id: 'c3', name: 'Employee Rates 2026.xlsx', fileType: 'XLSX', folder: 'RWJBarnabas Health', content: 'Rate tables for all tiers...', size: 95000, uploadedAt: '2026-03-28T10:10:00Z' },
  { id: 'c4', name: 'Acme Corp Benefits Overview.pdf', fileType: 'PDF', folder: 'Acme Corp', content: 'Medical, dental, vision overview...', size: 1800000, uploadedAt: '2026-03-25T14:00:00Z' },
  { id: 'c5', name: 'Acme Wellness Program.pdf', fileType: 'PDF', folder: 'Acme Corp', content: 'EAP, gym reimbursement, mental health...', size: 920000, uploadedAt: '2026-03-25T14:30:00Z' },
  { id: 'c6', name: 'GlobalTech Open Enrollment.pdf', fileType: 'PDF', folder: 'GlobalTech', content: 'Open enrollment guide 2026...', size: 3100000, uploadedAt: '2026-03-20T09:00:00Z' },
  { id: 'c7', name: 'Benefits FAQ.txt', fileType: 'TXT', folder: 'Templates', content: 'Common questions about benefits enrollment...', size: 12000, uploadedAt: '2026-03-15T11:00:00Z' },
];

const DEMO_PROJECTS: Project[] = [
  { id: 'p1', name: 'RWJBH 2026 Benefits Showcase', clientName: 'RWJBarnabas Health', outputType: 'showcase', sourceIds: ['c1', 'c2', 'c3'], status: 'published', createdAt: '2026-03-28T12:00:00Z', generatedAt: '2026-03-28T12:05:00Z' },
  { id: 'p2', name: 'Acme Corp Resource Center', clientName: 'Acme Corp', outputType: 'resource-center', sourceIds: ['c4', 'c5'], status: 'published', createdAt: '2026-03-26T10:00:00Z', generatedAt: '2026-03-26T10:08:00Z' },
  { id: 'p3', name: 'GlobalTech Virtual Benefits Fair', clientName: 'GlobalTech', outputType: 'virtual-fair', sourceIds: ['c6'], status: 'draft', createdAt: '2026-03-21T09:30:00Z' },
];

// ── LocalStorage Persistence ───────────────────────────────────────
const STORAGE_KEY_PROJECTS = 'flimp_projects';

function loadProjectsFromStorage(): Project[] {
  if (typeof window === 'undefined') return DEMO_PROJECTS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY_PROJECTS);
    return stored ? JSON.parse(stored) : DEMO_PROJECTS;
  } catch {
    return DEMO_PROJECTS;
  }
}

function saveProjectsToStorage(projects: Project[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
  } catch (e) {
    console.warn('Failed to save projects to localStorage', e);
  }
}

// ── Context ────────────────────────────────────────────────────────
type StoreContextType = {
  content: ContentItem[];
  projects: Project[];
  folders: string[];
  addContent: (item: Omit<ContentItem, 'id' | 'uploadedAt'>) => ContentItem;
  removeContent: (id: string) => void;
  renameContent: (id: string, newName: string) => void;
  moveContent: (id: string, folder: string) => void;
  addFolder: (name: string) => void;
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => Project;
  updateProject: (id: string, updates: Partial<Project>) => void;
};

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(DEMO_PROJECTS);
  const [content, setContent] = useState<ContentItem[]>(DEMO_CONTENT);
  const [folders, setFolders] = useState<string[]>(['RWJBarnabas Health', 'Acme Corp', 'GlobalTech', 'Templates']);

  // Load projects from localStorage on mount
  useEffect(() => {
    const stored = loadProjectsFromStorage();
    setProjects(stored);
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    saveProjectsToStorage(projects);
  }, [projects]);

  const addContent = useCallback((item: Omit<ContentItem, 'id' | 'uploadedAt'>): ContentItem => {
    const newItem: ContentItem = { ...item, id: 'c' + Date.now(), uploadedAt: new Date().toISOString() };
    setContent(prev => [newItem, ...prev]);
    if (item.folder && !folders.includes(item.folder)) {
      setFolders(prev => [...prev, item.folder]);
    }
    return newItem;
  }, [folders]);

  const removeContent = useCallback((id: string) => {
    setContent(prev => prev.filter(c => c.id !== id));
  }, []);

  const renameContent = useCallback((id: string, newName: string) => {
    setContent(prev => prev.map(c => c.id === id ? { ...c, name: newName } : c));
  }, []);

  const moveContent = useCallback((id: string, folder: string) => {
    setContent(prev => prev.map(c => c.id === id ? { ...c, folder } : c));
    if (!folders.includes(folder)) {
      setFolders(prev => [...prev, folder]);
    }
  }, [folders]);

  const addFolder = useCallback((name: string) => {
    if (!folders.includes(name)) setFolders(prev => [...prev, name]);
  }, [folders]);

  const addProject = useCallback((project: Omit<Project, 'id' | 'createdAt'>): Project => {
    const newProject: Project = { ...project, id: 'p' + Date.now(), createdAt: new Date().toISOString() };
    setProjects(prev => [newProject, ...prev]);
    return newProject;
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  }, []);

  return (
    <StoreContext.Provider value={{ content, projects, folders, addContent, removeContent, renameContent, moveContent, addFolder, addProject, updateProject }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be inside StoreProvider');
  return ctx;
}

// ── Helpers ────────────────────────────────────────────────────────
export const OUTPUT_TYPE_META: Record<OutputType, { label: string; description: string; icon: string; color: string }> = {
  'resource-center': { label: 'Resource Center', description: 'Organized content library with categories, documents, and video links', icon: '📚', color: '#367ED4' },
  'showcase': { label: 'Showcase', description: 'Scrolling branded microsite with benefit sections and embedded videos', icon: '✨', color: '#67E74E' },
  'virtual-fair': { label: 'Virtual Benefits Fair', description: 'Interactive virtual event with booths for each benefit category', icon: '🎪', color: '#FFB21B' },
  'benefits-at-a-glance': { label: 'Benefits at a Glance', description: 'Static branded summary with plan details, rates, and carrier info', icon: '📋', color: '#D83A31' },
  'digital-benefits-guide': { label: 'Digital Benefits Guide', description: 'Comprehensive interactive guide with left-nav, full plan details, and carrier info', icon: '📖', color: '#6366F1' },
};

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
