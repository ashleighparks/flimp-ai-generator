'use client';

import { useState } from 'react';

export default function BenefitsAtAGlance({ clientName }: { clientName: string }) {
  const [activeTab, setActiveTab] = useState('medical');

  const handleExportPDF = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const tabs = [
    { id: 'medical', label: 'Medical', icon: '⚕️' },
    { id: 'dental', label: 'Dental', icon: '🦷' },
    { id: 'vision', label: 'Vision', icon: '👁️' },
    { id: 'hsa-fsa', label: 'HSA/FSA', icon: '💰' },
    { id: 'life', label: 'Life & Disability', icon: '🛡️' },
    { id: '401k', label: '401(k)', icon: '📊' },
    { id: 'pto', label: 'PTO', icon: '📅' },
    { id: 'contacts', label: 'Contacts', icon: '☎️' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Sticky Download Bar */}
      <div className="no-print" style={{
        background: '#1B2F5C', padding: '16px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 20,
        boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(8px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'linear-gradient(135deg, #CC1F34 0%, #A61A2A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 800, boxShadow: '0 2px 8px rgba(204, 31, 52, 0.3)' }}>BA</div>
          <div>
            <div style={{ color: '#fff', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.3px' }}>{clientName} — Benefits at a Glance</div>
            <div style={{ color: '#0891b2', fontSize: '12px', fontWeight: 500, marginTop: '2px' }}>2026 Quick Reference Guide</div>
          </div>
        </div>
        <button onClick={handleExportPDF} style={{
          padding: '12px 24px', background: 'linear-gradient(135deg, #CC1F34 0%, #A61A2A 100%)', color: '#fff', border: 'none',
          borderRadius: '8px', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '10px',
          transition: 'all 0.3s',
          boxShadow: '0 4px 12px rgba(204, 31, 52, 0.3)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(204, 31, 52, 0.4)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(204, 31, 52, 0.3)';
        }}
        >
          <span style={{ fontSize: '16px' }}>&#8681;</span> Download / Print PDF
        </button>
      </div>

      {/* Document wrapper */}
      <div style={{
        maxWidth: '1000px', margin: '24px auto', background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        fontFamily: '"Segoe UI", -apple-system, Arial, sans-serif',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #CC1F34 0%, #A61A2A 50%, #1B2F5C 100%)',
          padding: '48px 48px',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative pattern background */}
          <div style={{
            position: 'absolute',
            right: '-40px',
            top: '-40px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute',
            left: '-30px',
            bottom: '-30px',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 12px 0', letterSpacing: '-0.8px' }}>Benefits at a Glance</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.95)', fontWeight: 600 }}>RWJBarnabas Health</span>
              <span style={{ width: '4px', height: '4px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%' }} />
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{clientName} &bull; 2026 Employee Benefits</span>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="no-print" style={{
          display: 'flex', overflowX: 'auto', borderBottom: '1px solid #e2e8f0',
          background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)', paddingLeft: '48px', gap: '0px',
        }}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '16px 22px',
                background: activeTab === tab.id ? 'linear-gradient(to bottom, #fff 0%, #f8f9fa 100%)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === tab.id ? '3px solid #CC1F34' : '3px solid transparent',
                color: activeTab === tab.id ? '#1B2F5C' : '#64748b',
                fontWeight: activeTab === tab.id ? 700 : 600,
                fontSize: '14px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRight: index < tabs.length - 1 ? '1px solid #e2e8f0' : 'none',
                position: 'relative',
              }}
              onMouseEnter={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = '#f0f1f3';
                  e.currentTarget.style.color = '#1B2F5C';
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#64748b';
                }
              }}
            >
              <span style={{ fontSize: '16px' }}>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ padding: '48px' }}>
          {activeTab === 'medical' && <MedicalTab />}
          {activeTab === 'dental' && <DentalTab />}
          {activeTab === 'vision' && <VisionTab />}
          {activeTab === 'hsa-fsa' && <HSAFSATab />}
          {activeTab === 'life' && <LifeTab />}
          {activeTab === '401k' && <RetirementTab />}
          {activeTab === 'pto' && <PTOTab />}
          {activeTab === 'contacts' && <ContactsTab />}
        </div>
      </div>

      <div style={{ height: '40px' }} />

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}

