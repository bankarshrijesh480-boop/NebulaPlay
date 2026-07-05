import { motion } from "framer-motion";
import {
  Activity,
  Gauge,
  Globe,
  Monitor,
} from "lucide-react";

const metrics = [
  {
    icon: Gauge,
    title: "Ultra Low Latency",
    value: "<10ms",
    color: "text-cyan-400",
  },
  {
    icon: Activity,
    title: "Maximum FPS",
    value: "240 FPS",
    color: "text-emerald-400",
  },
  {
    icon: Monitor,
    title: "4K HDR Streaming",
    value: "4K HDR",
    color: "text-violet-400",
  },
  {
    icon: Globe,
    title: "Global Edge Servers",
    value: "150+",
    color: "text-sky-400",
  },
];

export default function PerformanceMetrics() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;

        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
              <Icon
                size={28}
                className={metric.color}
              />
            </div>

            <h3 className="mt-6 text-3xl font-black text-white">
              {metric.value}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-400">
              {metric.title}
            </p>

            <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-20" />
          </motion.div>
        );
      })}
    </div>
  );
}