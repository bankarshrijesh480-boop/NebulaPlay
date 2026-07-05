import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GameCard from "../games/GameCard";

const games = [
  {
    id: 1,
    title: "Shadow Protocol",
    image: "/images/games/game-2.webp",
    genre: "Stealth",
    rating: 4.8,
    cloudReady: true,
    platforms: ["PC", "Cloud"],
  },
  {
    id: 2,
    title: "Project Titan",
    image: "/images/games/game-5.webp",
    genre: "FPS",
    rating: 4.9,
    cloudReady: true,
    platforms: ["PC", "Cloud", "RTX"],
  },
  {
    id: 3,
    title: "Neon Eclipse",
    image: "/images/games/game-6.webp",
    genre: "Sci-Fi",
    rating: 4.8,
    cloudReady: true,
    platforms: ["Cloud", "PC"],
  },
];

export default function SimilarGames() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={16} />
            Recommended
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Similar Games
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            If you enjoyed Cyber Nexus, you'll probably love these cloud-ready
            AAA experiences.
          </p>
        </motion.div>

        {/* Games */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game, index) => (
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
                delay: index * 0.08,
              }}
            >
              <GameCard
                {...game}
                onPlay={() =>
                  console.log(`Launching ${game.title}`)
                }
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