function MedicalTab() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '6px', height: '32px', background: 'linear-gradient(180deg, #CC1F34 0%, #A61A2A 100%)', borderRadius: '4px' }} />
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1B2F5C', margin: 0 }}>Medical Plans</h2>
          <p style={{ fontSize: '13px', color: '#0891b2', fontWeight: 600, margin: '6px 0 0 0' }}>Aetna PPO Network</p>
        </div>
      </div>

      <CarrierInfo carrier="Aetna" phone="1-800-XXX-XXXX" website="https://www.aetnaresource.com/n/RWJBH" />

      {/* Flimp Video Card */}
      <VideoCard
        title="Benefits Video Library"
        description="Learn more about medical plans and health benefits"
        onClick={() => window.open('https://flimp.live/Flimp_HRBenefitsVideoLibrary', '_blank')}
      />

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Core Plan — Coverage by Tier</h3>
        <Table headers={['Benefit', 'Premier (Tier 1) — RWJBH', 'Extended (Tier 2) — HTC', 'Aetna Network (Tier 3)']} rows={[
          ['Deductible (Ind/Fam)', '$0 / $0', '$1,000 / $2,000', '$2,500 / $5,000'],
          ['Coinsurance', '0%', '20%', '50%'],
          ['OOP Max (Ind/Fam)', '$1,500 / $3,000', '$2,500 / $5,000', '$7,000 / $14,000'],
          ['Primary Care', '$0', '$20 copay', '$40 copay'],
          ['Specialist', '$0', '$40 copay', '$80 copay'],
          ['Preventive Care', '$0', '$0', '$0'],
          ['Behavioral Health', '$0', '$0', '$0'],
          ['Emergency Room', '$200 copay', '$200 copay', '$200 copay'],
          ['Urgent Care', '$0', '$50 copay', '$100 copay'],
          ['Virtual Urgent Care (KeyCare)', 'No charge — all plans', 'No charge — all plans', 'No charge — all plans'],
        ]} color="#CC1F34" />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Per-Paycheck Medical Contributions</h3>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>Full-Time, Non-Tobacco Users (Bi-Weekly)</p>
        <Table headers={['Annual Salary', 'Employee Only — Core', 'Employee Only — Flex', 'Family — Core', 'Family — Flex']} rows={[
          ['Under $55,000', '$61.34', '$100.63', '$147.68', '$265.56'],
          ['$55,000 – $94,999', '$77.81', '$132.80', '$197.06', '$362.08'],
          ['$95,000 – $124,999', '$94.26', '$164.98', '$246.44', '$458.58'],
          ['$125,000 – $174,999', '$131.29', '$208.39', '$357.54', '$584.76'],
          ['$175,000+', '$164.21', '$262.39', '$456.30', '$750.84'],
        ]} color="#CC1F34" />
      </div>

      <div style={{ marginBottom: '24px', padding: '24px', background: 'linear-gradient(135deg, #CC1F34 0%, #A61A2A 100%)', borderRadius: '10px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-30px', top: '-30px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '24px', marginTop: '4px' }}>✓</span>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '6px' }}>Care at RWJBarnabas Health = $0 Cost</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.95)', lineHeight: 1.6 }}>If you receive care at RWJBarnabas Health facilities, your cost is zero coinsurance in the Premier tier. Maximum savings on quality healthcare.</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <ButtonLink text="Aetna Provider Search" url="https://www.aetnaresource.com/n/RWJBH" />
        <ButtonLink text="Enroll Now" url="https://www.RWJBHBenefits.com" />
      </div>
    </div>
  );
}

