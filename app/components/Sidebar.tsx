'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

const NAV = [
  { href: '/', label: 'Dashboard', icon: 'D' },
  { href: '/content', label: 'Content', icon: 'C' },
  { href: '/create', label: 'Create New', icon: '+' },
];

export default function Sidebar() {
  const path = usePathname();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUserEmail(user?.email ?? null);
    });
  }, []);

  const handleSignOut = async () => {
    const res = await fetch('/auth/signout', { method: 'POST' });
    if (res.redirected) {
      router.push('/login');
      router.refresh();
    }
  };

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
              <span style={{
                fontSize: '11px', width: '20px', height: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '4px',
                background: active ? 'rgba(103,231,78,0.2)' : 'rgba(255,255,255,0.08)',
                fontWeight: 700,
              }}>{n.icon}</span>
              {n.label}
            </Link>
          );
        })}
      </nav>

      {/* User + Sign Out */}
      <div style={{ padding: '16px 14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {userEmail && (
          <div style={{ marginBottom: '12px' }}>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {userEmail}
            </div>
          </div>
        )}
        <button
          onClick={handleSignOut}
          style={{
            width: '100%',
            padding: '8px 12px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
        >
          Sign Out
        </button>
        <div style={{ marginTop: '10px', color: 'rgba(255,255,255,0.2)', fontSize: '10px', textAlign: 'center' }}>
          Flimp Communications v1.0
        </div>
      </div>
    </div>
  );
}
