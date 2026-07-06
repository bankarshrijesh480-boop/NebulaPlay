import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Library,
  Heart,
  Cloud,
  Trophy,
  CreditCard,
  Settings,
  User,
  LogOut,
  Gamepad2,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "My Library",
    icon: Library,
    path: "/library",
  },
  {
    title: "Wishlist",
    icon: Heart,
    path: "/wishlist",
  },
  {
    title: "Cloud Saves",
    icon: Cloud,
    path: "/cloud-saves",
  },
  {
    title: "Achievements",
    icon: Trophy,
    path: "/achievements",
  },
  {
    title: "Subscription",
    icon: CreditCard,
    path: "/subscription",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-white/10 bg-slate-950/95 backdrop-blur-xl">
      {/* Logo */}
      <div className="border-b border-white/10 p-8">
        <NavLink
          to="/"
          className="flex items-center gap-4"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
            <Gamepad2
              size={28}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="text-2xl font-black text-white">
              NebulaPlay
            </h1>

            <p className="text-sm text-slate-400">
              Cloud Gaming
            </p>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <Icon
                    size={22}
                    className={
                      isActive
                        ? "text-white"
                        : "text-slate-400"
                    }
                  />

                  <span className="font-medium">
                    {item.title}
                  </span>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="border-t border-white/10 p-6">
        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-white/5 p-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-white">
              Welcome Back
            </h3>

            <p className="text-sm text-slate-400">
              Premium Member
            </p>
          </div>
        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 font-medium text-red-400 transition hover:bg-red-500/20">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}