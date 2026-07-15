import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const stack = [
  { name: "Java", reason: "Strong backend foundation and object-oriented problem solving." },
  { name: "Spring Boot", reason: "Reliable API development and service architecture." },
  { name: "React", reason: "Modern interactive frontend experiences and component systems." },
  { name: "React Native", reason: "Cross-platform mobile experiences with shared product logic." },
  { name: "Firebase", reason: "Fast authentication and real-time data integration." },
  { name: "MySQL", reason: "Structured data storage for practical product needs." },
];

export default function TechStackSection() {
  return (
    <SectionShell
      id="tech-stack"
      eyebrow="Tech Stack"
      title="A focused stack for building thoughtful software products."
      description="I choose tools based on maintainability, clarity, and the value they bring to the end product."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stack.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur"
          >
            <h3 className="font-display text-xl font-semibold text-slate-100">{item.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{item.reason}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
