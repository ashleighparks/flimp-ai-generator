'use client';

import { useState } from 'react';

interface BenefitsAtAGlanceProps {
  clientName?: string;
}

export default function BenefitsAtAGlance({
  clientName = 'RWJBarnabas Health',
}: BenefitsAtAGlanceProps) {
  const [activeTab, setActiveTab] = useState('medical');

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const tabs = [
    { id: 'medical', label: 'Medical' },
    { id: 'dental', label: 'Dental' },
    { id: 'vision', label: 'Vision' },
    { id: 'hsa', label: 'HSA/FSA' },
    { id: 'life', label: 'Life & Disability' },
    { id: '401k', label: '401(k)' },
    { id: 'pto', label: 'PTO' },
    { id: 'contacts', label: 'Contacts' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      }}
    >
      {/* Header Bar */}
      <div
        className="no-print"
        style={{
          backgroundColor: '#1B2F5C',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              backgroundColor: '#CC1F34',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '18px',
              fontWeight: '800',
            }}
          >
            BA
          </div>
          <div>
            <div
              style={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '700',
                margin: 0,
              }}
            >
              Benefits at a Glance
            </div>
            <div
              style={{
                color: '#0891b2',
                fontSize: '13px',
                fontWeight: '500',
                marginTop: '2px',
              }}
            >
              {clientName}
            </div>
          </div>
        </div>
        <button
          onClick={handlePrint}
          style={{
            padding: '10px 20px',
            backgroundColor: '#CC1F34',
            color: '#fff',
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
            e.currentTarget.style.backgroundColor = '#CC1F34';
          }}
        >
          Download / Print
        </button>
      </div>

      {/* Tab Bar */}
      <div
        className="no-print"
        style={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          overflowX: 'auto',
          position: 'sticky',
          top: '76px',
          zIndex: 99,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 'none',
              padding: '14px 20px',
              backgroundColor: activeTab === tab.id ? '#f0f0f0' : 'transparent',
              color: activeTab === tab.id ? '#1B2F5C' : '#666',
              border: 'none',
              borderBottom: activeTab === tab.id ? '3px solid #CC1F34' : 'none',
              fontSize: '14px',
              fontWeight: activeTab === tab.id ? '600' : '500',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.backgroundColor = '#f9f9f9';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fff',
          minHeight: 'calc(100vh - 152px)',
        }}
      >
        {/* Medical Tab */}
        {activeTab === 'medical' && (
          <div style={{ padding: '40px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2F5C',
                marginBottom: '8px',
              }}
            >
              Medical Plans
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            >
              2026 Coverage Options
            </p>

            {/* Key Callout */}
            <div
              style={{
                borderLeft: '4px solid #CC1F34',
                backgroundColor: '#fff8f8',
                padding: '16px',
                marginBottom: '32px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#CC1F34',
                }}
              >
                $0 Medical Premium at RWJBH Premier
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                  marginTop: '6px',
                }}
              >
                Employees who work at RWJBarnabas Health facilities pay zero premiums
              </div>
            </div>

            {/* Comparison Table */}
            <div style={{ marginBottom: '32px', overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                  backgroundColor: '#fff',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f0f0f0',
                      borderBottom: '2px solid #ddd',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Plan Feature
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      RWJBH Premier
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Extended
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Aetna Open Access
                    </th>
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
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.premier}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.extended}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.aetna}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contribution Table */}
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1B2F5C',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              Employee Per-Paycheck Contributions
            </h3>
            <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #ddd' }}>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Salary Band
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      RWJBH Premier
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Extended
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Aetna
                    </th>
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
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.band}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.premier}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.extended}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.aetna}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Carrier Info */}
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1B2F5C',
                marginTop: '40px',
                marginBottom: '16px',
              }}
            >
              Carrier Information
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
            >
              <div
                style={{
                  border: '1px solid #e5e7eb',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1B2F5C',
                    marginBottom: '8px',
                  }}
                >
                  RWJBH Premier & Extended
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#666',
                    lineHeight: '1.6',
                  }}
                >
                  <a
                    href="tel:+18773648700"
                    style={{
                      color: '#0891b2',
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
                      color: '#0891b2',
                      textDecoration: 'none',
                      fontWeight: '500',
                    }}
                  >
                    www.myhumanampu.com
                  </a>
                </div>
              </div>
              <div
                style={{
                  border: '1px solid #e5e7eb',
                  padding: '16px',
                  borderRadius: '6px',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1B2F5C',
                    marginBottom: '8px',
                  }}
                >
                  Aetna Open Access
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#666',
                    lineHeight: '1.6',
                  }}
                >
                  <a
                    href="tel:+18007268446"
                    style={{
                      color: '#0891b2',
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
                      color: '#0891b2',
                      textDecoration: 'none',
                      fontWeight: '500',
                    }}
                  >
                    www.aetna.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dental Tab */}
        {activeTab === 'dental' && (
          <div style={{ padding: '40px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2F5C',
                marginBottom: '8px',
              }}
            >
              Dental Coverage
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            >
              Delta Dental Plans
            </p>

            {/* Comparison Table */}
            <div style={{ marginBottom: '32px', overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f0f0f0',
                      borderBottom: '2px solid #ddd',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Coverage Type
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Base Plan
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Buy-Up Plan
                    </th>
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
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.coverage}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.base}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.buyup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Carrier Info */}
            <div
              style={{
                border: '1px solid #e5e7eb',
                padding: '16px',
                borderRadius: '6px',
                marginTop: '32px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '8px',
                }}
              >
                Delta Dental
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                <a
                  href="tel:+18005380746"
                  style={{
                    color: '#0891b2',
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
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  www.deltadentalins.com
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Vision Tab */}
        {activeTab === 'vision' && (
          <div style={{ padding: '40px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2F5C',
                marginBottom: '8px',
              }}
            >
              Vision Coverage
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            >
              EyeMed PLUS Plan
            </p>

            {/* Coverage Details */}
            <div style={{ marginBottom: '32px', overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f0f0f0',
                      borderBottom: '2px solid #ddd',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Service
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      In-Network Copay / Coverage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'Comprehensive Eye Exam', coverage: '$15 copay' },
                    { service: 'Frame Allowance', coverage: '$175 per calendar year' },
                    { service: 'Single Vision Lenses', coverage: 'Covered after copay' },
                    { service: 'Bifocal / Progressive Lenses', coverage: 'Covered after copay' },
                    { service: 'Contact Lens Exam', coverage: '$15 copay' },
                    { service: 'Contact Lens Allowance', coverage: '$150 per calendar year' },
                    { service: 'Standard Contacts', coverage: 'Covered after allowance' },
                    { service: 'Specialty Contacts', coverage: 'Additional cost required' },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.service}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>
                        {row.coverage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Info */}
            <div
              style={{
                borderLeft: '4px solid #0891b2',
                backgroundColor: '#f0f8fa',
                padding: '16px',
                marginBottom: '32px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '6px',
                }}
              >
                Exam Coverage Frequency
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                }}
              >
                Eye exams covered once per calendar year. Frames and lenses covered once per calendar year.
              </div>
            </div>

            {/* Carrier Info */}
            <div
              style={{
                border: '1px solid #e5e7eb',
                padding: '16px',
                borderRadius: '6px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '8px',
                }}
              >
                EyeMed
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                <a
                  href="tel:+18668936003"
                  style={{
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  (866) 893-6003
                </a>
                <br />
                <a
                  href="https://www.eyemed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  www.eyemed.com
                </a>
              </div>
            </div>
          </div>
        )}

        {/* HSA/FSA Tab */}
        {activeTab === 'hsa' && (
          <div style={{ padding: '40px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2F5C',
                marginBottom: '8px',
              }}
            >
              HSA & Spending Accounts
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            >
              Tax-Advantaged Healthcare Savings
            </p>

            {/* HSA vs FSA Table */}
            <div style={{ marginBottom: '32px', overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f0f0f0',
                      borderBottom: '2px solid #ddd',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Feature
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      HSA
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Healthcare FSA
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      DCFSA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: '2026 Contribution Limit (Individual)', hsa: '$4,300', hcfsa: '$3,300', dcfsa: '$5,000' },
                    { feature: '2026 Contribution Limit (Family)', hsa: '$8,550', hcfsa: 'N/A', dcfsa: 'N/A' },
                    { feature: 'Employer Match', hsa: 'None', hcfsa: 'None', dcfsa: 'None' },
                    { feature: 'Eligible for High Deductible Plan (HDHP)', hsa: 'Required', hcfsa: 'Optional with any plan', dcfsa: 'Any plan' },
                    { feature: 'Funds Roll Over Annually', hsa: 'Yes, unlimited', hcfsa: 'No, use-it-or-lose-it', dcfsa: 'No, use-it-or-lose-it' },
                    { feature: 'Investment Options', hsa: 'Yes (after $1,000 minimum)', hcfsa: 'No', dcfsa: 'No' },
                    { feature: 'Eligible for Withdrawal', hsa: 'Healthcare, expenses, Medicare', hcfsa: 'Qualified healthcare only', dcfsa: 'Dependent care only' },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.hsa}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.hcfsa}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.dcfsa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Callouts */}
            <div
              style={{
                borderLeft: '4px solid #0891b2',
                backgroundColor: '#f0f8fa',
                padding: '16px',
                marginBottom: '16px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '6px',
                }}
              >
                HSA Triple Tax Advantage
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                }}
              >
                Contributions are pre-tax, growth is tax-free, and withdrawals for qualified healthcare are tax-free.
              </div>
            </div>

            <div
              style={{
                borderLeft: '4px solid #CC1F34',
                backgroundColor: '#fff8f8',
                padding: '16px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '6px',
                }}
              >
                FSA Grace Period
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                }}
              >
                Use remaining funds through March 15 of the following year. Changes to elections must be made during Open Enrollment or upon qualifying life events.
              </div>
            </div>
          </div>
        )}

        {/* Life & Disability Tab */}
        {activeTab === 'life' && (
          <div style={{ padding: '40px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2F5C',
                marginBottom: '8px',
              }}
            >
              Life & Disability Insurance
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            >
              MetLife Coverage Options
            </p>

            {/* Coverage Details */}
            <div style={{ marginBottom: '32px', overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f0f0f0',
                      borderBottom: '2px solid #ddd',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Benefit Type
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Coverage Amount
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Key Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      benefit: 'Basic Life Insurance',
                      coverage: '1x annual salary, up to $1,000,000',
                      details: 'Employer paid, automatic coverage',
                    },
                    {
                      benefit: 'Supplemental Life Insurance',
                      coverage: 'Available in increments up to $500,000',
                      details: 'Employee paid, optional enrollment',
                    },
                    {
                      benefit: 'Dependent Life Insurance',
                      coverage: '$10,000 per spouse, $5,000 per child',
                      details: 'Optional, employee paid',
                    },
                    {
                      benefit: 'Short-Term Disability (STD)',
                      coverage: '60% of salary for 26 weeks',
                      details: 'Employer paid, non-occupational',
                    },
                    {
                      benefit: 'Long-Term Disability (LTD)',
                      coverage: '60% of salary up to $15,000/month',
                      details: 'Employer paid, benefits to age 65',
                    },
                    {
                      benefit: 'Accident & Critical Illness',
                      coverage: 'Lump sum payments up to $50,000',
                      details: 'Optional employee-paid coverage',
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.benefit}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.coverage}</td>
                      <td style={{ padding: '12px', color: '#666', fontSize: '12px' }}>
                        {row.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Carrier Info */}
            <div
              style={{
                border: '1px solid #e5e7eb',
                padding: '16px',
                borderRadius: '6px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '8px',
                }}
              >
                MetLife
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                <a
                  href="tel:+18006356166"
                  style={{
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  (800) 635-6166
                </a>
                <br />
                <a
                  href="https://www.metlife.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  www.metlife.com
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 401(k) Tab */}
        {activeTab === '401k' && (
          <div style={{ padding: '40px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2F5C',
                marginBottom: '8px',
              }}
            >
              401(k) Retirement Plan
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            >
              Fidelity Investments Management
            </p>

            {/* Key Callout */}
            <div
              style={{
                borderLeft: '4px solid #CC1F34',
                backgroundColor: '#fff8f8',
                padding: '16px',
                marginBottom: '32px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#CC1F34',
                }}
              >
                50% Matching Contribution
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                  marginTop: '6px',
                }}
              >
                Employer matches 50% of contributions up to 6% of your salary (maximum 3% of salary match). Immediate vesting on all contributions.
              </div>
            </div>

            {/* Plan Details */}
            <div style={{ marginBottom: '32px', overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f0f0f0',
                      borderBottom: '2px solid #ddd',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Plan Feature
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: '2026 Employee Deferral Limit', details: '$23,500 (under age 50)' },
                    { feature: 'Catch-Up Contributions (age 50+)', details: 'Additional $7,500 allowed' },
                    { feature: 'Employer Match', details: '50% up to 6%, capped at 3% of salary' },
                    { feature: 'Match Vesting Schedule', details: 'Immediate vesting' },
                    { feature: 'Loan Provisions', details: 'Up to $50,000 or 50% of balance' },
                    { feature: 'Investment Options', details: 'Self-directed brokerage available' },
                    { feature: 'Roth 401(k) Option', details: 'Available for after-tax contributions' },
                    { feature: 'Plan Year', details: 'January 1 - December 31' },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Enrollment Info */}
            <div
              style={{
                borderLeft: '4px solid #0891b2',
                backgroundColor: '#f0f8fa',
                padding: '16px',
                marginBottom: '32px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '6px',
                }}
              >
                Eligibility
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                }}
              >
                Eligible on first day of employment. No waiting period. Contributions are deducted on a pre-tax basis.
              </div>
            </div>

            {/* Carrier Info */}
            <div
              style={{
                border: '1px solid #e5e7eb',
                padding: '16px',
                borderRadius: '6px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '8px',
                }}
              >
                Fidelity Investments
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: '1.6',
                }}
              >
                <a
                  href="tel:+18003434529"
                  style={{
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  (800) 343-4529
                </a>
                <br />
                <a
                  href="https://www.fidelity.com/401k"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  www.fidelity.com/401k
                </a>
              </div>
            </div>
          </div>
        )}

        {/* PTO Tab */}
        {activeTab === 'pto' && (
          <div style={{ padding: '40px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2F5C',
                marginBottom: '8px',
              }}
            >
              Paid Time Off
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            >
              Vacation, Holidays, Sick Leave & Parental Leave
            </p>

            {/* Vacation by Tenure */}
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1B2F5C',
                marginTop: '0',
                marginBottom: '16px',
              }}
            >
              Vacation Days by Tenure
            </h3>
            <div style={{ marginBottom: '32px', overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f0f0f0',
                      borderBottom: '2px solid #ddd',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Years of Service
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Days Per Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tenure: 'Year 1', days: '15 days' },
                    { tenure: 'Years 2-4', days: '18 days' },
                    { tenure: 'Years 5-9', days: '21 days' },
                    { tenure: '10+ years', days: '25 days' },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.tenure}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Other PTO */}
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1B2F5C',
                marginTop: '32px',
                marginBottom: '16px',
              }}
            >
              Additional Paid Time Off
            </h3>
            <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: '#f0f0f0',
                      borderBottom: '2px solid #ddd',
                    }}
                  >
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Leave Type
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1B2F5C',
                      }}
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { leave: 'Holidays', details: '9 paid holidays per year' },
                    { leave: 'Sick Leave', details: '10 days per year, can be used for personal or family illness' },
                    { leave: 'Parental Leave (Birth)', details: '8 weeks fully paid' },
                    { leave: 'Parental Leave (Adoption/Non-birth)', details: '2 weeks fully paid' },
                    { leave: 'Bereavement Leave', details: '3-5 days (varies by relationship)' },
                    { leave: 'Jury Duty', details: 'Paid time off as required by law' },
                    { leave: 'Volunteer Time Off', details: '2 days per year for charitable work' },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#fafafa' : '#fff',
                        borderBottom: '1px solid #e5e7eb',
                      }}
                    >
                      <td style={{ padding: '12px', fontWeight: '500', color: '#333' }}>
                        {row.leave}
                      </td>
                      <td style={{ padding: '12px', color: '#666' }}>{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Callout */}
            <div
              style={{
                borderLeft: '4px solid #0891b2',
                backgroundColor: '#f0f8fa',
                padding: '16px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '6px',
                }}
              >
                Carryover Policy
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                }}
              >
                Unused vacation days may be carried over to the following calendar year up to the maximum allowed. Please check with HR for specific carryover limits.
              </div>
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div style={{ padding: '40px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2F5C',
                marginBottom: '8px',
              }}
            >
              Benefits Contacts
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            >
              Carrier Information & HR Support
            </p>

            {/* Contacts Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                {
                  name: 'RWJBarnabas Health HR Benefits',
                  phone: '(732) 235-9000',
                  email: 'benefits@rwjbh.org',
                  url: 'https://www.rwjbarnabashealthcareers.org',
                },
                {
                  name: 'Humana (RWJBH Premier & Extended)',
                  phone: '(877) 364-8700',
                  email: null,
                  url: 'https://www.myhumanampu.com',
                },
                {
                  name: 'Aetna Open Access',
                  phone: '(800) 726-8446',
                  email: null,
                  url: 'https://www.aetna.com',
                },
                {
                  name: 'Delta Dental',
                  phone: '(800) 538-0746',
                  email: null,
                  url: 'https://www.deltadentalins.com',
                },
                {
                  name: 'EyeMed Vision',
                  phone: '(866) 893-6003',
                  email: null,
                  url: 'https://www.eyemed.com',
                },
                {
                  name: 'MetLife Life & Disability',
                  phone: '(800) 635-6166',
                  email: null,
                  url: 'https://www.metlife.com',
                },
                {
                  name: 'Fidelity 401(k)',
                  phone: '(800) 343-4529',
                  email: null,
                  url: 'https://www.fidelity.com/401k',
                },
                {
                  name: 'ADP Workforce Now (Payroll & Time)',
                  phone: '(866) 234-6006',
                  email: null,
                  url: 'https://www.adp.com',
                },
              ].map((contact, idx) => (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #e5e7eb',
                    padding: '20px',
                    borderRadius: '8px',
                    backgroundColor: '#fafafa',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 4px 12px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = '#0891b2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#1B2F5C',
                      marginBottom: '12px',
                    }}
                  >
                    {contact.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#666' }}>
                    {contact.phone && (
                      <div style={{ marginBottom: '8px' }}>
                        <a
                          href={`tel:${contact.phone.replace(/\D/g, '')}`}
                          style={{
                            color: '#0891b2',
                            textDecoration: 'none',
                            fontWeight: '500',
                          }}
                        >
                          {contact.phone}
                        </a>
                      </div>
                    )}
                    {contact.email && (
                      <div style={{ marginBottom: '8px' }}>
                        <a
                          href={`mailto:${contact.email}`}
                          style={{
                            color: '#0891b2',
                            textDecoration: 'none',
                            fontWeight: '500',
                          }}
                        >
                          {contact.email}
                        </a>
                      </div>
                    )}
                    {contact.url && (
                      <div>
                        <a
                          href={contact.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#0891b2',
                            textDecoration: 'none',
                            fontWeight: '500',
                          }}
                        >
                          Visit Portal
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Callout */}
            <div
              style={{
                borderLeft: '4px solid #CC1F34',
                backgroundColor: '#fff8f8',
                padding: '16px',
                marginTop: '32px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1B2F5C',
                  marginBottom: '6px',
                }}
              >
                Questions?
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#666',
                }}
              >
                For benefits questions, contact RWJBarnabas Health HR at{' '}
                <a
                  href="tel:+17322359000"
                  style={{
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  (732) 235-9000
                </a>
                {' '}or email{' '}
                <a
                  href="mailto:benefits@rwjbh.org"
                  style={{
                    color: '#0891b2',
                    textDecoration: 'none',
                    fontWeight: '500',
                  }}
                >
                  benefits@rwjbh.org
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: #fff;
          }
          div {
            break-inside: avoid;
          }
          table {
            break-inside: avoid;
          }
          h2 {
            break-after: avoid;
          }
          h3 {
            break-after: avoid;
          }
        }
      `}</style>
    </div>
  );
}
