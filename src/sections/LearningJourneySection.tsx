import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const milestones = [
  { year: "School", title: "Built curiosity for logic and problem solving" },
  { year: "College", title: "Started formal exposure to AI, data, and software systems" },
  { year: "Programming", title: "Learned core programming and strong fundamentals" },
  { year: "Java", title: "Developed backend confidence with OOP and structured applications" },
  { year: "Spring Boot", title: "Built REST APIs and scalable backend services" },
  { year: "React", title: "Crafted interactive frontend experiences" },
  { year: "React Native", title: "Extended products into mobile experiences" },
  { year: "Firebase", title: "Integrated authentication and real-time data" },
  { year: "Trackit", title: "Turned learning into a real-world full-stack project" },
  { year: "AI", title: "Deepened interest in intelligent, data-driven systems" },
  { year: "Future", title: "Aiming for deeper backend, AI, and product engineering expertise" },
];

export default function LearningJourneySection() {
  return (
    <SectionShell
      id="learning-journey"
      eyebrow="Learning Journey"
      title="A path shaped by curiosity, consistency, and execution."
      description="My growth has been iterative: building fundamentals, creating projects, learning from real use cases, and expanding into more ambitious systems."
    >
      <div className="relative space-y-6">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/80 to-violet-500/20" />
        {milestones.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="relative ml-2 rounded-[24px] border border-white/10 bg-slate-950/60 p-6 pl-10 backdrop-blur"
          >
            <div className="absolute left-1 top-7 h-4 w-4 -translate-x-1/2 rounded-full border border-cyan-300 bg-cyan-400/80" />
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.year}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-slate-100">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
