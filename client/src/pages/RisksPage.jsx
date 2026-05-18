import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  RefreshCw,
  Mail,
  CheckCircle2,
  Sparkles,
  Shield,
  TrendingDown,
  DollarSign,
  Users,
  Globe,
  Zap,
  Lock,
  BarChart2,
  Cpu,
  Scale,
  FileText,
  Info,
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
   Risk category cards
───────────────────────────────────────────── */
const riskCategories = [
  {
    icon: TrendingDown,
    label: "Market Risk",
    severity: "High",
    severityColor: "bg-rose-500/15 text-rose-500",
    description:
      "Market conditions, consumer demand, and competitive dynamics can shift rapidly, affecting the viability and growth trajectory of a startup.",
  },
  {
    icon: DollarSign,
    label: "Financial Risk",
    severity: "High",
    severityColor: "bg-rose-500/15 text-rose-500",
    description:
      "Cash flow constraints, inability to raise funding, unexpected expenses, or revenue shortfalls can jeopardise business continuity.",
  },
  {
    icon: Users,
    label: "Team Risk",
    severity: "Medium",
    severityColor: "bg-amber-500/15 text-amber-500",
    description:
      "Key personnel departures, skill gaps, co-founder conflicts, or difficulty hiring can materially slow or derail execution.",
  },
  {
    icon: Globe,
    label: "Regulatory Risk",
    severity: "Medium",
    severityColor: "bg-amber-500/15 text-amber-500",
    description:
      "Changes in laws, compliance requirements, or government policy — particularly in regulated sectors — can create unforeseen barriers.",
  },
  {
    icon: Cpu,
    label: "Technology Risk",
    severity: "Medium",
    severityColor: "bg-amber-500/15 text-amber-500",
    description:
      "Technical failures, cybersecurity incidents, platform dependencies, or rapid technology obsolescence can undermine product delivery.",
  },
  {
    icon: BarChart2,
    label: "Execution Risk",
    severity: "Low–Med",
    severityColor: "bg-indigo-500/15 text-indigo-400",
    description:
      "Strategy misalignment, poor prioritisation, scope creep, or weak operational discipline can cause delays and cost overruns.",
  },
];

