import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 6,
}));

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Aurora */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-[650px] w-[650px] rounded-full bg-cyan-500/20 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 1.2, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-180px] top-24 h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[190px]"
        />

        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[170px]"
        />
      </div>

      {/* Animated Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "0px 80px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(2,6,23,.92)_100%)]" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{
            y: [0, -80, 0],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-300"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Moving Light Beam */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute left-1/2 top-0 h-full w-[220px] -translate-x-1/2 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent blur-3xl" />
      </motion.div>

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      {/* Left Fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent" />

      {/* Right Fade */}
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent" />
    </div>
  );
}