'use client';
import { useState } from 'react';

const BOOTHS = [
  {
    id: 'medical',
    name: 'Medical Plans',
    icon: '🏥',
    description: 'Aetna medical plans with $0 RWJBH care across all options.',
    video: 'Medical Plan: PPO Preferred Provider Organization',
    content: [
      'Medical plans are administered by Aetna. Care received within the RWJBarnabas Health system is completely free across all plans. Choose the plan that fits where you live and how you use care.',
      'Core Plan: Best for RWJBH system users in NJ. No out-of-network coverage, lowest cost. Flex Plan: For NJ residents wanting flexibility with out-of-network coverage at 60%. Out-of-Area Plan: For employees who live outside New Jersey.',
      'All plans feature tiered networks: Premier Tier (RWJBH/HTC facilities) with $0 copays, and extended networks for flexibility. Preventive care and behavioral health are covered at $0 copay across all tiers.'
    ],
    keyInfo: [
      { title: 'Premier Tier (RWJBH)', text: '$0 deductible, $0 copay, 0% coinsurance' },
      { title: 'Extended Tier (HTC)', text: '$1K/$2K deductible, $20 PCP/$40 specialist' },
      { title: 'Aetna Network', text: '$2.5K/$5K deductible, $40 PCP/$80 specialist' },
      { title: 'ER Copay', text: '$200 (all plans)' }
    ],
    contacts: [
      { label: 'Aetna Medical', value: '855.546.5415' },
      { label: 'Provider Search', value: 'aetnaresource.com/n/RWJBH' },
      { label: 'Benefits Center', value: '844.690.0920' }
    ]
  },
  {
    id: 'dental',
    name: 'Dental & Vision',
    icon: '😁',
    description: 'Delta Dental and EyeMed — comprehensive preventive care.',
    video: 'Dental Insurance Explained',
    content: [
      'Dental coverage through Delta Dental with two plan options: Base Plan (preventive 100%, basic 20%, major 50%, $1,500 annual max) and Buy-Up Plan (same coverage, $2,000 annual max, implants covered at 50%).',
      'Vision coverage through EyeMed includes $0 copay eye exams for PLUS providers, $175 frame allowance in-network, and $0 copay contact lenses. Once per calendar year for exams, lenses, and frames.',
      'Preventive dental (exams, cleanings 3x/year) is 100% covered with no deductible under both plans. Orthodontia available at 50% coverage with $1,500 (Base) or $2,000 (Buy-Up) lifetime maximum.'
    ],
    keyInfo: [
      { title: 'Preventive Dental', text: '100% coverage, no deductible' },
      { title: 'Basic Dental', text: '20% coinsurance after deductible' },
      { title: 'Eye Exams (EyeMed)', text: '$0 copay PLUS, $175 frame allowance' },
      { title: 'Contact Lenses', text: '$0 copay + $175 allowance' }
    ],
    contacts: [
      { label: 'Delta Dental', value: '800.810.5234' },
      { label: 'Find Dentist', value: 'deltadentalnj.com/RWJBH' },
      { label: 'EyeMed Vision', value: '866.800.5457' },
      { label: 'Find Provider', value: 'eyemed.com' }
    ]
  },
  {
    id: 'prescriptions',
    name: 'Prescriptions',
    icon: '💊',
    description: 'CVS Caremark with 3 convenient pharmacy options.',
    video: 'How to Stretch Your Healthcare Dollars',
    content: [
      'Prescription coverage through CVS Caremark is included automatically when you enroll in a medical plan. Three convenient options for maintenance medications: RWJBH on-site retail pharmacies, CVS Caremark Mail Service, or nearest CVS Pharmacy.',
      'Retail (30-day) copay structure: Generic $10, Preferred Brand $40, Non-Preferred Brand $80. Mail Order (90-day): Generic $20, Preferred Brand $100, Non-Preferred Brand $200. Specialty medications available with preferred brand at $200 or $0 via PrudentRx.',
      'Use your Caremark member portal to find pharmacies, check copay amounts, and manage your prescriptions. Many maintenance medications save money with 90-day mail order.'
    ],
    keyInfo: [
      { title: 'Retail Generic (30-day)', text: '$10 copay' },
      { title: 'Retail Brand (30-day)', text: '$40 preferred / $80 non-preferred' },
      { title: 'Mail Order (90-day)', text: '$20 generic / $100 brand / $200 non-preferred' },
      { title: 'Specialty (30-day)', text: '$200 or $0 via PrudentRx' }
    ],
    contacts: [
      { label: 'CVS Caremark', value: '833.290.5676' },
      { label: 'Member Portal', value: 'caremarkrxplaninfo.com/RWJBH' },
      { label: 'Find Pharmacy', value: 'cvs.com' }
    ]
  },
  {
    id: 'fsa',
    name: 'Spending Accounts',
    icon: '💰',
    description: 'Healthcare FSA ($3,400) and Dependent Care FSA ($7,500).',
    video: 'FSA Flexible Spending Account',
    content: [
      'Flexible Spending Accounts (FSAs) let you use pre-tax dollars to pay for eligible healthcare and dependent care expenses, reducing your taxable income. Two types available: Healthcare FSA (up to $3,400/year) and Dependent Care FSA (up to $7,500/year).',
      'Healthcare FSA: You may roll over up to $680 into 2027. Dependent Care FSA: No rollover — plan contributions carefully. Both have 31-day grace periods after year-end to use remaining funds. Changes only allowed during Annual Enrollment or after a Qualifying Life Event.',
      'Immediate access to your elected amount — even if not all contributions have been made yet. Use for copays, deductibles, prescriptions (healthcare FSA) or childcare, preschool, adult day care (dependent care FSA).'
    ],
    keyInfo: [
      { title: 'Healthcare FSA Limit', text: '$3,400 annually' },
      { title: 'Rollover to Next Year', text: 'Up to $680 (Healthcare only)' },
      { title: 'Dependent Care FSA', text: '$7,500 per year' },
      { title: 'Grace Period', text: '31 days after year-end to use funds' }
    ],
    contacts: [
      { label: 'Benefits Center', value: '844.690.0920' },
      { label: 'Enrollment Portal', value: 'RWJBHBenefits.com' }
    ]
  },
  {
    id: 'wellness',
    name: 'Wellness & EAP',
    icon: '🧠',
    description: 'Free counseling, Calm app, behavioral health support.',
    video: 'Employee Assistance Programs (EAP)',
    content: [
      'Employee Assistance Program (EAP) provides free, confidential counseling available 24/7 for you and your family — in-person and virtually. Covers life\'s challenges: stress, relationships, grief, substance use, and more.',
      'Calm App: Free premium subscription for you plus 5 family members or friends. Meditations, sleep stories, and stress-relief tools at no cost. All in-network behavioral health copays are waived for employees and enrolled family members on an RWJBH medical plan.',
      'Aetna Behavioral Health: Free provider search and appointments. BHealthy Wellness through Personify Health: personalized wellness coaching. All services confidential and integrated with your benefits.'
    ],
    keyInfo: [
      { title: 'EAP Counseling', text: 'Free 24/7 — call 800.300.0628' },
      { title: 'Calm App Subscription', text: 'Free premium for you + 5 guests' },
      { title: 'Behavioral Health Copay', text: '$0 in-network (waived)' },
      { title: 'BHealthy Wellness', text: 'Personalized coaching' }
    ],
    contacts: [
      { label: 'EAP Support Line', value: '800.300.0628' },
      { label: 'Get Calm Free', value: 'calm.com/b2b/RWJBarnabasHealth' },
      { label: 'Aetna Providers', value: 'aetnaresource.com/n/RWJBH' },
      { label: 'BHealthy Wellness', value: '888.671.9395' }
    ]
  },
  {
    id: 'financial',
    name: 'Financial & Retirement',
    icon: '📈',
    description: '401(k) with 50% match, Life Insurance, Student Loan Support.',
    video: 'How to Optimize Your HSA/Retirement Savings',
    content: [
      '401(k) Retirement Plan through Fidelity: 50% employer match on the first 6% you contribute (contribute 6%, RWJBH adds 3% = 9% total). Auto-enrollment at 3% after 30 days. 3-year vesting period. Annual non-elective contribution available based on system results.',
      'Life Insurance: Basic Life Insurance (auto, employer-paid) — 1.5x salary, up to $500k at no cost. Long-Term Disability (auto, employer-paid) — 60% of salary, up to $10k/month. Voluntary Life Insurance and Spouse/Child Life options available for additional coverage.',
      'Additional Benefits: Tuition Reimbursement (up to $5,250/year via ISTS), Student Loan Navigation (Savi — personalized support), Employee Discounts (PerkSpot — travel, dining, electronics), Purchasing Program (payroll deduction purchases).'
    ],
    keyInfo: [
      { title: '401(k) Employer Match', text: '50% on first 6% you contribute' },
      { title: 'Auto-Enrollment', text: '3% after 30 days' },
      { title: 'Basic Life Insurance', text: '1.5x salary, up to $500k — FREE' },
      { title: 'Long-Term Disability', text: '60% salary, up to $10k/month — FREE' }
    ],
    contacts: [
      { label: 'Fidelity 401(k)', value: '800.513.5015' },
      { label: 'NetBenefits Portal', value: 'netbenefits.com/RWJBarnabasHealth' },
      { label: 'Benefits Enrollment', value: '844.690.0920' }
    ]
  },
  {
    id: 'pto',
    name: 'Paid Time Off',
    icon: '🏖️',
    description: 'Vacation accrual, 8 holidays, 12 weeks parental leave.',
    video: 'Family and Medical Leave Act (FMLA)',
    content: [
      'Vacation accrual for 40-hr/week employees: Starting at 120 hours (15 days) for hourly staff and 160 hours (20 days) for salaried. Increases with tenure: 136-176 hours at 3 years, up to 200-240 hours at 20+ years.',
      '8 Paid Holidays per year: 7 fixed (New Year\'s Day, MLK Jr. Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, Christmas) plus 1 flexible day you can use anytime. 40 hours of New Jersey Earned Sick Leave (NJESL) frontloaded January 1 each year.',
      'Paid Parental Leave: 12 weeks at 100% pay for all eligible new parents (birthing and non-birthing), combined with NJ TDI/FLI. Must have 1 year continuous service. Paid Short-Term Disability: up to 26 weeks at 66⅔% pay.'
    ],
    keyInfo: [
      { title: 'Starting Vacation', text: '120 hrs (hourly) / 160 hrs (salaried)' },
      { title: 'Paid Holidays', text: '8 per year (7 fixed + 1 flex day)' },
      { title: 'Sick Leave', text: '40 hours NJESL — frontloaded annually' },
      { title: 'Parental Leave', text: '12 weeks at 100% pay' }
    ],
    contacts: [
      { label: 'HR Benefits Center', value: '844.690.0920' },
      { label: 'Leave Questions', value: 'RWJBHBenefits.com' }
    ]
  },
  {
    id: 'contacts',
    name: 'Contacts & Resources',
    icon: '📞',
    description: 'Key benefits contacts and enrollment information.',
    video: '',
    content: [
      'RWJBH Benefits Center: Your first stop for enrollment questions, life events, and account management. Available at 844.690.0920 or RWJBHBenefits.com.',
      'Care Navigation & Appointments: 844.424.2628 or RWJBHTotalWellbeing.com for scheduling and support. All plan documents and detailed information available through official plan documents.',
      'Voluntary Benefits through Aon: 844.428.6672 or mybenefits.aon.com. Questions about any benefit? Contact the Benefits Center — they\'re here to help you understand your options and make the right choices for you and your family.'
    ],
    keyInfo: [
      { title: 'Benefits Enrollment', text: '844.690.0920' },
      { title: 'Care Navigation', text: '844.424.2628' },
      { title: 'Website', text: 'RWJBHBenefits.com' },
      { title: 'EAP (24/7)', text: '800.300.0628' }
    ],
    contacts: [
      { label: 'Benefits Center', value: '844.690.0920' },
      { label: 'Care Navigation', value: '844.424.2628' },
      { label: 'Enrollment Portal', value: 'RWJBHBenefits.com' }
    ]
  }
];

const SECTIONS = ['Entrance', 'Exhibit Hall', 'Medical Plans', 'Dental & Vision', 'Prescriptions', 'Spending Accounts', 'Wellness & EAP', 'Financial & Retirement', 'Paid Time Off', 'Contacts'];

export default function VirtualFair({ clientName }: { clientName: string }) {
  const [activeSection, setActiveSection] = useState('Entrance');
  const [activeBooth, setActiveBooth] = useState<string | null>(null);

  const boothMap: { [key: string]: string } = {
    'Medical Plans': 'medical',
    'Dental & Vision': 'dental',
    'Prescriptions': 'prescriptions',
    'Spending Accounts': 'fsa',
    'Wellness & EAP': 'wellness',
    'Financial & Retirement': 'financial',
    'Paid Time Off': 'pto',
    'Contacts': 'contacts',
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    if (boothMap[section]) {
      setActiveBooth(boothMap[section]);
    } else {
      setActiveBooth(null);
    }
  };

  const booth = BOOTHS.find(b => b.id === activeBooth);

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation Bar */}
      <nav style={{
        background: '#1B2F5C',
        borderBottom: '2px solid #0F1F3F',
        padding: '0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', height: '62px', paddingLeft: '20px', paddingRight: '20px', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0', flex: 1, overflowX: 'auto', scrollBehavior: 'smooth' }}>
            {SECTIONS.map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '16px 12px',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: activeSection === section ? '#4FC3F7' : '#B0BEC5',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  borderBottom: activeSection === section ? '3px solid #4FC3F7' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0' }}>
        {/* Entrance Section */}
        {activeSection === 'Entrance' && !activeBooth && (
          <div>
            {/* Hero Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #1B2F5C 0%, #0F1F3F 100%)',
              color: '#ffffff',
              padding: '80px 40px',
              textAlign: 'center'
            }}>
              <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 16px 0', letterSpacing: '-1px' }}>
                {clientName} Benefits Fair
              </h1>
              <p style={{ fontSize: '18px', fontWeight: 400, margin: '0 0 8px 0', opacity: 0.9 }}>
                2026 Virtual Open Enrollment
              </p>
              <p style={{ fontSize: '14px', margin: '8px 0 24px 0', opacity: 0.85 }}>
                Explore your benefits options and make informed decisions about your coverage
              </p>
              <button
                onClick={() => handleNavClick('Exhibit Hall')}
                style={{
                  background: '#4FC3F7',
                  color: '#1B2F5C',
                  border: 'none',
                  padding: '14px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(79, 195, 247, 0.4)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                Enter Exhibit Hall
              </button>
            </div>

            {/* Info Section */}
            <div style={{ padding: '60px 40px', background: '#f5f5f5' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 24px 0', color: '#1B2F5C' }}>
                  Important Information
                </h2>
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0', color: '#1B2F5C' }}>
                      Enrollment Timeline
                    </h3>
                    <p style={{ fontSize: '14px', color: '#555555', margin: 0, lineHeight: 1.6 }}>
                      You have 30 days from your hire date to enroll. All eligible employees must review their benefits options and make elections. Changes will be effective per your hire date.
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0', color: '#1B2F5C' }}>
                      Eligibility
                    </h3>
                    <p style={{ fontSize: '14px', color: '#555555', margin: 0, lineHeight: 1.6 }}>
                      All full-time employees (30+ hours per week) are eligible for benefits. Contact the Benefits Center at 844.690.0920 or visit RWJBHBenefits.com for your specific eligibility status.
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <button
                      style={{
                        background: '#1B2F5C',
                        color: '#ffffff',
                        border: 'none',
                        padding: '12px 16px',
                        fontSize: '14px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#0F1F3F'}
                      onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#1B2F5C'}
                    >
                      View Benefits Guide
                    </button>
                    <button
                      style={{
                        background: '#4FC3F7',
                        color: '#1B2F5C',
                        border: 'none',
                        padding: '12px 16px',
                        fontSize: '14px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#29B6F6'}
                      onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#4FC3F7'}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exhibit Hall / Booth Grid */}
        {(activeSection === 'Exhibit Hall' || (activeSection !== 'Entrance' && !activeBooth)) && !activeBooth && (
          <div style={{ padding: '60px 40px', background: '#ffffff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 12px 0', color: '#1B2F5C' }}>
                Exhibit Hall
              </h2>
              <p style={{ fontSize: '14px', color: '#666666', margin: '0 0 40px 0' }}>
                Click on any booth below to explore your benefits options
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {BOOTHS.map(b => (
                  <div
                    key={b.id}
                    onClick={() => setActiveBooth(b.id)}
                    style={{
                      background: '#ffffff',
                      border: '2px solid #E3F2FD',
                      borderRadius: '8px',
                      padding: '28px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = '#4FC3F7';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 16px rgba(27, 47, 92, 0.12)';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = '#E3F2FD';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>{b.icon}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0', color: '#1B2F5C' }}>
                      {b.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#666666', margin: 0, lineHeight: 1.5 }}>
                      {b.description}
                    </p>
                    <div style={{ marginTop: '16px', padding: '8px 12px', background: '#E3F2FD', color: '#1B2F5C', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>
                      View Details →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Individual Booth Section */}
        {activeBooth && booth && (
          <div style={{ padding: '60px 40px', background: '#f5f5f5' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {/* Back Button */}
              <button
                onClick={() => {
                  setActiveBooth(null);
                  setActiveSection('Exhibit Hall');
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1B2F5C',
                  padding: '0 0 24px 0',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.opacity = '0.7'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.opacity = '1'}
              >
                ← Back to Exhibit Hall
              </button>

              {/* Booth Header */}
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '40px', marginBottom: '32px', border: '1px solid #E3F2FD' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '64px' }}>{booth.icon}</div>
                  <div>
                    <h1 style={{ fontSize: '40px', fontWeight: 800, margin: '0 0 12px 0', color: '#1B2F5C' }}>
                      {booth.name}
                    </h1>
                    <p style={{ fontSize: '16px', color: '#666666', margin: 0, lineHeight: 1.6 }}>
                      {booth.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ display: 'grid', gap: '32px' }}>
                {/* Description */}
                <div style={{ background: '#ffffff', borderRadius: '8px', padding: '32px', border: '1px solid #E3F2FD' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 16px 0', color: '#1B2F5C' }}>
                    Overview
                  </h2>
                  <div style={{ display: 'grid', gap: '16px' }}>
                    {booth.content.map((paragraph, idx) => (
                      <p key={idx} style={{ fontSize: '14px', color: '#555555', margin: 0, lineHeight: 1.7 }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Video Thumbnail */}
                {booth.video && (
                  <div style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E3F2FD' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #1B2F5C 0%, #0F1F3F 100%)',
                      padding: '80px 40px',
                      textAlign: 'center',
                      position: 'relative',
                      minHeight: '300px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          width: '80px',
                          height: '80px',
                          background: 'rgba(79, 195, 247, 0.3)',
                          borderRadius: '50%',
                          margin: '0 auto 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLDivElement).style.background = 'rgba(79, 195, 247, 0.45)';
                          (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLDivElement).style.background = 'rgba(79, 195, 247, 0.3)';
                          (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                        }}
                        >
                          <div style={{ fontSize: '32px' }}>▶</div>
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                          {booth.video}
                        </h3>
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: '8px 0 0 0' }}>
                          Click to watch video
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Key Information */}
                <div style={{ background: '#ffffff', borderRadius: '8px', padding: '32px', border: '1px solid #E3F2FD' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 20px 0', color: '#1B2F5C' }}>
                    Key Information
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {booth.keyInfo.map((info, idx) => (
                      <div key={idx} style={{ borderLeft: '4px solid #4FC3F7', paddingLeft: '16px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 6px 0', color: '#1B2F5C' }}>
                          {info.title}
                        </h4>
                        <p style={{ fontSize: '13px', color: '#666666', margin: 0 }}>
                          {info.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contacts */}
                <div style={{ background: '#ffffff', borderRadius: '8px', padding: '32px', border: '1px solid #E3F2FD' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 20px 0', color: '#1B2F5C' }}>
                    Contact Information
                  </h2>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {booth.contacts.map((contact, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: idx < booth.contacts.length - 1 ? '1px solid #E3F2FD' : 'none', flexWrap: 'wrap', gap: '12px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#1B2F5C' }}>
                          {contact.label}
                        </span>
                        <span style={{ fontSize: '14px', color: '#4FC3F7', fontWeight: 600 }}>
                          {contact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        background: '#f5f5f5',
        borderTop: '2px solid #E3F2FD',
        padding: '32px 40px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <p style={{ fontSize: '12px', color: '#999999', margin: 0 }}>
          Powered by Flimp® • {clientName} Virtual Benefits Fair 2026 • Contact Benefits Center: 844.690.0920
        </p>
      </footer>
    </div>
  );
}
