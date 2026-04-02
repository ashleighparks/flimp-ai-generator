'use client';

import { useState } from 'react';

const BRAND_PRIMARY = '#0c3254';
const BRAND_SECONDARY = '#1976d2';
const BRAND_LIGHT = '#f5f7fa';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'documents', label: 'Benefits Documents' },
  { id: 'videos', label: 'Benefits Videos' },
  { id: 'education', label: 'General Education Videos' },
];

const DOCUMENTS = [
  { category: 'Medical Plans', items: ['2026 Medical Plan Summary', 'PPO Plan Details', 'HDHP/HSA Guide', 'Copay and Coinsurance Schedule'] },
  { category: 'Dental & Vision', items: ['Dental Plan Summary', 'Vision Coverage Details', 'Orthodontia Benefits'] },
  { category: 'Prescription Coverage', items: ['Pharmacy Benefit Guide', 'Mail Order Pharmacy Information', 'Specialty Medication Coverage'] },
  { category: 'Spending Accounts', items: ['HSA Enrollment Guide', 'FSA Plan Document', 'Dependent Care FSA Guide'] },
  { category: 'Life & Disability', items: ['Life Insurance Summary', 'Disability Benefits Guide', 'AD&D Coverage Details'] },
  { category: 'General Benefits', items: ['Benefits Enrollment Guide', 'Open Enrollment Timeline', 'Employee Handbook', 'Glossary of Terms'] },
];

const VIDEO_CATEGORIES = [
  {
    title: 'Medical Plans',
    videos: [
      { title: 'Understanding Your PPO Plan', icon: '🏥' },
      { title: 'Understanding Your HDHP/HSA', icon: '💰' },
      { title: 'How to Choose Your Medical Plan', icon: '📋' },
    ],
  },
  {
    title: 'Dental & Vision',
    videos: [
      { title: 'Your Dental PPO Benefits', icon: '🦷' },
      { title: 'Understanding Your Vision Coverage', icon: '👁️' },
    ],
  },
  {
    title: 'Financial',
    videos: [
      { title: '401(k) & Retirement Savings', icon: '📈' },
      { title: 'HSA vs FSA Explained', icon: '💳' },
    ],
  },
  {
    title: 'Life & Disability',
    videos: [
      { title: 'Life Insurance & AD&D Overview', icon: '🛡️' },
      { title: 'Short & Long Term Disability', icon: '📋' },
    ],
  },
  {
    title: 'Wellness',
    videos: [
      { title: 'Employee Assistance Program (EAP)', icon: '🤝' },
      { title: 'Wellness Program Overview', icon: '🌱' },
    ],
  },
  {
    title: 'General',
    videos: [
      { title: 'Benefits Enrollment 101', icon: '📚' },
      { title: 'Understanding Your EOB', icon: '📄' },
    ],
  },
];