/* ─────────────────────────────────────────────
   Accordion sections
───────────────────────────────────────────── */
const sections = [
  {
    id: "disclaimer",
    icon: Info,
    title: "Important Disclaimer",
    content: [
      "The information on this page is provided for general awareness purposes only and does not constitute financial, investment, or legal advice. Adiya Business Solution does not guarantee any specific business outcomes for clients or partners.",
      "All business ventures carry inherent risk. Past performance of projects we have supported is not indicative of future results. You should conduct your own due diligence and consult qualified advisors before making any significant business or investment decisions.",
      "By engaging our services, you acknowledge that you understand and accept the risks associated with entrepreneurship and business development. Adiya Business Solution shall not be held liable for losses arising from decisions made in reliance on our services.",
    ],
  },
  {
    id: "market",
    icon: TrendingDown,
    title: "Market & Competitive Risk",
    content: [
      "Startups operate in dynamic environments where market conditions, customer preferences, and competitive landscapes can change faster than a business can adapt. New entrants, incumbent pivots, or technological disruption can erode competitive advantage quickly.",
      "Demand for a product or service may be lower than anticipated, may take longer to materialise, or may disappear entirely due to shifts in consumer behaviour, macroeconomic conditions, or geopolitical events.",
      "We work with founders to validate market assumptions early and build adaptable business models. However, we cannot eliminate market risk, and clients should plan for scenarios where initial market assumptions prove incorrect.",
    ],
  },
  {
    id: "financial",
    icon: DollarSign,
    title: "Financial & Funding Risk",
    content: [
      "Most early-stage businesses require external capital to scale. Fundraising timelines are often longer than expected, funding terms may be unfavourable, and rounds can fall through entirely — even at advanced stages of negotiation.",
      "Revenue projections are inherently uncertain. Cash flow gaps, higher-than-expected customer acquisition costs, or slower-than-projected sales cycles can create existential financial pressure even for well-executed businesses.",
      "Clients should maintain sufficient financial reserves, avoid over-reliance on a single revenue stream or investor, and have contingency plans for delayed funding. Our financial modelling is an input to decision-making, not a guarantee of outcomes.",
    ],
  },
  {
    id: "team",
    icon: Users,
    title: "Team & Human Capital Risk",
    content: [
      "A startup's success is disproportionately tied to the quality and cohesion of its founding team. Co-founder disagreements, unexpected departures of key personnel, or the inability to attract the right talent can be fatal to a venture.",
      "Hiring in competitive talent markets — particularly for technical and leadership roles — is difficult and time-consuming. Mis-hires at the senior level are costly both financially and culturally.",
      "We support clients with team structuring and hiring strategy, but cannot guarantee team stability or individual performance. Founders should establish clear role definitions, equity agreements, and governance frameworks early.",
    ],
  },
  {
    id: "regulatory",
    icon: Scale,
    title: "Regulatory & Legal Risk",
    content: [
      "Businesses operating in regulated sectors — including fintech, healthtech, edtech, and food — face complex and evolving compliance requirements. Regulatory changes can require significant product or operational modifications at short notice.",
      "Intellectual property disputes, contractual disagreements, employment law violations, or data protection breaches can result in significant legal costs and reputational damage. These risks are particularly acute for fast-growing startups that may outpace their legal infrastructure.",
      "Our legal & compliance support is intended to guide and inform, not to substitute for qualified legal counsel. Clients are strongly advised to retain independent legal advisors for all material decisions.",
    ],
  },
  {
    id: "technology",
    icon: Cpu,
    title: "Technology & Cybersecurity Risk",
    content: [
      "Software products are subject to bugs, performance failures, and security vulnerabilities. A significant outage or data breach can erode customer trust, trigger regulatory action, and result in substantial financial loss.",
      "Dependency on third-party platforms, APIs, or infrastructure providers introduces concentration risk. Changes in a provider's pricing, terms, or availability can disrupt operations with little warning.",
      "Rapid advances in artificial intelligence, automation, and platform technology mean that today's technical advantage can become tomorrow's commodity. Startups must invest continuously in their technology to remain competitive.",
    ],
  },
  {
    id: "execution",
    icon: Zap,
    title: "Execution & Operational Risk",
    content: [
      "The ability to execute — to consistently deliver on commitments, manage resources efficiently, and make good decisions under pressure — is the single greatest differentiator between startups that succeed and those that fail.",
      "Poor prioritisation, feature creep, weak processes, and misaligned incentives can cause projects to run over time and budget. These problems compound quickly in early-stage companies with limited resources.",
      "Our embedded team model is designed to strengthen execution capability, but outcomes depend on the quality of collaboration between our team and the client. Lack of engagement, slow decision-making, or incomplete information sharing from the client's side will affect delivery.",
    ],
  },
  {
    id: "external",
    icon: Globe,
    title: "Macroeconomic & External Risk",
    content: [
      "Global and domestic macroeconomic conditions — including inflation, interest rates, currency fluctuations, and economic downturns — can significantly impact a startup's funding environment, cost base, and customer spending.",
      "Force majeure events such as pandemics, natural disasters, political instability, or supply chain disruptions can create sudden and severe disruptions that are outside any business's ability to predict or control.",
      "We encourage all clients to build resilient, capital-efficient business models that can weather periods of macro uncertainty. Diversification of revenue streams and customer geographies reduces — but does not eliminate — exposure to these risks.",
    ],
  },
  {
    id: "mitigation",
    icon: Shield,
    title: "How We Help Mitigate Risk",
    content: [
      "While risk cannot be eliminated, it can be identified, understood, and managed. Our approach begins with rigorous assumption testing — challenging the underlying beliefs on which a business plan is built before significant capital is committed.",
      "We help clients build risk registers, scenario plans, and early-warning dashboards that surface problems before they become crises. Regular structured reviews create accountability and enable course correction.",
      "Our cross-functional team brings experience across legal, financial, technical, and operational domains, allowing us to identify risks that sector-specific advisors might miss. We work alongside clients as a genuine partner — not just a service provider — with a shared interest in long-term success.",
    ],
  },
];

