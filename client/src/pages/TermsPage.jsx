import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  Shield,
  FileText,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Lock,
  Users,
  RefreshCw,
  Globe,
  Scale,
  Mail,
  CheckCircle2,
  Sparkles,
  BookOpen,
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
   Terms Data
───────────────────────────────────────────── */
const sections = [
  {
    id: "acceptance",
    icon: CheckCircle2,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the services offered by Adiya Business Solution ('Company', 'we', 'our', or 'us'), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
      "These Terms constitute a legally binding agreement between you and Adiya Business Solution. We reserve the right to modify these Terms at any time, with changes effective upon posting to our website.",
      "Your continued use of our services following any modification constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.",
    ],
  },
  {
    id: "services",
    icon: Globe,
    title: "Services Provided",
    content: [
      "Adiya Business Solution offers startup acceleration, product development, digital marketing, business intelligence, legal & compliance guidance, and team-building services across India.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We shall not be liable to you or any third party for any such modification, suspension, or discontinuation.",
      "Certain services may be subject to additional terms and conditions, which will be presented to you at the time of engagement. Such additional terms are incorporated into these Terms by reference.",
    ],
  },
  {
    id: "ip",
    icon: Lock,
    title: "Intellectual Property",
    content: [
      "All content, materials, and deliverables created by Adiya Business Solution remain the intellectual property of the Company until full payment is received, unless otherwise agreed in writing.",
      "Upon receipt of complete payment, ownership of custom deliverables specified in the service agreement transfers to the client. However, Adiya Business Solution retains the right to use completed work in its portfolio and for promotional purposes unless explicitly restricted.",
      "Our proprietary methodologies, frameworks, templates, and internal tools remain the exclusive property of Adiya Business Solution and may not be reproduced, distributed, or used without express written consent.",
    ],
  },
  {
    id: "privacy",
    icon: Shield,
    title: "Confidentiality & Privacy",
    content: [
      "We treat all client information with strict confidentiality. Information shared with us during the course of providing services will not be disclosed to third parties without your prior written consent, except as required by law.",
      "We may collect personal data necessary to provide our services. This data is processed in accordance with applicable data protection laws and our Privacy Policy, which is incorporated herein by reference.",
      "By engaging our services, you consent to the collection and processing of your data as described in our Privacy Policy. You have the right to access, correct, or delete your personal data upon written request.",
    ],
  },
  {
    id: "payment",
    icon: Scale,
    title: "Payment Terms",
    content: [
      "Payment terms are defined in individual service agreements. Unless otherwise stated, invoices are due within 15 days of issuance. Late payments may attract an interest charge of 1.5% per month on the outstanding balance.",
      "All fees are exclusive of applicable taxes, including GST. Taxes will be added to invoices as required by law. The client is responsible for all taxes applicable to the services received.",
      "We reserve the right to suspend services for accounts with outstanding payments beyond agreed terms. Reinstatement of services following suspension may be subject to a processing fee.",
    ],
  },
  {
    id: "liability",
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Adiya Business Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or business interruption.",
      "Our total liability for any claims arising under these Terms shall not exceed the total fees paid by you for the specific service giving rise to the claim in the three months preceding the event.",
      "We make no warranties, express or implied, regarding the outcomes of our services. Business results depend on numerous factors beyond our control, and past results do not guarantee future performance.",
    ],
  },
  {
    id: "conduct",
    icon: Users,
    title: "Client Obligations",
    content: [
      "You agree to provide accurate, complete, and timely information required for us to deliver services effectively. Delays caused by incomplete or inaccurate information from the client may result in project timeline adjustments.",
      "You are responsible for ensuring that any materials, content, or data you provide to us do not infringe upon third-party intellectual property rights or violate any applicable laws.",
      "You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair the Company's reputation or the quality of services delivered to other clients.",
    ],
  },
  {
    id: "termination",
    icon: RefreshCw,
    title: "Termination",
    content: [
      "Either party may terminate a service agreement with 30 days' written notice, unless a specific notice period is stated in the service agreement. Termination does not relieve either party of obligations incurred prior to the effective date of termination.",
      "We reserve the right to terminate services immediately in cases of non-payment, breach of these Terms, or conduct that we reasonably believe is harmful to the Company or its other clients.",
      "Upon termination, all fees for work completed up to the termination date become immediately due and payable. Work product completed and paid for will be delivered to the client within a reasonable timeframe.",
    ],
  },
  {
    id: "governing",
    icon: BookOpen,
    title: "Governing Law & Disputes",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
      "Before initiating any legal proceedings, the parties agree to attempt good-faith negotiation to resolve any dispute within 30 days of written notice of the dispute.",
      "If negotiation fails, the parties agree to attempt mediation through a mutually agreed mediator before resorting to litigation. The costs of mediation shall be shared equally between the parties.",
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
const TermsPage = () => {
  const { isLightMode } = useTheme();

  /* ── theme tokens — identical structure to ContactPage ── */
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
              <FileText className="w-3 h-3" />
              Legal
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 ${tk.head}`}>
              Terms &{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto ${tk.body}`}>
              Please read these terms carefully before engaging with our services.
              By working with us, you agree to the conditions outlined below.
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
          QUICK SUMMARY STRIP
      ══════════════════════════════════════ */}
      <section className={`border-y ${tk.border} px-5 sm:px-10 xl:px-20 py-8`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Shield, label: "Data Protection", value: "Your data is safe & never sold" },
            { icon: Scale, label: "Governing Law", value: "Indian law, Mumbai courts" },
            { icon: Mail, label: "Questions?", value: "proposal@adiyabusinesssolution.com", href: "mailto:proposal@adiyabusinesssolution.com" },
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

            {/* Quick navigation */}
            <Reveal delay={0.1}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Jump to Section</h3>
                <nav className="flex flex-col gap-1">
                  {sections.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          document
                            .getElementById(`section-${s.id}`)
                            ?.scrollIntoView({ behavior: "smooth", block: "center" });
                        }}
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

            {/* Key highlights */}
            <Reveal delay={0.15}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Key Highlights</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Services governed by individual agreements",
                    "IP transfers to client upon full payment",
                    "Strict client confidentiality maintained",
                    "30-day notice required for termination",
                    "Disputes resolved under Mumbai jurisdiction",
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
                <h3 className="text-sm font-bold text-white mb-1">Questions about these terms?</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Our team is happy to clarify any clause before you engage with us.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Contact us <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Reveal>

            {/* Version note */}
            <Reveal delay={0.25}>
              <div className={`rounded-2xl border p-5 ${tk.card}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${tk.iconBg}`}>
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className={`text-xs font-bold mb-1 ${tk.head}`}>Effective Date</p>
                    <p className={`text-xs leading-relaxed ${tk.body}`}>
                      These terms are effective from <strong className={tk.head}>{lastUpdated}</strong> and supersede all previous versions. Continued use of our services constitutes acceptance.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM AGREEMENT BANNER
      ══════════════════════════════════════ */}
      <section className={`border-t ${tk.border} px-5 sm:px-10 xl:px-20 py-12`}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className={`rounded-3xl border p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 ${tk.formCard}`}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className={`text-lg font-extrabold tracking-tight mb-1 ${tk.head}`}>
                  Questions or concerns about our terms?
                </h2>
                <p className={`text-sm leading-relaxed ${tk.body}`}>
                  We believe in transparent business relationships. Reach out before signing anything —
                  our team will walk you through everything, no pressure.
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

export default TermsPage;