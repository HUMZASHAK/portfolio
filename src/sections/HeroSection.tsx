import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, scale: 1.01, rotate: -0.5 }}
          className="max-w-2xl rounded-[32px] border border-white/15 bg-white/10 px-8 py-10 shadow-[0_0_80px_rgba(56,189,248,0.12)] backdrop-blur-xl sm:px-10"
        >
          <p className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.32em] text-cyan-300">
            Software Development Intern Aspirant • AI & Data Science Student
          </p>

          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Building scalable software with modern web and AI-driven solutions.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            I’m Shaik Humza, a B.Tech student in Artificial Intelligence and Data Science building full-stack applications, backend systems, and mobile experiences with Java, Spring Boot, React, React Native, Firebase, and MySQL.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/20"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm tracking-[0.3em] text-slate-300 backdrop-blur"
      >
        Explore the galaxy
      </motion.div>
    </section>
  );
}
