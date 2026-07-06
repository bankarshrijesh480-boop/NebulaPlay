import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthLayout({
  title,
  subtitle,
  children,
  illustration,
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e933,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#8b5cf633,transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617,#020617,#030712)]" />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]"
        />
      </div>

      {/* Grid */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="hidden lg:block"
          >
            {illustration}
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mx-auto w-full max-w-xl"
          >
            <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-12">
              {/* Logo */}
              <Link
                to="/"
                className="mb-10 inline-flex items-center gap-3"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Gamepad2 size={28} />
                </div>

                <div>
                  <h1 className="text-2xl font-black tracking-wide">
                    NebulaPlay
                  </h1>

                  <p className="text-sm text-slate-400">
                    Cloud Gaming Platform
                  </p>
                </div>
              </Link>

              {/* Heading */}
              <div className="mb-10">
                <h2 className="text-4xl font-black text-white">
                  {title}
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-400">
                  {subtitle}
                </p>
              </div>

              {/* Form */}
              {children}
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} NebulaPlay. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}