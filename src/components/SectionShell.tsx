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
      className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold text-slate-50 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
      </div>

      {children}
    </motion.section>
  );
}
