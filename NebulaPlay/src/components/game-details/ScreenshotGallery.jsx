import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Maximize2 } from "lucide-react";

const screenshots = [
  "/images/games/screenshots/game-1-1.webp",
  "/images/games/screenshots/game-1-2.webp",
  "/images/games/screenshots/game-1-3.webp",
  "/images/games/screenshots/game-1-4.webp",
  "/images/games/screenshots/game-1-5.webp",
];

export default function ScreenshotGallery() {
  const [activeImage, setActiveImage] = useState(screenshots[0]);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <ImageIcon size={16} />
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Screenshots
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Explore stunning gameplay captured directly from the NebulaPlay
            cloud gaming platform.
          </p>
        </motion.div>

        {/* Featured Screenshot */}
        <motion.div
          layout
          className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5"
        >
          <img
            src={activeImage}
            alt="Game Screenshot"
            className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          <button className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:bg-cyan-500">
            <Maximize2 size={22} />
          </button>
        </motion.div>

        {/* Thumbnails */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {screenshots.map((image, index) => (
            <motion.button
              key={image}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveImage(image)}
              className={`overflow-hidden rounded-3xl border transition ${
                activeImage === image
                  ? "border-cyan-400"
                  : "border-white/10"
              }`}
            >
              <img
                src={image}
                alt={`Screenshot ${index + 1}`}
                className="h-40 w-full object-cover transition duration-500 hover:scale-110"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
