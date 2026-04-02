'use client';

import { useState } from 'react';

const RWJBH_COLORS = {
  navy: '#1B2F5C',
  red: '#CC1F34',
  lightBg: '#EBF0F5',
  tagBg: '#E8F0FB',
};

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'medical', label: 'Medical Plans' },
  { id: 'dental', label: 'Dental & Vision' },
  { id: 'prescriptions', label: 'Prescriptions' },
  { id: 'spending', label: 'Spending Accounts' },
  { id: 'life', label: 'Life & Disability' },
  { id: 'retirement', label: 'Retirement' },
  { id: 'wellness', label: 'Wellness & EAP' },
  { id: 'contacts', label: 'Contacts' },
];

const CARRIERS = {
  aetna: {
    name: 'Aetna',
    phone: '855-546-5415',
    portal: 'https://www.aetnaresource.com/n/RWJBH',
  },
  delta: {
    name: 'Delta Dental',
    phone: '800-810-5234',
    portal: 'https://www.deltadentalnj.com/RWJBH',
  },
  eyemed: {
    name: 'EyeMed',
    phone: '866-800-5457',
    portal: 'https://www.eyemed.com',
  },
  cvs: {
    name: 'CVS Caremark',
    phone: '833-290-5676',
    portal: 'https://caremarkrxplaninfo.com/RWJBH',
  },
  fidelity: {
    name: 'Fidelity',
    phone: '800-513-5015',
    portal: 'https://www.netbenefits.com/RWJBarnabasHealth',
  },
  metlife: {
    name: 'MetLife',
    phone: '866-450-2263',
    portal: 'https://www.metlife.com',
  },
};

interface TabContent {
  [key: string]: {
    title: string;
    description: string;
    videos: Array<{ title: string; duration: string }>;
    documents: Array<{ title: string; description: string }>;
    links: Array<{ label: string; carrier: keyof typeof CARRIERS; type: string }>;
    keyInfo?: Array<{ label: string; value: string }>;
  };
}

