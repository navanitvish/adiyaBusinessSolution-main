import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import PropTypes from 'prop-types';

const ResponsiveMenu = ({ isOpenResponsiveMenu, setIsOpenResponsiveMenu }) => {
  const navigate = useNavigate();
  const [isOpenServices, setIsOpenServices] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpenServices(false);
    setIsOpenResponsiveMenu(false);
  };

  // Animation variants
  const menuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const submenuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpenResponsiveMenu && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/50 z-[9] lg:hidden top-14"
            onClick={() => {
              setIsOpenResponsiveMenu(false);
              setIsOpenServices(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Menu */}
      <AnimatePresence>
        {isOpenResponsiveMenu && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed lg:hidden w-full z-10 top-14 left-0 bg-customBlue font-medium shadow overflow-hidden text-white text-lg md:text-2xl md:font-medium"
          >
            <motion.li
              variants={itemVariants}
              onClick={() => handleNavigation("/")}
              className="py-3 px-5 cursor-pointer border-b hover:bg-opacity-80 transition-colors"
            >
              Home
            </motion.li>

            <motion.li
              variants={itemVariants}
              onClick={() => handleNavigation("/about")}
              className="py-3 px-5 cursor-pointer border-b hover:bg-opacity-80 transition-colors"
            >
              About
            </motion.li>

            <motion.li
              variants={itemVariants}
              onClick={() => setIsOpenServices(!isOpenServices)}
              className={`py-3 px-5 cursor-pointer flex items-center justify-between hover:bg-opacity-80 transition-colors ${
                isOpenServices ? "bg-customBlue" : "bg-transparent"
              }`}
            >
              <span>Services</span>
              <motion.div
                animate={{ rotate: isOpenServices ? -180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <BsChevronDown />
              </motion.div>
            </motion.li>

            {/* Submenu */}
            <AnimatePresence>
              {isOpenServices && (
                <motion.ul
                  variants={submenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-customBlue overflow-hidden text-md font-normal text-lightText"
                >
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleNavigation("/services/app-&-website-development")}
                    className="py-3 px-10 cursor-pointer border-b border-t hover:bg-opacity-80 transition-colors"
                  >
                    App & website development
                  </motion.li>
                  
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleNavigation("/services/digital-marketing")}
                    className="py-3 px-10 cursor-pointer border-b hover:bg-opacity-80 transition-colors"
                  >
                    Digital marketing
                  </motion.li>
                  
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleNavigation("/services/crm-&-erp")}
                    className="py-3 px-10 cursor-pointer border-b hover:bg-opacity-80 transition-colors"
                  >
                    CRM & ERP
                  </motion.li>
                  
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleNavigation("/services/pilot-run-&-market-fit-testing")}
                    className="py-3 px-10 cursor-pointer border-b hover:bg-opacity-80 transition-colors"
                  >
                    Pilot run & market fit testing
                  </motion.li>
                  
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleNavigation("/services/investment-deck")}
                    className="py-3 px-10 cursor-pointer border-b hover:bg-opacity-80 transition-colors"
                  >
                    Investment deck
                  </motion.li>
                  
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleNavigation("/services/research-&-market-penetration")}
                    className="py-3 px-10 cursor-pointer border-b hover:bg-opacity-80 transition-colors"
                  >
                    Research & market penetration
                  </motion.li>
                  
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleNavigation("/services/game-&-graphic-development")}
                    className="py-3 px-10 cursor-pointer border-b hover:bg-opacity-80 transition-colors"
                  >
                    Game & graphic development
                  </motion.li>
                  
                  <motion.li
                    variants={itemVariants}
                    onClick={() => handleNavigation("/services/onboarding-&-bdm")}
                    className="py-3 px-10 cursor-pointer hover:bg-opacity-80 transition-colors"
                  >
                    Onboarding & BDM
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>

            <motion.li
              variants={itemVariants}
              onClick={() => handleNavigation("/faqs")}
              className="py-3 px-5 cursor-pointer border-t border-b border-b-customBlue hover:bg-opacity-80 transition-colors"
            >
              Faqs
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;

ResponsiveMenu.propTypes = {
  isOpenResponsiveMenu: PropTypes.bool.isRequired,
  setIsOpenResponsiveMenu: PropTypes.func.isRequired,
};