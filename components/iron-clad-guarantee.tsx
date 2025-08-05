import React from 'react';
import { Shield, TrendingUp, Clock, RefreshCw, Award, CheckCircle, Users, DollarSign } from 'lucide-react';

const IronCladGuarantee = () => {
  const guaranteeFeatures = [
    {
      icon: TrendingUp,
      title: '10,000+ Views Guaranteed',
      description: 'Every video we create is guaranteed to reach at least 10,000 views within 30 days of publication.',
      details: [
        'Tracked across all major platforms',
        'Organic reach optimization',
        'Performance monitoring included',
        'Full refund if target not met'
      ]
    },
    {
      icon: Clock,
      title: '24-Hour Delivery Promise',
      description: 'Your professional AI video will be delivered within 24 hours of brief submission, every time.',
      details: [
        'Rush delivery available',
        'Real-time progress updates',
        'Dedicated project manager',
        'No delays, no excuses'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Unlimited Revisions',
      description: 'Make as many changes as you need until the video perfectly matches your vision.',
      details: [
        'No revision limits',
        'Same-day revision turnaround',
        'Direct feedback system',
        'Version control included'
      ]
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every video meets our strict quality standards and your brand guidelines.',
      details: [
        'Multi-point quality checks',
        'Brand compliance verification',
        'Technical quality assurance',
        'Client approval required'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      quote: 'Our first video hit 15,000 views in just 2 weeks. The guarantee gave us confidence to try the service, and the results exceeded our expectations.',
      avatar: 'bg-gradient-to-br from-blue-400 to-purple-500'
    },
    {
      name: 'Michael Rodriguez',
      company: 'GrowthCorp',
      role: 'CEO',
      quote: 'The 24-hour delivery promise seemed too good to be true, but they delivered exactly on time with a video that generated 22,000 views.',
      avatar: 'bg-gradient-to-br from-green-400 to-teal-500'
    },
    {
      name: 'Emily Watson',
      company: 'BrandBoost',
      role: 'Creative Director',
      quote: 'We made 8 revisions on our first video, and they handled each one professionally. The final result was exactly what we envisioned.',
      avatar: 'bg-gradient-to-br from-pink-400 to-rose-500'
    }
  ];

  const stats = [
    { number: '98.7%', label: 'Videos Hit View Target', icon: TrendingUp },
    { number: '100%', label: 'On-Time Delivery Rate', icon: Clock },
    { number: '4.9/5', label: 'Client Satisfaction', icon: Award },
    { number: '$0', label: 'Hidden Fees', icon: DollarSign }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Iron-Clad
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Performance Guarantee
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're so confident in our AI video service that we guarantee results. If we don't deliver, you don't pay.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
                <IconComponent className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {guaranteeFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-blue-100 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-blue-200">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">How Our Guarantee Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">We Create Your Video</h4>
              <p className="text-blue-200">Our AI creates your professional video according to your brief and brand guidelines.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">We Track Performance</h4>
              <p className="text-blue-200">We monitor your video's performance across all platforms for 30 days after publication.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">We Guarantee Results</h4>
              <p className="text-blue-200">If your video doesn't hit 10,000+ views, we refund your money or create a new video free.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${testimonial.avatar} rounded-full flex items-center justify-center mr-4`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-blue-200">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-blue-100 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-green-400/30">
          <Shield className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Risk-Free Video Creation</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start creating viral videos today with zero risk. Our guarantee ensures you get results or your money back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Risk-Free Trial
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10">
              Read Full Guarantee
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IronCladGuarantee;