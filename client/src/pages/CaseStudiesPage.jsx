import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Rocket,
  Globe,
  BarChart3,
  ShieldCheck,
  Star,
  Quote,
  Filter,
  ExternalLink,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const categories = ["All", "Startup", "Marketing", "Technology", "Legal", "Growth"];

const caseStudies = [
  {
    id: 1,
    category: "Startup",
    tag: "Startup Acceleration",
    company: "NovaPay",
    industry: "Fintech · Mumbai",
    headline: "From idea to ₹2Cr seed round in 5 months",
    summary:
      "NovaPay came to us with a payment reconciliation concept and no product. We embedded a founding team, built an MVP, and landed their first 12 enterprise pilots — all before raising.",
    metrics: [
      { label: "Raised", value: "₹2Cr" },
      { label: "Time to MVP", value: "11 wks" },
      { label: "Pilot clients", value: "12" },
    ],
    accent: "from-indigo-500 to-violet-600",
    glow: isLight => isLight ? "shadow-indigo-100" : "shadow-indigo-900/30",
    hoverBorder: isLight => isLight ? "hover:border-indigo-300" : "hover:border-indigo-500/50",
    icon: Rocket,
  },
  {
    id: 2,
    category: "Growth",
    tag: "Growth & Analytics",
    company: "GreenLeaf Farms",
    industry: "Agritech · Lucknow",
    headline: "340% revenue growth in 18 months",
    summary:
      "A B2B agritech platform was growing slowly despite a great product. We rebuilt their go-to-market motion, redesigned their pricing tiers, and stood up a performance marketing engine.",
    metrics: [
      { label: "Revenue growth", value: "340%" },
      { label: "CAC reduction", value: "58%" },
      { label: "NPS score", value: "71" },
    ],
    accent: "from-violet-500 to-fuchsia-600",
    glow: isLight => isLight ? "shadow-violet-100" : "shadow-violet-900/30",
    hoverBorder: isLight => isLight ? "hover:border-violet-300" : "hover:border-violet-500/50",
    icon: TrendingUp,
  },
  {
    id: 3,
    category: "Technology",
    tag: "Product Development",
    company: "MedTrack",
    industry: "HealthTech · Bangalore",
    headline: "Zero to 80,000 active users in 9 months",
    summary:
      "A solo founder with a strong clinical background needed a technical co-founder. We became that team — designing, building, and deploying a HIPAA-aligned patient tracking platform.",
    metrics: [
      { label: "Active users", value: "80K" },
      { label: "Uptime", value: "99.97%" },
      { label: "Hospitals onboarded", value: "34" },
    ],
    accent: "from-fuchsia-500 to-pink-600",
    glow: isLight => isLight ? "shadow-fuchsia-100" : "shadow-fuchsia-900/30",
    hoverBorder: isLight => isLight ? "hover:border-fuchsia-300" : "hover:border-fuchsia-500/50",
    icon: BarChart3,
  },
  {
    id: 4,
    category: "Marketing",
    tag: "Digital Marketing",
    company: "StyleSphere",
    industry: "D2C Fashion · Delhi",
    headline: "4.2x ROAS on paid media within 60 days",
    summary:
      "A D2C fashion brand was burning budget on ads with no system. We audited their funnel, rebuilt their creative strategy, and deployed a full-funnel Meta + Google campaign structure.",
    metrics: [
      { label: "ROAS", value: "4.2×" },
      { label: "Organic traffic", value: "+210%" },
      { label: "Email CVR", value: "6.8%" },
    ],
    accent: "from-pink-500 to-rose-600",
    glow: isLight => isLight ? "shadow-pink-100" : "shadow-pink-900/30",
    hoverBorder: isLight => isLight ? "hover:border-pink-300" : "hover:border-pink-500/50",
    icon: Globe,
  },
  {
    id: 5,
    category: "Legal",
    tag: "Legal & Compliance",
    company: "TrustLayer",
    industry: "LegalTech · Pune",
    headline: "Full regulatory clearance in 6 weeks",
    summary:
      "TrustLayer needed to launch a financial advisory product fast. We handled company structuring, RBI compliance mapping, and IP filings — letting them ship while staying watertight.",
    metrics: [
      { label: "Filings completed", value: "14" },
      { label: "Time to clearance", value: "6 wks" },
      { label: "IP assets secured", value: "3" },
    ],
    accent: "from-sky-500 to-indigo-600",
    glow: isLight => isLight ? "shadow-sky-100" : "shadow-sky-900/30",
    hoverBorder: isLight => isLight ? "hover:border-sky-300" : "hover:border-sky-500/50",
    icon: ShieldCheck,
  },
  {
    id: 6,
    category: "Startup",
    tag: "Team Building",
    company: "Skillr",
    industry: "EdTech · Hyderabad",
    headline: "Scaled from 3 to 40 people in 12 months",
    summary:
      "Post-seed, Skillr needed to hire fast without breaking culture. We designed their hiring process, sourced their first engineering and ops hires, and built the HR stack from scratch.",
    metrics: [
      { label: "Hires placed", value: "37" },
      { label: "Time-to-hire", value: "18 days" },
      { label: "Retention @ 12m", value: "92%" },
    ],
    accent: "from-indigo-400 to-violet-500",
    glow: isLight => isLight ? "shadow-indigo-100" : "shadow-indigo-900/30",
    hoverBorder: isLight => isLight ? "hover:border-indigo-300" : "hover:border-indigo-500/50",
    icon: Users,
  },
];

