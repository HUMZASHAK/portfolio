import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

export default function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Open to software internships and collaborative opportunities."
      description="I’m looking for opportunities where I can contribute, learn, and grow as a developer while building meaningful products."
      align="center"
    >
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 shadow-[0_0_80px_rgba(56,189,248,0.08)] backdrop-blur-xl sm:rounded-[32px] sm:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Let’s connect</p>
          <p className="mt-5 text-lg leading-8 text-slate-300">Open to software internships, project collaborations, and thoughtful engineering conversations.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-400">
            <p><span className="text-slate-200">Email</span><br />shaik.humza@example.com</p>
            <p><span className="text-slate-200">Location</span><br />Chennai, India</p>
            <p><a href="https://github.com/shaikhumza" target="_blank" rel="noreferrer" className="text-cyan-300 transition hover:text-cyan-200">GitHub ↗</a> · <a href="https://linkedin.com/in/shaikhumza" target="_blank" rel="noreferrer" className="text-cyan-300 transition hover:text-cyan-200">LinkedIn ↗</a></p>
          </div>
        </div>
        <motion.form initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-[24px] border border-white/15 bg-slate-950/60 p-5 backdrop-blur sm:rounded-[32px] sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-300">Name<input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50" placeholder="Your name" /></label>
            <label className="text-sm text-slate-300">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50" placeholder="you@example.com" /></label>
          </div>
          <label className="mt-4 block text-sm text-slate-300">Subject<input required name="subject" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50" placeholder="How can we work together?" /></label>
          <label className="mt-4 block text-sm text-slate-300">Message<textarea required name="message" rows={4} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50" placeholder="Write your message..." /></label>
          <motion.button type="submit" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6 min-h-11 w-full rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition hover:bg-cyan-400/20 sm:w-auto">Send message</motion.button>
        </motion.form>
      </div>
    </SectionShell>
  );
}
