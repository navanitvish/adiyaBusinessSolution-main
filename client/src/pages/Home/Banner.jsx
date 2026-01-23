import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../../store/appSlice";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Rocket,
  Award,
  Zap,
  Target,
  Globe
} from "lucide-react";

const Banner = () => {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const { accessibility } = useSelector((store) => store.app);
  const [sound, setSound] = useState(false);

  const { isLightMode } = useTheme();

  useEffect(() => {
    if (sound) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [sound]);

  const stats = [
    { value: "134+", label: "Successful Launches", icon: Rocket },
    { value: "9+", label: "Years Leading", icon: Award },
    { value: "98%", label: "Client Retention", icon: Target },
  ];

  const features = [
    { 
      icon: Zap, 
      label: 'Rapid Deployment', 
      color: 'from-yellow-500 to-orange-500',
      description: 'Launch in weeks, not months'
    },
    { 
      icon: TrendingUp, 
      label: '10x Growth Strategy', 
      color: 'from-green-500 to-emerald-500',
      description: 'Proven scaling frameworks'
    },
    { 
      icon: Users, 
      label: 'Expert Network', 
      color: 'from-blue-500 to-cyan-500',
      description: '50+ industry specialists'
    },
    { 
      icon: Globe, 
      label: 'Global Reach', 
      color: 'from-purple-500 to-pink-500',
      description: 'International market access'
    }
  ];

  return (
    <main className={`relative min-h-screen flex items-center overflow-hidden ${
      isLightMode 
        ? "bg-gradient-to-br from-slate-50 via-white to-blue-50" 
        : "bg-gradient-to-br from-gray-950 via-slate-950 to-blue-950"
    }`}>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isLightMode ? 'opacity-[0.03]' : 'opacity-[0.05]'}`} 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isLightMode ? '#3b82f6' : '#60a5fa'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Content Section */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1"
          >
            {/* Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-blue-500/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </span>
              <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 ${isLightMode ? 'text-blue-600' : 'text-blue-400'}`} />
              <span className={`text-xs sm:text-sm lg:text-base font-bold ${
                isLightMode ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'text-gray-100'
              }`}>
                Transforming Ideas into Market-Leading Businesses
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] ${
                  isLightMode 
                    ? 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent'
                }`}
              >
                Transform Vision Into Market Reality
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl ${
                isLightMode ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              We're not just a service provider—we're your dedicated growth partner. From zero to market leader, 
              we provide the complete tech infrastructure, strategic guidance, and execution power to turn your startup vision into a thriving enterprise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 pt-2"
            >
              <motion.button
                onClick={() => dispatch(setIsOpenRequestProposal(true))}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Request Proposal
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </motion.button>
              
              <Link to="/about" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group w-full px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg border-2 transition-all duration-300 backdrop-blur-sm ${
                    isLightMode 
                      ? 'border-gray-300 text-gray-800 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600' 
                      : 'border-gray-600 text-gray-200 hover:border-blue-400 hover:bg-gray-800/50 hover:text-blue-400'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.section>

          {/* Visual Section */}
          <motion.section 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              {/* Main Video with 3D Effect */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-pink-600/30 z-10" />
                
                <video
                  src="https://cdn.dribbble.com/userupload/45884250/file/55e3203725f7f9400ef35e5fcdb90972.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Professional startup team collaborating on innovative solutions"
                />
                
                {/* Floating Feature Cards */}
                <div className="absolute inset-0 z-20 p-3 sm:p-6 lg:p-8">
                  {/* Top Left - Success Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`absolute top-3 left-3 sm:top-6 sm:left-6 lg:top-8 lg:left-8 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-xl sm:rounded-2xl backdrop-blur-xl border-2 shadow-2xl ${
                      isLightMode
                        ? 'bg-white/95 border-white/50'
                        : 'bg-gray-900/95 border-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <div className="hidden sm:block">
                        <div className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wide ${
                          isLightMode ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          Success Rate
                        </div>
                        <div className={`text-sm sm:text-base lg:text-xl font-black ${
                          isLightMode ? 'text-gray-900' : 'text-white'
                        }`}>
                          98%
                        </div>
                      </div>
                      <div className="sm:hidden">
                        <div className={`text-xs font-black ${
                          isLightMode ? 'text-gray-900' : 'text-white'
                        }`}>
                          98%
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top Right - Award Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    className={`absolute top-3 right-3 sm:top-6 sm:right-6 lg:top-8 lg:right-8 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-xl sm:rounded-2xl backdrop-blur-xl border-2 shadow-2xl ${
                      isLightMode
                        ? 'bg-white/95 border-white/50'
                        : 'bg-gray-900/95 border-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <span className={`text-xs sm:text-sm font-black ${
                        isLightMode ? 'text-gray-900' : 'text-white'
                      }`}>
                        Leader
                      </span>
                    </div>
                  </motion.div>

                  {/* Bottom - Features Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8"
                  >
                    <div className={`p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl backdrop-blur-xl border-2 shadow-2xl ${
                      isLightMode
                        ? 'bg-white/95 border-white/50'
                        : 'bg-gray-900/95 border-gray-700/50'
                    }`}>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                        {features.map((feature, i) => {
                          const Icon = feature.icon;
                          return (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-start gap-2 sm:gap-3"
                            >
                              <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-r ${feature.color} flex-shrink-0`}>
                                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <div>
                                <div className={`text-xs sm:text-sm font-bold mb-0.5 ${
                                  isLightMode ? 'text-gray-900' : 'text-white'
                                }`}>
                                  {feature.label}
                                </div>
                                <div className={`text-[10px] sm:text-xs hidden sm:block ${
                                  isLightMode ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                  {feature.description}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Gradient Orbs */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl ${
                    isLightMode ? 'bg-blue-400' : 'bg-blue-600'
                  }`}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className={`absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl ${
                    isLightMode ? 'bg-purple-400' : 'bg-purple-600'
                  }`}
                />
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Sound Toggle */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-50"
      >
        <motion.button
          onClick={() => setSound(!sound)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-md ${
            isLightMode 
              ? 'bg-white/90 border-2 border-gray-200' 
              : 'bg-gray-800/90 border-2 border-gray-700'
          }`}
          aria-label={sound ? "Mute sound" : "Play sound"}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <RxSpeakerLoud
              className={`absolute text-lg sm:text-xl lg:text-2xl transition-all duration-300 ${
                sound 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-50 -rotate-90'
              } ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}
            />
            <RxSpeakerOff
              className={`absolute text-lg sm:text-xl lg:text-2xl transition-all duration-300 ${
                !sound 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-50 rotate-90'
              } ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}
            />
          </div>
        </motion.button>
        <audio ref={audioRef} controls src="/music.mp3" className="hidden"></audio>
      </motion.section>

      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div 
          className={`absolute top-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl ${
            isLightMode ? 'bg-blue-300' : 'bg-blue-600'
          }`}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={`absolute bottom-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl ${
            isLightMode ? 'bg-purple-300' : 'bg-purple-600'
          }`}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </main>
  );
};

export default Banner;