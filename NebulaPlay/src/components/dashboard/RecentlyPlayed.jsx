import { motion } from "framer-motion";
import {
  Play,
  Clock3,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const recentGames = [
  {
    id: 1,
    title: "Cyber Nexus",
    image: "/images/games/game-1.webp",
    hours: "82 Hours",
    lastPlayed: "2 Hours Ago",
  },
  {
    id: 2,
    title: "Shadow Protocol",
    image: "/images/games/game-2.webp",
    hours: "34 Hours",
    lastPlayed: "Yesterday",
  },
  {
    id: 3,
    title: "Project Titan",
    image: "/images/games/game-5.webp",
    hours: "146 Hours",
    lastPlayed: "3 Days Ago",
  },
];

export default function RecentlyPlayed() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white">
            Recently Played
          </h2>

          <p className="mt-2 text-slate-400">
            Continue your latest gaming adventures.
          </p>
        </div>

        <button className="flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-8 lg:grid-cols-3">
        {recentGames.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            {/* Image */}
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

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">
                {game.title}
              </h3>

              <div className="mt-6 flex items-center gap-3 text-slate-400">
                <Clock3 size={18} />
                {game.hours}
              </div>

              <div className="mt-3 flex items-center gap-3 text-slate-400">
                <CalendarDays size={18} />
                {game.lastPlayed}
              </div>

              <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:opacity-90">
                Resume Game
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}