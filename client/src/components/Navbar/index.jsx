import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import ServicesMenu from "./ServicesMenu";
import ResponsiveMenu from "./ResponsiveMenu";
import { useTheme } from "../../context/ThemeContext";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { navData } from "../../configs/navData";
import PropTypes from 'prop-types';

const Navbar = ({ accessibility }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [navBg, setNavBg] = useState(false);
  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { isLightMode, toggleTheme } = useTheme();

  // Detect Scroll to update navbar background and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY >= 56;
      setNavBg(scrolled);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_percentage = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled_percentage);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleRedirect = (i) =>
    i.link !== "Services" ? navigate(`${i.to}`) : null;

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="group relative bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 rounded-full overflow-hidden hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className={`relative w-14 h-7 rounded-full flex items-center transition-all duration-300 ${
        isLightMode ? 'bg-white' : 'bg-gray-800'
      }`}>
        <span
          className={`absolute w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ${
            isLightMode ? "translate-x-7" : "translate-x-0.5"
          }`}
        >
          <BsSun
            className={`absolute text-white text-xs transition-all duration-300 ${
              isLightMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
          />
          <BsMoonStars
            className={`absolute text-white text-xs transition-all duration-300 ${
              !isLightMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
            }`}
          />
        </span>
      </div>
    </button>
  );

  const CTAButton = () => (
    <button
      onClick={() => navigate("/contact")}
      className="hidden lg:block px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
    >
      Get Started
    </button>
  );

  return (
    <>
      <nav
        id="navbar"
        className={`px-5 xl:px-20 sm:px-10 h-16 w-full z-50 top-0 flex items-center justify-between transition-all duration-300 ${
          pathname.length > 1
            ? `${isLightMode ? 'bg-white/95 text-gray-900' : 'bg-gray-900/95 text-white'} backdrop-blur-lg sticky shadow-lg border-b ${isLightMode ? 'border-gray-200' : 'border-gray-800'}`
            : navBg
            ? `${isLightMode ? 'bg-white/95 text-gray-900' : 'bg-gray-900/95 text-white'} backdrop-blur-lg fixed shadow-lg border-b ${isLightMode ? 'border-gray-200' : 'border-gray-800'}`
            : `bg-transparent backdrop-blur-none sticky lg:fixed shadow-none ${
                isLightMode ? "text-gray-900" : "text-white"
              }`
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Logo Section with enhanced styling */}
        <section 
          onClick={() => navigate("/")} 
          className="cursor-pointer group relative"
        >
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110`}>
              A
            </div>
            <h1 className={`font-architects-daughter text-2xl md:text-3xl xl:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300`}>
              Adiya
            </h1>
          </Link>
        </section>

        {/* Navigation Links and Theme Toggle for larger screens */}
        <section
          className={`relative lg:flex hidden items-center justify-end flex-grow gap-8 ${
            accessibility.biggerText ? "text-xl" : "text-base"
          }`}
        >
          <div className="flex items-center space-x-8">
            {navData.map((i) => (
              <div key={i.link} className="relative group">
                <span
                  onMouseEnter={() =>
                    i.link === "Services" && setIsOpenServices(true)
                  }
                  onMouseLeave={() =>
                    i.link === "Services" && setIsOpenServices(false)
                  }
                  onClick={() => handleRedirect(i)}
                  className={`duration-300 cursor-pointer font-semibold relative inline-block ${
                    pathname.length > 1
                      ? `${isLightMode ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-blue-400'}`
                      : navBg
                      ? `${isLightMode ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-blue-400'}`
                      : `${isLightMode ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-400"}`
                  }`}
                >
                  {i.link}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full`} />
                </span>
                {i.link === "Services" && (
                  <ServicesMenu
                    isOpenServices={isOpenServices}
                    setIsOpenServices={setIsOpenServices}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* <CTAButton /> */}
          </div>
        </section>

        {/* Responsive Menu and Theme Toggle */}
        <section className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpenResponsiveMenu(!isOpenResponsiveMenu)}
            className={`relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isOpenResponsiveMenu 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50' 
                : `${isLightMode ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`
            }`}
            aria-label={isOpenResponsiveMenu ? "Close menu" : "Open menu"}
          >
            <CgClose 
              className={`absolute text-2xl transition-all duration-300 ${
                isOpenResponsiveMenu 
                  ? 'opacity-100 rotate-0 scale-100' 
                  : 'opacity-0 rotate-90 scale-50'
              }`}
            />
            <HiOutlineMenuAlt1 
              className={`absolute text-2xl transition-all duration-300 ${
                !isOpenResponsiveMenu 
                  ? 'opacity-100 rotate-0 scale-100' 
                  : 'opacity-0 -rotate-90 scale-50'
              }`}
            />
          </button>
        </section>
      </nav>

      {/* Responsive Menu */}
      <ResponsiveMenu
        isOpenResponsiveMenu={isOpenResponsiveMenu}
        setIsOpenResponsiveMenu={setIsOpenResponsiveMenu}
      />
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  accessibility: PropTypes.object.isRequired,
};