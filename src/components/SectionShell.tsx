import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  align?: "left" | "center";
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "left",
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className={`mb-8 max-w-3xl sm:mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}>
        <p className="mb-4 inline-flex max-w-full rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300 sm:px-4 sm:text-sm sm:tracking-[0.3em]">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{description}</p>
      </div>

      {children}
    </motion.section>
  );
}
