import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { faqData } from "../configs/faq";
import { useTheme } from "../context/ThemeContext";
import ReactSEO from "../components/ReactSEO";
import { Link } from "react-router-dom";
import {
  HelpCircle,
 
  Sparkles,
  ArrowRight,
  Search,
} from "lucide-react";

/* ─────────────────────────────────────────────
   FAQ categories — map your faqData topics here.
   If faqData has a `category` field, use that.
   Otherwise we show a flat list — all working.
───────────────────────────────────────────── */


/* ─────────────────────────────────────────────
   Animation helpers
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] },
  },
});

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Single accordion item
───────────────────────────────────────────── */
const FaqItem = ({ item, index, isOpen, onToggle, isLightMode }) => {
  const tk = {
    card: isLightMode
      ? isOpen
        ? "bg-white border-indigo-300 shadow-lg shadow-indigo-100"
        : "bg-white border-slate-200 hover:border-indigo-200 hover:shadow-md"
      : isOpen
      ? "bg-[#13131c] border-indigo-500/50 shadow-lg shadow-indigo-900/20"
      : "bg-[#13131c] border-slate-800 hover:border-slate-700",
    num: isLightMode ? "text-indigo-400" : "text-indigo-500",
    question: isLightMode ? "text-slate-800" : "text-slate-100",
    answer: isLightMode ? "text-slate-500" : "text-slate-400",
    chevron: isOpen
      ? "text-indigo-500"
      : isLightMode
      ? "text-slate-400"
      : "text-slate-600",
  };

  return (
    <motion.div
      layout
      className={`rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer ${tk.card}`}
      onClick={onToggle}
    >
      {/* Top gradient strip on open */}
      <div
        className={`h-px w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="px-6 py-5">
        {/* Question row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <span
              className={`text-xs font-black mt-1 flex-shrink-0 tabular-nums ${tk.num}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p
              className={`text-sm md:text-base font-semibold leading-snug ${tk.question}`}
            >
              {item.que}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={`flex-shrink-0 mt-0.5 ${tk.chevron}`}
          >
            <BsChevronDown className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div
                className={`mt-4 ml-8 text-sm md:text-base leading-relaxed ${tk.answer}`}
              >
                {item.ans}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
const Faqs = () => {
  const { isLightMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const seoProps = {
    url: "https://adiya-business-solution-main.vercel.app",
    title: "FAQs — ADIYA Business Solution",
    description:
      "Frequently asked questions about ADIYA Business Solution — services, pricing, process, and support.",
    thumbnail: "https://yourwebsite.com/thumbnail.jpg",
    themeColor: "#6366f1",
    canonicalUrl: `https://adiyabusinesssolution.com/faqs`,
    keywords: "faqs, business solutions, CRM, website development, app development",
    twitterUsername: "@adiyabusiness",
  };

  /* Filter logic — works with or without category field on faqData */
  const filtered = faqData.filter((item) => {
    const matchSearch =
      search.trim() === "" ||
      item.que.toLowerCase().includes(search.toLowerCase()) ||
      (item.ans &&
        item.ans.toString().toLowerCase().includes(search.toLowerCase()));
    const matchCat =
      activeCategory === "All" ||
      (item.category && item.category === activeCategory);
    return matchSearch && matchCat;
  });

  const tk = {
    bg: isLightMode ? "bg-slate-50" : "bg-[#0e0e14]",
    border: isLightMode ? "border-slate-200" : "border-slate-800",
    head: isLightMode ? "text-slate-900" : "text-slate-50",
    body: isLightMode ? "text-slate-500" : "text-slate-400",
    muted: isLightMode ? "text-slate-400" : "text-slate-600",
    tag: isLightMode ? "bg-indigo-50 text-indigo-600" : "bg-indigo-950/60 text-indigo-400",
    searchBg: isLightMode
      ? "bg-white border-slate-200 focus-within:border-indigo-400 shadow-sm"
      : "bg-[#13131c] border-slate-800 focus-within:border-indigo-500",
    catBtn: (sel) =>
      sel
        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/25"
        : isLightMode
        ? "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
        : "bg-[#13131c] border border-slate-800 text-slate-400 hover:border-indigo-500 hover:text-indigo-400",
    contactCard: isLightMode
      ? "bg-white border-slate-200"
      : "bg-[#13131c] border-slate-800",
  };

  return (
    <>
      <ReactSEO {...seoProps} />

      <div className={`min-h-screen ${tk.bg} transition-colors duration-300`}>

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="relative overflow-hidden px-5 sm:px-10 xl:px-20 pt-24 pb-16">
          {/* Ambient blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className={`absolute top-0 left-1/3 w-96 h-80 rounded-full blur-3xl ${
                isLightMode ? "bg-indigo-100/80" : "bg-indigo-600/8"
              }`}
            />
            <div
              className={`absolute bottom-0 right-1/3 w-72 h-72 rounded-full blur-3xl ${
                isLightMode ? "bg-violet-100/70" : "bg-violet-600/6"
              }`}
            />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <Reveal>
              <span
                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 ${tk.tag} ${tk.border}`}
              >
                <HelpCircle className="w-3 h-3" />
                Help Center
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 ${tk.head}`}
              >
                Frequently asked{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  questions
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 ${tk.body}`}>
                Everything you need to know about working with Adiya. Can't find
                what you're looking for?{" "}
                <Link
                  to="/contact"
                  className="text-indigo-500 hover:text-indigo-400 font-medium underline underline-offset-2"
                >
                  Talk to our team.
                </Link>
              </p>
            </Reveal>

           
          </div>
        </section>

   

        {/* ══════════════════════════════════════
            CATEGORY FILTER + FAQ LIST
        ══════════════════════════════════════ */}
        <section className="px-5 sm:px-10 xl:px-20 py-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          

            {/* ── FAQ accordion ── */}
            <div className="flex-1 min-w-0">
              {/* Result count */}
              <Reveal>
                <div className="flex items-center justify-between mb-6">
                  <p className={`text-xs font-medium ${tk.muted}`}>
                    Showing{" "}
                    <span className={`font-bold ${tk.head}`}>
                      {filtered.length}
                    </span>{" "}
                    {filtered.length === 1 ? "question" : "questions"}
                    {activeCategory !== "All" && ` in ${activeCategory}`}
                    {search && ` for "${search}"`}
                  </p>
                  {openIndex !== null && (
                    <button
                      onClick={() => setOpenIndex(null)}
                      className={`text-xs font-medium ${tk.body} hover:text-indigo-500 transition-colors`}
                    >
                      Collapse all
                    </button>
                  )}
                </div>
              </Reveal>

              <AnimatePresence mode="wait">
                {filtered.length > 0 ? (
                  <motion.div
                    key={activeCategory + search}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3"
                  >
                    {filtered.map((item, index) => (
                      <FaqItem
                        key={index}
                        item={item}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        isLightMode={isLightMode}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center py-20 ${tk.body}`}
                  >
                    <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p className="font-medium">No questions match your search.</p>
                    <button
                      onClick={() => {
                        setSearch("");
                        setActiveCategory("All");
                      }}
                      className="mt-3 text-xs text-indigo-500 hover:text-indigo-400 font-medium"
                    >
                      Clear filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════ */}
        <section className="px-5 sm:px-10 xl:px-20 pb-20">
          <Reveal>
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-12 text-center shadow-2xl shadow-indigo-500/30">
              <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/5 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-black/10 blur-2xl" />
              <div className="relative">
                <Sparkles className="w-7 h-7 text-white/50 mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                  Couldn't find your answer?
                </h2>
                <p className="text-white/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  Our team responds within 24 hours. Reach out and we'll sort
                  you out personally.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-white text-indigo-700 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
};

export default Faqs;