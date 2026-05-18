import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  Rocket,
  BarChart3,
  Code2,
  Megaphone,
  ShieldCheck,
  Users,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const services = [
  {
    icon: Rocket,
    tag: "Foundations",
    title: "Startup Acceleration",
    desc: "From ideation to MVP — we compress your runway, validate your market, and give you the infrastructure to scale fast without breaking.",
    bullets: ["Market validation frameworks", "Investor pitch readiness", "Go-to-market strategy"],
    accent: "from-indigo-500 to-violet-600",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: Code2,
    tag: "Engineering",
    title: "Product Development",
    desc: "Full-stack engineering teams embedded inside your vision. We build scalable, maintainable products that your users will actually love.",
    bullets: ["Web & mobile applications", "API design & integrations", "Cloud-native architecture"],
    accent: "from-violet-500 to-fuchsia-600",
    glow: "shadow-violet-500/20",
  },
  {
    icon: BarChart3,
    tag: "Growth",
    title: "Business Intelligence",
    desc: "Data is only power when you act on it. We instrument, analyse, and surface the insights that drive compounding revenue growth.",
    bullets: ["KPI dashboards & analytics", "Funnel optimisation", "Revenue forecasting"],
    accent: "from-fuchsia-500 to-pink-600",
    glow: "shadow-fuchsia-500/20",
  },
  {
    icon: Megaphone,
    tag: "Visibility",
    title: "Digital Marketing",
    desc: "Demand generation with a precision edge — SEO, paid performance, content strategy, and brand storytelling that converts.",
    bullets: ["SEO & content strategy", "Paid media management", "Social & influencer"],
    accent: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/20",
  },
  {
    icon: ShieldCheck,
    tag: "Compliance",
    title: "Legal & Regulatory",
    desc: "Navigate India's regulatory landscape without the headaches. From incorporation to IP protection — we keep you covered.",
    bullets: ["Company registration & GST", "IP & trademark filing", "Compliance audits"],
    accent: "from-sky-500 to-indigo-600",
    glow: "shadow-sky-500/20",
  },
  {
    icon: Users,
    tag: "Talent",
    title: "Team Building",
    desc: "The right people, at the right time. We help you hire, onboard, and retain the talent that turns startups into category leaders.",
    bullets: ["CXO & founding team search", "HR process design", "Culture & retention"],
    accent: "from-indigo-400 to-violet-500",
    glow: "shadow-indigo-400/20",
  },
];

const stats = [
  { value: "200+", label: "Startups Accelerated", icon: Rocket },
  { value: "₹50Cr+", label: "Funding Facilitated", icon: TrendingUp },
  { value: "18", label: "Cities Across India", icon: Globe },
  { value: "94%", label: "Client Retention Rate", icon: Sparkles },
];

const process = [
  { step: "01", title: "Discovery", desc: "A deep-dive into your business, market, and goals to map the exact levers we'll pull." },
  { step: "02", title: "Strategy", desc: "We design a tailored roadmap with clear milestones, resource plans, and risk mitigation." },
  { step: "03", title: "Execution", desc: "Our embedded teams move fast — shipping, iterating, and learning in short cycles." },
  { step: "04", title: "Scale", desc: "We compound your wins — expanding into new markets, channels, and revenue streams." },
];

