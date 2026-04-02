'use client';

const CATEGORIES = [
  { name: 'Medical Plans', icon: '🏥', items: [
    { title: 'Medical Plan Overview', type: 'Video', desc: 'Understanding your medical plan options' },
    { title: 'Network OAP Plan Details', type: 'PDF', desc: 'In-network and out-of-network coverage details' },
    { title: 'HDHP with HSA Guide', type: 'PDF', desc: 'High deductible plan with health savings account' },
    { title: 'How to Choose Your Plan', type: 'Video', desc: '5-minute guide to picking the right plan' },
  ]},
  { name: 'Dental & Vision', icon: '🦷', items: [
    { title: 'Dental PPO Plan Summary', type: 'PDF', desc: 'Guardian PPO and PPO Alternative comparison' },
    { title: 'Vision Benefits Overview', type: 'Video', desc: 'EyeMed vision plan details' },
    { title: 'Finding In-Network Providers', type: 'Link', desc: 'Provider directory search tool' },
  ]},
  { name: 'Spending Accounts', icon: '💰', items: [
    { title: 'HSA vs FSA Comparison', type: 'Video', desc: 'Understanding the difference between HSA and FSA' },
    { title: 'HSA Contribution Limits 2026', type: 'PDF', desc: 'IRS annual limits and catch-up contributions' },
    { title: 'Eligible Expenses Guide', type: 'PDF', desc: 'What qualifies as an eligible expense' },
  ]},
  { name: 'Life & Disability', icon: '🛡️', items: [
    { title: 'Life Insurance Overview', type: 'Video', desc: 'Basic and voluntary life insurance options' },
    { title: 'Short & Long Term Disability', type: 'PDF', desc: 'STD and LTD coverage details' },
    { title: 'Beneficiary Designation Form', type: 'PDF', desc: 'Designate or update your beneficiaries' },
  ]},
  { name: 'Retirement & Financial', icon: '📈', items: [
    { title: '401(k) Plan Overview', type: 'Video', desc: 'Enrollment, matching, and vesting schedule' },
    { title: 'Financial Wellness Resources', type: 'Link', desc: 'Tools and calculators for financial planning' },
  ]},
  { name: 'Wellness & EAP', icon: '🧘', items: [
    { title: 'Employee Assistance Program', type: 'Video', desc: 'Confidential support for personal and work issues' },
    { title: 'Wellness Program Guide', type: 'PDF', desc: 'Gym reimbursement, wellness challenges, and more' },
  ]},
];

export default function ResourceCenter({ clientName }: { clientName: string }) {
  const typeColors: Record<string, { bg: string; color: string }> = {
    Video: { bg: '#EDE9FE', color: '#7C3AED' },
    PDF: { bg: '#FEE2E2', color: '#DC2626' },
    Link: { bg: '#DBEAFE', color: '#2563EB' },
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1a365d, #2d3748)', padding: '48px 40px 40px', color: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>{clientName}</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>Benefits Resource Center</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginTop: '8px', maxWidth: '600px' }}>
            Everything you need to understand and manage your benefits in one place.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 40px' }}>
        {CATEGORIES.map(cat => (
          <div key={cat.name} style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '22px' }}>{cat.icon}</span>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1a365d', margin: 0 }}>{cat.name}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
              {cat.items.map(item => (
                <div key={item.title} style={{
                  background: '#fff', borderRadius: '12px', padding: '20px',
                  border: '1px solid #e2e8f0', cursor: 'pointer',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 600,
                      background: typeColors[item.type]?.bg || '#f0f0f0',
                      color: typeColors[item.type]?.color || '#666',
                    }}>{item.type}</span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: '#1a365d', marginBottom: '6px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.5' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ background: '#1a365d', padding: '24px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Powered by Flimp Communications · {clientName} Benefits Resource Center</div>
      </div>
    </div>
  );
}
