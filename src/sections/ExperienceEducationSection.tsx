import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const entries = [
  { label: "Education", title: "B.Tech — Artificial Intelligence & Data Science", detail: "KCG College of Technology · Expected 2028", accent: "cyan" },
  { label: "Experience", title: "Independent Full Stack Project Builder", detail: "Building web, mobile, and backend systems through real product-focused projects.", accent: "violet" },
  { label: "Focus", title: "Software Development Internship Aspirant", detail: "Seeking opportunities to contribute to production-minded teams, learn quickly, and ship useful work.", accent: "cyan" },
];

export default function ExperienceEducationSection() {
  return (
    <SectionShell id="experience" eyebrow="Experience & Education" title="Learning deeply, then applying it deliberately." description="My path is shaped by formal AI and data science study, consistent engineering practice, and a focus on building real systems.">
      <div className="relative mx-auto max-w-4xl space-y-5 border-l border-white/10 pl-7 sm:pl-10">
        {entries.map((entry, index) => (
          <motion.article key={entry.title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="relative rounded-[26px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
            <span className={`absolute -left-[35px] top-8 h-4 w-4 rounded-full border ${entry.accent === "cyan" ? "border-cyan-200 bg-cyan-400" : "border-violet-200 bg-violet-500"} shadow-[0_0_18px_rgba(34,211,238,0.65)]`} />
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300">{entry.label}</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-slate-100">{entry.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{entry.detail}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
