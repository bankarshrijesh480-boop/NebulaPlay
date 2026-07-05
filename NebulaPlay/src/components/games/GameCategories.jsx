import { motion } from "framer-motion";
import {
  Sword,
  Crosshair,
  Car,
  Brain,
  Ghost,
  Rocket,
  Users,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Action",
    games: "86 Games",
    icon: Sword,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "FPS",
    games: "54 Games",
    icon: Crosshair,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Racing",
    games: "31 Games",
    icon: Car,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Strategy",
    games: "42 Games",
    icon: Brain,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    title: "Horror",
    games: "19 Games",
    icon: Ghost,
    gradient: "from-slate-500 to-slate-700",
  },
  {
    title: "Sci-Fi",
    games: "47 Games",
    icon: Rocket,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Multiplayer",
    games: "73 Games",
    icon: Users,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Indie",
    games: "128 Games",
    icon: Sparkles,
    gradient: "from-yellow-500 to-orange-500",
  },
];

export default function GameCategories() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Browse Categories
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Discover Your
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Next Adventure
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Explore hundreds of premium cloud games across every genre.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.button
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-8 text-left backdrop-blur-xl transition-all hover:border-cyan-500/30"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${category.gradient} p-4`}
                >
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {category.games}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-24" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}