const TAB_CONTENT: TabContent = {
  home: {
    title: 'Welcome to Your 2026 Benefits',
    description: 'Everything you need to understand and maximize your benefits. Start here to learn about your coverage options.',
    videos: [
      { title: 'Benefits Key Terms Explained', duration: '5:32' },
      { title: 'How to Use Your Benefits', duration: '3:45' },
    ],
    documents: [
      { title: 'Open Enrollment Checklist', description: 'Step-by-step guide to making your benefits elections' },
      { title: 'Benefits Summary Guide', description: 'Overview of all available benefits' },
    ],
    links: [
      { label: 'Enroll at RWJBHBenefits.com', carrier: 'aetna', type: 'enrollment' },
      { label: 'Total Wellbeing Site', carrier: 'aetna', type: 'wellness' },
    ],
  },
  medical: {
    title: 'Medical Plans',
    description: 'Medical plans are administered by Aetna. Care received within the RWJBarnabas Health system is completely free across all plans.',
    videos: [
      { title: 'Understanding Your Medical Plan Options', duration: '4:32' },
      { title: 'Network vs Out-of-Network Coverage', duration: '3:15' },
      { title: 'How Deductibles Work', duration: '2:48' },
    ],
    documents: [
      { title: 'Medical Plan Comparison Chart', description: 'Side-by-side comparison of all available plans' },
      { title: 'In-Network Provider Directory', description: 'Find doctors, hospitals, and specialists' },
      { title: 'Plan Summary of Benefits', description: 'Copays, deductibles, and coverage details' },
    ],
    links: [
      { label: 'Aetna Provider Search', carrier: 'aetna', type: 'provider' },
      { label: 'Aetna Member Portal', carrier: 'aetna', type: 'portal' },
      { label: 'Check Claim Status', carrier: 'aetna', type: 'claims' },
    ],
    keyInfo: [
      { label: 'Plans Available', value: '3 Tiers' },
      { label: 'Deductible Range', value: '$500 - $2,000' },
      { label: 'In-Network Care', value: 'Free at RWJBarnabas' },
      { label: 'Out-of-Pocket Max', value: 'Varies by plan' },
    ],
  },
  dental: {
    title: 'Dental & Vision Benefits',
    description: 'Comprehensive dental coverage through Delta Dental and vision benefits through EyeMed — keeping you and your family healthy from eyes to teeth.',
    videos: [
      { title: 'Dental Coverage Overview', duration: '4:10' },
      { title: 'Vision Benefits Explained', duration: '3:30' },
      { title: 'Preventive Care & Cleanings', duration: '2:45' },
    ],
    documents: [
      { title: 'Delta Dental Plan Summary', description: 'Copays, deductibles, and coverage limits' },
      { title: 'EyeMed Vision Benefits', description: 'Eye exams, glasses, and contact lens coverage' },
      { title: 'Dental Network Providers', description: 'Find dentists and specialists' },
    ],
    links: [
      { label: 'Find Delta Dental Provider', carrier: 'delta', type: 'provider' },
      { label: 'Find EyeMed Provider', carrier: 'eyemed', type: 'provider' },
      { label: 'Dental Claims Portal', carrier: 'delta', type: 'portal' },
    ],
    keyInfo: [
      { label: 'Preventive Cleanings', value: '2 per year, $0' },
      { label: 'Basic Coverage', value: '80%' },
      { label: 'Major Coverage', value: '50%' },
      { label: 'Eye Exam', value: '$0 copay' },
    ],
  },
  prescriptions: {
    title: 'Prescription Drug Benefits',
    description: 'Prescription coverage through CVS Caremark is included automatically when you enroll in a medical plan. Three convenient options for maintenance medications.',
    videos: [
      { title: 'Understanding Your Prescription Coverage', duration: '3:50' },
      { title: 'Using Mail Service Pharmacy', duration: '3:12' },
      { title: 'Generic vs Brand Name Drugs', duration: '2:30' },
    ],
    documents: [
      { title: 'CVS Caremark Member Handbook', description: 'Complete prescription coverage details' },
      { title: 'Medication Copay Tiers', description: 'Generic, brand name, and specialty drug costs' },
      { title: 'Pharmacy Directory', description: 'Find in-network pharmacies near you' },
    ],
    links: [
      { label: 'CVS Caremark Member Portal', carrier: 'cvs', type: 'portal' },
      { label: 'Find CVS Pharmacy', carrier: 'cvs', type: 'provider' },
      { label: 'Mail Service Pharmacy', carrier: 'cvs', type: 'service' },
    ],
    keyInfo: [
      { label: 'Pharmacy Options', value: 'RWJBH, CVS, Mail Service' },
      { label: 'Generic Copay', value: '$10' },
      { label: 'Brand Name Copay', value: '$35' },
      { label: 'Annual Deductible', value: 'Varies' },
    ],
  },
  spending: {
    title: 'Spending Accounts',
    description: 'Flexible Spending Accounts (FSA) and Health Savings Accounts (HSA) help you save on qualified healthcare and dependent care expenses with pre-tax dollars.',
    videos: [
      { title: 'FSA vs HSA: Which is Right for You?', duration: '5:15' },
      { title: 'Eligible Healthcare Expenses', duration: '4:30' },
      { title: 'Dependent Care FSA Explained', duration: '3:20' },
    ],
    documents: [
      { title: 'FSA Quick Reference Guide', description: 'Contribution limits and eligible expenses' },
      { title: 'HSA Guide & Rules', description: 'What you need to know about HSAs' },
      { title: 'Eligible Expense Checklist', description: 'Complete list of qualifying expenses' },
    ],
    links: [
      { label: 'FSA/HSA Administrator Portal', carrier: 'aetna', type: 'portal' },
      { label: 'Expense Reimbursement', carrier: 'aetna', type: 'claims' },
    ],
    keyInfo: [
      { label: 'FSA Limit (2026)', value: '$3,300' },
      { label: 'Dependent Care Limit', value: '$5,250' },
      { label: 'HSA Available', value: 'With HDHP' },
      { label: 'Carryover (FSA)', value: '$640' },
    ],
  },
  life: {
    title: 'Life & Disability Benefits',
    description: 'MetLife provides comprehensive life insurance, accidental death and dismemberment (AD&D) coverage, and short/long-term disability protection.',
    videos: [
      { title: 'Life Insurance Options', duration: '4:05' },
      { title: 'Disability Insurance Explained', duration: '3:40' },
      { title: 'Beneficiary Designations', duration: '2:55' },
    ],
    documents: [
      { title: 'Life & Disability Overview', description: 'Benefits, coverage amounts, and beneficiary information' },
      { title: 'Coverage Summary', description: 'What is included in your life insurance' },
      { title: 'Beneficiary Form', description: 'Update your beneficiary information' },
    ],
    links: [
      { label: 'MetLife Benefits Portal', carrier: 'metlife', type: 'portal' },
      { label: 'File a Claim', carrier: 'metlife', type: 'claims' },
    ],
    keyInfo: [
      { label: 'Basic Life Insurance', value: '2x salary' },
      { label: 'Voluntary Coverage', value: 'Up to 8x salary' },
      { label: 'AD&D Coverage', value: 'Equal to life insurance' },
      { label: 'Disability Benefit Period', value: 'To age 65' },
    ],
  },
  retirement: {
    title: 'Retirement & Financial Benefits',
    description: 'Save for your future with the 401(k) plan administered by Fidelity. Get company matching contributions and investment flexibility.',
    videos: [
      { title: '401(k) Retirement Planning', duration: '5:45' },
      { title: 'Understanding Investment Options', duration: '4:20' },
      { title: 'Company Match & How to Maximize It', duration: '3:30' },
      { title: 'Required Minimum Distributions', duration: '3:15' },
    ],
    documents: [
      { title: '401(k) Plan Document', description: 'Complete plan rules and details' },
      { title: 'Investment Fund Options', description: 'Review all available fund choices' },
      { title: 'Contribution Limits (2026)', description: 'IRS limits and rules' },
    ],
    links: [
      { label: 'Manage at Fidelity', carrier: 'fidelity', type: 'portal' },
      { label: 'Fidelity Phone Support', carrier: 'fidelity', type: 'support' },
    ],
    keyInfo: [
      { label: 'Company Match', value: '100% up to 3%' },
      { label: 'Employee Contribution Limit', value: '$23,500' },
      { label: 'Vesting', value: 'Immediate' },
      { label: 'Investment Options', value: '50+ funds' },
    ],
  },
  wellness: {
    title: 'Wellness & EAP',
    description: 'Access mental health support, counseling services, and wellness programs to support your emotional and physical wellbeing.',
    videos: [
      { title: 'Your Employee Assistance Program (EAP)', duration: '4:25' },
      { title: 'Mental Health Resources', duration: '3:50' },
      { title: 'Wellness Program Overview', duration: '3:10' },
      { title: 'Stress Management & Resilience', duration: '4:00' },
    ],
    documents: [
      { title: 'EAP Services Guide', description: 'Confidential counseling and support services' },
      { title: 'Wellness Program Guide', description: 'Available wellness initiatives and programs' },
      { title: 'Mental Health Resources', description: 'Support for emotional wellbeing' },
    ],
    links: [
      { label: 'EAP Portal', carrier: 'aetna', type: 'portal' },
      { label: 'Find a Mental Health Provider', carrier: 'aetna', type: 'provider' },
    ],
    keyInfo: [
      { label: 'EAP Counseling Sessions', value: 'Unlimited, free' },
      { label: 'Legal Consultation', value: 'Included' },
      { label: 'Financial Counseling', value: 'Available' },
      { label: 'Telehealth Therapy', value: '24/7 access' },
    ],
  },
  contacts: {
    title: 'Key Benefits Contacts',
    description: 'Direct contact information for all your benefits carriers and support services.',
    videos: [],
    documents: [],
    links: [],
  },
};

