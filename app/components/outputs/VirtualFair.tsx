'use client';

import { useState } from 'react';

interface VirtualFairProps {
  clientName?: string;
}

type Tab =
  | 'entrance'
  | 'exhibitHall'
  | 'medicalPlans'
  | 'dentalVision'
  | 'prescriptions'
  | 'spendingAccounts'
  | 'wellnessEap'
  | 'financialRetirement'
  | 'paidTimeOff'
  | 'contacts';

const TABS: { id: Tab; label: string }[] = [
  { id: 'entrance', label: 'Entrance' },
  { id: 'exhibitHall', label: 'Exhibit Hall' },
  { id: 'medicalPlans', label: 'Medical Plans' },
  { id: 'dentalVision', label: 'Dental & Vision' },
  { id: 'prescriptions', label: 'Prescriptions' },
  { id: 'spendingAccounts', label: 'Spending Accounts' },
  { id: 'wellnessEap', label: 'Wellness & EAP' },
  { id: 'financialRetirement', label: 'Financial & Retirement' },
  { id: 'paidTimeOff', label: 'Paid Time Off' },
  { id: 'contacts', label: 'Contacts' },
];

const BOOTHS = [
  {
    id: 'medicalPlans',
    label: 'Medical Plans',
    description: 'Aetna coverage options',
    icon: 'A',
    accentColor: '#CC1F34'
  },
  {
    id: 'dentalVision',
    label: 'Dental & Vision',
    description: 'Delta Dental + EyeMed',
    icon: 'D',
    accentColor: '#1B2F5C'
  },
  {
    id: 'prescriptions',
    label: 'Prescriptions',
    description: 'CVS Caremark pharmacy',
    icon: 'C',
    accentColor: '#CC1F34'
  },
  {
    id: 'spendingAccounts',
    label: 'Spending Accounts',
    description: 'HSA • FSA • DCFSA',
    icon: 'S',
    accentColor: '#1B2F5C'
  },
  {
    id: 'wellnessEap',
    label: 'Wellness & EAP',
    description: '24/7 Employee Assistance',
    icon: 'W',
    accentColor: '#CC1F34'
  },
  {
    id: 'financialRetirement',
    label: 'Financial & Retirement',
    description: 'Fidelity 401(k)',
    icon: 'F',
    accentColor: '#1B2F5C'
  },
  {
    id: 'paidTimeOff',
    label: 'Paid Time Off',
    description: 'Vacation & Holidays',
    icon: 'P',
    accentColor: '#CC1F34'
  },
  {
    id: 'contacts',
    label: 'Contacts',
    description: 'All resources & support',
    icon: '?',
    accentColor: '#1B2F5C'
  },
];

