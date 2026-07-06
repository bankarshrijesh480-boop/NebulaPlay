import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Cloud,
  Star,
} from "lucide-react";

const library = [
  {
    id: 1,
    title: "Cyber Nexus",
    image: "/images/games/game-1.webp",
    rating: "4.9",
    installed: true,
  },
  {
    id: 2,
    title: "Shadow Protocol",
    image: "/images/games/game-2.webp",
    rating: "4.8",
    installed: false,
  },
  {
    id: 3,
    title: "Project Titan",
    image: "/images/games/game-5.webp",
    rating: "4.9",
    installed: true,
  },
  {
    id: 4,
    title: "Neon Eclipse",
    image: "/images/games/game-6.webp",
    rating: "4.7",
    installed: false,
  },
];

export default function LibraryPreview() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white">
            My Library
          </h2>

          <p className="mt-2 text-slate-400">
            Your favorite games, always ready to play.
          </p>
        </div>

        <button className="flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300">
          View Library
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Library Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {library.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            {/* Cover */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-sm text-yellow-400 backdrop-blur">
                <Star
                  size={14}
                  className="fill-yellow-400"
                />
                {game.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">
                {game.title}
              </h3>

              <div className="mt-5 flex items-center justify-between">
                {game.installed ? (
                  <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-sm text-emerald-400">
                    <Download size={16} />
                    Installed
                  </span>
                ) : (
                  <span className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-2 text-sm text-cyan-400">
                    <Cloud size={16} />
                    Cloud Ready
                  </span>
                )}
              </div>

              <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:opacity-90">
                Play Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}