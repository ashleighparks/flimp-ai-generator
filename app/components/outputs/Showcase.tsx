'use client';

import { useState } from 'react';

interface ShowcaseProps {
  clientName?: string;
}

interface TabConfig {
  id: string;
  label: string;
}

const TABS: TabConfig[] = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'medical', label: 'Medical Plans' },
  { id: 'dental-vision', label: 'Dental & Vision' },
  { id: 'prescriptions', label: 'Prescriptions' },
  { id: 'spending', label: 'Spending Accounts' },
  { id: 'wellbeing', label: 'Wellbeing & EAP' },
  { id: 'retirement', label: 'Financial & Retirement' },
  { id: 'pto', label: 'Paid Time Off' },
  { id: 'contacts', label: 'Contacts' },
];

// Design System Colors
const NAVY = '#1B2F5C';
const RED = '#CC1F34';
const LIGHT_BG = '#EBF0F5';
const TEXT_DEFAULT = '#333333';
const TEXT_LIGHT = '#636366';
const BORDER_COLOR = '#ddd';
const WHITE = '#ffffff';

export default function Showcase({ clientName = 'RWJBarnabas Health' }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState<string>('welcome');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: WHITE, fontFamily: 'Arial, "Open Sans", Lato, sans-serif', wordBreak: 'break-word' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: NAVY,
          color: WHITE,
          paddingTop: '32px',
          paddingBottom: '32px',
          paddingLeft: '0',
          paddingRight: '0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <h1 style={{ margin: '0', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.5px' }}>
            {clientName}
          </h1>
          <p style={{ margin: '8px 0 0 0', fontSize: '14px', opacity: '0.9' }}>
            Benefits Enrollment & Information
          </p>
        </div>
      </header>

      {/* Tab Navigation - Sticky & Horizontal Scrollable */}
      <nav
        style={{
          backgroundColor: WHITE,
          borderBottom: `1px solid ${BORDER_COLOR}`,
          position: 'sticky',
          top: '0',
          zIndex: '100',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          paddingLeft: '0',
          paddingRight: '0',
        }}
      >
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            paddingLeft: '40px',
            paddingRight: '40px',
            gap: '0',
            scrollBehavior: 'smooth',
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 'none',
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '16px',
                paddingRight: '16px',
                border: 'none',
                backgroundColor: 'transparent',
                borderBottom: activeTab === tab.id ? `3px solid ${RED}` : '3px solid transparent',
                color: activeTab === tab.id ? RED : TEXT_LIGHT,
                fontSize: '14px',
                fontWeight: activeTab === tab.id ? '600' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                textTransform: 'capitalize',
                outline: 'none',
              }}
              onFocus={(e) => {
                (e.target as HTMLElement).style.outline = `2px solid #ff9500`;
                (e.target as HTMLElement).style.outlineOffset = '-4px';
              }}
              onBlur={(e) => {
                (e.target as HTMLElement).style.outline = 'none';
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  (e.target as HTMLElement).style.color = NAVY;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  (e.target as HTMLElement).style.color = TEXT_LIGHT;
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main style={{ flex: '1', paddingTop: '40px', paddingBottom: '40px', paddingLeft: '40px', paddingRight: '40px' }}>
        {activeTab === 'welcome' && <WelcomeTab />}
        {activeTab === 'medical' && <MedicalTab />}
        {activeTab === 'dental-vision' && <DentalVisionTab />}
        {activeTab === 'prescriptions' && <PrescriptionsTab />}
        {activeTab === 'spending' && <SpendingTab />}
        {activeTab === 'wellbeing' && <WellbeingTab />}
        {activeTab === 'retirement' && <RetirementTab />}
        {activeTab === 'pto' && <PTOTab />}
        {activeTab === 'contacts' && <ContactsTab />}
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: NAVY,
          color: WHITE,
          paddingTop: '48px',
          paddingBottom: '32px',
          paddingLeft: '40px',
          paddingRight: '40px',
          marginTop: 'auto',
          borderTop: `1px solid rgba(255,255,255,0.1)`,
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '32px' }}>
          <div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: WHITE }}>Quick Links</h3>
            <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none' }}>
              <li style={{ marginBottom: '12px' }}>
                <a
                  href="https://RWJBHBenefits.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
                >
                  Benefits Portal
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a
                  href="https://RWJBHTotalWellbeing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
                >
                  Wellness Portal
                </a>
              </li>
              <li>
                <a
                  href="https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '14px', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
                >
                  Voluntary Benefits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: WHITE }}>Contact Info</h3>
            <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none' }}>
              <li style={{ marginBottom: '16px' }}>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Benefits Center</span>
                <br />
                <a
                  href="tel:844-690-0920"
                  style={{ color: WHITE, textDecoration: 'none', fontSize: '15px', fontWeight: '600', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  844.690.0920
                </a>
              </li>
              <li>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>EAP 24/7</span>
                <br />
                <a
                  href="tel:800-300-0628"
                  style={{ color: WHITE, textDecoration: 'none', fontSize: '15px', fontWeight: '600', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  800.300.0628
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
          <p style={{ margin: '0' }}>
            For questions or support, contact the Benefits Center at{' '}
            <a
              href="tel:844-690-0920"
              style={{ color: 'rgba(255,255,255,1)', textDecoration: 'none', fontWeight: '500' }}
            >
              844.690.0920
            </a>
          </p>
          <p style={{ margin: '8px 0 0 0' }}>© 2025 {clientName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// TAB COMPONENTS
// ============================================================================

function WelcomeTab() {
  return (
    <div>
      <h2 style={{ margin: '0 0 16px 0', fontSize: '32px', fontWeight: '700', color: NAVY }}>
        Welcome to Your Benefits
      </h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: TEXT_DEFAULT, marginBottom: '40px', maxWidth: '800px' }}>
        Get to know your comprehensive benefits package. This guide covers everything from medical and dental coverage to wellness programs and retirement planning. Click through each section to explore your options.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        <Card title="Enrollment Checklist">
          <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px', color: TEXT_DEFAULT }}>
            <li style={{ marginBottom: '8px' }}>Review medical plan options (Premier, Extended, Out-of-Area)</li>
            <li style={{ marginBottom: '8px' }}>Choose dental and vision coverage level</li>
            <li style={{ marginBottom: '8px' }}>Review prescription drug formulary</li>
            <li style={{ marginBottom: '8px' }}>Consider HSA or FSA for tax savings</li>
            <li style={{ marginBottom: '8px' }}>Review beneficiaries on life insurance</li>
            <li>Enroll in wellness programs</li>
          </ul>
        </Card>

        <Card title="Key Dates">
          <div style={{ lineHeight: '1.8', fontSize: '14px' }}>
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: RED, display: 'block', marginBottom: '4px' }}>Open Enrollment</strong>
              <span style={{ color: TEXT_DEFAULT }}>November 1 - November 30</span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: RED, display: 'block', marginBottom: '4px' }}>Coverage Effective</strong>
              <span style={{ color: TEXT_DEFAULT }}>January 1</span>
            </div>
            <div>
              <strong style={{ color: RED, display: 'block', marginBottom: '4px' }}>Questions?</strong>
              <span style={{ color: TEXT_DEFAULT }}>Contact Benefits Center: 844.690.0920</span>
            </div>
          </div>
        </Card>

        <Card title="Get Started">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ButtonPrimary href="https://RWJBHBenefits.com" target="_blank" rel="noopener noreferrer">
              Benefits Portal
            </ButtonPrimary>
            <ButtonSecondary onClick={() => window.open('https://flimp.live/Flimp_HRBenefitsVideoLibrary', '_blank')}>
              Watch Videos
            </ButtonSecondary>
            <ButtonTertiary href="tel:844-690-0920">
              Call 844.690.0920
            </ButtonTertiary>
          </div>
        </Card>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, paddingTop: '24px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px', borderRadius: '6px', border: `1px solid ${BORDER_COLOR}` }}>
        <h3 style={{ margin: '0 0 12px 0', color: NAVY, fontSize: '16px', fontWeight: '600' }}>
          Navigation Guide
        </h3>
        <p style={{ margin: '0', fontSize: '14px', color: TEXT_DEFAULT, lineHeight: '1.6' }}>
          Use the tabs above to explore specific benefit categories, carrier contacts, and detailed information about your coverage options. Each section includes plan details, costs, and contact information.
        </p>
      </div>
    </div>
  );
}

