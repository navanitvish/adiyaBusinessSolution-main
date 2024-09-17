import  { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";// Import useTheme
import { testimonials } from "../../configs/testimonials";


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1); // State to handle cards per view
  const { isLightMode } = useTheme(); // Access the theme

  // Function to detect screen size and adjust cards to show accordingly
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(3); // Show 3 cards on larger screens
    } else if (window.innerWidth >= 768) {
      setCardsToShow(2); // Show 2 cards on tablets
    } else {
      setCardsToShow(1); // Show 1 card on mobile devices
    }
  };

  useEffect(() => {
    handleResize(); // Set initial value based on screen size
    window.addEventListener("resize", handleResize); // Add listener to handle resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener on unmount
    };
  }, []);

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

  return (
    <div className="w-10/12 mx-auto p-4">
      <div className="">
        <div className="flex justify-between items-center mb-8">
          <div className="max-w-2xl">
            <p className={`text-2xl font-bold ${isLightMode ? "text-customBlue" : "text-customBlue"}`}>
              Our Testimonial
            </p>
            <h2 className={`text-4xl sm:text-5xl font-bold mb-2 ${isLightMode ? "text-black" : "text-white"}`}>
              What our <span className={`text-customBlue ${isLightMode ? "text-customBlue" : "text-customBlue"}`}> clients </span> say
            </h2>
            <p className={`text-base sm:text-xl font-normal ${isLightMode ? "text-gray-600" : "text-gray-300"}`}>
              The right move at the right time saves your investment. Live the dream of expanding your business.
            </p>
          </div>
          <div className="hidden sm:flex space-x-2">
            <button onClick={prevTestimonial} className={`bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors ${isLightMode ? "bg-black" : "bg-gray-800"}`}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextTestimonial} className={`bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors ${isLightMode ? "bg-black" : "bg-gray-800"}`}>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`w-full sm:w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2`}>
                <div className={`p-6 rounded-lg shadow-md h-full ${isLightMode ? "bg-white" : "bg-gray-800"}`}>
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className={`font-semibold text-xl ${isLightMode ? "text-customBlue" : "text-customBlue"}`}>
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                  <p className={`mb-4 font-normal text-justify tracking-tight ${isLightMode ? "text-darkText" : "text-lightText"}`}>
                    {testimonial.comment.substring(0, 280)}...
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${isLightMode ? "text-customBlue" : "text-customBlue"} fill-current`} viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className={`text-sm font-normal ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex sm:hidden justify-center space-x-2 mt-4">
          <button onClick={prevTestimonial} className={`bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors ${isLightMode ? "bg-black" : "bg-customBlue"}`}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextTestimonial} className={`bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors ${isLightMode ? "bg-black" : "bg-customBlue"}`}>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
