import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const achievements = [
  { title: "Hackathons", text: "Planning to participate in more problem-solving and product-building challenges." },
  { title: "Coding Competitions", text: "Regularly practicing DSA and competitive programming fundamentals." },
  { title: "Academic Achievements", text: "Building a strong foundation through AI and Data Science coursework." },
  { title: "Open Source", text: "Interested in contributing to meaningful projects and collaborative learning." },
  { title: "Personal Milestones", text: "Continuously shipping projects and turning concepts into working applications." },
];

export default function AchievementsSection() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Achievements"
      title="Building momentum through consistent progress and ambitious learning."
      description="This section is structured to grow with my journey as I complete new milestones and take on bigger challenges."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
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
