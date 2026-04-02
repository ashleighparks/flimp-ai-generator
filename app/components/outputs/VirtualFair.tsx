'use client';
import { useState } from 'react';

const BOOTHS = [
  { id: 'medical', name: 'Medical Plans', icon: '🏥', color: '#2563EB', desc: 'Explore your medical plan options including OAP, HDHP, and national plans.', details: [
    { label: 'Network OAP', value: '$25/$40 copay, $750/$1,500 deductible' },
    { label: 'HDHP w/ HSA', value: 'Ded + Coins, $1,500/$3,000 deductible' },
    { label: 'Coinsurance', value: '80% plan / 20% member' },
  ]},
  { id: 'dental', name: 'Dental & Vision', icon: '🦷', color: '#059669', desc: 'Guardian dental PPO and EyeMed vision coverage options.', details: [
    { label: 'Dental Preventive', value: '100% covered' },
    { label: 'Dental Basic', value: '80-90% covered' },
    { label: 'Vision Exam', value: '$0 copay in-network' },
  ]},
  { id: 'spending', name: 'Spending Accounts', icon: '💰', color: '#D97706', desc: 'HSA and FSA accounts to save pre-tax dollars for eligible expenses.', details: [
    { label: 'HSA Single Limit', value: '$4,300 (2026)' },
    { label: 'HSA Family Limit', value: '$8,550 (2026)' },
    { label: 'Dependent Care FSA', value: '$5,000 annually' },
  ]},
  { id: 'life', name: 'Life & Disability', icon: '🛡️', color: '#DC2626', desc: 'Basic and voluntary life insurance, plus short and long term disability.', details: [
    { label: 'Basic Life', value: 'Employer-paid coverage' },
    { label: 'Voluntary Life', value: 'Up to 5x salary' },
    { label: 'STD', value: 'Benefits begin day 8' },
  ]},
  { id: 'retirement', name: '401(k) & Financial', icon: '📈', color: '#7C3AED', desc: 'Retirement savings plan with employer matching and financial wellness tools.', details: [
    { label: '401(k) Match', value: 'Up to 6% employer match' },
    { label: 'Vesting', value: '3-year graded vesting' },
    { label: 'NetBenefits', value: 'Fidelity online portal' },
  ]},
  { id: 'wellness', name: 'Wellness & EAP', icon: '🧘', color: '#0891B2', desc: 'Employee assistance, mental health support, and wellness programs.', details: [
    { label: 'EAP Sessions', value: 'Up to 8 free sessions' },
    { label: 'Gym Reimbursement', value: 'Up to $50/month' },
    { label: 'Telehealth', value: '$0 copay virtual visits' },
  ]},
  { id: 'pto', name: 'Paid Time Off', icon: '🏖️', color: '#E11D48', desc: 'Vacation, sick leave, and parental leave policies.', details: [
    { label: 'Vacation', value: '15-25 days based on tenure' },
    { label: 'Parental Leave', value: '8 weeks birth, 4 weeks all' },
    { label: 'Holidays', value: '11 company holidays' },
  ]},
  { id: 'contacts', name: 'Help Desk', icon: '📞', color: '#4338CA', desc: 'Contact information for HR, carriers, and benefits support.', details: [
    { label: 'HR Benefits', value: 'benefits@company.com' },
    { label: 'Benefits Hotline', value: '1-800-555-0199' },
    { label: 'Open Enrollment', value: 'Nov 1 – Nov 15, 2026' },
  ]},
];

export default function VirtualFair({ clientName }: { clientName: string }) {
  const [activeBooth, setActiveBooth] = useState<string | null>(null);
  const booth = BOOTHS.find(b => b.id === activeBooth);

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '40px 40px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 30% 50%, rgba(103,231,78,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,178,27,0.06) 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#FFB21B', marginBottom: '8px' }}>Virtual Benefits Fair</div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.5px' }}>{clientName}</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', marginTop: '8px' }}>2026 Open Enrollment · Click any booth to explore</p>
        </div>
      </div>

      {/* Lobby */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 40px' }}>
        {!activeBooth ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>Welcome to the fair! Choose a booth below.</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {BOOTHS.map(b => (
                <div key={b.id} onClick={() => setActiveBooth(b.id)} style={{
                  background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '28px 22px',
                  border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer',
                  textAlign: 'center', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${b.color}15`; e.currentTarget.style.borderColor = `${b.color}40`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '14px' }}>{b.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '16px', color: '#fff', marginBottom: '6px' }}>{b.name}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.5' }}>{b.desc}</div>
                  <div style={{ marginTop: '14px', padding: '6px 16px', background: `${b.color}20`, color: b.color, borderRadius: '20px', fontSize: '12px', fontWeight: 600, display: 'inline-block' }}>Visit Booth →</div>
                </div>
              ))}
            </div>
          </>
        ) : booth && (
          <div>
            <button onClick={() => setActiveBooth(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'rgba(255,255,255,0.6)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', marginBottom: '24px' }}>
              ← Back to Lobby
            </button>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: `1px solid ${booth.color}30`, overflow: 'hidden' }}>
              <div style={{ background: `linear-gradient(135deg, ${booth.color}20, ${booth.color}05)`, padding: '36px 32px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ fontSize: '48px' }}>{booth.icon}</div>
                <div>
                  <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#fff', margin: 0 }}>{booth.name}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '4px' }}>{booth.desc}</p>
                </div>
              </div>
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {booth.details.map(d => (
                    <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500 }}>{d.label}</span>
                      <span style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{d.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '24px', padding: '20px', background: `${booth.color}10`, borderRadius: '12px', border: `1px solid ${booth.color}20` }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: booth.color, marginBottom: '6px' }}>Need more information?</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>Contact HR Benefits at benefits@company.com or call 1-800-555-0199 during business hours.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: '24px 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Powered by Flimp Communications · {clientName} Virtual Benefits Fair 2026</div>
      </div>
    </div>
  );
}
