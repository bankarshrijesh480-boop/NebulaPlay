import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

const genres = [
  "All",
  "Action",
  "FPS",
  "RPG",
  "Racing",
  "Strategy",
  "Sports",
  "Adventure",
];

const sortOptions = [
  "Most Popular",
  "Newest",
  "Highest Rated",
  "A-Z",
];

export default function GameFilters() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Most Popular");
  const [search, setSearch] = useState("");

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search games..."
              className="h-14 w-full rounded-2xl border border-white/10 bg-slate-900/60 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Genre Chips */}
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <motion.button
                key={genre}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
                onClick={() => setSelectedGenre(genre)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  selectedGenre === genre
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-500/30"
                }`}
              >
                {genre}
              </motion.button>
            ))}
          </div>

          {/* Sort */}
          <button className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 text-white transition hover:border-cyan-500/30">
            <SlidersHorizontal size={18} />

            <span>{selectedSort}</span>

            <ChevronDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}