function VideoCard({ title, duration }: { title: string; duration: string }) {
  const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'];
  const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const bgColor = colors[hash % colors.length];

  return (
    <div style={{
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)';
      (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
    }}
    >
      <div style={{
        background: bgColor,
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: '#fff',
          backdropFilter: 'blur(5px)',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.15)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
        >
          ▶
        </div>
      </div>
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 10px',
          background: '#E8F4FF',
          color: '#0066CC',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 700,
          width: 'fit-content',
          marginBottom: '10px',
        }}>
          ▶ VIDEO
        </span>
        <h4 style={{ fontSize: '14px', fontWeight: 700, color: RWJBH_COLORS.navy, margin: '0 0 8px 0', lineHeight: '1.4', flex: 1 }}>
          {title}
        </h4>
        <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0 }}>
          ⏱ {duration}
        </p>
      </div>
    </div>
  );
}

function DocumentCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      padding: '20px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      gap: '12px',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)';
      (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
    }}
    >
      <div style={{ fontSize: '32px' }}>📄</div>
      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '14px', fontWeight: 700, color: RWJBH_COLORS.navy, margin: '0 0 4px 0' }}>
          {title}
        </h4>
        <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function LinkButton({ label, carrierInfo }: { label: string; carrierInfo: typeof CARRIERS[keyof typeof CARRIERS] }) {
  return (
    <a href={carrierInfo.portal} target="_blank" rel="noopener noreferrer" style={{
      display: 'block',
      background: RWJBH_COLORS.navy,
      color: '#fff',
      padding: '14px 18px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontSize: '13px',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      textAlign: 'center',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.background = RWJBH_COLORS.red;
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.background = RWJBH_COLORS.navy;
    }}
    >
      {label} →
    </a>
  );
}

