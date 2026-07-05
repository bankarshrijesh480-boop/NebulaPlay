import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "RTX Cloud Gaming",
    description:
      "Experience next-generation cloud GPUs delivering ultra-realistic graphics with ray tracing support.",
  },
  {
    icon: Zap,
    title: "Ultra Low Latency",
    description:
      "Optimized edge servers ensure lightning-fast response times for competitive gaming.",
  },
  {
    icon: MonitorSmartphone,
    title: "Play Anywhere",
    description:
      "Continue your games seamlessly across PC, mobile, tablet and smart TVs.",
  },
  {
    icon: Cloud,
    title: "Cloud Saves",
    description:
      "Your progress is automatically synchronized across every supported device.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Encrypted cloud infrastructure protects your account, saves and purchases.",
  },
  {
    icon: Sparkles,
    title: "AI Optimization",
    description:
      "Our AI engine automatically selects the fastest server and best streaming quality.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Platform Features
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Built for the
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Future
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            NebulaPlay combines cutting-edge cloud infrastructure, AI-powered
            optimization and enterprise-grade performance for an exceptional
            gaming experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-24" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}