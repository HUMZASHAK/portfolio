import { motion } from "framer-motion";

export default function AmbientBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-8%] top-[10%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 35, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[6%] right-[-6%] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
      />
    </div>
  );
}