function ContactsTab() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: RWJBH_COLORS.tagBg }}>
              <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: RWJBH_COLORS.navy, borderBottom: '2px solid #E5E7EB' }}>Carrier/Service</th>
              <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: RWJBH_COLORS.navy, borderBottom: '2px solid #E5E7EB' }}>Phone</th>
              <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: RWJBH_COLORS.navy, borderBottom: '2px solid #E5E7EB' }}>Portal</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(CARRIERS).map(([key, info]) => (
              <tr key={key} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, color: RWJBH_COLORS.navy }}>{info.name}</td>
                <td style={{ padding: '14px 20px' }}>
                  <a href={`tel:${info.phone.replace(/-/g, '')}`} style={{ color: RWJBH_COLORS.red, textDecoration: 'none', fontWeight: 600 }}>
                    {info.phone}
                  </a>
                </td>
                <td style={{ padding: '14px 20px' }}>
                  <a href={info.portal} target="_blank" rel="noopener noreferrer" style={{ color: RWJBH_COLORS.red, textDecoration: 'none', fontWeight: 600 }}>
                    Visit Portal →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '32px', padding: '20px', background: RWJBH_COLORS.tagBg, borderRadius: '8px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: RWJBH_COLORS.navy, margin: '0 0 8px 0', fontWeight: 600 }}>
          Questions about your benefits?
        </p>
        <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
          Contact the RWJBH Benefits Center at <strong>844-690-0920</strong> or visit <strong>RWJBHBenefits.com</strong>
        </p>
      </div>
    </div>
  );
}

