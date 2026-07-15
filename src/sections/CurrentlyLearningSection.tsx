import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const topics = [
  { name: "Docker", status: "In Progress" },
  { name: "AWS", status: "In Progress" },
  { name: "Spring Security", status: "Planned" },
  { name: "Microservices", status: "Planned" },
  { name: "Machine Learning", status: "In Progress" },
  { name: "Python", status: "In Progress" },
  { name: "System Design", status: "In Progress" },
];

export default function CurrentlyLearningSection() {
  return (
    <SectionShell
      id="currently-learning"
      eyebrow="Currently Learning"
      title="Expanding beyond the basics into serious engineering depth."
      description="I’m actively strengthening my backend, cloud, and AI foundations so I can build more robust and production-ready systems."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-slate-100">{topic.name}</h3>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                {topic.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