/* ─────────────────────────────────────────────
   Animation helpers
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] } },
});

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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
const ServicesPage = () => {
  const { isLightMode } = useTheme();

  const tk = {
    bg: isLightMode ? "bg-slate-50" : "bg-[#0e0e14]",
    surface: isLightMode ? "bg-white" : "bg-[#13131c]",
    border: isLightMode ? "border-slate-200" : "border-slate-800",
    head: isLightMode ? "text-slate-900" : "text-slate-50",
    body: isLightMode ? "text-slate-500" : "text-slate-400",
    muted: isLightMode ? "text-slate-400" : "text-slate-600",
    card: isLightMode
      ? "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/60"
      : "bg-[#13131c] border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-900/30",
    statCard: isLightMode ? "bg-white border-slate-200" : "bg-[#13131c] border-slate-800",
    processCard: isLightMode ? "bg-white border-slate-200" : "bg-[#13131c] border-slate-800",
    tag: isLightMode ? "bg-indigo-50 text-indigo-600" : "bg-indigo-950/60 text-indigo-400",
    bullet: isLightMode ? "text-slate-600" : "text-slate-400",
    bulletDot: isLightMode ? "bg-indigo-400" : "bg-indigo-500",
  };

  return (
    <div className={`min-h-screen ${tk.bg} transition-colors duration-300`}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden px-5 sm:px-10 xl:px-20 pt-24 pb-20">
        {/* Background mesh */}
        <div className="pointer-events-none absolute inset-0">
          {!isLightMode && (
            <>
              <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl" />
            </>
          )}
          {isLightMode && (
            <>
              <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-indigo-100/80 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-100/80 blur-3xl" />
            </>
          )}
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal delay={0}>
            <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 ${tk.tag} ${tk.border}`}>
              <Sparkles className="w-3 h-3" />
              What We Do
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 ${tk.head}`}>
              We turn ambitious{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                ideas into thriving
              </span>{" "}
              businesses
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-lg leading-relaxed max-w-2xl mx-auto mb-10 ${tk.body}`}>
              Adiya Business Solution is India's full-stack startup partner — combining strategy,
              technology, marketing, and operations so founders can focus on what only they can do.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5 ${
                  isLightMode
                    ? "border-slate-200 text-slate-700 hover:border-indigo-300 bg-white"
                    : "border-slate-700 text-slate-300 hover:border-indigo-500 bg-slate-900"
                }`}
              >
                See Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section className={`border-y ${tk.border} px-5 sm:px-10 xl:px-20 py-10`}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className={`flex flex-col items-center text-center gap-2 p-5 rounded-2xl border ${tk.statCard}`}>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white mb-1">
                  <Icon className="w-4 h-4" />
                </div>
                <p className={`text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent`}>
                  {value}
                </p>
                <p className={`text-xs font-medium ${tk.body}`}>{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICE CARDS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-10 xl:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-14 max-w-xl">
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tk.muted}`}>
                Our Services
              </p>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug ${tk.head}`}>
                Everything your startup needs,{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  under one roof
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, tag, title, desc, bullets, accent, glow }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative flex flex-col gap-5 p-7 rounded-2xl border transition-all duration-300 cursor-default shadow-lg ${glow} ${tk.card}`}
                >
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Tag */}
                  <span className={`absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${tk.tag}`}>
                    {tag}
                  </span>

                  {/* Copy */}
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${tk.head}`}>{title}</h3>
                    <p className={`text-sm leading-relaxed ${tk.body}`}>{desc}</p>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${accent}`} />
                        <span className={`text-xs ${tk.bullet}`}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom gradient line on hover */}
                  <div className={`absolute bottom-0 inset-x-0 h-px rounded-b-2xl bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section className={`border-t ${tk.border} px-5 sm:px-10 xl:px-20 py-20`}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-14 text-center max-w-xl mx-auto">
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tk.muted}`}>
                How We Work
              </p>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${tk.head}`}>
                A process built for{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  speed & certainty
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {process.map(({ step, title, desc }, i) => (
              <Reveal key={step} delay={i * 0.1}>
                <div className={`relative flex flex-col gap-4 p-7 rounded-2xl border h-full ${tk.processCard}`}>
                  {/* Step number */}
                  <span className="text-5xl font-black leading-none bg-gradient-to-br from-indigo-500/20 to-violet-500/10 bg-clip-text text-transparent select-none">
                    {step}
                  </span>
                  <div>
                    <h3 className={`text-base font-bold mb-1.5 ${tk.head}`}>{title}</h3>
                    <p className={`text-sm leading-relaxed ${tk.body}`}>{desc}</p>
                  </div>
                  {/* Connector dot */}
                  {i < process.length - 1 && (
                    <div className="hidden xl:flex absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-indigo-500 bg-gradient-to-br from-indigo-500 to-violet-600 z-10" />
                  )}
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
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-black/10 blur-2xl" />

            <Sparkles className="w-8 h-8 text-white/60 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Ready to build something great?
            </h2>
            <p className="text-white/75 text-base max-w-md mx-auto mb-8 leading-relaxed">
              Let's talk about your vision. Our team will get back to you within
              24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-white text-indigo-700 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default ServicesPage;