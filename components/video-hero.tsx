import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';

const VideoHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-2 text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">2,500+ Happy Clients</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Create Viral AI Videos
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  That Actually Convert
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Professional AI video creation service with a guaranteed 10,000+ views or your money back. 
                Transform your content strategy for just $1,000/month.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-green-400" />
                <span className="text-lg">10,000+ View Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <Play className="w-6 h-6 text-blue-400" />
                <span className="text-lg">Professional Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-purple-400" />
                <span className="text-lg">Dedicated Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-lg">Money-Back Promise</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Creating Videos
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                View Portfolio
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4">Trusted by leading brands:</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-lg font-semibold">TechCorp</div>
                <div className="text-lg font-semibold">StartupXYZ</div>
                <div className="text-lg font-semibold">MediaCo</div>
                <div className="text-lg font-semibold">BrandPlus</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white/90 font-medium">Watch Sample Video</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    <div>
                      <p className="font-semibold">AI Marketing Video</p>
                      <p className="text-sm text-gray-400">Created with Gevi AI</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-400">15.2K views</p>
                    <p className="text-sm text-gray-400">in 48 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">Average Performance</p>
              <p className="text-2xl font-bold text-green-600">12,500 views</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">Conversion Rate</p>
              <p className="text-2xl font-bold">8.3%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;