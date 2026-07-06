import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="flex h-24 items-center justify-between px-8">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-black text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-slate-400">
            Ready for your next gaming adventure?
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative hidden lg:block">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search games..."
              className="h-12 w-80 rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500"
            />
          </div>

          {/* Settings */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
          >
            <Settings size={20} />
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
          >
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
          </motion.button>

          {/* User */}
          <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-500">
            <img
              src="https://i.pravatar.cc/100"
              alt="User"
              className="h-11 w-11 rounded-full object-cover"
            />

            <div className="hidden text-left lg:block">
              <p className="font-semibold text-white">
                Amol
              </p>

              <p className="text-sm text-slate-400">
                Premium Member
              </p>
            </div>

            <ChevronDown
              size={18}
              className="text-slate-400"
            />
          </button>
        </div>
      </div>
    </motion.header>
  );
}