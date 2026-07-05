import { motion } from "framer-motion";
import { Play, Star, CloudLightning, ChevronRight } from "lucide-react";

export default function FeaturedBanner() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/60 backdrop-blur-2xl">
      {/* Background */}
      <img
        src="/images/banners/featured-banner.webp"
        alt="Featured Game"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

      <div className="relative grid min-h-[600px] items-center px-8 py-16 md:px-14 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            <CloudLightning size={16} />
            Featured Cloud Experience
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
            Cyber
            <br />
            Nexus
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Enter a futuristic cyberpunk metropolis where every decision
            changes the fate of humanity. Stream instantly in 4K HDR with
            RTX-powered cloud gaming.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-semibold text-white">
                4.9 / 5
              </span>
            </div>

            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">
              Action RPG
            </span>

            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
              Cloud Ready
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white"
            >
              <Play
                size={18}
                className="fill-white"
              />

              Play Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl"
            >
              Learn More

              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-end"
        >
          <div className="rounded-3xl border border-cyan-500/20 bg-slate-950/50 p-6 backdrop-blur-2xl">
            <img
              src="/images/games/game-1.webp"
              alt="Cyber Nexus"
              className="h-[420px] w-[300px] rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}