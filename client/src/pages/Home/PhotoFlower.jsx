import React, { useEffect } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme

const PhotoFlower = () => {
  const { isLightMode } = useTheme(); // Access the theme

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={`${
          isLightMode
            ? "bg-gradient-to-br from-blue-50 to-purple-50"
            : "bg-gray-900"
        }`}>
      <section
        className={`px-5 w-10/12 mx-auto lg:px-20 py-10 flex  flex-row-reverse gap-4 md:gap-16 lg:gap-1  md:flex-row  items-center justify-center space-x-0 lg:space-x-20 h-auto lg:h-[calc(100vh-56px)] `}
      >
        <section
          className="grid grid-cols-2 w-fit gap-2.5 lg:gap-5"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <div
            className={`bg-[url(https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 rounded-br-[50%] ${
              isLightMode ? "border border-gray-300" : ""
            }`}
          ></div>
          <div
            className={`bg-[url(https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 rounded-tr-[50%] ${
              isLightMode ? "border border-gray-300" : ""
            }`}
          ></div>
          <div
            className={`bg-[url(https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 rounded-bl-[50%] ${
              isLightMode ? "border border-gray-300" : ""
            }`}
          ></div>
          <div
            className={`bg-[url(https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] bg-cover bg-center w-40 lg:w-52 h-44 lg:h-52 rounded-tl-[50%] ${
              isLightMode ? "border border-gray-300" : ""
            }`}
          ></div>
        </section>
        <section
          className={`w-10/12 lg:w-[500px] ${
            isLightMode ? "text-black" : "text-white"
          } space-y-5 mb-5 lg:mb-0`}
        >
          <div
            className="space-y-5 text-center lg:text-start"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <h1
              className={`text-4xl text-left lg:text-6xl font-semibold ${
                isLightMode ? "text-black" : "text-white"
              }`}
            >
              We <span className="text-customBlue">Provide</span> Quality
              Service I<span className="text-customBlue">n the Town</span>
            </h1>
            <p
              className={`text-md lg:text-xl  font-normal text-justify ${
                isLightMode ? "text-gray-800" : "text-gray-300"
              }`}
            >
              Each of our websites is designed and developed to be mobile
              responsive first and foremost to provide the best user
              experience—no matter the type of device. Our company offers the
              best value + long-term satisfaction and increased sales.
            </p>
            <p
              className={`text-sm lg:text-xl font-normal text-justify ${
                isLightMode ? "text-gray-800" : "text-gray-300"
              }`}
            >
              Our experienced, proven project managers ensure our clients’
              projects are hyper-organized, well managed, and meet clear
              expectations on time. We serve a potent mix of web design &
              development, brand strategy, and digital marketing.
            </p>
          </div>
          <div className="space-y-1" data-aos="fade-left">
            <p
              className={`flex items-center lg:text-xl font-normal ${
                isLightMode ? "text-gray-800" : "text-gray-300"
              }`}
            >
              <BsCheck2Circle
                className={`text-xl mr-1.5 ${
                  isLightMode ? "text-customBlue" : "text-customBlue"
                }`}
              />
              <span>Top level project management</span>
            </p>
            <p
              className={`flex items-center lg:text-xl font-normal ${
                isLightMode ? "text-gray-800" : "text-gray-300"
              }`}
            >
              <BsCheck2Circle
                className={`text-xl mr-1.5 ${
                  isLightMode ? "text-customBlue" : "text-customBlue"
                }`}
              />
              <span>Full service experience</span>
            </p>
            <p
              className={`flex items-center lg:text-xl font-normal ${
                isLightMode ? "text-gray-800" : "text-gray-300"
              }`}
            >
              <BsCheck2Circle
                className={`text-xl mr-1.5 ${
                  isLightMode ? "text-customBlue" : "text-customBlue"
                }`}
              />
              <span>World class value</span>
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PhotoFlower;
