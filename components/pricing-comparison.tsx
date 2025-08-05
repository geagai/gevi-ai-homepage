import React from 'react';
import { Check, X, Star, Zap, Crown, Shield } from 'lucide-react';

const PricingComparison = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$497',
      period: 'per video',
      description: 'Perfect for testing our service',
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      popular: false,
      features: [
        { name: '1 Professional AI Video', included: true },
        { name: '5,000+ View Guarantee', included: true },
        { name: '48-Hour Delivery', included: true },
        { name: 'Basic Branding', included: true },
        { name: '3 Revisions Included', included: true },
        { name: 'Email Support', included: true },
        { name: 'Multiple Video Formats', included: false },
        { name: 'Dedicated Account Manager', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Advanced Analytics', included: false },
        { name: 'Unlimited Revisions', included: false },
        { name: 'Rush Delivery (12 hours)', included: false }
      ],
      cta: 'Start with One Video',
      savings: null
    },
    {
      name: 'Professional',
      price: '$1,000',
      period: 'per month',
      description: 'Most popular choice for growing businesses',
      icon: Star,
      color: 'from-purple-500 to-pink-600',
      popular: true,
      features: [
        { name: 'Unlimited AI Videos', included: true },
        { name: '10,000+ View Guarantee', included: true },
        { name: '24-Hour Delivery', included: true },
        { name: 'Full Custom Branding', included: true },
        { name: 'Unlimited Revisions', included: true },
        { name: 'Priority Email & Chat Support', included: true },
        { name: 'Multiple Video Formats', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Rush Delivery (12 hours)', included: false },
        { name: 'White-label Options', included: false }
      ],
      cta: 'Start Creating Videos',
      savings: 'Save $4,970+ per month'
    },
    {
      name: 'Enterprise',
      price: '$2,500',
      period: 'per month',
      description: 'For large teams and agencies',
      icon: Crown,
      color: 'from-amber-500 to-orange-600',
      popular: false,
      features: [
        { name: 'Unlimited AI Videos', included: true },
        { name: '15,000+ View Guarantee', included: true },
        { name: '12-Hour Rush Delivery', included: true },
        { name: 'Full Custom Branding', included: true },
        { name: 'Unlimited Revisions', included: true },
        { name: '24/7 Phone & Chat Support', included: true },
        { name: 'Multiple Video Formats', included: true },
        { name: 'Dedicated Account Team', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Advanced Analytics & Reporting', included: true },
        { name: 'White-label Options', included: true },
        { name: 'API Access', included: true }
      ],
      cta: 'Contact Sales',
      savings: 'Save $12,470+ per month'
    }
  ];

  const comparisonData = [
    {
      category: 'Traditional Video Production',
      cost: '$15,000+',
      time: '2-4 weeks',
      guarantee: 'None',
      revisions: '$2,000+ each',
      scalability: 'Limited'
    },
    {
      category: 'Freelance Videographers',
      cost: '$3,000-8,000',
      time: '1-2 weeks',
      guarantee: 'None',
      revisions: '$500+ each',
      scalability: 'Poor'
    },
    {
      category: 'DIY Video Tools',
      cost: '$50-200/month',
      time: '10-20 hours',
      guarantee: 'None',
      revisions: 'Your time',
      scalability: 'Time-consuming'
    },
    {
      category: 'Gevi AI Professional',
      cost: '$1,000/month',
      time: '24 hours',
      guarantee: '10,000+ views',
      revisions: 'Unlimited',
      scalability: 'Unlimited'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Video Creation Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. All plans include our performance guarantee.
          </p>
          
          {/* Money Back Guarantee Badge */}
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            <Shield className="w-5 h-5 mr-2" />
            30-Day Money-Back Guarantee
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
                plan.popular ? 'border-purple-200 transform scale-105' : 'border-gray-100'
              } hover:shadow-2xl transition-all duration-300`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                
                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.color} text-white p-6 ${plan.popular ? 'pt-8' : ''}`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                  <p className="text-center text-white/90 mb-4">{plan.description}</p>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-1">{plan.price}</div>
                    <div className="text-white/80">{plan.period}</div>
                    {plan.savings && (
                      <div className="mt-2 text-sm bg-white/20 rounded-full px-3 py-1 inline-block">
                        {plan.savings}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
            <h3 className="text-2xl font-bold text-center">How We Compare to Alternatives</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Solution</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Cost</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Delivery Time</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">View Guarantee</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Revisions</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Scalability</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${
                    row.category === 'Gevi AI Professional' ? 'bg-green-50' : 'hover:bg-gray-50'
                  }`}>
                    <td className={`px-6 py-4 font-semibold ${
                      row.category === 'Gevi AI Professional' ? 'text-green-700' : 'text-gray-900'
                    }`}>
                      {row.category}
                      {row.category === 'Gevi AI Professional' && (
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          RECOMMENDED
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.cost}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.time}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.guarantee}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.revisions}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.scalability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What if I don't hit 10,000 views?</h4>
              <p className="text-gray-600">We'll either refund your money or create a new video for free. Your choice.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">How many videos can I create?</h4>
              <p className="text-gray-600">Professional and Enterprise plans include unlimited video creation.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom packages?</h4>
              <p className="text-gray-600">Yes, we can create custom packages for large teams and specific requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;