export default function Showcase({ clientName }: { clientName: string }) {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#1a202c' }}>
      {/* Header with Navigation */}
      <div style={{ background: '#ffffff', borderBottom: `1px solid #e2e8f0`, position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Logo/Title */}
          <div style={{ paddingTop: '20px', paddingBottom: '20px', borderBottom: `1px solid #e2e8f0` }}>
            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: BRAND_PRIMARY }}>
              {clientName} Benefits Showcase
            </h1>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0' }}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: activeTab === tab.id ? BRAND_PRIMARY : '#718096',
                  borderBottom: activeTab === tab.id ? `3px solid ${BRAND_PRIMARY}` : '3px solid transparent',
                  transition: 'all 0.2s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    (e.target as HTMLElement).style.color = BRAND_PRIMARY;
                    (e.target as HTMLElement).style.background = `${BRAND_PRIMARY}05`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    (e.target as HTMLElement).style.color = '#718096';
                    (e.target as HTMLElement).style.background = 'transparent';
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div>
            {/* Welcome Section */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ margin: '0 0 12px 0', fontSize: '32px', fontWeight: 700, color: BRAND_PRIMARY }}>
                Welcome to Your Benefits
              </h2>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.6', color: '#4a5568', maxWidth: '700px' }}>
                We're excited to share your comprehensive benefits package for {new Date().getFullYear()}. This showcase provides an overview of all your benefits and resources to help you make informed decisions about your coverage.
              </p>
            </div>

            {/* Featured Video Player */}
            <div
              style={{
                background: BRAND_LIGHT,
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '48px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              <div
                style={{
                  aspectRatio: '16 / 9',
                  background: `linear-gradient(135deg, ${BRAND_PRIMARY} 0%, ${BRAND_SECONDARY} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.4)';
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.3)';
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}
                >
                  <span style={{ fontSize: '40px', color: '#ffffff' }}>▶</span>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600, color: BRAND_PRIMARY }}>
                  Benefits Overview for {new Date().getFullYear()}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#718096', lineHeight: '1.5' }}>
                  Watch this short video to learn about the key changes and highlights of your 2026 benefits package.
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              {[
                { title: 'Medical Plans', description: 'Choose from multiple medical plan options to fit your needs.' },
                { title: 'Dental & Vision', description: 'Comprehensive coverage for routine care and unexpected needs.' },
                { title: 'Financial Wellness', description: 'Save for retirement and unexpected healthcare expenses.' },
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '20px',
                    background: '#ffffff',
                    border: `1px solid #e2e8f0`,
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = BRAND_PRIMARY;
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600, color: BRAND_PRIMARY }}>
                    {card.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#718096', lineHeight: '1.5' }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Partner/Carrier Logos */}
            <div style={{ background: BRAND_LIGHT, padding: '40px 24px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ margin: '0 0 20px 0', fontSize: '13px', fontWeight: 600, color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Our Carriers & Partners
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                {['Medical Carrier', 'Dental Carrier', 'Vision Carrier', 'Life Insurance'].map((carrier) => (
                  <div
                    key={carrier}
                    style={{
                      padding: '12px 24px',
                      background: '#ffffff',
                      border: `1px solid #cbd5e0`,
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#718096',
                      minWidth: '120px',
                    }}
                  >
                    {carrier}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === 'documents' && (
          <div>
            <h2 style={{ margin: '0 0 32px 0', fontSize: '28px', fontWeight: 700, color: BRAND_PRIMARY }}>
              Benefits Documents
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {DOCUMENTS.map((docCategory) => (
                <div
                  key={docCategory.category}
                  style={{
                    padding: '24px',
                    background: '#ffffff',
                    border: `1px solid #e2e8f0`,
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  }}
                >
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: BRAND_PRIMARY }}>
                    {docCategory.category}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {docCategory.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        style={{
                          padding: '10px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: BRAND_LIGHT,
                          color: BRAND_PRIMARY,
                          textDecoration: 'none',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          border: `1px solid transparent`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = `${BRAND_PRIMARY}10`;
                          (e.currentTarget as HTMLElement).style.borderColor = BRAND_PRIMARY;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = BRAND_LIGHT;
                          (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                        }}
                      >
                        <span>{item}</span>
                        <span style={{ fontSize: '16px', opacity: 0.6 }}>→</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BENEFITS VIDEOS TAB */}
        {activeTab === 'videos' && (
          <div>
            <h2 style={{ margin: '0 0 32px 0', fontSize: '28px', fontWeight: 700, color: BRAND_PRIMARY }}>
              Benefits Videos
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
              {VIDEO_CATEGORIES.flatMap((cat) => cat.videos).map((video, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: '#ffffff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '16 / 9',
                      background: `linear-gradient(135deg, ${BRAND_PRIMARY} 0%, ${BRAND_SECONDARY} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      fontSize: '32px',
                    }}
                  >
                    {video.icon}
                    <div
                      style={{
                        position: 'absolute',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.5)';
                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.15)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.3)';
                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                      }}
                    >
                      <span style={{ fontSize: '24px', color: '#ffffff', marginLeft: '2px' }}>▶</span>
                    </div>
                  </div>
                  <div style={{ padding: '16px' }}>
                    <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: BRAND_PRIMARY, lineHeight: '1.4' }}>
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EDUCATION VIDEOS TAB */}
        {activeTab === 'education' && (
          <div>
            <h2 style={{ margin: '0 0 32px 0', fontSize: '28px', fontWeight: 700, color: BRAND_PRIMARY }}>
              General Education Videos
            </h2>
            {VIDEO_CATEGORIES.map((category) => (
              <div key={category.title} style={{ marginBottom: '40px' }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600, color: BRAND_PRIMARY }}>
                  {category.title}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                  {category.videos.map((video, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        background: '#ffffff',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      <div
                        style={{
                          aspectRatio: '16 / 9',
                          background: `linear-gradient(135deg, ${BRAND_PRIMARY} 0%, ${BRAND_SECONDARY} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          fontSize: '32px',
                        }}
                      >
                        {video.icon}
                        <div
                          style={{
                            position: 'absolute',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.5)';
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1.15)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.3)';
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                          }}
                        >
                          <span style={{ fontSize: '24px', color: '#ffffff', marginLeft: '2px' }}>▶</span>
                        </div>
                      </div>
                      <div style={{ padding: '16px' }}>
                        <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: BRAND_PRIMARY, lineHeight: '1.4' }}>
                          {video.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ background: BRAND_PRIMARY, padding: '32px 24px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
            Powered by Flimp Communications
          </p>
        </div>
      </div>
    </div>
  );
}
