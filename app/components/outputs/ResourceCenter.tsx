'use client';

const FEATURED_VIDEO = {
  title: 'Understanding Your Medical Plan Options',
  description: 'Learn the basics of your medical coverage, what\'s included, and how to maximize your benefits.',
  category: 'Medical Plans',
  duration: '4:32',
};

const CATEGORIES = [
  {
    id: 'medical',
    name: 'Medical Plans',
    items: [
      { title: 'Understanding Your Medical Plan Options', type: 'Video', desc: 'Learn the basics of your medical coverage' },
      { title: 'Medical Plan Comparison Chart', type: 'PDF', desc: 'Side-by-side comparison of all available plans' },
      { title: 'Network & Out-of-Network Coverage', type: 'PDF', desc: 'In-network and out-of-network details' },
    ]
  },
  {
    id: 'dental',
    name: 'Dental & Vision',
    items: [
      { title: 'Dental PPO Benefits Overview', type: 'Video', desc: 'Coverage levels and preventive care details' },
      { title: 'Dental Plan Summary', type: 'PDF', desc: 'Copays, deductibles, and coverage limits' },
      { title: 'Vision Benefits Explained', type: 'Video', desc: 'Eye exams, glasses, and contact lens coverage' },
      { title: 'Vision Plan Summary', type: 'PDF', desc: 'Vision plan details and provider networks' },
    ]
  },
  {
    id: 'spending',
    name: 'HSA / FSA',
    items: [
      { title: 'HSA vs FSA: What\'s the Difference?', type: 'Video', desc: 'Key differences and when to use each account' },
      { title: 'HSA Quick Reference Guide', type: 'PDF', desc: 'Contribution limits, eligible expenses, and rollover rules' },
      { title: 'Open Enrollment Checklist', type: 'PDF', desc: 'Step-by-step guide to making your elections' },
    ]
  },
  {
    id: 'life',
    name: 'Life & Disability',
    items: [
      { title: 'Life Insurance & AD&D', type: 'Video', desc: 'Basic and voluntary coverage options' },
      { title: 'Life & Disability Overview', type: 'PDF', desc: 'Benefits, coverage amounts, and beneficiary information' },
    ]
  },
  {
    id: 'retirement',
    name: 'Retirement & Financial',
    items: [
      { title: '401(k) Retirement Planning', type: 'Video', desc: 'Enrollment, company match, and investment options' },
      { title: 'Benefits Enrollment 101', type: 'Video', desc: 'General overview of the benefits enrollment process' },
    ]
  },
  {
    id: 'wellness',
    name: 'Wellness & EAP',
    items: [
      { title: 'Your Employee Assistance Program', type: 'Video', desc: 'Confidential counseling and support services available' },
    ]
  },
];

export default function ResourceCenter({ clientName }: { clientName: string }) {
  const typeStyles: Record<string, { bg: string; color: string; icon: string }> = {
    Video: { bg: '#E8F4FF', color: '#0066CC', icon: '▶' },
    PDF: { bg: '#FEF3E2', color: '#D97706', icon: '📄' },
    Link: { bg: '#E8F5E9', color: '#059669', icon: '🔗' },
  };

  const generateThumbnailColor = (title: string) => {
    const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4'];
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Navigation Header */}
      <div style={{ background: '#0c3254', padding: '20px 40px', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>{clientName}</div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0, color: '#fff' }}>Benefits Resource Center</h1>
          </div>
        </div>
      </div>

      {/* Featured Video Hero Section */}
      <div style={{ background: '#F3F4F6', padding: '40px', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            {/* Video Thumbnail */}
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                aspectRatio: '16/9',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255,255,255,0.25)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  fontSize: '32px',
                  color: '#fff',
                  transition: 'background 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                >
                  ▶
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: '#E8F4FF',
                  color: '#0066CC',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>FEATURED VIDEO</span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0c3254', margin: '0 0 12px 0', lineHeight: '1.3' }}>
                {FEATURED_VIDEO.title}
              </h2>
              <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px', lineHeight: '1.6' }}>
                {FEATURED_VIDEO.description}
              </p>
              <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: '#6B7280' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '16px' }}>📚</span>
                  <span>{FEATURED_VIDEO.category}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '16px' }}>⏱</span>
                  <span>{FEATURED_VIDEO.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '48px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {CATEGORIES.map(cat => (
            <div key={cat.id} style={{ marginBottom: '48px' }}>
              {/* Category Header */}
              <div style={{ marginBottom: '24px', borderBottom: '2px solid #0c3254', paddingBottom: '12px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0c3254', margin: 0 }}>
                  {cat.name}
                </h2>
              </div>

              {/* Resource Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                {cat.items.map(item => {
                  const isVideo = item.type === 'Video';
                  const style = typeStyles[item.type];
                  return (
                    <div
                      key={item.title}
                      style={{
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
                        (e.currentTarget as HTMLElement).style.borderColor = '#D1D5DB';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Card Thumbnail (for videos) */}
                      {isVideo && (
                        <div style={{
                          background: generateThumbnailColor(item.title),
                          height: '140px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'rgba(255,255,255,0.3)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            color: '#fff',
                            backdropFilter: 'blur(5px)',
                            transition: 'background 0.3s ease, transform 0.3s ease',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1.15)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.3)';
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                          }}
                          >
                            ▶
                          </div>
                        </div>
                      )}

                      {/* Card Content */}
                      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Type Badge */}
                        <div style={{ marginBottom: '12px' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 10px',
                            background: style?.bg || '#f0f0f0',
                            color: style?.color || '#666',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.3px',
                            textTransform: 'uppercase',
                          }}>
                            <span>{style?.icon}</span>
                            <span>{item.type}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#0c3254',
                          margin: '0 0 8px 0',
                          lineHeight: '1.4',
                          flex: 1,
                        }}>
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p style={{
                          fontSize: '13px',
                          color: '#6B7280',
                          margin: 0,
                          lineHeight: '1.5',
                        }}>
                          {item.desc}
                        </p>
                      </div>

                      {/* Card Footer Action */}
                      <div style={{
                        padding: '12px 20px',
                        borderTop: '1px solid #F3F4F6',
                        background: '#FAFAFA',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#0066CC',
                        fontSize: '13px',
                        fontWeight: 600,
                        transition: 'background 0.3s ease, color 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = '#F0F9FF';
                        (e.currentTarget as HTMLElement).style.color = '#004999';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = '#FAFAFA';
                        (e.currentTarget as HTMLElement).style.color = '#0066CC';
                      }}
                      >
                        <span>View {item.type === 'Link' ? 'Resource' : item.type}</span>
                        <span style={{ fontSize: '14px' }}>→</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: '#0c3254',
        padding: '32px 40px',
        color: '#fff',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '32px',
            paddingBottom: '32px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Medical Plan Providers</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Provider Directory</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Benefits FAQ</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Glossary</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Wellness Hub</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Help Center</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Contact HR</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
              Powered by <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Flimp®</strong> | {clientName} Benefits Resource Center
            </p>
            <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
