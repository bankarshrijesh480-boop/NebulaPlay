import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

export default function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 select-none"
    >
      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-violet-600 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
      >
        <Gamepad2
          size={24}
          className="text-white"
          strokeWidth={2.2}
        />
      </motion.div>

      <div className="leading-none">
        <motion.h1
          whileHover={{
            x: 2,
          }}
          className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-2xl font-black tracking-tight text-transparent"
        >
          NebulaPlay
        </motion.h1>

        <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-slate-400">
          Cloud Gaming
        </p>
      </div>
    </Link>
  );
}