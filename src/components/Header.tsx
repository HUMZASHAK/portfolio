import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#top" aria-label="Shaik Humza — back to top" className="group flex items-center gap-3">
          <img src="/humza-logo.png" alt="Shaik Humza logo" className="h-11 w-11 rounded-xl border border-cyan-300/25 object-cover shadow-[0_0_18px_rgba(56,189,248,0.25)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(168,85,247,0.35)]" />
          <span className="hidden font-display text-sm font-semibold tracking-[0.2em] text-slate-50 sm:block">HUMZA</span>
        </a>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
