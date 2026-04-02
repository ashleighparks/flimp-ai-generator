'use client';
import { useState } from 'react';

const BOOTHS = [
  {
    id: 'medical',
    name: 'Medical Plans',
    icon: '🏥',
    description: 'Explore your medical plan options and understand coverage details.',
    video: 'Understanding Your Medical Options',
    content: [
      'Our medical plans are designed to provide comprehensive healthcare coverage with options to fit different needs and budgets.',
      'You can choose between our preferred provider network (OAP) or high-deductible health plan (HDHP) with Health Savings Account eligibility.',
      'All plans include preventive care at no cost, access to in-network providers, and transparent pricing structures.'
    ],
    keyInfo: [
      { title: 'Network OAP', text: '$25/$40 copay structure with annual deductible' },
      { title: 'HDHP Option', text: 'High deductible with Health Savings Account eligible' },
      { title: 'Coverage', text: '80/20 coinsurance after deductible' }
    ],
    contacts: [
      { label: 'Plan Administrator', value: 'benefits@company.com' },
      { label: 'Benefits Hotline', value: '1-800-555-0199' }
    ]
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: '💊',
    description: 'Access affordable prescription drug coverage and programs.',
    video: 'Pharmacy Benefits Guide',
    content: [
      'Our pharmacy benefit plan offers comprehensive coverage for both brand-name and generic medications.',
      'We partner with a nationwide network of pharmacies to ensure convenient access to your medications.',
      'Copayments vary by drug tier, with generic medications available at the lowest cost.'
    ],
    keyInfo: [
      { title: 'Generic Copay', text: '$10 per prescription' },
      { title: 'Brand Copay', text: '$30 per prescription' },
      { title: 'Network Pharmacies', text: '50,000+ locations nationwide' }
    ],
    contacts: [
      { label: 'Pharmacy Support', value: '1-800-555-0199' },
      { label: 'Email', value: 'pharmacy@benefits.com' }
    ]
  },
  {
    id: 'dental',
    name: 'Dental',
    icon: '🦷',
    description: 'Maintain your dental health with comprehensive coverage.',
    video: 'Your Dental Benefits Explained',
    content: [
      'Our dental plans provide preventive, basic, and major coverage through a large network of dentists.',
      'Preventive care including cleanings and exams is covered at 100% with in-network providers.',
      'Basic and major services are covered at 80% and 50% respectively after meeting your annual deductible.'
    ],
    keyInfo: [
      { title: 'Preventive Care', text: '100% coverage, no deductible' },
      { title: 'Basic Services', text: '80% coverage after $50 deductible' },
      { title: 'Network Dentists', text: '200,000+ participating providers' }
    ],
    contacts: [
      { label: 'Dental Plan Support', value: '1-800-555-0199' },
      { label: 'Find a Dentist', value: 'www.dentalnetwork.com' }
    ]
  },
  {
    id: 'vision',
    name: 'Vision',
    icon: '👓',
    description: 'Get coverage for eye exams, glasses, and contacts.',
    video: 'Vision Coverage Overview',
    content: [
      'Our vision plan covers routine eye exams, corrective lenses, and contact lens fittings.',
      'You have access to thousands of optometrists and ophthalmologists nationwide.',
      'Annual allowances help cover the cost of frames, lenses, or contact lenses.'
    ],
    keyInfo: [
      { title: 'Eye Exam', text: '$0 copay in-network' },
      { title: 'Frames Allowance', text: '$150 every 24 months' },
      { title: 'Lens Coverage', text: '100% standard lenses' }
    ],
    contacts: [
      { label: 'Vision Support', value: '1-800-555-0199' },
      { label: 'Find a Provider', value: 'www.visionnetwork.com' }
    ]
  },
  {
    id: 'hsa',
    name: 'HSA',
    icon: '🏦',
    description: 'Save pre-tax dollars for qualified health expenses.',
    video: 'Health Savings Account Basics',
    content: [
      'A Health Savings Account (HSA) allows you to set aside pre-tax dollars to pay for qualified medical expenses.',
      'HSAs are only available if you enroll in a high-deductible health plan.',
      'Unlike FSAs, HSA funds roll over year to year and can be invested for long-term health savings.'
    ],
    keyInfo: [
      { title: '2026 Individual Limit', text: '$4,300' },
      { title: '2026 Family Limit', text: '$8,550' },
      { title: 'Employer Contribution', text: 'Up to $1,000' }
    ],
    contacts: [
      { label: 'HSA Administrator', value: 'hsa@benefits.com' },
      { label: 'Support Line', value: '1-800-555-0199' }
    ]
  },
  {
    id: 'fsa',
    name: 'FSA',
    icon: '💰',
    description: 'Flexible Spending Account for healthcare and dependent care.',
    video: 'Flexible Spending Account Guide',
    content: [
      'A Flexible Spending Account (FSA) lets you use pre-tax dollars to pay for eligible healthcare and dependent care expenses.',
      'You elect an amount annually during open enrollment that is deducted from your paycheck throughout the year.',
      'FSAs offer immediate access to your elected amount, even if not all contributions have been made.'
    ],
    keyInfo: [
      { title: 'Healthcare FSA Limit', text: '$3,300 annually' },
      { title: 'Dependent Care FSA', text: '$5,000 per year' },
      { title: 'Grace Period', text: '2.5 months to use funds' }
    ],
    contacts: [
      { label: 'FSA Support', value: 'fsa@benefits.com' },
      { label: 'Phone', value: '1-800-555-0199' }
    ]
  },
  {
    id: 'retirement',
    name: 'Retirement',
    icon: '📈',
    description: 'Build your retirement savings with our 401(k) plan.',
    video: '401(k) Plan Overview',
    content: [
      'Our 401(k) plan helps you save for retirement with tax advantages and employer matching.',
      'You can contribute up to the annual IRS limit and choose from a diverse selection of investment options.',
      'The plan features low-cost index funds and target-date funds appropriate for your retirement timeline.'
    ],
    keyInfo: [
      { title: 'Employer Match', text: '100% match up to 6% of salary' },
      { title: 'Vesting', text: '3-year graded vesting schedule' },
      { title: '2026 Limit', text: '$23,500 employee contribution' }
    ],
    contacts: [
      { label: 'Plan Administrator', value: 'fidelity@company.com' },
      { label: 'NetBenefits Portal', value: 'www.netbenefits.com' }
    ]
  },
  {
    id: 'life',
    name: 'Life Insurance',
    icon: '🛡️',
    description: 'Protect your family with life and accidental death insurance.',
    video: 'Life Insurance & AD&D Benefits',
    content: [
      'Basic life insurance is provided by the company at no cost to all eligible employees.',
      'Voluntary life insurance options are available at competitive group rates to supplement your basic coverage.',
      'Accidental death and dismemberment coverage is also available for additional protection.'
    ],
    keyInfo: [
      { title: 'Basic Life', text: 'Employer-paid, equal to 1x salary' },
      { title: 'Voluntary Life', text: 'Available up to 5x your salary' },
      { title: 'AD&D Coverage', text: 'Integrated with life insurance' }
    ],
    contacts: [
      { label: 'Life Insurance', value: 'life@benefits.com' },
      { label: 'Claims Support', value: '1-800-555-0199' }
    ]
  },
  {
    id: 'disability',
    name: 'Disability',
    icon: '🤝',
    description: 'Income protection through short and long-term disability.',
    video: 'Short & Long Term Disability',
    content: [
      'Our disability plans protect your income if you become unable to work due to illness or injury.',
      'Short-term disability provides coverage for temporary disabilities, while long-term disability protects you for extended absences.',
      'Most plans are company-paid, ensuring coverage regardless of whether you enroll.'
    ],
    keyInfo: [
      { title: 'Short-Term Disability', text: 'Benefits start on day 8' },
      { title: 'Long-Term Disability', text: '60% income replacement' },
      { title: 'Benefit Period', text: 'To age 65 or recovery' }
    ],
    contacts: [
      { label: 'Disability Claims', value: '1-800-555-0199' },
      { label: 'Claims Portal', value: 'www.disabilityclaims.com' }
    ]
  },
  {
    id: 'eap',
    name: 'EAP',
    icon: '🧠',
    description: 'Employee Assistance Program for mental health and wellness.',
    video: 'Employee Assistance Program',
    content: [
      'The Employee Assistance Program (EAP) provides confidential counseling and support services for you and your family.',
      'Services include counseling for personal, family, and work-related issues, as well as referrals to specialists.',
      'All EAP services are provided at no cost to you with a commitment to complete confidentiality.'
    ],
    keyInfo: [
      { title: 'Counseling Sessions', text: 'Up to 8 free sessions per issue' },
      { title: 'Coverage', text: 'Employee and family members' },
      { title: 'Availability', text: '24/7 phone support' }
    ],
    contacts: [
      { label: 'EAP Support Line', value: '1-800-555-0199' },
      { label: 'EAP Portal', value: 'www.eap.benefits.com' }
    ]
  }
];

