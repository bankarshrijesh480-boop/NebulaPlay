import { motion } from "framer-motion";
import {
  Clock3,
  Play,
  ArrowRight,
} from "lucide-react";

const continuePlaying = [
  {
    id: 1,
    title: "Cyber Nexus",
    image: "/images/games/game-1.webp",
    progress: 72,
    time: "18h 42m",
  },
  {
    id: 2,
    title: "Project Titan",
    image: "/images/games/game-5.webp",
    progress: 45,
    time: "9h 15m",
  },
  {
    id: 3,
    title: "Shadow Protocol",
    image: "/images/games/game-2.webp",
    progress: 91,
    time: "27h 08m",
  },
];

export default function ContinuePlaying() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex items-end justify-between"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <Clock3 size={16} />
              Continue Playing
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Pick Up Where You Left Off
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Your cloud saves are synced automatically across every device.
            </p>
          </div>

          <button className="hidden items-center gap-2 text-cyan-300 transition hover:text-cyan-200 lg:flex">
            View Library
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {continuePlaying.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <button className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-xl transition hover:scale-110">
                  <Play
                    size={22}
                    className="fill-white"
                  />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {game.title}
                  </h3>

                  <span className="text-sm text-slate-400">
                    {game.time}
                  </span>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">
                      Progress
                    </span>

                    <span className="font-semibold text-cyan-300">
                      {game.progress}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}