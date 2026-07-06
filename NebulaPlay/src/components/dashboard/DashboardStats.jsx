import { motion } from "framer-motion";
import {
  Gamepad2,
  Trophy,
  Clock3,
  Cloud,
} from "lucide-react";

const stats = [
  {
    title: "Games Owned",
    value: "248",
    icon: Gamepad2,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Achievements",
    value: "1,284",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Hours Played",
    value: "642h",
    icon: Clock3,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Cloud Saves",
    value: "100%",
    icon: Cloud,
    color: "from-emerald-500 to-teal-600",
  },
];

export default function DashboardStats() {
  return (
    <section className="py-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.title}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              {/* Background Glow */}
              <div
                className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-3xl`}
              />

              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${stat.color}`}
              >
                <Icon
                  size={30}
                  className="text-white"
                />
              </div>

              <p className="text-sm text-slate-400">
                {stat.title}
              </p>

              <h3 className="mt-2 text-4xl font-black text-white">
                {stat.value}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}