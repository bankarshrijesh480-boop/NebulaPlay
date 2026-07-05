import { motion } from "framer-motion";
import {
  Trophy,
  Crown,
  Shield,
  Swords,
  Star,
  Gem,
  Lock,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Legend of Neo City",
    description: "Complete the main storyline.",
    progress: 100,
    rarity: "Common",
    icon: Crown,
    color: "text-yellow-400",
    unlocked: true,
  },
  {
    id: 2,
    title: "Ghost Runner",
    description: "Finish 25 missions without being detected.",
    progress: 84,
    rarity: "Rare",
    icon: Shield,
    color: "text-cyan-400",
    unlocked: false,
  },
  {
    id: 3,
    title: "Cyber Slayer",
    description: "Defeat 10,000 enemies.",
    progress: 63,
    rarity: "Epic",
    icon: Swords,
    color: "text-violet-400",
    unlocked: false,
  },
  {
    id: 4,
    title: "Ultimate Collector",
    description: "Unlock every legendary weapon.",
    progress: 18,
    rarity: "Legendary",
    icon: Gem,
    color: "text-orange-400",
    unlocked: false,
  },
];

export default function AchievementList() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
            <Trophy size={16} />
            Achievements
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Unlock Every Challenge
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Earn exclusive rewards, badges and achievements as you progress
            through Cyber Nexus.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.id}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                  {/* Icon */}
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 ${achievement.color}`}
                  >
                    {achievement.unlocked ? (
                      <Icon size={36} />
                    ) : (
                      <Lock size={32} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {achievement.title}
                        </h3>

                        <p className="mt-2 text-slate-400">
                          {achievement.description}
                        </p>
                      </div>

                      <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        {achievement.rarity}
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="mt-6">
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-slate-400">
                          Progress
                        </span>

                        <span className="font-semibold text-white">
                          {achievement.progress}%
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${achievement.progress}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-14 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8"
        >
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-4xl font-black text-white">
                128
              </div>

              <div className="mt-2 text-slate-400">
                Total Achievements
              </div>
            </div>

            <div>
              <div className="text-4xl font-black text-white">
                84
              </div>

              <div className="mt-2 text-slate-400">
                Unlocked
              </div>
            </div>

            <div>
              <div className="text-4xl font-black text-white">
                65%
              </div>

              <div className="mt-2 text-slate-400">
                Completion
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <Star
                  size={42}
                  className="fill-yellow-400 text-yellow-400"
                />
              </div>

              <div className="mt-2 text-slate-400">
                Master Rank
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}