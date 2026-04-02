'use client';

export default function BenefitsAtAGlance({ clientName }: { clientName: string }) {
  const handleExportPDF = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Print / Export Bar */}
      <div className="no-print" style={{ background: '#08212D', padding: '12px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 10 }}>
        <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{clientName} · Benefits at a Glance</span>
        <button onClick={handleExportPDF} style={{ padding: '8px 20px', background: '#67E74E', color: '#08212D', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>Export as PDF</button>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px', background: '#fff', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #0891b2, #0e7490)', borderRadius: '16px', padding: '36px 32px', marginBottom: '32px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '180px', height: '180px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
          <h1 style={{ fontSize: '32px', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>BENEFITS AT<br />A GLANCE</h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '10px' }}>Benefits Effective January 1 – December 31, 2026</p>
          <div style={{ position: 'absolute', right: '32px', top: '32px', fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>{clientName}</div>
        </div>

        {/* Eligibility */}
        <div style={{ background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '12px', padding: '20px 24px', marginBottom: '28px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0891b2', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Benefit Eligibility</h3>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', margin: 0 }}>You are eligible for coverage beginning the <strong>first of the month following hire date</strong> if you are an active, full-time employee working at least <strong>30 hours per week</strong>.</p>
        </div>

        {/* Medical Plan */}
        <Section title="Medical Plan" color="#DC2626">
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', marginBottom: '16px' }}>Carrier: Carrier Name · Policy: XX · Phone: XXX-XXX-XXXX · www.xyz.com</p>
          <Table headers={['Network', 'OAP HDHP w/ HSA', 'OAP 750 National']} rows={[
            ['Doctor Copay (PCP/Specialist)', 'Ded + Coins', '$25/$40'],
            ['Deductible (Ind/Family)', '$1,500/$3,000', '$750/$1,500'],
            ['Coinsurance', '80%/20%', '80%/20%'],
            ['Out-of-Pocket Max (Ind/Fam)', '$3,000/$6,000', '$2,400/$7,200'],
          ]} color="#DC2626" />
          <div style={{ height: '12px' }} />
          <Table headers={['Emergency Services', 'OAP HDHP w/ HSA', 'OAP 750 National']} rows={[
            ['Urgent Care', 'Ded + Coins', '$25 Copay'],
            ['Emergency Room', 'Ded + Coins', '$250 Copay'],
          ]} color="#DC2626" />
          <div style={{ height: '12px' }} />
          <Table headers={['Prescriptions', 'OAP HDHP w/ HSA', 'OAP 750 National']} rows={[
            ['Deductible', 'Combined w/ med.', '$0'],
            ['Retail (Gen/Brand/Non-Form)', 'Ded + Coins', '$15/$35/$60'],
            ['Mail-Order (Gen/Brand/Non-Form)', 'Ded + Coins', '$30/$70/$120'],
            ['Specialty', 'Ded + Coins', '50% up to $100'],
          ]} color="#DC2626" />
        </Section>

        {/* HSA */}
        <Section title="Health Savings Account (HSA)" color="#0891b2">
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', marginBottom: '16px' }}>Members who choose the HDHP plan are eligible to open and contribute funds to an HSA. Funds may be used toward current and future qualified medical expenses.</p>
          <Table headers={['Tier', 'IRS 2026 Limit']} rows={[
            ['Single', '$4,300'],
            ['Family', '$8,550'],
            ['Age 55+ Catch-up', 'Additional $1,000'],
          ]} color="#0891b2" />
        </Section>

        {/* FSA */}
        <Section title="Flexible Spending Account (FSA)" color="#D97706">
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', marginBottom: '16px' }}>Pre-tax dollars for eligible dependent care and parking/transit expenses.</p>
          <Table headers={['Tier', 'Maximum Allowed']} rows={[
            ['Dependent Care', '$5,000 Annually'],
            ['Parking & Transit', '$300 per month each'],
          ]} color="#D97706" />
        </Section>

        {/* Dental */}
        <Section title="Dental Plan" color="#059669">
          <Table headers={['Dental PPO', 'Guardian PPO', 'Guardian PPO Alt']} rows={[
            ['Deductible', 'Individual $50', 'Individual $25'],
            ['Preventive', '100%', '100%'],
            ['Basic', '80%', '90%'],
            ['Major', '50%', '60%'],
            ['Annual Max', '$1,000', '$2,500'],
            ['Orthodontia', '50%', '50%'],
            ['Ortho Lifetime Max', '$1,000 Child Only', '$2,500 Child Only'],
          ]} color="#059669" />
        </Section>

        {/* Vision */}
        <Section title="Vision Plan" color="#2563EB">
          <Table headers={['EyeMed Vision', 'In Network', 'Out of Network']} rows={[
            ['Routine Eye Exam', '$0 Copay', 'Up to $45'],
            ['Frames', '$0 Copay', 'Up to $45'],
            ['Single Vision Lenses', '$0 Copay', 'Up to $52'],
            ['Bifocal Lenses', '$0 Copay', 'Up to $82'],
            ['Elective Contacts', 'Up to $130', 'Up to $97'],
          ]} color="#2563EB" />
        </Section>

        {/* Life & Disability */}
        <Section title="Life & Disability" color="#7C3AED">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ background: '#faf5ff', borderRadius: '10px', padding: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#7C3AED', marginBottom: '8px' }}>Basic Life & AD&D</div>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6', margin: 0 }}>Employer-paid basic life and AD&D benefits for all eligible employees.</p>
            </div>
            <div style={{ background: '#faf5ff', borderRadius: '10px', padding: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#7C3AED', marginBottom: '8px' }}>Short Term Disability</div>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6', margin: 0 }}>Employer-paid. Benefits begin on 8th day. Lasts up to 12 weeks.</p>
            </div>
            <div style={{ background: '#faf5ff', borderRadius: '10px', padding: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#7C3AED', marginBottom: '8px' }}>Voluntary Life</div>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6', margin: 0 }}>Purchase up to 5x salary. Spousal and child coverage available.</p>
            </div>
            <div style={{ background: '#faf5ff', borderRadius: '10px', padding: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#7C3AED', marginBottom: '8px' }}>Long Term Disability</div>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6', margin: 0 }}>Employer-paid. Benefits begin after 90-day elimination period.</p>
            </div>
          </div>
        </Section>

        {/* 401k */}
        <Section title="401(k) Retirement Plan" color="#4338CA">
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', margin: 0 }}>Eligible employees may elect to defer on the first day of the month following your date of hire. Information on completing account setup with Fidelity NetBenefits will be emailed within 7–10 days of your start date.</p>
        </Section>

        {/* Parental Leave */}
        <Section title="Parental Leave" color="#E11D48">
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', margin: 0 }}>Up to <strong>8 weeks of 100% paid leave</strong> for birth parents, and <strong>4 weeks of 100% paid leave</strong> for all other new parents, including adoption.</p>
        </Section>

        {/* Footer */}
        <div style={{ marginTop: '40px', padding: '20px', background: '#f0f4f8', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#888' }}>Powered by Flimp Communications · {clientName} Benefits at a Glance 2026</div>
        </div>
      </div>

      <style>{`
        @media print { .no-print { display: none !important; } }
      `}</style>
    </div>
  );
}

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <div style={{ width: '4px', height: '24px', background: color, borderRadius: '2px' }} />
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Table({ headers, rows, color }: { headers: string[]; rows: string[][]; color: string }) {
  return (
    <div style={{ overflow: 'hidden', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
        <thead>
          <tr style={{ background: color }}>
            {headers.map(h => (
              <th key={h} style={{ padding: '10px 14px', color: '#fff', fontWeight: 600, textAlign: 'left', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '10px 14px', color: j === 0 ? '#1e293b' : '#555', fontWeight: j === 0 ? 500 : 400, borderTop: '1px solid #f0f0f0' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
