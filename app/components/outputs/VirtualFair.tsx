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
  { id: 'medicalPlans', label: 'Medical Plans', description: 'Aetna coverage options' },
  { id: 'dentalVision', label: 'Dental & Vision', description: 'Delta Dental + EyeMed' },
  { id: 'prescriptions', label: 'Prescriptions', description: 'CVS Caremark pharmacy' },
  { id: 'spendingAccounts', label: 'Spending Accounts', description: 'HSA • FSA • DCFSA' },
  { id: 'wellnessEap', label: 'Wellness & EAP', description: '24/7 Employee Assistance' },
  { id: 'financialRetirement', label: 'Financial & Retirement', description: 'Fidelity 401(k)' },
  { id: 'paidTimeOff', label: 'Paid Time Off', description: 'Vacation & Holidays' },
  { id: 'contacts', label: 'Contacts', description: 'All resources & support' },
];

export default function VirtualFair({ clientName = 'RWJBarnabas Health' }: VirtualFairProps) {
  const [activeTab, setActiveTab] = useState<Tab>('entrance');

  const handleBoothClick = (boothId: string) => {
    setActiveTab(boothId as Tab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Banner */}
      <div className="bg-[#1B2F5C] text-white py-6 border-b-4 border-[#CC1F34]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">{clientName}</h1>
          <p className="text-blue-100 mt-2">Virtual Benefits Fair 2026</p>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 bg-gray-100 border-b border-gray-300 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#CC1F34] text-[#1B2F5C] bg-white'
                    : 'border-transparent text-gray-700 hover:text-[#1B2F5C] hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto py-12">
          {/* Entrance Tab */}
          {activeTab === 'entrance' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1B2F5C] mb-4">Welcome to the Virtual Benefits Fair</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Explore our comprehensive benefits offerings designed for you and your family. Click "Exhibit Hall" to get started.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 border-l-4 border-[#1B2F5C] p-6">
                  <h3 className="font-bold text-[#1B2F5C] mb-2">Open Enrollment Period</h3>
                  <p className="text-gray-700">April 15 – May 15, 2026</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#1B2F5C] p-6">
                  <h3 className="font-bold text-[#1B2F5C] mb-2">Benefits Effective Date</h3>
                  <p className="text-gray-700">July 1, 2026</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#1B2F5C] p-6">
                  <h3 className="font-bold text-[#1B2F5C] mb-2">Questions?</h3>
                  <p className="text-gray-700">Visit Contacts for support info</p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setActiveTab('exhibitHall')}
                  className="bg-[#CC1F34] hover:bg-[#B01A2A] text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  Enter Exhibit Hall
                </button>
              </div>
            </div>
          )}

          {/* Exhibit Hall Tab */}
          {activeTab === 'exhibitHall' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-8">Exhibit Hall</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {BOOTHS.map((booth) => (
                  <button
                    key={booth.id}
                    onClick={() => handleBoothClick(booth.id)}
                    className="bg-white border-2 border-gray-200 hover:border-[#CC1F34] hover:shadow-lg rounded-lg p-6 text-left transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-[#1B2F5C] rounded-lg mb-4"></div>
                    <h3 className="font-bold text-[#1B2F5C] mb-2">{booth.label}</h3>
                    <p className="text-gray-600 text-sm">{booth.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Medical Plans Tab */}
          {activeTab === 'medicalPlans' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-2">Medical Plans</h2>
              <p className="text-gray-600 mb-8">Aetna Medical Coverage Options</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-4">Plan Comparison</h3>
                  <div className="space-y-4 text-sm">
                    <div className="border-t pt-3">
                      <h4 className="font-bold text-[#1B2F5C] mb-2">Bronze Plan</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>Deductible: $2,000 individual / $4,000 family</li>
                        <li>Out-of-Pocket Max: $7,000 / $14,000</li>
                        <li>Coinsurance: 20%</li>
                        <li>Preventive: No cost sharing</li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <h4 className="font-bold text-[#1B2F5C] mb-2">Silver Plan</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>Deductible: $1,500 individual / $3,000 family</li>
                        <li>Out-of-Pocket Max: $6,000 / $12,000</li>
                        <li>Coinsurance: 15%</li>
                        <li>Preventive: No cost sharing</li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <h4 className="font-bold text-[#1B2F5C] mb-2">Gold Plan</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>Deductible: $750 individual / $1,500 family</li>
                        <li>Out-of-Pocket Max: $5,000 / $10,000</li>
                        <li>Coinsurance: 10%</li>
                        <li>Preventive: No cost sharing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-300 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#1B2F5C] mb-4">Employee Contributions</h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-[#1B2F5C]">
                          <th className="text-left py-2">Plan</th>
                          <th className="text-left py-2">Employee</th>
                          <th className="text-left py-2">Employer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-3">Bronze</td>
                          <td>$120/month</td>
                          <td>$480/month</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3">Silver</td>
                          <td>$180/month</td>
                          <td>$620/month</td>
                        </tr>
                        <tr>
                          <td className="py-3">Gold</td>
                          <td>$280/month</td>
                          <td>$920/month</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#1B2F5C] mb-3">Aetna Carrier</h3>
                    <p className="text-gray-700 mb-4">Our medical plans are administered by Aetna, one of the nation's leading health insurers.</p>
                    <a
                      href="https://www.aetna.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CC1F34] hover:underline font-semibold inline-flex items-center gap-2"
                    >
                      <span style={{ marginRight: '4px' }}>→</span> Aetna Portal
                    </a>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#1B2F5C] mb-3">More Information</h3>
                    <button
                      onClick={() => {
                        // Trigger video library - in real app this would open Flimp library
                        alert('Flimp video library would open here');
                      }}
                      className="bg-[#1B2F5C] hover:bg-[#0F1A38] text-white font-semibold py-2 px-4 rounded transition-colors"
                    >
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dental & Vision Tab */}
          {activeTab === 'dentalVision' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-8">Dental & Vision Coverage</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-[#1B2F5C] mb-4">Delta Dental</h3>
                  <table className="w-full text-sm mb-6">
                    <thead>
                      <tr className="border-b-2 border-[#1B2F5C]">
                        <th className="text-left py-2">Service</th>
                        <th className="text-left py-2">Coverage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Preventive</td>
                        <td>100%</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Basic</td>
                        <td>80%</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Major</td>
                        <td>50%</td>
                      </tr>
                      <tr>
                        <td className="py-3">Orthodontics</td>
                        <td>50% (up to $1,500)</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Annual Maximum:</strong> $1,200 per person</p>
                    <p className="text-gray-700"><strong>Deductible:</strong> $50 individual / $150 family</p>
                  </div>
                  <a
                    href="https://www.deltadentalins.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CC1F34] hover:underline font-semibold mt-4 inline-flex items-center gap-2"
                  >
                    <span style={{ marginRight: '4px' }}>→</span> Delta Dental Portal
                  </a>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-[#1B2F5C] mb-4">EyeMed Vision</h3>
                  <table className="w-full text-sm mb-6">
                    <thead>
                      <tr className="border-b-2 border-[#1B2F5C]">
                        <th className="text-left py-2">Service</th>
                        <th className="text-left py-2">Benefit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Eye Exam</td>
                        <td>$10 copay</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Frames</td>
                        <td>$150 allowance</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Lenses</td>
                        <td>$100 allowance</td>
                      </tr>
                      <tr>
                        <td className="py-3">Contacts</td>
                        <td>$100 allowance</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Coverage Frequency:</strong> Once per calendar year</p>
                  </div>
                  <a
                    href="https://www.eyemed.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CC1F34] hover:underline font-semibold mt-4 inline-flex items-center gap-2"
                  >
                    <span style={{ marginRight: '4px' }}>→</span> EyeMed Portal
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Prescriptions Tab */}
          {activeTab === 'prescriptions' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-8">Prescription Benefits</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-[#1B2F5C] mb-6">CVS Caremark Formulary</h3>
                  <p className="text-gray-700 mb-6">
                    CVS Caremark administers our prescription drug plan, offering access to a comprehensive formulary of medications.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-[#1B2F5C]">
                        <th className="text-left py-2">Tier</th>
                        <th className="text-left py-2">Copay (30-day)</th>
                        <th className="text-left py-2">Copay (90-day)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Generic</td>
                        <td>$15</td>
                        <td>$35</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Preferred Brand</td>
                        <td>$35</td>
                        <td>$80</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">Non-Preferred Brand</td>
                        <td>$55</td>
                        <td>$125</td>
                      </tr>
                      <tr>
                        <td className="py-3">Specialty</td>
                        <td>20% coinsurance</td>
                        <td>20% coinsurance</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-gray-700 text-sm mt-6">
                    <strong>Note:</strong> Pharmacy copayments do not apply to preventive medications.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-lg font-bold text-[#1B2F5C] mb-6">Plan Highlights</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-[#CC1F34] font-bold">•</span>
                      <span>90-day supply available at retail and mail order pharmacies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#CC1F34] font-bold">•</span>
                      <span>Prior authorization may be required for certain medications</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#CC1F34] font-bold">•</span>
                      <span>Specialty medications available through CVS specialty pharmacy</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#CC1F34] font-bold">•</span>
                      <span>Annual deductible applies (varies by medical plan)</span>
                    </li>
                  </ul>
                  <a
                    href="https://www.cvscaremark.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CC1F34] hover:underline font-semibold mt-8 inline-flex items-center gap-2"
                  >
                    <span style={{ marginRight: '4px' }}>→</span> CVS Caremark Portal
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Spending Accounts Tab */}
          {activeTab === 'spendingAccounts' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-8">Flexible Spending Accounts</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-4">Health Savings Account (HSA)</h3>
                  <ul className="space-y-3 text-gray-700 text-sm mb-6">
                    <li><strong>2024 Limit:</strong> $4,150 individual / $8,300 family</li>
                    <li><strong>Catch-up:</strong> +$1,000 age 55+</li>
                    <li><strong>Employer Match:</strong> 50% up to limit</li>
                    <li><strong>Rollovers:</strong> Unused funds roll over annually</li>
                    <li><strong>Tax-Free:</strong> Withdrawals for qualified medical expenses</li>
                  </ul>
                  <a
                    href="https://www.fidelity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CC1F34] hover:underline font-semibold text-sm inline-flex items-center gap-2"
                  >
                    <span style={{ marginRight: '4px' }}>→</span> HSA Portal
                  </a>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-4">Flexible Spending Account (FSA)</h3>
                  <ul className="space-y-3 text-gray-700 text-sm mb-6">
                    <li><strong>2024 Limit:</strong> $3,300</li>
                    <li><strong>Eligible Expenses:</strong> Medical, dental, vision</li>
                    <li><strong>No Employer Match</strong></li>
                    <li><strong>Carryover:</strong> Up to $610 rolls to next year</li>
                    <li><strong>Tax-Free:</strong> Reduces taxable income</li>
                  </ul>
                  <a
                    href="https://www.fidelity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CC1F34] hover:underline font-semibold text-sm inline-flex items-center gap-2"
                  >
                    <span style={{ marginRight: '4px' }}>→</span> FSA Portal
                  </a>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-4">Dependent Care FSA (DCFSA)</h3>
                  <ul className="space-y-3 text-gray-700 text-sm mb-6">
                    <li><strong>2024 Limit:</strong> $5,000 (single) / $2,500 (married filing separately)</li>
                    <li><strong>Use:</strong> Childcare and adult dependent care</li>
                    <li><strong>No Employer Match</strong></li>
                    <li><strong>Use-It-Or-Lose-It:</strong> Unused funds forfeited</li>
                    <li><strong>Tax-Free:</strong> Saves 20-30% in taxes</li>
                  </ul>
                  <a
                    href="https://www.fidelity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CC1F34] hover:underline font-semibold text-sm inline-flex items-center gap-2"
                  >
                    <span style={{ marginRight: '4px' }}>→</span> DCFSA Portal
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#1B2F5C] p-6">
                <h3 className="font-bold text-[#1B2F5C] mb-3">Important Reminder</h3>
                <p className="text-gray-700">
                  These accounts have tax advantages, but funds must be used for qualified expenses. Review IRS regulations for eligible expense categories.
                </p>
              </div>
            </div>
          )}

          {/* Wellness & EAP Tab */}
          {activeTab === 'wellnessEap' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-8">Wellness & Employee Assistance Program</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-[#1B2F5C] mb-4">Employee Assistance Program (EAP)</h3>
                  <p className="text-gray-700 mb-4">
                    Available 24/7/365 for confidential counseling and support services.
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex gap-3">
                      <span className="text-[#CC1F34] font-bold">•</span>
                      <span>Unlimited counseling sessions (up to 12 per year per issue)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#CC1F34] font-bold">•</span>
                      <span>Mental health & counseling support</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#CC1F34] font-bold">•</span>
                      <span>Financial and legal consultation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#CC1F34] font-bold">•</span>
                      <span>Completely confidential and at no cost to you</span>
                    </li>
                  </ul>
                  <a
                    href="tel:1-800-555-0123"
                    className="text-[#CC1F34] hover:underline font-semibold inline-flex items-center gap-2"
                  >
                    <span style={{ marginRight: '4px' }}>ph:</span> 1-800-555-0123
                  </a>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-300 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#1B2F5C] mb-3">Calm – Meditation & Sleep</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Premium access to meditation, sleep stories, and mindfulness exercises.
                    </p>
                    <a
                      href="https://www.calm.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CC1F34] hover:underline font-semibold text-sm inline-flex items-center gap-2"
                    >
                      <span style={{ marginRight: '4px' }}>→</span> Access Calm
                    </a>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#1B2F5C] mb-3">Personify Health – Nutrition</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Personalized nutrition and wellness coaching with registered dietitians.
                    </p>
                    <a
                      href="https://www.personifyhealth.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CC1F34] hover:underline font-semibold text-sm inline-flex items-center gap-2"
                    >
                      <span style={{ marginRight: '4px' }}>→</span> Access Program
                    </a>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#1B2F5C] mb-3">Behavioral Health</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Therapy and counseling through your medical plan with Aetna.
                    </p>
                    <a
                      href="tel:1-800-555-0124"
                      className="text-[#CC1F34] hover:underline font-semibold text-sm inline-flex items-center gap-2"
                    >
                      <span style={{ marginRight: '4px' }}>ph:</span> 1-800-555-0124
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Financial & Retirement Tab */}
          {activeTab === 'financialRetirement' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-8">Financial & Retirement Planning</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-[#1B2F5C] mb-6">401(k) Retirement Plan</h3>
                  <p className="text-gray-700 mb-6">
                    Fidelity administers our 401(k) plan, providing comprehensive retirement savings options.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="border-b pb-4">
                      <p className="text-gray-700"><strong>Plan Highlights:</strong></p>
                      <ul className="text-sm text-gray-700 mt-2 space-y-2">
                        <li>• 2024 contribution limit: $23,500</li>
                        <li>• Catch-up contribution (age 50+): $7,500</li>
                        <li>• Roth 401(k) option available</li>
                        <li>• Employer match: 100% up to 3%, 50% from 3-5%</li>
                        <li>• Immediate eligibility</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-700"><strong>Investment Options:</strong></p>
                      <ul className="text-sm text-gray-700 mt-2 space-y-2">
                        <li>• Target-date funds</li>
                        <li>• Index funds</li>
                        <li>• Actively managed funds</li>
                        <li>• Self-directed brokerage</li>
                      </ul>
                    </div>
                  </div>
                  <a
                    href="https://www.fidelity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CC1F34] hover:underline font-semibold inline-flex items-center gap-2"
                  >
                    <span style={{ marginRight: '4px' }}>→</span> Fidelity 401(k) Portal
                  </a>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-[#1B2F5C] mb-6">Employer Match Details</h3>
                  <table className="w-full mb-6">
                    <thead>
                      <tr className="border-b-2 border-[#1B2F5C]">
                        <th className="text-left py-2">Your Contribution</th>
                        <th className="text-left py-2">Employer Match</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">1% of salary</td>
                        <td>1% of salary</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">2% of salary</td>
                        <td>2% of salary</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">3% of salary</td>
                        <td>3% of salary (100%)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">4% of salary</td>
                        <td>3.5% of salary (50%)</td>
                      </tr>
                      <tr>
                        <td className="py-3">5%+ of salary</td>
                        <td>4% of salary (50%)</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-yellow-50 border-l-4 border-[#CC1F34] p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Vesting:</strong> Employer contributions vest immediately. You own 100% of your money from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Paid Time Off Tab */}
          {activeTab === 'paidTimeOff' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-8">Paid Time Off</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-[#1B2F5C] mb-6">Vacation & PTO</h3>
                  <table className="w-full mb-6">
                    <thead>
                      <tr className="border-b-2 border-[#1B2F5C]">
                        <th className="text-left py-2">Years of Service</th>
                        <th className="text-left py-2">Days Per Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">0–2 years</td>
                        <td>15 days</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">3–5 years</td>
                        <td>18 days</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3">6–10 years</td>
                        <td>22 days</td>
                      </tr>
                      <tr>
                        <td className="py-3">10+ years</td>
                        <td>25 days</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> Vacation days do not roll over. Unused days are forfeited at year-end.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-300 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-[#1B2F5C] mb-4">Holidays</h3>
                    <p className="text-gray-700 mb-4">
                      All employees observe the following company-recognized holidays:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• New Year's Day</li>
                      <li>• MLK Jr. Day</li>
                      <li>• Presidents' Day</li>
                      <li>• Memorial Day</li>
                      <li>• Independence Day</li>
                      <li>• Labor Day</li>
                      <li>• Thanksgiving</li>
                      <li>• Day After Thanksgiving</li>
                      <li>• Christmas Eve</li>
                      <li>• Christmas Day</li>
                    </ul>
                    <p className="text-gray-700 text-sm mt-4">
                      <strong>Total:</strong> 10 paid holidays per year
                    </p>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-[#1B2F5C] mb-4">Parental Leave</h3>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex gap-3">
                        <span className="text-[#CC1F34] font-bold">•</span>
                        <span><strong>Birth Parent:</strong> 12 weeks paid</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#CC1F34] font-bold">•</span>
                        <span><strong>Non-Birth Parent:</strong> 4 weeks paid</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#CC1F34] font-bold">•</span>
                        <span><strong>Adoption:</strong> 4 weeks paid</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#CC1F34] font-bold">•</span>
                        <span><strong>Job Protection:</strong> FMLA compliant</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div>
              <h2 className="text-3xl font-bold text-[#1B2F5C] mb-8">Benefits Support & Contacts</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Medical */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1B2F5C] rounded-full"></div>
                    Medical Plan (Aetna)
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:1-800-555-0100" className="text-[#CC1F34] hover:underline">
                        1-800-555-0100
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <a
                        href="https://www.aetna.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CC1F34] hover:underline"
                      >
                        www.aetna.com
                      </a>
                    </p>
                    <p>
                      <strong>Customer Service:</strong> Available 24/7
                    </p>
                  </div>
                </div>

                {/* Dental */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1B2F5C] rounded-full"></div>
                    Dental (Delta Dental)
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:1-800-555-0101" className="text-[#CC1F34] hover:underline">
                        1-800-555-0101
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <a
                        href="https://www.deltadentalins.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CC1F34] hover:underline"
                      >
                        www.deltadentalins.com
                      </a>
                    </p>
                    <p>
                      <strong>Find a Provider:</strong> Available on website
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1B2F5C] rounded-full"></div>
                    Vision (EyeMed)
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:1-800-555-0102" className="text-[#CC1F34] hover:underline">
                        1-800-555-0102
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <a
                        href="https://www.eyemed.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CC1F34] hover:underline"
                      >
                        www.eyemed.com
                      </a>
                    </p>
                    <p>
                      <strong>Provider Network:</strong> Nationwide coverage
                    </p>
                  </div>
                </div>

                {/* Pharmacy */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1B2F5C] rounded-full"></div>
                    Pharmacy (CVS Caremark)
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:1-800-555-0103" className="text-[#CC1F34] hover:underline">
                        1-800-555-0103
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <a
                        href="https://www.cvscaremark.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CC1F34] hover:underline"
                      >
                        www.cvscaremark.com
                      </a>
                    </p>
                    <p>
                      <strong>Mail Order:</strong> 90-day supplies available
                    </p>
                  </div>
                </div>

                {/* 401k */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1B2F5C] rounded-full"></div>
                    401(k) (Fidelity)
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:1-800-555-0104" className="text-[#CC1F34] hover:underline">
                        1-800-555-0104
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <a
                        href="https://www.fidelity.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CC1F34] hover:underline"
                      >
                        www.fidelity.com
                      </a>
                    </p>
                    <p>
                      <strong>HSA & FSA:</strong> Also managed by Fidelity
                    </p>
                  </div>
                </div>

                {/* EAP */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1B2F5C] rounded-full"></div>
                    Employee Assistance Program
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:1-800-555-0123" className="text-[#CC1F34] hover:underline">
                        1-800-555-0123
                      </a>
                    </p>
                    <p>
                      <strong>Available:</strong> 24/7/365
                    </p>
                    <p>
                      <strong>Services:</strong> Counseling, financial, legal, wellness
                    </p>
                  </div>
                </div>

                {/* HR Department */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1B2F5C] rounded-full"></div>
                    Human Resources
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:1-800-555-0200" className="text-[#CC1F34] hover:underline">
                        1-800-555-0200
                      </a>
                    </p>
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:benefits@rwjbh.org" className="text-[#CC1F34] hover:underline">
                        benefits@rwjbh.org
                      </a>
                    </p>
                    <p>
                      <strong>Hours:</strong> Monday–Friday, 8 AM–5 PM EST
                    </p>
                  </div>
                </div>

                {/* Wellness Programs */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-[#1B2F5C] mb-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1B2F5C] rounded-full"></div>
                    Wellness & Mental Health
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Calm App:</strong>{' '}
                      <a
                        href="https://www.calm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CC1F34] hover:underline"
                      >
                        www.calm.com
                      </a>
                    </p>
                    <p>
                      <strong>Personify Health:</strong>{' '}
                      <a
                        href="https://www.personifyhealth.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CC1F34] hover:underline"
                      >
                        www.personifyhealth.com
                      </a>
                    </p>
                    <p>
                      <strong>Behavioral Health:</strong>{' '}
                      <a href="tel:1-800-555-0124" className="text-[#CC1F34] hover:underline">
                        1-800-555-0124
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 py-8">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">
            Questions? Contact Human Resources at{' '}
            <a href="tel:1-800-555-0200" className="text-[#CC1F34] hover:underline">
              1-800-555-0200
            </a>
            {' '}or{' '}
            <a href="mailto:benefits@rwjbh.org" className="text-[#CC1F34] hover:underline">
              benefits@rwjbh.org
            </a>
          </p>
          <p className="text-xs">
            This benefits information is provided for reference only. Please consult carrier materials and plan documents for complete coverage details.
          </p>
        </div>
      </footer>
    </div>
  );
}
