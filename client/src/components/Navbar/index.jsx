import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import ServicesMenu from "./ServicesMenu";
import ResponsiveMenu from "./ResponsiveMenu";
import { useTheme } from "../../context/ThemeContext";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { navData } from "../../configs/navData";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setIsOpenRequestProposal } from "../../store/appSlice";

const Navbar = ({ accessibility }) => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [navBg, setNavBg] = useState(false);
  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { isLightMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 56);
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((window.scrollY / windowHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleRedirect = (i) =>
    i.link !== "Services" ? navigate(`${i.to}`) : null;

  const isScrolled = pathname.length > 1 || navBg;

  /* ── Theme Toggle ── */
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative w-[52px] h-7 rounded-full transition-all duration-500 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
        ${isLightMode
          ? "bg-slate-200 hover:bg-slate-300"
          : "bg-slate-700 hover:bg-slate-600"
        }
      `}
    >
      {/* Pill knob */}
      <span
        className={`
          absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center
          shadow-md transition-all duration-500 ease-in-out
          ${isLightMode
            ? "translate-x-[24px] bg-white"
            : "translate-x-0.5 bg-slate-900"
          }
        `}
      >
        {isLightMode ? (
          <BsSun className="text-amber-500 text-xs" />
        ) : (
          <BsMoonStars className="text-indigo-400 text-xs" />
        )}
      </span>
    </button>
  );

  /* ── Desktop Nav Link ── */
  const NavLink = ({ item }) => {
    const isActive = pathname === item.to;
    return (
      <div
        className="relative group"
        onMouseEnter={() => item.link === "Services" && setIsOpenServices(true)}
        onMouseLeave={() => item.link === "Services" && setIsOpenServices(false)}
      >
        <button
          onClick={() => handleRedirect(item)}
          className={`
            relative px-1 py-0.5 font-medium tracking-wide transition-colors duration-200
            focus:outline-none focus-visible:underline
            ${accessibility.biggerText ? "text-lg" : "text-[0.9rem]"}
            ${isScrolled
              ? isLightMode
                ? "text-slate-700 hover:text-indigo-600"
                : "text-slate-300 hover:text-indigo-300"
              : isLightMode
              ? "text-slate-900 hover:text-indigo-600"
              : "text-slate-100 hover:text-indigo-300"
            }
            ${isActive ? (isLightMode ? "text-indigo-600" : "text-indigo-300") : ""}
          `}
        >
          {item.link}
          {/* Active / hover underline */}
          <span
            className={`
              absolute -bottom-0.5 left-0 h-px rounded-full transition-all duration-300
              bg-gradient-to-r from-indigo-500 to-violet-500
              ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
            `}
          />
        </button>

        {item.link === "Services" && (
          <ServicesMenu
            isOpenServices={isOpenServices}
            setIsOpenServices={setIsOpenServices}
          />
        )}
      </div>
    );
  };

  /* ── Hamburger Button ── */
  const HamburgerButton = () => (
    <button
      onClick={() => setIsOpenResponsiveMenu(!isOpenResponsiveMenu)}
      aria-label={isOpenResponsiveMenu ? "Close menu" : "Open menu"}
      className={`
        relative w-9 h-9 rounded-lg flex items-center justify-center
        transition-all duration-300 focus:outline-none
        ${isOpenResponsiveMenu
          ? "bg-indigo-600 text-white"
          : isLightMode
          ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
          : "bg-slate-800 text-slate-200 hover:bg-slate-700"
        }
      `}
    >
      <CgClose
        className={`absolute text-xl transition-all duration-300 ${
          isOpenResponsiveMenu
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50"
        }`}
      />
      <HiOutlineMenuAlt1
        className={`absolute text-xl transition-all duration-300 ${
          !isOpenResponsiveMenu
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        }`}
      />
    </button>
  );

  return (
    <>
      {/* ═══════════════════ NAV ═══════════════════ */}
      <nav
        id="navbar"
        className={`
          px-5 sm:px-10 xl:px-20 h-16 w-full z-50 top-0
          flex items-center justify-between
          transition-all duration-300
          ${pathname.length > 1
            ? `sticky shadow-sm border-b
               ${isLightMode
                 ? "bg-white/90 text-slate-900 border-slate-200"
                 : "bg-[#0e0e14]/90 text-white border-slate-800"
               }
               backdrop-blur-xl`
            : navBg
            ? `fixed shadow-sm border-b
               ${isLightMode
                 ? "bg-white/90 text-slate-900 border-slate-200"
                 : "bg-[#0e0e14]/90 text-white border-slate-800"
               }
               backdrop-blur-xl`
            : `sticky lg:fixed bg-transparent backdrop-blur-none shadow-none
               ${isLightMode ? "text-slate-900" : "text-white"}`
          }
        `}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
        >
          {/* Logo mark */}
          <div
            className={`
              w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-lg
              bg-gradient-to-br from-indigo-500 to-violet-600
              shadow-md group-hover:shadow-lg group-hover:shadow-indigo-500/40
              transition-all duration-300 group-hover:scale-105
            `}
          >
            A
          </div>

          {/* Wordmark */}
          <span
            className={`
              font-bold text-xl tracking-tight
              bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent
              transition-all duration-300 group-hover:from-indigo-400 group-hover:to-violet-500
            `}
          >
            Adiya
          </span>
        </Link>

        {/* ── Desktop links + controls ── */}
        <section className="hidden lg:flex items-center gap-8">
          {/* Nav links */}
          <nav className="flex items-center gap-7">
            {navData.map((i) => (
              <NavLink key={i.link} item={i} />
            ))}
          </nav>

          {/* Divider */}
          <div
            className={`h-5 w-px ${isLightMode ? "bg-slate-200" : "bg-slate-700"}`}
          />

          {/* Theme toggle */}
          <ThemeToggle />

          {/* CTA */}
          <button
             onClick={() => dispatch(setIsOpenRequestProposal(true))}
            className="
              px-5 py-2 rounded-lg text-sm font-semibold text-white
              bg-gradient-to-r from-indigo-500 to-violet-600
              hover:from-indigo-400 hover:to-violet-500
              shadow-md hover:shadow-lg hover:shadow-indigo-500/40
              transition-all duration-300 hover:-translate-y-px
              focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
            "
          >
            Get Started
          </button>
        </section>

        {/* ── Mobile controls ── */}
        <section className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <HamburgerButton />
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