import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const aboutContent = {
  subtitle: "WHO WE ARE",
  title: "Empowering Startups to Achieve Greatness",
  description:
    "We are India's most comprehensive startup accelerator, offering end-to-end solutions from ideation to scale. Our expert team specializes in Product Development, Rigorous Testing, Strategic Team Building, MVP Launch, Digital Marketing Excellence, Brand Promotion, Investment Deck Creation, and Professional Pitch Training. We don't just support your startup—we become your strategic growth partner.",
  image:
    "https://cdn.dribbble.com/users/3577980/screenshots/12205878/media/cdf4d6523060a4f95061163760f928f5.jpg?resize=1200x900&vertical=center",
  stats: [
    { value: "500+", label: "Startups Launched", icon: "🚀", color: "blue" },
    // { value: "₹100Cr+", label: "Funding Secured", icon: "💰", color: "green" },
    { value: "95%", label: "Success Rate", icon: "📈", color: "purple" },
    { value: "24/7", label: "Expert Support", icon: "🎯", color: "orange" },
  ],
  features: [
    { icon: "✓", text: "Comprehensive product development" },
    { icon: "✓", text: "Strategic market positioning" },
    { icon: "✓", text: "Direct investor connections" },
    { icon: "✓", text: "Proven growth frameworks" },
  ],
};

const AboutSection = () => {
  const navigate = useNavigate();
  const { isLightMode } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const colorClasses = {
    blue: isLightMode ? "from-blue-500 to-blue-600" : "from-blue-400 to-blue-500",
    green: isLightMode ? "from-green-500 to-green-600" : "from-green-400 to-green-500",
    purple: isLightMode ? "from-purple-500 to-purple-600" : "from-purple-400 to-purple-500",
    orange: isLightMode ? "from-orange-500 to-orange-600" : "from-orange-400 to-orange-500",
  };

  return (
    <div
      className={`relative overflow-hidden ${
        isLightMode 
          ? "bg-gradient-to-b from-white via-gray-50 to-white" 
          : "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          isLightMode ? "bg-blue-400" : "bg-blue-600"
        }`} />
        <div className={`absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          isLightMode ? "bg-purple-400" : "bg-purple-600"
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right">
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className={`text-sm font-semibold tracking-wider ${
                isLightMode ? "text-blue-600" : "text-blue-400"
              }`}>
                {aboutContent.subtitle}
              </span>
            </div>

            {/* Title */}
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
              isLightMode 
                ? "bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent" 
                : "bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            }`}>
              {aboutContent.title}
            </h2>

            {/* Description */}
            <p className={`text-lg leading-relaxed ${
              isLightMode ? "text-gray-600" : "text-gray-400"
            }`}>
              {aboutContent.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutContent.features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isLightMode 
                      ? "bg-blue-50 hover:bg-blue-100" 
                      : "bg-gray-800/50 hover:bg-gray-800"
                  }`}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                    {feature.icon}
                  </span>
                  <span className={`text-sm font-medium ${
                    isLightMode ? "text-gray-700" : "text-gray-300"
                  }`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigate("/about")}
              className="group relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover Our Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {aboutContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden ${
                    isLightMode 
                      ? "bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl" 
                      : "bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
                  }`}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[stat.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 text-center space-y-2">
                    <div className="text-3xl mb-1">{stat.icon}</div>
                    <h4 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${colorClasses[stat.color]} bg-clip-text text-transparent`}>
                      {stat.value}
                    </h4>
                    <p className={`text-xs font-medium ${
                      isLightMode ? "text-gray-600" : "text-gray-400"
                    }`}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section with enhanced effects */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left">
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image container */}
              <div className="relative">
                <img
                  src={aboutContent.image}
                  alt="Team collaborating"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating badge */}
                <div className={`absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md border transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${
                  isLightMode 
                    ? "bg-white/90 border-white/20" 
                    : "bg-gray-900/90 border-gray-700/50"
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-10 h-10 rounded-full border-2 ${
                            isLightMode ? 'border-white bg-gradient-to-br from-blue-400 to-purple-400' : 'border-gray-900 bg-gradient-to-br from-blue-600 to-purple-600'
                          }`}
                        />
                      ))}
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${
                        isLightMode ? "text-gray-900" : "text-white"
                      }`}>
                        Join 500+ Successful Founders
                      </p>
                      <p className={`text-xs ${
                        isLightMode ? "text-gray-600" : "text-gray-400"
                      }`}>
                        Trusted startup ecosystem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative dots pattern */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full ${
                      isLightMode ? "bg-blue-600" : "bg-blue-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;