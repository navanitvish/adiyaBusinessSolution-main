import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import ServicesMenu from "./ServicesMenu";
import ResponsiveMenu from "./ResponsiveMenu";
import { useTheme } from "../../context/ThemeContext";
import { BsSun, BsMoonStars } from "react-icons/bs";

export const navData = [
  {
    link: "Home",
    to: "/",
  },
  {
    link: "About",
    to: "/about",
  },
  {
    link: "Services",
  },
  {
    link: "Faqs",
    to: "/faqs",
  },
  // {
  //   link: "Contact",
  //   to: "/contact",
  // },
];

const Navbar = ({ accessibility }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [navBg, setNavBg] = useState(false);
  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);

  const { isLightMode, toggleTheme } = useTheme();

  // Detect Scroll to update navbar background
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 56 ? setNavBg(true) : setNavBg(false);
    };
    window.addEventListener("scroll", handleScroll);
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
      className="relative bg-[#4350ff] border-2 border-white w-12 h-6 xl:w-18 xl:h-9 md:w-16 md:h-9 rounded-full"
    >
      <span
        className={`absolute -top-0 w-5 h-5 xl:w-8 xl:h-8 md:w-8 md:h-8 bg-white rounded-full grid place-items-center text-slate-700 text-xl duration-200 ${
          isLightMode ? "right-[25px] xl:right-[32px] md:right-[32px]" : "right-0"
        }`}
      >
        <BsSun
          className={`absolute duration-200 ${
            !isLightMode ? "invisible opacity-0" : "visible opacity-100"
          }`}
        />
        <BsMoonStars
          className={`absolute duration-200 ${
            isLightMode ? "invisible opacity-0" : "visible opacity-100"
          }`}
        />
      </span>
    </button>
  );

  return (
    <>
      <nav
        id="navbar"
        className={`px-5  xl:px-20 sm:px-10 h-14 w-full z-10 top-0 flex items-center justify-between ${
          pathname.length > 1
            ? ` bg-[#5250ff] sticky text-white shadow `
            : navBg
            ? `  bg-[#5250ff] fixed shadow p-4 ${
                isLightMode ? "text-white" : "text-white"
              }`
            : `bg-[#5250ff] lg:bg-transparent shadow lg:shadow-none sticky lg:fixed ${
                isLightMode ? "text-black" : "text-white"
              }`
        }`}
      >
        {/* Logo Section */}
        <section onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className=" text-2xl md:text-3xl xl:text-3xl font-semibold">
            <Link to="/">
              ADIYA 
              
            </Link>
          </h1>
        </section>

        {/* Navigation Links and Theme Toggle for larger screens */}
        <section
          className={`relative lg:block hidden xl:flex items-center justify-end flex-grow ${
            accessibility.biggerText ? "text-xl" : "text-lg"
          }`}
        >
          <div className="flex items-center space-x-5">
            {navData.map((i) => (
              <div key={i.link} className="relative  ">
                <span
                  onMouseEnter={() =>
                    i.link === "Services" && setIsOpenServices(true)
                  }
                  onMouseLeave={() =>
                    i.link === "Services" && setIsOpenServices(false)
                  }
                  onClick={() => handleRedirect(i)}
                  className={`duration-200 cursor-pointer font-semibold ${
                    pathname.length > 1
                      ? `hover:text-black`
                      : navBg
                      ? `hover:text-black`
                      : ` ${
                          isLightMode ? "hover:text-black" : "hover:text-blue-500"
                        }`
                  }`}
                >
                  {i.link}
                </span>
                {i.link === "Services" && (
                  <ServicesMenu
                    isOpenServices={isOpenServices}
                    setIsOpenServices={setIsOpenServices}
                  />
                )}
              </div>
            ))}
            <ThemeToggle />
            
          </div>
        </section>

        {/* Responsive Menu and Theme Toggle */}
        <section className="flex items-center xl:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpenResponsiveMenu(!isOpenResponsiveMenu)}
            className="ml-4 text-2xl md:text-4xl cursor-pointer"
          >
            {isOpenResponsiveMenu ? <CgClose /> : <HiOutlineMenuAlt1 />}
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