import { motion } from "framer-motion";
import {
  Activity,
  Cloud,
  Cpu,
  Server,
  Wifi,
} from "lucide-react";

const performance = [
  {
    title: "GPU Performance",
    value: 98,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Network Stability",
    value: 99,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Streaming Quality",
    value: 97,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    title: "Cloud Availability",
    value: 100,
    gradient: "from-sky-500 to-cyan-500",
  },
];

const cards = [
  {
    icon: Server,
    title: "GPU Nodes",
    value: "2,048",
  },
  {
    icon: Wifi,
    title: "Network",
    value: "99.99%",
  },
  {
    icon: Cpu,
    title: "AI Routing",
    value: "Active",
  },
  {
    icon: Cloud,
    title: "Cloud",
    value: "Online",
  },
];

export default function PerformanceDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
    >
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Live Infrastructure
          </h3>

          <p className="mt-1 text-slate-400">
            Real-time cloud performance
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-sm font-medium text-emerald-300">
            Operational
          </span>
        </div>
      </div>

      {/* Performance Bars */}
      <div className="space-y-8">
        {performance.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-medium text-white">
                {item.title}
              </span>

              <span className="font-bold text-cyan-300">
                {item.value}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${item.value}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                }}
                className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Cards */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={24}
                  className="text-cyan-400"
                />

                <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-300">
                  LIVE
                </span>
              </div>

              <h4 className="mt-6 text-2xl font-bold text-white">
                {card.value}
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                {card.title}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-300">
              Current Status
            </p>

            <h4 className="mt-2 text-2xl font-bold text-white">
              Global Network Stable
            </h4>

            <p className="mt-2 text-slate-400">
              AI-powered routing automatically connects every player to the
              fastest available cloud region for the best gaming experience.
            </p>
          </div>

          <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 lg:flex">
            <Activity
              size={34}
              className="text-cyan-400"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
