import { motion } from "framer-motion";
import {
  Play,
  Volume2,
  Maximize2,
  MonitorPlay,
} from "lucide-react";

export default function TrailerPlayer() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            <MonitorPlay size={16} />
            Official Trailer
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Watch Gameplay
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            Experience Cyber Nexus before you play with cinematic gameplay,
            ray-traced visuals and ultra-low latency cloud streaming.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900"
        >
          {/* Thumbnail */}
          <img
            src="/images/games/trailer-cover.webp"
            alt="Game Trailer"
            className="h-[700px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/20 to-black/30" />

          {/* Center Play Button */}
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-500/90 text-white shadow-[0_0_80px_rgba(6,182,212,0.45)] backdrop-blur-xl"
          >
            <Play
              size={42}
              className="ml-2 fill-white"
            />
          </motion.button>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-8 py-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Cyber Nexus — Official Gameplay Trailer
              </h3>

              <p className="mt-2 text-slate-300">
                4K HDR • RTX Enabled • Dolby Atmos
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20">
                <Volume2 size={20} />
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20">
                <Maximize2 size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}