import Stars from "./Stars";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-56 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]"
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] right-[-180px] h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[170px]"
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -70, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-blue-500/15 blur-[170px]"
      />
     <Stars />
     
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(0,0,0,.55) 100%)",
        }}
      />
    </div>
  );
}