import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import NotificationBell from "./NotificationBell";
import ProfileMenu from "./ProfileMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Left */}
        <div className="flex items-center gap-10">
          <Logo />

          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>

        {/* Center */}
        <div className="hidden flex-1 justify-center px-10 xl:flex">
          <div className="w-full max-w-md">
            <SearchBar />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <NotificationBell />
          </div>

          <div className="hidden lg:block">
            <ProfileMenu />
          </div>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}