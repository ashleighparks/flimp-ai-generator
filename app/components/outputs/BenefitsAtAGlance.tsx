'use client';

import { useState } from 'react';

interface BenefitsAtAGlanceProps {
  clientName?: string;
}

// Design System Colors (Flimp)
const NAVY = '#1B2F5C';
const RED = '#CC1F34';
const LIGHT_BG = '#EBF0F5';
const TEXT_DEFAULT = '#333333';
const TEXT_LIGHT = '#636366';
const BORDER_COLOR = '#ddd';
const WHITE = '#ffffff';
const FONT_FAMILY = 'Arial, "Open Sans", Lato, sans-serif';

// Tabs configuration
const TABS = [
  { id: 'medical', label: 'Medical' },
  { id: 'dental', label: 'Dental' },
  { id: 'vision', label: 'Vision' },
  { id: 'hsa', label: 'HSA/FSA' },
  { id: 'life', label: 'Life & Disability' },
  { id: '401k', label: '401(k)' },
  { id: 'pto', label: 'PTO' },
  { id: 'contacts', label: 'Contacts' },
];

// Helper Components
function Card({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div
      style={{
        backgroundColor: WHITE,
        border: `1px solid ${BORDER_COLOR}`,
        borderRadius: '8px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        padding: '20px',
      }}
    >
      {title && (
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: TEXT_DEFAULT }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: LIGHT_BG,
        borderLeft: `4px solid ${RED}`,
        padding: '20px',
        borderRadius: '4px',
        marginBottom: '32px',
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        margin: '0 0 24px 0',
        fontSize: '24px',
        fontWeight: '700',
        color: RED,
        borderBottom: `2px solid ${RED}`,
        paddingBottom: '8px',
      }}
    >
      {children}
    </h2>
  );
}

