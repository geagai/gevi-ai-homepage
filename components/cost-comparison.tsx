import React from 'react';
import { DollarSign, Clock, Users, TrendingUp, X, Check } from 'lucide-react';

const CostComparison = () => {
  const traditionalCosts = [
    { item: 'Video Production Team', cost: '$8,000-15,000', frequency: 'per video' },
    { item: 'Equipment & Studio Rental', cost: '$2,000-5,000', frequency: 'per video' },
    { item: 'Post-Production & Editing', cost: '$3,000-8,000', frequency: 'per video' },
    { item: 'Voice Talent & Actors', cost: '$1,500-4,000', frequency: 'per video' },
    { item: 'Revisions & Iterations', cost: '$2,000-6,000', frequency: 'per video' },
    { item: 'Project Management', cost: '$1,000-3,000', frequency: 'per video' }
  ];

  const geviFeatures = [
    { feature: 'Unlimited Video Creation', included: true },
    { feature: '10,000+ View Guarantee', included: true },
    { feature: 'Professional AI Voices', included: true },
    { feature: 'Custom Branding', included: true },
    { feature: 'Multiple Formats & Sizes', included: true },
    { feature: 'Dedicated Account Manager', included: true },
    { feature: 'Same-Day Turnaround', included: true },
    { feature: 'Unlimited Revisions', included: true }
  ];

  const totalTraditionalCost = traditionalCosts.reduce((sum, item) => {
    const cost = parseInt(item.cost.replace(/[^0-9]/g, '').split('-')[1] || item.cost.replace(/[^0-9]/g, ''));
    return sum + cost;
  }, 0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Stop Overpaying for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Traditional Video Production
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you could save by switching to our AI-powered video creation service
          </p>
        </div>

        {/* Main Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Traditional Approach */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-red-200">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Traditional Video Production</h3>
              <p className="text-red-100">The old, expensive way</p>
            </div>
            
            <div className="p-6 space-y-4">
              {traditionalCosts.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{item.item}</p>
                    <p className="text-sm text-gray-500">{item.frequency}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">{item.cost}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t-2 border-red-200">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">Total Cost Per Video:</p>
                  <p className="text-2xl font-bold text-red-600">${totalTraditionalCost.toLocaleString()}+</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Plus 2-4 weeks production time</p>
              </div>
            </div>

            {/* Pain Points */}
            <div className="bg-red-50 p-6 border-t">
              <h4 className="font-semibold text-gray-900 mb-3">Common Problems:</h4>
              <div className="space-y-2">
                {[
                  'Long production timelines',
                  'Expensive revisions',
                  'No performance guarantees',
                  'Limited scalability',
                  'High upfront costs'
                ].map((problem, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gevi AI Approach */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200 relative">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              MOST POPULAR
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 mt-3">
              <h3 className="text-2xl font-bold mb-2">Gevi AI Video Service</h3>
              <p className="text-green-100">The smart, affordable solution</p>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-green-600 mb-2">$1,000</div>
                <p className="text-gray-600">per month, unlimited videos</p>
                <div className="mt-4 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  10,000+ View Guarantee
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {geviFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature.feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">What You Get:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>24-hour delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span>Dedicated team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span>Performance tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Calculator */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Your Potential Savings</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">${(totalTraditionalCost - 1000).toLocaleString()}</div>
              <p className="text-blue-100">Saved per video</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{Math.round((totalTraditionalCost - 1000) / 1000 * 100)}%</div>
              <p className="text-blue-100">Cost reduction</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10x</div>
              <p className="text-blue-100">Faster delivery</p>
            </div>
          </div>
          <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Calculate Your Savings
          </button>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;