function MedicalTab() {
  const tableHeaderStyle: React.CSSProperties = { backgroundColor: NAVY, color: WHITE };
  const tableCellPadding: React.CSSProperties = { paddingTop: '14px', paddingBottom: '14px', paddingLeft: '14px', paddingRight: '14px' };
  const tableBorderStyle: React.CSSProperties = { borderBottom: `1px solid ${BORDER_COLOR}` };
  const tableAlternateRowStyle: React.CSSProperties = { backgroundColor: '#fafafa' };

  return (
    <div>
      <h2 style={{ margin: '0 0 16px 0', fontSize: '32px', fontWeight: '700', color: NAVY }}>
        Medical Plans
      </h2>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px', margin: '0 0 20px 0' }}>
          Plan Comparison
        </h3>
        <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '6px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', backgroundColor: WHITE }}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Feature</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Premier</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Extended</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Out-of-Area</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Carrier</td>
                <td style={tableCellPadding}>Aetna</td>
                <td style={tableCellPadding}>Aetna</td>
                <td style={tableCellPadding}>Aetna</td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Deductible (Individual)</td>
                <td style={tableCellPadding}>$750</td>
                <td style={tableCellPadding}>$1,500</td>
                <td style={tableCellPadding}>$2,500</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Out-of-Pocket Max</td>
                <td style={tableCellPadding}>$2,500</td>
                <td style={tableCellPadding}>$4,000</td>
                <td style={tableCellPadding}>$6,500</td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Preventive Care</td>
                <td style={tableCellPadding}>$0 copay</td>
                <td style={tableCellPadding}>$0 copay</td>
                <td style={tableCellPadding}>$0 copay</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Primary Care Visit</td>
                <td style={tableCellPadding}>$30 copay</td>
                <td style={tableCellPadding}>$40 copay</td>
                <td style={tableCellPadding}>20% coinsurance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '20px', margin: '0 0 20px 0' }}>
          Monthly Contributions by Salary Band
        </h3>
        <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '6px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', backgroundColor: WHITE }}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Salary Band</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Employee</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Employee + Spouse</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Family</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '600' }}>Under $35k</td>
                <td style={tableCellPadding}>$85</td>
                <td style={tableCellPadding}>$225</td>
                <td style={tableCellPadding}>$320</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '600' }}>$35k - $50k</td>
                <td style={tableCellPadding}>$105</td>
                <td style={tableCellPadding}>$265</td>
                <td style={tableCellPadding}>$380</td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '600' }}>$50k - $75k</td>
                <td style={tableCellPadding}>$135</td>
                <td style={tableCellPadding}>$315</td>
                <td style={tableCellPadding}>$450</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '600' }}>Over $75k</td>
                <td style={tableCellPadding}>$165</td>
                <td style={tableCellPadding}>$375</td>
                <td style={tableCellPadding}>$540</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <Card title="Learn More About Medical Plans">
          <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
            Review detailed plan documents and network information on the Aetna portal.
          </p>
          <ButtonPrimary href="https://aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer">
            Visit Aetna Portal
          </ButtonPrimary>
        </Card>

        <Card title="Medical Support">
          <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
            Questions about coverage, claims, or finding providers?
          </p>
          <a
            href="tel:855-546-5415"
            style={{
              display: 'inline-block',
              fontSize: '16px',
              fontWeight: '600',
              color: RED,
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            855.546.5415
          </a>
        </Card>
      </div>
    </div>
  );
}

