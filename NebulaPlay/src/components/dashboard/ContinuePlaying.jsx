import { motion } from "framer-motion";
import {
  Play,
  Cloud,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const games = [
  {
    id: 1,
    title: "Cyber Nexus",
    image: "/images/games/game-1.webp",
    progress: 72,
    playtime: "48 Hours",
    synced: true,
  },
  {
    id: 2,
    title: "Project Titan",
    image: "/images/games/game-5.webp",
    progress: 43,
    playtime: "26 Hours",
    synced: true,
  },
];

export default function ContinuePlaying() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-black text-white">
          Continue Playing
        </h2>

        <p className="mt-2 text-slate-400">
          Jump back into your latest adventures instantly.
        </p>
      </div>

      <div className="space-y-8">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -4,
            }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Artwork */}
              <div className="h-64 lg:h-auto lg:w-80">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-3xl font-bold text-white">
                      {game.title}
                    </h3>

                    <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                      <CheckCircle2 size={16} />
                      Cloud Synced
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-6 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock3 size={18} />
                      {game.playtime}
                    </div>

                    <div className="flex items-center gap-2">
                      <Cloud size={18} />
                      Save Synced
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-8">
                    <div className="mb-3 flex justify-between">
                      <span className="text-slate-400">
                        Campaign Progress
                      </span>

                      <span className="font-semibold text-cyan-300">
                        {game.progress}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${game.progress}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-8">
                  <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:opacity-90">
                    <Play
                      size={20}
                      className="fill-white"
                    />
                    Resume Playing
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}