import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  Cookie,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  RefreshCw,
  Mail,
  CheckCircle2,
  Sparkles,
  Shield,
  ToggleLeft,
  BarChart2,
  Settings,
  Lock,
  Eye,
  Trash2,
  Globe,
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
   Cookie categories (visual cards section)
───────────────────────────────────────────── */
const cookieTypes = [
  {
    icon: Lock,
    label: "Essential",
    badge: "Always Active",
    badgeColor: "bg-emerald-500/15 text-emerald-500",
    description:
      "Required for the website to function. These cannot be disabled as they power core features like navigation, security, and session management.",
    examples: ["Session tokens", "CSRF protection", "Load balancing", "User preferences"],
  },
  {
    icon: BarChart2,
    label: "Analytics",
    badge: "Optional",
    badgeColor: "bg-indigo-500/15 text-indigo-400",
    description:
      "Help us understand how visitors interact with our site — which pages are visited most, how long users stay, and where they come from. All data is anonymised.",
    examples: ["Google Analytics", "Page view tracking", "Bounce rate", "Traffic sources"],
  },
  {
    icon: Settings,
    label: "Preference",
    badge: "Optional",
    badgeColor: "bg-violet-500/15 text-violet-400",
    description:
      "Remember your settings and choices so you don't have to re-enter them each visit — such as your light/dark mode preference or language selection.",
    examples: ["Theme preference", "Language setting", "Region selection", "Collapsed menus"],
  },
  {
    icon: Eye,
    label: "Marketing",
    badge: "Not Used",
    badgeColor: "bg-rose-500/15 text-rose-400",
    description:
      "We do not use marketing or advertising cookies. We do not track you across other websites or serve targeted ads based on your browsing behaviour.",
    examples: ["Not applicable", "No ad tracking", "No retargeting", "No third-party ads"],
  },
];

