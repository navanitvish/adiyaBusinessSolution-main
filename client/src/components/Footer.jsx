import React, { useState, useEffect } from "react";
import { ChevronUp, Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const { isLightMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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
      items: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "What We Do", link: "/services" },
        { name: "Case Studies", link: "/case-studies" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", link: "/blog" },
        { name: "FAQs", link: "/faqs" },
        { name: "Documentation", link: "/docs" },
        { name: "Support Center", link: "/support" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Terms of Use", link: "/terms" },
        { name: "Privacy Policy", link: "/privacy" },
        { name: "Cookie Notice", link: "/cookies" },
        { name: "Key Risks", link: "/risks" },
      ],
    },
  ];

  const offices = [
    {
      name: "Mumbai Office",
      address: "Level 1, Gate Avenue, Next to DCB Bank, Andheri, Mumbai - 400053",
      phone: "+91 93721 94890",
    },
    {
      name: "Lucknow Office",
      address: "C-22 Paradise Garden, Bakshi Talaab, Sitapur Road, Near K.E. Polytechnic College, Lucknow, Uttar Pradesh - 226201",
      phone: "+91 93721 94890",
    },
    {
      name: "Bangalore Office",
      address: "412, Sanjay Nagar, Bansu Apartment, Near Bank of Baroda, Bangalore - 560094",
      phone: "+91 93721 94890",
    },
  ];

  const socialLinks = [
    { url: "https://in.linkedin.com/company/adiya-business-solution", label: "LinkedIn" },
    { url: "https://www.facebook.com/adiyabusinesssolution", label: "Facebook" },
    { url: "https://x.com/adiyabusiness", label: "X (Twitter)" },
    { url: "https://www.instagram.com/adiyabusinesssolution", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <footer
      className={`relative border-t ${
        isLightMode 
          ? "bg-gradient-to-b from-white to-gray-50 border-gray-200" 
          : "bg-gradient-to-b from-gray-900 to-gray-950 border-gray-800"
      } transition-colors duration-300`}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg ${
              isLightMode 
                ? "bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-500" 
                : "bg-gray-800 border-2 border-gray-700 text-gray-300 hover:border-blue-500"
            } backdrop-blur-sm transition-colors duration-300`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Company Info Section */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                ADIYA Business Solution
              </h2>
              <p className={`text-sm lg:text-base leading-relaxed ${
                isLightMode ? "text-gray-600" : "text-gray-400"
              }`}>
                India's premier startup accelerator, transforming visions into reality with expert guidance and cutting-edge solutions.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              <motion.a
                href="mailto:proposal@adiyabusinesssolution.com"
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 p-3 rounded-xl border ${
                  isLightMode 
                    ? "bg-white border-gray-200 hover:border-blue-400 hover:shadow-md" 
                    : "bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                } transition-all duration-300 group`}
              >
                <div className={`p-2 rounded-lg ${
                  isLightMode ? "bg-blue-50 text-blue-600" : "bg-blue-900/30 text-blue-400"
                } group-hover:scale-110 transition-transform duration-300`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-xs font-medium ${
                    isLightMode ? "text-gray-500" : "text-gray-400"
                  }`}>Email Us</p>
                  <p className={`text-sm font-semibold ${
                    isLightMode ? "text-gray-800" : "text-gray-200"
                  }`}>proposal@adiyabusinesssolution.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919372194890"
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 p-3 rounded-xl border ${
                  isLightMode 
                    ? "bg-white border-gray-200 hover:border-blue-400 hover:shadow-md" 
                    : "bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                } transition-all duration-300 group`}
              >
                <div className={`p-2 rounded-lg ${
                  isLightMode ? "bg-blue-50 text-blue-600" : "bg-blue-900/30 text-blue-400"
                } group-hover:scale-110 transition-transform duration-300`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-xs font-medium ${
                    isLightMode ? "text-gray-500" : "text-gray-400"
                  }`}>Call Us</p>
                  <p className={`text-sm font-semibold ${
                    isLightMode ? "text-gray-800" : "text-gray-200"
                  }`}>+91 93721 94890</p>
                </div>
              </motion.a>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className={`text-sm font-semibold mb-3 ${
                isLightMode ? "text-gray-800" : "text-gray-200"
              }`}>Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg ${
                      isLightMode 
                        ? "bg-gray-100 hover:bg-blue-50" 
                        : "bg-gray-800 hover:bg-gray-700"
                    } transition-colors duration-300`}
                    aria-label={social.label}
                  >
                    <SocialIcon
                      url={social.url}
                      style={{ height: 24, width: 24 }}
                      className="transition-transform duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Sections */}
          <motion.div variants={itemVariants} className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <motion.h3
                  className={`text-base lg:text-lg font-bold mb-4 flex justify-between items-center cursor-pointer lg:cursor-default ${
                    isLightMode ? "text-gray-800" : "text-gray-200"
                  }`}
                  onClick={() => toggleSection(section.title)}
                  whileHover={{ x: 3 }}
                >
                  {section.title}
                  {isMobile && (
                    <motion.div
                      animate={{ rotate: openSection === section.title ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronUp className="w-5 h-5 lg:hidden" />
                    </motion.div>
                  )}
                </motion.h3>
                <AnimatePresence>
                  <motion.ul
                    className={`space-y-2 overflow-hidden ${
                      openSection === section.title || !isMobile
                        ? "block"
                        : "hidden lg:block"
                    }`}
                    initial={isMobile ? { height: 0 } : { height: "auto" }}
                    animate={isMobile ? { height: openSection === section.title ? "auto" : 0 } : { height: "auto" }}
                    exit={isMobile ? { height: 0 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {section.items.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.link}
                          className={`text-sm inline-block ${
                            isLightMode 
                              ? "text-gray-600 hover:text-blue-600" 
                              : "text-gray-400 hover:text-blue-400"
                          } transition-all duration-200 hover:translate-x-1`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Office Locations */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
            <h3 className={`text-base lg:text-lg font-bold mb-4 ${
              isLightMode ? "text-gray-800" : "text-gray-200"
            }`}>
              Our Offices
            </h3>
            <div className="space-y-3">
              {offices.map((office, index) => (
                <motion.div
                  key={office.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl border ${
                    isLightMode 
                      ? "bg-white border-gray-200 hover:border-blue-300 hover:shadow-md" 
                      : "bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                  } transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg mt-1 flex-shrink-0 ${
                      isLightMode ? "bg-blue-50 text-blue-600" : "bg-blue-900/30 text-blue-400"
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-semibold mb-1 ${
                        isLightMode ? "text-gray-800" : "text-gray-200"
                      }`}>{office.name}</h4>
                      <p className={`text-xs leading-relaxed ${
                        isLightMode ? "text-gray-600" : "text-gray-400"
                      }`}>{office.address}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`mt-12 pt-8 border-t ${
            isLightMode ? "border-gray-200" : "border-gray-800"
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className={`text-sm ${
              isLightMode ? "text-gray-600" : "text-gray-400"
            }`}>
              © {new Date().getFullYear()} ADIYA Business Solution. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/terms"
                className={`${
                  isLightMode 
                    ? "text-gray-600 hover:text-blue-600" 
                    : "text-gray-400 hover:text-blue-400"
                } transition-colors duration-200`}
              >
                Terms of Use
              </Link>
              <span className={isLightMode ? "text-gray-300" : "text-gray-700"}>•</span>
              <Link
                to="/privacy"
                className={`${
                  isLightMode 
                    ? "text-gray-600 hover:text-blue-600" 
                    : "text-gray-400 hover:text-blue-400"
                } transition-colors duration-200`}
              >
                Privacy Policy
              </Link>
              <span className={isLightMode ? "text-gray-300" : "text-gray-700"}>•</span>
              <Link
                to="/cookies"
                className={`${
                  isLightMode 
                    ? "text-gray-600 hover:text-blue-600" 
                    : "text-gray-400 hover:text-blue-400"
                } transition-colors duration-200`}
              >
                Cookie Notice
              </Link>
            </div>
          </div>

          <p className={`text-xs lg:text-sm mt-6 text-center leading-relaxed ${
            isLightMode ? "text-gray-500" : "text-gray-500"
          }`}>
            The ADIYA platform consists of the website, web platform, and mobile applications. 
            By using ADIYA, you agree to be bound by our Terms & Conditions, Cookie Notice, and Privacy Policy. 
            All trademarks and registered trademarks are the property of their respective owners.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;