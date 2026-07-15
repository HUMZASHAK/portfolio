import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const topics = [
  { title: "Arrays & Strings", progress: "85%" },
  { title: "Stacks & Queues", progress: "75%" },
  { title: "Trees & Graphs", progress: "70%" },
  { title: "Dynamic Programming", progress: "60%" },
];

const platforms = ["LeetCode", "HackerRank", "CodeChef"];

export default function DsaSection() {
  return (
    <SectionShell
      id="dsa"
      eyebrow="DSA"
      title="Problem solving is a core part of how I grow as an engineer."
      description="I focus on strengthening my reasoning, algorithmic thinking, and coding discipline through structured practice and consistent effort."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-[28px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur"
        >
          <h3 className="font-display text-2xl font-semibold text-slate-100">Practice Focus</h3>
          <div className="mt-6 space-y-4">
            {topics.map((topic) => (
              <div key={topic.title}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{topic.title}</span>
                  <span className="text-cyan-300">{topic.progress}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: topic.progress }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-slate-900/80 p-8 backdrop-blur"
        >
          <h3 className="font-display text-2xl font-semibold text-slate-100">Platforms</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <span key={platform} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {platform}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-slate-400">
            I use structured practice to sharpen my ability to reason about edge cases, optimize solutions, and build reliable logic under constraints.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
