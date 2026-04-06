'use client';
import AppShell from './components/AppShell';
import { useStore, OUTPUT_TYPE_META, formatDate } from './components/store';
import Link from 'next/link';
import { useState } from 'react';
import type { OutputType } from './components/store';

function Dashboard() {
  const { projects } = useStore();
  const [activeTab, setActiveTab] = useState<'create' | 'projects'>('create');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.clientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const outputTypeAbbreviations: Record<OutputType, string> = {
    'showcase': 'SC',
    'resource-center': 'RC',
    'virtual-fair': 'VF',
    'benefits-at-a-glance': 'BG',
    'digital-benefits-guide': 'DG',
  };

  return (
    <div style={{ padding: '32px 40px', maxWidth: '1200px' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #08212D, #67E74E)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', fontWeight: 700, color: '#fff',
            letterSpacing: '-1px'
          }}>F</div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#08212D', margin: 0, letterSpacing: '-0.5px' }}>Flimp AI Microsite Generator</h1>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid #e2e8f0' }}>
          <button
            onClick={() => setActiveTab('create')}
            style={{
              padding: '12px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'create' ? '3px solid #67E74E' : 'none',
              fontSize: '14px', fontWeight: activeTab === 'create' ? 700 : 600,
              color: activeTab === 'create' ? '#08212D' : '#888',
              cursor: 'pointer',
              transition: 'all 0.2s',
              marginBottom: '-2px',
            }}
          >
            Create
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            style={{
              padding: '12px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'projects' ? '3px solid #67E74E' : 'none',
              fontSize: '14px', fontWeight: activeTab === 'projects' ? 700 : 600,
              color: activeTab === 'projects' ? '#08212D' : '#888',
              cursor: 'pointer',
              transition: 'all 0.2s',
              marginBottom: '-2px',
            }}
          >
            Projects
          </button>
        </div>
      </div>

      {/* Create Tab */}
      {activeTab === 'create' && (
        <div>
          {/* Hero Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#08212D', margin: 0, marginBottom: '8px' }}>What would you like to create today?</h2>
            <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>Choose an output type to get started</p>
          </div>

          {/* Output Type Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {(Object.entries(OUTPUT_TYPE_META) as [OutputType, typeof OUTPUT_TYPE_META[OutputType]][]).map(([key, meta]) => (
              <Link key={key} href={`/create?type=${key}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', borderRadius: '14px', padding: '28px 20px',
                  border: '1px solid #e2e8f0', cursor: 'pointer',
                  transition: 'all 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = meta.color; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${meta.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '12px',
                    background: meta.color + '15', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '16px', fontWeight: 700,
                    color: meta.color, marginBottom: '16px'
                  }}>
                    {outputTypeAbbreviations[key]}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#08212D', marginBottom: '8px' }}>{meta.label}</div>
                  <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.5', minHeight: '36px' }}>{meta.description}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Or Start from Scratch */}
          <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
            <Link href="/create" style={{ fontSize: '14px', fontWeight: 600, color: '#67E74E', textDecoration: 'none', cursor: 'pointer' }}>
              Or start from scratch
            </Link>
          </div>
        </div>
      )}

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div>
          {/* Search Bar */}
          <div style={{ marginBottom: '24px' }}>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%', maxWidth: '400px',
                padding: '12px 16px',
                border: '1px solid #d0dce8',
                borderRadius: '10px',
                fontSize: '14px',
                outline: 'none',
                color: '#08212D',
              }}
            />
          </div>

          {/* Projects Table/List */}
          {filteredProjects.length === 0 ? (
            <div style={{
              background: '#f8fafc', borderRadius: '12px', padding: '40px',
              textAlign: 'center', border: '1px solid #e2e8f0',
            }}>
              <div style={{ fontSize: '14px', color: '#888' }}>
                {searchQuery ? 'No projects match your search.' : 'No projects yet. Create one to get started.'}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredProjects.map(p => {
                const meta = OUTPUT_TYPE_META[p.outputType];
                const abbr = outputTypeAbbreviations[p.outputType];
                return (
                  <div key={p.id} style={{
                    background: '#fff', borderRadius: '12px', padding: '18px 22px',
                    border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: `${meta.color}15`, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 700, color: meta.color
                    }}>{abbr}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: '#08212D' }}>{p.name}</div>
                      <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>{p.clientName} · {meta.label} · {formatDate(p.createdAt)}</div>
                    </div>
                    <div style={{
                      padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600,
                      background: p.status === 'published' ? '#f0fdf4' : p.status === 'generating' ? '#FFF7E6' : '#f0f4f8',
                      color: p.status === 'published' ? '#16a34a' : p.status === 'generating' ? '#d97706' : '#666',
                    }}>
                      {p.status === 'published' ? 'Published' : p.status === 'generating' ? 'Generating' : 'Draft'}
                    </div>
                    {p.status === 'published' && (
                      <Link href={`/output/${p.id}`} style={{
                        padding: '8px 16px', background: '#08212D', color: '#fff',
                        borderRadius: '8px', fontSize: '12px', fontWeight: 600,
                        textDecoration: 'none', transition: 'opacity 0.2s'
                      }}>
                        View
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return <AppShell><Dashboard /></AppShell>;
}
