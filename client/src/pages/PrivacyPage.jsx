import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  Shield,
  Eye,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Lock,
  Users,
  RefreshCw,
  Database,
  Share2,
  Trash2,
  Mail,
  CheckCircle2,
  Sparkles,
  Cookie,
  UserCheck,
  Server,
  ToggleLeft,
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
   Privacy Policy Data
───────────────────────────────────────────── */
const sections = [
  {
    id: "overview",
    icon: Shield,
    title: "Overview & Scope",
    content: [
      "Adiya Business Solution ('Company', 'we', 'our', or 'us') is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you engage with our website or services.",
      "This policy applies to all information collected through our website, mobile communications, marketing campaigns, and any other interaction you have with us. It does not apply to third-party websites or services that may be linked from our platform.",
      "By using our services, you consent to the data practices described in this policy. If you do not agree, please discontinue use of our services and contact us to have your data removed.",
    ],
  },
  {
    id: "collection",
    icon: Database,
    title: "Information We Collect",
    content: [
      "We collect information you voluntarily provide — such as your name, email address, phone number, company name, and project details — when you fill out our contact form, request a consultation, or engage our services.",
      "We automatically collect certain technical information when you visit our website, including IP addresses, browser type and version, pages visited, time spent on pages, referring URLs, and device information. This is collected via cookies and similar tracking technologies.",
      "With your explicit consent, we may collect additional information relevant to delivering our services — such as business financials, team structure, or product roadmaps — shared during consulting engagements. This information is treated with the highest level of confidentiality.",
    ],
  },
  {
    id: "usage",
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to deliver, personalise, and improve our services; to communicate with you about your project; to send proposals, invoices, and service updates; and to respond to your enquiries.",
      "With your consent, we may use your contact details to send marketing communications about our services, events, or industry insights. You may opt out of these communications at any time by clicking the unsubscribe link in any email or contacting us directly.",
      "We may use aggregated, anonymised data for internal analytics — such as understanding which services are most sought after or which regions we serve most frequently. This data cannot be used to identify any individual.",
    ],
  },
  {
    id: "sharing",
    icon: Share2,
    title: "Sharing Your Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties. Your data is not shared with advertisers or data brokers under any circumstances.",
      "We may share information with trusted service providers who assist us in operating our business — such as cloud hosting providers, email platforms, and payment processors. These parties are bound by confidentiality agreements and are only permitted to use your data to perform specific tasks on our behalf.",
      "We may disclose your information if required to do so by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights, prevent fraud, or ensure the safety of our clients and the public.",
    ],
  },
  {
    id: "storage",
    icon: Server,
    title: "Data Storage & Security",
    content: [
      "Your data is stored on secure servers located in India and/or within cloud infrastructure compliant with applicable data protection standards. We implement industry-standard security measures including encryption, access controls, and regular security audits.",
      "Despite our best efforts, no method of electronic storage or transmission over the internet is 100% secure. We cannot guarantee absolute security, but we continually review and enhance our security practices to minimise risk.",
      "We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer required, it is securely deleted or anonymised.",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Tracking",
    content: [
      "Our website uses cookies — small text files placed on your device — to enhance your browsing experience, remember your preferences, and understand how visitors interact with our site.",
      "We use essential cookies (required for the site to function), analytics cookies (to understand usage patterns via tools like Google Analytics), and preference cookies (to remember your settings such as light/dark mode). We do not use advertising or tracking cookies that follow you across other websites.",
      "You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain parts of our website. A cookie consent banner will appear on your first visit, allowing you to manage your preferences.",
    ],
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "Under applicable Indian data protection laws, you have the right to access the personal data we hold about you, request corrections to inaccurate data, withdraw consent at any time (without affecting the lawfulness of processing prior to withdrawal), and request deletion of your data subject to legal retention requirements.",
      "You also have the right to object to certain types of processing, request that we restrict processing of your data in specific circumstances, and receive a copy of your data in a portable format.",
      "To exercise any of these rights, please contact us at proposal@adiyabusinesssolution.com. We will respond to verified requests within 30 days. We may need to verify your identity before fulfilling a request.",
    ],
  },
  {
    id: "thirdparty",
    icon: ToggleLeft,
    title: "Third-Party Services",
    content: [
      "Our website may contain links to third-party websites, tools, or services — such as social media platforms, payment gateways, or partner portals. We are not responsible for the privacy practices of these external services.",
      "We encourage you to review the privacy policies of any third-party services you interact with through our platform. The inclusion of a link on our site does not imply endorsement of that party's privacy practices.",
      "Where we integrate third-party tools (such as analytics or CRM platforms), we ensure that our data-sharing agreements restrict those parties from using your data for any purpose other than providing services to us.",
    ],
  },
  {
    id: "children",
    icon: Users,
    title: "Children's Privacy",
    content: [
      "Our services are intended for business professionals and are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.",
      "If we become aware that we have inadvertently collected information from a person under 18, we will take immediate steps to delete that information from our records.",
      "If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at proposal@adiyabusinesssolution.com.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. The updated policy will be posted on this page with a revised effective date.",
      "For significant changes that materially affect your rights, we will make reasonable efforts to notify you — such as by sending an email to the address on file or placing a prominent notice on our website.",
      "We encourage you to review this policy periodically. Your continued use of our services following any update constitutes your acceptance of the revised Privacy Policy.",
    ],
  },
];

