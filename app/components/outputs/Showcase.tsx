'use client';

const SECTIONS = [
  { name: 'Medical Plans', icon: '🏥', color: '#2563EB', content: 'Choose from Network OAP, HDHP with HSA, or National OAP 750 plans. All plans include preventive care at 100% coverage with in-network providers.', highlights: ['$25/$40 PCP/Specialist copay', '80/20 coinsurance split', '$750-$1,500 individual deductible'] },
  { name: 'Dental & Vision', icon: '🦷', color: '#059669', content: 'Guardian PPO dental with two plan options, plus EyeMed vision coverage including routine exams, frames, and lenses.', highlights: ['100% preventive coverage', '$0 copay vision exams', 'Orthodontia coverage available'] },
  { name: 'Prescriptions', icon: '💊', color: '#7C3AED', content: 'Comprehensive prescription coverage with tiered pricing for generic, brand, and specialty medications at retail and mail-order pharmacies.', highlights: ['$15/$35/$60 retail copays', 'Mail-order savings available', 'Specialty up to $100'] },
  { name: 'Spending Accounts', icon: '💰', color: '#D97706', content: 'Tax-advantaged HSA and FSA accounts to help you save on healthcare and dependent care expenses throughout the year.', highlights: ['HSA: $4,300 single / $8,550 family', 'FSA: Dependent care up to $5,000', '$1,000 catch-up for 55+'] },
  { name: 'Life & Disability', icon: '🛡️', color: '#DC2626', content: 'Employer-paid basic life, AD&D, and disability coverage, plus voluntary options to increase your protection.', highlights: ['Basic life employer-paid', 'Vol. life up to 5x salary', 'STD & LTD coverage included'] },
  { name: 'Emotional Wellbeing', icon: '🧠', color: '#0891B2', content: 'Comprehensive mental health and wellness support including EAP, telehealth counseling, and wellness programs.', highlights: ['8 free EAP sessions', '$0 telehealth visits', 'Wellness challenges & rewards'] },
  { name: 'Financial & Retirement', icon: '📈', color: '#4338CA', content: '401(k) retirement plan with employer matching, plus financial wellness tools and education resources.', highlights: ['Up to 6% employer match', '3-year graded vesting', 'Fidelity NetBenefits portal'] },
  { name: 'Paid Time Off', icon: '🏖️', color: '#E11D48', content: 'Generous PTO policy including vacation, sick leave, parental leave, and company holidays.', highlights: ['15-25 vacation days', '8 weeks parental leave', '11 company holidays'] },
  { name: 'Contacts & Resources', icon: '📞', color: '#6D28D9', content: 'Get help when you need it. Access HR, carriers, and benefits support through multiple channels.', highlights: ['HR: benefits@company.com', 'Hotline: 1-800-555-0199', 'Open Enrollment: Nov 1-15'] },
];

export default function Showcase({ clientName }: { clientName: string }) {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a365d 0%, #2d4a7a 50%, #3b82f6 100%)', padding: '60px 40px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>2026 Benefits</div>
          <h1 style={{ fontSize: '40px', fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: '-1px' }}>{clientName}<br />Benefits Showcase</h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', marginTop: '16px', maxWidth: '550px', lineHeight: '1.6' }}>
            Your comprehensive guide to understanding and maximizing your employee benefits package.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px' }}>
        {SECTIONS.map((s, i) => (
          <div key={s.name} style={{ marginBottom: '40px', display: 'flex', gap: '28px', alignItems: i % 2 === 0 ? 'flex-start' : 'flex-start', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
            {/* Icon */}
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: `${s.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', flexShrink: 0 }}>{s.icon}</div>
            {/* Content */}
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1a365d', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {s.name}
                <span style={{ width: '40px', height: '2px', background: s.color, display: 'inline-block', borderRadius: '1px' }} />
              </h2>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '14px' }}>{s.content}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {s.highlights.map(h => (
                  <span key={h} style={{ padding: '5px 12px', background: `${s.color}08`, border: `1px solid ${s.color}20`, borderRadius: '8px', fontSize: '12px', color: s.color, fontWeight: 500 }}>{h}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ background: '#1a365d', padding: '32px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Powered by Flimp Communications · {clientName} 2026 Benefits Showcase</div>
      </div>
    </div>
  );
}
