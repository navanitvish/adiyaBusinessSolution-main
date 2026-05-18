import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ChevronDown,
  ArrowRight,
  RefreshCw,
  Mail,
  CheckCircle2,
  Sparkles,
  Shield,
  Search,
  Zap,
  Users,
  BarChart2,
  FileText,
  Globe,
  Settings,
  Lock,
  Code,
  Layers,
  Lightbulb,
  Package,
  MessageSquare,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Animation helpers (identical to ContactPage)
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 26 },
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
   Data
───────────────────────────────────────────── */
const categories = [
  {
    icon: Zap,
    label: "Getting Started",
    count: 6,
    description: "Onboarding, first steps, and orientation for new clients.",
    color: "from-amber-500 to-orange-500",
    articles: ["How the engagement works", "Your onboarding checklist", "Meeting cadence & communication", "Setting up your workspace", "Intro to our team model", "What to prepare before kickoff"],
  },
  {
    icon: Layers,
    label: "Services",
    count: 8,
    description: "Deep dives into each service offering and how they work.",
    color: "from-indigo-500 to-violet-600",
    articles: ["Startup Acceleration overview", "Product Development process", "Digital Marketing approach", "Business Intelligence toolkit", "Legal & Compliance guidance", "Team Building methodology", "Service bundling options", "SLA & delivery timelines"],
  },
  {
    icon: BarChart2,
    label: "Reporting & Analytics",
    count: 5,
    description: "How we measure, report, and communicate progress.",
    color: "from-emerald-500 to-teal-600",
    articles: ["Understanding your dashboard", "Weekly progress reports", "KPI definitions & benchmarks", "OKR tracking framework", "Monthly business review format"],
  },
  {
    icon: Users,
    label: "Team & Collaboration",
    count: 5,
    description: "Working effectively with our embedded team model.",
    color: "from-violet-500 to-fuchsia-600",
    articles: ["Roles & responsibilities", "Communication protocols", "Feedback and escalation paths", "Tools we use together", "Managing scope changes"],
  },
  {
    icon: Code,
    label: "Technical Guides",
    count: 7,
    description: "Tech integrations, platform setup, and developer resources.",
    color: "from-cyan-500 to-blue-600",
    articles: ["Tech stack recommendations", "API & integration overview", "Setting up your product repo", "CI/CD pipeline basics", "Security best practices", "Data architecture guidelines", "Third-party tool integrations"],
  },
  {
    icon: FileText,
    label: "Legal & Compliance",
    count: 4,
    description: "Contracts, policies, and regulatory guidance.",
    color: "from-rose-500 to-pink-600",
    articles: ["Understanding your contract", "IP ownership explained", "Data handling obligations", "Regulatory checklist by sector"],
  },
];

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most clients are fully onboarded within 5–7 business days. This includes introductory calls, workspace setup, tool access, and your first structured planning session.",
  },
  {
    q: "Can I access documentation offline?",
    a: "Yes. Each article can be exported as a PDF from the article view. You can also request a full documentation pack from your account manager at any time.",
  },
  {
    q: "How often is the documentation updated?",
    a: "Core documentation is reviewed quarterly. Service-specific articles are updated whenever our processes or offerings change — the 'Last updated' timestamp on each article reflects this.",
  },
  {
    q: "What if I can't find what I'm looking for?",
    a: "Use the search bar at the top of any documentation page, or reach out directly to your account manager. You can also submit a documentation request and we'll create or update the relevant article.",
  },
  {
    q: "Is the documentation available in other languages?",
    a: "Currently all documentation is in English. Regional language support for Hindi is planned for a future update. Contact us if this is urgent for your team.",
  },
];

const recentArticles = [
  { label: "Startup Acceleration overview", category: "Services", time: "2 min read" },
  { label: "Understanding your dashboard", category: "Reporting", time: "4 min read" },
  { label: "Security best practices", category: "Technical", time: "6 min read" },
  { label: "IP ownership explained", category: "Legal", time: "3 min read" },
  { label: "OKR tracking framework", category: "Reporting", time: "5 min read" },
];

