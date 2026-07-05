import { motion } from "framer-motion";
import {
  Cpu,
  Monitor,
  MemoryStick,
  HardDrive,
  Cloud,
  Wifi,
  CheckCircle2,
} from "lucide-react";

const minimum = [
  {
    icon: Cpu,
    label: "Processor",
    value: "Intel Core i5-10400 / Ryzen 5 3600",
  },
  {
    icon: MemoryStick,
    label: "Memory",
    value: "16 GB RAM",
  },
  {
    icon: Monitor,
    label: "Graphics",
    value: "RTX 2060 / RX 6600 XT",
  },
  {
    icon: HardDrive,
    label: "Storage",
    value: "120 GB SSD",
  },
];

const recommended = [
  {
    icon: Cpu,
    label: "Processor",
    value: "Intel Core i7-14700K / Ryzen 7 7800X3D",
  },
  {
    icon: MemoryStick,
    label: "Memory",
    value: "32 GB RAM",
  },
  {
    icon: Monitor,
    label: "Graphics",
    value: "RTX 4080 / RX 7900 XTX",
  },
  {
    icon: HardDrive,
    label: "Storage",
    value: "150 GB NVMe SSD",
  },
];

const cloudSpecs = [
  "No Downloads Required",
  "RTX Cloud Rendering",
  "4K HDR Streaming",
  "Up to 240 FPS",
  "Cloud Saves",
  "Cross Platform Support",
  "Ultra-Low Latency Servers",
  "Instant Launch",
];

export default function SystemRequirements() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <Cpu size={16} />
            Requirements
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            System Requirements
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
            Play locally on your gaming PC or stream instantly through the
            NebulaPlay cloud.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Minimum */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white">
              Minimum
            </h3>

            <div className="mt-8 space-y-6">
              {minimum.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-2xl bg-cyan-500/10 p-3">
                      <Icon
                        size={20}
                        className="text-cyan-400"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">
                        {item.label}
                      </p>

                      <p className="mt-1 font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Recommended */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white">
              Recommended
            </h3>

            <div className="mt-8 space-y-6">
              {recommended.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-2xl bg-cyan-500/20 p-3">
                      <Icon
                        size={20}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-slate-300">
                        {item.label}
                      </p>

                      <p className="mt-1 font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Cloud Gaming */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-cyan-500/10 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Cloud
                size={28}
                className="text-emerald-400"
              />

              <h3 className="text-2xl font-bold text-white">
                Cloud Gaming
              </h3>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-2xl bg-white/5 p-4">
              <Wifi
                size={20}
                className="text-cyan-400"
              />

              <span className="text-white">
                50 Mbps Recommended
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {cloudSpecs.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}