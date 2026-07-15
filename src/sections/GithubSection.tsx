import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const stats = [
  { label: "Pinned Repositories", value: "3+" },
  { label: "Contribution Focus", value: "Full Stack" },
  { label: "Languages", value: "Java / JS / SQL" },
  { label: "Activity", value: "Consistent" },
];

export default function GithubSection() {
  return (
    <SectionShell
      id="github"
      eyebrow="GitHub"
      title="A growing developer profile with real project history."
      description="This section highlights the kind of coding activity recruiters often look for: consistency, relevance, and project depth."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-[28px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur"
        >
          <h3 className="font-display text-2xl font-semibold text-slate-100">Developer Activity</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            GitHub is where I keep building, iterating, and documenting my solutions. I’m focused on building projects that reflect both engineering quality and product thinking.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
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
          <h3 className="font-display text-2xl font-semibold text-slate-100">Featured Repositories</h3>
          <div className="mt-6 space-y-4">
            {[
              { name: "Trackit", description: "Employee management system with web and mobile interfaces." },
              { name: "Bank Aggregator", description: "Backend-focused banking solution with REST APIs and databases." },
              { name: "ABC Travels", description: "Core Java desktop system for travel booking and validation." },
            ].map((repo) => (
              <div key={repo.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-slate-100">{repo.name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{repo.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