function DentalTab() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '6px', height: '32px', background: 'linear-gradient(180deg, #0891b2 0%, #0284c7 100%)', borderRadius: '4px' }} />
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1B2F5C', margin: 0 }}>Dental Plans</h2>
          <p style={{ fontSize: '13px', color: '#0891b2', fontWeight: 600, margin: '6px 0 0 0' }}>Delta Dental PPO</p>
        </div>
      </div>

      <CarrierInfo carrier="Delta Dental" phone="800-810-5234" website="https://www.deltadentalnj.com/RWJBH" />

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Delta Dental Plans</h3>
        <Table headers={['Benefit', 'Base Plan', 'Buy-Up Plan']} rows={[
          ['Deductible (Ind/Fam)', '$75 / $225', '$50 / $150'],
          ['Preventive (exams, cleanings)', '100% — No deductible', '100% — No deductible'],
          ['Basic Services (fillings, etc)', '80%', '80%'],
          ['Major Services (crowns, etc)', '50%', '50%'],
          ['Implants', 'Not covered', '50%'],
          ['Annual Maximum', '$1,500', '$2,000'],
          ['Orthodontia', '50%', '50%'],
          ['Ortho Lifetime Max', '$1,500', '$2,000'],
        ]} color="#0891b2" />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Per-Pay Dental Contributions</h3>
        <Table headers={['Coverage', 'Base Plan', 'Buy-Up Plan']} rows={[
          ['Employee Only', '$11.84', '$13.90'],
          ['Employee + Child(ren)', '$23.68', '$27.82'],
          ['Employee + Spouse', '$18.94', '$22.35'],
          ['Family', '$36.71', '$43.26'],
        ]} color="#0891b2" />
      </div>

      <div style={{ marginTop: '24px' }}>
        <ButtonLink text="Find Delta Dental Provider" url="https://www.deltadentalnj.com/RWJBH" />
      </div>
    </div>
  );
}

function VisionTab() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '6px', height: '32px', background: 'linear-gradient(180deg, #0891b2 0%, #0284c7 100%)', borderRadius: '4px' }} />
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1B2F5C', margin: 0 }}>Vision Plan</h2>
          <p style={{ fontSize: '13px', color: '#0891b2', fontWeight: 600, margin: '6px 0 0 0' }}>EyeMed Coverage</p>
        </div>
      </div>

      <CarrierInfo carrier="EyeMed" phone="866-800-5457" website="https://www.eyemed.com" />

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Vision Benefits</h3>
        <Table headers={['Benefit', 'In-Network', 'Out-of-Network']} rows={[
          ['Eye Exam', '$0 copay (PLUS) / $10', 'Up to $50'],
          ['Frames', '$0 + $175 allowance', 'Up to $88'],
          ['PLUS Provider Frames', '$0 + $225 allowance', 'Up to $88'],
          ['Lenses (single/bi/tri)', '$10 copay', 'Up to $100'],
          ['Contact Lenses — Conventional', '$0 + $175 allowance', 'Up to $140'],
          ['Contact Lenses — Disposable', '$0 + up to $175', 'Up to $140'],
          ['Medically Necessary Contacts', '$0 — paid in full', 'Up to $210'],
          ['Frequency', 'Once per calendar year', 'Once per calendar year'],
        ]} color="#0891b2" />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Vision Contributions (Bi-Weekly)</h3>
        <Table headers={['Coverage', 'Per Pay Period']} rows={[
          ['Employee Only', '$3.45'],
          ['Employee + Child(ren)', '$6.63'],
          ['Employee + Spouse', '$5.12'],
          ['Family', '$9.75'],
        ]} color="#0891b2" />
      </div>

      <div style={{ marginTop: '24px' }}>
        <ButtonLink text="Find EyeMed Provider" url="https://www.eyemed.com" />
      </div>
    </div>
  );
}

function HSAFSATab() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '6px', height: '32px', background: 'linear-gradient(180deg, #0891b2 0%, #0284c7 100%)', borderRadius: '4px' }} />
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1B2F5C', margin: 0 }}>Savings Accounts</h2>
          <p style={{ fontSize: '13px', color: '#0891b2', fontWeight: 600, margin: '6px 0 0 0' }}>HSA & FSA Options</p>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Health Savings Account (HSA)</h3>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
          For employees choosing the Core Plan. Use pre-tax dollars for current and future qualified medical expenses.
        </p>
        <Table headers={['Coverage Tier', 'IRS 2026 Limit']} rows={[
          ['Single', '$4,300'],
          ['Family', '$8,550'],
          ['Age 55+ Catch-up', 'Additional $1,000'],
        ]} color="#0891b2" />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Flexible Spending Accounts (FSA)</h3>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
          Use pre-tax dollars to cover eligible expenses and reduce your taxable income.
        </p>
        <Table headers={['Account Type', 'Maximum Allowed']} rows={[
          ['Healthcare FSA', '$3,400 Annually'],
          ['Healthcare FSA Rollover to 2027', 'Up to $680'],
          ['Dependent Care FSA', '$7,500 Annually'],
          ['Parking & Transit', '$300 per month each'],
        ]} color="#0891b2" />
      </div>

      <Callout title="Use It or Lose It" text="Healthcare FSA: Roll over up to $680 into 2027. Dependent Care FSA: No rollover — plan carefully. Changes only allowed during Annual Enrollment or after a Qualifying Life Event." color="#CC1F34" />
    </div>
  );
}

