import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const certifications = [
  {
    title: "Java Full Stack Programming",
    provider: "Training Program",
    date: "2024",
    takeaway: "Built a stronger foundation in full-stack development and modern Java-based application flow.",
  },
  {
    title: "React.js Essentials",
    provider: "Training Program",
    date: "2024",
    takeaway: "Learned component-driven UI development and modern frontend practices.",
  },
  {
    title: "AI Powered Data Analytics",
    provider: "Training Program",
    date: "2024",
    takeaway: "Developed a practical understanding of data-driven thinking and AI-assisted analysis.",
  },
  {
    title: "Data Structures and Algorithms",
    provider: "Training Program",
    date: "2024",
    takeaway: "Strengthened my problem-solving approach and coding fundamentals.",
  },
];

export default function CertificationsSection() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Certifications"
      title="Professional learning milestones that reinforce my technical foundation."
      description="These certifications reflect my commitment to building practical skills in software engineering, frontend development, and data-driven thinking."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded-[24px] border border-white/10 bg-slate-950/60 p-7 backdrop-blur"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-slate-100">{cert.title}</h3>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                {cert.date}
              </span>
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-400">{cert.provider}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{cert.takeaway}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
