import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";
import { aboutHighlights, aboutStats } from "../data/content";

export default function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="From AI studies to full-stack product building."
      description="I combine strong fundamentals in software engineering with hands-on experience in web, mobile, and backend development to build practical, scalable solutions."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -6, rotate: -0.6 }}
          className="group relative overflow-hidden rounded-[32px] border border-cyan-300/20 bg-white/10 p-3 shadow-[0_0_80px_rgba(56,189,248,0.14)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.28),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.25),transparent_42%)] opacity-70 blur-2xl transition duration-700 group-hover:opacity-100" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/10">
            <img src="/images/shaik-humza-profile.jpeg" alt="Shaik Humza" className="aspect-[4/5] w-full object-cover object-center transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/35 to-transparent px-6 pb-6 pt-20">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Software engineer aspirant</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-slate-50">Shaik Humza</h3>
            </div>
          </div>
          <div className="relative mt-3 grid gap-3 sm:grid-cols-3">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-slate-950/55 p-3">
                <p className="text-lg font-semibold text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-4 text-center sm:text-left"
        >
          {aboutHighlights.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-white/10 bg-slate-950/50 p-5 backdrop-blur sm:p-6">
              <h4 className="font-display text-xl font-semibold text-slate-100">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