function LifeTab() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '6px', height: '32px', background: 'linear-gradient(180deg, #CC1F34 0%, #A61A2A 100%)', borderRadius: '4px' }} />
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1B2F5C', margin: 0 }}>Life & Disability</h2>
          <p style={{ fontSize: '13px', color: '#0891b2', fontWeight: 600, margin: '6px 0 0 0' }}>MetLife Coverage</p>
        </div>
      </div>

      <CarrierInfo carrier="MetLife" phone="844-690-0920" website="https://www.RWJBHBenefits.com" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
        <InfoCard title="Basic Life Insurance" color="#CC1F34" text="Employer-paid. 1.5× annual salary, up to $500,000. FREE." />
        <InfoCard title="Voluntary Life Insurance" color="#CC1F34" text="Additional coverage available. Spousal and child options." />
        <InfoCard title="Long-Term Disability" color="#CC1F34" text="Employer-paid. 60% salary, up to $10,000/month. FREE." />
        <InfoCard title="Voluntary Disability" color="#CC1F34" text="Additional short-term disability coverage available." />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Additional Financial Benefits</h3>
        <Table headers={['Benefit', 'Details']} rows={[
          ['Tuition Reimbursement (ISTS)', 'Up to $5,250 per year'],
          ['Student Loan Navigation (Savi)', 'Personalized support & advice'],
          ['Employee Discounts (PerkSpot)', 'Travel, dining, electronics & more'],
          ['Purchasing Program (Purchasing Power)', 'Payroll deduction purchases'],
        ]} color="#CC1F34" />
      </div>
    </div>
  );
}

function RetirementTab() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '6px', height: '32px', background: 'linear-gradient(180deg, #0891b2 0%, #0284c7 100%)', borderRadius: '4px' }} />
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1B2F5C', margin: 0 }}>401(k) Retirement Plan</h2>
          <p style={{ fontSize: '13px', color: '#0891b2', fontWeight: 600, margin: '6px 0 0 0' }}>Fidelity NetBenefits</p>
        </div>
      </div>

      <CarrierInfo carrier="Fidelity" phone="800-513-5015" website="https://www.netbenefits.com/RWJBarnabasHealth" />

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Employer Match & Vesting</h3>
        <Table headers={['Feature', 'Details']} rows={[
          ['Employer Match', '50% match on first 6% you contribute'],
          ['Auto-Enrollment', '3% after 30 days of employment'],
          ['Non-Elective Contribution', '0–6% annual (based on system results)'],
          ['Vesting Period', '3-year graded vesting schedule'],
          ['Contribution Limits 2026', 'IRS limit $23,500 (under 50) / $31,000 (50+)'],
        ]} color="#0891b2" />
      </div>

      <Callout title="Maximize Your Match" text="Contribute 6% to your 401(k) to get the full 50% employer match. This means 3% of your salary goes in for free. With auto-enrollment at 3%, you're only getting half the match." color="#0891b2" />

      <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <ButtonLink text="Manage at Fidelity" url="https://www.netbenefits.com/RWJBarnabasHealth" />
        <ButtonLink text="Fidelity: 800-513-5015" url="tel:8005135015" />
      </div>
    </div>
  );
}

