import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative hidden xl:block"
    >
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search games..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-12 w-72 rounded-2xl border border-white/10 bg-white/5 pl-11 pr-14 text-sm text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-white/10"
      />

      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-400">
        <span>⌘</span>
        <span>K</span>
      </div>
    </motion.div>
  );
}