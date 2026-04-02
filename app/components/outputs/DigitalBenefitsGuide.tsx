'use client';
import { useState, useEffect, useRef } from 'react';

interface DigitalBenefitsGuideProps {
  clientName?: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export default function DigitalBenefitsGuide({ clientName = 'RWJBarnabas Health' }: DigitalBenefitsGuideProps) {
  const [activeNav, setActiveNav] = useState('welcome');
  const [scrolling, setScrolling] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { id: 'welcome', label: 'Welcome & Overview', icon: '👋' },
    { id: 'medical', label: 'Medical Plans', icon: '🏥' },
    { id: 'dental', label: 'Dental Coverage', icon: '🦷' },
    { id: 'vision', label: 'Vision Coverage', icon: '👁️' },
    { id: 'rx', label: 'Prescription Drug', icon: '💊' },
    { id: 'spending', label: 'Spending Accounts', icon: '💰' },
    { id: 'life', label: 'Life & Disability', icon: '🛡️' },
    { id: 'emotional', label: 'Emotional Wellbeing', icon: '🧠' },
    { id: 'retirement', label: 'Financial & Retirement', icon: '📈' },
    { id: 'pto', label: 'Paid Time Off', icon: '🏖️' },
    { id: 'voluntary', label: 'Voluntary Benefits', icon: '⭐' },
    { id: 'contacts', label: 'Important Contacts', icon: '📞' },
  ];

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const sections = navItems.map(item => document.getElementById(`section-${item.id}`));
      let current = 'welcome';

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section.id.replace('section-', '');
          }
        }
      }
      setActiveNav(current);
    };

    const contentArea = contentRef.current;
    if (contentArea) {
      contentArea.addEventListener('scroll', handleScroll);
      return () => contentArea.removeEventListener('scroll', handleScroll);
    }
  }, [navItems]);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#EBF0F5', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        backgroundColor: '#1B2F5C',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#CC1F34',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
          }}>
            RWJ
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Employee Benefits Guide</div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>{clientName}</div>
          </div>
        </div>
      </div>

      {/* Left Sidebar Navigation */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: '70px',
        width: '280px',
        height: 'calc(100vh - 70px)',
        backgroundColor: '#1B2F5C',
        overflowY: 'auto',
        borderRight: '2px solid #CC1F34',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '0px',
        paddingRight: '0px',
      }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              display: 'block',
              width: '100%',
              padding: '14px 16px',
              backgroundColor: activeNav === item.id ? '#CC1F34' : 'transparent',
              color: 'white',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: activeNav === item.id ? '600' : '500',
              transition: 'all 0.2s',
              borderLeft: activeNav === item.id ? '4px solid #FFD700' : '4px solid transparent',
              paddingLeft: '12px',
            }}
            onMouseEnter={(e) => {
              if (activeNav !== item.id) {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeNav !== item.id) {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
              }
            }}
          >
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div
        ref={contentRef}
        style={{
          marginLeft: '280px',
          marginTop: '70px',
          width: 'calc(100% - 280px)',
          height: 'calc(100vh - 70px)',
          overflowY: 'auto',
          paddingTop: '40px',
          paddingBottom: '60px',
          paddingLeft: '40px',
          paddingRight: '40px',
          backgroundColor: '#EBF0F5',
        }}
      >
        {/* Welcome Section */}
        <section id="section-welcome" style={{ marginBottom: '60px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            borderLeft: '5px solid #CC1F34',
          }}>
            <h1 style={{ color: '#1B2F5C', fontSize: '32px', marginBottom: '16px', marginTop: '0px' }}>
              Welcome to Your Benefits
            </h1>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              At {clientName}, we're committed to supporting your health, wellbeing, and financial security. This Digital Benefits Guide provides comprehensive information about all the benefits available to you and your family.
            </p>
            <div style={{
              backgroundColor: '#F0F4F9',
              borderLeft: '4px solid #CC1F34',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '4px',
            }}>
              <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '10px' }}>Key Highlights</h3>
              <ul style={{ color: '#555', margin: '0px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>Comprehensive medical, dental, and vision coverage options</li>
                <li style={{ marginBottom: '8px' }}>Flexible spending accounts to maximize tax savings</li>
                <li style={{ marginBottom: '8px' }}>24/7 Employee Assistance Program (EAP)</li>
                <li style={{ marginBottom: '8px' }}>Company-paid life insurance and disability coverage</li>
                <li style={{ marginBottom: '8px' }}>Generous retirement plan with company match</li>
                <li>Generous paid time off and parental leave</li>
              </ul>
            </div>
            <p style={{ color: '#666', fontSize: '14px', fontStyle: 'italic', marginBottom: '0px' }}>
              Open Enrollment: Navigate to each section below to explore your options. Questions? Contact the Benefits Center at <a href="tel:844-690-0920" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>844.690.0920</a>.
            </p>
          </div>
        </section>

        {/* Medical Plans Section */}
        <section id="section-medical" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Medical Plans</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Choose from three comprehensive medical plans through Aetna, each with different cost structures and coverage levels.
            </p>
          </div>

          {/* Plan Comparison Table */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            overflowX: 'auto',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Plan Comparison</h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1B2F5C', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', fontWeight: '600' }}>Benefit Feature</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Premier Tier</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Extended Tier</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Aetna Basic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Annual Deductible (Individual)', premier: '$500', extended: '$1,000', basic: '$2,000' },
                  { feature: 'Annual Deductible (Family)', premier: '$1,500', extended: '$3,000', basic: '$6,000' },
                  { feature: 'In-Network Copay - Office Visit', premier: '$15', extended: '$20', basic: '$35' },
                  { feature: 'In-Network Copay - Specialist', premier: '$25', extended: '$35', basic: '$50' },
                  { feature: 'In-Network Copay - Urgent Care', premier: '$50', extended: '$60', basic: '$75' },
                  { feature: 'In-Network Copay - ER', premier: '$300', extended: '$400', basic: '$500' },
                  { feature: 'Out-of-Pocket Maximum (Individual)', premier: '$4,000', extended: '$5,500', basic: '$7,000' },
                  { feature: 'Out-of-Pocket Maximum (Family)', premier: '$8,000', extended: '$11,000', basic: '$14,000' },
                  { feature: 'Preventive Care', premier: '100%', extended: '100%', basic: '100%' },
                  { feature: 'In-Network Medical (after deductible)', premier: '20%', extended: '25%', basic: '30%' },
                  { feature: 'Mental Health/Substance Abuse', premier: '$0 copay', extended: '$0 copay', basic: '30%' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#FAFBFC' : 'white',
                      borderBottom: '1px solid #E0E5EA',
                    }}
                  >
                    <td style={{ padding: '12px 14px', fontWeight: '500', color: '#1B2F5C' }}>{row.feature}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016' }}>{row.premier}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555' }}>{row.extended}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#666' }}>{row.basic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Per-Paycheck Contributions */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            overflowX: 'auto',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Employee Premium Contributions (Per Paycheck - Bi-weekly)</h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1B2F5C', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', fontWeight: '600' }}>Salary Band</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Premier Single</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Premier Family</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Extended Single</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Extended Family</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Basic Single</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Basic Family</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { band: 'Under $55K', ps: '$156', pf: '$389', es: '$134', ef: '$298', bs: '$89', bf: '$178' },
                  { band: '$55K - $95K', ps: '$178', pf: '$445', es: '$156', ef: '$334', bs: '$112', bf: '$223' },
                  { band: '$95K - $125K', ps: '$201', pf: '$512', es: '$178', ef: '$389', bs: '$134', bf: '$267' },
                  { band: '$125K - $175K', ps: '$223', pf: '$567', es: '$201', ef: '$445', bs: '$156', bf: '$312' },
                  { band: '$175K+', ps: '$245', pf: '$623', es: '$223', ef: '$501', bs: '$178', bf: '$356' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#FAFBFC' : 'white',
                      borderBottom: '1px solid #E0E5EA',
                    }}
                  >
                    <td style={{ padding: '12px 14px', fontWeight: '600', color: '#1B2F5C' }}>{row.band}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016' }}>{row.ps}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016' }}>{row.pf}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555' }}>{row.es}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555' }}>{row.ef}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#666' }}>{row.bs}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#666' }}>{row.bf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Carrier Info */}
          <div style={{
            backgroundColor: '#F0F4F9',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            borderLeft: '4px solid #CC1F34',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Medical Plan Carrier: Aetna</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Customer Service Phone:</strong><br />
                  <a href="tel:855-546-5415" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>855.546.5415</a>
                </p>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Online Portal:</strong><br />
                  <a href="https://www.aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>aetnaresource.com/n/RWJBH</a>
                </p>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
              Access claims, coverage information, find in-network providers, and manage your account 24/7.
            </p>
          </div>

          {/* Learn More Video */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Learn More About Medical Plans</h3>
            <button
              onClick={() => window.open('https://flimp.live/Flimp_HRBenefitsVideoLibrary', '_blank')}
              style={{
                backgroundColor: '#CC1F34',
                color: 'white',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#A91728')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#CC1F34')}
            >
              Watch Video Library
            </button>
          </div>
        </section>

        {/* Dental Coverage Section */}
        <section id="section-dental" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Dental Coverage</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Protect your smile with Delta Dental's comprehensive coverage options. Choose between Base and Buy-Up plans.
            </p>
          </div>

          {/* Dental Plans Comparison */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            overflowX: 'auto',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Dental Plan Comparison</h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1B2F5C', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Base Plan</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Buy-Up Plan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Employee Monthly Premium (Single)', base: '$18', buyup: '$32' },
                  { feature: 'Preventive Care (Cleanings, Exams, X-rays)', base: '100% covered', buyup: '100% covered' },
                  { feature: 'Basic Restorative (Fillings, Simple Extractions)', base: '20% coinsurance', buyup: '20% coinsurance' },
                  { feature: 'Major Restorative (Root Canals, Crowns, Bridges)', base: '50% coinsurance', buyup: '50% coinsurance' },
                  { feature: 'Annual Benefit Maximum', base: '$1,500', buyup: '$2,000' },
                  { feature: 'Orthodontia Coverage', base: 'Not included', buyup: '50% to $1,500 lifetime max' },
                  { feature: 'Network', base: 'Delta Dental PPO', buyup: 'Delta Dental PPO' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#FAFBFC' : 'white',
                      borderBottom: '1px solid #E0E5EA',
                    }}
                  >
                    <td style={{ padding: '12px 14px', fontWeight: '500', color: '#1B2F5C' }}>{row.feature}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555' }}>{row.base}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016' }}>{row.buyup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Coverage Details */}
          <div style={{
            backgroundColor: '#F0F4F9',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            borderLeft: '4px solid #CC1F34',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Coverage Percentages by Service Type</h3>
            <ul style={{ color: '#555', lineHeight: '1.8', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
              <li><strong>Preventive Care:</strong> 100% covered (no deductible) - includes cleanings, exams, fluoride treatments, and X-rays</li>
              <li><strong>Basic Restorative:</strong> 20% coinsurance - fillings, simple extractions, and emergency treatment</li>
              <li><strong>Major Restorative:</strong> 50% coinsurance - crowns, bridges, implants, and root canal therapy</li>
              <li><strong>Orthodontia (Buy-Up only):</strong> 50% coinsurance up to $1,500 lifetime maximum</li>
            </ul>
          </div>

          {/* Carrier Info */}
          <div style={{
            backgroundColor: '#F0F4F9',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            borderLeft: '4px solid #CC1F34',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Dental Plan Carrier: Delta Dental</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Customer Service Phone:</strong><br />
                  <a href="tel:800-810-5234" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>800.810.5234</a>
                </p>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Provider Search & Benefits Portal:</strong><br />
                  <a href="https://www.deltadentalnj.com/RWJBH" target="_blank" rel="noopener noreferrer" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>deltadentalnj.com/RWJBH</a>
                </p>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
              Find in-network dentists, submit claims, and view your coverage details anytime online.
            </p>
          </div>
        </section>

        {/* Vision Coverage Section */}
        <section id="section-vision" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Vision Coverage</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Keep your eyes healthy with EyeMed's comprehensive vision plan. Get eye exams, glasses, and contact lenses covered.
            </p>
          </div>

          {/* Vision Plan Details */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>EyeMed PLUS Plan Coverage</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Eye Exams</h4>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                  <strong>Frequency:</strong> Once per calendar year
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  <strong>Copay:</strong> $0 at in-network providers (comprehensive eye exam included)
                </p>
              </div>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Frames & Lenses</h4>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                  <strong>Frame Allowance:</strong> $175 every 24 months
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  <strong>Lens Coverage:</strong> 100% for standard single-vision, bifocal, and progressive lenses
                </p>
              </div>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Contact Lenses</h4>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                  <strong>Frequency:</strong> Once per calendar year
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  <strong>Allowance:</strong> $150 per year OR frame allowance (your choice)
                </p>
              </div>
              <div style={{ paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Additional Benefits</h4>
                <ul style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '6px' }}>Blue light blocking coating</li>
                  <li style={{ marginBottom: '6px' }}>Polycarbonate/high-index lenses</li>
                  <li>Scratch-resistant coating</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Carrier Info */}
          <div style={{
            backgroundColor: '#F0F4F9',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            borderLeft: '4px solid #CC1F34',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Vision Plan Carrier: EyeMed</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Customer Service Phone:</strong><br />
                  <a href="tel:866-800-5457" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>866.800.5457</a>
                </p>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Online Portal:</strong><br />
                  <a href="https://www.eyemed.com" target="_blank" rel="noopener noreferrer" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>eyemed.com</a>
                </p>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '16px', marginBottom: '0px' }}>
              Find eye doctors and retailers in your area, check your benefits, and download your ID card.
            </p>
          </div>
        </section>

        {/* Prescription Drug Section */}
        <section id="section-rx" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Prescription Drug Coverage</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              CVS Caremark manages your prescription drug benefits. Use a 4-tier formulary to manage your costs.
            </p>
          </div>

          {/* Pharmacy Benefits */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Prescription Drug Tiers & Copays</h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1B2F5C', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', fontWeight: '600' }}>Tier</th>
                  <th style={{ padding: '14px', textAlign: 'left', fontWeight: '600' }}>Description</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>30-Day Supply</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>90-Day Supply</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tier: 'Tier 1',
                    desc: 'Generic Medications',
                    day30: '$10',
                    day90: '$30',
                  },
                  {
                    tier: 'Tier 2',
                    desc: 'Preferred Brand-Name',
                    day30: '$30',
                    day90: '$60',
                  },
                  {
                    tier: 'Tier 3',
                    desc: 'Non-Preferred Brand-Name',
                    day30: '$50',
                    day90: '$100',
                  },
                  {
                    tier: 'Tier 4',
                    desc: 'Specialty Drugs',
                    day30: '20% coinsurance',
                    day90: 'Not available',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#FAFBFC' : 'white',
                      borderBottom: '1px solid #E0E5EA',
                    }}
                  >
                    <td style={{ padding: '12px 14px', fontWeight: '600', color: '#1B2F5C' }}>{row.tier}</td>
                    <td style={{ padding: '12px 14px', color: '#555' }}>{row.desc}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016' }}>{row.day30}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016' }}>{row.day90}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Prescription Drug Tips */}
          <div style={{
            backgroundColor: '#F0F4F9',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            borderLeft: '4px solid #CC1F34',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Money-Saving Tips</h3>
            <ul style={{ color: '#555', lineHeight: '1.8', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
              <li><strong>Use 90-day supplies:</strong> 90-day prescriptions save you money on higher-tiered drugs</li>
              <li><strong>Ask for generics:</strong> Generic medications are Tier 1 with the lowest copay</li>
              <li><strong>Use mail order:</strong> CVS Mail Order Service offers convenience and savings on maintenance medications</li>
              <li><strong>Check the formulary:</strong> Review the drug formulary to understand coverage before starting new medications</li>
              <li><strong>Shop around:</strong> Copays vary by pharmacy; consider using CVS locations for best rates</li>
            </ul>
          </div>

          {/* Carrier Info */}
          <div style={{
            backgroundColor: '#F0F4F9',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            borderLeft: '4px solid #CC1F34',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Pharmacy Benefit Manager: CVS Caremark</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Customer Service Phone:</strong><br />
                  <a href="tel:833-290-5676" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>833.290.5676</a>
                </p>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Online Portal & Formulary:</strong><br />
                  <a href="https://www.caremarkrxplaninfo.com/RWJBH" target="_blank" rel="noopener noreferrer" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>caremarkrxplaninfo.com/RWJBH</a>
                </p>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '16px', marginBottom: '0px' }}>
              Check drug formulary status, locate pharmacies, refill prescriptions, and manage your account online or via the CVS pharmacy app.
            </p>
          </div>
        </section>

        {/* Spending Accounts Section */}
        <section id="section-spending" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Spending Accounts</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Save on taxes by setting aside pre-tax dollars for eligible healthcare and dependent care expenses.
            </p>
          </div>

          {/* Health Savings Account */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            borderLeft: '4px solid #2D5016',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Health Savings Account (HSA)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '20px' }}>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>2026 Contribution Limits:</strong>
                </p>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '6px' }}>Individual: $4,300</li>
                  <li>Family: $8,550</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Key Features:</strong>
                </p>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '6px' }}>Triple tax advantage</li>
                  <li>Funds roll over each year</li>
                </ul>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '16px' }}>
              Use your HSA to pay for eligible medical, dental, vision, and prescription expenses. HSA funds stay with you even if you change jobs. Consider it your personal health retirement account.
            </p>
            <p style={{ color: '#666', fontSize: '13px', marginTop: '0px', marginBottom: '0px', fontStyle: 'italic' }}>
              <strong>Note:</strong> You must be enrolled in a High Deductible Health Plan (HDHP) to be HSA-eligible. Premier and Extended medical tiers qualify.
            </p>
          </div>

          {/* Healthcare FSA */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            borderLeft: '4px solid #2D5016',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Healthcare Flexible Spending Account (FSA)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '20px' }}>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>2026 Contribution Limit:</strong>
                </p>
                <p style={{ color: '#2D5016', fontSize: '16px', fontWeight: '600', marginTop: '0px', marginBottom: '0px' }}>
                  $3,300
                </p>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Unused Balance:</strong>
                </p>
                <p style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  Up to $570 rolls over to next year
                </p>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '16px' }}>
              Use pre-tax dollars to pay for eligible medical, dental, and vision expenses. Funds must be used in the plan year or you forfeit the remainder (except for the rollover amount).
            </p>
            <p style={{ color: '#666', fontSize: '13px', marginTop: '0px', marginBottom: '0px' }}>
              <strong>Eligible expenses:</strong> Deductibles, copays, coinsurance, dental work, vision care, prescription medications, and more.
            </p>
          </div>

          {/* Dependent Care FSA */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            borderLeft: '4px solid #2D5016',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Dependent Care FSA (DCFSA)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '20px' }}>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>2026 Contribution Limit:</strong>
                </p>
                <p style={{ color: '#2D5016', fontSize: '16px', fontWeight: '600', marginTop: '0px', marginBottom: '0px' }}>
                  $5,000
                </p>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Use-It-Or-Lose-It:</strong>
                </p>
                <p style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  No rollover; must use funds by year-end
                </p>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '16px' }}>
              Pay for eligible dependent care with pre-tax dollars, including daycare, preschool, summer camps, and after-school programs for children under 13.
            </p>
            <p style={{ color: '#666', fontSize: '13px', marginTop: '0px', marginBottom: '0px' }}>
              <strong>Tax Tip:</strong> You must file IRS Form 2441 when claiming the dependent care credit, but using a DCFSA reduces your taxable income.
            </p>
          </div>

          {/* Comparison Table */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            overflowX: 'auto',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Spending Accounts Quick Comparison</h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '13px',
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1B2F5C', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>HSA</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Healthcare FSA</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>DCFSA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: '2026 Limit', hsa: 'Ind: $4,300 / Fam: $8,550', fsa: '$3,300', dcfsa: '$5,000' },
                  { feature: 'Rollover', hsa: 'Yes - unlimited', fsa: 'Yes - up to $570', dcfsa: 'No' },
                  { feature: 'Eligibility', hsa: 'HDHP enrollment', fsa: 'Any plan', dcfsa: 'All employees' },
                  { feature: 'Investment Growth', hsa: 'Yes', fsa: 'No', dcfsa: 'No' },
                  { feature: 'Portable', hsa: 'Yes - yours to keep', fsa: 'Employer-dependent', dcfsa: 'Employer-dependent' },
                  { feature: 'Available After Separation', hsa: 'Yes', fsa: 'No', dcfsa: 'No' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#FAFBFC' : 'white',
                      borderBottom: '1px solid #E0E5EA',
                    }}
                  >
                    <td style={{ padding: '12px 14px', fontWeight: '600', color: '#1B2F5C' }}>{row.feature}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555', fontSize: '13px' }}>{row.hsa}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555', fontSize: '13px' }}>{row.fsa}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555', fontSize: '13px' }}>{row.dcfsa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Life & Disability Insurance Section */}
        <section id="section-life" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Life & Disability Insurance</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              {clientName} provides company-paid life and disability coverage through MetLife to protect you and your family.
            </p>
          </div>

          {/* Life Insurance */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Life Insurance</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Company-Paid Basic Life</h4>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Amount: 1x your annual salary</li>
                  <li style={{ marginBottom: '8px' }}>Maximum: $1,000,000</li>
                  <li style={{ marginBottom: '8px' }}>Coverage: Automatic upon hire</li>
                  <li>No medical underwriting required</li>
                </ul>
              </div>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Optional Supplemental Life</h4>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Purchase up to $1,000,000</li>
                  <li style={{ marginBottom: '8px' }}>Rates based on age & salary</li>
                  <li style={{ marginBottom: '8px' }}>Spouse coverage available</li>
                  <li>Child coverage up to $25,000</li>
                </ul>
              </div>
            </div>
            <div style={{
              backgroundColor: '#F0F4F9',
              borderRadius: '8px',
              padding: '16px',
              borderLeft: '4px solid #2D5016',
            }}>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                <strong>Beneficiary Designation:</strong> Update your beneficiary information in the MetLife portal to ensure your benefits are paid to the right person.
              </p>
            </div>
          </div>

          {/* Disability Insurance */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Disability Insurance</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Short-Term Disability (STD)</h4>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Coverage Duration: Up to 26 weeks</li>
                  <li style={{ marginBottom: '8px' }}>Benefit: 60% of your gross pay</li>
                  <li style={{ marginBottom: '8px' }}>Waiting Period: 7 days</li>
                  <li>Company-paid; you pay nothing</li>
                </ul>
              </div>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Long-Term Disability (LTD)</h4>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Coverage Duration: To age 65</li>
                  <li style={{ marginBottom: '8px' }}>Benefit: 60% of gross pay</li>
                  <li style={{ marginBottom: '8px' }}>Maximum: $15,000/month</li>
                  <li>Company-paid; you pay nothing</li>
                </ul>
              </div>
            </div>
            <div style={{
              backgroundColor: '#F0F4F9',
              borderRadius: '8px',
              padding: '16px',
              borderLeft: '4px solid #2D5016',
            }}>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                <strong>Important:</strong> If you become disabled, you must notify Human Resources immediately. MetLife has strict documentation requirements.
              </p>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                STD benefits are coordinated with paid sick leave. LTD may coordinate with Social Security Disability Insurance.
              </p>
            </div>
          </div>

          {/* Carrier Info */}
          <div style={{
            backgroundColor: '#F0F4F9',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            borderLeft: '4px solid #CC1F34',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Life & Disability Carrier: MetLife</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '16px' }}>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Customer Service Phone:</strong><br />
                  1.800.MET.LIFE (1.800.638.5433)
                </p>
              </div>
              <div>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <strong>Benefits Portal:</strong><br />
                  <a href="https://www.metlife.com/employee" target="_blank" rel="noopener noreferrer" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>metlife.com/employee</a>
                </p>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '16px', marginBottom: '0px' }}>
              Update your beneficiaries, review coverage amounts, file claims, and manage your policies online.
            </p>
          </div>
        </section>

        {/* Emotional Wellbeing & EAP Section */}
        <section id="section-emotional" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Emotional Wellbeing & EAP</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Your mental health matters. Access 24/7 counseling services and wellbeing resources at no cost.
            </p>
          </div>

          {/* EAP Services */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Employee Assistance Program (EAP)</h3>
            <div style={{
              backgroundColor: '#E8F5E9',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '24px',
              borderLeft: '4px solid #2D5016',
            }}>
              <p style={{ color: '#1B2F5C', fontSize: '16px', fontWeight: '600', marginTop: '0px', marginBottom: '8px' }}>
                Available 24/7 - Call Now
              </p>
              <p style={{ color: '#2D5016', fontSize: '18px', fontWeight: 'bold', marginTop: '0px', marginBottom: '0px' }}>
                <a href="tel:800-300-0628" style={{ color: '#2D5016', textDecoration: 'none' }}>800.300.0628</a>
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Counseling Services</h4>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Up to 6 free counseling sessions/year</li>
                  <li style={{ marginBottom: '8px' }}>Licensed therapists and counselors</li>
                  <li style={{ marginBottom: '8px' }}>Phone, video, or in-person options</li>
                  <li>Completely confidential</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Support Areas</h4>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Stress and anxiety management</li>
                  <li style={{ marginBottom: '8px' }}>Depression and mood disorders</li>
                  <li style={{ marginBottom: '8px' }}>Relationship and family counseling</li>
                  <li>Work-life balance and career concerns</li>
                </ul>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
              Your EAP is completely separate from your medical insurance. There's no copay, no insurance claim, and no impact on your health plan.
            </p>
          </div>

          {/* Behavioral Health Coverage */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Mental Health Coverage via Medical Plans</h3>
            <div style={{
              backgroundColor: '#F0F4F9',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '16px',
              borderLeft: '4px solid #2D5016',
            }}>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                <strong>ALL Aetna medical plan tiers cover mental health and substance abuse counseling at NO COPAY.</strong>
              </p>
            </div>
            <ul style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Outpatient mental health visits: $0 copay</li>
              <li style={{ marginBottom: '8px' }}>Psychiatry and medication management: $0 copay</li>
              <li style={{ marginBottom: '8px' }}>Substance abuse treatment: $0 copay</li>
              <li style={{ marginBottom: '8px' }}>Inpatient behavioral health: Subject to deductible and coinsurance</li>
              <li>24/7 crisis hotline access through Aetna</li>
            </ul>
          </div>

          {/* Wellness App */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px' }}>Calm App - Free Meditation & Sleep</h3>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '16px' }}>
              All {clientName} employees have complimentary access to the Calm app for meditation, sleep stories, and mindfulness exercises.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Features Included</h4>
                <ul style={{ color: '#555', fontSize: '13px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '6px' }}>10,000+ meditation sessions</li>
                  <li style={{ marginBottom: '6px' }}>Sleep stories narrated by celebrities</li>
                  <li style={{ marginBottom: '6px' }}>Breathing exercises</li>
                  <li>Music for focus and relaxation</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Access Instructions</h4>
                <p style={{ color: '#666', fontSize: '13px', marginTop: '0px', marginBottom: '0px' }}>
                  Download the Calm app and sign up using your {clientName} email to activate your free premium access for 1 year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial & Retirement Section */}
        <section id="section-retirement" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Financial & Retirement (401k)</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Build your financial future with our 401(k) plan, featuring a generous company match and professional investment management.
            </p>
          </div>

          {/* 401k Plan Details */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>401(k) Plan Highlights</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Company Match</h4>
                <p style={{ color: '#2D5016', fontSize: '16px', fontWeight: '600', marginTop: '0px', marginBottom: '12px' }}>
                  50% match on first 6% of salary
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                  Max 3% company contribution
                </p>
                <p style={{ color: '#666', fontSize: '13px', marginTop: '0px', marginBottom: '0px' }}>
                  <em>Example: Contribute 6%, company adds 3%</em>
                </p>
              </div>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Vesting Schedule</h4>
                <p style={{ color: '#2D5016', fontSize: '16px', fontWeight: '600', marginTop: '0px', marginBottom: '12px' }}>
                  Immediate vesting
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  Your contributions and employer match are 100% yours from day one. No waiting period.
                </p>
              </div>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Contribution Limits (2026)</h4>
                <p style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '6px' }}>
                  <strong>Regular:</strong> $23,500/year
                </p>
                <p style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  <strong>Age 50+:</strong> $29,000/year (includes $5,500 catch-up)
                </p>
              </div>
              <div style={{ paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Loan & Withdrawal Options</h4>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '6px' }}>Loans up to 50% of balance</li>
                  <li>Roth conversions available</li>
                </ul>
              </div>
            </div>

            {/* Investment Options */}
            <div style={{
              backgroundColor: '#F0F4F9',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '16px',
              borderLeft: '4px solid #2D5016',
            }}>
              <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Investment Options</h4>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                Fidelity offers 40+ investment options including:
              </p>
              <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '4px' }}>Target-date retirement funds</li>
                <li style={{ marginBottom: '4px' }}>Index funds (low-cost, passive)</li>
                <li style={{ marginBottom: '4px' }}>Actively managed mutual funds</li>
                <li>Self-directed brokerage account</li>
              </ul>
            </div>
          </div>

          {/* Financial Planning */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Financial Planning Support</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Fidelity Services</h4>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Online retirement planning calculator</li>
                  <li style={{ marginBottom: '8px' }}>Free 1-on-1 phone advisory sessions</li>
                  <li style={{ marginBottom: '8px' }}>Goal-based investment recommendations</li>
                  <li>Mobile app for account management</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Contact Fidelity</h4>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '12px' }}>
                  <strong>Phone:</strong><br />
                  <a href="tel:800-513-5015" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>800.513.5015</a>
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  <strong>Online Portal:</strong><br />
                  <a href="https://www.netbenefits.com/RWJBarnabasHealth" target="_blank" rel="noopener noreferrer" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>netbenefits.com/RWJBarnabasHealth</a>
                </p>
              </div>
            </div>
          </div>

          {/* Sample Scenarios */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            overflowX: 'auto',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Match Contribution Examples</h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1B2F5C', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', fontWeight: '600' }}>Annual Salary</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>You Contribute 6%</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Company Match (50%)</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Total Annual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { salary: '$50,000', employee: '$3,000', company: '$1,500', total: '$4,500' },
                  { salary: '$75,000', employee: '$4,500', company: '$2,250', total: '$6,750' },
                  { salary: '$100,000', employee: '$6,000', company: '$3,000', total: '$9,000' },
                  { salary: '$150,000', employee: '$9,000', company: '$3,000*', total: '$12,000' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#FAFBFC' : 'white',
                      borderBottom: '1px solid #E0E5EA',
                    }}
                  >
                    <td style={{ padding: '12px 14px', fontWeight: '600', color: '#1B2F5C' }}>{row.salary}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555' }}>{row.employee}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016' }}>{row.company}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016', fontWeight: '600' }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ color: '#666', fontSize: '12px', marginTop: '12px', marginBottom: '0px' }}>
              *Company match capped at 3% of salary. Higher earners max out match sooner.
            </p>
          </div>
        </section>

        {/* Paid Time Off Section */}
        <section id="section-pto" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Paid Time Off</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Enjoy generous paid time off to rest, recharge, and spend time with family.
            </p>
          </div>

          {/* Vacation & Sick Leave */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            overflowX: 'auto',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Annual Time Off by Tenure</h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1B2F5C', color: 'white' }}>
                  <th style={{ padding: '14px', textAlign: 'left', fontWeight: '600' }}>Years of Service</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Vacation Days</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Sick Leave Days</th>
                  <th style={{ padding: '14px', textAlign: 'center', fontWeight: '600' }}>Total Days</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tenure: '0-2 years', vacation: '15', sick: '8', total: '23' },
                  { tenure: '3-5 years', vacation: '18', sick: '8', total: '26' },
                  { tenure: '6-10 years', vacation: '20', sick: '8', total: '28' },
                  { tenure: '11+ years', vacation: '22', sick: '8', total: '30' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#FAFBFC' : 'white',
                      borderBottom: '1px solid #E0E5EA',
                    }}
                  >
                    <td style={{ padding: '12px 14px', fontWeight: '600', color: '#1B2F5C' }}>{row.tenure}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555' }}>{row.vacation}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#555' }}>{row.sick}</td>
                    <td style={{ padding: '12px 14px', textAlign: 'center', color: '#2D5016', fontWeight: '600' }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Holidays */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Company-Paid Holidays (9 days)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '0px' }}>
              <div>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>New Year's Day</li>
                  <li style={{ marginBottom: '8px' }}>Presidents' Day</li>
                  <li style={{ marginBottom: '8px' }}>Memorial Day</li>
                  <li style={{ marginBottom: '8px' }}>Independence Day</li>
                  <li>Labor Day</li>
                </ul>
              </div>
              <div>
                <ul style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>Thanksgiving (2 days)</li>
                  <li style={{ marginBottom: '8px' }}>Christmas</li>
                  <li>Floating Holiday (1 day)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Parental Leave */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Parental Leave</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '20px' }}>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Birth Parent</h4>
                <p style={{ color: '#2D5016', fontSize: '16px', fontWeight: '600', marginTop: '0px', marginBottom: '12px' }}>
                  8 weeks paid leave
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  Maternity leave for expectant parents. Paid at 100% of regular salary.
                </p>
              </div>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Non-Birth Parent / Adoptive Parent</h4>
                <p style={{ color: '#2D5016', fontSize: '16px', fontWeight: '600', marginTop: '0px', marginBottom: '12px' }}>
                  2 weeks paid leave
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                  Paternity/adoption leave. Paid at 100% of regular salary.
                </p>
              </div>
            </div>
            <div style={{
              backgroundColor: '#F0F4F9',
              borderRadius: '8px',
              padding: '16px',
              borderLeft: '4px solid #2D5016',
            }}>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                <strong>Additional Options:</strong> Unpaid leave can extend beyond paid parental leave under the Family and Medical Leave Act (FMLA).
              </p>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                Contact HR to discuss flexible return-to-work options and phased-in schedules.
              </p>
            </div>
          </div>
        </section>

        {/* Voluntary Benefits Section */}
        <section id="section-voluntary" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Voluntary Benefits</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Enhance your benefits with optional voluntary coverage to protect your family and assets.
            </p>
          </div>

          {/* Aon Voluntary Benefits */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '20px' }}>Available Voluntary Programs (through Aon)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Pet Insurance</h4>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                  Protect your furry family members with comprehensive pet coverage for accidents, illnesses, and wellness visits.
                </p>
                <p style={{ color: '#555', fontSize: '13px', marginTop: '0px', marginBottom: '0px', fontStyle: 'italic' }}>
                  Plans start at $15-40/month depending on coverage level
                </p>
              </div>
              <div style={{ borderBottom: '1px solid #E0E5EA', paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Legal Services</h4>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                  Access affordable legal consultations, document preparation, and representation for estate planning, family law, and more.
                </p>
                <p style={{ color: '#555', fontSize: '13px', marginTop: '0px', marginBottom: '0px', fontStyle: 'italic' }}>
                  Individual plans from $13/month
                </p>
              </div>
              <div style={{ paddingBottom: '20px' }}>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Identity Theft Protection</h4>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                  Monitor your identity, receive fraud alerts, and get support if your identity is compromised.
                </p>
                <p style={{ color: '#555', fontSize: '13px', marginTop: '0px', marginBottom: '0px', fontStyle: 'italic' }}>
                  Individual plans from $8/month
                </p>
              </div>
              <div>
                <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Critical Illness Insurance</h4>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                  One-time lump-sum payment if you or a covered family member is diagnosed with a covered critical illness.
                </p>
                <p style={{ color: '#555', fontSize: '13px', marginTop: '0px', marginBottom: '0px', fontStyle: 'italic' }}>
                  Plans vary; rates based on age
                </p>
              </div>
            </div>
            <div style={{
              backgroundColor: '#F0F4F9',
              borderRadius: '8px',
              padding: '16px',
              borderLeft: '4px solid #2D5016',
            }}>
              <h4 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '12px' }}>Contact Aon for Enrollment</h4>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '8px' }}>
                <strong>Phone:</strong> <a href="tel:844-428-6672" style={{ color: '#CC1F34', textDecoration: 'none', fontWeight: '600' }}>844.428.6672</a>
              </p>
              <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px' }}>
                Available during Open Enrollment. Rates are deducted from your paycheck on a post-tax or pre-tax basis.
              </p>
            </div>
          </div>
        </section>

        {/* Important Contacts Section */}
        <section id="section-contacts" style={{ marginBottom: '60px' }}>
          <div style={{ borderLeft: '5px solid #CC1F34', paddingLeft: '24px', marginBottom: '24px' }}>
            <h2 style={{ color: '#1B2F5C', fontSize: '28px', marginTop: '0px', marginBottom: '8px' }}>Important Contacts</h2>
            <p style={{ color: '#666', marginTop: '0px', marginBottom: '24px' }}>
              Questions? Here are the key contacts for benefits support.
            </p>
          </div>

          {/* Contact Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
            {[
              {
                title: 'HR Benefits Center',
                phone: '844.690.0920',
                hours: 'Monday-Friday, 8 AM-5 PM ET',
                description: 'Enrollment support, plan questions, benefits account management',
              },
              {
                title: 'Care Navigation Services',
                phone: '844.424.2628',
                hours: '24/7',
                description: 'Help finding doctors, understanding coverage, coordinating care',
              },
              {
                title: 'Employee Assistance Program (EAP)',
                phone: '800.300.0628',
                hours: '24/7',
                description: 'Confidential counseling, work-life resources, crisis support',
              },
              {
                title: 'RWJBarnabas Health Benefits Portal',
                phone: 'Online at RWJBHBenefits.com',
                hours: '24/7 Access',
                description: 'Enroll, update information, view coverage, access resources',
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  borderTop: '4px solid #CC1F34',
                }}
              >
                <h3 style={{ color: '#1B2F5C', fontSize: '16px', marginTop: '0px', marginBottom: '12px', fontWeight: '600' }}>
                  {contact.title}
                </h3>
                <p style={{
                  color: '#CC1F34',
                  fontSize: contact.phone.includes('Online') ? '14px' : '16px',
                  fontWeight: '600',
                  marginTop: '0px',
                  marginBottom: '8px',
                }}>
                  {contact.phone.includes('Online') ? (
                    <a href="https://www.RWJBHBenefits.com" target="_blank" rel="noopener noreferrer" style={{ color: '#CC1F34', textDecoration: 'none' }}>
                      {contact.phone}
                    </a>
                  ) : (
                    <a href={`tel:${contact.phone.replace(/\./g, '-')}`} style={{ color: '#CC1F34', textDecoration: 'none' }}>
                      {contact.phone}
                    </a>
                  )}
                </p>
                <p style={{ color: '#666', fontSize: '13px', marginTop: '0px', marginBottom: '12px', fontStyle: 'italic' }}>
                  {contact.hours}
                </p>
                <p style={{ color: '#555', fontSize: '14px', marginTop: '0px', marginBottom: '0px', lineHeight: '1.5' }}>
                  {contact.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Reference Card */}
          <div style={{
            backgroundColor: '#1B2F5C',
            color: 'white',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          }}>
            <h2 style={{ marginTop: '0px', marginBottom: '16px', fontSize: '24px' }}>Need Help?</h2>
            <p style={{ fontSize: '16px', marginTop: '0px', marginBottom: '24px', opacity: 0.95 }}>
              The Benefits Center is here to support you throughout your employment.
            </p>
            <a
              href="tel:844-690-0920"
              style={{
                display: 'inline-block',
                backgroundColor: '#CC1F34',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#A91728')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#CC1F34')}
            >
              Call 844.690.0920
            </a>
          </div>

          {/* Conclusion */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            marginTop: '32px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            borderLeft: '5px solid #CC1F34',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#1B2F5C', marginTop: '0px', marginBottom: '16px', fontSize: '22px' }}>Thank You for Being Part of Our Team</h2>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', marginTop: '0px', marginBottom: '16px' }}>
              At {clientName}, we invest in our employees' health, wellbeing, and future. These comprehensive benefits are designed to support you and your family at every life stage. We encourage you to explore all available options and take full advantage of the resources available to you.
            </p>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '0px', marginBottom: '0px', fontStyle: 'italic' }}>
              Your benefits matter. Your wellbeing matters. We're here to support you.
            </p>
          </div>
        </section>

        {/* Footer Padding */}
        <div style={{ height: '40px' }} />
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          * {
            background: transparent !important;
            color: #000 !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }

          a, a:visited {
            text-decoration: underline;
            color: #000 !important;
          }

          a[href]:after {
            content: " (" attr(href) ")";
            font-size: 0.8em;
          }

          table, pre {
            border-collapse: collapse;
            border: 1px solid #000;
            page-break-inside: avoid;
          }

          tr, td, th {
            border: 1px solid #000;
            padding: 8px;
          }

          h1, h2, h3 {
            page-break-after: avoid;
            page-break-inside: avoid;
          }

          img {
            max-width: 100%;
            page-break-inside: avoid;
          }

          p, ul, ol {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