function DentalVisionTab() {
  const tableHeaderStyle: React.CSSProperties = { backgroundColor: NAVY, color: WHITE };
  const tableCellPadding: React.CSSProperties = { paddingTop: '14px', paddingBottom: '14px', paddingLeft: '14px', paddingRight: '14px' };
  const tableBorderStyle: React.CSSProperties = { borderBottom: `1px solid ${BORDER_COLOR}` };
  const tableAlternateRowStyle: React.CSSProperties = { backgroundColor: '#fafafa' };

  return (
    <div>
      <h2 style={{ margin: '0 0 16px 0', fontSize: '32px', fontWeight: '700', color: NAVY }}>
        Dental & Vision Coverage
      </h2>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '20px', margin: '0 0 20px 0' }}>
          Delta Dental Plans
        </h3>
        <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '6px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', backgroundColor: WHITE }}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Service</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Base Plan</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Buy-Up Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Preventive (Cleanings, Exams)</td>
                <td style={tableCellPadding}>100% covered</td>
                <td style={tableCellPadding}>100% covered</td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Basic (Fillings, Root Canals)</td>
                <td style={tableCellPadding}>70% covered</td>
                <td style={tableCellPadding}>80% covered</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Major (Crowns, Bridges)</td>
                <td style={tableCellPadding}>50% covered</td>
                <td style={tableCellPadding}>60% covered</td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Orthodontia</td>
                <td style={tableCellPadding}>Not covered</td>
                <td style={tableCellPadding}>50% covered</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '600' }}>Annual Max</td>
                <td style={tableCellPadding}>$1,200</td>
                <td style={tableCellPadding}>$1,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '20px', margin: '0 0 20px 0' }}>
          EyeMed Vision Coverage
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          <Card title="Exam Benefits">
            <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px', color: TEXT_DEFAULT }}>
              <li style={{ marginBottom: '8px' }}>Eye exam: $10 copay</li>
              <li style={{ marginBottom: '8px' }}>Once per calendar year</li>
              <li>Includes dilation</li>
            </ul>
          </Card>
          <Card title="Frames & Lenses">
            <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px', color: TEXT_DEFAULT }}>
              <li style={{ marginBottom: '8px' }}>$130 frame allowance</li>
              <li style={{ marginBottom: '8px' }}>Single vision lenses: $10 copay</li>
              <li>Progressive lenses: $75 copay</li>
            </ul>
          </Card>
          <Card title="Contacts">
            <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px', color: TEXT_DEFAULT }}>
              <li style={{ marginBottom: '8px' }}>$130 contact allowance</li>
              <li style={{ marginBottom: '8px' }}>Exam included in vision coverage</li>
              <li>Once per calendar year</li>
            </ul>
          </Card>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        <Card title="Delta Dental Resources">
          <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
            Find in-network dentists and review plan details.
          </p>
          <ButtonPrimary href="https://deltadentalnj.com/RWJBH" target="_blank" rel="noopener noreferrer">
            Visit Delta Dental
          </ButtonPrimary>
          <p style={{ margin: '12px 0 0 0', fontSize: '13px', color: TEXT_DEFAULT }}>
            <strong>Support:</strong>{' '}
            <a href="tel:800-810-5234" style={{ color: RED, textDecoration: 'none', fontWeight: '600', marginLeft: '4px' }}>
              800.810.5234
            </a>
          </p>
        </Card>

        <Card title="EyeMed Vision Resources">
          <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
            Find network eye care providers and review benefits.
          </p>
          <ButtonPrimary href="https://eyemed.com" target="_blank" rel="noopener noreferrer">
            Visit EyeMed
          </ButtonPrimary>
          <p style={{ margin: '12px 0 0 0', fontSize: '13px', color: TEXT_DEFAULT }}>
            <strong>Support:</strong>{' '}
            <a href="tel:866-800-5457" style={{ color: RED, textDecoration: 'none', fontWeight: '600', marginLeft: '4px' }}>
              866.800.5457
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
}

