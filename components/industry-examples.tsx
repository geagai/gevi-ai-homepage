import React from 'react';
import { Play, TrendingUp, Users, Award, Building2, ShoppingBag, Stethoscope, GraduationCap, Briefcase, Home } from 'lucide-react';

const IndustryExamples = () => {
  const industries = [
    {
      icon: Building2,
      name: 'SaaS & Technology',
      description: 'Product demos, feature announcements, and customer testimonials that drive conversions.',
      examples: [
        {
          title: 'CloudTech Product Demo',
          views: '24,500',
          engagement: '12.3%',
          conversion: '8.7%',
          thumbnail: 'bg-gradient-to-br from-blue-500 to-cyan-600'
        },
        {
          title: 'AI Platform Launch',
          views: '18,200',
          engagement: '15.1%',
          conversion: '11.2%',
          thumbnail: 'bg-gradient-to-br from-purple-500 to-pink-600'
        }
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: ShoppingBag,
      name: 'E-commerce & Retail',
      description: 'Product showcases, brand stories, and promotional videos that boost sales.',
      examples: [
        {
          title: 'Fashion Brand Campaign',
          views: '31,800',
          engagement: '18.5%',
          conversion: '14.3%',
          thumbnail: 'bg-gradient-to-br from-pink-500 to-rose-600'
        },
        {
          title: 'Product Unboxing Series',
          views: '22,100',
          engagement: '16.7%',
          conversion: '9.8%',
          thumbnail: 'bg-gradient-to-br from-orange-500 to-red-600'
        }
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Stethoscope,
      name: 'Healthcare & Wellness',
      description: 'Educational content, service explanations, and patient testimonials.',
      examples: [
        {
          title: 'Wellness Program Intro',
          views: '19,400',
          engagement: '13.8%',
          conversion: '7.2%',
          thumbnail: 'bg-gradient-to-br from-green-500 to-emerald-600'
        },
        {
          title: 'Medical Device Demo',
          views: '16,700',
          engagement: '11.4%',
          conversion: '6.9%',
          thumbnail: 'bg-gradient-to-br from-teal-500 to-cyan-600'
        }
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: GraduationCap,
      name: 'Education & Training',
      description: 'Course previews, educational content, and student success stories.',
      examples: [
        {
          title: 'Online Course Trailer',
          views: '27,300',
          engagement: '20.2%',
          conversion: '13.5%',
          thumbnail: 'bg-gradient-to-br from-indigo-500 to-purple-600'
        },
        {
          title: 'Skills Training Program',
          views: '15,900',
          engagement: '14.6%',
          conversion: '10.1%',
          thumbnail: 'bg-gradient-to-br from-violet-500 to-purple-600'
        }
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      description: 'Service explanations, case studies, and client testimonials.',
      examples: [
        {
          title: 'Consulting Firm Overview',
          views: '14,200',
          engagement: '9.8%',
          conversion: '5.4%',
          thumbnail: 'bg-gradient-to-br from-gray-600 to-gray-800'
        },
        {
          title: 'Legal Services Explainer',
          views: '12,800',
          engagement: '8.3%',
          conversion: '4.7%',
          thumbnail: 'bg-gradient-to-br from-slate-600 to-gray-700'
        }
      ],
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Home,
      name: 'Real Estate',
      description: 'Property tours, market updates, and agent introductions.',
      examples: [
        {
          title: 'Luxury Home Tour',
          views: '35,600',
          engagement: '22.1%',
          conversion: '16.8%',
          thumbnail: 'bg-gradient-to-br from-amber-500 to-orange-600'
        },
        {
          title: 'Market Analysis Video',
          views: '18,900',
          engagement: '12.7%',
          conversion: '8.3%',
          thumbnail: 'bg-gradient-to-br from-yellow-500 to-amber-600'
        }
      ],
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const overallStats = {
    totalViews: '2.4M+',
    avgEngagement: '15.2%',
    avgConversion: '9.8%',
    clientSatisfaction: '98.5%'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proven Results Across
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how businesses in your industry are using our AI video service to drive engagement and conversions
          </p>
          
          {/* Overall Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-blue-600">{overallStats.totalViews}</div>
              <div className="text-sm text-gray-600">Total Views Generated</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">{overallStats.avgEngagement}</div>
              <div className="text-sm text-gray-600">Average Engagement</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-purple-600">{overallStats.avgConversion}</div>
              <div className="text-sm text-gray-600">Average Conversion</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-orange-600">{overallStats.clientSatisfaction}</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Industry Header */}
                <div className={`bg-gradient-to-r ${industry.color} text-white p-6`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{industry.name}</h3>
                    </div>
                  </div>
                  <p className="text-white/90">{industry.description}</p>
                </div>

                {/* Examples */}
                <div className="p-6 space-y-6">
                  {industry.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
                      <div className="flex">
                        {/* Video Thumbnail */}
                        <div className={`w-32 h-20 ${example.thumbnail} flex items-center justify-center flex-shrink-0`}>
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Play className="w-4 h-4 text-white ml-0.5" />
                          </div>
                        </div>
                        
                        {/* Video Info */}
                        <div className="flex-1 p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4 text-blue-500" />
                              <span className="text-gray-600">{example.views} views</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="text-gray-600">{example.engagement} engagement</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="w-4 h-4 text-purple-500" />
                              <span className="text-gray-600">{example.conversion} conversion</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="text-center pt-4">
                    <button className={`bg-gradient-to-r ${industry.color} text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                      View More Examples
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to See Results in Your Industry?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using our AI video service to drive engagement and conversions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Your First Video
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExamples;