'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Dashboard', icon: '⌂' },
  { href: '/content', label: 'Content', icon: '◫' },
  { href: '/create', label: 'Create New', icon: '✦' },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <div style={{ width: '220px', minWidth: '220px', background: '#08212D', display: 'flex', flexDirection: 'column', height: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 100 }}>
      {/* Logo */}
      <div style={{ padding: '22px 20px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#67E74E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', color: '#08212D' }}>F</div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.3px' }}>Flimp AI</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px' }}>Microsite Generator</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 10px' }}>
        {NAV.map(n => {
          const active = n.href === '/' ? path === '/' : path.startsWith(n.href);
          return (
            <Link key={n.href} href={n.href} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 12px', borderRadius: '8px', marginBottom: '4px',
              background: active ? 'rgba(103,231,78,0.12)' : 'transparent',
              color: active ? '#67E74E' : 'rgba(255,255,255,0.55)',
              textDecoration: 'none', fontSize: '14px', fontWeight: active ? 600 : 400,
              transition: 'all 0.15s',
            }}>
              <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>{n.icon}</span>
              {n.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)', fontSize: '11px' }}>
        Flimp Communications<br />v1.0 Prototype
      </div>
    </div>
  );
}
