'use client';

import { useState } from 'react';

const RWJBH_COLORS = {
  navy: '#1B2F5C',
  red: '#CC1F34',
  lightBg: '#EBF0F5',
  darkGray: '#374151',
  lightGray: '#F3F4F6',
  border: '#E5E7EB',
};

type TabId = 'home' | 'medical' | 'dental' | 'prescriptions' | 'spending' | 'life' | 'retirement' | 'wellness' | 'contacts';

const TABS: Array<{ id: TabId; label: string }> = [
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
  aetna: { name: 'Aetna', phone: '855-546-5415', portal: 'https://www.aetnaresource.com/n/RWJBH' },
  delta: { name: 'Delta Dental', phone: '800-810-5234', portal: 'https://www.deltadentalnj.com/RWJBH' },
  eyemed: { name: 'EyeMed', phone: '866-800-5457', portal: 'https://www.eyemed.com' },
  cvs: { name: 'CVS Caremark', phone: '833-290-5676', portal: 'https://caremarkrxplaninfo.com/RWJBH' },
  fidelity: { name: 'Fidelity', phone: '800-513-5015', portal: 'https://www.netbenefits.com/RWJBarnabasHealth' },
  metlife: { name: 'MetLife', phone: '866-450-2263', portal: 'https://www.metlife.com' },
  calm: { name: 'Calm', phone: '1-844-GO-CALM', portal: 'https://calm.com/b2b/RWJBarnabasHealth/subscribe' },
  personify: { name: 'Personify Health', phone: '', portal: 'https://join.personifyhealth.com/bhealthy' },
  aon: { name: 'Aon Benefits', phone: '1-833-266-9922', portal: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home' },
};

interface QuickInfoCard {
  label: string;
  value: string;
}

interface DocumentCard {
  title: string;
  description: string;
}

interface VideoCard {
  title: string;
  duration: string;
}

interface PortalButton {
  label: string;
  carrier: keyof typeof CARRIERS;
  url?: string;
}

interface ContactCard {
  name: string;
  phone: string;
  portal: string;
}

// Quick info cards for each tab
const QUICK_INFO: Record<TabId, QuickInfoCard[]> = {
  home: [],
  medical: [
    { label: 'Plans Available', value: '3 Tiers' },
    { label: 'Deductible Range', value: '$500 - $2,000' },
    { label: 'In-Network Care', value: 'Free at RWJBH' },
    { label: 'Out-of-Pocket Max', value: 'Varies by plan' },
  ],
  dental: [
    { label: 'Preventive Cleanings', value: '2 per year, $0' },
    { label: 'Basic Coverage', value: '80%' },
    { label: 'Major Coverage', value: '50%' },
    { label: 'Eye Exam', value: '$0 copay' },
  ],
  prescriptions: [
    { label: 'Tier 1 (Generic)', value: '$5 copay' },
    { label: 'Tier 2 (Brand)', value: '$25 copay' },
    { label: 'Tier 3 (Specialty)', value: '$50 copay' },
    { label: 'Mail Service', value: '90-day supply' },
  ],
  spending: [
    { label: 'HSA Rollover', value: 'Yes, unlimited' },
    { label: 'FSA Annual Limit', value: '$3,300' },
    { label: 'DCFSA Annual Limit', value: '$5,000' },
    { label: 'Carryover', value: '$0 - $610' },
  ],
  life: [
    { label: 'Life Insurance', value: '1x - 4x salary' },
    { label: 'AD&D', value: 'Included' },
    { label: 'Short-Term Disability', value: 'Available' },
    { label: 'Long-Term Disability', value: '60% replacement' },
  ],
  retirement: [
    { label: 'Plan Type', value: '401(k)' },
    { label: 'Employer Match', value: 'Varies' },
    { label: 'Vesting', value: 'Check plan' },
    { label: 'Investment Options', value: '50+' },
  ],
  wellness: [
    { label: 'EAP Sessions', value: '3 free per issue' },
    { label: 'Calm Access', value: 'Included' },
    { label: 'BHealthy Program', value: 'Available' },
    { label: 'Health Coaching', value: 'Yes' },
  ],
  contacts: [],
};

// Document cards for each tab
const DOCUMENTS: Record<TabId, DocumentCard[]> = {
  home: [
    { title: 'Open Enrollment Checklist', description: 'Step-by-step guide to making your benefits elections' },
    { title: 'Benefits Summary Guide', description: 'Overview of all available benefits' },
    { title: 'Plan Comparison Sheet', description: 'Side-by-side review of all options' },
  ],
  medical: [
    { title: 'Medical Plan Comparison', description: 'Deductibles, copays, and coverage details' },
    { title: 'Summary of Benefits', description: 'Official plan documentation' },
    { title: 'Provider Directory', description: 'Search for in-network providers' },
  ],
  dental: [
    { title: 'Delta Dental Plan Summary', description: 'Copays, deductibles, and coverage limits' },
    { title: 'EyeMed Vision Benefits', description: 'Eye exams, glasses, and contact lens coverage' },
    { title: 'Network Providers', description: 'Find dentists and eye doctors' },
  ],
  prescriptions: [
    { title: 'CVS Caremark Member Handbook', description: 'Complete prescription coverage guide' },
    { title: 'Medication Copay Tiers', description: 'Generic, brand, and specialty drug costs' },
    { title: 'Pharmacy Directory', description: 'Locate in-network pharmacies' },
  ],
  spending: [
    { title: 'HSA Plan Document', description: 'Full HSA rules and contribution limits' },
    { title: 'FSA & DCFSA Guide', description: 'Eligible expenses and enrollment limits' },
    { title: 'Carryover & Grace Period Policy', description: 'How unused funds are handled' },
  ],
  life: [
    { title: 'Life Insurance Summary', description: 'Coverage amounts and beneficiary information' },
    { title: 'Disability Insurance', description: 'Short-term and long-term disability details' },
    { title: 'Beneficiary Forms', description: 'Update your beneficiaries' },
  ],
  retirement: [
    { title: '401(k) Plan Document', description: 'Comprehensive plan rules' },
    { title: 'Investment Prospectuses', description: 'Fund options and performance' },
    { title: 'Contribution Limits', description: 'Annual maximums and catch-up rules' },
  ],
  wellness: [
    { title: 'EAP Program Details', description: 'Services and how to access' },
    { title: 'Wellness Program Guide', description: 'Available wellness initiatives' },
    { title: 'Mental Health Resources', description: 'Counseling and support services' },
  ],
  contacts: [],
};

// Video cards for each tab
const VIDEOS: Record<TabId, VideoCard[]> = {
  home: [
    { title: 'Benefits Key Terms Explained', duration: '5:32' },
    { title: 'How to Use Your Benefits', duration: '3:45' },
    { title: 'Getting Started Checklist', duration: '2:20' },
  ],
  medical: [
    { title: 'Understanding Your Medical Options', duration: '4:32' },
    { title: 'Network vs Out-of-Network Coverage', duration: '3:15' },
    { title: 'How Deductibles Work', duration: '2:48' },
  ],
  dental: [
    { title: 'Dental Coverage Overview', duration: '4:10' },
    { title: 'Vision Benefits Explained', duration: '3:30' },
    { title: 'Preventive Care & Cleanings', duration: '2:45' },
  ],
  prescriptions: [
    { title: 'Understanding Your Prescription Coverage', duration: '3:50' },
    { title: 'Using Mail Service Pharmacy', duration: '3:12' },
    { title: 'Generic vs Brand Name Drugs', duration: '2:30' },
  ],
  spending: [
    { title: 'HSA vs FSA: What is the Difference', duration: '5:00' },
    { title: 'How to Use Your Spending Accounts', duration: '4:15' },
    { title: 'Dependent Care FSA Explained', duration: '3:20' },
  ],
  life: [
    { title: 'Life Insurance Basics', duration: '4:20' },
    { title: 'Disability Insurance Overview', duration: '3:50' },
    { title: 'Choosing Your Coverage Amount', duration: '2:55' },
  ],
  retirement: [
    { title: 'Getting Started with Your 401k', duration: '5:10' },
    { title: 'Investment Basics for Your Plan', duration: '6:30' },
    { title: 'Retirement Planning Tips', duration: '4:45' },
  ],
  wellness: [
    { title: 'Mental Health Resources & EAP', duration: '3:40' },
    { title: 'Getting Started with Calm', duration: '2:25' },
    { title: 'Wellness Programs Overview', duration: '3:15' },
  ],
  contacts: [],
};

// Portal buttons for each tab
const PORTALS: Record<TabId, PortalButton[]> = {
  home: [
    { label: 'Enroll Now at RWJBHBenefits.com', carrier: 'aon', url: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home' },
    { label: 'RWJBH Total Wellbeing Site', carrier: 'aon', url: 'https://RWJBHTotalWellbeing.com' },
  ],
  medical: [
    { label: 'Aetna Provider Search', carrier: 'aetna' },
    { label: 'Aetna Member Portal', carrier: 'aetna' },
    { label: 'Check Claim Status', carrier: 'aetna' },
  ],
  dental: [
    { label: 'Find Delta Dental Provider', carrier: 'delta' },
    { label: 'Find EyeMed Provider', carrier: 'eyemed' },
    { label: 'Dental Claims Portal', carrier: 'delta' },
  ],
  prescriptions: [
    { label: 'CVS Caremark Pharmacy Search', carrier: 'cvs' },
    { label: 'Refill Prescriptions', carrier: 'cvs' },
    { label: 'Formulary & Drug Information', carrier: 'cvs' },
  ],
  spending: [
    { label: 'Manage Your HSA', carrier: 'fidelity', url: 'https://www.netbenefits.com/RWJBarnabasHealth' },
    { label: 'View Eligible Expenses', carrier: 'aon', url: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home' },
    { label: 'Upload Receipts', carrier: 'aon', url: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home' },
  ],
  life: [
    { label: 'MetLife Portal', carrier: 'metlife' },
    { label: 'Update Beneficiaries', carrier: 'metlife' },
    { label: 'View Coverage', carrier: 'metlife' },
  ],
  retirement: [
    { label: 'Fidelity 401k Portal', carrier: 'fidelity' },
    { label: 'Review Investments', carrier: 'fidelity' },
    { label: 'Calculate Retirement', carrier: 'fidelity' },
  ],
  wellness: [
    { label: 'Access EAP Portal', carrier: 'aon', url: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home' },
    { label: 'Calm App', carrier: 'calm' },
    { label: 'BHealthy by Personify', carrier: 'personify' },
  ],
  contacts: [],
};

// Contact information for each benefit area
const BENEFIT_CONTACTS: Record<TabId, ContactCard[]> = {
  home: [],
  medical: [
    { name: 'Aetna Medical', phone: '855-546-5415', portal: 'https://www.aetnaresource.com/n/RWJBH' },
  ],
  dental: [
    { name: 'Delta Dental', phone: '800-810-5234', portal: 'https://www.deltadentalnj.com/RWJBH' },
    { name: 'EyeMed Vision', phone: '866-800-5457', portal: 'https://www.eyemed.com' },
  ],
  prescriptions: [
    { name: 'CVS Caremark', phone: '833-290-5676', portal: 'https://caremarkrxplaninfo.com/RWJBH' },
  ],
  spending: [
    { name: 'Fidelity HSA', phone: '800-513-5015', portal: 'https://www.netbenefits.com/RWJBarnabasHealth' },
    { name: 'Aon Benefits', phone: '1-833-266-9922', portal: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home' },
  ],
  life: [
    { name: 'MetLife Insurance', phone: '866-450-2263', portal: 'https://www.metlife.com' },
  ],
  retirement: [
    { name: 'Fidelity Retirement', phone: '800-513-5015', portal: 'https://www.netbenefits.com/RWJBarnabasHealth' },
  ],
  wellness: [
    { name: 'Employee Assistance Program', phone: '1-833-266-9922', portal: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home' },
    { name: 'Calm Premium', phone: '1-844-GO-CALM', portal: 'https://calm.com/b2b/RWJBarnabasHealth/subscribe' },
    { name: 'BHealthy by Personify', phone: '', portal: 'https://join.personifyhealth.com/bhealthy' },
  ],
  contacts: [
    { name: 'Aetna Medical', phone: '855-546-5415', portal: 'https://www.aetnaresource.com/n/RWJBH' },
    { name: 'Delta Dental', phone: '800-810-5234', portal: 'https://www.deltadentalnj.com/RWJBH' },
    { name: 'EyeMed Vision', phone: '866-800-5457', portal: 'https://www.eyemed.com' },
    { name: 'CVS Caremark', phone: '833-290-5676', portal: 'https://caremarkrxplaninfo.com/RWJBH' },
    { name: 'Fidelity', phone: '800-513-5015', portal: 'https://www.netbenefits.com/RWJBarnabasHealth' },
    { name: 'MetLife', phone: '866-450-2263', portal: 'https://www.metlife.com' },
    { name: 'Employee Assistance Program', phone: '1-833-266-9922', portal: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home' },
    { name: 'Calm', phone: '1-844-GO-CALM', portal: 'https://calm.com/b2b/RWJBarnabasHealth/subscribe' },
  ],
};

interface ResourceCenterProps {
  clientName?: string;
}

export default function ResourceCenter({ clientName = 'RWJBarnabas Health' }: ResourceCenterProps) {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  const openVideo = () => {
    window.open('https://flimp.live/Flimp_HRBenefitsVideoLibrary', '_blank');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header */}
      <header style={{
        backgroundColor: RWJBH_COLORS.navy,
        color: 'white',
        padding: '24px 40px',
        borderBottom: `4px solid ${RWJBH_COLORS.red}`,
      }}>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 'bold' }}>
          Benefits Resource Center
        </h1>
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
          {clientName}
        </p>
      </header>

      {/* Sticky Tab Bar */}
      <nav style={{
        backgroundColor: 'white',
        borderBottom: `1px solid ${RWJBH_COLORS.border}`,
        position: 'sticky',
        top: 0,
        zIndex: 40,
        overflowX: 'auto',
      }}>
        <div style={{
          display: 'flex',
          gap: 0,
        }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: '0 0 auto',
                padding: '16px 20px',
                backgroundColor: activeTab === tab.id ? RWJBH_COLORS.navy : 'white',
                color: activeTab === tab.id ? 'white' : RWJBH_COLORS.darkGray,
                border: 'none',
                borderBottom: activeTab === tab.id ? `3px solid ${RWJBH_COLORS.red}` : '1px solid transparent',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === tab.id ? '600' : '500',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '40px 40px' }}>
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: RWJBH_COLORS.navy, marginBottom: '12px' }}>
              Welcome to Your Benefits
            </h2>
            <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
              Everything you need to understand and maximize your benefits. Start here to learn about your coverage options and take action.
            </p>

            {/* Quick Links Grid */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '16px' }}>
                Explore Your Benefits
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
              }}>
                {TABS.slice(1, 9).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      padding: '20px',
                      backgroundColor: RWJBH_COLORS.lightGray,
                      border: `2px solid ${RWJBH_COLORS.border}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      const target = e.currentTarget;
                      target.style.borderColor = RWJBH_COLORS.red;
                      target.style.backgroundColor = RWJBH_COLORS.navy;
                    }}
                    onMouseOut={(e) => {
                      const target = e.currentTarget;
                      target.style.borderColor = RWJBH_COLORS.border;
                      target.style.backgroundColor = RWJBH_COLORS.lightGray;
                    }}
                  >
                    <div style={{ fontSize: '16px', fontWeight: '600', color: 'inherit' }}>
                      {tab.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Video Card */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '16px' }}>
                Featured Video
              </h3>
              <button
                onClick={openVideo}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  padding: '32px',
                  backgroundColor: RWJBH_COLORS.navy,
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = RWJBH_COLORS.red;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = RWJBH_COLORS.navy;
                }}
              >
                <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                  Benefits Key Terms Explained
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  5:32 — Click to watch in video library
                </div>
              </button>
            </div>

            {/* Enrollment CTA */}
            <div style={{
              padding: '32px',
              backgroundColor: RWJBH_COLORS.lightBg,
              border: `2px solid ${RWJBH_COLORS.red}`,
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '12px' }}>
                Ready to Enroll?
              </h3>
              <p style={{ fontSize: '14px', color: RWJBH_COLORS.darkGray, marginBottom: '16px' }}>
                Visit RWJBHBenefits.com to review plans and make your elections.
              </p>
              <a
                href="https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '12px 28px',
                  backgroundColor: RWJBH_COLORS.red,
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Go to Enrollment
              </a>
            </div>
          </div>
        )}

        {/* All other tabs use a shared layout */}
        {activeTab !== 'home' && (
          <div>
            {/* Tab Title */}
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: RWJBH_COLORS.navy, marginBottom: '12px' }}>
              {TABS.find(t => t.id === activeTab)?.label}
            </h2>

            {/* Tab Description */}
            {activeTab === 'medical' && (
              <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
                Medical plans administered by Aetna. Care received within the RWJBarnabas Health system is completely free across all plans.
              </p>
            )}
            {activeTab === 'dental' && (
              <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
                Comprehensive dental and vision coverage through Delta Dental and EyeMed.
              </p>
            )}
            {activeTab === 'prescriptions' && (
              <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
                Prescription coverage through CVS Caremark is included when you enroll in a medical plan.
              </p>
            )}
            {activeTab === 'spending' && (
              <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
                Tax-advantaged accounts to save on healthcare, dependent care, and commuting expenses.
              </p>
            )}
            {activeTab === 'life' && (
              <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
                Life, accidental death and dismemberment, and disability insurance to protect your family.
              </p>
            )}
            {activeTab === 'retirement' && (
              <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
                401(k) retirement savings plan through Fidelity with employer matching.
              </p>
            )}
            {activeTab === 'wellness' && (
              <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
                Employee assistance, mental health support, and wellness programs to support your wellbeing.
              </p>
            )}
            {activeTab === 'contacts' && (
              <p style={{ fontSize: '16px', color: RWJBH_COLORS.darkGray, marginBottom: '32px', maxWidth: '700px' }}>
                All carrier and benefit provider contact information in one place.
              </p>
            )}

            {/* Quick Info Cards (if applicable) */}
            {QUICK_INFO[activeTab] && QUICK_INFO[activeTab].length > 0 && (
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '16px' }}>
                  Key Information
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                }}>
                  {QUICK_INFO[activeTab].map((info, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '16px',
                        backgroundColor: RWJBH_COLORS.lightGray,
                        borderLeft: `4px solid ${RWJBH_COLORS.red}`,
                        borderRadius: '4px',
                      }}
                    >
                      <div style={{ fontSize: '12px', fontWeight: '600', color: RWJBH_COLORS.darkGray, textTransform: 'uppercase', marginBottom: '4px' }}>
                        {info.label}
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: RWJBH_COLORS.navy }}>
                        {info.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Portal Buttons */}
            {PORTALS[activeTab] && PORTALS[activeTab].length > 0 && (
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '16px' }}>
                  Access Your Account
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                }}>
                  {PORTALS[activeTab].map((button, idx) => (
                    <a
                      key={idx}
                      href={button.url || CARRIERS[button.carrier].portal}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '14px 18px',
                        backgroundColor: RWJBH_COLORS.navy,
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '13px',
                        textAlign: 'center',
                        transition: 'all 0.2s ease',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = RWJBH_COLORS.red;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = RWJBH_COLORS.navy;
                      }}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {VIDEOS[activeTab] && VIDEOS[activeTab].length > 0 && (
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '16px' }}>
                  Videos
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                }}>
                  {VIDEOS[activeTab].map((video, idx) => (
                    <button
                      key={idx}
                      onClick={openVideo}
                      style={{
                        padding: '20px',
                        backgroundColor: RWJBH_COLORS.lightGray,
                        border: `1px solid ${RWJBH_COLORS.border}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = RWJBH_COLORS.red;
                        e.currentTarget.style.boxShadow = `0 2px 8px rgba(204, 31, 52, 0.1)`;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = RWJBH_COLORS.border;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ fontSize: '16px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '8px' }}>
                        {video.title}
                      </div>
                      <div style={{ fontSize: '13px', color: RWJBH_COLORS.darkGray }}>
                        {video.duration} — Click to watch
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Documents */}
            {DOCUMENTS[activeTab] && DOCUMENTS[activeTab].length > 0 && (
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '16px' }}>
                  Documents & Resources
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                }}>
                  {DOCUMENTS[activeTab].map((doc, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '20px',
                        backgroundColor: 'white',
                        border: `1px solid ${RWJBH_COLORS.border}`,
                        borderRadius: '8px',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = RWJBH_COLORS.red;
                        e.currentTarget.style.boxShadow = `0 2px 8px rgba(204, 31, 52, 0.1)`;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = RWJBH_COLORS.border;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ fontSize: '14px', color: RWJBH_COLORS.darkGray, marginBottom: '8px' }}>
                        PDF Document
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '8px' }}>
                        {doc.title}
                      </div>
                      <div style={{ fontSize: '13px', color: RWJBH_COLORS.darkGray }}>
                        {doc.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Cards */}
            {BENEFIT_CONTACTS[activeTab] && BENEFIT_CONTACTS[activeTab].length > 0 && (
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '16px' }}>
                  Contact Information
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                }}>
                  {BENEFIT_CONTACTS[activeTab].map((contact, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '20px',
                        backgroundColor: 'white',
                        border: `1px solid ${RWJBH_COLORS.border}`,
                        borderRadius: '8px',
                      }}
                    >
                      <div style={{ fontSize: '16px', fontWeight: '600', color: RWJBH_COLORS.navy, marginBottom: '12px' }}>
                        {contact.name}
                      </div>
                      {contact.phone && (
                        <div style={{ fontSize: '14px', color: RWJBH_COLORS.darkGray, marginBottom: '8px' }}>
                          <a href={`tel:${contact.phone.replace(/\D/g, '')}`} style={{ color: RWJBH_COLORS.red, textDecoration: 'none' }}>
                            {contact.phone}
                          </a>
                        </div>
                      )}
                      <a
                        href={contact.portal}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          fontSize: '13px',
                          color: RWJBH_COLORS.red,
                          textDecoration: 'none',
                          fontWeight: '600',
                        }}
                      >
                        Visit Portal
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: RWJBH_COLORS.navy,
        color: 'white',
        padding: '24px 40px',
        borderTop: `1px solid ${RWJBH_COLORS.border}`,
        fontSize: '13px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '16px',
        }}>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '8px' }}>General Inquiries</div>
            <a href="tel:1-833-266-9922" style={{ color: '#E0E7FF', textDecoration: 'none' }}>
              1-833-266-9922
            </a>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '8px' }}>Benefits & Enrollment</div>
            <a href="https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home" target="_blank" rel="noopener noreferrer" style={{ color: '#E0E7FF', textDecoration: 'none' }}>
              RWJBHBenefits.com
            </a>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '8px' }}>Wellness Resources</div>
            <a href="https://RWJBHTotalWellbeing.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E0E7FF', textDecoration: 'none' }}>
              Total Wellbeing Site
            </a>
          </div>
        </div>
        <div style={{
          borderTop: `1px solid rgba(255, 255, 255, 0.2)`,
          paddingTop: '16px',
        }}>
          Copyright {new Date().getFullYear()} RWJBarnabas Health. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
