import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Crown,
  Gamepad2,
  Heart,
  Library,
  LogOut,
  Settings,
  User,
  Cloud,
} from "lucide-react";

const menuItems = [
  {
    icon: User,
    label: "My Profile",
  },
  {
    icon: Library,
    label: "Game Library",
  },
  {
    icon: Heart,
    label: "Wishlist",
  },
  {
    icon: Cloud,
    label: "Cloud Saves",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:bg-white/10"
      >
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=NebulaPlay"
          alt="Profile"
          className="h-11 w-11 rounded-xl"
        />

        <div className="hidden text-left lg:block">
          <h4 className="text-sm font-semibold text-white">
            Nebula Gamer
          </h4>

          <div className="mt-1 flex items-center gap-1 text-xs text-cyan-300">
            <Crown size={12} />
            Ultimate Member
          </div>
        </div>

        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.98,
            }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-50 mt-4 w-80 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="border-b border-white/10 p-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://api.dicebear.com/9.x/adventurer/svg?seed=NebulaPlay"
                  alt="Avatar"
                  className="h-16 w-16 rounded-2xl"
                />

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Nebula Gamer
                  </h3>

                  <p className="text-sm text-slate-400">
                    gamer@nebulaplay.gg
                  </p>

                  <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                    <Crown size={12} />
                    Ultimate Plan
                  </span>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="p-3">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.label}
                    whileHover={{ x: 6 }}
                    className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition hover:bg-white/5"
                  >
                    <div className="rounded-xl bg-white/5 p-2">
                      <Icon
                        size={18}
                        className="text-cyan-400"
                      />
                    </div>

                    <span className="text-white">
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Gamer Stats */}
            <div className="border-t border-white/10 p-5">
              <div className="mb-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 p-4 text-center">
                  <Gamepad2
                    size={22}
                    className="mx-auto text-cyan-400"
                  />

                  <h4 className="mt-3 text-2xl font-bold text-white">
                    342
                  </h4>

                  <p className="text-xs text-slate-400">
                    Games Played
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4 text-center">
                  <Crown
                    size={22}
                    className="mx-auto text-yellow-400"
                  />

                  <h4 className="mt-3 text-2xl font-bold text-white">
                    128
                  </h4>

                  <p className="text-xs text-slate-400">
                    Achievements
                  </p>
                </div>
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}