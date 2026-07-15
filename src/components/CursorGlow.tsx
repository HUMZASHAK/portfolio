import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"default" | "planet">("default");
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.3 });

  useEffect(() => {
    setMounted(true);

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleMode = (event: Event) => {
      const detail = (event as CustomEvent<{ mode?: "default" | "planet" }>).detail;
      if (detail?.mode) {
        setMode(detail.mode);
      }
    };

    const handleTarget = (event: MouseEvent) => {
      setInteractive(Boolean((event.target as Element | null)?.closest("a, button, input, textarea, select, [role='button']")));
    };
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleTarget);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("portfolio-cursor-mode", handleMode as EventListener);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleTarget);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("portfolio-cursor-mode", handleMode as EventListener);
    };
  }, [x, y]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{ background: "radial-gradient(circle at 0 0, rgba(34,211,238,0.12), transparent 28%)" }}
    >
      <motion.div
        className={`absolute rounded-full blur-3xl ${mode === "planet" || interactive ? "h-24 w-24 bg-cyan-400/30" : "h-20 w-20 bg-violet-400/15"}`}
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="absolute grid place-items-center"
        animate={{ scale: pressed ? 0.72 : interactive ? 1.24 : 1 }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.span
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: interactive ? 1.6 : 4, repeat: Infinity, ease: "linear" }}
          className={`absolute h-9 w-9 rounded-full border border-dashed ${interactive ? "border-cyan-200/90" : "border-violet-200/65"}`}
        />
        <motion.span
          aria-hidden="true"
          animate={{ rotate: -360 }}
          transition={{ duration: interactive ? 1.1 : 3.2, repeat: Infinity, ease: "linear" }}
          className="absolute h-6 w-11 rounded-full border border-cyan-200/65"
        />
        <span className={`relative h-2.5 w-2.5 rotate-45 rounded-[2px] ${interactive ? "bg-cyan-100 shadow-[0_0_14px_rgba(165,243,252,1)]" : "bg-violet-200 shadow-[0_0_12px_rgba(196,181,253,0.95)]"}`} />
        <span className="absolute h-px w-14 bg-gradient-to-r from-transparent via-cyan-100/75 to-transparent" />
        <span className="absolute h-14 w-px bg-gradient-to-b from-transparent via-cyan-100/60 to-transparent" />
      </motion.div>
    </motion.div>
  );
}
