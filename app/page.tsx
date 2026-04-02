'use client';
import AppShell from './components/AppShell';
import { useStore, OUTPUT_TYPE_META, formatDate } from './components/store';
import Link from 'next/link';
import type { OutputType } from './components/store';

function Dashboard() {
  const { projects } = useStore();

  return (
    <div style={{ padding: '32px 40px', maxWidth: '1200px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 700, color: '#08212D', margin: 0, letterSpacing: '-0.5px' }}>Dashboard</h1>
        <p style={{ color: '#666', fontSize: '14px', marginTop: '6px' }}>Create AI-powered benefits microsites from your content</p>
      </div>

      {/* Create New Cards */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#67E74E', marginBottom: '16px' }}>Create New</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {(Object.entries(OUTPUT_TYPE_META) as [OutputType, typeof OUTPUT_TYPE_META[OutputType]][]).map(([key, meta]) => (
            <Link key={key} href={`/create?type=${key}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#fff', borderRadius: '14px', padding: '24px 20px',
                border: '1px solid #e2e8f0', cursor: 'pointer',
                transition: 'all 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = meta.color; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${meta.color}22`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; }}
              >
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{meta.icon}</div>
                <div style={{ fontWeight: 600, fontSize: '15px', color: '#08212D', marginBottom: '6px' }}>{meta.label}</div>
                <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.5' }}>{meta.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: '#67E74E' }}>Recent Projects</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {projects.map(p => {
            const meta = OUTPUT_TYPE_META[p.outputType];
            return (
              <div key={p.id} style={{
                background: '#fff', borderRadius: '12px', padding: '18px 22px',
                border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${meta.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{meta.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: '#08212D' }}>{p.name}</div>
                  <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>{p.clientName} · {meta.label} · {formatDate(p.createdAt)}</div>
                </div>
                <div style={{
                  padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600,
                  background: p.status === 'published' ? '#f0fdf4' : p.status === 'generating' ? '#FFF7E6' : '#f0f4f8',
                  color: p.status === 'published' ? '#16a34a' : p.status === 'generating' ? '#d97706' : '#666',
                }}>
                  {p.status === 'published' ? 'Published' : p.status === 'generating' ? 'Generating' : 'Draft'}
                </div>
                {p.status === 'published' && (
                  <Link href={`/output/${p.id}`} style={{ padding: '6px 14px', background: '#08212D', color: '#fff', borderRadius: '8px', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>
                    View ↗
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return <AppShell><Dashboard /></AppShell>;
}
