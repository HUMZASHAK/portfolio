import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";

const projects = [
  {
    title: "Trackit",
    description: "A full-stack employee management experience focused on authentication, role-based access, project tracking, and modern responsive interfaces for web and mobile.",
    stack: ["React", "React Native", "Spring Boot", "Firebase", "MySQL"],
    details: ["Role-based access", "Dashboard workflow", "Mobile-ready design", "Scalable backend"],
    link: "#",
  },
  {
    title: "Bank Aggregator Application",
    description: "A backend-driven banking platform designed to unify customer information and expose secure APIs for organized data access.",
    stack: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    details: ["Secure API layer", "Database design", "Customer management", "Backend structure"],
    link: "#",
  },
  {
    title: "ABC Travels",
    description: "A Core Java desktop application for booking, fare calculation, validation, and account handling with strong logic and exception control.",
    stack: ["Core Java", "JDBC", "SQL", "Collections"],
    details: ["Booking workflow", "Fare logic", "Date validation", "Account management"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Selected work that balances beauty and performance."
      description="Every project is designed to feel premium, fast, and intentional from first interaction to final animation."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-slate-900/80 p-7 shadow-[0_0_60px_rgba(56,189,248,0.06)] backdrop-blur"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_28%)] opacity-80 transition duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 h-32 rounded-[20px] border border-white/10 bg-white/5" />
              <h3 className="font-display text-2xl font-semibold text-slate-50">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-400">
                {project.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                className="mt-8 inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                View project →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
