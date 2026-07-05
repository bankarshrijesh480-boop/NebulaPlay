import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Trophy,
  Gift,
  Cloud,
  CheckCircle2,
  X,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Weekly Reward",
    message: "Your weekly Nebula Coins are ready to claim.",
    icon: Gift,
    color: "text-yellow-400",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    title: "New Game Added",
    message: "Cyber Nexus is now available in the cloud library.",
    icon: Trophy,
    color: "text-cyan-400",
    time: "15m ago",
    unread: true,
  },
  {
    id: 3,
    title: "Server Status",
    message: "All cloud gaming servers are operating normally.",
    icon: Cloud,
    color: "text-emerald-400",
    time: "1h ago",
    unread: false,
  },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  return (
    <div className="relative">
      {/* Bell Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
      >
        <Bell size={20} />

        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-bold text-white"
          >
            {unreadCount}
          </motion.span>
        )}
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
            className="absolute right-0 z-50 mt-4 w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Notifications
                </h3>

                <p className="text-sm text-slate-400">
                  {unreadCount} unread
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Notifications */}
            <div className="max-h-[420px] overflow-y-auto">
              {notifications.map((notification) => {
                const Icon = notification.icon;

                return (
                  <motion.div
                    key={notification.id}
                    whileHover={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                    className="flex gap-4 border-b border-white/5 px-6 py-5"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ${notification.color}`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-white">
                          {notification.title}
                        </h4>

                        <span className="text-xs text-slate-500">
                          {notification.time}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {notification.message}
                      </p>

                      {notification.unread && (
                        <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                          <CheckCircle2 size={14} />
                          New
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 p-4">
              <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:opacity-90">
                View All Notifications
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}