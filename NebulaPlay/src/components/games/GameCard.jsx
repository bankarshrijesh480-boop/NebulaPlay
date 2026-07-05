import { motion } from "framer-motion";
import {
  Heart,
  Play,
  Star,
  Monitor,
  Cloud,
  ChevronRight,
} from "lucide-react";

export default function GameCard({
  title,
  image,
  genre,
  rating = 4.8,
  cloudReady = true,
  featured = false,
  platforms = ["PC", "Cloud"],
  onPlay,
  onWishlist,
}) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden ${
          featured ? "h-[520px]" : "h-[320px]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

        {/* Wishlist */}
        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={onWishlist}
          className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:border-red-400/40 hover:text-red-400"
        >
          <Heart size={20} />
        </motion.button>

        {/* Cloud Badge */}
        {cloudReady && (
          <div className="absolute left-5 top-5 rounded-full border border-cyan-500/20 bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            ☁ Cloud Ready
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Genre + Rating */}
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            {genre}
          </span>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold text-white">
              {rating}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Platforms */}
        <div className="mt-6 flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
            >
              {platform === "Cloud" ? (
                <Cloud size={14} />
              ) : (
                <Monitor size={14} />
              )}

              {platform}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <motion.button
            whileTap={{
              scale: 0.96,
            }}
            onClick={onPlay}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]"
          >
            <Play
              size={18}
              className="fill-white"
            />

            Play Now
          </motion.button>

          <motion.button
            whileTap={{
              scale: 0.96,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
      </div>
    </motion.article>
  );
}