/* ─────────────────────────────────────────────
   Accordion Item
───────────────────────────────────────────── */
const AccordionItem = ({ section, index, tk }) => {
  const [open, setOpen] = useState(index === 0);
  const Icon = section.icon;

  return (
    <Reveal delay={index * 0.04}>
      <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${open ? tk.formCard : tk.card}`}>
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center gap-4 px-6 py-5 text-left"
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/30" : tk.iconBg}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`text-xs font-bold uppercase tracking-widest block mb-0.5 ${tk.muted}`}>
              Section {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`font-bold text-sm sm:text-base leading-snug ${tk.head}`}>{section.title}</span>
          </div>
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
              <div className={`px-6 pb-6 flex flex-col gap-3 border-t ${tk.border} pt-5`}>
                {section.content.map((para, i) => (
                  <p key={i} className={`text-sm leading-relaxed ${tk.body}`}>{para}</p>
                ))}
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
const RisksPage = () => {
  const { isLightMode } = useTheme();

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
      ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white"
      : "bg-slate-900/60 border-slate-700 text-slate-100 placeholder:text-slate-600 focus:border-indigo-500 focus:bg-slate-900",
    tag: isLightMode ? "bg-indigo-50 text-indigo-600" : "bg-indigo-950/60 text-indigo-400",
    iconBg: isLightMode ? "bg-indigo-50 text-indigo-600" : "bg-indigo-950/60 text-indigo-400",
    officeCard: isLightMode
      ? "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100"
      : "bg-[#13131c] border-slate-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-900/20",
  };

  const lastUpdated = "18 May 2025";

  return (
    <div className={`min-h-screen ${tk.bg} transition-colors duration-300`}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden px-5 sm:px-10 xl:px-20 pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className={`absolute top-0 right-1/4 w-[500px] h-80 rounded-full blur-3xl ${isLightMode ? "bg-rose-100/60" : "bg-rose-600/6"}`} />
          <div className={`absolute bottom-0 left-1/4 w-80 h-72 rounded-full blur-3xl ${isLightMode ? "bg-indigo-100/70" : "bg-indigo-600/6"}`} />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 ${tk.tag} ${tk.border}`}>
              <AlertTriangle className="w-3 h-3" />
              Transparency
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 ${tk.head}`}>
              Key{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Risk Factors
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto ${tk.body}`}>
              We believe in complete transparency. Building a startup is one of the
              hardest things a person can do — here are the risks you should
              understand before you begin.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className={`inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border text-xs font-medium ${tk.card} ${tk.border} ${tk.body}`}>
              <RefreshCw className="w-3 h-3" />
              Last updated: {lastUpdated}
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
            { icon: AlertTriangle, label: "Not Financial Advice", value: "This page is for awareness only" },
            { icon: Shield, label: "Risk Mitigation", value: "We actively help manage these risks" },
            { icon: Mail, label: "Speak to Our Team", value: "proposal@adiyabusinesssolution.com", href: "mailto:proposal@adiyabusinesssolution.com" },
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
          RISK CATEGORY CARDS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-10 xl:px-20 py-14">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${tk.muted}`}>Risk Categories</p>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${tk.head}`}>
                Six areas every{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  founder must know
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {riskCategories.map(({ icon: Icon, label, severity, severityColor, description }, i) => (
              <Reveal key={label} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`flex flex-col gap-4 p-6 rounded-2xl border h-full transition-all duration-300 ${tk.officeCard}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${tk.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${severityColor}`}>
                      {severity} Severity
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm mb-2 ${tk.head}`}>{label}</h3>
                    <p className={`text-xs leading-relaxed ${tk.body}`}>{description}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ACCORDION + SIDEBAR
      ══════════════════════════════════════ */}
      <section className={`border-t ${tk.border} px-5 sm:px-10 xl:px-20 py-16`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Accordion ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {sections.map((section, i) => (
              <AccordionItem key={section.id} section={section} index={i} tk={tk} />
            ))}
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Jump to section */}
            <Reveal delay={0.1}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Jump to Section</h3>
                <nav className="flex flex-col gap-1">
                  {sections.map((s) => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.id}
                        onClick={() =>
                          document
                            .getElementById(`section-${s.id}`)
                            ?.scrollIntoView({ behavior: "smooth", block: "center" })
                        }
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group ${tk.officeCard} border`}
                      >
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}>
                          <Icon className="w-3 h-3" />
                        </div>
                        <span className={`text-xs font-semibold flex-1 ${tk.head}`}>{s.title}</span>
                        <ArrowRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 ${tk.muted}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </Reveal>

            {/* How Adiya helps */}
            <Reveal delay={0.15}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>How We Reduce Your Risk</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Rigorous assumption testing before capital commitment",
                    "Risk registers & early-warning dashboards",
                    "Scenario planning for downside cases",
                    "Cross-functional review across legal, finance & tech",
                    "Structured milestone-based engagement model",
                    "Transparent reporting — good news and bad",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </span>
                      <span className={`text-xs leading-relaxed ${tk.body}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6">
                <div className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 blur-xl" />
                <Sparkles className="w-6 h-6 text-white/50 mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">Want a risk assessment?</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Book a free discovery call — we'll map out the key risks specific
                  to your idea and industry.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Book a call <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Reveal>

            {/* Disclaimer box */}
            <Reveal delay={0.25}>
              <div className={`rounded-2xl border p-5 ${tk.card}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${tk.iconBg}`}>
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className={`text-xs font-bold mb-1 ${tk.head}`}>Not Financial or Legal Advice</p>
                    <p className={`text-xs leading-relaxed ${tk.body}`}>
                      This page is for informational purposes only. Always consult
                      qualified financial, legal, and business advisors before making
                      major decisions.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Related policies */}
            <Reveal delay={0.3}>
              <div className={`rounded-2xl border p-5 flex flex-col gap-2 ${tk.card}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${tk.muted}`}>Related Pages</p>
                {[
                  { to: "/terms", icon: FileText, label: "Terms & Conditions" },
                  { to: "/privacy", icon: Lock, label: "Privacy Policy" },
                  { to: "/cookies", icon: Shield, label: "Cookie Notice" },
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
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className={`text-lg font-extrabold tracking-tight mb-1 ${tk.head}`}>
                  Ready to build — with eyes wide open?
                </h2>
                <p className={`text-sm leading-relaxed ${tk.body}`}>
                  Understanding risk is the first step to managing it. Let's talk
                  about your idea and build a plan that's realistic, resilient, and
                  ready for the unexpected.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
                >
                  Start a conversation <ArrowRight className="w-3.5 h-3.5" />
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

export default RisksPage;