export default function VirtualFair({ clientName = 'RWJBarnabas Health' }: VirtualFairProps) {
  const [activeTab, setActiveTab] = useState<Tab>('entrance');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);

  const handleBoothClick = (boothId: string) => {
    setActiveTab(boothId as Tab);
    setMobileMenuOpen(false);
  };

  const toggleAccordion = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      backgroundColor: '#ffffff'
    },
    headerBanner: {
      backgroundColor: '#1B2F5C',
      color: '#ffffff',
      padding: '24px 16px',
      borderBottom: '4px solid #CC1F34'
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      width: '100%'
    },
    headerTitle: {
      fontSize: '32px',
      fontWeight: 'bold' as const,
      margin: 0,
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    headerSubtitle: {
      color: 'rgba(255, 255, 255, 0.7)',
      marginTop: '8px',
      margin: '8px 0 0 0',
      fontSize: '16px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    stickyNav: {
      position: 'sticky' as const,
      top: 0,
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #e2e8f0',
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: '16px'
    },
    navContainer: {
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      overflowX: 'auto' as const,
      scrollBehavior: 'smooth' as const
    },
    navButton: (isActive: boolean) => ({
      padding: '16px 20px',
      fontSize: '14px',
      fontWeight: '500' as const,
      whiteSpace: 'nowrap' as const,
      transition: 'all 0.2s ease',
      border: 'none',
      backgroundColor: isActive ? '#ffffff' : 'transparent',
      borderBottom: isActive ? '3px solid #CC1F34' : '3px solid transparent',
      color: isActive ? '#1B2F5C' : '#636366',
      cursor: 'pointer',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif',
      textTransform: 'capitalize' as const,
      outline: 'none'
    }),
    mainContent: {
      flex: 1,
      backgroundColor: '#f8f9fa',
      padding: '32px 16px'
    },
    contentWrapper: {
      maxWidth: '1280px',
      margin: '0 auto',
      width: '100%'
    },
    // Entrance styles
    entranceContainer: {
      textAlign: 'center' as const
    },
    heroTitle: {
      fontSize: '28px',
      fontWeight: 'bold' as const,
      color: '#1B2F5C',
      marginBottom: '16px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    heroSubtitle: {
      fontSize: '16px',
      color: '#636366',
      maxWidth: '640px',
      margin: '0 auto 32px auto',
      lineHeight: '1.5',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    infoCardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    infoCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '24px',
      textAlign: 'left' as const,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    },
    infoCardTitle: {
      fontSize: '16px',
      fontWeight: 'bold' as const,
      color: '#1B2F5C',
      marginBottom: '8px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    infoCardText: {
      fontSize: '14px',
      color: '#636366',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    ctaButton: {
      backgroundColor: '#CC1F34',
      color: '#ffffff',
      border: 'none',
      fontWeight: 'bold' as const,
      padding: '12px 32px',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    // Exhibit Hall styles
    exhibitTitle: {
      fontSize: '28px',
      fontWeight: 'bold' as const,
      color: '#1B2F5C',
      marginBottom: '32px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    boothGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '24px'
    },
    boothCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      overflow: 'hidden' as const,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block'
    },
    boothCardAccentBar: (accentColor: string) => ({
      backgroundColor: accentColor,
      height: '4px',
      width: '100%'
    }),
    boothCardContent: {
      padding: '24px'
    },
    boothIconBadge: (accentColor: string) => ({
      width: '48px',
      height: '48px',
      backgroundColor: accentColor,
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      fontSize: '20px',
      fontWeight: 'bold' as const,
      marginBottom: '16px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    }),
    boothName: {
      fontSize: '16px',
      fontWeight: 'bold' as const,
      color: '#1B2F5C',
      marginBottom: '8px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    boothDescription: {
      fontSize: '14px',
      color: '#636366',
      wordBreak: 'break-word' as const,
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    // Booth detail styles
    boothDetailHeader: (accentColor: string) => ({
      borderLeft: `4px solid ${accentColor}`,
      paddingLeft: '24px',
      marginBottom: '32px'
    }),
    boothDetailTitle: {
      fontSize: '28px',
      fontWeight: 'bold' as const,
      color: '#1B2F5C',
      marginBottom: '8px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    boothDetailSubtitle: {
      fontSize: '14px',
      color: '#636366',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    accordionSection: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      marginBottom: '24px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    },
    accordionHeader: (isExpanded: boolean) => ({
      padding: '16px 24px',
      cursor: 'pointer',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600' as const,
      color: '#1B2F5C',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif',
      transition: 'background-color 0.2s ease',
      backgroundColor: isExpanded ? '#e8f0f7' : '#f8f9fa'
    }),
    accordionContent: {
      padding: '24px',
      fontSize: '14px',
      color: '#636366',
      lineHeight: '1.6',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif',
      borderTop: '1px solid #e2e8f0'
    },
    contactCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    },
    contactLabel: {
      fontSize: '12px',
      color: '#636366',
      textTransform: 'uppercase' as const,
      fontWeight: '600' as const,
      marginBottom: '8px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    contactValue: {
      fontSize: '18px',
      fontWeight: 'bold' as const,
      color: '#1B2F5C',
      marginBottom: '16px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    contactLink: {
      color: '#CC1F34',
      textDecoration: 'none',
      fontWeight: '500' as const,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginRight: '16px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    backLink: {
      color: '#CC1F34',
      textDecoration: 'none',
      fontWeight: '600' as const,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '32px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
      fontSize: '14px',
      fontFamily: 'Arial, Open Sans, Lato, sans-serif'
    },
    videoPlaceholder: {
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      height: '320px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#636366',
      fontSize: '16px',
      marginBottom: '24px',
      border: '1px solid #e2e8f0'
    },
    gridTwoCol: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '24px'
    }
  };

  const booth = BOOTHS.find(b => b.id === activeTab);
  const boothAccent = booth?.accentColor || '#1B2F5C';

  return (
    <div style={styles.container}>
      {/* Header Banner */}
      <div style={styles.headerBanner}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>{clientName}</h1>
          <p style={styles.headerSubtitle}>Virtual Benefits Fair 2026</p>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <nav style={styles.stickyNav}>
        <div style={styles.navContainer}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={styles.navButton(activeTab === tab.id)}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  (e.target as HTMLElement).style.backgroundColor = '#f0f0f0';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main style={styles.mainContent}>
        <div style={styles.contentWrapper}>
          {/* Entrance Tab */}
          {activeTab === 'entrance' && (
            <div style={styles.entranceContainer}>
              <h2 style={styles.heroTitle}>Welcome to the Virtual Benefits Fair</h2>
              <p style={styles.heroSubtitle}>
                Explore our comprehensive benefits offerings designed for you and your family.
              </p>

              <div style={styles.infoCardsContainer}>
                <div style={styles.infoCard}>
                  <h3 style={styles.infoCardTitle}>Open Enrollment Period</h3>
                  <p style={styles.infoCardText}>April 15 – May 15, 2026</p>
                </div>
                <div style={styles.infoCard}>
                  <h3 style={styles.infoCardTitle}>Benefits Effective Date</h3>
                  <p style={styles.infoCardText}>July 1, 2026</p>
                </div>
                <div style={styles.infoCard}>
                  <h3 style={styles.infoCardTitle}>Questions?</h3>
                  <p style={styles.infoCardText}>Visit Contacts for support info</p>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={{
                  ...styles.ctaButton,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#B01A2A';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#CC1F34';
                }}
              >
                Enter Exhibit Hall
              </button>
            </div>
          )}

          {/* Exhibit Hall Tab */}
          {activeTab === 'exhibitHall' && (
            <div>
              <h2 style={styles.exhibitTitle}>Exhibit Hall</h2>
              <div style={styles.boothGrid}>
                {BOOTHS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleBoothClick(b.id)}
                    style={{
                      ...styles.boothCard,
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      const element = e.currentTarget;
                      element.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
                      (element.style as any).borderColor = b.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      const element = e.currentTarget;
                      element.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                      (element.style as any).borderColor = '#e2e8f0';
                    }}
                  >
                    <div style={styles.boothCardAccentBar(b.accentColor)} />
                    <div style={styles.boothCardContent}>
                      <div style={styles.boothIconBadge(b.accentColor)}>
                        {b.icon}
                      </div>
                      <h3 style={styles.boothName}>{b.label}</h3>
                      <p style={styles.boothDescription}>{b.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Medical Plans Booth */}
          {activeTab === 'medicalPlans' && (
            <div>
              <div style={styles.boothDetailHeader(boothAccent)}>
                <h2 style={styles.boothDetailTitle}>Medical Plans</h2>
                <p style={styles.boothDetailSubtitle}>Aetna comprehensive coverage options</p>
              </div>

              <div style={styles.gridTwoCol}>
                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'medical-bronze')}
                    onClick={() => toggleAccordion('medical-bronze')}
                  >
                    <span>Bronze Plan</span>
                    <span>{expandedAccordion === 'medical-bronze' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'medical-bronze' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Deductible:</strong> $2,000 individual / $4,000 family</p>
                      <p><strong>Out-of-Pocket Max:</strong> $7,000 / $14,000</p>
                      <p><strong>Coinsurance:</strong> 20%</p>
                      <p><strong>Preventive:</strong> No cost sharing</p>
                      <p><strong>Employee Cost:</strong> $120/month</p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'medical-silver')}
                    onClick={() => toggleAccordion('medical-silver')}
                  >
                    <span>Silver Plan</span>
                    <span>{expandedAccordion === 'medical-silver' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'medical-silver' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Deductible:</strong> $1,500 individual / $3,000 family</p>
                      <p><strong>Out-of-Pocket Max:</strong> $6,000 / $12,000</p>
                      <p><strong>Coinsurance:</strong> 15%</p>
                      <p><strong>Preventive:</strong> No cost sharing</p>
                      <p><strong>Employee Cost:</strong> $180/month</p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'medical-gold')}
                    onClick={() => toggleAccordion('medical-gold')}
                  >
                    <span>Gold Plan</span>
                    <span>{expandedAccordion === 'medical-gold' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'medical-gold' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Deductible:</strong> $750 individual / $1,500 family</p>
                      <p><strong>Out-of-Pocket Max:</strong> $5,000 / $10,000</p>
                      <p><strong>Coinsurance:</strong> 10%</p>
                      <p><strong>Preventive:</strong> No cost sharing</p>
                      <p><strong>Employee Cost:</strong> $280/month</p>
                    </div>
                  )}
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Provider</div>
                  <div style={styles.contactValue}>Aetna</div>
                  <a href="tel:8555465415" style={styles.contactLink}>
                    855.546.5415
                  </a>
                  <br />
                  <a href="https://www.aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → Aetna Portal
                  </a>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={styles.backLink}
              >
                ← Back to Exhibit Hall
              </button>
            </div>
          )}

          {/* Dental & Vision Booth */}
          {activeTab === 'dentalVision' && (
            <div>
              <div style={styles.boothDetailHeader(boothAccent)}>
                <h2 style={styles.boothDetailTitle}>Dental & Vision Coverage</h2>
                <p style={styles.boothDetailSubtitle}>Delta Dental and EyeMed benefits</p>
              </div>

              <div style={styles.gridTwoCol}>
                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'dental-preventive')}
                    onClick={() => toggleAccordion('dental-preventive')}
                  >
                    <span>Dental Preventive</span>
                    <span>{expandedAccordion === 'dental-preventive' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'dental-preventive' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Cleanings & Exams:</strong> 100% covered, 2x per year</p>
                      <p><strong>Fluoride:</strong> 100% covered</p>
                      <p><strong>X-rays:</strong> 100% covered</p>
                      <p><strong>No deductible on preventive</strong></p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'dental-major')}
                    onClick={() => toggleAccordion('dental-major')}
                  >
                    <span>Dental Major & Ortho</span>
                    <span>{expandedAccordion === 'dental-major' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'dental-major' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Basic Fillings:</strong> 80% covered</p>
                      <p><strong>Root Canals/Crowns:</strong> 50% covered</p>
                      <p><strong>Deductible:</strong> $50 per person</p>
                      <p><strong>Annual Max:</strong> $1,500</p>
                      <p><strong>Orthodontics:</strong> 50% covered (lifetime max $1,500)</p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'vision')}
                    onClick={() => toggleAccordion('vision')}
                  >
                    <span>Vision (EyeMed)</span>
                    <span>{expandedAccordion === 'vision' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'vision' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Eye Exams:</strong> 100% covered, 1x per year</p>
                      <p><strong>Frames:</strong> $150 allowance</p>
                      <p><strong>Lenses:</strong> 100% covered</p>
                      <p><strong>Contacts:</strong> $150 allowance or lenses</p>
                    </div>
                  )}
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Dental Provider</div>
                  <div style={styles.contactValue}>Delta Dental</div>
                  <a href="tel:8008105234" style={styles.contactLink}>
                    800.810.5234
                  </a>
                  <br />
                  <a href="https://www.deltadentalnj.com/RWJBH" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → Find Provider
                  </a>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={styles.backLink}
              >
                ← Back to Exhibit Hall
              </button>
            </div>
          )}

          {/* Prescriptions Booth */}
          {activeTab === 'prescriptions' && (
            <div>
              <div style={styles.boothDetailHeader(boothAccent)}>
                <h2 style={styles.boothDetailTitle}>Prescription Benefits</h2>
                <p style={styles.boothDetailSubtitle}>CVS Caremark pharmacy network</p>
              </div>

              <div style={styles.gridTwoCol}>
                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'rx-copays')}
                    onClick={() => toggleAccordion('rx-copays')}
                  >
                    <span>Copay Structure</span>
                    <span>{expandedAccordion === 'rx-copays' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'rx-copays' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Generic:</strong> $15 (30-day) / $35 (90-day)</p>
                      <p><strong>Preferred Brand:</strong> $40 (30-day) / $95 (90-day)</p>
                      <p><strong>Non-Preferred Brand:</strong> $55 (30-day) / $125 (90-day)</p>
                      <p><strong>Specialty:</strong> 20% coinsurance</p>
                      <p><strong>Preventive medications:</strong> Copay waived</p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'rx-features')}
                    onClick={() => toggleAccordion('rx-features')}
                  >
                    <span>Program Features</span>
                    <span>{expandedAccordion === 'rx-features' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'rx-features' && (
                    <div style={styles.accordionContent}>
                      <p>• 90-day supply at retail and mail order pharmacies</p>
                      <p>• Prior authorization may be required for certain medications</p>
                      <p>• Specialty medications through CVS specialty pharmacy</p>
                      <p>• Annual deductible applies (varies by medical plan)</p>
                      <p>• Home delivery available</p>
                    </div>
                  )}
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Provider</div>
                  <div style={styles.contactValue}>CVS Caremark</div>
                  <a href="https://www.cvscaremark.com" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → CVS Caremark Portal
                  </a>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={styles.backLink}
              >
                ← Back to Exhibit Hall
              </button>
            </div>
          )}

          {/* Spending Accounts Booth */}
          {activeTab === 'spendingAccounts' && (
            <div>
              <div style={styles.boothDetailHeader(boothAccent)}>
                <h2 style={styles.boothDetailTitle}>Flexible Spending Accounts</h2>
                <p style={styles.boothDetailSubtitle}>HSA, FSA, and DCFSA options</p>
              </div>

              <div style={styles.gridTwoCol}>
                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'hsa')}
                    onClick={() => toggleAccordion('hsa')}
                  >
                    <span>Health Savings Account (HSA)</span>
                    <span>{expandedAccordion === 'hsa' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'hsa' && (
                    <div style={styles.accordionContent}>
                      <p><strong>2024 Limit:</strong> $4,150 individual / $8,300 family</p>
                      <p><strong>Catch-up:</strong> +$1,000 age 55+</p>
                      <p><strong>Employer Match:</strong> 50% up to limit</p>
                      <p><strong>Rollovers:</strong> Unused funds roll over annually</p>
                      <p><strong>Tax-Free:</strong> Withdrawals for qualified medical expenses</p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'fsa')}
                    onClick={() => toggleAccordion('fsa')}
                  >
                    <span>Flexible Spending Account (FSA)</span>
                    <span>{expandedAccordion === 'fsa' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'fsa' && (
                    <div style={styles.accordionContent}>
                      <p><strong>2024 Limit:</strong> $3,300</p>
                      <p><strong>Eligible Expenses:</strong> Medical, dental, vision</p>
                      <p><strong>No Employer Match</strong></p>
                      <p><strong>Carryover:</strong> Up to $610 rolls to next year</p>
                      <p><strong>Tax-Free:</strong> Reduces taxable income</p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'dcfsa')}
                    onClick={() => toggleAccordion('dcfsa')}
                  >
                    <span>Dependent Care FSA (DCFSA)</span>
                    <span>{expandedAccordion === 'dcfsa' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'dcfsa' && (
                    <div style={styles.accordionContent}>
                      <p><strong>2024 Limit:</strong> $5,000 (single) / $2,500 (married filing separately)</p>
                      <p><strong>Use:</strong> Childcare and adult dependent care</p>
                      <p><strong>No Employer Match</strong></p>
                      <p><strong>Use-It-Or-Lose-It:</strong> Unused funds forfeited</p>
                      <p><strong>Tax-Free:</strong> Saves 20-30% in taxes</p>
                    </div>
                  )}
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Administrator</div>
                  <div style={styles.contactValue}>Fidelity</div>
                  <a href="https://www.fidelity.com" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → Fidelity Portal
                  </a>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={styles.backLink}
              >
                ← Back to Exhibit Hall
              </button>
            </div>
          )}

          {/* Wellness & EAP Booth */}
          {activeTab === 'wellnessEap' && (
            <div>
              <div style={styles.boothDetailHeader(boothAccent)}>
                <h2 style={styles.boothDetailTitle}>Wellness & EAP</h2>
                <p style={styles.boothDetailSubtitle}>24/7 support and wellness resources</p>
              </div>

              <div style={styles.gridTwoCol}>
                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'eap')}
                    onClick={() => toggleAccordion('eap')}
                  >
                    <span>Employee Assistance Program</span>
                    <span>{expandedAccordion === 'eap' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'eap' && (
                    <div style={styles.accordionContent}>
                      <p>• Available 24/7/365 for confidential counseling</p>
                      <p>• Unlimited counseling sessions (up to 12 per year per issue)</p>
                      <p>• Mental health & counseling support</p>
                      <p>• Financial and legal consultation</p>
                      <p>• Completely confidential and at no cost</p>
                      <p><strong>Phone:</strong> <a href="tel:8003000628" style={styles.contactLink}>800.300.0628</a></p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'wellness')}
                    onClick={() => toggleAccordion('wellness')}
                  >
                    <span>Wellness Programs</span>
                    <span>{expandedAccordion === 'wellness' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'wellness' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Calm:</strong> Premium meditation & sleep access</p>
                      <p><strong>Personify Health:</strong> Nutrition coaching with dietitians</p>
                      <p><strong>Behavioral Health:</strong> Therapy through your medical plan</p>
                      <p><strong>On-site Clinics:</strong> Convenient health screenings</p>
                      <p><strong>Fitness Programs:</strong> Gym discounts and classes</p>
                    </div>
                  )}
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>EAP Support</div>
                  <div style={styles.contactValue}>24/7 Hotline</div>
                  <a href="tel:8003000628" style={styles.contactLink}>
                    800.300.0628
                  </a>
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Behavioral Health</div>
                  <div style={styles.contactValue}>Aetna</div>
                  <a href="tel:8555465415" style={styles.contactLink}>
                    855.546.5415
                  </a>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={styles.backLink}
              >
                ← Back to Exhibit Hall
              </button>
            </div>
          )}

          {/* Financial & Retirement Booth */}
          {activeTab === 'financialRetirement' && (
            <div>
              <div style={styles.boothDetailHeader(boothAccent)}>
                <h2 style={styles.boothDetailTitle}>Financial & Retirement</h2>
                <p style={styles.boothDetailSubtitle}>401(k) and retirement planning</p>
              </div>

              <div style={styles.gridTwoCol}>
                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === '401k-basics')}
                    onClick={() => toggleAccordion('401k-basics')}
                  >
                    <span>401(k) Basics</span>
                    <span>{expandedAccordion === '401k-basics' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === '401k-basics' && (
                    <div style={styles.accordionContent}>
                      <p><strong>2024 Limit:</strong> $23,500 (catch-up at 50+: $30,500)</p>
                      <p><strong>Immediate Eligibility:</strong> First day of employment</p>
                      <p><strong>Employer Match:</strong> Dollar-for-dollar up to 3%, 50% match from 3-4%</p>
                      <p><strong>Vesting:</strong> Employer contributions vest immediately</p>
                      <p><strong>Investment Options:</strong> Target-date, index, managed, and self-directed brokerage funds</p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'match-details')}
                    onClick={() => toggleAccordion('match-details')}
                  >
                    <span>Employer Match Details</span>
                    <span>{expandedAccordion === 'match-details' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'match-details' && (
                    <div style={styles.accordionContent}>
                      <p><strong>1% contribution:</strong> 1% match (100%)</p>
                      <p><strong>2% contribution:</strong> 2% match (100%)</p>
                      <p><strong>3% contribution:</strong> 3% match (100%)</p>
                      <p><strong>4% contribution:</strong> 3.5% match (50%)</p>
                      <p><strong>5%+ contribution:</strong> 4% match (50%)</p>
                    </div>
                  )}
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Provider</div>
                  <div style={styles.contactValue}>Fidelity</div>
                  <a href="https://www.fidelity.com" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → Fidelity Portal
                  </a>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={styles.backLink}
              >
                ← Back to Exhibit Hall
              </button>
            </div>
          )}

          {/* Paid Time Off Booth */}
          {activeTab === 'paidTimeOff' && (
            <div>
              <div style={styles.boothDetailHeader(boothAccent)}>
                <h2 style={styles.boothDetailTitle}>Paid Time Off</h2>
                <p style={styles.boothDetailSubtitle}>Vacation, holidays, and leave policies</p>
              </div>

              <div style={styles.gridTwoCol}>
                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'pto')}
                    onClick={() => toggleAccordion('pto')}
                  >
                    <span>Vacation & PTO</span>
                    <span>{expandedAccordion === 'pto' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'pto' && (
                    <div style={styles.accordionContent}>
                      <p><strong>0–2 years:</strong> 15 days per year</p>
                      <p><strong>3–5 years:</strong> 18 days per year</p>
                      <p><strong>6–10 years:</strong> 22 days per year</p>
                      <p><strong>10+ years:</strong> 25 days per year</p>
                      <p><strong>Note:</strong> Vacation days do not roll over. Unused days are forfeited at year-end.</p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'holidays')}
                    onClick={() => toggleAccordion('holidays')}
                  >
                    <span>Paid Holidays</span>
                    <span>{expandedAccordion === 'holidays' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'holidays' && (
                    <div style={styles.accordionContent}>
                      <p>• New Year's Day</p>
                      <p>• MLK Jr. Day</p>
                      <p>• Presidents' Day</p>
                      <p>• Memorial Day</p>
                      <p>• Independence Day</p>
                      <p>• Labor Day</p>
                      <p>• Thanksgiving & Day After</p>
                      <p>• Christmas Eve & Christmas</p>
                      <p><strong>Total: 10 paid holidays per year</strong></p>
                    </div>
                  )}
                </div>

                <div style={styles.accordionSection}>
                  <button
                    style={styles.accordionHeader(expandedAccordion === 'parental')}
                    onClick={() => toggleAccordion('parental')}
                  >
                    <span>Parental & Family Leave</span>
                    <span>{expandedAccordion === 'parental' ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === 'parental' && (
                    <div style={styles.accordionContent}>
                      <p><strong>Birth Parent:</strong> 12 weeks paid</p>
                      <p><strong>Non-Birth Parent:</strong> 4 weeks paid</p>
                      <p><strong>Adoption:</strong> 4 weeks paid</p>
                      <p><strong>Job Protection:</strong> FMLA compliant</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={styles.backLink}
              >
                ← Back to Exhibit Hall
              </button>
            </div>
          )}

          {/* Contacts Booth */}
          {activeTab === 'contacts' && (
            <div>
              <div style={styles.boothDetailHeader(boothAccent)}>
                <h2 style={styles.boothDetailTitle}>Benefits Support & Contacts</h2>
                <p style={styles.boothDetailSubtitle}>Quick reference for all providers and support</p>
              </div>

              <div style={styles.gridTwoCol}>
                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Medical Plan</div>
                  <div style={styles.contactValue}>Aetna</div>
                  <a href="tel:8555465415" style={styles.contactLink}>
                    855.546.5415
                  </a>
                  <br />
                  <a href="https://www.aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → Aetna Portal
                  </a>
                  <p style={{ fontSize: '12px', color: '#636366', marginTop: '8px' }}>Available 24/7</p>
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Dental</div>
                  <div style={styles.contactValue}>Delta Dental</div>
                  <a href="tel:8008105234" style={styles.contactLink}>
                    800.810.5234
                  </a>
                  <br />
                  <a href="https://www.deltadentalnj.com/RWJBH" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → Find Provider
                  </a>
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Vision</div>
                  <div style={styles.contactValue}>EyeMed</div>
                  <a href="tel:8668005457" style={styles.contactLink}>
                    866.800.5457
                  </a>
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Prescriptions</div>
                  <div style={styles.contactValue}>CVS Caremark</div>
                  <a href="https://www.cvscaremark.com" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → CVS Caremark Portal
                  </a>
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>FSA/HSA/DCFSA</div>
                  <div style={styles.contactValue}>Fidelity</div>
                  <a href="https://www.fidelity.com" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → Fidelity Portal
                  </a>
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>401(k)</div>
                  <div style={styles.contactValue}>Fidelity</div>
                  <a href="https://www.fidelity.com" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                    → Fidelity 401(k) Portal
                  </a>
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Employee Assistance</div>
                  <div style={styles.contactValue}>EAP Hotline</div>
                  <a href="tel:8003000628" style={styles.contactLink}>
                    800.300.0628
                  </a>
                  <p style={{ fontSize: '12px', color: '#636366', marginTop: '8px' }}>24/7/365</p>
                </div>

                <div style={styles.contactCard}>
                  <div style={styles.contactLabel}>Behavioral Health</div>
                  <div style={styles.contactValue}>Aetna Behavioral</div>
                  <a href="tel:8555465415" style={styles.contactLink}>
                    855.546.5415
                  </a>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('exhibitHall')}
                style={styles.backLink}
              >
                ← Back to Exhibit Hall
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
