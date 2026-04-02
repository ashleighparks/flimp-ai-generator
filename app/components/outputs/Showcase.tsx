'use client';

import { useEffect, useState } from 'react';

// RWJBH Brand Colors
const NAVY = '#1B2F5C';
const RED = '#CC1F34';
const BG = '#EBF0F5';
const CARD = '#FFFFFF';
const BORDER = '#D0DCE8';
const TEXT = '#1A2338';
const MUTED = '#5A6880';
const LIGHT_NAVY = '#2A4785';
const TAG_BG = '#E8F0FB';
const TAG_TEXT = '#1B4098';

const NAV_ITEMS = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'medical', label: 'Medical Plans' },
  { id: 'dental', label: 'Dental & Vision' },
  { id: 'prescriptions', label: 'Prescriptions' },
  { id: 'spending', label: 'Spending Accounts' },
  { id: 'emotional', label: 'Emotional Wellbeing' },
  { id: 'financial', label: 'Financial & Retirement' },
  { id: 'pto', label: 'Paid Time Off' },
  { id: 'contacts', label: 'Contacts' },
];

// Get gradient colors based on video topic
const getVideoGradient = (title: string): { from: string; to: string } => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('medical') || lowerTitle.includes('plan') || lowerTitle.includes('insurance')) {
    return { from: '#0066cc', to: '#0099ff' }; // Medical blue
  } else if (lowerTitle.includes('dental') || lowerTitle.includes('vision')) {
    return { from: '#00aa00', to: '#00dd00' }; // Dental green
  } else if (lowerTitle.includes('fsa') || lowerTitle.includes('hsa') || lowerTitle.includes('spending') || lowerTitle.includes('retirement')) {
    return { from: '#9933ff', to: '#cc66ff' }; // Financial purple
  } else if (lowerTitle.includes('stretch') || lowerTitle.includes('healthcare') || lowerTitle.includes('optimize')) {
    return { from: '#00aa66', to: '#00dd88' }; // Wellness green
  } else if (lowerTitle.includes('stress') || lowerTitle.includes('mental') || lowerTitle.includes('wellbeing') || lowerTitle.includes('eap')) {
    return { from: '#ff6699', to: '#ff99bb' }; // Wellness pink
  } else if (lowerTitle.includes('fmla') || lowerTitle.includes('leave') || lowerTitle.includes('pto')) {
    return { from: '#ff8800', to: '#ffaa00' }; // PTO orange
  } else {
    return { from: NAVY, to: LIGHT_NAVY }; // Default navy
  }
};

const VideoPlaceholder = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const gradient = getVideoGradient(title);

  const handleClick = () => {
    window.open('https://flimp.live/Flimp_HRBenefitsVideoLibrary', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        aspectRatio: '16/9',
        background: gradient.from,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
        transform: 'scale(1)'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
      }}
    >
      {/* Gradient background with pattern overlay */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}
        />

        {/* Content container */}
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* Play button */}
          <div
            style={{
              width: '64px',
              height: '64px',
              background: 'rgba(255, 255, 255, 0.25)',
              border: '3px solid white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(4px)'
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: '28px',
                height: '28px',
                fill: 'white',
                marginLeft: '2px'
              }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          {/* Video title */}
          <div
            style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '16px',
              marginBottom: '8px',
              lineHeight: 1.3,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            {title}
          </div>

          {/* Video subtitle */}
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '13px',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Duration/Watch badge */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(0, 0, 0, 0.4)',
          color: 'white',
          fontSize: '11px',
          fontWeight: 600,
          padding: '5px 11px',
          borderRadius: '20px',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          zIndex: 2
        }}
      >
        ▶ Watch Video
      </div>
    </div>
  );
};

const TableCell = ({ children, highlight, free }: { children: React.ReactNode; highlight?: boolean; free?: boolean }) => (
  <td style={{ padding: '12px 14px', borderBottom: `1px solid ${BORDER}`, color: highlight ? RED : free ? '#0a7c42' : TEXT, fontWeight: free ? 700 : highlight ? 700 : 400 }}>
    {children}
  </td>
);

const TableRow = ({ children, isHeader, index }: { children: React.ReactNode; isHeader?: boolean; index?: number }) => (
  <tr style={{ background: isHeader ? NAVY : (index ?? 0) % 2 === 0 ? 'white' : TAG_BG, transition: 'background 0.2s ease' }}>
    {children}
  </tr>
);

