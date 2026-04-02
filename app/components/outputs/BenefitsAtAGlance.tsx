'use client';

export default function BenefitsAtAGlance({ clientName }: { clientName: string }) {
  const handleExportPDF = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#e5e7eb' }}>
      {/* Sticky Download Bar */}
      <div className="no-print" style={{
        background: '#1e293b', padding: '14px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 10,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#D83A31', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 800 }}>PDF</div>
          <div>
            <div style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{clientName} — Benefits at a Glance</div>
            <div style={{ color: '#94a3b8', fontSize: '11px' }}>Use the button to save or print this document as PDF</div>
          </div>
        </div>
        <button onClick={handleExportPDF} style={{
          padding: '10px 24px', background: '#D83A31', color: '#fff', border: 'none',
          borderRadius: '8px', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '8px',
          boxShadow: '0 2px 8px rgba(216,58,49,0.3)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
        onMouseLeave={e => e.currentTarget.style.background = '#D83A31'}
        >
          <span style={{ fontSize: '16px' }}>&#8681;</span> Download / Print PDF
        </button>
      </div>

      {/* Document wrapper — looks like a printed page */}
      <div style={{
        maxWidth: '850px', margin: '32px auto', background: '#fff',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        fontFamily: '"Segoe UI", -apple-system, Arial, sans-serif',
        lineHeight: 1.5,
      }}>
        {/* Page 1 Header */}
        <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', padding: '48px 48px 40px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-40px', top: '-40px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', right: '40px', bottom: '-60px', width: '160px', height: '160px', background: 'rgba(255,255,255,0.02)', borderRadius: '50%' }} />
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>2026 Employee Benefits</div>
          <h1 style={{ fontSize: '36px', fontWeight: 800, margin: 0, lineHeight: 1.15, letterSpacing: '-0.5px' }}>Benefits at a Glance</h1>
          <div style={{ marginTop: '12px', fontSize: '15px', color: '#cbd5e1' }}>{clientName}</div>
          <div style={{ marginTop: '4px', fontSize: '12px', color: '#64748b' }}>Benefits Effective January 1 – December 31, 2026</div>
        </div>

        <div style={{ padding: '36px 48px 48px' }}>
          {/* Eligibility Banner */}
          <div style={{
            background: '#f0f9ff', border: '1px solid #bae6fd', borderLeft: '4px solid #0284c7',
            borderRadius: '0 8px 8px 0', padding: '16px 20px', marginBottom: '32px',
          }}>
            <div style={{ fontWeight: 700, fontSize: '12px', color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Benefit Eligibility</div>
            <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.6 }}>
              You are eligible for coverage beginning the <strong>first of the month following hire date</strong> if you are an active, full-time employee working at least <strong>30 hours per week</strong>.
            </div>
          </div>

          {/* Medical Plan */}
          <SectionHeader title="Medical Plan" color="#DC2626" />
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
            Carrier: Carrier Name &bull; Policy #: XX &bull; Phone: XXX-XXX-XXXX &bull; www.carrier.com
          </div>
          <Table headers={['', 'OAP HDHP w/ HSA', 'OAP 750 National']} rows={[
            ['Doctor Copay (PCP/Specialist)', 'Ded + Coins', '$25 / $40'],
            ['Deductible (Ind / Family)', '$1,500 / $3,000', '$750 / $1,500'],
            ['Coinsurance (Plan / Member)', '80% / 20%', '80% / 20%'],
            ['Out-of-Pocket Max (Ind / Fam)', '$3,000 / $6,000', '$2,400 / $7,200'],
          ]} color="#DC2626" />
          <Spacer />
          <Table headers={['Emergency Services', 'OAP HDHP w/ HSA', 'OAP 750 National']} rows={[
            ['Urgent Care', 'Ded + Coins', '$25 Copay'],
            ['Emergency Room', 'Ded + Coins', '$250 Copay'],
          ]} color="#DC2626" />
          <Spacer />
          <Table headers={['Prescriptions', 'OAP HDHP w/ HSA', 'OAP 750 National']} rows={[
            ['Deductible', 'Combined w/ medical', '$0'],
            ['Retail (Gen / Brand / Non-Form)', 'Ded + Coins', '$15 / $35 / $60'],
            ['Mail-Order (Gen / Brand / Non)', 'Ded + Coins', '$30 / $70 / $120'],
            ['Specialty', 'Ded + Coins', '50% up to $100'],
          ]} color="#DC2626" />

          {/* HSA */}
          <SectionHeader title="Health Savings Account (HSA)" color="#0891b2" />
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px', lineHeight: 1.6 }}>
            Members who choose the HDHP plan are eligible to open and contribute funds to an HSA. Funds may be used toward current and future qualified medical expenses.
          </div>
          <Table headers={['Contribution Tier', 'IRS 2026 Limit']} rows={[
            ['Single', '$4,300'],
            ['Family', '$8,550'],
            ['Age 55+ Catch-up', 'Additional $1,000'],
          ]} color="#0891b2" />

          {/* FSA */}
          <SectionHeader title="Flexible Spending Account (FSA)" color="#D97706" />
          <Table headers={['Account Type', 'Maximum Allowed']} rows={[
            ['Dependent Care FSA', '$5,000 Annually'],
            ['Parking & Transit', '$300 per month each'],
          ]} color="#D97706" />

          {/* Dental */}
          <SectionHeader title="Dental Plan" color="#059669" />
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>Carrier: Guardian &bull; www.guardiandirect.com</div>
          <Table headers={['Coverage Level', 'Guardian PPO', 'Guardian PPO Alternative']} rows={[
            ['Deductible', '$50 Individual', '$25 Individual'],
            ['Preventive', '100%', '100%'],
            ['Basic', '80%', '90%'],
            ['Major', '50%', '60%'],
            ['Annual Maximum', '$1,000', '$2,500'],
            ['Orthodontia', '50%', '50%'],
            ['Ortho Lifetime Max', '$1,000 (Child Only)', '$2,500 (Child Only)'],
          ]} color="#059669" />

          {/* Vision */}
          <SectionHeader title="Vision Plan" color="#2563EB" />
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>Carrier: EyeMed &bull; www.eyemed.com</div>
          <Table headers={['Benefit', 'In-Network', 'Out-of-Network']} rows={[
            ['Routine Eye Exam', '$0 Copay', 'Up to $45'],
            ['Frames', '$0 Copay, up to $130 allowance', 'Up to $45'],
            ['Single Vision Lenses', '$0 Copay', 'Up to $52'],
            ['Bifocal Lenses', '$0 Copay', 'Up to $82'],
            ['Elective Contacts', 'Up to $130 allowance', 'Up to $97'],
          ]} color="#2563EB" />

          {/* Life & Disability */}
          <SectionHeader title="Life & Disability Insurance" color="#7C3AED" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            <InfoCard title="Basic Life & AD&D" color="#7C3AED" text="Employer-paid basic life and AD&D equal to 1x annual salary, up to $500,000." />
            <InfoCard title="Voluntary Life" color="#7C3AED" text="Purchase additional coverage up to 5x salary. Spousal and child coverage available." />
            <InfoCard title="Short-Term Disability" color="#7C3AED" text="Employer-paid. Benefits begin on day 8 of disability. Up to 12 weeks at 60% of salary." />
            <InfoCard title="Long-Term Disability" color="#7C3AED" text="Employer-paid. Benefits begin after 90-day elimination period. 60% of salary up to $10,000/mo." />
          </div>

          {/* 401(k) */}
          <SectionHeader title="401(k) Retirement Plan" color="#4338CA" />
          <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.7, marginBottom: '8px' }}>
            Eligible employees may elect to defer on the first of the month following your date of hire. The company matches <strong>100% of the first 3%</strong> and <strong>50% of the next 2%</strong> of eligible compensation. 3-year graded vesting schedule applies.
          </div>
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '24px' }}>
            Account setup through Fidelity NetBenefits. Login details provided within 7-10 days of start date.
          </div>

          {/* Parental Leave */}
          <SectionHeader title="Parental Leave" color="#E11D48" />
          <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.7, marginBottom: '24px' }}>
            Up to <strong>8 weeks of 100% paid leave</strong> for birth parents and <strong>4 weeks of 100% paid leave</strong> for all other new parents, including adoption and foster placement.
          </div>

          {/* Additional Benefits */}
          <SectionHeader title="Additional Benefits" color="#6366f1" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '24px' }}>
            <MiniCard title="EAP" desc="Up to 8 free counseling sessions per year" />
            <MiniCard title="Telehealth" desc="$0 copay for virtual doctor visits" />
            <MiniCard title="Wellness" desc="Gym reimbursement up to $50/month" />
            <MiniCard title="PTO" desc="15-25 vacation days based on tenure" />
            <MiniCard title="Holidays" desc="11 paid company holidays per year" />
            <MiniCard title="Tuition" desc="Up to $5,250 per year reimbursement" />
          </div>

          {/* Contacts */}
          <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '20px 24px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#1e293b', marginBottom: '10px' }}>Key Contacts</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px', color: '#475569' }}>
              <div><strong>HR Benefits Team:</strong> benefits@company.com</div>
              <div><strong>Benefits Hotline:</strong> 1-800-555-0199</div>
              <div><strong>Medical / Rx:</strong> 1-800-XXX-XXXX</div>
              <div><strong>Dental (Guardian):</strong> 1-800-XXX-XXXX</div>
              <div><strong>Vision (EyeMed):</strong> 1-800-XXX-XXXX</div>
              <div><strong>401(k) (Fidelity):</strong> 1-800-XXX-XXXX</div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '32px', textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>
              This document is a summary only. Refer to plan documents for complete details. In the event of a conflict, plan documents govern.
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px' }}>
              Powered by Flimp Communications &bull; {clientName} Benefits at a Glance 2026
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          div { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}