/* ─────────────────────────────────────────────
   Accordion sections
───────────────────────────────────────────── */
const sections = [
  {
    id: "what",
    icon: Info,
    title: "What Are Cookies?",
    content: [
      "Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and to provide information to the website owner.",
      "Cookies can be 'session cookies' — which are deleted when you close your browser — or 'persistent cookies' — which remain on your device for a set period of time or until you delete them manually.",
      "Similar technologies such as web beacons, pixels, and local storage may also be used alongside cookies for the same purposes described in this notice.",
    ],
  },
  {
    id: "how",
    icon: Globe,
    title: "How We Use Cookies",
    content: [
      "Adiya Business Solution uses cookies to ensure our website functions correctly, to understand how visitors use our site, and to remember your preferences between visits.",
      "We use essential cookies that are strictly necessary for the operation of our website — for example, to maintain your session, protect against cross-site request forgery, and balance server load.",
      "With your consent, we also use analytics cookies to collect anonymised data about how our website is used. This helps us improve the experience for all visitors. We do not use this data to identify individuals.",
    ],
  },
  {
    id: "thirdparty",
    icon: ToggleLeft,
    title: "Third-Party Cookies",
    content: [
      "Some cookies on our site are set by third-party services we use, such as Google Analytics. These third parties may collect information about your online activity across different websites over time.",
      "We carefully vet all third-party services and ensure they comply with applicable privacy laws. Where possible, we configure these services to anonymise your data before it is transmitted.",
      "We do not use third-party advertising networks and therefore do not allow advertisers to set cookies through our website. Any third-party cookies on our site are strictly for analytics or functionality purposes.",
    ],
  },
  {
    id: "manage",
    icon: Settings,
    title: "Managing Your Cookie Preferences",
    content: [
      "When you first visit our website, a cookie consent banner will appear allowing you to accept or decline optional cookies. You can change your preferences at any time by clearing your browser cookies and revisiting our site.",
      "Most web browsers allow you to control cookies through their settings. You can typically find these under 'Privacy', 'Security', or 'Site Settings'. Note that disabling all cookies may impact the functionality of our website.",
      "You can opt out of Google Analytics tracking specifically by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.",
    ],
  },
  {
    id: "retention",
    icon: RefreshCw,
    title: "Cookie Retention Periods",
    content: [
      "Essential cookies are typically session-based and are deleted when you close your browser. Some essential cookies may persist for up to 24 hours to maintain your session across short breaks.",
      "Analytics cookies set by Google Analytics are retained for up to 26 months by default. We have configured our Google Analytics to anonymise IP addresses and to not share data with Google's advertising products.",
      "Preference cookies — such as those storing your theme preference — are retained for up to 12 months. After this period, you may be prompted to confirm your preferences again.",
    ],
  },
  {
    id: "rights",
    icon: Shield,
    title: "Your Rights & Choices",
    content: [
      "Under applicable Indian data protection laws, you have the right to withdraw your consent to non-essential cookies at any time. This will not affect the lawfulness of any processing carried out before your withdrawal.",
      "You have the right to request information about the cookies we use and the data they collect. You may also request deletion of any personal data associated with cookie-collected information.",
      "To exercise these rights or for any questions about our cookie usage, please contact us at proposal@adiyabusinesssolution.com. We aim to respond to all requests within 30 days.",
    ],
  },
  {
    id: "changes",
    icon: AlertTriangle,
    title: "Changes to This Notice",
    content: [
      "We may update this Cookie Notice from time to time as our use of cookies evolves or as legal requirements change. Any updates will be posted on this page with a revised effective date.",
      "For material changes — such as introducing new categories of cookies — we will display a prominent notice on our website and, where appropriate, seek fresh consent.",
      "We encourage you to review this notice periodically. Your continued use of our website following any update constitutes your acceptance of the revised Cookie Notice.",
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
      <div
        className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
          open ? tk.formCard : tk.card
        }`}
      >
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center gap-4 px-6 py-5 text-left"
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              open
                ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/30"
                : tk.iconBg
            }`}
          >
            <Icon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`text-xs font-bold uppercase tracking-widest block mb-0.5 ${tk.muted}`}>
              Section {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`font-bold text-sm sm:text-base leading-snug ${tk.head}`}>
              {section.title}
            </span>
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
                  <p key={i} className={`text-sm leading-relaxed ${tk.body}`}>
                    {para}
                  </p>
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
const CookiePage = () => {
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
          <div className={`absolute top-0 right-1/4 w-[500px] h-80 rounded-full blur-3xl ${isLightMode ? "bg-indigo-100/80" : "bg-indigo-600/8"}`} />
          <div className={`absolute bottom-0 left-1/4 w-80 h-72 rounded-full blur-3xl ${isLightMode ? "bg-violet-100/70" : "bg-violet-600/6"}`} />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 ${tk.tag} ${tk.border}`}>
              <Cookie className="w-3 h-3" />
              Legal
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 ${tk.head}`}>
              Cookie{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Notice
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto ${tk.body}`}>
              We use cookies to make our website work well and to understand how
              you use it. Here's a plain-language breakdown of exactly what we use
              and why.
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
            { icon: Shield, label: "No Ad Cookies", value: "We never use advertising trackers" },
            { icon: ToggleLeft, label: "Your Control", value: "Opt out of optional cookies anytime" },
            { icon: Mail, label: "Cookie Queries", value: "proposal@adiyabusinesssolution.com", href: "mailto:proposal@adiyabusinesssolution.com" },
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
          COOKIE TYPE CARDS
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-10 xl:px-20 py-14">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${tk.muted}`}>Cookie Categories</p>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${tk.head}`}>
                What cookies do{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  we use?
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cookieTypes.map(({ icon: Icon, label, badge, badgeColor, description, examples }, i) => (
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
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${badgeColor}`}>
                      {badge}
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-bold text-sm mb-2 ${tk.head}`}>{label}</h3>
                    <p className={`text-xs leading-relaxed ${tk.body}`}>{description}</p>
                  </div>

                  <div className={`mt-auto pt-4 border-t ${tk.border}`}>
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${tk.muted}`}>Examples</p>
                    <ul className="flex flex-col gap-1.5">
                      {examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2">
                          <span className={`w-1 h-1 rounded-full flex-shrink-0 ${label === "Marketing" ? "bg-rose-400" : "bg-indigo-400"}`} />
                          <span className={`text-xs ${tk.body}`}>{ex}</span>
                        </li>
                      ))}
                    </ul>
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

            {/* How to manage cookies */}
            <Reveal delay={0.15}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Manage in Your Browser</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Chrome: Settings → Privacy → Cookies",
                    "Firefox: Settings → Privacy & Security",
                    "Safari: Preferences → Privacy",
                    "Edge: Settings → Cookies & site data",
                    "Opera: Settings → Advanced → Privacy",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </span>
                      <span className={`text-xs leading-relaxed font-mono ${tk.body}`}>{item}</span>
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
                <h3 className="text-sm font-bold text-white mb-1">Questions about cookies?</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  We're happy to explain anything in plain language — no jargon.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Get in touch <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Reveal>

            {/* Effective date */}
            <Reveal delay={0.25}>
              <div className={`rounded-2xl border p-5 ${tk.card}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${tk.iconBg}`}>
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className={`text-xs font-bold mb-1 ${tk.head}`}>Effective Date</p>
                    <p className={`text-xs leading-relaxed ${tk.body}`}>
                      This notice is effective from{" "}
                      <strong className={tk.head}>{lastUpdated}</strong> and supersedes
                      all previous versions.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Related links */}
            <Reveal delay={0.3}>
              <div className={`rounded-2xl border p-5 flex flex-col gap-2 ${tk.card}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${tk.muted}`}>Related Policies</p>
                {[
                  { to: "/privacy", icon: Shield, label: "Privacy Policy" },
                  { to: "/terms", icon: Trash2, label: "Terms & Conditions" },
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
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className={`text-lg font-extrabold tracking-tight mb-1 ${tk.head}`}>
                  Want to change your cookie preferences?
                </h2>
                <p className={`text-sm leading-relaxed ${tk.body}`}>
                  Clear your browser cookies and revisit our site to be shown the
                  consent banner again — or contact us and we'll help directly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
                >
                  Contact us <ArrowRight className="w-3.5 h-3.5" />
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

export default CookiePage;