/* ─────────────────────────────────────────────
   Accordion Item (identical pattern to TermsPage)
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
            <span
              className={`text-xs font-bold uppercase tracking-widest block mb-0.5 ${tk.muted}`}
            >
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
              <div
                className={`px-6 pb-6 flex flex-col gap-3 border-t ${tk.border} pt-5`}
              >
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
const PrivacyPage = () => {
  const { isLightMode } = useTheme();

  /* ── theme tokens — identical structure to ContactPage & TermsPage ── */
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
    iconBg: isLightMode
      ? "bg-indigo-50 text-indigo-600"
      : "bg-indigo-950/60 text-indigo-400",
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
          <div
            className={`absolute top-0 right-1/4 w-[500px] h-80 rounded-full blur-3xl ${
              isLightMode ? "bg-indigo-100/80" : "bg-indigo-600/8"
            }`}
          />
          <div
            className={`absolute bottom-0 left-1/4 w-80 h-72 rounded-full blur-3xl ${
              isLightMode ? "bg-violet-100/70" : "bg-violet-600/6"
            }`}
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <span
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 ${tk.tag} ${tk.border}`}
            >
              <Lock className="w-3 h-3" />
              Privacy
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 ${tk.head}`}
            >
              Privacy{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto ${tk.body}`}>
              We believe privacy is a right, not a feature. Here's exactly how we
              collect, use, and protect your personal information.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div
              className={`inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border text-xs font-medium ${tk.card} ${tk.border} ${tk.body}`}
            >
              <RefreshCw className="w-3 h-3" />
              Last updated: {lastUpdated}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          QUICK SUMMARY STRIP
      ══════════════════════════════════════ */}
      <section className={`border-y ${tk.border} px-5 sm:px-10 xl:px-20 py-8`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              label: "No Data Selling",
              value: "We never sell your personal data",
            },
            {
              icon: Lock,
              label: "Encrypted Storage",
              value: "Industry-standard security measures",
            },
            {
              icon: Mail,
              label: "Privacy Requests",
              value: "proposal@adiyabusinesssolution.com",
              href: "mailto:proposal@adiyabusinesssolution.com",
            },
          ].map(({ icon: Icon, label, value, href }) => {
            const Wrap = href ? "a" : "div";
            return (
              <Reveal key={label}>
                <Wrap
                  href={href}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group ${
                    tk.card
                  } ${href ? "hover:border-indigo-400 cursor-pointer" : ""}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${tk.muted}`}
                    >
                      {label}
                    </p>
                    <p className={`text-xs font-semibold truncate ${tk.head}`}>{value}</p>
                  </div>
                </Wrap>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN CONTENT — Accordion + Sidebar
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-10 xl:px-20 py-16">
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
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}
                        >
                          <Icon className="w-3 h-3" />
                        </div>
                        <span className={`text-xs font-semibold flex-1 ${tk.head}`}>
                          {s.title}
                        </span>
                        <ArrowRight
                          className={`w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 ${tk.muted}`}
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </Reveal>

            {/* Your rights at a glance */}
            <Reveal delay={0.15}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Your Rights at a Glance</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Access the data we hold about you",
                    "Correct inaccurate information",
                    "Request deletion of your data",
                    "Withdraw consent at any time",
                    "Receive a portable copy of your data",
                    "Object to certain processing activities",
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

            {/* Contact CTA */}
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6">
                <div className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 blur-xl" />
                <Sparkles className="w-6 h-6 text-white/50 mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">
                  Want to exercise your rights?
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Send us a request and we'll respond within 30 days — no hassle.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Submit a request <ArrowRight className="w-3 h-3" />
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
                      This policy is effective from{" "}
                      <strong className={tk.head}>{lastUpdated}</strong> and supersedes
                      all previous versions. Continued use of our services constitutes
                      acceptance.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Link to Terms */}
            <Reveal delay={0.3}>
              <Link
                to="/terms"
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl border transition-all duration-300 group ${tk.officeCard}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}
                >
                  <Trash2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${tk.muted}`}>
                    Related
                  </p>
                  <p className={`text-xs font-bold ${tk.head}`}>Terms & Conditions</p>
                </div>
                <ArrowRight
                  className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 ${tk.muted}`}
                />
              </Link>
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
            <div
              className={`rounded-3xl border p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 ${tk.formCard}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2
                  className={`text-lg font-extrabold tracking-tight mb-1 ${tk.head}`}
                >
                  Questions about how we handle your data?
                </h2>
                <p className={`text-sm leading-relaxed ${tk.body}`}>
                  We're committed to transparency. Reach out any time and our team
                  will respond within 2 business days.
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

export default PrivacyPage;