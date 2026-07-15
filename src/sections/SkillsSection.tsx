import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const skillGroups = {
  All: [
    { name: "Java", level: "Advanced" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "React Native", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "REST APIs", level: "Advanced" },
    { name: "Git & GitHub", level: "Advanced" },
  ],
  Frontend: [
    { name: "React.js", level: "Advanced" },
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
  ],
  Backend: [
    { name: "Spring Boot", level: "Advanced" },
    { name: "Hibernate", level: "Intermediate" },
    { name: "REST APIs", level: "Advanced" },
    { name: "MySQL", level: "Intermediate" },
  ],
  AI: [
    { name: "AI & Data Science", level: "Intermediate" },
    { name: "Problem Solving", level: "Advanced" },
    { name: "Data Structures", level: "Intermediate" },
  ],
  Data: [
    { name: "SQL", level: "Advanced" },
    { name: "Database Design", level: "Intermediate" },
    { name: "Analytics Thinking", level: "Intermediate" },
  ],
  Cloud: [
    { name: "Firebase", level: "Intermediate" },
    { name: "Deployment", level: "Intermediate" },
    { name: "Version Control", level: "Advanced" },
  ],
} as const;

export default function SkillsSection() {
  const [active, setActive] = useState<keyof typeof skillGroups>("All");

  const visibleSkills = useMemo(() => skillGroups[active], [active]);

  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="A modern stack for modern products."
      description="I build across the full product experience, from cinematic interfaces to reliable engineering foundations."
    >
      <div className="flex flex-wrap gap-3">
        {Object.keys(skillGroups).map((category) => (
          <motion.button
            key={category}
            type="button"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActive(category as keyof typeof skillGroups)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === category
                ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-[24px] border border-white/10 bg-slate-950/55 p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-slate-100">{skill.name}</h3>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                {skill.level}
              </span>
            </div>
            <div className="mt-6 h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                style={{ width: skill.level === "Advanced" ? "90%" : "70%" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
