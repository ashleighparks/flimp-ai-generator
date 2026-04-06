'use client';

import React, { useState } from 'react';

interface DigitalBenefitsGuideProps {
  clientName?: string;
}

type Section =
  | 'welcome'
  | 'medical'
  | 'dental'
  | 'vision'
  | 'rx'
  | 'spending'
  | 'life'
  | 'wellness'
  | 'retirement'
  | 'pto'
  | 'voluntary'
  | 'contacts';

export default function DigitalBenefitsGuide({ clientName = 'RWJBarnabas Health' }: DigitalBenefitsGuideProps) {
  const [activeSection, setActiveSection] = useState<Section>('welcome');

  const navItems: Array<{ id: Section; label: string; color: string }> = [
    { id: 'welcome', label: 'Welcome & Overview', color: '#1B2F5C' },
    { id: 'medical', label: 'Medical Plans', color: '#CC1F34' },
    { id: 'dental', label: 'Dental Coverage', color: '#0066CC' },
    { id: 'vision', label: 'Vision Coverage', color: '#009900' },
    { id: 'rx', label: 'Prescription Drug', color: '#FF6600' },
    { id: 'spending', label: 'Spending Accounts', color: '#663399' },
    { id: 'life', label: 'Life & Disability', color: '#CC0000' },
    { id: 'wellness', label: 'Wellbeing & EAP', color: '#00AA44' },
    { id: 'retirement', label: 'Financial & Retirement', color: '#AA5500' },
    { id: 'pto', label: 'Paid Time Off', color: '#0099CC' },
    { id: 'voluntary', label: 'Voluntary Benefits', color: '#996633' },
    { id: 'contacts', label: 'Important Contacts', color: '#1B2F5C' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'welcome':
        return <WelcomeSection clientName={clientName} />;
      case 'medical':
        return <MedicalSection />;
      case 'dental':
        return <DentalSection />;
      case 'vision':
        return <VisionSection />;
      case 'rx':
        return <RxSection />;
      case 'spending':
        return <SpendingSection />;
      case 'life':
        return <LifeDisabilitySection />;
      case 'wellness':
        return <WellnessSection />;
      case 'retirement':
        return <RetirementSection />;
      case 'pto':
        return <PTOSection />;
      case 'voluntary':
        return <VoluntarySection />;
      case 'contacts':
        return <ContactsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .sidebar { width: 100% !important; position: static !important; }
          .main-content { width: 100% !important; margin-left: 0 !important; }
        }
      `}</style>

      {/* Header */}
      <header className="bg-gradient-to-r from-[#1B2F5C] to-[#0F1F3F] text-white px-8 py-6 shadow-sm no-print">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">{clientName}</h1>
          <p className="text-blue-200 text-sm mt-1">Employee Benefits Guide 2025</p>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="sidebar w-64 bg-[#F5F7FA] border-r border-gray-200 overflow-y-auto no-print">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                  activeSection === item.id
                    ? 'bg-[#EBF0F5] text-[#1B2F5C] font-semibold shadow-sm'
                    : 'text-gray-700 hover:bg-white'
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm">{item.label}</span>
                {activeSection === item.id && (
                  <span style={{ marginLeft: 'auto', flexShrink: 0 }}>›</span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

function WelcomeSection({ clientName }: { clientName: string }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-[#1B2F5C] mb-4">Welcome to Your Benefits</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At {clientName}, we're committed to supporting your health and financial wellbeing. This comprehensive guide walks you through all available benefits, helping you make informed decisions about your coverage.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Take time to explore each section below. Questions? Our Benefits Center team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 my-8">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-semibold text-gray-900 mb-2">Benefits Center</h3>
          <a href="tel:844-690-0920" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
            844.690.0920
          </a>
          <p className="text-sm text-gray-600 mt-2">Call with enrollment, plan, or billing questions</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="font-semibold text-gray-900 mb-2">Care Navigation</h3>
          <a href="tel:844-424-2628" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
            844.424.2628
          </a>
          <p className="text-sm text-gray-600 mt-2">Get help finding doctors, scheduling, and managing care</p>
        </div>
      </div>

      <div className="bg-[#EBF0F5] p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-4">What You'll Find in This Guide</h3>
        <ul className="space-y-3 text-gray-700 text-sm">
          <li className="flex gap-3">
            <span className="text-[#CC1F34] font-bold">•</span>
            <span><strong>Medical Plans:</strong> Core and Flex plan details, all three tiers, copays, deductibles</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#CC1F34] font-bold">•</span>
            <span><strong>Dental & Vision:</strong> Coverage percentages, preventive benefits, annual maximums</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#CC1F34] font-bold">•</span>
            <span><strong>Spending Accounts:</strong> HSA, FSA, and Dependent Care FSA comparison and rules</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#CC1F34] font-bold">•</span>
            <span><strong>Life, Disability & Retirement:</strong> Coverage formulas, match information, vesting</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#CC1F34] font-bold">•</span>
            <span><strong>PTO & Wellness:</strong> Vacation schedules, holidays, EAP services, wellbeing programs</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#CC1F34] font-bold">•</span>
            <span><strong>Contacts:</strong> Phone numbers and links for every carrier and benefit administrator</span>
          </li>
        </ul>
      </div>

      <div className="border-t pt-6">
        <p className="text-sm text-gray-600">
          <strong>Need help understanding your benefits?</strong> Visit{' '}
          <a href="https://rwjbhbenefits.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            RWJBHBenefits.com
          </a>{' '}
          or call the Benefits Center at{' '}
          <a href="tel:844-690-0920" className="text-blue-600 hover:underline">
            844.690.0920
          </a>.
        </p>
      </div>
    </div>
  );
}

function MedicalSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Medical Plans</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Plan Options</h3>
        <p className="text-gray-700 mb-6">
          RWJBarnabas Health offers two comprehensive medical plans: Core and Flex. Both provide access to Aetna's broad network and full coverage for preventive care with no cost-sharing.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h4 className="font-semibold text-gray-900 mb-3">Out-of-Area Coverage</h4>
          <p className="text-gray-700 text-sm">
            If you live or work outside the tri-state area, an out-of-area plan option is available with different copays and deductibles. Contact the Benefits Center for details.
          </p>
        </div>
      </div>

      {/* Core Plan Table */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Core Plan - In-Network Benefits</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1B2F5C] text-white">
                <th className="border border-gray-300 px-4 py-3 text-left">Service</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Bronze</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Silver</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Gold</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: 'Annual Deductible (Individual/Family)', bronze: '$1,500 / $3,000', silver: '$1,000 / $2,000', gold: '$500 / $1,000' },
                { service: 'Office Visit Copay', bronze: '$40', silver: '$30', gold: '$20' },
                { service: 'Preventive Care', bronze: 'No Cost', silver: 'No Cost', gold: 'No Cost' },
                { service: 'Specialist Copay', bronze: '$60', silver: '$50', gold: '$40' },
                { service: 'Urgent Care', bronze: '$75', silver: '$65', gold: '$50' },
                { service: 'Emergency Room', bronze: '$200 (waived if admitted)', silver: '$200 (waived if admitted)', gold: '$200 (waived if admitted)' },
                { service: 'Inpatient Hospital', bronze: '20% after deductible', silver: '15% after deductible', gold: '10% after deductible' },
                { service: 'Out-of-Network Deductible', bronze: '$3,000 / $6,000', silver: '$2,000 / $4,000', gold: '$1,000 / $2,000' },
                { service: 'Out-of-Network Coinsurance', bronze: '30%', silver: '25%', gold: '20%' },
                { service: 'Out-of-Pocket Max (Individual/Family)', bronze: '$4,000 / $8,000', silver: '$3,000 / $6,000', gold: '$2,000 / $4,000' },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.service}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.bronze}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.silver}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.gold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Flex Plan Table */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Flex Plan - In-Network Benefits</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#CC1F34] text-white">
                <th className="border border-gray-300 px-4 py-3 text-left">Service</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Bronze</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Silver</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Gold</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: 'Annual Deductible (Individual/Family)', bronze: '$2,000 / $4,000', silver: '$1,500 / $3,000', gold: '$750 / $1,500' },
                { service: 'Office Visit Copay', bronze: '$50', silver: '$40', gold: '$25' },
                { service: 'Preventive Care', bronze: 'No Cost', silver: 'No Cost', gold: 'No Cost' },
                { service: 'Specialist Copay', bronze: '$75', silver: '$60', gold: '$45' },
                { service: 'Urgent Care', bronze: '$100', silver: '$85', gold: '$60' },
                { service: 'Emergency Room', bronze: '$250 (waived if admitted)', silver: '$250 (waived if admitted)', gold: '$250 (waived if admitted)' },
                { service: 'Inpatient Hospital', bronze: '25% after deductible', silver: '20% after deductible', gold: '15% after deductible' },
                { service: 'Out-of-Network Deductible', bronze: '$4,000 / $8,000', silver: '$3,000 / $6,000', gold: '$1,500 / $3,000' },
                { service: 'Out-of-Network Coinsurance', bronze: '40%', silver: '35%', gold: '30%' },
                { service: 'Out-of-Pocket Max (Individual/Family)', bronze: '$5,000 / $10,000', silver: '$4,000 / $8,000', gold: '$2,500 / $5,000' },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.service}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.bronze}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.silver}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.gold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contribution Tables */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Bi-Weekly Employee Contributions</h4>

        <div className="mb-8">
          <h5 className="font-semibold text-gray-800 mb-3 text-sm">Core Plan</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">Salary Band</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Bronze - Employee Only</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Bronze - Family</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Silver - Employee Only</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Silver - Family</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Gold - Employee Only</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Gold - Family</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { band: 'Under $35k', eo_b: '$45', f_b: '$175', eo_s: '$35', f_s: '$145', eo_g: '$15', f_g: '$95' },
                  { band: '$35k - $55k', eo_b: '$50', f_b: '$195', eo_s: '$40', f_s: '$165', eo_g: '$18', f_g: '$110' },
                  { band: '$55k - $75k', eo_b: '$55', f_b: '$215', eo_s: '$45', f_s: '$185', eo_g: '$20', f_g: '$125' },
                  { band: '$75k - $100k', eo_b: '$65', f_b: '$245', eo_s: '$55', f_s: '$215', eo_g: '$25', f_g: '$145' },
                  { band: '$100k+', eo_b: '$75', f_b: '$280', eo_s: '$65', f_s: '$250', eo_g: '$30', f_g: '$165' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.band}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.eo_b}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.f_b}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.eo_s}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.f_s}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.eo_g}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.f_g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-gray-800 mb-3 text-sm">Flex Plan</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">Salary Band</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Bronze - Employee Only</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Bronze - Family</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Silver - Employee Only</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Silver - Family</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Gold - Employee Only</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Gold - Family</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { band: 'Under $35k', eo_b: '$60', f_b: '$220', eo_s: '$50', f_s: '$195', eo_g: '$30', f_g: '$140' },
                  { band: '$35k - $55k', eo_b: '$70', f_b: '$250', eo_s: '$60', f_s: '$220', eo_g: '$35', f_g: '$160' },
                  { band: '$55k - $75k', eo_b: '$80', f_b: '$280', eo_s: '$70', f_s: '$250', eo_g: '$40', f_g: '$180' },
                  { band: '$75k - $100k', eo_b: '$95', f_b: '$320', eo_s: '$85', f_s: '$290', eo_g: '$50', f_g: '$210' },
                  { band: '$100k+', eo_b: '$110', f_b: '$360', eo_s: '$100', f_s: '$330', eo_g: '$60', f_g: '$240' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.band}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.eo_b}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.f_b}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.eo_s}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.f_s}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.eo_g}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.f_g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">More Information</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Aetna Member Services:</strong>{' '}
            <a href="tel:855-546-5415" className="text-blue-600 hover:underline">
              855.546.5415
            </a>
          </p>
          <p>
            <strong>Aetna Resources:</strong>{' '}
            <a href="https://aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              aetnaresource.com/n/RWJBH
            </a>
          </p>
          <p>
            <strong>Benefits Portal:</strong>{' '}
            <a href="https://rwjbhbenefits.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              RWJBHBenefits.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function DentalSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Dental Coverage</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Plan Overview</h3>
        <p className="text-gray-700 mb-6">
          Two comprehensive dental plans through Delta Dental of New Jersey. Both plans cover preventive care, basic restorative, major services, and orthodontia (on Buy-Up plan only).
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1B2F5C] text-white">
              <th className="border border-gray-300 px-4 py-3 text-left">Benefit</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Base Plan</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Buy-Up Plan</th>
            </tr>
          </thead>
          <tbody>
            {[
              { benefit: 'Annual Deductible (Individual/Family)', base: '$50 / $100', buyup: '$25 / $75' },
              { benefit: 'Preventive (Exams, Cleanings, X-rays)', base: '100% - No Deductible', buyup: '100% - No Deductible' },
              { benefit: 'Basic Restorative (Fillings)', base: '80%', buyup: '85%' },
              { benefit: 'Major Restorative (Root Canals, Crowns)', base: '50%', buyup: '60%' },
              { benefit: 'Oral Surgery', base: '50%', buyup: '60%' },
              { benefit: 'Orthodontia Coverage', base: 'Not Covered', buyup: '50% (Lifetime max $1,500)' },
              { benefit: 'Annual Maximum Benefit', base: '$1,200', buyup: '$1,500' },
              { benefit: 'Ortho Lifetime Maximum', base: 'N/A', buyup: '$1,500' },
              { benefit: 'Waiting Period', base: 'None', buyup: 'None' },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.benefit}</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.base}</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.buyup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Details</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>Coverage applies to in-network providers within the Delta Dental PPO network</li>
          <li>Out-of-network coverage available at higher patient cost-share</li>
          <li>No waiting period for preventive and basic services; major and ortho have standard waiting periods (check plan details)</li>
          <li>Pre-authorization required for major services and orthodontia</li>
        </ul>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Delta Dental:</strong>{' '}
            <a href="tel:800-810-5234" className="text-blue-600 hover:underline">
              800.810.5234
            </a>
          </p>
          <p>
            <strong>Provider Search:</strong>{' '}
            <a href="https://deltadentalnj.com/RWJBH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              deltadentalnj.com/RWJBH
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function VisionSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Vision Coverage</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">EyeMed PLUS Plan</h3>
        <p className="text-gray-700 mb-6">
          Comprehensive vision benefits through EyeMed, covering eye exams, prescription lenses, frames, contacts, and more.
        </p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1B2F5C] text-white">
              <th className="border border-gray-300 px-4 py-3 text-left">Benefit</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Coverage</th>
            </tr>
          </thead>
          <tbody>
            {[
              { benefit: 'Eye Exams', coverage: '$0 copay (covered 100%)' },
              { benefit: 'Exam Frequency', coverage: 'Once per calendar year' },
              { benefit: 'Frames Allowance', coverage: '$150 allowance; 20% off amount over allowance' },
              { benefit: 'Frame Frequency', coverage: 'Once every 24 months' },
              { benefit: 'Single Vision Lenses', coverage: '$0 copay per pair' },
              { benefit: 'Bifocal/Trifocal Lenses', coverage: '$0 copay per pair' },
              { benefit: 'Progressive Lenses', coverage: '$75 copay' },
              { benefit: 'Lens Frequency', coverage: 'Once per 12 months' },
              { benefit: 'Contact Lens Exam', coverage: '$0 copay' },
              { benefit: 'Contact Lens Allowance', coverage: '$150 allowance; once per 12 months' },
              { benefit: 'Contact Lens Fitting', coverage: 'Included with exam' },
              { benefit: 'Laser Vision Correction (LASIK)', coverage: '15% discount through EyeMed' },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.benefit}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.coverage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Network Highlights</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>Access to national and local independent optometrists and ophthalmologists</li>
          <li>Walmart Vision Center, Costco, and other retail locations included</li>
          <li>Online order options with home delivery available for glasses and contacts</li>
          <li>No waiting period for any benefits</li>
        </ul>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>EyeMed Member Services:</strong>{' '}
            <a href="tel:866-800-5457" className="text-blue-600 hover:underline">
              866.800.5457
            </a>
          </p>
          <p>
            <strong>Find Provider & Claim:</strong>{' '}
            <a href="https://eyemed.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              eyemed.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function RxSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Prescription Drug Coverage</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">CVS Caremark Pharmacy Benefits</h3>
        <p className="text-gray-700 mb-6">
          Cost-effective prescription drug coverage through CVS Caremark's four-tier formulary system. Use in-network pharmacies to minimize your out-of-pocket costs.
        </p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1B2F5C] text-white">
              <th className="border border-gray-300 px-4 py-3 text-left">Drug Tier</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Retail (30-Day)</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Mail Order (90-Day)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { tier: 'Tier 1: Generic Preferred', retail: '$10', mail: '$20' },
              { tier: 'Tier 2: Brand Preferred', retail: '$30', mail: '$60' },
              { tier: 'Tier 3: Brand Non-Preferred', retail: '$50', mail: '$100' },
              { tier: 'Tier 4: Specialty (Injectable, Infusion)', retail: '$75 + 25% coinsurance', mail: 'Not Available' },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.tier}</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.retail}</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.mail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-6">
        <h4 className="font-semibold text-gray-900 mb-3">Specialty Medications</h4>
        <p className="text-sm text-gray-700 mb-3">
          Specialty drugs (biologic injectable/infusion therapies) are covered at Tier 4 copay of $75 plus 25% coinsurance when filled at a specialty pharmacy network.
        </p>
        <p className="text-sm text-gray-700">
          Prior authorization may be required. Work with your doctor and pharmacist to identify lower-cost alternatives when available.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Mail Order Advantage</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>90-day supplies cost equivalent to two 30-day retail fills</li>
          <li>Convenient delivery to your home</li>
          <li>Automatic refill options available</li>
          <li>Perfect for maintenance medications</li>
        </ul>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>CVS Caremark Member Services:</strong>{' '}
            <a href="tel:833-290-5676" className="text-blue-600 hover:underline">
              833.290.5676
            </a>
          </p>
          <p>
            <strong>Plan Information & Prior Auth:</strong>{' '}
            <a href="https://caremarkrxplaninfo.com/RWJBH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              caremarkrxplaninfo.com/RWJBH
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function SpendingSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Spending Accounts</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">HSA vs FSA vs DCFSA</h3>
        <p className="text-gray-700 mb-6">
          Three account types help you save on healthcare and dependent care expenses with pre-tax dollars.
        </p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1B2F5C] text-white">
              <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
              <th className="border border-gray-300 px-4 py-3 text-center">HSA</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Health FSA</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Dependent Care FSA</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: 'Eligibility', hsa: 'Must be enrolled in HSA-compatible medical plan', fsa: 'Any medical plan', dcfsa: 'Any situation' },
              { feature: '2025 Contribution Limit', hsa: 'Individual: $4,300 / Family: $8,550', fsa: '$3,300', dcfsa: '$5,000' },
              { feature: 'Employer Match', hsa: 'Not applicable', fsa: 'Not applicable', dcfsa: 'Not applicable' },
              { feature: 'Account Ownership', hsa: 'You own it (portable)', fsa: 'Employer owns it', dcfsa: 'Employer owns it' },
              { feature: 'Unused Funds Rollover', hsa: 'Full rollover to next year', fsa: '$640 carryover (rest forfeited)', dcfsa: 'Forfeited (use-it-or-lose-it)' },
              { feature: 'Investment Options', hsa: 'Yes (interest/investment earnings)', fsa: 'No', dcfsa: 'No' },
              { feature: 'Withdrawal After Separation', hsa: 'Yes (portable)', fsa: 'Generally no', dcfsa: 'Terminates' },
              { feature: 'Eligible Expenses', hsa: 'Medical, dental, vision, Rx, and more', fsa: 'Medical, dental, vision, Rx expenses', dcfsa: 'Daycare, preschool, summer camp (under 13)' },
              { feature: 'Penalties for Non-Qualified Withdrawals', hsa: 'Taxable + 20% penalty (if not qualified)', fsa: 'N/A (forfeiture only)', dcfsa: 'N/A (forfeiture only)' },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">{row.feature}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.hsa}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.fsa}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.dcfsa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Which Account Should I Choose?</h4>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>
            <strong>HSA:</strong> Best if you're in an HSA-eligible plan. You get to keep the money, invest it, and use it for retirement healthcare expenses.
          </li>
          <li>
            <strong>Health FSA:</strong> Good for known upcoming medical expenses. Use it or lose it (with $640 carryover option).
          </li>
          <li>
            <strong>DCFSA:</strong> If you pay for dependent care (daycare, preschool, after-school programs), this provides tax savings on those expenses.
          </li>
        </ul>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Benefits Center (General):</strong>{' '}
            <a href="tel:844-690-0920" className="text-blue-600 hover:underline">
              844.690.0920
            </a>
          </p>
          <p>
            <strong>Fidelity HSA Administration:</strong>{' '}
            <a href="tel:800-513-5015" className="text-blue-600 hover:underline">
              800.513.5015
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function LifeDisabilitySection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Life & Disability Insurance</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Life Insurance</h3>
        <p className="text-gray-700 mb-6">
          Comprehensive life insurance coverage including basic life provided by the employer and supplemental options for additional protection.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Basic Life Insurance (Employer Paid)</h4>
          <p className="text-sm text-gray-700 mb-3">
            <strong>Coverage Amount:</strong> 2x annual salary (minimum $20,000; maximum $500,000)
          </p>
          <p className="text-sm text-gray-700">
            No employee contribution required. Coverage is automatic upon hire.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Supplemental Life Insurance Options</h4>
          <p className="text-gray-700 text-sm mb-4">
            Optional coverage available at affordable group rates. You pay the full premium through payroll deduction.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-left">Coverage Option</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Benefit Amount</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Approx. Cost (varies by age)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { option: 'Employee Supplemental', amount: '$10,000 - $500,000 (in increments)', cost: '$5 - $50+/month' },
                  { option: 'Spouse Supplemental', amount: '$5,000 - $250,000', cost: '$3 - $25+/month' },
                  { option: 'Child Supplemental', amount: '$5,000 - $25,000 per child', cost: '$2 - $8/month' },
                  { option: 'Accidental Death & Dismemberment (AD&D)', amount: 'Ranges from $25,000 - $500,000', cost: '$2 - $10/month' },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.option}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.amount}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Disability Insurance</h3>
        <p className="text-gray-700 mb-6">
          Short-term and long-term disability protection help replace income if you're unable to work due to illness or injury.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-300 rounded-lg p-6">
            <h5 className="font-semibold text-gray-900 mb-3">Short-Term Disability (STD)</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Waiting Period:</strong> 7 days</li>
              <li><strong>Benefit Duration:</strong> Up to 12 weeks</li>
              <li><strong>Benefit Amount:</strong> 60% of base salary</li>
              <li><strong>Cost:</strong> Employer paid (no employee cost)</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-6">
            <h5 className="font-semibold text-gray-900 mb-3">Long-Term Disability (LTD)</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Waiting Period (Elimination):</strong> 12 weeks</li>
              <li><strong>Benefit Duration:</strong> To age 65 (or 2-5 years for certain conditions)</li>
              <li><strong>Benefit Amount:</strong> 60% of base salary (max $10,000/month)</li>
              <li><strong>Cost:</strong> Employer paid (no employee cost)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Important Notes</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>Basic life and disability benefits are employer-paid with no employee cost or enrollment needed</li>
          <li>Supplemental life and AD&D are optional and require enrollment during open enrollment or qualifying life events</li>
          <li>All claims must be submitted to the insurance carrier within specified timeframes</li>
          <li>Disability benefits may be taxable depending on who paid the premium</li>
        </ul>
      </div>
    </div>
  );
}

function WellnessSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Wellbeing & EAP</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Employee Assistance Program (EAP)</h3>
        <p className="text-gray-700 mb-6">
          Confidential support for mental health, substance abuse, work-life balance, financial, and legal issues. Available 24/7/365.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">EAP Services Include</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Counseling sessions (typically 3-5 free sessions per issue per year)</li>
            <li>Crisis intervention and 24/7 hotline support</li>
            <li>Mental health and substance abuse referrals</li>
            <li>Work-life balance resources (childcare, eldercare, pet care assistance)</li>
            <li>Financial counseling and planning tools</li>
            <li>Legal consultation services</li>
            <li>Online resources and self-assessment tools</li>
          </ul>
          <p className="text-sm text-gray-700 mt-4">
            <strong>Access:</strong> Call <a href="tel:800-300-0628" className="text-blue-600 hover:underline">800.300.0628</a> or visit your company EAP website. All services are confidential.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Calm for Employees</h3>
        <p className="text-gray-700 mb-4">
          Free access to the Calm meditation and sleep app, featuring guided meditations, sleep stories, music, and more to reduce stress and improve wellbeing.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Access:</strong>{' '}
            <a href="https://calm.com/b2b/RWJBarnabasHealth/subscribe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              calm.com/b2b/RWJBarnabasHealth/subscribe
            </a>
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">BHealthy Wellness Program</h3>
        <p className="text-gray-700 mb-4">
          Comprehensive wellness initiatives promoting physical health, nutrition, mental wellbeing, and preventive care.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Program Components</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Virtual fitness classes and gym partnerships</li>
            <li>Wellness challenges and incentive programs</li>
            <li>Nutrition coaching and healthy eating resources</li>
            <li>Biometric screenings (blood pressure, cholesterol, BMI)</li>
            <li>Preventive care navigation and incentives for screenings</li>
            <li>Stress management workshops</li>
          </ul>
          <p className="text-sm text-gray-700 mt-4">
            <strong>Enrollment/Info:</strong>{' '}
            <a href="https://join.personifyhealth.com/bhealthy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              join.personifyhealth.com/bhealthy
            </a>{' '}
            or call <a href="tel:888-671-9395" className="text-blue-600 hover:underline">888.671.9395</a>
          </p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Behavioral Health Coverage</h4>
        <p className="text-gray-700 text-sm mb-4">
          Mental health and substance abuse treatment is covered under your medical plan with the same copays and benefits as other medical services. No separate deductible or limit applies.
        </p>
        <p className="text-gray-700 text-sm">
          <strong>In-Network Providers:</strong> Check your plan details for mental health copays and to find network therapists, psychiatrists, and counselors.
        </p>
      </div>
    </div>
  );
}

function RetirementSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Financial & Retirement</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">401(k) Retirement Plan</h3>
        <p className="text-gray-700 mb-6">
          A tax-advantaged retirement savings plan with employer matching to help you build long-term wealth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-300 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Eligibility & Enrollment</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Eligibility:</strong> Full-time employees; part-time after 12 months</li>
            <li><strong>Enroll:</strong> Within 30 days of hire (or during open enrollment)</li>
            <li><strong>Minimum:</strong> 1% of salary</li>
            <li><strong>Maximum (2025):</strong> $24,500 (or $30,500 if age 50+)</li>
          </ul>
        </div>

        <div className="border border-gray-300 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Employer Match</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Formula:</strong> 100% match on first 3% of salary, 50% match on next 2%</li>
            <li><strong>Maximum Annual Match:</strong> Up to 4% of salary</li>
            <li><strong>Example:</strong> Contribute 5%, receive ~4% match</li>
          </ul>
        </div>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1B2F5C] text-white">
              <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: 'Vesting Schedule', details: 'Immediate (your contributions and match vest right away)' },
              { feature: '401(k) Loan Provisions', details: 'Available (typically up to 50% of balance, max $50,000)' },
              { feature: 'Distribution at Separation', details: 'Can roll over to IRA or leave in plan (if vested)' },
              { feature: 'Plan Administrator', details: 'Fidelity — 800.513.5015' },
              { feature: 'Investment Options', details: 'Multiple funds (target-date, stock, bond, money market)' },
              { feature: 'Roth Option', details: 'Roth 401(k) contribution option available' },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">{row.feature}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Retirement Planning Tips</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>Contribute at least 3% to capture the full employer match (free money!)</li>
          <li>Consider increasing contributions by 1% each year when you get a raise</li>
          <li>If age 50+, take advantage of catch-up contributions ($8,500 extra for 2025)</li>
          <li>Review investment allocations annually; rebalance as needed</li>
          <li>Use Fidelity's retirement calculators and planning tools to stay on track</li>
        </ul>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Fidelity Retirement Services:</strong>{' '}
            <a href="tel:800-513-5015" className="text-blue-600 hover:underline">
              800.513.5015
            </a>
          </p>
          <p>
            <strong>NetBenefits Access:</strong>{' '}
            <a href="https://netbenefits.com/RWJBarnabasHealth" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              netbenefits.com/RWJBarnabasHealth
            </a>
          </p>
          <p>
            <strong>Benefits Center:</strong>{' '}
            <a href="tel:844-690-0920" className="text-blue-600 hover:underline">
              844.690.0920
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function PTOSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Paid Time Off</h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Vacation Days</h3>
        <p className="text-gray-700 mb-6">
          Vacation allowance increases with tenure, recognizing your commitment to RWJBarnabas Health.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1B2F5C] text-white">
                <th className="border border-gray-300 px-4 py-3 text-left">Years of Service</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Annual Vacation Days</th>
                <th className="border border-gray-300 px-4 py-3 text-center">Hours (assuming 8-hour days)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { years: 'New hires - Year 1', days: '15 days', hours: '120 hours' },
                { years: 'Years 2-4', days: '20 days', hours: '160 hours' },
                { years: 'Years 5-9', days: '25 days', hours: '200 hours' },
                { years: '10+ years', days: '30 days', hours: '240 hours' },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">{row.years}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-gray-700 font-semibold">{row.days}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Paid Holidays</h3>
        <p className="text-gray-700 mb-4">
          Nine paid holidays observed by RWJBarnabas Health:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
          {[
            'New Year\'s Day (January 1)',
            'Martin Luther King Jr. Day (3rd Monday in January)',
            'Presidents Day (3rd Monday in February)',
            'Memorial Day (Last Monday in May)',
            'Independence Day (July 4)',
            'Labor Day (1st Monday in September)',
            'Thanksgiving Day (4th Thursday in November)',
            'Thanksgiving Friday (Day after Thanksgiving)',
            'Christmas Day (December 25)',
          ].map((holiday, idx) => (
            <div key={idx} className="flex gap-2">
              <span className="text-[#CC1F34]">•</span>
              <span>{holiday}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Sick Leave</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Annual Sick Days:</strong> Up to 10 days per year</li>
            <li><strong>Use:</strong> Personal illness, medical appointments, family illness care</li>
            <li><strong>Documentation:</strong> Typically requires doctor's note if absence exceeds 3 consecutive days</li>
            <li><strong>Carryover:</strong> Unused sick days may carry over (subject to state/company policy)</li>
            <li><strong>Paid Out:</strong> Generally paid out upon separation (check company policy)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Parental Leave</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Birth Parent</h4>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>Paid Leave:</strong> Up to 12 weeks at 100% pay</li>
            <li><strong>Unpaid Leave:</strong> Additional unpaid FMLA-protected leave available</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mb-3">Non-Birth Parent</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Paid Leave:</strong> Up to 8 weeks at 100% pay</li>
            <li><strong>Unpaid Leave:</strong> Additional unpaid FMLA-protected leave available</li>
          </ul>

          <p className="text-sm text-gray-700 mt-4">
            <strong>Eligibility:</strong> Applies to all employees (biological, adoptive, foster parents). Must notify HR at least 30 days prior if possible.
          </p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">PTO Policy Notes</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>PTO requests should be submitted to your manager as far in advance as possible</li>
          <li>Unused vacation time that exceeds carryover limits may be forfeited (state law permitting)</li>
          <li>Time off is not paid out upon termination unless required by state law</li>
          <li>Sick leave and parental leave are separate from vacation time</li>
          <li>Contact HR with questions about specific leave policies or requests</li>
        </ul>
      </div>
    </div>
  );
}

function VoluntarySection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Voluntary Benefits</h2>
      <p className="text-gray-700 mb-6">
        Optional supplemental benefits available at group rates. You pay the full cost through payroll deduction.
      </p>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Pet Insurance</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Coverage:</strong> Veterinary expenses for accidents, illness, and wellness care</li>
            <li><strong>Eligible Pets:</strong> Dogs, cats, rabbits, birds, reptiles, and more</li>
            <li><strong>Deductibles:</strong> $0, $250, or $500 (your choice)</li>
            <li><strong>Reimbursement:</strong> 70%, 80%, or 90% (your choice)</li>
            <li><strong>Annual Limit:</strong> Unlimited or various annual caps available</li>
            <li><strong>Pre-existing Conditions:</strong> Generally excluded</li>
            <li><strong>Cost:</strong> Varies by pet age, type, and coverage level (est. $15-$60+/month)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Plan</h3>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Services:</strong> Will preparation, estate planning, document review, family law consultation</li>
            <li><strong>Phone Consultations:</strong> Unlimited legal advice</li>
            <li><strong>Document Preparation:</strong> Discounted or included rates for wills, powers of attorney, living wills</li>
            <li><strong>Representation:</strong> Discounted rates for attorney representation in covered matters</li>
            <li><strong>Cost:</strong> Low monthly premium (est. $5-$15/month)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Identity Theft Protection</h3>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Monitoring:</strong> 24/7 monitoring of credit files and dark web</li>
            <li><strong>Alerts:</strong> Real-time notification of suspicious activity</li>
            <li><strong>Recovery:</strong> Identity restoration support if theft occurs</li>
            <li><strong>Credit Monitoring:</strong> Three-bureau credit report monitoring</li>
            <li><strong>Family Coverage:</strong> Optional coverage for spouse and dependent children</li>
            <li><strong>Cost:</strong> Est. $60-$120/year for individual or family</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto & Home Insurance</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <p className="text-sm text-gray-700 mb-3">
            Discounted rates on auto, home, umbrella, and renters insurance through Aon. Access to group purchasing power can save 10-25% on premiums.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Coverage:</strong> Auto, home, renters, umbrella liability insurance</li>
            <li><strong>Access:</strong> Online quote and enrollment</li>
            <li><strong>Support:</strong> Dedicated customer service team</li>
            <li><strong>Discounts:</strong> Bundling, safety features, good driver discounts</li>
          </ul>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Enrollment Information</h4>
        <p className="text-sm text-gray-700 mb-4">
          Voluntary benefits are available during initial hire period and annual open enrollment. Some may also be available as qualifying life events.
        </p>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Aon (Auto/Home Insurance & Voluntary Benefits Portal):</strong>{' '}
            <a href="tel:844-428-6672" className="text-blue-600 hover:underline">
              844.428.6672
            </a>
          </p>
          <p>
            <strong>Aon Benefits Portal:</strong>{' '}
            <a href="https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1B2F5C]">Important Contacts</h2>
      <p className="text-gray-700 mb-6">
        Quick reference for all benefits carriers and administrative support. Save these numbers and links for easy access.
      </p>

      <div className="space-y-6">
        <div className="border-l-4 border-[#CC1F34] bg-blue-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Benefits Center (Primary Contact)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:844-690-0920" className="text-blue-600 hover:underline font-semibold">
                844.690.0920
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Portal:</strong>{' '}
              <a href="https://rwjbhbenefits.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                RWJBHBenefits.com
              </a>
            </p>
            <p className="text-gray-600 text-xs">Use for enrollment, plan questions, billing, and general support</p>
          </div>
        </div>

        <div className="border-l-4 border-[#0066CC] bg-blue-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Care Navigation</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:844-424-2628" className="text-blue-600 hover:underline font-semibold">
                844.424.2628
              </a>
            </p>
            <p className="text-gray-600 text-xs">Help finding doctors, scheduling appointments, managing healthcare</p>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Aetna (Medical & Behavioral Health)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:855-546-5415" className="text-blue-600 hover:underline font-semibold">
                855.546.5415
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Portal:</strong>{' '}
              <a href="https://aetnaresource.com/n/RWJBH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                aetnaresource.com/n/RWJBH
              </a>
            </p>
            <p className="text-gray-600 text-xs">Claims, provider search, plan documents, ID cards</p>
          </div>
        </div>

        <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Delta Dental (Dental)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:800-810-5234" className="text-blue-600 hover:underline font-semibold">
                800.810.5234
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Provider Search:</strong>{' '}
              <a href="https://deltadentalnj.com/RWJBH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                deltadentalnj.com/RWJBH
              </a>
            </p>
            <p className="text-gray-600 text-xs">Dental claims, provider network, benefits questions</p>
          </div>
        </div>

        <div className="border-l-4 border-yellow-600 bg-yellow-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">EyeMed (Vision)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:866-800-5457" className="text-blue-600 hover:underline font-semibold">
                866.800.5457
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Provider & Claim:</strong>{' '}
              <a href="https://eyemed.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                eyemed.com
              </a>
            </p>
            <p className="text-gray-600 text-xs">Vision benefits, provider network, claim status</p>
          </div>
        </div>

        <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">CVS Caremark (Prescription Drug)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:833-290-5676" className="text-blue-600 hover:underline font-semibold">
                833.290.5676
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Plan Info:</strong>{' '}
              <a href="https://caremarkrxplaninfo.com/RWJBH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                caremarkrxplaninfo.com/RWJBH
              </a>
            </p>
            <p className="text-gray-600 text-xs">Rx coverage, prior authorization, mail order pharmacy</p>
          </div>
        </div>

        <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Fidelity (401k & HSA)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:800-513-5015" className="text-blue-600 hover:underline font-semibold">
                800.513.5015
              </a>
            </p>
            <p className="text-gray-700">
              <strong>NetBenefits Access:</strong>{' '}
              <a href="https://netbenefits.com/RWJBarnabasHealth" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                netbenefits.com/RWJBarnabasHealth
              </a>
            </p>
            <p className="text-gray-600 text-xs">Retirement planning, HSA management, investment options</p>
          </div>
        </div>

        <div className="border-l-4 border-teal-600 bg-teal-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">EAP (Counseling & Support)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:800-300-0628" className="text-blue-600 hover:underline font-semibold">
                800.300.0628
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Portal:</strong>{' '}
              <a href="https://rwjbhtotalwellbeing.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                RWJBHTotalWellbeing.com
              </a>
            </p>
            <p className="text-gray-600 text-xs">24/7 crisis support, counseling, work-life resources. Confidential.</p>
          </div>
        </div>

        <div className="border-l-4 border-emerald-600 bg-emerald-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Personify Health (BHealthy Wellness)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:888-671-9395" className="text-blue-600 hover:underline font-semibold">
                888.671.9395
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Enrollment:</strong>{' '}
              <a href="https://join.personifyhealth.com/bhealthy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                join.personifyhealth.com/bhealthy
              </a>
            </p>
            <p className="text-gray-600 text-xs">Wellness programs, health coaching, fitness, preventive care</p>
          </div>
        </div>

        <div className="border-l-4 border-sky-600 bg-sky-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Calm (Mental Wellness App)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Access:</strong>{' '}
              <a href="https://calm.com/b2b/RWJBarnabasHealth/subscribe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                calm.com/b2b/RWJBarnabasHealth/subscribe
              </a>
            </p>
            <p className="text-gray-600 text-xs">Free meditation, sleep, and stress relief app for all employees</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-600 bg-amber-50 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Aon (Voluntary Benefits & Auto/Home Insurance)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:844-428-6672" className="text-blue-600 hover:underline font-semibold">
                844.428.6672
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Portal:</strong>{' '}
              <a href="https://mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                mybenefits.aon.com/Documents/RWJ-Barnabas/2025/Home
              </a>
            </p>
            <p className="text-gray-600 text-xs">Enrollment, quotes, and support for all voluntary benefits</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-6 mt-6 bg-gray-50 p-6 rounded">
        <h4 className="font-semibold text-gray-900 mb-3">Quick Tips</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>Save important phone numbers and bookmark key websites for quick reference</li>
          <li>Most carriers offer 24/7 member support via phone and online portals</li>
          <li>Use your Benefits Center as your first point of contact for general questions</li>
          <li>Detailed plan documents and ID cards are available on carrier websites</li>
          <li>Keep your beneficiary information updated in your HR system</li>
        </ul>
      </div>
    </div>
  );
}
