import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

export default function ResumeSection() {
  return (
    <SectionShell
      id="resume"
      eyebrow="Resume"
      title="A quick, structured summary for recruiters."
      description="This section gives a concise snapshot of who I am, what I build, and where I am headed."
      align="center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-3xl rounded-[24px] border border-white/15 bg-white/10 px-5 py-8 text-center shadow-[0_0_80px_rgba(56,189,248,0.08)] backdrop-blur-xl sm:rounded-[32px] sm:px-8 sm:py-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick summary</p>
        <h3 className="mt-4 font-display text-2xl font-semibold text-slate-50">Software Engineer Aspirant • Full Stack • Backend • AI & Data Science</h3>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          I build practical software solutions using Java, Spring Boot, React, React Native, Firebase, and MySQL, while continuously growing in backend engineering, AI, and product-focused development.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a href="/resume.pdf" className="min-h-11 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20" download>
            Download Resume
          </a>
          <a href="https://github.com/shaikhumza" target="_blank" rel="noreferrer" className="min-h-11 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/20">
            View GitHub
          </a>
        </div>
      </motion.div>
    </SectionShell>
  );
}
