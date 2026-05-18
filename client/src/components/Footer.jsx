import React, { useState, useEffect } from "react";
import { ChevronDown, Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const footerSections = [


 
  {
    title: "Company",
    items: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about" },
      { name: "What We Do", link: "/what-we-do" },
      { name: "Case Studies", link: "/case-studies" },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Blog", link: "/blog" },
      { name: "FAQs", link: "/faqs" },
      { name: "Documentation", link: "/documentation" },
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
    name: "Mumbai",
    address:
      "Level 1, Gate Avenue, Next to DCB Bank, Andheri, Mumbai – 400053",
    phone: "+91 93721 94890",
  },
  {
    name: "Lucknow",
    address:
      "C-22 Paradise Garden, Bakshi Talaab, Sitapur Road, Near K.E. Polytechnic, Lucknow – 226201",
    phone: "+91 93721 94890",
  },
  {
    name: "Bangalore",
    address:
      "412, Sanjay Nagar, Bansu Apartment, Near Bank of Baroda, Bangalore – 560094",
    phone: "+91 93721 94890",
  },
];

const socialLinks = [
  { url: "https://in.linkedin.com/company/adiya-business-solution", label: "LinkedIn" },
  { url: "https://www.facebook.com/adiyabusinesssolution", label: "Facebook" },
  { url: "https://x.com/adiyabusiness", label: "X (Twitter)" },
  { url: "https://www.instagram.com/adiyabusinesssolution", label: "Instagram" },
];

/* ─────────────────────────────────────────────
   Motion presets
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
const Footer = () => {
  const { isLightMode } = useTheme();
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    onResize();
    onScroll();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggle = (title) =>
    isMobile && setOpenSection((p) => (p === title ? null : title));

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* shared colour tokens matching the Navbar */
  const tk = {
    surface: isLightMode ? "bg-white" : "bg-[#0e0e14]",
    surfaceAlt: isLightMode ? "bg-slate-50" : "bg-[#13131c]",
    border: isLightMode ? "border-slate-200" : "border-slate-800",
    card: isLightMode
      ? "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100"
      : "bg-slate-900/60 border-slate-800 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-900/30",
    headText: isLightMode ? "text-slate-900" : "text-slate-100",
    bodyText: isLightMode ? "text-slate-500" : "text-slate-400",
    link: isLightMode
      ? "text-slate-600 hover:text-indigo-600"
      : "text-slate-400 hover:text-indigo-400",
    iconBg: isLightMode
      ? "bg-indigo-50 text-indigo-600"
      : "bg-indigo-950/60 text-indigo-400",
  };

  return (
    <footer
      className={`relative border-t ${tk.surface} ${tk.border} transition-colors duration-300 overflow-hidden`}
    >
      {/* Top accent bar — matches Navbar progress bar palette */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />

      {/* Soft ambient glow behind the footer (dark mode only) */}
      {!isLightMode && (
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #6366f1, transparent 70%)" }}
        />
      )}

      {/* ── Scroll-to-top FAB ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center
              border shadow-lg backdrop-blur-sm transition-colors duration-300
              ${isLightMode
                ? "bg-white border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600"
                : "bg-slate-900 border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-indigo-400"
              }
            `}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-20 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Brand column ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4 flex flex-col gap-7"
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-indigo-500/40 group-hover:scale-105 transition-all duration-300">
                A
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
                Adiya
              </span>
            </Link>

            <p className={`text-sm leading-relaxed max-w-xs ${tk.bodyText}`}>
              India's premier startup accelerator — transforming visions into
              reality with expert guidance and cutting-edge solutions.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-2.5">
              {[
                {
                  href: "mailto:proposal@adiyabusinesssolution.com",
                  icon: <Mail className="w-4 h-4" />,
                  label: "Email Us",
                  value: "proposal@adiyabusinesssolution.com",
                },
                {
                  href: "tel:+919372194890",
                  icon: <Phone className="w-4 h-4" />,
                  label: "Call Us",
                  value: "+91 93721 94890",
                },
              ].map(({ href, icon, label, value }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 group ${tk.card}`}
                >
                  <span className={`p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}>
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-semibold uppercase tracking-wider mb-0.5 ${tk.bodyText}`}>
                      {label}
                    </p>
                    <p className={`text-xs font-medium truncate ${tk.headText}`}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${tk.bodyText}`}>
                Follow us
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                      isLightMode
                        ? "border-slate-200 bg-white hover:border-indigo-300"
                        : "border-slate-800 bg-slate-900 hover:border-indigo-600"
                    }`}
                    aria-label={s.label}
                  >
                    <SocialIcon
                      url={s.url}
                      style={{ height: 22, width: 22 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Nav sections ── */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {footerSections.map((section) => {
              const isOpen = openSection === section.title;
              return (
                <div key={section.title}>
                  <button
                    onClick={() => toggle(section.title)}
                    className={`w-full flex items-center justify-between mb-4 group focus:outline-none ${
                      isMobile ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <span className={`text-xs font-bold uppercase tracking-widest ${tk.headText}`}>
                      {section.title}
                    </span>
                    {isMobile && (
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={tk.bodyText}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {(!isMobile || isOpen) && (
                      <motion.ul
                        key="list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden space-y-2"
                      >
                        {section.items.map((item, idx) => (
                          <motion.li
                            key={item.name}
                            custom={idx}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            <Link
                              to={item.link}
                              className={`text-sm inline-flex items-center gap-1.5 transition-all duration-200 hover:translate-x-1 ${tk.link}`}
                            >
                              {item.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* ── Offices ── */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${tk.headText}`}>
              Our Offices
            </p>
            {offices.map((office, i) => (
              <motion.div
                key={office.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex gap-3 p-4 rounded-xl border transition-all duration-300 group ${tk.card}`}
              >
                <span className={`mt-0.5 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}>
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <div>
                  <p className={`text-xs font-semibold mb-1 ${tk.headText}`}>
                    {office.name}
                  </p>
                  <p className={`text-xs leading-relaxed ${tk.bodyText}`}>
                    {office.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-14 pt-8 border-t ${tk.border}`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <p className={`text-xs ${tk.bodyText}`}>
              © {new Date().getFullYear()} ADIYA Business Solution. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-1 text-xs">
              {[
                { name: "Terms of Use", link: "/terms" },
                { name: "Privacy Policy", link: "/privacy" },
                { name: "Cookie Notice", link: "/cookies" },
              ].map((l, i, arr) => (
                <React.Fragment key={l.name}>
                  <Link to={l.link} className={`transition-colors duration-200 ${tk.link}`}>
                    {l.name}
                  </Link>
                  {i < arr.length - 1 && (
                    <span className={`mx-1.5 ${isLightMode ? "text-slate-300" : "text-slate-700"}`}>
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <p className={`text-[11px] mt-5 text-center leading-relaxed max-w-3xl mx-auto ${tk.bodyText}`}>
            The ADIYA platform consists of the website, web platform, and mobile
            applications. By using ADIYA, you agree to our Terms & Conditions,
            Cookie Notice, and Privacy Policy. All trademarks are the property
            of their respective owners.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;