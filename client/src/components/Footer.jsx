import React, { useState, useEffect } from "react";
import { ChevronUp, Phone, MapPin } from "lucide-react";
import { IoIosMail } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const { isLightMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSection = (section) => {
    if (isMobile) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  const footerSections = [
    {
      title: "Company",
      items: ["Home", "About us", "What we do"],
    },
    {
      title: "Learn",
      items: ["Blog", "FAQs", "Glossary"],
    },
  ];

  return (
    <footer
      className={`border-t bg-${isLightMode ? "white" : "gray-300"} text-${
        isLightMode ? "gray-800" : "gray-200"
      } relative`}
    >
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Scroll to Top button */}
        <a
          href="#"
          className={`p-1 rounded-md w-fit h-fit border hover:text-${
            isLightMode ? "white" : "blue-500"
          } hover:bg-${
            isLightMode ? "black" : "white"
          } duration-200 hidden sm:block cursor-pointer absolute right-6 top-6`}
        >
          <MdKeyboardArrowDown className="rotate-180 text-3xl" />
        </a>

        {/* Grid layout for the footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2
              className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600`}
            >
              ADIYA Business Solution
            </h2>
            <div className="space-y-4">
              {["Office 1", "Office 2", "Office 3"].map((office, index) => (
                <address
                  key={office}
                  className={`not-italic text-md font-medium flex items-start space-x-2 ${
                    isLightMode ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  <MapPin
                    size={18}
                    className="mt-1 flex-shrink-0 text-customBlue"
                  />
                  <span>
                    <strong>{office}:</strong>
                    <br />
                    {index === 0 &&
                      "Level 1, Gate Avenue, Next to DCB Bank, Andheri, Mumbai"}
                    {index === 1 &&
                      "c-22 paradise garden bakshi talaav sitapur road near K.E polytechnic college lucknow uttar pradesh"}
                    {index === 2 &&
                      "412, sanjay nagar bansu appartment near bank of baroda bangalore"}
                  </span>
                </address>
              ))}
            </div>
          </div>

          {/* Footer Navigation Sections */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3
                  className={`text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer lg:cursor-default ${
                    isLightMode ? "text-gray-800" : "text-gray-200"
                  }`}
                  onClick={() => toggleSection(section.title)}
                >
                  {section.title}
                  {isMobile && (
                    <ChevronUp
                      className={`lg:hidden transition-transform duration-300 ${
                        openSection === section.title ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </h3>
                <ul
                  className={`space-y-3 overflow-hidden transition-all duration-300 ${
                    openSection === section.title || !isMobile
                      ? "max-h-48"
                      : "max-h-0"
                  }`}
                >
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className={`hover:text-${
                        isLightMode ? "blue-500" : "blue-400"
                      } text-md font-medium transition-colors duration-200`}
                    >
                      <a href="/about">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:hidden hidden md:block">
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isLightMode ? "text-gray-800" : "text-gray-200"
                }`}
              >
                Connect with us
              </h3>
              <div className="flex flex-col space-y-3 mb-6">
                <a
                  href="mailto:proposal@adiyabusinesssolution.com"
                  className={`flex items-center space-x-2 hover:text-${
                    isLightMode ? "white" : "white"
                  } transition-colors duration-200`}
                >
                  <IoIosMail size={18} />
                  <span
                    className={`text-md font-medium ${
                      isLightMode ? "text-gray-800" : "text-gray-200"
                    }`}
                  >
                    proposal@adiyabusinesssolution.com
                  </span>
                </a>
                <a
                  href="tel:+919372194890"
                  className={`flex items-center space-x-2 hover:text-${
                    isLightMode ? "blue-500" : "blue-400"
                  } transition-colors duration-200`}
                >
                  <Phone size={18} />
                  <span
                    className={`text-md font-medium ${
                      isLightMode ? "text-gray-800" : "text-gray-200"
                    }`}
                  >
                    +91 93721 94890
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 text-md font-medium">
                {[
                  "https://in.linkedin.com/company/adiya-business-solution",
                  "https://www.facebook.com/adiyabusinesssolution",
                  "https://x.com/in/couetilc",
                  "https://instagram.com/in/couetilc",
                ].map((url) => (
                  <a
                    href={url}
                    key={url}
                    className={`text-${
                      isLightMode ? "gray-400" : "gray-600"
                    } hover:text-${
                      isLightMode ? "blue-500" : "blue-400"
                    } transition-colors duration-200`}
                  >
                    <SocialIcon url={url} style={{ height: 30, width: 30 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:hidden lg:block">
            <h3 className={`text-xl font-semibold mb-4 ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>Connect with us</h3>
            <div className="flex flex-col space-y-3 mb-6">
              <a href="mailto:proposal@adiyabusinesssolution.com" className={`flex items-center space-x-2 hover:text-${isLightMode ? 'white' : 'white'} transition-colors duration-200`}>
                <IoIosMail size={18} />
                <span className={`text-md font-medium ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>proposal@adiyabusinesssolution.com</span>
              </a>
              <a href="tel:+919372194890" className={`flex items-center space-x-2 hover:text-${isLightMode ? 'blue-500' : 'blue-400'} transition-colors duration-200`}>
                <Phone size={18} />
                <span className={`text-md font-medium ${isLightMode ? 'text-gray-800' : 'text-gray-200'}`}>+91 93721 94890</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-md font-medium">
              {['https://in.linkedin.com/company/adiya-business-solution', 'https://www.facebook.com/adiyabusinesssolution', 'https://x.com/in/couetilc', 'https://instagram.com/in/couetilc'].map((url) => (
                <a href={url} key={url} className={`text-${isLightMode ? 'gray-400' : 'gray-600'} hover:text-${isLightMode ? 'blue-500' : 'blue-400'} transition-colors duration-200`}>
                  <SocialIcon url={url} style={{ height: 30, width: 30 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-${
            isLightMode ? "gray-300" : "gray-700"
          } my-8`}
        ></div>
        <div className="flex flex-col lg:flex-row justify-between items-center text-xl font-normal">
          <p
            className={`mb-4 lg:mb-0 ${
              isLightMode ? "text-gray-800" : "text-gray-200"
            }`}
          >
            &copy; 2023 Adiya. All rights reserved
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-4 mb-4 lg:mb-0">
            <a
              href="#"
              className={`hover:text-${
                isLightMode ? "blue-500" : "blue-400"
              } transition-colors duration-200`}
            >
              Terms of Use
            </a>
            <a
              href="#"
              className={`hover:text-${
                isLightMode ? "blue-500" : "blue-400"
              } transition-colors duration-200`}
            >
              Key Risks
            </a>
            <a
              href="#"
              className={`hover:text-${
                isLightMode ? "blue-500" : "blue-400"
              } transition-colors duration-200`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`hover:text-${
                isLightMode ? "blue-500" : "blue-400"
              } transition-colors duration-200`}
            >
              Cookies Notice
            </a>
          </div>
        </div>

        <p
          className={`text-sm font-normal text-left mt-8  lg:text-left ${
            isLightMode ? "text-gray-800" : "text-gray-200"
          }`}
        >
          The Adiya platform consists of the website, web platform and mobile
          app. By using Adiya, you agree to be bound by the Terms & Conditions,
          Cookie Notice and Privacy Policy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
