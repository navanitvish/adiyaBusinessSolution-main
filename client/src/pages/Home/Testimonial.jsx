import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme

const testimonials = [
  {
    id: 1,
    name: "Vivian dsouza",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/oh-my-help.png",
    comment:
      "Our experience with them has been exceptional from start to finish. Not only did they provide a robust, user-friendly solution, but their commitment to customer service truly stood out. I remember one incident vividly—our app had to go live for a crucial medical campaign, and at the last minute, we noticed a small glitch. Their project manager (who even called us while on vacation!) quickly gathered the team, and within hours, the issue was resolved without missing our deadline. That kind of dedication is rare, and we're grateful for it. Highly recommended for anyone looking for reliable tech partners!",
    date: "Doctor on Call",
    rating: 5,
  },
  {
    id: 2,
    name: "Ranjan singh",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/ay5edmm.png",
    comment:
      "Working with them has been a smooth and rewarding experience. Their team is efficient, professional, and really understands the client's needs. From the start, they offered an affordable solution without compromising on quality. The communication was seamless, and their responsiveness set them apart from other companies we've worked with in the past. We're glad to have partnered with such a reliable team and look forward to future collaborations.",
    date: " Dubai Rental",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr. Sohail dhole",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/buuurp.png",
    comment:
      "It was a wonderful experience working with them. I especially appreciated their project manager, who had a Bhopali accent—though I can't recall his name. My project was completed on time, and I have been associated with them for a long time. Their dedication and professionalism make them a great team to work with!",
    date: "Goa King",
    rating: 5,
  },
  // Add more testimonials to see the sliding effect
  {
    id: 4,
    name: "Deepak sharma",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/ay5edmm.png",
    comment:
      "Affordable pricing, sensible people, and, most importantly, great communication. I run multiple companies and have worked with a few development firms, but this experience was different. I'm really happy we collaborated together!",
    date: "Wolf India",
    rating: 4,
  },
  {
    id: 5,
    name: " Mohit sonar",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/delviy.png",
    comment:
      "Choosing to work with them was one of the best decisions we made for our business. Their team not only delivered a highly functional and user-friendly app but also exceeded our expectations in terms of creativity and problem-solving. I remember during development, we were facing a technical challenge with integrating a real-time fare calculation system. Their team didn’t just fix the issue—they went above and beyond by suggesting an even better solution that improved the user experience. Their proactive approach and attention to detail have made a huge difference. We’re thrilled with the outcome and excited for what’s next!",

    date: "BookMyTaxi by",
    rating: 5,
  },
  {
    id: 1,
    name: "Rajesh Mishra",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/smyllo.png",
    comment:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    date: "15 November",
    rating: 5,
  },
  {
    id: 2,
    name: "Sumit Sharma",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/ay5edmm.png",
    comment:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    date: "11 November",
    rating: 5,
  },
  {
    id: 3,
    name: "Shawla Dev",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/todotix.png",
    comment:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "05 November",
    rating: 5,
  },
  // Add more testimonials to see the sliding effect
  {
    id: 4,
    name: "Ema Sharma",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/smyllo.png",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20 November",
    rating: 4,
  },
  {
    id: 5,
    name: "Michael Yadav",
    avatar:
      "https://www.hyperlinkinfosystem.com/assets/img/clients-say/delviy.png",
    comment:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "25 November",
    rating: 5,
  },
  // ... other testimonials
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isLightMode } = useTheme(); // Access the theme

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className={` w-10/12 mx-auto  ${isLightMode ? "" : ""} p-4`}>
      <div className="">
        <div className="flex justify-between items-center mb-8 ">
          <div className="max-w-2xl">
            <p
              className={`text-2xl font-bold ${
                isLightMode ? "text-customBlue" : "text-customBlue"
              }`}
            >
              Our Testimonial
            </p>
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-2 ${
                isLightMode ? "text-black" : "text-white"
              } space-y-4`}
            >
              What our{" "}
              <span
                className={`text-customBlue ${
                  isLightMode ? "text-customBlue" : "text-customBlue"
                }`}
              >
                {" "}
                clients
              </span>{" "}
              say
            </h2>
            <p
              className={`text-base sm:text-xl font-normal ${
                isLightMode ? "text-gray-600" : "text-gray-300"
              }`}
            >
              The right move at the right time saves your investment. Live the
              dream of expanding your business.
            </p>
          </div>
          <div className="hidden sm:flex space-x-2">
            <button
              onClick={prevTestimonial}
              className={`bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors ${
                isLightMode ? "bg-black" : "bg-gray-800"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className={`bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors ${
                isLightMode ? "bg-black" : "bg-gray-800"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`w-full sm:w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2`}
              >
                <div
                  className={`p-6 rounded-lg shadow-md h-full ${
                    isLightMode ? "bg-white" : "bg-gray-800"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3
                        className={`font-semibold text-xl ${
                          isLightMode ? "text-customBlue" : "text-customBlue"
                        }`}
                      >
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                  <p
                    className={`mb-4 font-semibold ${
                      isLightMode ? "text-darkText" : "text-lightText"
                    }`}
                  >
                    {testimonial.comment.substring(0, 280)}...
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            isLightMode ? "text-customBlue" : "text-customBlue"
                          } fill-current`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p
                      className={`text-sm font-normal ${
                        isLightMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex sm:hidden justify-center space-x-2 mt-4">
          <button
            onClick={prevTestimonial}
            className={`bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors ${
              isLightMode ? "bg-black" : " bg-customBlue"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className={`bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors ${
              isLightMode ? "bg-black" : " bg-customBlue"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
