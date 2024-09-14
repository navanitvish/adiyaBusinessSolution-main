import React from 'react';
import { GiProcessor, GiMaterialsScience, GiSparkles } from "react-icons/gi";
import { useTheme } from "../../context/ThemeContext";

const WhyChooseUs = () => {
  const { isLightMode } = useTheme();

  const cards = [
    {
      icon: GiProcessor,
      title: "Process enablement",
      description: "We work closely with clients to provide consulting, maintenance, and process re-engineering facilitation for success in this changing world."
    },
    {
      icon: GiMaterialsScience,
      title: "We innovate for you",
      description: "We're dreamers, thinkers, and creators, constantly evolving our products to reach even higher standards for design, quality, and production."
    },
    {
      icon: GiSparkles,
      title: "Our clients are happy",
      description: "We've refined our methods through experience. Nothing gives us greater pride than seeing our clients delighted with our collaborative work."
    }
  ];

  const bgGradient = isLightMode
    ? "bg-gradient-to-br from-blue-50 to-purple-50"
    : "bg-gray-900";
  const textColor = isLightMode ? "text-gray-800" : "text-gray-100";

  return (
    <main className={`font-montserrat px-5 md:px-20 py-16 ${bgGradient} ${textColor}`}>
      {/* <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 ">
        Why Choose Us
      </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <section
            key={index}
            className={`relative group overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-in-out
              ${isLightMode 
                ? "bg-white shadow-lg hover:shadow-xl" 
                : "bg-gray-800 shadow-md hover:shadow-blue-500/20"}
            `}
          >
            <div className={`p-3 rounded-full mb-4 w-fit
              ${isLightMode
                ? "bg-gradient-to-br from-blue-100 to-purple-100"
                : "bg-gradient-to-br from-blue-900 to-purple-900"}
            `}>
              <card.icon className={`text-3xl ${isLightMode ? "text-blue-600" : "text-blue-400"} group-hover:animate-pulse`} />
            </div>
            <h2 className={`text-xl font-semibold mb-3 ${isLightMode ? "text-darkText" : "text-customBlue"}`}>
              {card.title}
            </h2>
            <p className={` ${isLightMode ? "text-darkText text-md font-normal" : "text-lightText text-md font-normal"}`}>
              {card.description}
            </p>
            <div className={`absolute w-48 h-48 rounded-full -top-24 -right-24 transition-all duration-500 group-hover:scale-150
              ${isLightMode
                ? "bg-gradient-to-br from-blue-500 to-purple-300 opacity-50"
                : "bg-gradient-to-br from-blue-800 to-purple-800 opacity-30"}
            `}></div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default WhyChooseUs;