function PrescriptionsTab() {
  const tableHeaderStyle: React.CSSProperties = { backgroundColor: NAVY, color: WHITE };
  const tableCellPadding: React.CSSProperties = { paddingTop: '14px', paddingBottom: '14px', paddingLeft: '14px', paddingRight: '14px' };
  const tableBorderStyle: React.CSSProperties = { borderBottom: `1px solid ${BORDER_COLOR}` };
  const tableAlternateRowStyle: React.CSSProperties = { backgroundColor: '#fafafa' };

  return (
    <div>
      <h2 style={{ margin: '0 0 16px 0', fontSize: '32px', fontWeight: '700', color: NAVY }}>
        Prescription Drug Coverage
      </h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: TEXT_DEFAULT, marginBottom: '40px' }}>
        CVS Caremark manages your prescription drug benefits through a 4-tier formulary system. Most generic medications have the lowest copays.
      </p>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '20px', margin: '0 0 20px 0' }}>
          Copay by Tier
        </h3>
        <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '6px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', backgroundColor: WHITE }}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Tier</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Type</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>30-Day Retail</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>90-Day Mail Order</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Tier 1</td>
                <td style={tableCellPadding}>Generic</td>
                <td style={tableCellPadding}>$10</td>
                <td style={tableCellPadding}>$25</td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Tier 2</td>
                <td style={tableCellPadding}>Brand Preferred</td>
                <td style={tableCellPadding}>$30</td>
                <td style={tableCellPadding}>$75</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Tier 3</td>
                <td style={tableCellPadding}>Brand Non-Preferred</td>
                <td style={tableCellPadding}>$60</td>
                <td style={tableCellPadding}>$150</td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Tier 4</td>
                <td style={tableCellPadding}>Specialty</td>
                <td style={tableCellPadding}>20% coinsurance</td>
                <td style={tableCellPadding}>20% coinsurance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '20px', margin: '0 0 20px 0' }}>
          Mail Order Pharmacy
        </h3>
        <div style={{ backgroundColor: LIGHT_BG, paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '6px', marginBottom: '24px', border: `1px solid ${BORDER_COLOR}` }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
            Save money by using mail order for maintenance medications (regular prescriptions you take long-term).
          </p>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: TEXT_DEFAULT }}>
            <li>Get 90-day supplies for the price of 2 retail fills</li>
            <li>Free shipping on all orders</li>
            <li>Automatic refills available</li>
            <li>Same quality medications, convenient delivery</li>
          </ul>
        </div>
      </div>

      <Card title="CVS Caremark Resources">
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
          Check the formulary, find pharmacies, and manage your prescriptions online.
        </p>
        <ButtonPrimary href="https://caremarkrxplaninfo.com/RWJBH" target="_blank" rel="noopener noreferrer">
          Visit CVS Caremark
        </ButtonPrimary>
        <p style={{ margin: '12px 0 0 0', fontSize: '13px', color: TEXT_DEFAULT }}>
          <strong>Support:</strong>{' '}
          <a href="tel:833-290-5676" style={{ color: RED, textDecoration: 'none', fontWeight: '600', marginLeft: '4px' }}>
            833.290.5676
          </a>
        </p>
      </Card>
    </div>
  );
}

