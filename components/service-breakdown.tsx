import React from 'react';
import { Zap, Target, Palette, BarChart3, Clock, Shield, Headphones, Repeat } from 'lucide-react';

const ServiceBreakdown = () => {
  const services = [
    {
      icon: Zap,
      title: 'AI-Powered Creation',
      description: 'Advanced AI algorithms create professional videos from your content brief in minutes, not weeks.',
      features: [
        'Natural language processing',
        'Automated scene generation',
        'Smart visual selection',
        'Dynamic text animations'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Every video is optimized for maximum engagement and guaranteed to reach 10,000+ views.',
      features: [
        'Platform-specific optimization',
        'Engagement-driven editing',
        'Viral content patterns',
        'A/B testing integration'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Seamlessly integrate your brand identity with custom colors, fonts, logos, and style guidelines.',
      features: [
        'Brand guideline integration',
        'Custom color palettes',
        'Logo and watermark placement',
        'Consistent visual identity'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive performance tracking with actionable insights to improve your video strategy.',
      features: [
        'Real-time view tracking',
        'Engagement analytics',
        'Audience demographics',
        'Performance recommendations'
      ],
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Brief Submission',
      description: 'Submit your content brief, target audience, and brand guidelines through our simple form.',
      icon: Clock
    },
    {
      step: '02',
      title: 'AI Generation',
      description: 'Our AI analyzes your brief and creates multiple video concepts optimized for engagement.',
      icon: Zap
    },
    {
      step: '03',
      title: 'Review & Refine',
      description: 'Review the generated videos and request unlimited revisions until you\'re completely satisfied.',
      icon: Repeat
    },
    {
      step: '04',
      title: 'Launch & Track',
      description: 'Launch your video and track its performance with our guarantee of 10,000+ views.',
      icon: Target
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: '10,000+ View Guarantee',
      description: 'If your video doesn\'t reach 10,000 views within 30 days, we\'ll refund your money or create a new video for free.'
    },
    {
      icon: Clock,
      title: '24-Hour Delivery',
      description: 'Get your professional AI video delivered within 24 hours of brief submission, guaranteed.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Your dedicated account manager ensures every video meets your exact specifications and brand standards.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Viral Video Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive AI video service includes everything you need to create, optimize, and track high-performing videos
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h3>
            <p className="text-lg text-gray-600">From brief to viral video in just 24 hours</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-4"></div>
                  )}
                  
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                      {step.step}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Iron-Clad Guarantees</h3>
            <p className="text-lg text-gray-600">We stand behind every video we create</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{guarantee.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;