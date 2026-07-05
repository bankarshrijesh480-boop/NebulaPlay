import { motion } from "framer-motion";
import {
  Sparkles,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const recentGames = [
  {
    id: 1,
    title: "Neon Eclipse",
    image: "/images/games/game-6.webp",
    genre: "Sci-Fi Shooter",
    release: "Today",
  },
  {
    id: 2,
    title: "Crimson Horizon",
    image: "/images/games/game-7.webp",
    genre: "Open World",
    release: "2 Days Ago",
  },
  {
    id: 3,
    title: "Phantom Strike",
    image: "/images/games/game-8.webp",
    genre: "Tactical FPS",
    release: "Last Week",
  },
  {
    id: 4,
    title: "Quantum Drift",
    image: "/images/games/game-9.webp",
    genre: "Racing",
    release: "Last Week",
  },
];

export default function RecentlyAdded() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <Sparkles size={16} />
              Just Added
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Recently Added Games
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Discover the newest titles added to the NebulaPlay cloud gaming
              library.
            </p>
          </div>

          <button className="hidden items-center gap-2 text-cyan-300 transition hover:text-cyan-200 lg:flex">
            View All
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {recentGames.map((game, index) => (
            <motion.article
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                  NEW
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {game.genre}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {game.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                  <CalendarDays size={16} />
                  {game.release}
                </div>

                <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:opacity-90">
                  Play Instantly
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}