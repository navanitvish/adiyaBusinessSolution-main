import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const aboutContent = {
  subtitle: "",
  title: "About Us",
  description:
    "We offer a comprehensive range of services, including Product Development, Product Testing, Team Onboarding, Pilot Run, Digital Marketing, Promotion, Investment Deck, and Pitch Training. We take care of everything, ensuring that your startup journey is supported and guided every step of the way.",
  image:
    "https://cdn.dribbble.com/users/3577980/screenshots/12205878/media/cdf4d6523060a4f95061163760f928f5.jpg?resize=1200x900&vertical=center",
  stats: [
    { value: "9.5", label: "Years Experience" },
    { value: "340+", label: "Project Completed" },
    { value: "830+", label: "Positive Reviews" },
    { value: "100%", label: "Trusted Clients" },
  ],
};

const AboutSection = () => {
  const navigate = useNavigate();
  const { isLightMode } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <div
      className={`container mx-auto w-10/12 px-4 sm:px-6 lg:px-8 py-16 sm:py-16 lg:py-20 ${
        isLightMode ? "text-lightText" : "text-darkModeText"
      }`}
    >
      
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 lg:pr-8" data-aos="fade-right">
          <h3
            className={`text-orange-500 font-semibold mb-2 text-lg sm:text-xl ${
              isLightMode ? "text-black" : "text-darkHeading"
            }`}
          >
            {aboutContent.subtitle}
          </h3>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${
              isLightMode ? "text-darkText" : "text-customBlue"
            }`}
          >
            {aboutContent.title}
          </h2>
          <p
            className={`tracking-normal text-justify  mb-6 sm:mb-8zzz font-normal text-base sm:text-lg lg:text-xl ${
              isLightMode ? "text-darkText" : "text-darkSubHeading"
            }`}
          >
            {aboutContent.description}
          </p>

          <button
            onClick={() => navigate("/about")}
            className={`w-full sm:w-auto border px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-lg sm:text-xl font-normal transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ${
              isLightMode
                ? "border-black bg-customBlue text-white hover:bg-customBlueHover hover:text-white"
                : "border-white bg-customBlue text-white hover:bg-customBlueHover"
            }`}
          >
            Know more about us
          </button>

          <div className="grid grid-cols-2 gap-4 text-center mt-8">
            {aboutContent.stats.map((stat, index) => (
              <div
                key={index}
                className={`border py-2 sm:py-6 ${
                  isLightMode ? "border-black" : "border-white"
                }`}
              >
                <h4
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                    isLightMode ? "text-darkText" : "text-darkModeText"
                  }`}
                >
                  {stat.value}
                </h4>
                <p
                  className={`text-sm sm:text-base lg:text-lg font-normal ${
                    isLightMode ? "text-blue-800" : "text-gray-300"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left">
          <img
            src={aboutContent.image}
            alt="Team collaborating"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
