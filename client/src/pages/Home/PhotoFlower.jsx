import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";
import { Award, Target, TrendingUp, Zap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../context/ThemeContext";

const PhotoFlower = () => {
  const { isLightMode } = useTheme();
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      position: "rounded-br-[50%]",
      delay: 0.1
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      position: "rounded-tr-[50%]",
      delay: 0.2
    },
    {
      url: "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      position: "rounded-bl-[50%]",
      delay: 0.3
    },
    {
      url: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      position: "rounded-tl-[50%]",
      delay: 0.4
    }
  ];

  const features = [
    {
      icon: <Award className="w-5 h-5" />,
      text: "Award-Winning Project Management",
      color: "blue"
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Full-Service Digital Experience",
      color: "purple"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Proven ROI & Growth Results",
      color: "green"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Lightning-Fast Delivery",
      color: "orange"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className={`relative overflow-hidden ${
      isLightMode
        ? "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        : "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    }`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl ${
            isLightMode ? "bg-blue-400" : "bg-blue-600"
          }`} 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className={`absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl ${
            isLightMode ? "bg-purple-400" : "bg-purple-600"
          }`} 
        />
      </div>

      <section className="relative z-10 px-5 w-10/12 mx-auto lg:px-20 py-16 lg:py-20 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center justify-center">
        
        {/* Image Grid Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 w-fit gap-3 lg:gap-5"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: image.delay
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: hoveredImage === index ? 2 : 0
              }}
              onHoverStart={() => setHoveredImage(index)}
              onHoverEnd={() => setHoveredImage(null)}
              className="relative group cursor-pointer"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500 ${image.position}`} />
              
              {/* Image */}
              <div
                className={`relative bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 ${image.position} overflow-hidden border-2 ${
                  isLightMode ? "border-white" : "border-gray-800"
                } shadow-xl`}
                style={{ backgroundImage: `url(${image.url})` }}
              >
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>

              {/* Floating badge */}
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className={`absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    isLightMode 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  } shadow-lg`}
                >
                  Featured
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-[550px] space-y-6 mb-5 lg:mb-0"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className={`text-sm font-semibold tracking-wider ${
              isLightMode ? "text-blue-600" : "text-blue-400"
            }`}>
              PREMIUM QUALITY SERVICE
            </span>
          </motion.div>

          {/* Title */}
          <h1 className={`text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight ${
            isLightMode ? "text-gray-900" : "text-white"
          }`}>
            We{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Deliver Excellence
            </span>{" "}
            That Drives{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Results
            </span>
          </h1>

          {/* Description */}
          <div className="space-y-4">
            <p className={`text-lg leading-relaxed ${
              isLightMode ? "text-gray-700" : "text-gray-300"
            }`}>
              We design and develop mobile-first, responsive websites that deliver exceptional user experiences across all devices. Our solutions combine cutting-edge technology with strategic thinking to maximize your ROI and drive sustainable growth.
            </p>
            <p className={`text-base leading-relaxed ${
              isLightMode ? "text-gray-600" : "text-gray-400"
            }`}>
              Our proven project managers ensure hyper-organized execution, meeting clear expectations on time, every time. We deliver a powerful combination of web design, development, brand strategy, and digital marketing excellence.
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className={`group flex items-center gap-3 p-3 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                  isLightMode 
                    ? "bg-white/50 border-gray-200 hover:border-blue-300 hover:shadow-md" 
                    : "bg-gray-800/30 border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                  isLightMode 
                    ? "bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600" 
                    : "bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-400"
                } group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <span className={`text-sm font-medium ${
                  isLightMode ? "text-gray-700" : "text-gray-300"
                }`}>
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          
        </motion.section>
      </section>
    </div>
  );
};

export default PhotoFlower;