const SECTIONS = ['Entrance', 'Exhibit Hall', 'Medical Plans', 'Pharmacy', 'Dental', 'Vision', 'HSA', 'FSA', 'Retirement', 'Life Insurance', 'Disability', 'EAP', 'Contacts'];

export default function VirtualFair({ clientName }: { clientName: string }) {
  const [activeSection, setActiveSection] = useState('Entrance');
  const [activeBooth, setActiveBooth] = useState<string | null>(null);

  const boothMap: { [key: string]: string } = {
    'Medical Plans': 'medical',
    'Pharmacy': 'pharmacy',
    'Dental': 'dental',
    'Vision': 'vision',
    'HSA': 'hsa',
    'FSA': 'fsa',
    'Retirement': 'retirement',
    'Life Insurance': 'life',
    'Disability': 'disability',
    'EAP': 'eap',
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
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        padding: '0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', height: '60px', paddingLeft: '20px', paddingRight: '20px', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0', flex: 1, overflowX: 'auto', scrollBehavior: 'smooth' }}>
            {SECTIONS.map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '16px 14px',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: activeSection === section ? '#3880EE' : '#170643',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  borderBottom: activeSection === section ? '3px solid #3880EE' : 'none',
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
              background: 'linear-gradient(135deg, #3880EE 0%, #170643 100%)',
              color: '#ffffff',
              padding: '80px 40px',
              textAlign: 'center'
            }}>
              <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 16px 0', letterSpacing: '-1px' }}>
                {clientName}
              </h1>
              <p style={{ fontSize: '18px', fontWeight: 400, margin: '0 0 8px 0', opacity: 0.9 }}>
                2026 Open Enrollment Benefits Fair
              </p>
              <p style={{ fontSize: '14px', margin: '8px 0 24px 0', opacity: 0.8 }}>
                Explore your benefits options and make informed decisions about your coverage
              </p>
              <button
                onClick={() => handleNavClick('Exhibit Hall')}
                style={{
                  background: '#ffffff',
                  color: '#3880EE',
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
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(56, 128, 238, 0.3)';
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
            <div style={{ padding: '60px 40px', background: '#f9fafb' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 24px 0', color: '#170643' }}>
                  Important Information
                </h2>
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0', color: '#170643' }}>
                      Enrollment Reminder
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: 1.6 }}>
                      Open enrollment runs from November 1 through November 15, 2026. All eligible employees must review their benefits options and make elections during this window. Changes will be effective January 1, 2027.
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 8px 0', color: '#170643' }}>
                      Eligibility
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: 1.6 }}>
                      All full-time employees (30+ hours per week) are eligible for benefits. Part-time employees may be eligible for certain plans. Please contact HR for your specific eligibility status.
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <button
                      style={{
                        background: '#3880EE',
                        color: '#ffffff',
                        border: 'none',
                        padding: '12px 16px',
                        fontSize: '14px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#2563d9'}
                      onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#3880EE'}
                    >
                      Benefits Guide
                    </button>
                    <button
                      style={{
                        background: '#170643',
                        color: '#ffffff',
                        border: 'none',
                        padding: '12px 16px',
                        fontSize: '14px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#2a0d5e'}
                      onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#170643'}
                    >
                      Enrollment Portal
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
              <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 12px 0', color: '#170643' }}>
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
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '28px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = '#3880EE';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(56, 128, 238, 0.15)';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>{b.icon}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0', color: '#170643' }}>
                      {b.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#666666', margin: 0, lineHeight: 1.5 }}>
                      {b.description}
                    </p>
                    <div style={{ marginTop: '16px', padding: '8px 12px', background: '#f3f4f6', color: '#3880EE', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>
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
          <div style={{ padding: '60px 40px', background: '#f9fafb' }}>
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
                  color: '#3880EE',
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
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '40px', marginBottom: '32px', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '64px' }}>{booth.icon}</div>
                  <div>
                    <h1 style={{ fontSize: '40px', fontWeight: 800, margin: '0 0 12px 0', color: '#170643' }}>
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
                <div style={{ background: '#ffffff', borderRadius: '8px', padding: '32px', border: '1px solid #e5e7eb' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 16px 0', color: '#170643' }}>
                    Overview
                  </h2>
                  <div style={{ display: 'grid', gap: '16px' }}>
                    {booth.content.map((paragraph, idx) => (
                      <p key={idx} style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: 1.7 }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Video Thumbnail */}
                <div style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #3880EE 0%, #170643 100%)',
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
                        background: 'rgba(255,255,255,0.25)',
                        borderRadius: '50%',
                        margin: '0 auto 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.35)';
                        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.25)';
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

                {/* Key Information */}
                <div style={{ background: '#ffffff', borderRadius: '8px', padding: '32px', border: '1px solid #e5e7eb' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 20px 0', color: '#170643' }}>
                    Key Information
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {booth.keyInfo.map((info, idx) => (
                      <div key={idx} style={{ borderLeft: '3px solid #3880EE', paddingLeft: '16px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 6px 0', color: '#170643' }}>
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
                <div style={{ background: '#ffffff', borderRadius: '8px', padding: '32px', border: '1px solid #e5e7eb' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 20px 0', color: '#170643' }}>
                    Contact Information
                  </h2>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {booth.contacts.map((contact, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: idx < booth.contacts.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#170643' }}>
                          {contact.label}
                        </span>
                        <span style={{ fontSize: '14px', color: '#3880EE', fontWeight: 600 }}>
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
        background: '#f9fafb',
        borderTop: '1px solid #e5e7eb',
        padding: '32px 40px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <p style={{ fontSize: '12px', color: '#999999', margin: 0 }}>
          Powered by Flimp® • {clientName} Virtual Benefits Fair 2026
        </p>
      </footer>
    </div>
  );
}
