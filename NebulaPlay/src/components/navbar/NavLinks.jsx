import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Games",
    path: "/games",
  },
  {
    name: "Browse",
    path: "/browse",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Community",
    path: "/community",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `group relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-cyan-300"
                : "text-slate-300 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span>{link.name}</span>

              {/* Active underline */}
              <motion.span
                layoutId="navbar-active"
                className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 ${
                  isActive ? "w-8" : "w-0 group-hover:w-6"
                }`}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />

              {/* Hover glow */}
              <span className="absolute inset-0 -z-10 rounded-xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}