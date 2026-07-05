import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Cyber Nexus",
    genre: "Action RPG",
    rating: "4.9",
    image: "/images/games/game-1.webp",
  },
  {
    id: 2,
    title: "Shadow Protocol",
    genre: "Stealth",
    rating: "4.8",
    image: "/images/games/game-2.webp",
  },
  {
    id: 3,
    title: "Velocity X",
    genre: "Racing",
    rating: "4.9",
    image: "/images/games/game-3.webp",
  },
  {
    id: 4,
    title: "Galaxy Dominion",
    genre: "Strategy",
    rating: "4.7",
    image: "/images/games/game-4.webp",
  },
];

export default function FeaturedGames() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Featured Games
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Play Without
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Limits
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Stream the latest AAA titles instantly with RTX-powered cloud
            gaming.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                    {game.genre}
                  </span>

                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-sm text-white">
                      {game.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {game.title}
                </h3>

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02]">
                  Play Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}