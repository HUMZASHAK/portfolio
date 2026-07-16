import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4 lg:px-12">
        <a href="#top" aria-label="Shaik Humza — back to top" className="group flex items-center gap-3">
          <img src="/humza-logo.png" alt="Shaik Humza logo" className="h-11 w-11 rounded-xl border border-cyan-300/25 object-cover shadow-[0_0_18px_rgba(56,189,248,0.25)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(168,85,247,0.35)]" />
          <span className="hidden font-display text-sm font-semibold tracking-[0.2em] text-slate-50 sm:block">HUMZA</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden gap-4 lg:flex xl:gap-6">
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
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-slate-100 backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px w-full bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 top-[68px] z-0 bg-[#050816]/55 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 32 }}
              transition={{ type: "spring", stiffness: 330, damping: 30 }}
              className="absolute right-3 top-[calc(100%+0.5rem)] z-10 flex w-[min(21rem,calc(100vw-1.5rem))] flex-col gap-1 rounded-2xl border border-white/15 bg-[#081126]/90 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden"
            >
              {links.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="min-h-11 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-300">
                  {link.label}
                </a>
              ))}
              <a href="/resume.pdf" download onClick={() => setIsOpen(false)} className="mt-2 flex min-h-11 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 focus-visible:outline-2 focus-visible:outline-cyan-300">
                Download Resume
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
