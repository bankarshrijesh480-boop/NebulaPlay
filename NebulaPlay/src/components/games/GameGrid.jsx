import { motion } from "framer-motion";
import GameCard from "./GameCard";

const games = [
  {
    id: 1,
    title: "Cyber Nexus",
    image: "/images/games/game-1.webp",
    genre: "Action RPG",
    rating: 4.9,
    featured: true,
    cloudReady: true,
    platforms: ["PC", "Cloud", "RTX"],
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
    title: "Velocity X",
    image: "/images/games/game-3.webp",
    genre: "Racing",
    rating: 4.7,
    cloudReady: true,
    platforms: ["Cloud", "Xbox"],
  },
  {
    id: 4,
    title: "Galaxy Dominion",
    image: "/images/games/game-4.webp",
    genre: "Strategy",
    rating: 4.9,
    cloudReady: true,
    platforms: ["PC", "Cloud"],
  },
  {
    id: 5,
    title: "Project Titan",
    image: "/images/games/game-5.webp",
    genre: "FPS",
    rating: 4.8,
    cloudReady: true,
    platforms: ["PC", "Cloud", "PS5"],
  },
  {
    id: 6,
    title: "Eclipse Arena",
    image: "/images/games/game-6.webp",
    genre: "Battle Royale",
    rating: 4.9,
    cloudReady: true,
    platforms: ["Cloud", "PC"],
  },
];

export default function GameGrid({
  title = "Featured Games",
  subtitle = "Discover the latest AAA experiences available instantly on NebulaPlay.",
  items = games,
}) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Game Library
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            {subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((game, index) => (
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
                duration: 0.5,
              }}
            >
              <GameCard
                title={game.title}
                image={game.image}
                genre={game.genre}
                rating={game.rating}
                cloudReady={game.cloudReady}
                featured={game.featured}
                platforms={game.platforms}
                onPlay={() => console.log(`Launching ${game.title}`)}
                onWishlist={() =>
                  console.log(`Added ${game.title} to wishlist`)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}