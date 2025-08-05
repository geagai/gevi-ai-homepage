import React from 'react';
import { ArrowRight, Play, Star, Users, Clock, Shield, Zap, TrendingUp } from 'lucide-react';

const CallToAction = () => {
  const urgencyFeatures = [
    {
      icon: Clock,
      text: '24-hour delivery guaranteed'
    },
    {
      icon: TrendingUp,
      text: '10,000+ view guarantee'
    },
    {
      icon: Shield,
      text: '30-day money-back promise'
    },
    {
      icon: Zap,
      text: 'Unlimited revisions included'
    }
  ];

  const socialProof = [
    {
      metric: '2,500+',
      label: 'Videos Created'
    },
    {
      metric: '98.7%',
      label: 'Success Rate'
    },
    {
      metric: '4.9/5',
      label: 'Client Rating'
    },
    {
      metric: '24hrs',
      label: 'Avg. Delivery'
    }
  ];

  const testimonialQuotes = [
    {
      quote: "Our video hit 25K views in the first week!",
      author: "Sarah M., Marketing Director"
    },
    {
      quote: "Best investment we've made for our content strategy.",
      author: "Mike R., CEO"
    },
    {
      quote: "The quality exceeded our expectations completely.",
      author: "Lisa K., Brand Manager"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          {/* Urgency Badge */}
          <div className="inline-flex items-center bg-red-500/20 border border-red-400/30 text-red-300 px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            Limited Time: 50% Off First Month
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Create Videos That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Actually Go Viral?
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join 2,500+ businesses already using our AI video service to generate millions of views and drive real results.
          </p>

          {/* Social Proof Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {socialProof.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">{item.metric}</div>
                <div className="text-sm text-blue-200">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center">
              Start Creating Videos Now
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:bg-white/10 flex items-center justify-center">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Demo Video
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {urgencyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <IconComponent className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">What Our Clients Are Saying</h3>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-3 text-lg font-semibold">4.9/5 Average Rating</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonialQuotes.map((testimonial, index) => (
              <div key={index} className="text-center">
                <p className="text-lg italic text-blue-100 mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-blue-300 font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk-Free Guarantee */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-green-400/30 text-center">
          <Shield className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">100% Risk-Free Guarantee</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If your video doesn't reach 10,000+ views within 30 days, we'll refund every penny or create a new video for free. No questions asked.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Claim Your Risk-Free Video
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10">
              Read Full Guarantee
            </button>
          </div>
        </div>

        {/* Final Urgency Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-400/30 text-orange-300 px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Users className="w-5 h-5 mr-2" />
            Join 2,500+ Happy Clients Today
          </div>
          
          <p className="text-lg text-blue-200 mb-8">
            Don't let your competitors get ahead. Start creating viral videos that actually convert.
          </p>
          
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-12 py-6 rounded-xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse">
            Get Started Now - 50% Off
          </button>
          
          <p className="text-sm text-blue-300 mt-4">
            * Limited time offer. Regular price $1,000/month. No setup fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;