export default function ResourceCenter({ clientName }: { clientName: string }) {
  const [activeTab, setActiveTab] = useState('home');
  const content = TAB_CONTENT[activeTab];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ background: RWJBH_COLORS.navy, padding: '24px 40px', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
            {clientName}
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 4px 0', color: '#fff' }}>
            Benefits Resource Center
          </h1>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
            Your complete guide to health, retirement, wellness, and financial benefits
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{ background: '#fff', borderBottom: '2px solid #E5E7EB', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', overflowX: 'auto', paddingLeft: '40px', paddingRight: '40px' }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '16px 20px',
                border: 'none',
                background: activeTab === tab.id ? '#fff' : 'transparent',
                borderBottom: activeTab === tab.id ? `3px solid ${RWJBH_COLORS.red}` : '3px solid transparent',
                color: activeTab === tab.id ? RWJBH_COLORS.navy : '#6B7280',
                fontSize: '14px',
                fontWeight: activeTab === tab.id ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                if (activeTab !== tab.id) {
                  (e.currentTarget as HTMLElement).style.color = RWJBH_COLORS.navy;
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== tab.id) {
                  (e.currentTarget as HTMLElement).style.color = '#6B7280';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ padding: '48px 40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Title & Description */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: RWJBH_COLORS.navy, margin: '0 0 12px 0' }}>
              {content.title}
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280', margin: 0, lineHeight: '1.6', maxWidth: '800px' }}>
              {content.description}
            </p>
          </div>

          {/* Home Tab Special Content */}
          {activeTab === 'home' && (
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px', alignItems: 'center' }}>
                {/* Featured Video */}
                <div>
                  <VideoCard title="Benefits Key Terms Explained" duration="5:32" />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: RWJBH_COLORS.navy, marginBottom: '16px' }}>
                    Open Enrollment Checklist
                  </h3>
                  <div style={{ background: RWJBH_COLORS.tagBg, padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ padding: '8px 0', fontSize: '14px', color: RWJBH_COLORS.navy, borderBottom: '1px solid rgba(27, 47, 92, 0.1)' }}>
                        ✓ Review medical plan options
                      </li>
                      <li style={{ padding: '8px 0', fontSize: '14px', color: RWJBH_COLORS.navy, borderBottom: '1px solid rgba(27, 47, 92, 0.1)' }}>
                        ✓ Compare dental & vision coverage
                      </li>
                      <li style={{ padding: '8px 0', fontSize: '14px', color: RWJBH_COLORS.navy, borderBottom: '1px solid rgba(27, 47, 92, 0.1)' }}>
                        ✓ Determine FSA/HSA needs
                      </li>
                      <li style={{ padding: '8px 0', fontSize: '14px', color: RWJBH_COLORS.navy, borderBottom: '1px solid rgba(27, 47, 92, 0.1)' }}>
                        ✓ Update beneficiaries
                      </li>
                      <li style={{ padding: '8px 0', fontSize: '14px', color: RWJBH_COLORS.navy, borderBottom: '1px solid rgba(27, 47, 92, 0.1)' }}>
                        ✓ Make 401(k) elections
                      </li>
                      <li style={{ padding: '8px 0', fontSize: '14px', color: RWJBH_COLORS.navy }}>
                        ✓ Enroll online
                      </li>
                    </ul>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: RWJBH_COLORS.navy, marginBottom: '12px', marginTop: '24px' }}>
                    Key Links
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <LinkButton label="Enroll at RWJBHBenefits.com" carrierInfo={CARRIERS.aetna} />
                    <a href="#" style={{
                      display: 'block',
                      background: RWJBH_COLORS.red,
                      color: '#fff',
                      padding: '14px 18px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '13px',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                    >
                      Total Wellbeing Site →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && <ContactsTab />}

          {/* Other Tabs - Videos, Documents, Links */}
          {activeTab !== 'home' && activeTab !== 'contacts' && (
            <>
              {content.videos && content.videos.length > 0 && (
                <div style={{ marginBottom: '48px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: RWJBH_COLORS.navy, marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${RWJBH_COLORS.navy}` }}>
                    Videos
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
                    {content.videos.map(video => (
                      <VideoCard key={video.title} title={video.title} duration={video.duration} />
                    ))}
                  </div>
                </div>
              )}

              {content.documents && content.documents.length > 0 && (
                <div style={{ marginBottom: '48px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: RWJBH_COLORS.navy, marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${RWJBH_COLORS.navy}` }}>
                    Documents & Guides
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                    {content.documents.map(doc => (
                      <DocumentCard key={doc.title} title={doc.title} description={doc.description} />
                    ))}
                  </div>
                </div>
              )}

              {content.keyInfo && content.keyInfo.length > 0 && (
                <div style={{ marginBottom: '48px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: RWJBH_COLORS.navy, marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${RWJBH_COLORS.navy}` }}>
                    Key Plan Details
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                    {content.keyInfo.map(info => (
                      <div key={info.label} style={{ background: RWJBH_COLORS.tagBg, padding: '20px', borderRadius: '8px', border: `1px solid #E5E7EB` }}>
                        <p style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', margin: '0 0 8px 0', letterSpacing: '0.3px' }}>
                          {info.label}
                        </p>
                        <p style={{ fontSize: '20px', fontWeight: 700, color: RWJBH_COLORS.navy, margin: 0 }}>
                          {info.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.links && content.links.length > 0 && (
                <div style={{ marginBottom: '48px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: RWJBH_COLORS.navy, marginBottom: '20px', paddingBottom: '12px', borderBottom: `2px solid ${RWJBH_COLORS.navy}` }}>
                    Carrier Portals & Resources
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
                    {content.links.map(link => (
                      <div key={link.label}>
                        <LinkButton label={link.label} carrierInfo={CARRIERS[link.carrier]} />
                        <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '8px', textAlign: 'center' }}>
                          {CARRIERS[link.carrier].name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: RWJBH_COLORS.navy, padding: '40px', color: '#fff', borderTop: `1px solid rgba(255,255,255,0.1)` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                Quick Support
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="tel:8446900920" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
                    844-690-0920 (Benefits Center)
                  </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
                    RWJBHBenefits.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                Browse Benefits
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <button onClick={() => setActiveTab('medical')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s', cursor: 'pointer', padding: 0 }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
                    Medical Plans
                  </button>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <button onClick={() => setActiveTab('retirement')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s', cursor: 'pointer', padding: 0 }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
                    Retirement Plans
                  </button>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <button onClick={() => setActiveTab('wellness')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s', cursor: 'pointer', padding: 0 }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
                    Wellness & EAP
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                Resources
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <button onClick={() => setActiveTab('contacts')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s', cursor: 'pointer', padding: 0 }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
                    Carrier Contacts
                  </button>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
              Powered by <strong style={{ color: '#fff' }}>Flimp®</strong> | RWJBarnabas Health Benefits Resource Center
            </p>
            <p style={{ margin: 0, fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