/* ─────────────────────────────────────────────
   FAQ Accordion Item
───────────────────────────────────────────── */
const FaqItem = ({ item, index, tk }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 0.04}>
      <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${open ? tk.formCard : tk.card}`}>
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center gap-4 px-6 py-5 text-left"
        >
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 text-xs font-black ${open ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/30" : tk.iconBg}`}>
            {String(index + 1).padStart(2, "0")}
          </div>
          <span className={`font-bold text-sm flex-1 text-left leading-snug ${tk.head}`}>{item.q}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className={`flex-shrink-0 ${tk.muted}`}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className={`px-6 pb-6 border-t ${tk.border} pt-4`}>
                <p className={`text-sm leading-relaxed ${tk.body}`}>{item.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
};

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
const DocsPage = () => {
  const { isLightMode } = useTheme();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const tk = {
    bg: isLightMode ? "bg-slate-50" : "bg-[#0e0e14]",
    border: isLightMode ? "border-slate-200" : "border-slate-800",
    head: isLightMode ? "text-slate-900" : "text-slate-50",
    body: isLightMode ? "text-slate-500" : "text-slate-400",
    muted: isLightMode ? "text-slate-400" : "text-slate-600",
    card: isLightMode ? "bg-white border-slate-200" : "bg-[#13131c] border-slate-800",
    formCard: isLightMode
      ? "bg-white border-slate-200 shadow-xl shadow-slate-100"
      : "bg-[#13131c] border-slate-800 shadow-xl shadow-black/30",
    input: isLightMode
      ? "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-400"
      : "bg-slate-900/60 border-slate-700 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500",
    tag: isLightMode ? "bg-indigo-50 text-indigo-600" : "bg-indigo-950/60 text-indigo-400",
    iconBg: isLightMode ? "bg-indigo-50 text-indigo-600" : "bg-indigo-950/60 text-indigo-400",
    officeCard: isLightMode
      ? "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100"
      : "bg-[#13131c] border-slate-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-900/20",
    searchBg: isLightMode
      ? "bg-white border-slate-200 shadow-lg shadow-slate-100"
      : "bg-[#13131c] border-slate-700 shadow-lg shadow-black/30",
  };

  /* filter articles across all categories by search */
  const filtered = search.trim().length > 1
    ? categories.flatMap((c) =>
        c.articles
          .filter((a) => a.toLowerCase().includes(search.toLowerCase()))
          .map((a) => ({ article: a, category: c.label, icon: c.icon, color: c.color }))
      )
    : [];

  const lastUpdated = "18 May 2025";

  return (
    <div className={`min-h-screen ${tk.bg} transition-colors duration-300`}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden px-5 sm:px-10 xl:px-20 pt-24 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className={`absolute top-0 right-1/4 w-[500px] h-80 rounded-full blur-3xl ${isLightMode ? "bg-indigo-100/80" : "bg-indigo-600/8"}`} />
          <div className={`absolute bottom-0 left-1/4 w-80 h-72 rounded-full blur-3xl ${isLightMode ? "bg-violet-100/70" : "bg-violet-600/6"}`} />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 ${tk.tag} ${tk.border}`}>
              <BookOpen className="w-3 h-3" />
              Documentation
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 ${tk.head}`}>
              Everything you need{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                to know
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8 ${tk.body}`}>
              Guides, references, and how-tos for working with Adiya Business
              Solution — from onboarding to delivery and beyond.
            </p>
          </Reveal>

          {/* ── Search bar ── */}
          <Reveal delay={0.3}>
            <div className="relative max-w-lg mx-auto">
              <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-200 ${tk.searchBg}`}>
                <Search className={`w-4 h-4 flex-shrink-0 ${tk.muted}`} />
                <input
                  type="text"
                  placeholder="Search documentation…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`flex-1 text-sm bg-transparent outline-none ${isLightMode ? "text-slate-900 placeholder:text-slate-400" : "text-slate-100 placeholder:text-slate-600"}`}
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className={`text-xs font-semibold px-2 py-1 rounded-lg ${tk.iconBg}`}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Search results dropdown */}
              <AnimatePresence>
                {filtered.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full mt-2 w-full rounded-2xl border overflow-hidden z-30 ${isLightMode ? "bg-white border-slate-200 shadow-xl shadow-slate-100" : "bg-[#13131c] border-slate-800 shadow-xl shadow-black/40"}`}
                  >
                    {filtered.slice(0, 6).map(({ article, category, color }, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b last:border-0 transition-colors duration-150 ${isLightMode ? "border-slate-100 hover:bg-indigo-50" : "border-slate-800 hover:bg-indigo-950/40"}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${color} flex-shrink-0`} />
                        <span className={`text-sm flex-1 text-left ${tk.head}`}>{article}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tk.tag}`}>{category}</span>
                      </div>
                    ))}
                    {filtered.length > 6 && (
                      <div className={`px-4 py-2.5 text-xs font-semibold ${tk.muted}`}>
                        +{filtered.length - 6} more results
                      </div>
                    )}
                  </motion.div>
                )}
                {search.trim().length > 1 && filtered.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`absolute top-full mt-2 w-full rounded-2xl border px-5 py-4 z-30 ${isLightMode ? "bg-white border-slate-200" : "bg-[#13131c] border-slate-800"}`}
                  >
                    <p className={`text-sm ${tk.body}`}>No articles found for "<strong className={tk.head}>{search}</strong>"</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          QUICK STRIP
      ══════════════════════════════════════ */}
      <section className={`border-y ${tk.border} px-5 sm:px-10 xl:px-20 py-8`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, label: "Total Articles", value: `${categories.reduce((s, c) => s + c.count, 0)} articles across 6 categories` },
            { icon: RefreshCw, label: "Last Updated", value: lastUpdated },
            { icon: Mail, label: "Can't find it?", value: "proposal@adiyabusinesssolution.com", href: "mailto:proposal@adiyabusinesssolution.com" },
          ].map(({ icon: Icon, label, value, href }) => {
            const Wrap = href ? "a" : "div";
            return (
              <Reveal key={label}>
                <Wrap
                  href={href}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group ${tk.card} ${href ? "hover:border-indigo-400 cursor-pointer" : ""}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${tk.muted}`}>{label}</p>
                    <p className={`text-xs font-semibold truncate ${tk.head}`}>{value}</p>
                  </div>
                </Wrap>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATEGORY CARDS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-10 xl:px-20 py-14">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${tk.muted}`}>Browse by Category</p>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${tk.head}`}>
                What are you{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  looking for?
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.label;
              return (
                <Reveal key={cat.label} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer ${isActive ? tk.formCard : tk.officeCard}`}
                    onClick={() => setActiveCategory(isActive ? null : cat.label)}
                  >
                    {/* Card header */}
                    <div className="p-6 flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${tk.tag}`}>
                          {cat.count} articles
                        </span>
                      </div>
                      <div>
                        <h3 className={`font-bold text-sm mb-1.5 ${tk.head}`}>{cat.label}</h3>
                        <p className={`text-xs leading-relaxed ${tk.body}`}>{cat.description}</p>
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-semibold ${isActive ? "text-indigo-500" : tk.muted}`}>
                        {isActive ? "Hide articles" : "Show articles"}
                        <motion.span animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronRight className="w-3 h-3" />
                        </motion.span>
                      </div>
                    </div>

                    {/* Article list */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className={`border-t ${tk.border} px-6 py-4 flex flex-col gap-2`}>
                            {cat.articles.map((article) => (
                              <div
                                key={article}
                                className={`flex items-center gap-2.5 py-1.5 group/item`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${cat.color} flex-shrink-0`} />
                                <span className={`text-xs flex-1 group-hover/item:text-indigo-500 transition-colors duration-150 ${tk.body}`}>
                                  {article}
                                </span>
                                <ArrowRight className={`w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 text-indigo-500`} />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ + SIDEBAR
      ══════════════════════════════════════ */}
      <section className={`border-t ${tk.border} px-5 sm:px-10 xl:px-20 py-16`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── FAQ Accordion ── */}
          <div className="lg:col-span-3">
            <Reveal className="mb-8">
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${tk.muted}`}>FAQ</p>
                <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${tk.head}`}>
                  Common{" "}
                  <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    questions
                  </span>
                </h2>
              </div>
            </Reveal>
            <div className="flex flex-col gap-4">
              {faqs.map((item, i) => (
                <FaqItem key={i} item={item} index={i} tk={tk} />
              ))}
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Recently updated */}
            <Reveal delay={0.1}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Recently Updated</h3>
                <div className="flex flex-col gap-2">
                  {recentArticles.map(({ label, category, time }, i) => (
                    <motion.div
                      key={label}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl border cursor-pointer transition-all duration-200 group ${tk.officeCard}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold truncate ${tk.head}`}>{label}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${tk.tag}`}>{category}</span>
                          <span className={`text-[10px] flex items-center gap-1 ${tk.muted}`}>
                            <Clock className="w-2.5 h-2.5" />
                            {time}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-indigo-500`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Quick links */}
            <Reveal delay={0.15}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Quick Links</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: Lightbulb, label: "Getting Started guide", to: "#" },
                    { icon: Package, label: "Service catalogue", to: "#" },
                    { icon: MessageSquare, label: "Contact your account manager", to: "/contact" },
                    { icon: Star, label: "Submit a docs request", to: "/contact" },
                  ].map(({ icon: Icon, label, to }) => (
                    <Link
                      key={label}
                      to={to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 group ${tk.officeCard}`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}>
                        <Icon className="w-3 h-3" />
                      </div>
                      <span className={`text-xs font-semibold flex-1 ${tk.head}`}>{label}</span>
                      <ArrowRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 ${tk.muted}`} />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6">
                <div className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 blur-xl" />
                <Sparkles className="w-6 h-6 text-white/50 mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">Something missing?</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Request a new article or suggest an improvement — we update docs
                  based on client feedback.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Submit a request <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Reveal>

            {/* Related legal pages */}
            <Reveal delay={0.25}>
              <div className={`rounded-2xl border p-5 flex flex-col gap-2 ${tk.card}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${tk.muted}`}>Legal & Policies</p>
                {[
                  { to: "/terms", icon: FileText, label: "Terms & Conditions" },
                  { to: "/privacy", icon: Lock, label: "Privacy Policy" },
                  { to: "/cookies", icon: Shield, label: "Cookie Notice" },
                  { to: "/risks", icon: Globe, label: "Key Risk Factors" },
                ].map(({ to, icon: Icon, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 group ${tk.officeCard}`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}>
                      <Icon className="w-3 h-3" />
                    </div>
                    <span className={`text-xs font-semibold flex-1 ${tk.head}`}>{label}</span>
                    <ArrowRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 ${tk.muted}`} />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM BANNER
      ══════════════════════════════════════ */}
      <section className={`border-t ${tk.border} px-5 sm:px-10 xl:px-20 py-12`}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className={`rounded-3xl border p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 ${tk.formCard}`}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className={`text-lg font-extrabold tracking-tight mb-1 ${tk.head}`}>
                  Still have questions?
                </h2>
                <p className={`text-sm leading-relaxed ${tk.body}`}>
                  Our team is available Mon–Sat, 10 AM–7 PM IST. Reach out and
                  we'll get back to you within 24 hours — no bots, just people.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
                >
                  Talk to us <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="mailto:proposal@adiyabusinesssolution.com"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border transition-all duration-200 ${tk.officeCard}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className={tk.head}>Email us</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;