function SpendingTab() {
  const tableHeaderStyle: React.CSSProperties = { backgroundColor: NAVY, color: WHITE };
  const tableCellPadding: React.CSSProperties = { paddingTop: '14px', paddingBottom: '14px', paddingLeft: '14px', paddingRight: '14px' };
  const tableBorderStyle: React.CSSProperties = { borderBottom: `1px solid ${BORDER_COLOR}` };
  const tableAlternateRowStyle: React.CSSProperties = { backgroundColor: '#fafafa' };

  return (
    <div>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: NAVY, margin: '0 0 16px 0' }}>
        Spending Accounts
      </h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: TEXT_DEFAULT, marginBottom: '40px' }}>
        Take advantage of tax-advantaged accounts to save on healthcare and dependent care expenses.
      </p>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '20px', margin: '0 0 20px 0' }}>
          2025 Account Limits & Contribution Limits
        </h3>
        <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '6px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', backgroundColor: WHITE }}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Account Type</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Annual Limit</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>
                  HSA
                  <br />
                  (Health Savings Account)
                </td>
                <td style={tableCellPadding}>
                  Individual: $4,150
                  <br />
                  Family: $8,300
                </td>
                <td style={tableCellPadding}>
                  Medical, dental, vision, and prescription expenses. Can roll over year to year.
                </td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>
                  FSA
                  <br />
                  (Flexible Spending Account)
                </td>
                <td style={tableCellPadding}>
                  $3,300
                </td>
                <td style={tableCellPadding}>
                  Medical, dental, vision, and prescription expenses. Use it or lose it by year end.
                </td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>
                  DCFSA
                  <br />
                  (Dependent Care FSA)
                </td>
                <td style={tableCellPadding}>
                  $5,000
                </td>
                <td style={tableCellPadding}>
                  Childcare, preschool, elder care. Use it or lose it by year end.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '20px', margin: '0 0 20px 0' }}>
          HSA vs. FSA Comparison
        </h3>
        <div style={{ overflowX: 'auto', border: `1px solid ${BORDER_COLOR}`, borderRadius: '6px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', backgroundColor: WHITE }}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>Feature</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>HSA</th>
                <th style={{ ...tableCellPadding, textAlign: 'left', fontWeight: '600' }}>FSA</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Requires HDHP enrollment</td>
                <td style={tableCellPadding}>Yes</td>
                <td style={tableCellPadding}>No</td>
              </tr>
              <tr style={{ ...tableBorderStyle, ...tableAlternateRowStyle }}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Rollover funds</td>
                <td style={tableCellPadding}>Yes (no limit)</td>
                <td style={tableCellPadding}>No ($640 carryover)</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Invest unused funds</td>
                <td style={tableCellPadding}>Yes</td>
                <td style={tableCellPadding}>No</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ ...tableCellPadding, fontWeight: '500' }}>Eligible expenses</td>
                <td style={tableCellPadding}>Healthcare & dependent care</td>
                <td style={tableCellPadding}>Healthcare only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '20px', margin: '0 0 20px 0' }}>
          HSA Eligibility
        </h3>
        <div style={{ backgroundColor: LIGHT_BG, paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '6px', border: `1px solid ${BORDER_COLOR}` }}>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: TEXT_DEFAULT }}>
            <li>Must be enrolled in an HSA-eligible health plan (HDHP)</li>
            <li>Cannot have other health coverage (with limited exceptions)</li>
            <li>Cannot be claimed as dependent on someone else's tax return</li>
            <li>Cannot be enrolled in Medicare</li>
          </ul>
        </div>
      </div>

      <Card title="Manage Your Accounts">
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
          View balances, submit claims, and manage your HSA and FSA online through Fidelity.
        </p>
        <ButtonPrimary href="https://netbenefits.com/RWJBarnabasHealth" target="_blank" rel="noopener noreferrer">
          Access Account Portal
        </ButtonPrimary>
      </Card>
    </div>
  );
}

