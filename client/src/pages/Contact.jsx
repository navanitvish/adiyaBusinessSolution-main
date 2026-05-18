import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  MessageSquare,
  Building2,
  ChevronDown,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const offices = [
  {
    city: "Mumbai",
    address: "Level 1, Gate Avenue, Next to DCB Bank, Andheri, Mumbai – 400053",
    phone: "+91 93721 94890",
    hours: "Mon–Sat, 10 AM – 7 PM",
  },
  {
    city: "Lucknow",
    address: "C-22 Paradise Garden, Bakshi Talaab, Sitapur Road, Lucknow – 226201",
    phone: "+91 93721 94890",
    hours: "Mon–Sat, 10 AM – 7 PM",
  },
  {
    city: "Bangalore",
    address: "412, Sanjay Nagar, Bansu Apartment, Near Bank of Baroda, Bangalore – 560094",
    phone: "+91 93721 94890",
    hours: "Mon–Sat, 10 AM – 7 PM",
  },
];

const services = [
  "Startup Acceleration",
  "Product Development",
  "Digital Marketing",
  "Business Intelligence",
  "Legal & Compliance",
  "Team Building",
  "Other",
];

const socials = [
  { icon: Linkedin, url: "https://in.linkedin.com/company/adiya-business-solution", label: "LinkedIn" },
  { icon: Instagram, url: "https://www.instagram.com/adiyabusinesssolution", label: "Instagram" },
  { icon: Twitter, url: "https://x.com/adiyabusiness", label: "Twitter / X" },
  { icon: Facebook, url: "https://www.facebook.com/adiyabusinesssolution", label: "Facebook" },
];

