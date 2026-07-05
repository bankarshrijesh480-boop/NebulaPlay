import { motion } from "framer-motion";
import {
  Play,
  Heart,
  Share2,
  Star,
  Clock3,
  Users,
  Trophy,
  Cloud,
  Monitor,
} from "lucide-react";

export default function GameHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/games/game-1-bg.webp"
          alt="Cyber Nexus"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-32 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[380px_1fr]">
          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-[360px]"
          >
            <img
              src="/images/games/game-1.webp"
              alt="Cyber Nexus"
              className="w-full rounded-[32px] border border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <Cloud size={16} />
              Cloud Ready
            </span>

            <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
              Cyber Nexus
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Fight through a futuristic cyberpunk metropolis where powerful AI,
              rogue corporations and advanced technology collide. Experience
              true next-generation cloud gaming with instant play and RTX
              graphics.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="font-semibold text-white">4.9/5</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Users size={18} />
                3.2M Players
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Clock3 size={18} />
                48 Hours
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Trophy size={18} />
                GOTY Nominee
              </div>
            </div>

            {/* Platforms */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Cloud", "PC", "RTX", "Controller"].map((platform) => (
                <span
                  key={platform}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  <Monitor size={15} />
                  {platform}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white"
              >
                <Play
                  size={20}
                  className="fill-white"
                />
                Play Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl"
              >
                <Heart size={20} />
                Wishlist
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl"
              >
                <Share2 size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}