'use client';

import React, { useState } from 'react';

interface DigitalBenefitsGuideProps {
  clientName?: string;
}

type Section =
  | 'welcome'
  | 'medical'
  | 'dental'
  | 'vision'
  | 'rx'
  | 'spending'
  | 'life'
  | 'wellness'
  | 'retirement'
  | 'pto'
  | 'voluntary'
  | 'contacts';

// Design System Colors
const NAVY = '#1B2F5C';
const RED = '#CC1F34';
const LIGHT_BG = '#EBF0F5';
const TEXT_DEFAULT = '#333333';
const TEXT_LIGHT = '#636366';
const BORDER_COLOR = '#ddd';
const WHITE = '#ffffff';
const FONT_FAMILY = 'Arial, "Open Sans", Lato, sans-serif';

const SECTIONS: Array<{ id: Section; label: string; number: number }> = [
  { id: 'welcome', label: 'Welcome & Overview', number: 0 },
  { id: 'medical', label: 'Medical Plans', number: 1 },
  { id: 'dental', label: 'Dental Coverage', number: 2 },
  { id: 'vision', label: 'Vision Coverage', number: 3 },
  { id: 'rx', label: 'Prescription Drug', number: 4 },
  { id: 'spending', label: 'Spending Accounts', number: 5 },
  { id: 'life', label: 'Life & Disability', number: 6 },
  { id: 'wellness', label: 'Wellbeing & EAP', number: 7 },
  { id: 'retirement', label: 'Financial & Retirement', number: 8 },
  { id: 'pto', label: 'Paid Time Off', number: 9 },
  { id: 'voluntary', label: 'Voluntary Benefits', number: 10 },
  { id: 'contacts', label: 'Important Contacts', number: 11 },
];

export default function DigitalBenefitsGuide({ clientName = 'RWJBarnabas Health' }: DigitalBenefitsGuideProps) {
  const [activeSection, setActiveSection] = useState<Section>('welcome');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'welcome':
        return <WelcomeSection clientName={clientName} />;
      case 'medical':
        return <MedicalSection />;
      case 'dental':
        return <DentalSection />;
      case 'vision':
        return <VisionSection />;
      case 'rx':
        return <RxSection />;
      case 'spending':
        return <SpendingSection />;
      case 'life':
        return <LifeDisabilitySection />;
      case 'wellness':
        return <WellnessSection />;
      case 'retirement':
        return <RetirementSection />;
      case 'pto':
        return <PTOSection />;
      case 'voluntary':
        return <VoluntarySection />;
      case 'contacts':
        return <ContactsSection />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: WHITE, fontFamily: FONT_FAMILY }}>
      {/* Header */}
      <header style={{ backgroundColor: NAVY, color: WHITE, padding: '32px 40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: '0', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.5px' }}>
          {clientName}
        </h1>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', opacity: '0.9' }}>
          Employee Benefits Guide 2025
        </p>
      </header>

      {/* Mobile Menu Toggle - visible via JS viewport check */}
      <div style={{ padding: '12px 20px', backgroundColor: WHITE, borderBottom: `1px solid ${BORDER_COLOR}` }}>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            backgroundColor: NAVY,
            color: WHITE,
            border: 'none',
            padding: '10px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '18px' }}>{mobileMenuOpen ? '\u2715' : '\u2630'}</span>
          {mobileMenuOpen ? 'Close Menu' : 'Navigate Sections'}
        </button>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar Navigation */}
        <aside
          style={{
            width: mobileMenuOpen ? '100%' : '260px',
            minWidth: mobileMenuOpen ? undefined : '260px',
            backgroundColor: NAVY,
            borderRight: `1px solid ${BORDER_COLOR}`,
            overflowY: 'auto',
            display: mobileMenuOpen ? 'flex' : 'flex',
            flexDirection: 'column',
          }}
        >
          <nav style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: 'none',
                  borderLeft: activeSection === section.id ? `4px solid ${RED}` : '4px solid transparent',
                  backgroundColor: activeSection === section.id ? 'rgba(235, 240, 245, 0.15)' : 'transparent',
                  color: WHITE,
                  fontSize: '14px',
                  fontWeight: activeSection === section.id ? '600' : '500',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  outline: 'none',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(235, 240, 245, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = '2px solid #ff9500';
                  e.currentTarget.style.outlineOffset = '-4px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = 'none';
                }}
              >
                <span style={{ minWidth: '24px', fontSize: '12px', opacity: '0.8' }}>{(section.number + 1).toString().padStart(2, '0')}</span>
                <span style={{ flex: 1 }}>{section.label}</span>
                {activeSection === section.id && <span style={{ fontSize: '16px' }}>›</span>}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '40px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function WelcomeSection({ clientName }: { clientName: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>
          Welcome to Your Benefits
        </h2>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          At {clientName}, we're committed to supporting your health and financial wellbeing. This comprehensive guide walks you through all available benefits, helping you make informed decisions about your coverage.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT }}>
          Take time to explore each section below. Questions? Our Benefits Center team is here to help.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        <div style={{ backgroundColor: LIGHT_BG, padding: '20px', borderLeft: `4px solid ${RED}`, borderRadius: '4px' }}>
          <h3 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Benefits Center</h3>
          <a href="tel:844-690-0920" style={{ color: RED, textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'block', marginBottom: '8px' }}>
            844.690.0920
          </a>
          <p style={{ fontSize: '13px', color: TEXT_LIGHT, margin: '8px 0 0 0' }}>Call with enrollment, plan, or billing questions</p>
        </div>

        <div style={{ backgroundColor: LIGHT_BG, padding: '20px', borderLeft: `4px solid ${RED}`, borderRadius: '4px' }}>
          <h3 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Care Navigation</h3>
          <a href="tel:844-424-2628" style={{ color: RED, textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'block', marginBottom: '8px' }}>
            844.424.2628
          </a>
          <p style={{ fontSize: '13px', color: TEXT_LIGHT, margin: '8px 0 0 0' }}>Get help finding doctors, scheduling, and managing care</p>
        </div>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, padding: '20px', borderLeft: `4px solid ${RED}`, borderRadius: '4px' }}>
        <h3 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px', margin: '0 0 16px 0' }}>What You'll Find in This Guide</h3>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
            <span style={{ color: RED, fontWeight: '700', flexShrink: 0 }}>•</span>
            <span style={{ color: TEXT_DEFAULT }}><strong>Medical Plans:</strong> Core and Flex plan details, all three tiers, copays, deductibles</span>
          </li>
          <li style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
            <span style={{ color: RED, fontWeight: '700', flexShrink: 0 }}>•</span>
            <span style={{ color: TEXT_DEFAULT }}><strong>Dental & Vision:</strong> Coverage percentages, preventive benefits, annual maximums</span>
          </li>
          <li style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
            <span style={{ color: RED, fontWeight: '700', flexShrink: 0 }}>•</span>
            <span style={{ color: TEXT_DEFAULT }}><strong>Spending Accounts:</strong> HSA, FSA, and Dependent Care FSA comparison and rules</span>
          </li>
          <li style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
            <span style={{ color: RED, fontWeight: '700', flexShrink: 0 }}>•</span>
            <span style={{ color: TEXT_DEFAULT }}><strong>Life, Disability & Retirement:</strong> Coverage formulas, match information, vesting</span>
          </li>
          <li style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
            <span style={{ color: RED, fontWeight: '700', flexShrink: 0 }}>•</span>
            <span style={{ color: TEXT_DEFAULT }}><strong>PTO & Wellness:</strong> Vacation schedules, holidays, EAP services, wellbeing programs</span>
          </li>
          <li style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
            <span style={{ color: RED, fontWeight: '700', flexShrink: 0 }}>•</span>
            <span style={{ color: TEXT_DEFAULT }}><strong>Contacts:</strong> Phone numbers and links for every carrier and benefit administrator</span>
          </li>
        </ul>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <p style={{ fontSize: '13px', color: TEXT_LIGHT, margin: '0' }}>
          <strong>Need help understanding your benefits?</strong> Visit{' '}
          <a href="https://rwjbhbenefits.com" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
            RWJBHBenefits.com
          </a>{' '}
          or call the Benefits Center at{' '}
          <a href="tel:844-690-0920" style={{ color: RED, textDecoration: 'none' }}>
            844.690.0920
          </a>.
        </p>
      </div>
    </div>
  );
}

function MedicalSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Medical Plans</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Plan Options</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          RWJBarnabas Health offers two comprehensive medical plans: Core and Flex. Both provide access to Aetna's broad network and full coverage for preventive care with no cost-sharing.
        </p>

        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '32px' }}>
          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Out-of-Area Coverage</h4>
          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, margin: '0' }}>
            If you live or work outside the tri-state area, an out-of-area plan option is available with different copays and deductibles. Contact the Benefits Center for details.
          </p>
        </div>
      </div>

      {/* Core Plan Table */}
      <div>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px', margin: '0 0 16px 0' }}>Core Plan - In-Network Benefits</h4>
        <div style={{ overflowX: 'auto', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
          <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: NAVY, color: WHITE }}>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Service</th>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Bronze</th>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Silver</th>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Gold</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: 'Annual Deductible (Individual/Family)', bronze: '$1,500 / $3,000', silver: '$1,000 / $2,000', gold: '$500 / $1,000' },
                { service: 'Office Visit Copay', bronze: '$40', silver: '$30', gold: '$20' },
                { service: 'Preventive Care', bronze: 'No Cost', silver: 'No Cost', gold: 'No Cost' },
                { service: 'Specialist Copay', bronze: '$60', silver: '$50', gold: '$40' },
                { service: 'Urgent Care', bronze: '$75', silver: '$65', gold: '$50' },
                { service: 'Emergency Room', bronze: '$200 (waived if admitted)', silver: '$200 (waived if admitted)', gold: '$200 (waived if admitted)' },
                { service: 'Inpatient Hospital', bronze: '20% after deductible', silver: '15% after deductible', gold: '10% after deductible' },
                { service: 'Out-of-Network Deductible', bronze: '$3,000 / $6,000', silver: '$2,000 / $4,000', gold: '$1,000 / $2,000' },
                { service: 'Out-of-Network Coinsurance', bronze: '30%', silver: '25%', gold: '20%' },
                { service: 'Out-of-Pocket Max (Individual/Family)', bronze: '$4,000 / $8,000', silver: '$3,000 / $6,000', gold: '$2,000 / $4,000' },
              ].map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.service}</td>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.bronze}</td>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.silver}</td>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.gold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Flex Plan Table */}
      <div>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px', margin: '0 0 16px 0' }}>Flex Plan - In-Network Benefits</h4>
        <div style={{ overflowX: 'auto', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
          <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: NAVY, color: WHITE }}>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Service</th>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Bronze</th>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Silver</th>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Gold</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: 'Annual Deductible (Individual/Family)', bronze: '$2,000 / $4,000', silver: '$1,500 / $3,000', gold: '$750 / $1,500' },
                { service: 'Office Visit Copay', bronze: '$50', silver: '$40', gold: '$25' },
                { service: 'Preventive Care', bronze: 'No Cost', silver: 'No Cost', gold: 'No Cost' },
                { service: 'Specialist Copay', bronze: '$75', silver: '$60', gold: '$45' },
                { service: 'Urgent Care', bronze: '$100', silver: '$85', gold: '$60' },
                { service: 'Emergency Room', bronze: '$250 (waived if admitted)', silver: '$250 (waived if admitted)', gold: '$250 (waived if admitted)' },
                { service: 'Inpatient Hospital', bronze: '25% after deductible', silver: '20% after deductible', gold: '15% after deductible' },
                { service: 'Out-of-Network Deductible', bronze: '$4,000 / $8,000', silver: '$3,000 / $6,000', gold: '$1,500 / $3,000' },
                { service: 'Out-of-Network Coinsurance', bronze: '40%', silver: '35%', gold: '30%' },
                { service: 'Out-of-Pocket Max (Individual/Family)', bronze: '$5,000 / $10,000', silver: '$4,000 / $8,000', gold: '$2,500 / $5,000' },
              ].map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.service}</td>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.bronze}</td>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.silver}</td>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.gold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contribution Tables */}
      <div>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px', margin: '0 0 16px 0' }}>Bi-Weekly Employee Contributions</h4>

        <div style={{ marginBottom: '32px' }}>
          <h5 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0', fontSize: '14px' }}>Core Plan</h5>
          <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
            <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: NAVY, color: WHITE }}>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Salary Band</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Bronze - Employee Only</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Bronze - Family</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Silver - Employee Only</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Silver - Family</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Gold - Employee Only</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Gold - Family</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { band: 'Under $35k', eo_b: '$45', f_b: '$175', eo_s: '$35', f_s: '$145', eo_g: '$15', f_g: '$95' },
                  { band: '$35k - $55k', eo_b: '$50', f_b: '$195', eo_s: '$40', f_s: '$165', eo_g: '$18', f_g: '$110' },
                  { band: '$55k - $75k', eo_b: '$55', f_b: '$215', eo_s: '$45', f_s: '$185', eo_g: '$20', f_g: '$125' },
                  { band: '$75k - $100k', eo_b: '$65', f_b: '$245', eo_s: '$55', f_s: '$215', eo_g: '$25', f_g: '$145' },
                  { band: '$100k+', eo_b: '$75', f_b: '$280', eo_s: '$65', f_s: '$250', eo_g: '$30', f_g: '$165' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.band}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.eo_b}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.f_b}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.eo_s}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.f_s}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.eo_g}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.f_g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h5 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0', fontSize: '14px' }}>Flex Plan</h5>
          <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
            <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: NAVY, color: WHITE }}>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Salary Band</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Bronze - Employee Only</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Bronze - Family</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Silver - Employee Only</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Silver - Family</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Gold - Employee Only</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Gold - Family</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { band: 'Under $35k', eo_b: '$60', f_b: '$220', eo_s: '$50', f_s: '$195', eo_g: '$30', f_g: '$140' },
                  { band: '$35k - $55k', eo_b: '$70', f_b: '$250', eo_s: '$60', f_s: '$220', eo_g: '$35', f_g: '$160' },
                  { band: '$55k - $75k', eo_b: '$80', f_b: '$280', eo_s: '$70', f_s: '$250', eo_g: '$40', f_g: '$180' },
                  { band: '$75k - $100k', eo_b: '$95', f_b: '$320', eo_s: '$85', f_s: '$290', eo_g: '$50', f_g: '$210' },
                  { band: '$100k+', eo_b: '$110', f_b: '$360', eo_s: '$100', f_s: '$330', eo_g: '$60', f_g: '$240' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.band}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.eo_b}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.f_b}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.eo_s}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.f_s}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.eo_g}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.f_g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>More Information</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Aetna Member Services:</strong>{' '}
            <a href="tel:855-546-5415" style={{ color: RED, textDecoration: 'none' }}>
              855.546.5415
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Aetna Resources:</strong>{' '}
            <a href="https://aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              aetnaresource.com/n/RWJBH
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Benefits Portal:</strong>{' '}
            <a href="https://rwjbhbenefits.com" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              RWJBHBenefits.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function DentalSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Dental Coverage</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Plan Overview</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          Two comprehensive dental plans through Delta Dental of New Jersey. Both plans cover preventive care, basic restorative, major services, and orthodontia (on Buy-Up plan only).
        </p>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
        <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE }}>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Benefit</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Base Plan</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Buy-Up Plan</th>
            </tr>
          </thead>
          <tbody>
            {[
              { benefit: 'Annual Deductible (Individual/Family)', base: '$50 / $100', buyup: '$25 / $75' },
              { benefit: 'Preventive (Exams, Cleanings, X-rays)', base: '100% - No Deductible', buyup: '100% - No Deductible' },
              { benefit: 'Basic Restorative (Fillings)', base: '80%', buyup: '85%' },
              { benefit: 'Major Restorative (Root Canals, Crowns)', base: '50%', buyup: '60%' },
              { benefit: 'Oral Surgery', base: '50%', buyup: '60%' },
              { benefit: 'Orthodontia Coverage', base: 'Not Covered', buyup: '50% (Lifetime max $1,500)' },
              { benefit: 'Annual Maximum Benefit', base: '$1,200', buyup: '$1,500' },
              { benefit: 'Ortho Lifetime Maximum', base: 'N/A', buyup: '$1,500' },
              { benefit: 'Waiting Period', base: 'None', buyup: 'None' },
            ].map((row, idx) => (
              <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.benefit}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.base}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.buyup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Key Details</h4>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li style={{ color: TEXT_DEFAULT }}>Coverage applies to in-network providers within the Delta Dental PPO network</li>
          <li style={{ color: TEXT_DEFAULT }}>Out-of-network coverage available at higher patient cost-share</li>
          <li style={{ color: TEXT_DEFAULT }}>No waiting period for preventive and basic services; major and ortho have standard waiting periods (check plan details)</li>
          <li style={{ color: TEXT_DEFAULT }}>Pre-authorization required for major services and orthodontia</li>
        </ul>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Contact Information</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Delta Dental:</strong>{' '}
            <a href="tel:800-810-5234" style={{ color: RED, textDecoration: 'none' }}>
              800.810.5234
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Provider Search:</strong>{' '}
            <a href="https://deltadentalnj.com/RWJBH" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              deltadentalnj.com/RWJBH
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function VisionSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Vision Coverage</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>EyeMed PLUS Plan</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          Comprehensive vision benefits through EyeMed, covering eye exams, prescription lenses, frames, contacts, and more.
        </p>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
        <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE }}>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Benefit</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Coverage</th>
            </tr>
          </thead>
          <tbody>
            {[
              { benefit: 'Eye Exams', coverage: '$0 copay (covered 100%)' },
              { benefit: 'Exam Frequency', coverage: 'Once per calendar year' },
              { benefit: 'Frames Allowance', coverage: '$150 allowance; 20% off amount over allowance' },
              { benefit: 'Frame Frequency', coverage: 'Once every 24 months' },
              { benefit: 'Single Vision Lenses', coverage: '$0 copay per pair' },
              { benefit: 'Bifocal/Trifocal Lenses', coverage: '$0 copay per pair' },
              { benefit: 'Progressive Lenses', coverage: '$75 copay' },
              { benefit: 'Lens Frequency', coverage: 'Once per 12 months' },
              { benefit: 'Contact Lens Exam', coverage: '$0 copay' },
              { benefit: 'Contact Lens Allowance', coverage: '$150 allowance; once per 12 months' },
              { benefit: 'Contact Lens Fitting', coverage: 'Included with exam' },
              { benefit: 'Laser Vision Correction (LASIK)', coverage: '15% discount through EyeMed' },
            ].map((row, idx) => (
              <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.benefit}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.coverage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Network Highlights</h4>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li style={{ color: TEXT_DEFAULT }}>Access to national and local independent optometrists and ophthalmologists</li>
          <li style={{ color: TEXT_DEFAULT }}>Walmart Vision Center, Costco, and other retail locations included</li>
          <li style={{ color: TEXT_DEFAULT }}>Online order options with home delivery available for glasses and contacts</li>
          <li style={{ color: TEXT_DEFAULT }}>No waiting period for any benefits</li>
        </ul>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Contact Information</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>EyeMed Member Services:</strong>{' '}
            <a href="tel:866-800-5457" style={{ color: RED, textDecoration: 'none' }}>
              866.800.5457
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Find Provider & Claim:</strong>{' '}
            <a href="https://eyemed.com" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              eyemed.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function RxSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Prescription Drug Coverage</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>CVS Caremark Pharmacy Benefits</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          Cost-effective prescription drug coverage through CVS Caremark's four-tier formulary system. Use in-network pharmacies to minimize your out-of-pocket costs.
        </p>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
        <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE }}>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Drug Tier</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Retail (30-Day)</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Mail Order (90-Day)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { tier: 'Tier 1: Generic Preferred', retail: '$10', mail: '$20' },
              { tier: 'Tier 2: Brand Preferred', retail: '$30', mail: '$60' },
              { tier: 'Tier 3: Brand Non-Preferred', retail: '$50', mail: '$100' },
              { tier: 'Tier 4: Specialty (Injectable, Infusion)', retail: '$75 + 25% coinsurance', mail: 'Not Available' },
            ].map((row, idx) => (
              <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.tier}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.retail}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.mail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Specialty Medications</h4>
        <p style={{ fontSize: '13px', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>
          Specialty drugs (biologic injectable/infusion therapies) are covered at Tier 4 copay of $75 plus 25% coinsurance when filled at a specialty pharmacy network.
        </p>
        <p style={{ fontSize: '13px', color: TEXT_DEFAULT, margin: '0' }}>
          Prior authorization may be required. Work with your doctor and pharmacist to identify lower-cost alternatives when available.
        </p>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Mail Order Advantage</h4>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li style={{ color: TEXT_DEFAULT }}>90-day supplies cost equivalent to two 30-day retail fills</li>
          <li style={{ color: TEXT_DEFAULT }}>Convenient delivery to your home</li>
          <li style={{ color: TEXT_DEFAULT }}>Automatic refill options available</li>
          <li style={{ color: TEXT_DEFAULT }}>Perfect for maintenance medications</li>
        </ul>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Contact Information</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>CVS Caremark Member Services:</strong>{' '}
            <a href="tel:833-290-5676" style={{ color: RED, textDecoration: 'none' }}>
              833.290.5676
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Plan Information & Prior Auth:</strong>{' '}
            <a href="https://caremarkrxplaninfo.com/RWJBH" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              caremarkrxplaninfo.com/RWJBH
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function SpendingSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Spending Accounts</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>HSA vs FSA vs DCFSA</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          Three account types help you save on healthcare and dependent care expenses with pre-tax dollars.
        </p>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
        <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE }}>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Feature</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>HSA</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Health FSA</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Dependent Care FSA</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: 'Eligibility', hsa: 'Must be enrolled in HSA-compatible medical plan', fsa: 'Any medical plan', dcfsa: 'Any situation' },
              { feature: '2025 Contribution Limit', hsa: 'Individual: $4,300 / Family: $8,550', fsa: '$3,300', dcfsa: '$5,000' },
              { feature: 'Employer Match', hsa: 'Not applicable', fsa: 'Not applicable', dcfsa: 'Not applicable' },
              { feature: 'Account Ownership', hsa: 'You own it (portable)', fsa: 'Employer owns it', dcfsa: 'Employer owns it' },
              { feature: 'Unused Funds Rollover', hsa: 'Full rollover to next year', fsa: '$640 carryover (rest forfeited)', dcfsa: 'Forfeited (use-it-or-lose-it)' },
              { feature: 'Investment Options', hsa: 'Yes (interest/investment earnings)', fsa: 'No', dcfsa: 'No' },
              { feature: 'Withdrawal After Separation', hsa: 'Yes (portable)', fsa: 'Generally no', dcfsa: 'Terminates' },
              { feature: 'Eligible Expenses', hsa: 'Medical, dental, vision, Rx, and more', fsa: 'Medical, dental, vision, Rx expenses', dcfsa: 'Daycare, preschool, summer camp (under 13)' },
              { feature: 'Penalties for Non-Qualified Withdrawals', hsa: 'Taxable + 20% penalty (if not qualified)', fsa: 'N/A (forfeiture only)', dcfsa: 'N/A (forfeiture only)' },
            ].map((row, idx) => (
              <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT, fontWeight: '600' }}>{row.feature}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.hsa}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.fsa}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.dcfsa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Which Account Should I Choose?</h4>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
          <li style={{ color: TEXT_DEFAULT }}>
            <strong>HSA:</strong> Best if you're in an HSA-eligible plan. You get to keep the money, invest it, and use it for retirement healthcare expenses.
          </li>
          <li style={{ color: TEXT_DEFAULT }}>
            <strong>Health FSA:</strong> Good for known upcoming medical expenses. Use it or lose it (with $640 carryover option).
          </li>
          <li style={{ color: TEXT_DEFAULT }}>
            <strong>DCFSA:</strong> If you pay for dependent care (daycare, preschool, after-school programs), this provides tax savings on those expenses.
          </li>
        </ul>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Contact Information</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Benefits Center (General):</strong>{' '}
            <a href="tel:844-690-0920" style={{ color: RED, textDecoration: 'none' }}>
              844.690.0920
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Fidelity HSA Administration:</strong>{' '}
            <a href="tel:800-513-5015" style={{ color: RED, textDecoration: 'none' }}>
              800.513.5015
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function LifeDisabilitySection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Life & Disability Insurance</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Life Insurance</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          Comprehensive life insurance coverage including basic life provided by the employer and supplemental options for additional protection.
        </p>

        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Basic Life Insurance (Employer Paid)</h4>
          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>
            <strong>Coverage Amount:</strong> 2x annual salary (minimum $20,000; maximum $500,000)
          </p>
          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, margin: '0' }}>
            No employee contribution required. Coverage is automatic upon hire.
          </p>
        </div>

        <div>
          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px', margin: '0 0 16px 0' }}>Supplemental Life Insurance Options</h4>
          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, marginBottom: '16px', margin: '0 0 16px 0' }}>
            Optional coverage available at affordable group rates. You pay the full premium through payroll deduction.
          </p>
          <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
            <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: NAVY, color: WHITE }}>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Coverage Option</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Benefit Amount</th>
                  <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Approx. Cost (varies by age)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { option: 'Employee Supplemental', amount: '$10,000 - $500,000 (in increments)', cost: '$5 - $50+/month' },
                  { option: 'Spouse Supplemental', amount: '$5,000 - $250,000', cost: '$3 - $25+/month' },
                  { option: 'Child Supplemental', amount: '$5,000 - $25,000 per child', cost: '$2 - $8/month' },
                  { option: 'Accidental Death & Dismemberment (AD&D)', amount: 'Ranges from $25,000 - $500,000', cost: '$2 - $10/month' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.option}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.amount}</td>
                    <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '16px 0 16px 0' }}>Disability Insurance</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          Short-term and long-term disability protection help replace income if you're unable to work due to illness or injury.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px', padding: '20px' }}>
            <h5 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0', fontSize: '15px' }}>Short-Term Disability (STD)</h5>
            <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <li style={{ color: TEXT_DEFAULT }}><strong>Waiting Period:</strong> 7 days</li>
              <li style={{ color: TEXT_DEFAULT }}><strong>Benefit Duration:</strong> Up to 12 weeks</li>
              <li style={{ color: TEXT_DEFAULT }}><strong>Benefit Amount:</strong> 60% of base salary</li>
              <li style={{ color: TEXT_DEFAULT }}><strong>Cost:</strong> Employer paid (no employee cost)</li>
            </ul>
          </div>

          <div style={{ border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px', padding: '20px' }}>
            <h5 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0', fontSize: '15px' }}>Long-Term Disability (LTD)</h5>
            <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <li style={{ color: TEXT_DEFAULT }}><strong>Waiting Period (Elimination):</strong> 12 weeks</li>
              <li style={{ color: TEXT_DEFAULT }}><strong>Benefit Duration:</strong> To age 65 (or 2-5 years for certain conditions)</li>
              <li style={{ color: TEXT_DEFAULT }}><strong>Benefit Amount:</strong> 60% of base salary (max $10,000/month)</li>
              <li style={{ color: TEXT_DEFAULT }}><strong>Cost:</strong> Employer paid (no employee cost)</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Important Notes</h4>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li style={{ color: TEXT_DEFAULT }}>Basic life and disability benefits are employer-paid with no employee cost or enrollment needed</li>
          <li style={{ color: TEXT_DEFAULT }}>Supplemental life and AD&D are optional and require enrollment during open enrollment or qualifying life events</li>
          <li style={{ color: TEXT_DEFAULT }}>All claims must be submitted to the insurance carrier within specified timeframes</li>
          <li style={{ color: TEXT_DEFAULT }}>Disability benefits may be taxable depending on who paid the premium</li>
        </ul>
      </div>
    </div>
  );
}

function WellnessSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Wellbeing & EAP</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Employee Assistance Program (EAP)</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          Confidential support for mental health, substance abuse, work-life balance, financial, and legal issues. Available 24/7/365.
        </p>

        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>EAP Services Include</h4>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}>Counseling sessions (typically 3-5 free sessions per issue per year)</li>
            <li style={{ color: TEXT_DEFAULT }}>Crisis intervention and 24/7 hotline support</li>
            <li style={{ color: TEXT_DEFAULT }}>Mental health and substance abuse referrals</li>
            <li style={{ color: TEXT_DEFAULT }}>Work-life balance resources (childcare, eldercare, pet care assistance)</li>
            <li style={{ color: TEXT_DEFAULT }}>Financial counseling and planning tools</li>
            <li style={{ color: TEXT_DEFAULT }}>Legal consultation services</li>
            <li style={{ color: TEXT_DEFAULT }}>Online resources and self-assessment tools</li>
          </ul>
          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, marginTop: '12px', margin: '12px 0 0 0' }}>
            <strong>Access:</strong> Call <a href="tel:800-300-0628" style={{ color: RED, textDecoration: 'none' }}>800.300.0628</a> or visit your company EAP website. All services are confidential.
          </p>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Calm for Employees</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Free access to the Calm meditation and sleep app, featuring guided meditations, sleep stories, music, and more to reduce stress and improve wellbeing.
        </p>
        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, margin: '0' }}>
            <strong>Access:</strong>{' '}
            <a href="https://calm.com/b2b/RWJBarnabasHealth/subscribe" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              calm.com/b2b/RWJBarnabasHealth/subscribe
            </a>
          </p>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>BHealthy Wellness Program</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Comprehensive wellness initiatives promoting physical health, nutrition, mental wellbeing, and preventive care.
        </p>
        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Program Components</h4>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', marginBottom: '12px' }}>
            <li style={{ color: TEXT_DEFAULT }}>Virtual fitness classes and gym partnerships</li>
            <li style={{ color: TEXT_DEFAULT }}>Wellness challenges and incentive programs</li>
            <li style={{ color: TEXT_DEFAULT }}>Nutrition coaching and healthy eating resources</li>
            <li style={{ color: TEXT_DEFAULT }}>Biometric screenings (blood pressure, cholesterol, BMI)</li>
            <li style={{ color: TEXT_DEFAULT }}>Preventive care navigation and incentives for screenings</li>
            <li style={{ color: TEXT_DEFAULT }}>Stress management workshops</li>
          </ul>
          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, margin: '0' }}>
            <strong>Enrollment/Info:</strong>{' '}
            <a href="https://join.personifyhealth.com/bhealthy" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              join.personifyhealth.com/bhealthy
            </a>{' '}
            or call <a href="tel:888-671-9395" style={{ color: RED, textDecoration: 'none' }}>888.671.9395</a>
          </p>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Behavioral Health Coverage</h4>
        <p style={{ fontSize: '13px', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>
          Mental health and substance abuse treatment is covered under your medical plan with the same copays and benefits as other medical services. No separate deductible or limit applies.
        </p>
        <p style={{ fontSize: '13px', color: TEXT_DEFAULT, margin: '0' }}>
          <strong>In-Network Providers:</strong> Check your plan details for mental health copays and to find network therapists, psychiatrists, and counselors.
        </p>
      </div>
    </div>
  );
}

function RetirementSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Financial & Retirement</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>401(k) Retirement Plan</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          A tax-advantaged retirement savings plan with employer matching to help you build long-term wealth.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div style={{ border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px', padding: '20px' }}>
          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Eligibility & Enrollment</h4>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Eligibility:</strong> Full-time employees; part-time after 12 months</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Enroll:</strong> Within 30 days of hire (or during open enrollment)</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Minimum:</strong> 1% of salary</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Maximum (2025):</strong> $24,500 (or $30,500 if age 50+)</li>
          </ul>
        </div>

        <div style={{ border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px', padding: '20px' }}>
          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Employer Match</h4>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Formula:</strong> 100% match on first 3% of salary, 50% match on next 2%</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Maximum Annual Match:</strong> Up to 4% of salary</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Example:</strong> Contribute 5%, receive approx 4% match</li>
          </ul>
        </div>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
        <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE }}>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Feature</th>
              <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: 'Vesting Schedule', details: 'Immediate (your contributions and match vest right away)' },
              { feature: '401(k) Loan Provisions', details: 'Available (typically up to 50% of balance, max $50,000)' },
              { feature: 'Distribution at Separation', details: 'Can roll over to IRA or leave in plan (if vested)' },
              { feature: 'Plan Administrator', details: 'Fidelity — 800.513.5015' },
              { feature: 'Investment Options', details: 'Multiple funds (target-date, stock, bond, money market)' },
              { feature: 'Roth Option', details: 'Roth 401(k) contribution option available' },
            ].map((row, idx) => (
              <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT, fontWeight: '600' }}>{row.feature}</td>
                <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Retirement Planning Tips</h4>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li style={{ color: TEXT_DEFAULT }}>Contribute at least 3% to capture the full employer match (free money!)</li>
          <li style={{ color: TEXT_DEFAULT }}>Consider increasing contributions by 1% each year when you get a raise</li>
          <li style={{ color: TEXT_DEFAULT }}>If age 50+, take advantage of catch-up contributions ($8,500 extra for 2025)</li>
          <li style={{ color: TEXT_DEFAULT }}>Review investment allocations annually; rebalance as needed</li>
          <li style={{ color: TEXT_DEFAULT }}>Use Fidelity's retirement calculators and planning tools to stay on track</li>
        </ul>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Contact Information</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Fidelity Retirement Services:</strong>{' '}
            <a href="tel:800-513-5015" style={{ color: RED, textDecoration: 'none' }}>
              800.513.5015
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>NetBenefits Access:</strong>{' '}
            <a href="https://netbenefits.com/RWJBarnabasHealth" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              netbenefits.com/RWJBarnabasHealth
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Benefits Center:</strong>{' '}
            <a href="tel:844-690-0920" style={{ color: RED, textDecoration: 'none' }}>
              844.690.0920
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function PTOSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Paid Time Off</h2>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Vacation Days</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
          Vacation allowance increases with tenure, recognizing your commitment to RWJBarnabas Health.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}`, borderRadius: '4px' }}>
          <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: NAVY, color: WHITE }}>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'left', fontWeight: '600' }}>Years of Service</th>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Annual Vacation Days</th>
                <th style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', fontWeight: '600' }}>Hours (assuming 8-hour days)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { years: 'New hires - Year 1', days: '15 days', hours: '120 hours' },
                { years: 'Years 2-4', days: '20 days', hours: '160 hours' },
                { years: 'Years 5-9', days: '25 days', hours: '200 hours' },
                { years: '10+ years', days: '30 days', hours: '240 hours' },
              ].map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa' }}>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', color: TEXT_DEFAULT }}>{row.years}</td>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT, fontWeight: '600' }}>{row.days}</td>
                  <td style={{ border: `1px solid ${BORDER_COLOR}`, padding: '14px', textAlign: 'center', color: TEXT_DEFAULT }}>{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Paid Holidays</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Nine paid holidays observed by RWJBarnabas Health:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', fontSize: '13px' }}>
          {[
            'New Year\'s Day (January 1)',
            'Martin Luther King Jr. Day (3rd Monday in January)',
            'Presidents Day (3rd Monday in February)',
            'Memorial Day (Last Monday in May)',
            'Independence Day (July 4)',
            'Labor Day (1st Monday in September)',
            'Thanksgiving Day (4th Thursday in November)',
            'Thanksgiving Friday (Day after Thanksgiving)',
            'Christmas Day (December 25)',
          ].map((holiday, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '12px', color: TEXT_DEFAULT }}>
              <span style={{ color: RED }}>•</span>
              <span>{holiday}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '16px 0 16px 0' }}>Sick Leave</h3>
        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Annual Sick Days:</strong> Up to 10 days per year</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Use:</strong> Personal illness, medical appointments, family illness care</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Documentation:</strong> Typically requires doctor's note if absence exceeds 3 consecutive days</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Carryover:</strong> Unused sick days may carry over (subject to state/company policy)</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Paid Out:</strong> Generally paid out upon separation (check company policy)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '16px 0 16px 0' }}>Parental Leave</h3>
        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0', fontSize: '14px' }}>Birth Parent</h4>
          <ul style={{ margin: '0 0 12px 0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Paid Leave:</strong> Up to 12 weeks at 100% pay</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Unpaid Leave:</strong> Additional unpaid FMLA-protected leave available</li>
          </ul>

          <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0', fontSize: '14px' }}>Non-Birth Parent</h4>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Paid Leave:</strong> Up to 8 weeks at 100% pay</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Unpaid Leave:</strong> Additional unpaid FMLA-protected leave available</li>
          </ul>

          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, marginTop: '12px', margin: '12px 0 0 0' }}>
            <strong>Eligibility:</strong> Applies to all employees (biological, adoptive, foster parents). Must notify HR at least 30 days prior if possible.
          </p>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>PTO Policy Notes</h4>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li style={{ color: TEXT_DEFAULT }}>PTO requests should be submitted to your manager as far in advance as possible</li>
          <li style={{ color: TEXT_DEFAULT }}>Unused vacation time that exceeds carryover limits may be forfeited (state law permitting)</li>
          <li style={{ color: TEXT_DEFAULT }}>Time off is not paid out upon termination unless required by state law</li>
          <li style={{ color: TEXT_DEFAULT }}>Sick leave and parental leave are separate from vacation time</li>
          <li style={{ color: TEXT_DEFAULT }}>Contact HR with questions about specific leave policies or requests</li>
        </ul>
      </div>
    </div>
  );
}

function VoluntarySection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Voluntary Benefits</h2>
      <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
        Optional supplemental benefits available at group rates. You pay the full cost through payroll deduction.
      </p>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Pet Insurance</h3>
        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Coverage:</strong> Veterinary expenses for accidents, illness, and wellness care</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Eligible Pets:</strong> Dogs, cats, rabbits, birds, reptiles, and more</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Deductibles:</strong> $0, $250, or $500 (your choice)</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Reimbursement:</strong> 70%, 80%, or 90% (your choice)</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Annual Limit:</strong> Unlimited or various annual caps available</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Pre-existing Conditions:</strong> Generally excluded</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Cost:</strong> Varies by pet age, type, and coverage level (est. $15-$60+/month)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Legal Plan</h3>
        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Services:</strong> Will preparation, estate planning, document review, family law consultation</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Phone Consultations:</strong> Unlimited legal advice</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Document Preparation:</strong> Discounted or included rates for wills, powers of attorney, living wills</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Representation:</strong> Discounted rates for attorney representation in covered matters</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Cost:</strong> Low monthly premium (est. $5-$15/month)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Identity Theft Protection</h3>
        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Monitoring:</strong> 24/7 monitoring of credit files and dark web</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Alerts:</strong> Real-time notification of suspicious activity</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Recovery:</strong> Identity restoration support if theft occurs</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Credit Monitoring:</strong> Three-bureau credit report monitoring</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Family Coverage:</strong> Optional coverage for spouse and dependent children</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Cost:</strong> Est. $60-$120/year for individual or family</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: NAVY, marginBottom: '16px', margin: '0 0 16px 0' }}>Auto & Home Insurance</h3>
        <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
          <p style={{ fontSize: '13px', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>
            Discounted rates on auto, home, umbrella, and renters insurance through Aon. Access to group purchasing power can save 10-25% on premiums.
          </p>
          <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <li style={{ color: TEXT_DEFAULT }}><strong>Coverage:</strong> Auto, home, renters, umbrella liability insurance</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Access:</strong> Online quote and enrollment</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Support:</strong> Dedicated customer service team</li>
            <li style={{ color: TEXT_DEFAULT }}><strong>Discounts:</strong> Bundling, safety features, good driver discounts</li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER_COLOR}`, paddingTop: '24px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Enrollment Information</h4>
        <p style={{ fontSize: '13px', color: TEXT_DEFAULT, marginBottom: '16px', margin: '0 0 16px 0' }}>
          Voluntary benefits are available during initial hire period and annual open enrollment. Some may also be available as qualifying life events.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Aon (Auto/Home Insurance & Voluntary Benefits Portal):</strong>{' '}
            <a href="tel:844-428-6672" style={{ color: RED, textDecoration: 'none' }}>
              844.428.6672
            </a>
          </p>
          <p style={{ margin: '0', color: TEXT_DEFAULT }}>
            <strong>Aon Benefits Portal:</strong>{' '}
            <a href="https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home" target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
              mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactsSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: '700', color: RED, marginBottom: '16px', margin: '0 0 16px 0' }}>Important Contacts</h2>
      <p style={{ fontSize: '15px', lineHeight: '1.7', color: TEXT_DEFAULT, marginBottom: '24px' }}>
        Quick reference for all benefits carriers and administrative support. Save these numbers and links for easy access.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { title: 'Benefits Center (Primary Contact)', phone: '844.690.0920', link: 'https://rwjbhbenefits.com', desc: 'Use for enrollment, plan questions, billing, and general support' },
          { title: 'Care Navigation', phone: '844.424.2628', desc: 'Help finding doctors, scheduling appointments, managing healthcare' },
          { title: 'Aetna (Medical & Behavioral Health)', phone: '855.546.5415', link: 'https://aetnaresource.com/n/RWJBH', desc: 'Claims, provider search, plan documents, ID cards' },
          { title: 'Delta Dental (Dental)', phone: '800.810.5234', link: 'https://deltadentalnj.com/RWJBH', desc: 'Dental claims, provider network, benefits questions' },
          { title: 'EyeMed (Vision)', phone: '866.800.5457', link: 'https://eyemed.com', desc: 'Vision benefits, provider network, claim status' },
          { title: 'CVS Caremark (Prescription Drug)', phone: '833.290.5676', link: 'https://caremarkrxplaninfo.com/RWJBH', desc: 'Rx coverage, prior authorization, mail order pharmacy' },
          { title: 'Fidelity (401k & HSA)', phone: '800.513.5015', link: 'https://netbenefits.com/RWJBarnabasHealth', desc: 'Retirement planning, HSA management, investment options' },
          { title: 'EAP (Counseling & Support)', phone: '800.300.0628', link: 'https://rwjbhtotalwellbeing.com', desc: '24/7 crisis support, counseling, work-life resources. Confidential.' },
          { title: 'Personify Health (BHealthy Wellness)', phone: '888.671.9395', link: 'https://join.personifyhealth.com/bhealthy', desc: 'Wellness programs, health coaching, fitness, preventive care' },
          { title: 'Calm (Mental Wellness App)', link: 'https://calm.com/b2b/RWJBarnabasHealth/subscribe', desc: 'Free meditation, sleep, and stress relief app for all employees' },
          { title: 'Aon (Voluntary Benefits & Auto/Home Insurance)', phone: '844.428.6672', link: 'https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home', desc: 'Enrollment, quotes, and support for all voluntary benefits' },
        ].map((contact, idx) => (
          <div key={idx} style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px' }}>
            <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>{contact.title}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              {contact.phone && (
                <p style={{ margin: '0', color: TEXT_DEFAULT }}>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${contact.phone.replace(/\./g, '-')}`} style={{ color: RED, textDecoration: 'none', fontWeight: '600' }}>
                    {contact.phone}
                  </a>
                </p>
              )}
              {contact.link && (
                <p style={{ margin: '0', color: TEXT_DEFAULT }}>
                  <strong>{contact.phone ? 'Portal' : 'Access'}:</strong>{' '}
                  <a href={contact.link} target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none' }}>
                    {contact.link}
                  </a>
                </p>
              )}
              <p style={{ margin: '0', color: TEXT_LIGHT, fontSize: '12px' }}>{contact.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: LIGHT_BG, borderLeft: `4px solid ${RED}`, padding: '20px', borderRadius: '4px', marginTop: '16px' }}>
        <h4 style={{ fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px', margin: '0 0 12px 0' }}>Quick Tips</h4>
        <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li style={{ color: TEXT_DEFAULT }}>Save important phone numbers and bookmark key websites for quick reference</li>
          <li style={{ color: TEXT_DEFAULT }}>Most carriers offer 24/7 member support via phone and online portals</li>
          <li style={{ color: TEXT_DEFAULT }}>Use your Benefits Center as your first point of contact for general questions</li>
          <li style={{ color: TEXT_DEFAULT }}>Detailed plan documents and ID cards are available on carrier websites</li>
          <li style={{ color: TEXT_DEFAULT }}>Keep your beneficiary information updated in your HR system</li>
        </ul>
      </div>
    </div>
  );
}
