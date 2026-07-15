import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";
import { whyHireMePoints } from "../data/content";

export default function WhyHireMeSection() {
  return (
    <SectionShell
      id="why-hire-me"
      eyebrow="Why Hire Me"
      title="I build with purpose, speed, and curiosity."
      description="I bring a balanced mix of technical execution, product thinking, and a growth mindset that helps me learn fast and ship responsibly."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {whyHireMePoints.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur"
          >
            <h3 className="font-display text-xl font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
