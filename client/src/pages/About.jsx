import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../store/appSlice";
import Stats from "./Stats";
import TechSysOffices from "./TechSysOffices ";
import { useTheme } from "../context/ThemeContext";
import ReactSEO from "../components/ReactSEO";
import { motion } from "framer-motion";
import { Award, Target, Users, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const About = () => {
  const dispatch = useDispatch();
  const { accessibility } = useSelector((store) => store.app);
  const { isLightMode } = useTheme();
  
  const seoProps = {
    url: "https://adiya-business-solution-main.vercel.app",
    title: "About us",
    description:
      "Welcome to ADIYA Business Solution, your trusted partner for CRM, Website Development, and App Development.",
    thumbnail: "https://yourwebsite.com/thumbnail.jpg",
    themeColor: "#ffffff",
    canonicalUrl: `https://adiyabusinesssolution.com ${location.pathname}`,
    keywords: "business solutions, CRM, website development, app development",
    twitterUsername: "@adiyabusiness",
  };

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering superior quality in every solution we create"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering cutting-edge technologies for tomorrow's challenges"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships through trust and collaboration"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Empowering businesses to scale and succeed sustainably"
    }
  ];

  return (
    <div className={`${isLightMode ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
      <ReactSEO {...seoProps} />
      
      {/* Hero Section */}
      <div className={`w-full ${isLightMode ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50' : 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800'}`}>
        <div className="w-full md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="lg:flex lg:items-center lg:justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 flex flex-col justify-center mb-10 lg:mb-0"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className={`w-5 h-5 ${isLightMode ? 'text-blue-600' : 'text-blue-400'}`} />
                <span className={`text-sm font-semibold uppercase tracking-wider ${isLightMode ? "text-blue-600" : "text-blue-400"}`}>
                  Excellence • Innovation • Growth
                </span>
              </motion.div>
              
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${isLightMode ? "text-gray-900" : "text-gray-100"}`}>
                Transforming{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Business
                </span>
                <br />Through Technology
              </h1>
              
              <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${isLightMode ? "text-blue-600" : "text-blue-400"}`}>
                Adiya Business Solution
              </h2>
              
              <p className={`text-lg sm:text-xl leading-relaxed mb-8 ${isLightMode ? "text-gray-700" : "text-gray-300"}`}>
                Empowering businesses with innovative technology solutions that drive growth, enhance efficiency, and deliver measurable results. Your success is our mission.
              </p>

              <motion.button
                onClick={() => dispatch(setIsOpenRequestProposal(true))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all ${
                  isLightMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200"
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900"
                }`}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className={`absolute inset-0 ${isLightMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-3xl transform rotate-3`}></div>
                <img
                  src="https://cdn.dribbble.com/userupload/6884099/file/original-8ae2dcc557cc306ae2904c527e50ffe6.jpg?resize=1504x846&vertical=center"
                  alt="Professional team collaboration"
                  className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Image Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <img
          src="https://shechain.co/wp-content/uploads/2022/04/shechain.co_photos-1900-x-780-px-faq-1.png"
          alt="Team celebrating success"
          className="w-full h-48 sm:h-72 md:h-96 object-cover rounded-3xl shadow-2xl"
        />
      </motion.div>

      {/* Our Values Section */}
      <div className={`py-20 ${isLightMode ? 'bg-gradient-to-br from-slate-50 to-blue-50' : 'bg-gray-800'}`}>
        <div className="w-full md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isLightMode ? "text-gray-900" : "text-white"}`}>
              Our Core Values
            </h2>
            <p className={`text-xl ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`p-6 rounded-2xl ${
                    isLightMode 
                      ? 'bg-white border-2 border-blue-100 hover:border-blue-300' 
                      : 'bg-gray-900 border-2 border-gray-700 hover:border-blue-600'
                  } shadow-lg transition-all`}
                >
                  <div className={`w-14 h-14 rounded-xl ${isLightMode ? 'bg-blue-100' : 'bg-blue-900'} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${isLightMode ? 'text-blue-600' : 'text-blue-400'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                    {value.title}
                  </h3>
                  <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services & Story Section */}
      <main className={`py-20 ${isLightMode ? "bg-white" : "bg-gray-900"}`}>
        <section className="space-y-20">
          <div className="container mx-auto px-4 w-full md:w-10/12">
            {/* Services Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12 mb-20"
            >
              <div className="md:w-1/2">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                  isLightMode ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-300'
                }`}>
                  What We Offer
                </div>
                
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isLightMode ? "text-gray-900" : "text-white"}`}>
                  Comprehensive{" "}
                  <span className={`${isLightMode ? "text-blue-600" : "text-blue-400"}`}>
                    Business Solutions
                  </span>
                </h1>
                
                <h2 className={`text-2xl font-semibold mb-6 ${isLightMode ? "text-blue-600" : "text-blue-400"}`}>
                  End-to-End Technology Services
                </h2>
                
                <p className={`mb-8 text-lg leading-relaxed ${isLightMode ? "text-gray-700" : "text-gray-300"}`}>
                  From concept to launch and beyond, we provide a full spectrum of services including Product Development, Quality Assurance Testing, Strategic Team Building, Pilot Programs, Digital Marketing Excellence, Brand Promotion, Investment Deck Creation, and Executive Pitch Training. Our holistic approach ensures your startup journey is seamless, strategic, and success-driven.
                </p>

                <motion.button
                  onClick={() => dispatch(setIsOpenRequestProposal(true))}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg ${
                    isLightMode
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-600 hover:bg-blue-500 text-white"
                  }`}
                >
                  Let's Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {!accessibility.hideImages && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <img
                    src="https://cdn.dribbble.com/userupload/4871858/file/original-915b36c3c2b7ca17351b02c6c39c6f9c.jpg?resize=1504x1128"
                    alt="Innovative business solutions"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </motion.div>
              )}
            </motion.div>

            {/* Story Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-12"
            >
              <div className="md:w-1/2">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                  isLightMode ? 'bg-purple-100 text-purple-600' : 'bg-purple-900 text-purple-300'
                }`}>
                  Our Journey
                </div>
                
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isLightMode ? "text-gray-900" : "text-white"}`}>
                  A Story of Purpose & Passion
                </h2>
                
                <div className={`space-y-4 text-lg leading-relaxed ${isLightMode ? "text-gray-700" : "text-gray-300"}`}>
                  <p className={`font-semibold text-xl ${isLightMode ? "text-blue-600" : "text-blue-400"}`}>
                    From humble beginnings to industry leadership
                  </p>
                  
                  <p>
                    Our journey began in the final days of college when we helped a friend launch their startup. That experience opened our eyes to the immense challenges entrepreneurs face—limited resources, overwhelming technical complexities, and the constant struggle to focus on what truly matters: building their vision.
                  </p>
                  
                  <p>
                    Driven by the belief that every startup deserves expert support, we founded Adiya Business Solution with a singular mission: to remove technological barriers and empower founders to focus on innovation and growth.
                  </p>
                  
                  <p className="font-semibold">
                    Over 9 years, we've partnered with 134+ startups, transforming ideas into thriving businesses. Each success story reinforces our commitment to excellence and innovation. This is more than business—it's our calling.
                  </p>
                </div>
              </div>

              {!accessibility.hideImages && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <img
                    src="https://cdn.dribbble.com/userupload/14666255/file/original-52fbe74ae75b68a48cd1fffb58365670.png?resize=1504x1128"
                    alt="Our growth journey"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Stats />

      {/* Founder Section */}
      <div className={`py-20 ${isLightMode ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-gray-800'}`}>
        <div className="container mx-auto px-4 w-full md:w-10/12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                isLightMode ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-300'
              }`}>
                Leadership
              </div>
              
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isLightMode ? "text-gray-900" : "text-white"}`}>
                Meet{" "}
                <span className={`${isLightMode ? "text-blue-600" : "text-blue-400"}`}>
                  The Visionary
                </span>
              </h1>
              
              <p className={`text-lg leading-relaxed mb-8 ${isLightMode ? "text-gray-700" : "text-gray-300"}`}>
                <span className="text-3xl font-serif">"</span>
                As CEO and Founder, my vision is to democratize technology and make enterprise-grade solutions accessible to businesses of all sizes. Through innovative CRM systems, cutting-edge web and mobile applications, we empower organizations to compete, grow, and thrive in an ever-evolving digital landscape. Success isn't just about technology—it's about the transformation it enables.
                <span className="text-3xl font-serif">"</span>
              </p>
              
              <div className={`p-6 rounded-2xl ${isLightMode ? 'bg-white border-2 border-blue-200' : 'bg-gray-900 border-2 border-gray-700'}`}>
                <h3 className={`text-2xl font-bold mb-1 ${isLightMode ? "text-gray-900" : "text-white"}`}>
                  Avit Garg
                </h3>
                <p className={`text-lg font-medium ${isLightMode ? "text-blue-600" : "text-blue-400"}`}>
                  CEO & Founder, Adiya Business Solution
                </p>
                <p className={`text-sm mt-2 ${isLightMode ? "text-gray-600" : "text-gray-400"}`}>
                  9+ Years of Industry Excellence
                </p>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="relative">
                <div className={`absolute inset-0 ${isLightMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-2xl transform -rotate-3`}></div>
                <img
                  src="/CEO.png"
                  alt="Avit Garg - CEO & Founder"
                  className="relative w-full h-96 object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <TechSysOffices />
    </div>
  );
};

export default About;