function PTOTab() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '6px', height: '32px', background: 'linear-gradient(180deg, #CC1F34 0%, #A61A2A 100%)', borderRadius: '4px' }} />
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1B2F5C', margin: 0 }}>Paid Time Off</h2>
          <p style={{ fontSize: '13px', color: '#0891b2', fontWeight: 600, margin: '6px 0 0 0' }}>Vacation, Holidays & Leave</p>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Vacation Accrual (40-hr/week)</h3>
        <Table headers={['Years of Service', 'Hourly (Non-Exempt)', 'Salaried (Exempt)']} rows={[
          ['0 years', '120 hrs (15 days)', '160 hrs (20 days)'],
          ['3 years', '136 hrs (17 days)', '176 hrs (22 days)'],
          ['5 years', '152 hrs (19 days)', '192 hrs (24 days)'],
          ['10 years', '168 hrs (21 days)', '208 hrs (26 days)'],
          ['15 years', '184 hrs (23 days)', '224 hrs (28 days)'],
          ['20 years', '200 hrs (25 days)', '240 hrs (30 days)'],
        ]} color="#CC1F34" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '32px' }}>
        <StatCard title="Sick Time" stat="40 hours" desc="NJ Earned Sick Leave (NJESL)" />
        <StatCard title="Holidays" stat="11 days" desc="Paid company holidays" />
        <StatCard title="Parental Leave" stat="12 weeks" desc="100% paid — all new parents" />
      </div>

      <Callout title="Paid Parental Leave" text="12 weeks at 100% pay for all eligible new parents (birthing and non-birthing), combined with NJ TDI/FLI. Must have 1 year of continuous service. Paid Short-Term Disability also covers up to 26 weeks at 66⅔% pay." color="#CC1F34" />
    </div>
  );
}

function ContactsTab() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ width: '6px', height: '32px', background: 'linear-gradient(180deg, #0891b2 0%, #0284c7 100%)', borderRadius: '4px' }} />
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#1B2F5C', margin: 0 }}>Carrier Directory</h2>
          <p style={{ fontSize: '13px', color: '#0891b2', fontWeight: 600, margin: '6px 0 0 0' }}>Phone & Web Resources</p>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Health & Wellness</h3>
        <Table headers={['Carrier', 'Phone', 'Website']} rows={[
          ['Medical (Aetna)', '1-800-XXX-XXXX', 'aetnaresource.com/n/RWJBH'],
          ['Dental (Delta Dental)', '800-810-5234', 'deltadentalnj.com/RWJBH'],
          ['Vision (EyeMed)', '866-800-5457', 'eyemed.com'],
          ['Wellness (Personify Health)', '888-671-9395', 'join.personifyhealth.com/bhealthy'],
          ['EAP (Counseling)', '800-300-0628', '24/7 — Confidential'],
        ]} color="#0891b2" />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>Financial & Retirement</h3>
        <Table headers={['Service', 'Phone', 'Website']} rows={[
          ['Life Insurance / LTD / FSA', '844-690-0920', 'RWJBHBenefits.com'],
          ['Retirement (Fidelity)', '800-513-5015', 'netbenefits.com/RWJBarnabasHealth'],
          ['Voluntary Benefits (Aon)', '844-428-6672', 'mybenefits.aon.com'],
        ]} color="#0891b2" />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1B2F5C', marginBottom: '12px' }}>RWJBH Benefits Center</h3>
        <Callout title="Questions? Contact HR" text="Phone: 844-690-0920 | Website: RWJBHBenefits.com | Hours: Mon–Fri, 8am–6pm ET" color="#0891b2" />
      </div>
    </div>
  );
}