function WellbeingTab() {
  return (
    <div>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: NAVY, margin: '0 0 16px 0' }}>
        Wellbeing & EAP
      </h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: TEXT_DEFAULT, marginBottom: '32px' }}>
        We support your mental, physical, and financial health with comprehensive wellness programs and 24/7 counseling support.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <Card title="Employee Assistance Program (EAP)">
          <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px' }}>
            <li>
              <strong>24/7 confidential counseling</strong>
            </li>
            <li>Up to 3 free sessions per year</li>
            <li>Mental health, substance abuse, legal, financial counseling</li>
            <li>Work/life coaching</li>
            <li>No cost to employees</li>
          </ul>
          <div style={{ marginTop: '16px' }}>
            <a
              href="tel:800-300-0628"
              style={{
                display: 'inline-block',
                backgroundColor: RED,
                color: WHITE,
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '16px',
                paddingRight: '16px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              Call EAP: 800.300.0628
            </a>
          </div>
        </Card>

        <Card title="Behavioral Health">
          <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px' }}>
            <li>
              <strong>$0 copay for initial mental health visits</strong>
            </li>
            <li>Therapy, psychiatry, and counseling covered</li>
            <li>Telehealth options available</li>
            <li>In-network providers across NJ</li>
            <li>Part of your medical plan</li>
          </ul>
        </Card>

        <Card title="Calm App - Meditation & Sleep">
          <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px' }}>
            <li>
              <strong>Complimentary access</strong>
            </li>
            <li>Meditation and sleep programs</li>
            <li>Stress reduction and mindfulness</li>
            <li>Music and master classes</li>
            <li>Available on all devices</li>
          </ul>
          <ButtonPrimary href="https://calm.com/b2b/RWJBarnabasHealth/subscribe" target="_blank" rel="noopener noreferrer" style={{ marginTop: '12px' }}>
            Get Started with Calm
          </ButtonPrimary>
        </Card>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Personify Health Wellness
        </h3>
        <div style={{ backgroundColor: LIGHT_BG, paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '6px', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6' }}>
            Get personalized coaching for fitness, nutrition, and chronic condition management.
          </p>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
            <li>Health coaching and lifestyle management</li>
            <li>Nutrition and fitness guidance</li>
            <li>Chronic disease management support</li>
            <li>One-on-one and group coaching sessions</li>
            <li>Fully integrated with your benefits</li>
          </ul>
          <ButtonPrimary href="https://join.personifyhealth.com/bhealthy" target="_blank" rel="noopener noreferrer" style={{ marginTop: '16px' }}>
            Join Personify Health
          </ButtonPrimary>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          RWJBarnabas Health Total Wellbeing
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
          Explore wellness resources, health assessments, and community programs designed for your health and well-being.
        </p>
        <ButtonPrimary href="https://RWJBHTotalWellbeing.com" target="_blank" rel="noopener noreferrer">
          Visit Wellbeing Portal
        </ButtonPrimary>
      </div>

      <div style={{ backgroundColor: '#FFF3F1', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '6px', borderLeft: `4px solid ${RED}` }}>
        <h4 style={{ margin: '0 0 12px 0', color: RED, fontWeight: '600' }}>Mental Health Matters</h4>
        <p style={{ margin: '0', fontSize: '14px', color: TEXT_DEFAULT }}>
          If you're in crisis, please reach out immediately. The National Suicide Prevention Lifeline is available 24/7 at 988, and the Crisis Text Line is available by texting HOME to 741741.
        </p>
      </div>
    </div>
  );
}

function RetirementTab() {
  return (
    <div>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: NAVY, margin: '0 0 16px 0' }}>
        Financial & Retirement
      </h2>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Fidelity 401(k) Plan
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <Card title="Employer Match">
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <p style={{ margin: '0 0 12px 0' }}>
                <strong>50% match</strong> on contributions up to 6% of your salary
              </p>
              <p style={{ margin: '0' }}>
                <em>Example: If you contribute 6%, we contribute 3%</em>
              </p>
            </div>
          </Card>

          <Card title="Vesting Schedule">
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <p style={{ margin: '0 0 12px 0' }}>
                <strong>Immediate vesting</strong> — all matching contributions are yours from day one
              </p>
              <p style={{ margin: '0' }}>No waiting period required</p>
            </div>
          </Card>

          <Card title="2025 Limits">
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <p style={{ margin: '0 0 8px 0' }}>
                <strong>Employee:</strong> $24,500
              </p>
              <p style={{ margin: '0' }}>
                <strong>Age 50+:</strong> $30,500
              </p>
            </div>
          </Card>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '12px' }}>
            Contribution Example by Salary
          </h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: NAVY, color: WHITE }}>
                <th style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'left', fontWeight: '600' }}>Annual Salary</th>
                <th style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'left', fontWeight: '600' }}>6% Contribution</th>
                <th style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'left', fontWeight: '600' }}>Employer Match</th>
                <th style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'left', fontWeight: '600' }}>Annual Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${BORDER_COLOR}` }}>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$40,000</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$2,400</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$1,200</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$1,200</td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${BORDER_COLOR}` }}>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$60,000</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$3,600</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$1,800</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$1,800</td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${BORDER_COLOR}` }}>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$80,000</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$4,800</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$2,400</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$2,400</td>
              </tr>
              <tr>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$100,000</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$6,000</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$3,000</td>
                <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>$3,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Card title="Start or Manage Your 401(k)">
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6' }}>
          Enroll, view your account, and access retirement planning tools on Fidelity NetBenefits.
        </p>
        <ButtonPrimary href="https://netbenefits.com/RWJBarnabasHealth" target="_blank" rel="noopener noreferrer">
          Access Fidelity Account
        </ButtonPrimary>
        <p style={{ margin: '12px 0 0 0', fontSize: '13px', color: '#999999' }}>
          <strong>Fidelity Support:</strong>{' '}
          <a href="tel:800-513-5015" style={{ color: RED, textDecoration: 'none', fontWeight: '600' }}>
            800.513.5015
          </a>
        </p>
      </Card>
    </div>
  );
}

function PTOTab() {
  return (
    <div>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: NAVY, margin: '0 0 16px 0' }}>
        Paid Time Off
      </h2>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Vacation Days
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE }}>
              <th style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'left', fontWeight: '600' }}>Years of Service</th>
              <th style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'left', fontWeight: '600' }}>Vacation Days</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: `1px solid ${BORDER_COLOR}` }}>
              <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>Year 1</td>
              <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>10 days</td>
            </tr>
            <tr style={{ borderBottom: `1px solid ${BORDER_COLOR}` }}>
              <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>Years 2-5</td>
              <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>15 days</td>
            </tr>
            <tr>
              <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>6+ years</td>
              <td style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px' }}>20 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Sick Leave
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>
          <strong>10 days per year</strong> for illness, medical appointments, and health-related needs. Carryover policies vary by department.
        </p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Holidays
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <Card title="Observed Holidays">
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
              <li>New Year's Day</li>
              <li>MLK Jr. Day</li>
              <li>Presidents Day</li>
              <li>Memorial Day</li>
              <li>Independence Day</li>
              <li>Labor Day</li>
              <li>Veterans Day</li>
              <li>Thanksgiving</li>
              <li>Christmas</li>
              <li>Floating Holiday (1 day)</li>
            </ul>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: TEXT_DEFAULT, marginBottom: '16px' }}>
          Parental Leave
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <Card title="Childbirth/Adoption">
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
              <li>
                <strong>8 weeks</strong> paid leave
              </li>
              <li>Available to birthing parent</li>
              <li>Must be taken within 12 months</li>
            </ul>
          </Card>

          <Card title="Parental Bonding">
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
              <li>
                <strong>4 weeks</strong> paid leave
              </li>
              <li>Available to non-birthing parent</li>
              <li>For bonding with newborn or newly adopted child</li>
            </ul>
          </Card>
        </div>
      </div>

      <div style={{ backgroundColor: LIGHT_BG, paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '6px' }}>
        <h4 style={{ margin: '0 0 12px 0', color: NAVY, fontWeight: '600' }}>PTO Request & Scheduling</h4>
        <p style={{ margin: '0', fontSize: '14px', color: TEXT_DEFAULT }}>
          Request and track paid time off through your HR system or speak with your manager. Policies may vary by location and role.
        </p>
      </div>
    </div>
  );
}

function ContactsTab() {
  return (
    <div>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: NAVY, margin: '0 0 16px 0' }}>
        Carrier & Benefits Contacts
      </h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: TEXT_DEFAULT, marginBottom: '32px' }}>
        Quick access to all carrier phone numbers, portals, and support contact information.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        <ContactCard
          title="RWJBarnabas Health Benefits"
          description="Enrollment, plan changes, and general benefits questions"
          phone="844.690.0920"
          phoneHref="tel:844-690-0920"
          link="https://RWJBHBenefits.com"
          linkText="Benefits Portal"
        />

        <ContactCard
          title="Care Navigation"
          description="Help finding doctors, hospitals, and care coordination"
          phone="844.424.2628"
          phoneHref="tel:844-424-2628"
        />

        <ContactCard
          title="Aetna Medical"
          description="Medical plan coverage, claims, and network information"
          phone="855.546.5415"
          phoneHref="tel:855-546-5415"
          link="https://aetnaresource.com/n/RWJBH"
          linkText="Aetna Portal"
        />

        <ContactCard
          title="CVS Caremark Pharmacy"
          description="Prescription coverage, formulary, and pharmacy support"
          phone="833.290.5676"
          phoneHref="tel:833-290-5676"
          link="https://caremarkrxplaninfo.com/RWJBH"
          linkText="Caremark Portal"
        />

        <ContactCard
          title="Delta Dental"
          description="Dental coverage, claims, and network dentist search"
          phone="800.810.5234"
          phoneHref="tel:800-810-5234"
          link="https://deltadentalnj.com/RWJBH"
          linkText="Delta Dental Portal"
        />

        <ContactCard
          title="EyeMed Vision"
          description="Vision coverage, provider search, and claims"
          phone="866.800.5457"
          phoneHref="tel:866-800-5457"
          link="https://eyemed.com"
          linkText="EyeMed Portal"
        />

        <ContactCard
          title="Employee Assistance Program (EAP)"
          description="24/7 counseling, mental health, and work-life support"
          phone="800.300.0628"
          phoneHref="tel:800-300-0628"
          emphasis
        />

        <ContactCard
          title="Personify Health"
          description="Wellness coaching, fitness, and nutrition guidance"
          phone="888.671.9395"
          phoneHref="tel:888-671-9395"
          link="https://join.personifyhealth.com/bhealthy"
          linkText="Join Personify Health"
        />

        <ContactCard
          title="Fidelity 401(k)"
          description="Retirement account access, plan information, and support"
          phone="800.513.5015"
          phoneHref="tel:800-513-5015"
          link="https://netbenefits.com/RWJBarnabasHealth"
          linkText="Fidelity Account"
        />

        <ContactCard
          title="Aon Voluntary Benefits"
          description="Voluntary benefits enrollment and claims"
          phone="844.428.6672"
          phoneHref="tel:844-428-6672"
          link="https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home"
          linkText="Aon Portal"
        />

        <ContactCard
          title="Wellness Portal"
          description="Health assessments, wellness programs, and resources"
          link="https://RWJBHTotalWellbeing.com"
          linkText="Wellness Portal"
        />

        <ContactCard
          title="Calm App"
          description="Meditation, sleep, and stress relief (complimentary)"
          link="https://calm.com/b2b/RWJBarnabasHealth/subscribe"
          linkText="Get Started with Calm"
        />
      </div>
    </div>
  );
}

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

interface CardProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function Card({ title, children, style }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: WHITE,
        border: `1px solid ${BORDER_COLOR}`,
        borderRadius: '6px',
        paddingTop: '24px',
        paddingBottom: '24px',
        paddingLeft: '20px',
        paddingRight: '20px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        (e.currentTarget as HTMLElement).style.borderColor = '#bbb';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
        (e.currentTarget as HTMLElement).style.borderColor = BORDER_COLOR;
      }}
    >
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: NAVY }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

interface ContactCardProps {
  title: string;
  description?: string;
  phone?: string;
  phoneHref?: string;
  link?: string;
  linkText?: string;
  emphasis?: boolean;
}

function ContactCard({ title, description, phone, phoneHref, link, linkText, emphasis }: ContactCardProps) {
  return (
    <Card
      title={title}
      style={{
        borderColor: emphasis ? RED : BORDER_COLOR,
        backgroundColor: emphasis ? '#FFF8F7' : WHITE,
      }}
    >
      {description && (
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', lineHeight: '1.6', color: '#999999' }}>
          {description}
        </p>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {phone && (
          <div>
            <a
              href={phoneHref}
              style={{
                display: 'inline-block',
                fontSize: '16px',
                fontWeight: '600',
                color: RED,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              {phone}
            </a>
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: NAVY,
              color: WHITE,
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '16px',
              paddingRight: '16px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              textAlign: 'center',
              maxWidth: '100%',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = RED;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = NAVY;
            }}
          >
            {linkText || 'Visit'}
          </a>
        )}
      </div>
    </Card>
  );
}

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}

function ButtonPrimary({ href, onClick, children, target = '_blank', rel = 'noopener noreferrer', style }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: RED,
    color: WHITE,
    paddingTop: '11px',
    paddingBottom: '11px',
    paddingLeft: '18px',
    paddingRight: '18px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, opacity 0.2s ease',
    ...style,
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        style={baseStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a01828')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = RED)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a01828')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = RED)}
    >
      {children}
    </button>
  );
}

function ButtonSecondary({ onClick, children, style }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-block',
        backgroundColor: WHITE,
        color: NAVY,
        paddingTop: '11px',
        paddingBottom: '11px',
        paddingLeft: '18px',
        paddingRight: '18px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '600',
        border: `1.5px solid ${NAVY}`,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = LIGHT_BG;
        (e.currentTarget as HTMLElement).style.borderColor = RED;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = WHITE;
        (e.currentTarget as HTMLElement).style.borderColor = NAVY;
      }}
    >
      {children}
    </button>
  );
}

function ButtonTertiary({ href, children, style }: ButtonProps) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        backgroundColor: 'transparent',
        color: RED,
        paddingTop: '11px',
        paddingBottom: '11px',
        paddingLeft: '18px',
        paddingRight: '18px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '600',
        border: `1.5px solid ${RED}`,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = '#FFF8F7';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
      }}
    >
      {children}
    </a>
  );
}
