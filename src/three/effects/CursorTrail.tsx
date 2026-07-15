import { motion, MotionValue } from "framer-motion";

type CursorTrailProps = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  mode: "default" | "planet";
};

export default function CursorTrail({ x, y, mode }: CursorTrailProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[55]"
      style={{ x, y }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={index}
          className={`absolute h-3 w-3 rounded-full ${mode === "planet" ? "bg-cyan-300/50" : "bg-white/35"}`}
          style={{
            translateX: `${-6 + index * 1.4}px`,
            translateY: `${-6 + index * 1.4}px`,
            opacity: 1 - index * 0.11,
            scale: 1 - index * 0.07,
            filter: mode === "planet" ? "blur(8px)" : "blur(6px)",
          }}
        />
      ))}
    </motion.div>
  );
}