function CarrierInfo({ carrier, phone, website }: { carrier: string; phone: string; website: string }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      border: '1px solid #e2e8f0',
      borderLeft: '4px solid #CC1F34',
      padding: '18px 20px',
      marginBottom: '28px',
      borderRadius: '8px',
      fontSize: '13px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 700, color: '#1B2F5C', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '18px' }}>🏢</span>{carrier}
        </span>
        <span style={{ color: '#cbd5e1', userSelect: 'none' }}>|</span>
        <a href={`tel:${phone}`} style={{ color: '#0891b2', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#CC1F34'}
          onMouseLeave={e => e.currentTarget.style.color = '#0891b2'}
        >
          <span style={{ marginRight: '4px' }}>📞</span>{phone}
        </a>
        <span style={{ color: '#cbd5e1', userSelect: 'none' }}>|</span>
        <a href={website} target="_blank" rel="noopener noreferrer" style={{ color: '#0891b2', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '4px' }}
          onMouseEnter={e => e.currentTarget.style.color = '#CC1F34'}
          onMouseLeave={e => e.currentTarget.style.color = '#0891b2'}
        >
          🌐 Visit Website →
        </a>
      </div>
    </div>
  );
}

function Table({ headers, rows, color }: { headers: string[]; rows: string[][]; color: string }) {
  return (
    <div style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
        <thead>
          <tr style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: '14px 14px', color: '#fff', fontWeight: 700, textAlign: 'left',
                fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.6px',
                borderRight: i < headers.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{
              background: i % 2 === 0 ? '#fff' : '#f8f9fa',
              transition: 'background 0.2s',
              borderTop: '1px solid #f0f0f0',
            }}
            onMouseEnter={e => e.currentTarget.style.background = i % 2 === 0 ? '#f0f7ff' : '#e8f3ff'}
            onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? '#fff' : '#f8f9fa'}
            >
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: '12px 14px', color: '#1B2F5C', fontWeight: j === 0 ? 600 : 400,
                  borderRight: j < row.length - 1 ? '1px solid #f0f0f0' : 'none',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ title, text, color }: { title: string; text: string; color: string }) {
  return (
    <div style={{
      background: `${color}08`, borderLeft: `4px solid ${color}`,
      padding: '16px 20px', borderRadius: '4px', marginBottom: '12px',
    }}>
      <div style={{ fontWeight: 700, fontSize: '13px', color, marginBottom: '6px' }}>{title}</div>
      <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>{text}</div>
    </div>
  );
}

function InfoCard({ title, color, text }: { title: string; color: string; text: string }) {
  return (
    <div style={{
      background: `${color}12`,
      borderRadius: '8px',
      padding: '18px',
      border: `1.5px solid ${color}40`,
      transition: 'all 0.3s',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = `${color}80`;
      e.currentTarget.style.boxShadow = `0 4px 12px ${color}20`;
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = `${color}40`;
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      <div style={{ fontWeight: 700, fontSize: '13px', color, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: '16px' }}>•</span>{title}
      </div>
      <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.6 }}>{text}</div>
    </div>
  );
}

function StatCard({ title, stat, desc }: { title: string; stat: string; desc: string }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      borderRadius: '8px',
      padding: '20px',
      border: '1.5px solid #e2e8f0',
      textAlign: 'center',
      transition: 'all 0.3s',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = '#0891b2';
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(8, 145, 178, 0.15)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = '#e2e8f0';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      <div style={{ fontSize: '28px', fontWeight: 800, background: 'linear-gradient(135deg, #CC1F34, #A61A2A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>{stat}</div>
      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B2F5C', marginBottom: '4px' }}>{title}</div>
      <div style={{ fontSize: '12px', color: '#64748b' }}>{desc}</div>
    </div>
  );
}

function ButtonLink({ text, url }: { text: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '14px 24px', background: 'linear-gradient(135deg, #CC1F34 0%, #A61A2A 100%)', color: '#fff',
      borderRadius: '8px', fontSize: '14px', fontWeight: 700,
      textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      width: '100%',
      boxShadow: '0 4px 12px rgba(204, 31, 52, 0.25)',
      border: '1px solid rgba(204, 31, 52, 0.5)',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(204, 31, 52, 0.35)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(204, 31, 52, 0.25)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {text} <span style={{ marginLeft: '6px' }}>→</span>
    </a>
  );
}

function VideoCard({ title, description, onClick }: { title: string; description: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'linear-gradient(135deg, #CC1F34 0%, #A61A2A 50%, #0891b2 100%)',
        borderRadius: '10px',
        padding: '32px',
        marginBottom: '28px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        boxShadow: '0 6px 20px rgba(204, 31, 52, 0.25)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 32px rgba(204, 31, 52, 0.35)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(204, 31, 52, 0.25)';
      }}
    >
      {/* Decorative pattern */}
      <div style={{
        position: 'absolute',
        right: '-40px',
        top: '-40px',
        width: '180px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '24px' }}>
        {/* Play Button */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          border: '2px solid rgba(255,255,255,0.4)',
          flexShrink: 0,
          transition: 'all 0.3s',
          fontSize: '36px',
        }}>
          ▶
        </div>

        {/* Content */}
        <div>
          <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.3px' }}>
            {title}
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.95)', lineHeight: 1.6, marginBottom: '12px' }}>
            {description}
          </div>
          <div style={{ fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
            Click to watch <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
