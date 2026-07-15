import { motion } from "framer-motion";

const stars = Array.from({ length: 150 }, (_, index) => ({
  id: index,
  // Deterministic distribution avoids a new pattern on every render.
  left: `${(index * 37.71) % 100}%`,
  top: `${(index * 61.33 + (index % 9) * 7) % 100}%`,
  size: index % 17 === 0 ? 3 : index % 5 === 0 ? 2 : 1,
  duration: 3.5 + (index % 8) * 0.85,
  delay: (index % 13) * 0.22,
  color: index % 11 === 0 ? "bg-fuchsia-200" : index % 7 === 0 ? "bg-cyan-200" : "bg-white",
  opacity: index % 17 === 0 ? 0.72 : index % 5 === 0 ? 0.52 : 0.32,
}));

const shootingStars = [
  { id: "north", top: "9%", duration: 1.5, delay: 0.2, repeatDelay: 4.5, width: 240 },
  { id: "upper", top: "24%", duration: 1.7, delay: 2.2, repeatDelay: 5.8, width: 280 },
  { id: "middle", top: "43%", duration: 1.45, delay: 4.1, repeatDelay: 5.2, width: 220 },
  { id: "lower", top: "61%", duration: 1.6, delay: 1.3, repeatDelay: 6.5, width: 260 },
  { id: "south", top: "78%", duration: 1.35, delay: 3.4, repeatDelay: 5.6, width: 200 },
];

export default function ParticleField() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden mix-blend-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_48%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.05),transparent_44%)]" />
      {stars.map((star) => (
        <motion.span
          key={star.id}
          initial={{ opacity: star.opacity * 0.45, scale: 0.75 }}
          animate={{ opacity: [star.opacity * 0.35, star.opacity, star.opacity * 0.35], scale: [0.72, 1.18, 0.72] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute rounded-full ${star.color}`}
          style={{ left: star.left, top: star.top, width: star.size, height: star.size, boxShadow: star.size > 1 ? "0 0 9px currentColor" : undefined }}
        />
      ))}
      <div className="absolute inset-0 z-[5] overflow-hidden">
        {shootingStars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute h-[2px] -rotate-[24deg] rounded-full bg-gradient-to-r from-transparent via-cyan-200 to-white shadow-[0_0_16px_rgba(186,230,253,1)]"
            style={{ top: star.top, width: star.width }}
            initial={{ x: "-28vw", opacity: 0 }}
            animate={{ x: ["-28vw", "118vw"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, repeatDelay: star.repeatDelay, ease: "linear" }}
          />
        ))}
      </div>
    </div>
  );
}
