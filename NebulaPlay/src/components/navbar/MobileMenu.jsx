import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Home,
  Gamepad2,
  Cpu,
  Trophy,
  Users,
  Search,
  Bell,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "#",
    icon: Home,
  },
  {
    label: "Games",
    href: "#games",
    icon: Gamepad2,
  },
  {
    label: "Technology",
    href: "#technology",
    icon: Cpu,
  },
  {
    label: "Community",
    href: "#community",
    icon: Users,
  },
  {
    label: "Leaderboard",
    href: "#leaderboard",
    icon: Trophy,
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-cyan-400/30 lg:hidden"
      >
        <Menu size={22} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />

            {/* Menu */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col border-l border-white/10 bg-slate-950/95 backdrop-blur-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-6">
                <div>
                  <h2 className="text-xl font-black text-white">
                    NebulaPlay
                  </h2>

                  <p className="text-sm text-slate-400">
                    Cloud Gaming
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white/5 p-2 text-white transition hover:bg-white/10"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 p-6">
                <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-white transition hover:border-cyan-400/30">
                  <Search
                    size={22}
                    className="text-cyan-400"
                  />
                  <span className="text-sm">Search</span>
                </button>

                <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-white transition hover:border-cyan-400/30">
                  <Bell
                    size={22}
                    className="text-cyan-400"
                  />
                  <span className="text-sm">Alerts</span>
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      onClick={() => setOpen(false)}
                      className="group mb-2 flex items-center justify-between rounded-2xl px-4 py-4 transition hover:bg-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-xl bg-white/5 p-2">
                          <Icon
                            size={20}
                            className="text-cyan-400"
                          />
                        </div>

                        <span className="font-medium text-white">
                          {item.label}
                        </span>
                      </div>

                      <ChevronRight
                        size={18}
                        className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400"
                      />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="border-t border-white/10 p-6">
                <div className="mb-5 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4">
                  <p className="text-sm text-slate-300">
                    Upgrade to
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    Ultimate RTX
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Unlock 4K HDR, 240 FPS streaming and priority cloud access.
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Start Playing
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}