function SectionHeader({ title, color }: { title: string; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '28px', marginBottom: '14px' }}>
      <div style={{ width: '4px', height: '22px', background: color, borderRadius: '2px' }} />
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: 0 }}>{title}</h2>
    </div>
  );
}

function Table({ headers, rows, color }: { headers: string[]; rows: string[][]; color: string }) {
  return (
    <div style={{ overflow: 'hidden', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
        <thead>
          <tr style={{ background: color }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: '8px 12px', color: '#fff', fontWeight: 600, textAlign: 'left',
                fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.3px',
                borderRight: i < headers.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: '8px 12px', color: j === 0 ? '#1e293b' : '#475569',
                  fontWeight: j === 0 ? 500 : 400, borderTop: '1px solid #f0f0f0',
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

function Spacer() {
  return <div style={{ height: '10px' }} />;
}

function InfoCard({ title, color, text }: { title: string; color: string; text: string }) {
  return (
    <div style={{ background: `${color}08`, borderRadius: '8px', padding: '14px 16px', border: `1px solid ${color}15` }}>
      <div style={{ fontWeight: 700, fontSize: '12px', color, marginBottom: '4px' }}>{title}</div>
      <div style={{ fontSize: '11px', color: '#475569', lineHeight: 1.5 }}>{text}</div>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ background: '#f8fafc', borderRadius: '6px', padding: '12px', border: '1px solid #e2e8f0' }}>
      <div style={{ fontWeight: 700, fontSize: '12px', color: '#1e293b', marginBottom: '2px' }}>{title}</div>
      <div style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.4 }}>{desc}</div>
    </div>
  );
}
