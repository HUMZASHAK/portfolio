import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Code2, ExternalLink, Globe2, Mail, MapPin, Network, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import SectionShell from "../components/SectionShell";

const contactHighlights = [
  { label: "Email", value: "humzashaik23@gmail.com", href: "mailto:humzashaik23@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 7075915407", href: "tel:+917075915407", icon: Phone },
  { label: "Location", value: "Chennai, Tamil Nadu, India", href: "#location", icon: MapPin },
  { label: "GitHub", value: "github.com/HUMZASHAK", href: "https://github.com/HUMZASHAK", icon: Code2, external: true },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/HUMZASHAK", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/humza-shaik", icon: Network },
  { label: "Email", href: "mailto:humzashaik23@gmail.com", icon: Mail },
  { label: "Portfolio", href: "https://portfolio-d8gv0c2wj-humzashaks-projects.vercel.app", icon: Globe2 },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const subject = String(values.get("subject") ?? "").trim();
    const body = String(values.get("message") ?? "").trim();
    const honeypot = String(values.get("website") ?? "").trim();

    if (honeypot) return;
    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || subject.length < 3 || body.length < 10) {
      setStatus("error");
      setMessage("Please complete each field with valid contact details.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: name,
        from_email: email,
        subject,
        message: body,
        to_email: "humzashaik23@gmail.com",
      }, { publicKey });
      form.reset();
      setStatus("success");
      setMessage("Thank you! Your message has been sent successfully.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Get In Touch"
      description="I'm always open to discussing Software Development Internship opportunities, Full Stack Development projects, AI & Data Science collaborations, freelance work, and innovative software ideas."
      align="center"
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  className="group min-h-36 rounded-[24px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_0_36px_rgba(56,189,248,0.05)] backdrop-blur transition hover:border-cyan-300/35 hover:shadow-[0_0_42px_rgba(56,189,248,0.16)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition duration-300 group-hover:rotate-6 group-hover:bg-violet-500/15 group-hover:text-violet-200">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">{item.label}</p>
                  <p className="mt-2 break-words text-sm leading-6 text-slate-200">{item.value}</p>
                </motion.a>
              );
            })}
          </div>

          <motion.article id="location" whileHover={{ y: -4 }} className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_0_55px_rgba(139,92,246,0.08)] backdrop-blur-xl sm:p-7">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-violet-300/25 bg-violet-500/10 text-violet-200"><MapPin size={20} aria-hidden="true" /></span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-200">Current Location</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-100">Chennai, Tamil Nadu, India</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">B.Tech Student in Artificial Intelligence &amp; Data Science</p>
              </div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">Open for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Software Development Internship", "Full Stack Development", "AI Projects", "React Development", "Java Backend Development"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="flex flex-wrap gap-3" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const external = link.href.startsWith("http");
              return (
                <motion.a key={link.label} href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} title={link.label} aria-label={link.label} whileHover={{ y: -3, scale: 1.08, rotate: 3 }} whileTap={{ scale: 0.94 }} className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-slate-200 shadow-[0_0_20px_rgba(56,189,248,0.06)] transition hover:border-cyan-300/45 hover:bg-cyan-400/10 hover:text-cyan-100 hover:shadow-[0_0_28px_rgba(34,211,238,0.22)]">
                  <Icon size={19} aria-hidden="true" />
                </motion.a>
              );
            })}
          </div>

          <a href="https://portfolio-d8gv0c2wj-humzashaks-projects.vercel.app" target="_blank" rel="noreferrer" className="group flex min-h-12 items-center justify-between rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
            Visit Portfolio <ExternalLink size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </a>
        </div>

        <motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="rounded-[28px] border border-white/15 bg-slate-950/60 p-5 shadow-[0_0_70px_rgba(56,189,248,0.08)] backdrop-blur-xl sm:p-8" onSubmit={handleSubmit}>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0" />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="relative block pt-2 text-sm text-slate-300"><span className="absolute left-3 top-0 bg-slate-950 px-1 text-xs text-cyan-200">Full Name</span><input required minLength={2} maxLength={80} autoComplete="name" name="name" className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-cyan-400/5 focus:shadow-[0_0_20px_rgba(34,211,238,0.12)]" placeholder="Your name" /></label>
            <label className="relative block pt-2 text-sm text-slate-300"><span className="absolute left-3 top-0 bg-slate-950 px-1 text-xs text-cyan-200">Email Address</span><input required type="email" maxLength={254} autoComplete="email" name="email" className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-cyan-400/5 focus:shadow-[0_0_20px_rgba(34,211,238,0.12)]" placeholder="you@example.com" /></label>
          </div>
          <label className="relative mt-5 block pt-2 text-sm text-slate-300"><span className="absolute left-3 top-0 bg-slate-950 px-1 text-xs text-cyan-200">Subject</span><input required minLength={3} maxLength={160} name="subject" className="min-h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-cyan-400/5 focus:shadow-[0_0_20px_rgba(34,211,238,0.12)]" placeholder="How can we work together?" /></label>
          <label className="relative mt-5 block pt-2 text-sm text-slate-300"><span className="absolute left-3 top-0 bg-slate-950 px-1 text-xs text-cyan-200">Message</span><textarea required minLength={10} maxLength={3000} name="message" rows={6} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-cyan-400/5 focus:shadow-[0_0_20px_rgba(34,211,238,0.12)]" placeholder="Write your message..." /></label>
          {message && <p role="status" aria-live="polite" className={`mt-5 flex items-center gap-2 text-sm ${status === "success" ? "text-cyan-200" : "text-rose-200"}`}>{status === "success" ? <CheckCircle2 size={18} aria-hidden="true" /> : <AlertCircle size={18} aria-hidden="true" />}{message}</p>}
          <motion.button type="submit" disabled={status === "sending"} whileHover={status === "sending" ? undefined : { y: -2, scale: 1.02 }} whileTap={status === "sending" ? undefined : { scale: 0.98 }} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"><Send size={17} aria-hidden="true" />{status === "sending" ? "Sending..." : "Send Message"}</motion.button>
        </motion.form>
      </div>

      <div className="mx-auto mt-12 max-w-3xl text-center">
        <h3 className="font-display text-2xl font-semibold text-slate-100 sm:text-3xl">Let's Build Something Amazing Together</h3>
        <p className="mt-4 text-base leading-7 text-slate-300">Whether you have an internship opportunity, software project, startup idea, or collaboration in mind, I'd love to hear from you. Let's create something impactful together.</p>
      </div>
    </SectionShell>
  );
}
