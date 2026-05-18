import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenRequestProposal } from "../../store/appSlice";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 

  Code,
  Database,
  Smartphone,
  Palette,
  CheckCircle
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

  // Floating icons data
  const floatingIcons = [
    { icon: Code, color: 'from-yellow-400 to-yellow-500', position: 'top-[15%] left-[8%]', delay: 0 },
    { icon: CheckCircle, color: 'from-green-400 to-green-500', position: 'top-[35%] left-[12%]', delay: 0.5 },
    { icon: Database, color: 'from-cyan-400 to-cyan-500', position: 'bottom-[30%] left-[10%]', delay: 1 },
    { icon: Palette, color: 'from-pink-400 to-pink-500', position: 'top-[10%] right-[8%]', delay: 0.3 },
    { icon: Smartphone, color: 'from-blue-400 to-blue-500', position: 'top-[30%] right-[12%]', delay: 0.8 },
    { icon: Database, color: 'from-purple-400 to-purple-500', position: 'bottom-[35%] right-[10%]', delay: 1.2 },
  ];
const stats = [
   { value: "340+", label: "Projects Completed Across India" },
  { value: "95%", label: "Client Satisfaction Rate" },
  { value: "9+", label: "Years of Industry Experience" },
  { value: "180+", label: "Happy Client Testimonials" },
];

  return (
    <main className={`relative min-h-screen flex items-center overflow-hidden ${
      isLightMode 
        ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" 
        : "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"
    }`}>
      
      {/* Simple Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className={`absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl ${
          isLightMode 
            ? 'bg-gradient-to-br from-orange-200/40 via-pink-200/30 to-purple-200/20' 
            : 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800'
        }`} />
        <div className={`absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl ${
          isLightMode 
            ? 'bg-gradient-to-br from-purple-200/40 via-blue-200/30 to-pink-200/20' 
            : 'bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              isLightMode 
                ? 'text-orange-600' 
                : 'text-orange-400'
            }`}>
              <span className="text-orange-500">★</span>
              We Digital Product Design Company
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] ${
              isLightMode 
                ? 'text-gray-900' 
                : 'text-white'
            }`}>
              Creating Better Solution
            </h1>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black leading-[1.1] ${
              isLightMode 
                ? 'text-customBlue' 
                : 'text-purple-400'
            }`}>
              For Businesses
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${
              isLightMode ? 'text-gray-600' : 'text-gray-400'
            }`}
          >
            We are a web and mobile design & development agency. Making websites & apps, creating brand identities, and launching startups.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              onClick={() => dispatch(setIsOpenRequestProposal(true))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold text-white  bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30 transition-all duration-300"
            >
              Start a project
            </motion.button>
            
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
                  isLightMode 
                    ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-gray-900'
                }`}
              >
                See Our Products
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Icons */}
        {floatingIcons.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + item.delay, duration: 0.5 }}
              className={`absolute ${item.position} hidden lg:block`}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer`}
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Achievement Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-24 space-y-4"
        >
          {/* Section Title */}
          <div className="text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${
              isLightMode ? 'text-gray-900' : 'text-white'
            }`}>
              Our Achievement <span className="text-orange-500">Gallery</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`text-center p-5 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  isLightMode 
                    ? 'bg-white/60 border-gray-200/50 hover:bg-white/80 shadow-lg' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 shadow-xl'
                }`}
              >
                <div className={`text-xl sm:text-2xl font-black mb-2 ${
                  isLightMode ? 'text-gray-900' : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${
                  isLightMode ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sound Toggle */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <motion.button
          onClick={() => setSound(!sound)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative w-14 h-14 rounded-full shadow-xl transition-all duration-300 backdrop-blur-md ${
            isLightMode 
              ? 'bg-white/80 border-2 border-gray-200' 
              : 'bg-white/10 border-2 border-white/20'
          }`}
          aria-label={sound ? "Mute sound" : "Play sound"}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <RxSpeakerLoud
              className={`absolute text-xl transition-all duration-300 ${
                sound 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-50 -rotate-90'
              } ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}
            />
            <RxSpeakerOff
              className={`absolute text-xl transition-all duration-300 ${
                !sound 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-50 rotate-90'
              } ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}
            />
          </div>
        </motion.button>
        <audio ref={audioRef} controls src="/music.mp3" className="hidden"></audio>
      </motion.section>
    </main>
  );
};

export default Banner;