/* ─────────────────────────────────────────────
   Animation helpers
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1, y: 0,
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
   Input component
───────────────────────────────────────────── */
const Field = ({ label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold uppercase tracking-wider text-current opacity-60">
      {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs text-rose-500 font-medium"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
const ContactPage = () => {
  const { isLightMode } = useTheme();

  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  /* ── theme tokens ── */
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
    dropdown: isLightMode
      ? "bg-white border-slate-200 shadow-xl shadow-slate-100"
      : "bg-[#13131c] border-slate-800 shadow-xl shadow-black/40",
    dropItem: isLightMode
      ? "hover:bg-indigo-50 hover:text-indigo-700 text-slate-700"
      : "hover:bg-indigo-950/60 hover:text-indigo-300 text-slate-300",
  };

  const inputCls = `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none ${tk.input}`;

  /* ── Validation ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please tell us about your project";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1600)); // simulate API
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

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
              <MessageSquare className="w-3 h-3" />
              Contact Us
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 ${tk.head}`}>
              Let's build something{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                great together
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto ${tk.body}`}>
              Tell us about your project and we'll get back to you within 24 hours.
              No obligations, no sales pressure — just a real conversation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          QUICK CONTACT STRIP
      ══════════════════════════════════════ */}
      <section className={`border-y ${tk.border} px-5 sm:px-10 xl:px-20 py-8`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: "Email", value: "proposal@adiyabusinesssolution.com", href: "mailto:proposal@adiyabusinesssolution.com" },
            { icon: Phone, label: "Phone", value: "+91 93721 94890", href: "tel:+919372194890" },
            { icon: Clock, label: "Working Hours", value: "Mon–Sat, 10 AM – 7 PM IST", href: null },
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
          FORM + SIDEBAR
      ══════════════════════════════════════ */}
      <section className="px-5 sm:px-10 xl:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Contact Form ── */}
          <Reveal className="lg:col-span-3">
            <div className={`rounded-3xl border p-8 sm:p-10 ${tk.formCard}`}>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-5"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-extrabold mb-2 ${tk.head}`}>Message received!</h2>
                      <p className={`text-sm leading-relaxed max-w-xs mx-auto ${tk.body}`}>
                        We'll review your project details and reach out within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",company:"",service:"",budget:"",message:"" }); }}
                      className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all duration-300 shadow-md"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h2 className={`text-2xl font-extrabold tracking-tight mb-1 ${tk.head}`}>
                        Tell us about your project
                      </h2>
                      <p className={`text-sm ${tk.body}`}>
                        Fill in the details and our team will be in touch.
                      </p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Full Name *" error={errors.name}>
                        <input
                          className={inputCls}
                          placeholder="Rahul Sharma"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                      </Field>
                      <Field label="Email Address *" error={errors.email}>
                        <input
                          type="email"
                          className={inputCls}
                          placeholder="rahul@company.com"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                      </Field>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Phone Number">
                        <input
                          className={inputCls}
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                      </Field>
                      <Field label="Company / Startup">
                        <input
                          className={inputCls}
                          placeholder="Your company name"
                          value={form.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                        />
                      </Field>
                    </div>

                    {/* Service dropdown */}
                    <Field label="Service Interested In">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setServiceOpen((p) => !p)}
                          className={`${inputCls} flex items-center justify-between text-left`}
                        >
                          <span className={form.service ? "" : "opacity-40"}>
                            {form.service || "Select a service…"}
                          </span>
                          <motion.span animate={{ rotate: serviceOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <ChevronDown className="w-4 h-4 flex-shrink-0" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {serviceOpen && (
                            <motion.ul
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.2 }}
                              className={`absolute z-20 top-full mt-2 w-full rounded-2xl border overflow-hidden ${tk.dropdown}`}
                            >
                              {services.map((s) => (
                                <li
                                  key={s}
                                  onClick={() => { handleChange("service", s); setServiceOpen(false); }}
                                  className={`px-4 py-3 text-sm cursor-pointer transition-colors duration-150 ${tk.dropItem} ${form.service === s ? "font-semibold" : ""}`}
                                >
                                  {s}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </Field>

                    {/* Budget */}
                    <Field label="Estimated Budget">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["< ₹1L", "₹1–5L", "₹5–20L", "₹20L+"].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => handleChange("budget", b)}
                            className={`py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                              form.budget === b
                                ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white border-transparent shadow-md"
                                : `${tk.input} border`
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </Field>

                    {/* Message */}
                    <Field label="Project Details *" error={errors.message}>
                      <textarea
                        rows={4}
                        className={`${inputCls} resize-none`}
                        placeholder="Tell us about your idea, current stage, and what kind of support you need…"
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </Field>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.01 }}
                      whileTap={{ scale: submitting ? 1 : 0.98 }}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Why reach out */}
            <Reveal delay={0.1}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Why founders choose Adiya</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Response within 24 hours — guaranteed",
                    "No long-term contracts until you're sure",
                    "Embedded team model, not outsourcing",
                    "Pan-India presence across 18 cities",
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

            {/* Social links */}
            <Reveal delay={0.15}>
              <div className={`rounded-2xl border p-6 ${tk.card}`}>
                <h3 className={`text-sm font-bold mb-4 ${tk.head}`}>Connect with us</h3>
                <div className="flex flex-col gap-2">
                  {socials.map(({ icon: Icon, label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 group ${tk.officeCard}`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${tk.iconBg}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs font-semibold ${tk.head}`}>{label}</span>
                      <ArrowRight className={`w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 ${tk.muted}`} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* FAQ nudge */}
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6">
                <div className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 blur-xl" />
                <Sparkles className="w-6 h-6 text-white/50 mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">Have a quick question?</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Check our FAQ page — most common questions are answered there.
                </p>
                <Link
                  to="/faqs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Browse FAQs <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OFFICE CARDS
      ══════════════════════════════════════ */}
      <section className={`border-t ${tk.border} px-5 sm:px-10 xl:px-20 py-16`}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-10">
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${tk.muted}`}>Our Offices</p>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${tk.head}`}>
                Find us{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  across India
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offices.map(({ city, address, phone, hours }, i) => (
              <Reveal key={city} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`flex flex-col gap-5 p-6 rounded-2xl border transition-all duration-300 ${tk.officeCard}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h3 className={`font-bold ${tk.head}`}>{city}</h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2.5">
                      <MapPin className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-indigo-500`} />
                      <p className={`text-xs leading-relaxed ${tk.body}`}>{address}</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className={`w-3.5 h-3.5 flex-shrink-0 text-indigo-500`} />
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className={`text-xs font-medium hover:text-indigo-500 transition-colors ${tk.body}`}>
                        {phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className={`w-3.5 h-3.5 flex-shrink-0 text-indigo-500`} />
                      <p className={`text-xs ${tk.body}`}>{hours}</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;