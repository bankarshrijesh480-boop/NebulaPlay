import { motion } from "framer-motion";
import {
  ChevronRight,
  Play,
  Cpu,
  Gamepad2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "4K",
    label: "Ultra HD",
  },
  {
    value: "240FPS",
    label: "Competitive Ready",
  },
  {
    value: "<10ms",
    label: "Ultra Low Latency",
  },
  {
    value: "500+",
    label: "AAA Games",
  },
];

const features = [
  {
    icon: Cpu,
    title: "RTX Cloud GPUs",
  },
  {
    icon: Zap,
    title: "Instant Launch",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
  },
  {
    icon: Gamepad2,
    title: "Cross Platform",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[180px]" />
        <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[180px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pt-24 pb-20 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl"
            >
              <Zap size={16} />
              Next Generation Cloud Gaming
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl xl:text-7xl"
            >
              Play
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                Anywhere.
              </span>

              <br />

              Experience
              <br />

              The Future.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
            >
              NebulaPlay delivers console-quality cloud gaming powered by
              next-generation GPU clusters, ultra-low latency streaming and
              cinematic visuals across every device.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.45)]">
                Start Playing
                <ChevronRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-white/10">
                <Play
                  size={18}
                  className="fill-current transition-transform group-hover:scale-110"
                />
                Watch Trailer
              </button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
                  >
                    <Icon
                      size={20}
                      className="text-cyan-400"
                    />

                    <span className="text-sm text-slate-200">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            {/* Main Glass Card */}
            <div className="relative w-full max-w-[620px] overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-3xl">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

              {/* Hero Image */}
              <img
                src="/images/hero/hero.webp"
                alt="NebulaPlay Hero"
                className="h-full w-full object-cover"
              />

              {/* Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent p-8">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-sm font-medium text-emerald-300">
                    Servers Online
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  RTX Ultra Cloud Infrastructure
                </h3>

                <p className="mt-2 text-slate-300">
                  Play instantly with enterprise-grade GPU performance powered
                  by distributed cloud clusters.
                </p>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute -left-8 top-16 rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-5 backdrop-blur-2xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Cloud Status
              </p>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-400" />

                <span className="font-semibold text-white">
                  99.99% Uptime
                </span>
              </div>
            </motion.div>

            {/* FPS Card */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="absolute -right-8 bottom-24 rounded-3xl border border-violet-500/20 bg-slate-900/70 p-6 backdrop-blur-2xl"
            >
              <div className="text-4xl font-black text-cyan-400">240</div>

              <div className="text-sm text-slate-300">
                FPS Streaming
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative border-t border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 lg:px-10">
          {stats.map((item) => (
            <motion.div
              whileHover={{
                y: -5,
              }}
              key={item.label}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-black text-transparent">
                {item.value}
              </div>

              <div className="mt-2 text-sm tracking-wide text-slate-400">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}