export default function BenefitsAtAGlance({
  clientName = 'RWJBarnabas Health',
}: BenefitsAtAGlanceProps) {
  const [activeTab, setActiveTab] = useState('medical');

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: WHITE,
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Header - Full Width Navy */}
      <header
        style={{
          backgroundColor: NAVY,
          color: WHITE,
          paddingTop: '32px',
          paddingBottom: '32px',
          paddingLeft: '40px',
          paddingRight: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ margin: '0', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.5px' }}>
              {clientName}
            </h1>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', opacity: '0.9' }}>
              Benefits at a Glance
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="no-print"
            style={{
              padding: '10px 20px',
              backgroundColor: RED,
              color: WHITE,
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A61A2A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = RED;
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #ff9500';
              e.currentTarget.style.outlineOffset = '-4px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            Print / Download
          </button>
        </div>
      </header>

      {/* Sticky Tab Navigation */}
      <nav
        className="no-print"
        style={{
          backgroundColor: WHITE,
          borderBottom: `1px solid ${BORDER_COLOR}`,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
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
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #ff9500';
                e.currentTarget.style.outlineOffset = '-4px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = NAVY;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = TEXT_LIGHT;
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main style={{ flex: 1, paddingTop: '40px', paddingBottom: '40px', paddingLeft: '40px', paddingRight: '40px', maxWidth: '960px', margin: '0 auto', width: '100%' }}>
        {activeTab === 'medical' && <MedicalTab />}
        {activeTab === 'dental' && <DentalTab />}
        {activeTab === 'vision' && <VisionTab />}
        {activeTab === 'hsa' && <HSATab />}
        {activeTab === 'life' && <LifeTab />}
        {activeTab === '401k' && <RetirementTab />}
        {activeTab === 'pto' && <PTOTab />}
        {activeTab === 'contacts' && <ContactsTab />}
      </main>
    </div>
  );
}

// ============================================================================
// TAB COMPONENTS
// ============================================================================

function MedicalTab() {
  return (
    <div>
      <SectionTitle>Medical Plans</SectionTitle>

      <Callout>
        <div style={{ fontSize: '18px', fontWeight: '700', color: RED, marginBottom: '8px' }}>
          $0 Medical Premium at RWJBH Premier
        </div>
        <div style={{ fontSize: '14px', color: TEXT_DEFAULT }}>
          Employees who work at RWJBarnabas Health facilities pay zero premiums
        </div>
      </Callout>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Plan Feature</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>RWJBH Premier</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Extended</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Aetna Open Access</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: 'In-Network Deductible', premier: '$500', extended: '$1,500', aetna: '$2,000' },
              { feature: 'Out-of-Network Deductible', premier: '$1,000', extended: '$3,000', aetna: '$4,000' },
              { feature: 'In-Network Out-of-Pocket Max', premier: '$3,000', extended: '$5,000', aetna: '$7,000' },
              { feature: 'Out-of-Network Out-of-Pocket Max', premier: '$6,000', extended: '$10,000', aetna: '$14,000' },
              { feature: 'Primary Care Copay', premier: '$20', extended: '$30', aetna: '$40' },
              { feature: 'Specialist Copay', premier: '$40', extended: '$60', aetna: '$70' },
              { feature: 'Urgent Care Copay', premier: '$50', extended: '$75', aetna: '$100' },
              { feature: 'ER Copay (waived if admitted)', premier: '$200', extended: '$350', aetna: '$500' },
              { feature: 'Preventive Care', premier: '100%', extended: '100%', aetna: '100%' },
              { feature: 'Maternity (In-Network)', premier: '$0', extended: '$0', aetna: '$200' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.feature}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.premier}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.extended}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.aetna}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Employee Per-Paycheck Contributions</SectionTitle>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Salary Band</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>RWJBH Premier</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Extended</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Aetna</th>
            </tr>
          </thead>
          <tbody>
            {[
              { band: 'Under $30,000', premier: '$0', extended: '$45', aetna: '$92' },
              { band: '$30,000 - $49,999', premier: '$0', extended: '$67', aetna: '$138' },
              { band: '$50,000 - $74,999', premier: '$23', extended: '$92', aetna: '$184' },
              { band: '$75,000+', premier: '$46', extended: '$115', aetna: '$230' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.band}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.premier}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.extended}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.aetna}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Carrier Information</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <Card title="RWJBH Premier & Extended">
          <div style={{ fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
            <a
              href="tel:+18773648700"
              style={{
                color: RED,
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              (877) 364-8700
            </a>
            <br />
            <a
              href="https://www.myhumanampu.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: RED,
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              www.myhumanampu.com
            </a>
          </div>
        </Card>

        <Card title="Aetna Open Access">
          <div style={{ fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
            <a
              href="tel:+18007268446"
              style={{
                color: RED,
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              (800) 726-8446
            </a>
            <br />
            <a
              href="https://www.aetna.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: RED,
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              www.aetna.com
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

function DentalTab() {
  return (
    <div>
      <SectionTitle>Dental Coverage</SectionTitle>

      <div style={{ marginBottom: '16px' }}>
        <p style={{ fontSize: '14px', color: TEXT_LIGHT, margin: '0 0 24px 0' }}>
          Delta Dental Plans
        </p>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Coverage Type</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Base Plan</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Buy-Up Plan</th>
            </tr>
          </thead>
          <tbody>
            {[
              { coverage: 'Annual Deductible', base: '$50', buyup: '$50' },
              { coverage: 'Annual Maximum Benefit', base: '$1,200', buyup: '$1,500' },
              { coverage: 'Preventive (Exams, Cleanings)', base: '100%', buyup: '100%' },
              { coverage: 'Basic (Fillings, Extractions)', base: '80%', buyup: '85%' },
              { coverage: 'Major (Crowns, Bridges)', base: '50%', buyup: '60%' },
              { coverage: 'Orthodontia (Adult)', base: 'Not covered', buyup: '50% up to $1,200 lifetime' },
              { coverage: 'Orthodontia (Child)', base: 'Not covered', buyup: '50% up to $2,000 lifetime' },
              { coverage: 'Employee Monthly Premium', base: '$18', buyup: '$38' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.coverage}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.base}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.buyup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Carrier Information</SectionTitle>

      <Card title="Delta Dental">
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
          <a
            href="tel:+18005380746"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            (800) 538-0746
          </a>
          <br />
          <a
            href="https://www.deltadentalins.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            www.deltadentalins.com
          </a>
        </div>
      </Card>
    </div>
  );
}

function VisionTab() {
  return (
    <div>
      <SectionTitle>Vision Coverage</SectionTitle>

      <div style={{ marginBottom: '16px' }}>
        <p style={{ fontSize: '14px', color: TEXT_LIGHT, margin: '0 0 24px 0' }}>
          EyeMed PLUS Plan
        </p>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Coverage Type</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>In-Network</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Out-of-Network</th>
            </tr>
          </thead>
          <tbody>
            {[
              { coverage: 'Eye Exam', innet: '100%', outnet: '100%, up to $50' },
              { coverage: 'Frames', innet: '$150 allowance', outnet: 'Up to $70' },
              { coverage: 'Single Vision Lenses', innet: '100%', outnet: 'Up to $45' },
              { coverage: 'Bifocal Lenses', innet: '100%', outnet: 'Up to $75' },
              { coverage: 'Trifocal Lenses', innet: '100%', outnet: 'Up to $100' },
              { coverage: 'Progressive Lenses', innet: '100%', outnet: 'Up to $120' },
              { coverage: 'Contact Lenses', innet: '$200 allowance', outnet: 'Up to $150' },
              { coverage: 'Frequency', innet: 'Once per 12 months', outnet: 'Once per 12 months' },
              { coverage: 'Employee Monthly Premium', innet: '$7', outnet: '$7' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.coverage}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.innet}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.outnet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Carrier Information</SectionTitle>

      <Card title="EyeMed">
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
          <a
            href="tel:+18887931386"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            (888) 793-1386
          </a>
          <br />
          <a
            href="https://www.eyemedvisioncare.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            www.eyemedvisioncare.com
          </a>
        </div>
      </Card>
    </div>
  );
}

function HSATab() {
  return (
    <div>
      <SectionTitle>HSA/FSA - Spending Accounts</SectionTitle>

      <Callout>
        <div style={{ fontSize: '16px', fontWeight: '700', color: RED, marginBottom: '8px' }}>
          Tax-Advantaged Savings
        </div>
        <div style={{ fontSize: '14px', color: TEXT_DEFAULT }}>
          Use HSA or Dependent Care FSA to set aside pre-tax dollars for qualified medical and dependent care expenses.
        </div>
      </Callout>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Feature</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>HSA</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Dependent Care FSA</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: 'Eligibility', hsa: 'Must be enrolled in High Deductible Health Plan', fsa: 'All employees' },
              { feature: '2026 Employee Contribution Limit', hsa: '$4,300 individual / $8,550 family', fsa: '$5,300 per year' },
              { feature: 'Employer Match', hsa: '$300 individual / $500 family', fsa: 'None' },
              { feature: 'Use For', hsa: 'Qualified medical, dental, vision, prescription expenses', fsa: 'Dependent care (daycare, preschool, summer camp)' },
              { feature: 'Unused Funds', hsa: 'Roll over indefinitely (portable)', fsa: 'Forfeit at end of plan year (use-it-or-lose-it)' },
              { feature: 'Withdrawals After 65', hsa: 'Any purpose (taxed if non-medical)', fsa: 'Plan ends' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.feature}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.hsa}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.fsa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Account Administration</SectionTitle>

      <Card title="Benefit Plans Administrator (BPA)">
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
          <a
            href="tel:+18884842540"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            (888) 484-2540
          </a>
          <br />
          <a
            href="https://www.bpacorp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            www.bpacorp.com
          </a>
        </div>
      </Card>
    </div>
  );
}

function LifeTab() {
  return (
    <div>
      <SectionTitle>Life & Disability Insurance</SectionTitle>

      <Callout>
        <div style={{ fontSize: '16px', fontWeight: '700', color: RED, marginBottom: '8px' }}>
          Comprehensive Protection
        </div>
        <div style={{ fontSize: '14px', color: TEXT_DEFAULT }}>
          Coverage includes life insurance, accidental death & dismemberment, short-term and long-term disability.
        </div>
      </Callout>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Benefit Type</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Coverage Amount</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Cost to Employee</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: 'Basic Life Insurance', amount: '2x annual salary (max $500,000)', cost: 'Company-paid' },
              { type: 'Supplemental Life Insurance', amount: 'Up to 6x salary in $10,000 increments', cost: 'Employee-paid' },
              { type: 'Accidental Death & Dismemberment', amount: 'Up to $250,000', cost: 'Company-paid' },
              { type: 'Short-Term Disability', amount: '60% of salary (max $2,500/week)', cost: 'Company-paid' },
              { type: 'Long-Term Disability', amount: '60% of salary (max $5,000/month)', cost: 'Company-paid' },
              { type: 'Spouse Life Insurance (Supplemental)', amount: 'Up to $500,000', cost: 'Employee-paid' },
              { type: 'Child Life Insurance (Supplemental)', amount: 'Up to $10,000', cost: 'Employee-paid' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.type}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.amount}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Plan Administration</SectionTitle>

      <Card title="Metropolitan Life Insurance">
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
          <a
            href="tel:+18003627474"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            (800) 362-7474
          </a>
          <br />
          <a
            href="https://www.metlife.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            www.metlife.com
          </a>
        </div>
      </Card>
    </div>
  );
}

function RetirementTab() {
  return (
    <div>
      <SectionTitle>401(k) Retirement Plan</SectionTitle>

      <Callout>
        <div style={{ fontSize: '16px', fontWeight: '700', color: RED, marginBottom: '8px' }}>
          Build Your Retirement
        </div>
        <div style={{ fontSize: '14px', color: TEXT_DEFAULT }}>
          RWJBH matches contributions and offers investment flexibility with Roth and Traditional options.
        </div>
      </Callout>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Feature</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: '2026 Contribution Limit', details: '$24,500 per year (age 49 and under)' },
              { feature: 'Age 50+ Catch-Up', details: '+$8,500 additional per year' },
              { feature: 'Company Match', details: '100% of first 4% of contributions' },
              { feature: 'Vesting Schedule', details: 'Immediately vested (match is yours right away)' },
              { feature: 'Investment Options', details: '40+ mutual funds, target-date funds, and self-directed brokerage' },
              { feature: 'Plan Types', details: 'Traditional 401(k) and Roth 401(k) available' },
              { feature: 'Loans', details: 'Can borrow up to 50% of balance, minimum $1,000' },
              { feature: 'Roth Conversions', details: 'Convert Traditional to Roth at retirement' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.feature}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Plan Administration</SectionTitle>

      <Card title="Fidelity Investments">
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: TEXT_DEFAULT }}>
          <a
            href="tel:+18003433548"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            (800) 343-3548
          </a>
          <br />
          <a
            href="https://www.fidelity.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            www.fidelity.com
          </a>
        </div>
      </Card>
    </div>
  );
}

function PTOTab() {
  return (
    <div>
      <SectionTitle>Paid Time Off</SectionTitle>

      <Callout>
        <div style={{ fontSize: '16px', fontWeight: '700', color: RED, marginBottom: '8px' }}>
          Generous PTO Policy
        </div>
        <div style={{ fontSize: '14px', color: TEXT_DEFAULT }}>
          Combine Vacation, Sick Time, and Personal Days into a single flexible PTO bank.
        </div>
      </Callout>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Years of Service</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Annual PTO Days</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Annual Hours (Full-Time)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { years: 'New hires (0-2 years)', days: '18 days', hours: '144 hours' },
              { years: '3-5 years', days: '20 days', hours: '160 hours' },
              { years: '6-10 years', days: '23 days', hours: '184 hours' },
              { years: '11-15 years', days: '25 days', hours: '200 hours' },
              { years: '16+ years', days: '27 days', hours: '216 hours' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.years}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.days}</td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            backgroundColor: WHITE,
          }}
        >
          <thead>
            <tr style={{ backgroundColor: NAVY, color: WHITE, fontWeight: '600' }}>
              <th style={{ padding: '14px', textAlign: 'left' }}>Holiday/Benefit</th>
              <th style={{ padding: '14px', textAlign: 'left' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { holiday: 'Paid Holidays', details: '10 paid holidays per year (New Year, MLK Jr., Presidents, Memorial, Independence, Labor, Thanksgiving, Christmas, plus 2 floating)' },
              { holiday: 'Bereavement Leave', details: '3-5 days (immediate family), 1 day (extended family)' },
              { holiday: 'Jury Duty', details: 'Paid leave as required by law' },
              { holiday: 'Volunteer Time Off', details: '2 days per year for volunteer work' },
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? WHITE : '#fafafa',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                <td style={{ padding: '14px', fontWeight: '500', color: TEXT_DEFAULT }}>
                  {row.holiday}
                </td>
                <td style={{ padding: '14px', color: TEXT_DEFAULT }}>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ContactsTab() {
  return (
    <div>
      <SectionTitle>Benefits Contacts & Resources</SectionTitle>

      <Callout>
        <div style={{ fontSize: '16px', fontWeight: '700', color: RED, marginBottom: '8px' }}>
          Need Help?
        </div>
        <div style={{ fontSize: '14px', color: TEXT_DEFAULT }}>
          Contact the Benefits Center for questions about enrollment, claims, or plan details.
        </div>
      </Callout>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
        <Card title="Benefits Center">
          <div style={{ fontSize: '14px', color: TEXT_DEFAULT, lineHeight: '1.8' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: TEXT_LIGHT, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Phone
              </div>
              <a
                href="tel:844-690-0920"
                style={{
                  color: RED,
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '15px',
                }}
              >
                844.690.0920
              </a>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: TEXT_LIGHT, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Hours
              </div>
              <div>Monday - Friday, 8 AM - 6 PM EST</div>
            </div>
          </div>
        </Card>

        <Card title="EAP (Employee Assistance Program)">
          <div style={{ fontSize: '14px', color: TEXT_DEFAULT, lineHeight: '1.8' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: TEXT_LIGHT, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Phone (24/7)
              </div>
              <a
                href="tel:800-300-0628"
                style={{
                  color: RED,
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '15px',
                }}
              >
                800.300.0628
              </a>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: TEXT_LIGHT, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Services
              </div>
              <div>Counseling, legal advice, financial planning</div>
            </div>
          </div>
        </Card>

        <Card title="Benefits Portal">
          <div style={{ fontSize: '14px', color: TEXT_DEFAULT, lineHeight: '1.8' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: TEXT_LIGHT, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Website
              </div>
              <a
                href="https://RWJBHBenefits.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: RED,
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
              >
                RWJBHBenefits.com
              </a>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: TEXT_LIGHT, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Features
              </div>
              <div>Enroll, check claims, update beneficiaries</div>
            </div>
          </div>
        </Card>

        <Card title="Wellness Portal">
          <div style={{ fontSize: '14px', color: TEXT_DEFAULT, lineHeight: '1.8' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: TEXT_LIGHT, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Website
              </div>
              <a
                href="https://RWJBHTotalWellbeing.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: RED,
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
              >
                RWJBHTotalWellbeing.com
              </a>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: TEXT_LIGHT, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Programs
              </div>
              <div>Fitness, nutrition, mental health resources</div>
            </div>
          </div>
        </Card>
      </div>

      <SectionTitle>Carrier Direct Lines</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <Card title="Medical (Humana)">
          <a
            href="tel:+18773648700"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            (877) 364-8700
          </a>
          <a
            href="tel:+18007268446"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
              display: 'block',
            }}
          >
            (800) 726-8446 (Aetna)
          </a>
        </Card>

        <Card title="Dental & Vision">
          <a
            href="tel:+18005380746"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            (800) 538-0746 (Delta Dental)
          </a>
          <a
            href="tel:+18887931386"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
              display: 'block',
            }}
          >
            (888) 793-1386 (EyeMed)
          </a>
        </Card>

        <Card title="Life & Retirement">
          <a
            href="tel:+18003627474"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            (800) 362-7474 (MetLife)
          </a>
          <a
            href="tel:+18003433548"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
              display: 'block',
            }}
          >
            (800) 343-3548 (Fidelity 401k)
          </a>
        </Card>

        <Card title="Flexible Spending">
          <a
            href="tel:+18884842540"
            style={{
              color: RED,
              textDecoration: 'none',
              fontWeight: '500',
              display: 'block',
            }}
          >
            (888) 484-2540 (BPA)
          </a>
        </Card>
      </div>
    </div>
  );
}