export default function Showcase({ clientName }: { clientName: string }) {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.id);
      let current = 'welcome';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && window.scrollY >= element.offsetTop - 120) {
          current = sectionId;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: "'DM Sans', sans-serif", color: TEXT }}>
      {/* HEADER */}
      <header style={{ background: NAVY, padding: 0, position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', background: RED, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" style={{ width: '26px', height: '26px', fill: 'white' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
            </div>
            <div style={{ color: 'white', lineHeight: 1.2 }}>
              <strong style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-.3px', display: 'block' }}>RWJBarnabas Health</strong>
              <span style={{ fontSize: '12px', opacity: 0.7, display: 'block' }}>2026 Employee Benefits</span>
            </div>
          </div>
          <div style={{ color: 'rgba(255,255,255,.65)', fontSize: '13px', fontStyle: 'italic' }}>Wellbeing starts with you.</div>
        </div>
        <nav style={{ background: 'rgba(0,0,0,.25)', overflowX: 'auto', whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch', display: 'flex' }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              style={{
                display: 'inline-block',
                color: activeSection === item.id ? 'white' : 'rgba(255,255,255,.75)',
                textDecoration: 'none',
                padding: '11px 20px',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '.2px',
                borderBottom: activeSection === item.id ? `3px solid ${RED}` : '3px solid transparent',
                transition: 'all .2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = activeSection === item.id ? 'white' : 'rgba(255,255,255,.75)';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${LIGHT_NAVY} 100%)`, color: 'white', padding: '80px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
        {/* Background pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

        {/* Accent red shapes */}
        <div style={{ position: 'absolute', width: '300px', height: '300px', background: RED, borderRadius: '50%', opacity: 0.08, top: '-100px', right: '-100px', zIndex: 0 }} />
        <div style={{ position: 'absolute', width: '200px', height: '200px', background: RED, borderRadius: '50%', opacity: 0.05, bottom: '-50px', left: '10%', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ background: RED, display: 'inline-block', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', boxShadow: '0 2px 8px rgba(204, 31, 52, 0.3)' }}>Open Enrollment 2026</div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '52px', lineHeight: 1.15, margin: '0 0 16px 0', fontWeight: 700, letterSpacing: '-0.5px' }}>Your Benefits.<br /><span style={{ color: 'rgba(255,255,255,.75)', fontSize: '48px' }}>Your Wellbeing.</span></h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.7, fontWeight: 500 }}>Everything you need to understand and enroll in your 2026 RWJBarnabas Health benefits in one place. Your health journey starts here.</p>
          <a href="https://www.RWJBHBenefits.com" target="_blank" rel="noopener noreferrer" style={{ background: RED, color: 'white', textDecoration: 'none', padding: '15px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', display: 'inline-block', transition: 'all 0.3s ease', cursor: 'pointer', boxShadow: '0 4px 16px rgba(204, 31, 52, 0.4)', letterSpacing: '0.3px' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#b01a2c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(204, 31, 52, 0.5)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = RED; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(204, 31, 52, 0.4)'; }}>Enroll Now →</a>
        </div>
      </div>

      {/* WELCOME SECTION */}
      <section id="welcome" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(235, 240, 245, 0.5) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Getting Started
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Welcome to Your 2026 Benefits</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>You have <strong>30 days from your hire date</strong> to enroll. Coverage begins the first of the month following your start date. Take time to explore your options in this guide available year-round.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start', marginBottom: '32px' }}>
          <VideoPlaceholder title="Benefits Key Terms Explained" subtitle="Flimp HR Benefits Video Library" />
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: NAVY, marginBottom: '16px' }}>New Hire Enrollment Checklist</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Review this benefits guide and visit RWJBHTotalWellbeing.com',
                'Gather your PeopleSoft ID, dependent SSNs, and verification documents',
                'Visit RWJBHBenefits.com or call 844.690.0920 to enroll',
                'Review elections and save your confirmation statement',
                'ID cards arrive via US Mail within 2–3 weeks',
                'Explore Retirement, BHealthy Wellness, and voluntary benefits',
              ].map((item, i) => (
                <li key={i} style={{ padding: '10px 0', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px' }}>
                  <div style={{ width: '20px', height: '20px', minWidth: '20px', background: RED, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\' width=\'12\'%3E%3Cpath d=\'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
              <a href="https://www.RWJBHBenefits.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: RED, color: 'white', cursor: 'pointer', transition: 'all .2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#b01a2c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = RED; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>Enroll at RWJBHBenefits.com</a>
              <a href="https://RWJBHTotalWellbeing.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: 'transparent', color: NAVY, border: `1.5px solid ${NAVY}`, cursor: 'pointer', transition: 'all .2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = NAVY; (e.currentTarget as HTMLElement).style.color = 'white'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = NAVY; }}>Total Wellbeing Site</a>
            </div>
          </div>
        </div>
        <div style={{ background: NAVY, color: 'white', borderRadius: '12px', padding: '20px 22px', marginTop: '32px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px' }}>🌟 Your Total Wellbeing Six Focus Areas</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {[
              ['Physical', 'Coverage and support for coordinated care'],
              ['Emotional', 'Resources to safeguard your mind and spirit'],
              ['Financial', 'Stability for you and your family today and tomorrow'],
              ['Personal', 'Time away and support for personal priorities'],
              ['Career', 'Pathways for your professional goals and growth'],
              ['Community', 'Initiatives that build healthier communities'],
            ].map(([title, desc], i) => (
              <div key={i}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>{title}</strong>
                <span style={{ fontSize: '13px', opacity: 0.75 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: BORDER, height: '1px', margin: '0 32px' }} />

      {/* MEDICAL SECTION */}
      <section id="medical" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(0, 102, 204, 0.03) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Physical Wellbeing
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Medical Benefits</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>Medical plans are administered by <strong>Aetna</strong>. Care at RWJBarnabas Health is completely free across all plans.</p>
        </div>

        <div style={{ background: '#FEF0F2', borderLeft: `4px solid ${RED}`, borderRadius: '12px', padding: '20px 22px', marginBottom: '28px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>Care at RWJBarnabas Health = $0 Cost to You</h4>
          <p style={{ margin: 0 }}>Across all plans, in-network Premier Tier (RWJBH facilities, employed doctors, Rutgers Health) deductible $0, coinsurance 0%, $0 copay. *Payroll deductions and $200 ER copay still apply.</p>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: NAVY, marginBottom: '16px' }}>Which Plan Is Right for You?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            {[
              { name: 'Core Plan', subtitle: 'Best for RWJBH system users', rows: [['Live in NJ?', '✓ Yes'], ['Payroll cost', 'Lowest'], ['OON coverage', '❌ None'], ['Tiers', '3 (Premier/Extended/Aetna)'], ['Best for', 'RWJBH/HTC providers, budget-conscious']] },
              { name: 'Flex Plan', subtitle: 'For NJ residents wanting flexibility', isRed: true, rows: [['Live in NJ?', '✓ Yes'], ['Payroll cost', 'Higher'], ['OON coverage', '✓ Yes (60%)'], ['Tiers', '4 (incl. Out-of-Network)'], ['Best for', 'Using non-RWJBH or out-of-state providers']] },
              { name: 'Out-of-Area Plan', subtitle: 'For employees outside NJ', rows: [['Live in NJ?', '❌ No'], ['Payroll cost', 'Same as Core'], ['OON coverage', '✓ Yes (60%)'], ['Tiers', '4 (incl. Out-of-Network)'], ['Best for', 'Employees who live outside New Jersey']] },
            ].map((plan, i) => (
              <div key={i} style={{ background: CARD, border: `1.5px solid ${BORDER}`, borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ padding: '20px 22px', background: plan.isRed ? RED : NAVY, color: 'white' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px', margin: '0' }}>{plan.name}</h3>
                  <p style={{ fontSize: '13px', opacity: 0.75, margin: '0' }}>{plan.subtitle}</p>
                </div>
                <div style={{ padding: '18px 22px' }}>
                  {plan.rows.map((row, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: j < plan.rows.length - 1 ? `1px solid ${BORDER}` : 'none', fontSize: '14px' }}>
                      <span style={{ color: MUTED }}>{row[0]}</span>
                      <span style={{ fontWeight: 600, color: TEXT, fontSize: row[0] === 'Best for' ? '13px' : '14px' }}>{row[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '480px', marginBottom: '28px' }}>
          <VideoPlaceholder title="Medical Plan: PPO Preferred Provider Organization" subtitle="Understand how tiered plans work" />
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 700, color: NAVY, marginBottom: '12px' }}>Core Plan Coverage by Tier</h3>
        <div style={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '12px', marginBottom: '28px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', background: 'white' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: NAVY, color: 'white' }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Benefit</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Premier (Tier 1) RWJBH</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Extended (Tier 2) HTC</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Aetna Network (Tier 3)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Deductible (Ind/Fam)', '$0 / $0', '$1,000 / $2,000', '$2,500 / $5,000', true],
                ['Coinsurance', '0%', '20%', '50%', true],
                ['OOP Max (Ind/Fam)', '$1,500 / $3,000', '$2,500 / $5,000', '$7,000 / $14,000', false],
                ['Primary Care', '$0', '$20 copay', '$40 copay', true],
                ['Specialist', '$0', '$40 copay', '$80 copay', true],
                ['Preventive Care', '$0', '$0', '$0', true],
                ['Emergency Room', '$200 copay', '$200 copay', '$200 copay', false],
              ].map((row, i) => (
                <TableRow key={i} index={i}>
                  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, fontWeight: 600 }}>{row[0]}</td>
                  <TableCell free={row[4] as boolean}>{row[1]}</TableCell>
                  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}` }}>{row[2]}</td>
                  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}` }}>{row[3]}</td>
                </TableRow>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '16px', fontWeight: 700, color: NAVY, margin: '28px 0 12px' }}>Per-Paycheck Medical Contributions (Full-Time, Non-Tobacco)</h3>
        <div style={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '12px', marginBottom: '28px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', background: 'white' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: NAVY, color: 'white' }}>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Annual Salary</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Employee Only — Core</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Employee Only — Flex</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Family — Core</th>
                <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Family — Flex</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Under $55,000', '$61.34', '$100.63', '$147.68', '$265.56'],
                ['$55,000 – $94,999', '$77.81', '$132.80', '$197.06', '$362.08'],
                ['$95,000 – $124,999', '$94.26', '$164.98', '$246.44', '$458.58'],
                ['$125,000 – $174,999', '$131.29', '$208.39', '$357.54', '$584.76'],
                ['$175,000+', '$164.21', '$262.39', '$456.30', '$750.84'],
              ].map((row, i) => (
                <TableRow key={i} index={i}>
                  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, fontWeight: 600, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[0]}</td>
                  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[1]}</td>
                  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[2]}</td>
                  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[3]}</td>
                  <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[4]}</td>
                </TableRow>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: TAG_BG, borderLeft: `4px solid ${NAVY}`, borderRadius: '12px', padding: '20px 22px', marginBottom: '20px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>💰 Save $125/month Non-Tobacco User Discount</h4>
          <p style={{ margin: 0 }}>Haven't used tobacco in 6 months? Save $125/month. Ready to quit? Support at RWJBH.org/NicotineRecovery or call 833.795.QUIT.</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://www.aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: RED, color: 'white', cursor: 'pointer', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#b01a2c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(204, 31, 52, 0.3)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = RED; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>Aetna Provider Search</a>
          <a href="https://www.RWJBHBenefits.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: 'transparent', color: NAVY, border: `1.5px solid ${NAVY}`, cursor: 'pointer' }}>Enroll Now</a>
        </div>
      </section>

      <div style={{ background: BORDER, height: '1px', margin: '0 32px' }} />

      {/* DENTAL & VISION SECTION */}
      <section id="dental" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(235, 240, 245, 0.5) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Physical Wellbeing
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Dental & Vision Benefits</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>Comprehensive dental coverage through <strong>Delta Dental</strong> and vision benefits through <strong>EyeMed</strong>.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          <div>
            <div style={{ marginBottom: '24px' }}>
              <VideoPlaceholder title="Dental Insurance Explained" subtitle="Flimp HR Benefits Video Library" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: NAVY, marginBottom: '12px' }}>Delta Dental Plans</h3>
            <div style={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '12px', marginBottom:  '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: NAVY, color: 'white' }}>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Benefit</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Base Plan</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Buy-Up Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Calendar Yr Deductible (Ind/Fam)', '$75 / $225', '$50 / $150'],
                    ['Preventive (exams, cleanings 3x/yr)', '100% No deductible', '100% No deductible'],
                    ['Basic Services (fillings, extractions)', 'You pay 20%', 'You pay 20%'],
                    ['Major Services (crowns, dentures)', 'You pay 50%', 'You pay 50%'],
                    ['Implants', 'Not covered', 'You pay 50%'],
                    ['Annual Maximum (per person)', '$1,500', '$2,000'],
                  ].map((row, i) => (
                    <TableRow key={i} index={i}>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, fontWeight: 600, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[0]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD, color: row[1].includes('%') ? '#0a7c42' : TEXT, fontWeight: row[1].includes('%') ? 700 : 400 }}>{row[1]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD, color: row[2].includes('%') ? '#0a7c42' : TEXT, fontWeight: row[2].includes('%') ? 700 : 400 }}>{row[2]}</td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: MUTED, margin: '16px 0 8px' }}>Per-Pay Dental Contributions (Full-Time)</h4>
            <div style={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '12px', marginBottom:  '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: NAVY, color: 'white' }}>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Coverage</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Base Plan</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Buy-Up Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Employee Only', '$11.84', '$13.90'],
                    ['Employee + Child(ren)', '$23.68', '$27.82'],
                    ['Employee + Spouse', '$18.94', '$22.35'],
                    ['Family', '$36.71', '$43.26'],
                  ].map((row, i) => (
                    <TableRow key={i} index={i}>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[0]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[1]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[2]}</td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="https://www.deltadentalnj.com/RWJBH" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: 'transparent', color: NAVY, border: `1.5px solid ${NAVY}`, cursor: 'pointer', marginTop: '12px', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = NAVY; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(27, 47, 92, 0.2)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = NAVY; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>Find a Delta Dental Provider</a>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: NAVY, marginBottom: '12px' }}>EyeMed Vision Plan</h3>
            <div style={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '12px', marginBottom:  '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: NAVY, color: 'white' }}>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Benefit</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>In-Network</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Out-of-Network</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Eye Exam', '$0 copay (PLUS) / $10', 'Up to $50'],
                    ['Frames', '$0 + $175 allowance', 'Up to $88'],
                    ['Lenses (single/bi/tri)', '$10 copay', 'Up to $100'],
                    ['Contact Lenses Conventional', '$0 + $175 allowance', 'Up to $140'],
                    ['Medically Necessary Contacts', '$0 paid in full', 'Up to $210'],
                  ].map((row, i) => (
                    <TableRow key={i} index={i}>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[0]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD, color: row[1].includes('$0') ? '#0a7c42' : TEXT, fontWeight: row[1].includes('$0') ? 700 : 400 }}>{row[1]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[2]}</td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: MUTED, margin: '16px 0 8px' }}>Vision Contributions (Bi-Weekly)</h4>
            <div style={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '12px', marginBottom:  '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: NAVY, color: 'white' }}>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Coverage</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Per Pay Period</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Employee Only', '$3.45'],
                    ['Employee + Child(ren)', '$6.63'],
                    ['Employee + Spouse', '$5.12'],
                    ['Family', '$9.75'],
                  ].map((row, i) => (
                    <TableRow key={i} index={i}>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[0]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[1]}</td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="https://www.eyemed.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: 'transparent', color: NAVY, border: `1.5px solid ${NAVY}`, cursor: 'pointer', marginTop: '12px', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = NAVY; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(27, 47, 92, 0.2)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = NAVY; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>Find EyeMed Provider</a>
          </div>
        </div>
      </section>

      <div style={{ background: BORDER, height: '1px', margin: '0 32px' }} />

      {/* PRESCRIPTIONS SECTION */}
      <section id="prescriptions" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(0, 102, 204, 0.03) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Physical Wellbeing
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Prescription Drug Benefits</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>Prescription coverage through <strong>CVS Caremark</strong> included automatically with medical plan enrollment.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          <VideoPlaceholder title="How to Stretch Your Healthcare Dollars" subtitle="Flimp HR Benefits Video Library" />
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: NAVY, marginBottom: '12px' }}>Copay Schedule</h3>
            <div style={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '12px', marginBottom:  '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: NAVY, color: 'white' }}>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Type</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Drug</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Copay</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Retail (30-day)', 'Generic', '$10'],
                    ['', 'Preferred Brand', '$40'],
                    ['', 'Non-Preferred Brand', '$80'],
                    ['Mail Order (90-day)', 'Generic', '$20'],
                    ['', 'Preferred Brand', '$100'],
                    ['', 'Non-Preferred Brand', '$200'],
                    ['Specialty (30-day)', 'Preferred Brand', '$200 ($0 via PrudentRx)'],
                    ['', 'Non-Preferred Brand', '$400 ($0 via PrudentRx)'],
                  ].map((row, i) => (
                    <TableRow key={i} index={i}>
                      {row[0] && <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, fontWeight: 600, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[0]}</td>}
                      {!row[0] && <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }} />}
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[1]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD, color: RED, fontWeight: 700 }}>{row[2]}</td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ background: TAG_BG, borderLeft: `4px solid ${NAVY}`, borderRadius: '12px', padding: '20px 22px', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>Maintenance Meds (90-day supply) 3 Options</h4>
              <p style={{ margin: 0 }}>1. RWJBH on-site retail pharmacies   2. CVS Caremark Mail Service   3. Nearest CVS Pharmacy</p>
            </div>
            <a href="https://caremarkrxplaninfo.com/RWJBH" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: RED, color: 'white', cursor: 'pointer', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#b01a2c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(204, 31, 52, 0.3)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = RED; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>CVS Caremark Member Portal</a>
          </div>
        </div>
      </section>

      <div style={{ background: BORDER, height: '1px', margin: '0 32px' }} />

      {/* SPENDING ACCOUNTS SECTION */}
      <section id="spending" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(153, 51, 255, 0.02) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Financial Wellbeing
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Flexible Spending Accounts</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>Use pre-tax dollars to cover eligible expenses and reduce your taxable income.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {[
            ['$3,400', 'Healthcare FSA annual max'],
            ['$7,500', 'Dependent Care FSA annual max'],
            ['$680', 'Healthcare FSA rollover max (2026→2027)'],
            ['31 days', 'To change FSA after a Qualifying Life Event'],
          ].map((stat, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, lineHeight: 1, margin: '0 0 6px 0' }}>{stat[0]}</div>
              <div style={{ fontSize: '13px', color: MUTED }}>{stat[1]}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '24px' }}>
          <VideoPlaceholder title="FSA Flexible Spending Account" subtitle="Flimp HR Benefits Video Library" />
          <VideoPlaceholder title="Dependent Care FSA" subtitle="Flimp HR Benefits Video Library" />
        </div>

        <div style={{ background: '#FEF0F2', borderLeft: `4px solid ${RED}`, borderRadius: '12px', padding: '20px 22px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>Use It or Lose It Important FSA Rules</h4>
          <p style={{ margin: 0 }}>Healthcare FSA: You may roll over up to <strong>$680</strong> into 2027. Dependent Care FSA: <strong>No rollover</strong> plan contributions carefully.</p>
        </div>
      </section>

      <div style={{ background: BORDER, height: '1px', margin: '0 32px' }} />

      {/* EMOTIONAL WELLBEING SECTION */}
      <section id="emotional" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(235, 240, 245, 0.5) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Emotional Wellbeing
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Emotional Wellbeing Resources</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>Your mental health matters. RWJBH provides free, confidential resources to support you at work and at home.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          <div>
            <VideoPlaceholder title="Employee Assistance Programs (EAP)" subtitle="Flimp HR Benefits Video Library" />
            <div style={{ marginTop: '20px' }}>
              <VideoPlaceholder title="Managing Stress and Mental Health" subtitle="Flimp HR Benefits Video Library" />
            </div>
          </div>
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: '14px', padding: '28px', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: NAVY, marginBottom: '12px', margin: '0 0 12px 0' }}>🧠 Employee Assistance Program (EAP)</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Free, confidential counseling available 24/7',
                  'Available virtually and in-person for you and your family',
                  'Covers life challenges: stress, relationships, grief, substance use',
                ].map((item, i) => (
                  <li key={i} style={{ padding: '10px 0', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px' }}>
                    <div style={{ width: '20px', height: '20px', minWidth: '20px', background: RED, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\' width=\'12\'%3E%3Cpath d=\'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:8003000628" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: RED, color: 'white', cursor: 'pointer', marginTop: '16px', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#b01a2c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(204, 31, 52, 0.3)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = RED; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>Call EAP: 800.300.0628</a>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: '14px', padding: '28px', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: NAVY, marginBottom: '12px', margin: '0 0 12px 0' }}>😌 Calm App Free for You + 5 Family/Friends</h3>
              <p style={{ color: MUTED, fontSize: '14px', marginBottom: '14px', margin: '0 0 14px 0' }}>Meditations, sleep stories, stress-relief tools. Full premium subscription at no cost.</p>
              <a href="https://www.calm.com/b2b/RWJBarnabasHealth/subscribe" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: 'transparent', color: NAVY, border: `1.5px solid ${NAVY}`, cursor: 'pointer', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = NAVY; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(27, 47, 92, 0.2)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = NAVY; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>Get Calm Free</a>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: '14px', padding: '28px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: NAVY, marginBottom: '8px', margin: '0 0 8px 0' }}>❤️ Aetna Behavioral Health</h3>
              <p style={{ color: MUTED, fontSize: '14px', margin: '0 0 14px 0' }}><strong>In-network behavioral health copays are waived</strong> for employees and enrolled family members including therapy, ABA therapy, and psychiatric care.</p>
              <a href="https://www.aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: 'transparent', color: NAVY, border: `1.5px solid ${NAVY}`, cursor: 'pointer', marginTop: '14px', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = NAVY; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(27, 47, 92, 0.2)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = NAVY; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>Find a Provider</a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: BORDER, height: '1px', margin: '0 32px' }} />

      {/* FINANCIAL & RETIREMENT SECTION */}
      <section id="financial" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(153, 51, 255, 0.02) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Financial Wellbeing
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Financial & Retirement Benefits</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>Build a secure financial future from retirement savings to life insurance.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: NAVY, marginBottom: '16px' }}>401(k) Retirement Plan Fidelity</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              {[
                ['50%', 'Employer match on first 6% you contribute'],
                ['3%', 'Auto-enrollment contribution (after 30 days)'],
                ['0–6%', 'Non-elective employer contribution (annual)'],
                ['3 yrs', 'Vesting period for employer contributions'],
              ].map((stat, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, lineHeight: 1, margin: '0 0 6px 0' }}>{stat[0]}</div>
                  <div style={{ fontSize: '13px', color: MUTED }}>{stat[1]}</div>
                </div>
              ))}
            </div>
            <div style={{ background: TAG_BG, borderLeft: `4px solid ${NAVY}`, borderRadius: '12px', padding: '20px 22px', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>Maximize Your Match</h4>
              <p style={{ margin: 0 }}>Contribute 6% RWJBH adds 3% = 9% total going into your retirement. Consider increasing from the auto-enrolled 3%.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://www.netbenefits.com/RWJBarnabasHealth" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: RED, color: 'white', cursor: 'pointer', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#b01a2c'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(204, 31, 52, 0.3)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = RED; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>Manage at Fidelity</a>
              <a href="tel:8005135015" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', background: 'transparent', color: NAVY, border: `1.5px solid ${NAVY}`, cursor: 'pointer', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = NAVY; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(27, 47, 92, 0.2)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = NAVY; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>Fidelity: 800.513.5015</a>
            </div>
          </div>
          <div>
            <VideoPlaceholder title="How to Optimize Your HSA/Retirement Savings" subtitle="Flimp HR Benefits Video Library" />
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: NAVY, marginBottom: '12px' }}>Life & Disability MetLife</h3>
              <div style={{ background: CARD, border: `1.5px solid ${BORDER}`, borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ padding: '18px 22px' }}>
                  {[
                    ['Basic Life (auto)', '1.5× salary, up to $500k FREE', true],
                    ['Voluntary Life', 'Additional coverage available', false],
                    ['Spouse & Child Life', 'Employee-paid options', false],
                    ['Long-Term Disability (auto)', '60% salary, up to $10k/month FREE', true],
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 3 ? `1px solid ${BORDER}` : 'none', fontSize: '14px' }}>
                      <span style={{ color: MUTED }}>{row[0]}</span>
                      <span style={{ fontWeight: row[2] ? 700 : 600, color: row[2] ? '#0a7c42' : TEXT }}>{row[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: NAVY, margin: '20px 0 10px' }}>Additional Financial Benefits</h3>
              <div style={{ background: CARD, border: `1.5px solid ${BORDER}`, borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ padding: '18px 22px' }}>
                  {[
                    ['Tuition Reimbursement (ISTS)', 'Up to $5,250/year'],
                    ['Student Loan Navigation (Savi)', 'Personalized support'],
                    ['Employee Discounts (PerkSpot)', 'Travel, dining, electronics'],
                    ['Purchasing Program (Purchasing Power)', 'Payroll deduction purchases'],
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 3 ? `1px solid ${BORDER}` : 'none', fontSize: '14px' }}>
                      <span style={{ color: MUTED }}>{row[0]}</span>
                      <span style={{ fontWeight: 600, color: TEXT }}>{row[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: BORDER, height: '1px', margin: '0 32px' }} />

      {/* PTO SECTION */}
      <section id="pto" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(235, 240, 245, 0.5) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Personal Wellbeing
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Paid Time Off & Leave</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>RWJBH supports your life outside work with comprehensive time-off.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          <div>
            <VideoPlaceholder title="Family and Medical Leave Act (FMLA)" subtitle="Flimp HR Benefits Video Library" />
            <div style={{ background: NAVY, color: 'white', borderRadius: '12px', padding: '20px 22px', marginTop: '20px', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>8 Paid Holidays Per Year</h4>
              <p style={{ margin: 0, fontSize: '14px' }}>7 fixed: New Year's Day, MLK Jr. Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, Christmas. 1 flex: Use on any day meaningful to you.</p>
            </div>
            <div style={{ background: TAG_BG, borderLeft: `4px solid ${NAVY}`, borderRadius: '12px', padding: '20px 22px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>Sick Time</h4>
              <p style={{ margin: 0 }}>40 hours of NJ Earned Sick Leave (NJESL) frontloaded January 1 each calendar year.</p>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: NAVY, marginBottom: '12px' }}>Vacation Accrual (40-hr/week employees)</h3>
            <div style={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '12px', marginBottom:  '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: NAVY, color: 'white' }}>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Years of Service</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Hourly (Non-Exempt)</th>
                    <th style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 600, fontSize: '13px' }}>Salaried (Exempt)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0 years', '120 hrs (15 days)', '160 hrs (20 days)'],
                    ['3 years', '136 hrs (17 days)', '176 hrs (22 days)'],
                    ['5 years', '152 hrs (19 days)', '192 hrs (24 days)'],
                    ['10 years', '168 hrs (21 days)', '208 hrs (26 days)'],
                    ['15 years', '184 hrs (23 days)', '224 hrs (28 days)'],
                    ['20 years', '200 hrs (25 days)', '240 hrs (30 days)'],
                  ].map((row, i) => (
                    <TableRow key={i} index={i}>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD, fontWeight: 600 }}>{row[0]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[1]}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#F7FAFC' : CARD }}>{row[2]}</td>
                    </TableRow>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ background: '#FEF0F2', borderLeft: `4px solid ${RED}`, borderRadius: '12px', padding: '20px 22px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>Paid Parental Leave 12 Weeks at 100% Pay</h4>
              <p style={{ margin: 0 }}>For all eligible new parents (birthing and non-birthing), combined with NJ TDI/FLI. Must have 1 year continuous service. Paid Short-Term Disability: up to 26 weeks at 66⅔% pay.</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: BORDER, height: '1px', margin: '0 32px' }} />

      {/* CONTACTS SECTION */}
      <section id="contacts" style={{ padding: '60px 32px', maxWidth: '1100px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(0, 102, 204, 0.03) 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: TAG_BG, color: TAG_TEXT, padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
          <div style={{ width: '6px', height: '6px', background: RED, borderRadius: '50%' }} />Resources
        </div>
        <div style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '32px', color: NAVY, margin: '0 0 8px 0' }}>Key Benefits Contacts</h2>
          <p style={{ color: MUTED, fontSize: '16px', maxWidth: '680px', margin: '0' }}>Know who to call for each benefit. Your RWJBH Benefits Center is your first stop.</p>
        </div>

        {[
          { title: 'Physical Wellbeing', items: [['Benefits Enrollment / Life Events', 'RWJBHBenefits.com | 844.690.0920'], ['Care Navigation & Appointments', 'RWJBHTotalWellbeing.com | 844.424.2628'], ['Medical (Aetna)', 'aetnaresource.com/n/RWJBH | 855.546.5415'], ['Prescription (CVS Caremark)', 'caremarkrxplaninfo.com/RWJBH | 833.290.5676'], ['Dental (Delta Dental)', 'deltadentalnj.com/RWJBH | 800.810.5234'], ['Vision (EyeMed)', 'eyemed.com | 866.800.5457'], ['BHealthy Wellness (Personify Health)', 'join.personifyhealth.com/bhealthy | 888.671.9395'], ['EAP (Confidential Counseling)', '800.300.0628 24/7']] },
          { title: 'Financial Wellbeing', items: [['Life Insurance / LTD / FSA', 'RWJBHBenefits.com | 844.690.0920'], ['Retirement Plans (Fidelity)', 'netbenefits.com/RWJBarnabasHealth | 800.513.5015'], ['Voluntary Benefits (Aon)', 'mybenefits.aon.com | 844.428.6672']] },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: NAVY, padding: '10px 14px', background: TAG_BG, borderRadius: '8px 8px 0 0', margin: '0 0 0 0', border: `1px solid ${BORDER}`, borderBottom: 'none' }}>{section.title}</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', border: `1px solid ${BORDER}`, borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
              <tbody>
                {section.items.map((item, j) => (
                  <tr key={j}>
                    <td style={{ padding: '12px 14px', borderBottom: j < section.items.length - 1 ? `1px solid ${BORDER}` : 'none', fontWeight: 600, width: '35%', background: '#F7FAFC' }}>{item[0]}</td>
                    <td style={{ padding: '12px 14px', borderBottom: j < section.items.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                      {item[1].split(' | ').map((part, k) => (
                        <span key={k}>
                          {part.match(/^https?:/) || part.startsWith('join.') || part.startsWith('mybenefits.') ? (
                            <a href={part.match(/^https?:/) ? part : `https://${part}`} target="_blank" rel="noopener noreferrer" style={{ color: RED, textDecoration: 'none', fontWeight: 500 }}>{part}</a>
                          ) : part.startsWith('tel:') || part.match(/^\d{3}\.\d{3}\.\d{4}/) ? (
                            <a href={part.match(/^\d/) ? `tel:${part}` : part} style={{ color: RED, textDecoration: 'none', fontWeight: 500 }}>{part}</a>
                          ) : (
                            <>{part}</>
                          )}
                          {k < item[1].split(' | ').length - 1 && <span> | </span>}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div style={{ background: NAVY, color: 'white', borderRadius: '12px', padding: '20px 22px', marginTop: '36px', textAlign: 'center' }}>
          <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px', margin: '0 0 10px 0' }}>Ready to Enroll?</h4>
          <p style={{ margin: '0 0 20px 0', opacity: 0.8 }}>You have 30 days from your hire date. Don't wait your coverage, your choice.</p>
          <a href="https://www.RWJBHBenefits.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', padding: '14px 36px', borderRadius: '8px', fontWeight: 600, fontSize: '16px', background: RED, color: 'white', cursor: 'pointer' }}>Enroll at RWJBHBenefits.com →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: NAVY, color: 'white', textAlign: 'center', padding: '32px', marginTop: '40px' }}>
        <strong style={{ opacity: 1, fontSize: '15px', display: 'block', marginBottom: '8px' }}>RWJBarnabas Health 2026 Employee Benefits Showcase</strong>
        <p style={{ opacity: 0.6, fontSize: '13px', margin: '0 0 8px 0' }}>Questions? Contact the RWJBH Benefits Center at 844.690.0920 or visit RWJBHBenefits.com | Powered by Flimp Communications</p>
        <p style={{ opacity: 0.6, fontSize: '13px', margin: '0' }}>This guide describes benefit highlights in non-technical language. Official plan documents govern all benefits.</p>
      </footer>
    </div>
  );
}
