import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Award,
  Crown,
  ArrowRight,
} from "lucide-react";

const achievements = [
  {
    title: "Legend Hunter",
    description: "Complete the main campaign.",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Master Explorer",
    description: "Discover every hidden location.",
    icon: Award,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Elite Gamer",
    description: "Unlock 100 achievements.",
    icon: Trophy,
    color: "from-cyan-500 to-blue-600",
  },
];

export default function AchievementSummary() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white">
            Achievement Summary
          </h2>

          <p className="mt-2 text-slate-400">
            Track your latest milestones and unlock rewards.
          </p>
        </div>

        <button className="flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Overall Progress */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Overall Progress
            </h3>

            <p className="mt-2 text-slate-400">
              You've unlocked 84 out of 128 achievements.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-black text-cyan-400">
              65%
            </div>

            <div className="mt-2 text-slate-400">
              Completion
            </div>
          </div>
        </div>

        <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "65%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
          />
        </div>
      </motion.div>

      {/* Achievement Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;

          return (
            <motion.div
              key={achievement.title}
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
              {/* Glow */}
              <div
                className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${achievement.color} opacity-20 blur-3xl`}
              />

              {/* Icon */}
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${achievement.color}`}
              >
                <Icon
                  size={30}
                  className="text-white"
                />
              </div>

              <h3 className="text-xl font-bold text-white">
                {achievement.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {achievement.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-yellow-400">
                <Star
                  size={18}
                  className="fill-yellow-400"
                />

                <span>Achievement Unlocked</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}