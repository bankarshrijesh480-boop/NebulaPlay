import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import GameCard from "./GameCard";

const trendingGames = [
  {
    id: 1,
    title: "Cyber Nexus",
    image: "/images/games/game-1.webp",
    genre: "Action RPG",
    rating: 4.9,
    cloudReady: true,
    platforms: ["PC", "Cloud"],
  },
  {
    id: 2,
    title: "Shadow Protocol",
    image: "/images/games/game-2.webp",
    genre: "Stealth",
    rating: 4.8,
    cloudReady: true,
    platforms: ["PC", "Cloud"],
  },
  {
    id: 3,
    title: "Project Titan",
    image: "/images/games/game-5.webp",
    genre: "FPS",
    rating: 4.9,
    cloudReady: true,
    platforms: ["PC", "Cloud", "RTX"],
  },
];

export default function TrendingGames() {
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
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
              <Flame size={16} />
              Trending Now
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Most Played This Week
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Join millions of players enjoying the hottest cloud gaming
              experiences on NebulaPlay.
            </p>
          </div>
        </motion.div>

        {/* Games */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {trendingGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              <GameCard
                {...game}
                onPlay={() => console.log(`Launching ${game.title}`)}
                onWishlist={() =>
                  console.log(`Wishlist: ${game.title}`)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}