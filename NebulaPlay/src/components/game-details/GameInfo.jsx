import { motion } from "framer-motion";
import {
  CalendarDays,
  Building2,
  Tags,
  Globe,
  Cloud,
  ShieldCheck,
  Star,
  Clock3,
} from "lucide-react";

const info = [
  {
    icon: CalendarDays,
    label: "Release Date",
    value: "October 18, 2026",
  },
  {
    icon: Building2,
    label: "Developer",
    value: "Nebula Studios",
  },
  {
    icon: Tags,
    label: "Genre",
    value: "Action RPG",
  },
  {
    icon: Globe,
    label: "Languages",
    value: "18 Supported",
  },
  {
    icon: Cloud,
    label: "Cloud Status",
    value: "Optimized",
  },
  {
    icon: ShieldCheck,
    label: "Age Rating",
    value: "PEGI 16",
  },
];

const features = [
  "4K HDR Cloud Streaming",
  "RTX Ray Tracing",
  "120 / 240 FPS Support",
  "Cross Progression",
  "Cross Platform Multiplayer",
  "Ultra Low Latency Servers",
  "Cloud Saves",
  "Controller & Keyboard Support",
];

export default function GameInfo() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            About The Game
          </span>

          <h2 className="mt-6 text-4xl font-black text-white">
            A Next Generation
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Cyberpunk Adventure
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-400">
            Cyber Nexus combines cinematic storytelling, open-world exploration,
            advanced AI enemies, and cloud-native multiplayer into one seamless
            experience. Every mission, decision, and alliance changes the fate
            of Neo City.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-400">
            Powered by NebulaPlay Cloud, the game launches instantly with no
            downloads, no patches, and no expensive gaming hardware required.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 backdrop-blur-xl"
              >
                ✓ {feature}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-white">
            Game Information
          </h3>

          <div className="mt-8 space-y-6">
            {info.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-white/5 pb-5"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className="text-cyan-400"
                    />

                    <span className="text-slate-400">
                      {item.label}
                    </span>
                  </div>

                  <span className="font-semibold text-white">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6">
            <div className="flex items-center gap-3">
              <Star
                className="fill-yellow-400 text-yellow-400"
                size={22}
              />

              <div>
                <div className="text-3xl font-black text-white">
                  4.9 / 5
                </div>

                <div className="text-sm text-slate-400">
                  1.8 Million Reviews
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-slate-300">
              <Clock3 size={18} />
              Average Completion: 48 Hours
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}