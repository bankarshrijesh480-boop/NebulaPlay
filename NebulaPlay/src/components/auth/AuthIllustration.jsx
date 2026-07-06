import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Gamepad2,
  ShieldCheck,
  Sparkles,
  Zap,
  MonitorPlay,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Instant Cloud Gaming",
    description: "Play AAA games instantly without downloads or installations.",
  },
  {
    icon: Zap,
    title: "Ultra Low Latency",
    description: "Powered by next-generation cloud infrastructure worldwide.",
  },
  {
    icon: Cpu,
    title: "RTX Graphics",
    description: "Experience ray tracing and high frame rates in the cloud.",
  },
];

const stats = [
  {
    icon: Gamepad2,
    value: "500+",
    label: "AAA Games",
  },
  {
    icon: Wifi,
    value: "<20ms",
    label: "Latency",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "Uptime",
  },
];

export default function AuthIllustration() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

      {/* Hero Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
      >
        {/* Floating Badge */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300"
        >
          <Sparkles size={18} />
          Welcome to NebulaPlay
        </motion.div>

        {/* Main Icon */}
        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 shadow-[0_0_80px_rgba(6,182,212,0.35)]"
        >
          <MonitorPlay
            size={72}
            className="text-white"
          />
        </motion.div>

        {/* Heading */}
        <div className="mt-10 text-center">
          <h2 className="text-5xl font-black leading-tight text-white">
            Next Generation
            <br />
            Cloud Gaming
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Stream your favorite AAA games instantly with RTX-powered graphics,
            ultra-low latency, and seamless cloud saves across every device.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  x: 8,
                }}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="rounded-2xl bg-cyan-500/10 p-3">
                  <Icon
                    size={24}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <Icon
                  size={24}
                  className="mx-auto text-cyan-400"
                />

                <div className="mt-4 text-3xl font-black text-white">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}