const testimonials = [
  {
    quote:
      "Adiya didn't feel like a vendor — they felt like co-founders. The speed and quality of execution was unlike anything I'd experienced at previous startups.",
    name: "Priya Mehta",
    role: "CEO, NovaPay",
    initials: "PM",
    accent: "from-indigo-500 to-violet-600",
  },
  {
    quote:
      "We were stuck at the same revenue number for two years. Three months with Adiya's growth team and we broke through. The data-driven rigour is real.",
    name: "Arjun Kapoor",
    role: "Founder, GreenLeaf Farms",
    initials: "AK",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    quote:
      "I came in as a solo technical founder who needed everything else. Adiya built the team, handled compliance, and kept me focused on product. Game changer.",
    name: "Dr. Sneha Rao",
    role: "Founder, MedTrack",
    initials: "SR",
    accent: "from-fuchsia-500 to-pink-600",
  },
];

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] } },
});

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
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
   Page
───────────────────────────────────────────── */
const CaseStudiesPage = () => {
  const { isLightMode } = useTheme();
  const [active, setActive] = useState("All");

  const tk = {
    bg: isLightMode ? "bg-slate-50" : "bg-[#0e0e14]",
    surface: isLightMode ? "bg-white" : "bg-[#13131c]",
    border: isLightMode ? "border-slate-200" : "border-slate-800",
    head: isLightMode ? "text-slate-900" : "text-slate-50",
    body: isLightMode ? "text-slate-500" : "text-slate-400",
    muted: isLightMode ? "text-slate-400" : "text-slate-600",
    card: isLightMode ? "bg-white border-slate-200" : "bg-[#13131c] border-slate-800",
    filterBtn: (sel) =>
      sel
        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/30"
        : isLightMode
        ? "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
        : "bg-slate-900 border border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400",
    tag: isLightMode ? "bg-indigo-50 text-indigo-600" : "bg-indigo-950/60 text-indigo-400",
    metricBg: isLightMode ? "bg-slate-50 border-slate-100" : "bg-slate-800/60 border-slate-700/50",
  };

  const filtered =
    active === "All" ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <div className={`min-h-screen ${tk.bg} transition-colors duration-300`}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden px-5 sm:px-10 xl:px-20 pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0">
          {isLightMode ? (
            <>
              <div className="absolute top-0 right-1/3 w-96 h-80 rounded-full bg-indigo-100/70 blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-violet-100/60 blur-3xl" />
            </>
          ) : (
            <>
              <div className="absolute top-0 right-1/3 w-96 h-80 rounded-full bg-indigo-600/8 blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-violet-600/8 blur-3xl" />
            </>
          )}
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 ${tk.tag} ${tk.border}`}>
              <Star className="w-3 h-3" />
              Case Studies
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 ${tk.head}`}>
              Real founders.{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Real results.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-lg leading-relaxed max-w-2xl mx-auto mb-10 ${tk.body}`}>
              Every engagement is different. Here's a look at how we've helped
              founders across India build, grow, and scale their companies.
            </p>
          </Reveal>

          {/* Filter pills */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${tk.filterBtn(active === cat)}`}
                >
                  {cat === "All" && <Filter className="w-3 h-3" />}
                  {cat}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CASE STUDY CARDS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-10 xl:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map(({ id, tag, company, industry, headline, summary, metrics, accent, glow, hoverBorder, icon: Icon }) => (
                <motion.article
                  key={id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative flex flex-col rounded-2xl border overflow-hidden shadow-lg transition-all duration-300 ${tk.card} ${hoverBorder(isLightMode)} ${glow(isLightMode)}`}
                >
                  {/* Card top gradient strip */}
                  <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

                  <div className="flex flex-col gap-5 p-7 flex-1">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${tk.tag}`}>
                        {tag}
                      </span>
                    </div>

                    {/* Company */}
                    <div>
                      <p className={`text-xs font-medium mb-0.5 ${tk.body}`}>{industry}</p>
                      <h2 className={`text-xl font-extrabold tracking-tight mb-1 ${tk.head}`}>{company}</h2>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${accent} bg-clip-text text-transparent leading-snug`}>
                        {headline}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className={`text-sm leading-relaxed ${tk.body}`}>{summary}</p>

                    {/* Metrics */}
                    <div className={`grid grid-cols-3 gap-2 p-4 rounded-xl border mt-auto ${tk.metricBg}`}>
                      {metrics.map(({ label, value }) => (
                        <div key={label} className="text-center">
                          <p className={`text-lg font-extrabold tracking-tight bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
                            {value}
                          </p>
                          <p className={`text-[10px] font-medium leading-tight mt-0.5 ${tk.body}`}>{label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Read more link */}
                    <button className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 bg-gradient-to-r ${accent} bg-clip-text text-transparent group-hover:gap-2.5`}>
                      Read full story
                      <ExternalLink className={`w-3 h-3 flex-shrink-0 bg-gradient-to-r ${accent} bg-clip-text text-transparent`} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className={`text-center py-24 ${tk.body}`}>
              <p className="text-lg font-medium">No case studies in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className={`border-t ${tk.border} px-5 sm:px-10 xl:px-20 py-20`}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-14 text-center">
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tk.muted}`}>Founder Voices</p>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${tk.head}`}>
                What our founders{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  actually say
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, initials, accent }, i) => (
              <Reveal key={name} delay={i * 0.1}>
                <div className={`relative flex flex-col gap-5 p-7 rounded-2xl border h-full ${tk.card}`}>
                  {/* Quote icon */}
                  <Quote className={`w-8 h-8 opacity-20 bg-gradient-to-br ${accent} fill-current text-indigo-500`} />

                  <p className={`text-sm leading-relaxed flex-1 italic ${tk.body}`}>"{quote}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t ${tk.border}">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {initials}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${tk.head}`}>{name}</p>
                      <p className={`text-xs ${tk.body}`}>{role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-10 xl:px-20 py-20">
        <Reveal>
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-12 text-center shadow-2xl shadow-indigo-500/30">
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/5 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-black/10 blur-2xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
                Your story could be next
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Let's build your case study together
              </h2>
              <p className="text-white/75 text-base max-w-md mx-auto mb-8 leading-relaxed">
                Whether you're pre-product or post-revenue, we have a playbook
                for your next stage of growth.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-white text-indigo-700 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default CaseStudiesPage;