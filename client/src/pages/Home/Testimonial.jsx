import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { testimonials } from "../../configs/testimonials";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isLightMode } = useTheme();

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(3);
    } else if (window.innerWidth >= 768) {
      setCardsToShow(2);
    } else {
      setCardsToShow(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className={`relative overflow-hidden ${
      isLightMode 
        ? "bg-gradient-to-b from-gray-50 via-white to-gray-50" 
        : "bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
    } py-16 sm:py-20 lg:py-24`}>
      
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
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
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
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
            isLightMode ? "bg-purple-400" : "bg-purple-600"
          }`} 
        />
      </div>

      <div className="w-11/12 lg:w-10/12 mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6"
        >
          <div className="max-w-2xl space-y-4">
            {/* Subtitle Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
            >
              <Quote className="w-4 h-4 text-blue-500" />
              <span className={`text-sm font-semibold tracking-wider ${
                isLightMode ? "text-blue-600" : "text-blue-400"
              }`}>
                CLIENT TESTIMONIALS
              </span>
            </motion.div>

            {/* Title */}
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
              isLightMode ? "text-gray-900" : "text-white"
            }`}>
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients
              </span>{" "}
              Say
            </h2>

            {/* Description */}
            <p className={`text-lg leading-relaxed ${
              isLightMode ? "text-gray-600" : "text-gray-400"
            }`}>
              Join hundreds of successful entrepreneurs who transformed their startups with our comprehensive support.
            </p>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isLightMode 
                  ? "bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 shadow-md hover:shadow-lg" 
                  : "bg-gray-800 border-2 border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 shadow-lg hover:shadow-xl"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isLightMode 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/50" 
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex transition-transform duration-500 ease-out"
            animate={{ 
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative p-6 rounded-2xl h-full border backdrop-blur-sm overflow-hidden ${
                    isLightMode 
                      ? "bg-white border-gray-200 hover:border-blue-300 shadow-md hover:shadow-xl" 
                      : "bg-gray-800/50 border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Quote Icon */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isLightMode 
                        ? "bg-gradient-to-br from-blue-50 to-purple-50" 
                        : "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                    }`}>
                      <Quote className={`w-6 h-6 ${
                        isLightMode ? "text-blue-600" : "text-blue-400"
                      }`} />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className={`relative mb-6 text-base leading-relaxed ${
                    isLightMode ? "text-gray-700" : "text-gray-300"
                  }`}>
                    "{testimonial.comment.substring(0, 200)}..."
                  </p>

                  {/* Rating */}
                  <div className="relative flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className={`relative flex items-center gap-4 pt-4 border-t ${
                    isLightMode ? "border-gray-200" : "border-gray-700"
                  }`}>
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className={`w-14 h-14 rounded-full object-cover ring-2 ${
                          isLightMode ? "ring-blue-500 ring-offset-white" : "ring-blue-500 ring-offset-gray-800"
                        } ring-offset-2`}
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg ${
                        isLightMode ? "text-gray-900" : "text-white"
                      }`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-sm ${
                        isLightMode ? "text-gray-500" : "text-gray-400"
                      }`}>
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-8"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "w-8 bg-gradient-to-r from-blue-600 to-purple-600" 
                  : `w-2 ${isLightMode ? "bg-gray-300 hover:bg-gray-400" : "bg-gray-600 hover:bg-gray-500"}`
              }`}
            />
          ))}
        </motion.div>

        {/* Navigation Buttons - Mobile */}
        <div className="flex lg:hidden justify-center gap-3 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevTestimonial}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLightMode 
                ? "bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-700 shadow-md" 
                : "bg-gray-800 border-2 border-gray-700 hover:border-blue-500 text-gray-300 shadow-lg"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;