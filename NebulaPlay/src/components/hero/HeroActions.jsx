import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

export default function HeroActions({
  primaryText = "Start Playing",
  secondaryText = "Watch Trailer",
  onPrimaryClick,
  onSecondaryClick,
  primaryHref,
  secondaryHref,
  className = "",
}) {
  const primaryClasses =
    "group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950";

  const secondaryClasses =
    "group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950";

  const renderPrimary = () => {
    const content = (
      <>
        <span>{primaryText}</span>

        <ChevronRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </>
    );

    if (primaryHref) {
      return (
        <motion.a
          href={primaryHref}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={primaryClasses}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        type="button"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onPrimaryClick}
        className={primaryClasses}
      >
        {content}
      </motion.button>
    );
  };

  const renderSecondary = () => {
    const content = (
      <>
        <Play
          size={18}
          className="fill-current transition-transform duration-300 group-hover:scale-110"
        />

        <span>{secondaryText}</span>
      </>
    );

    if (secondaryHref) {
      return (
        <motion.a
          href={secondaryHref}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={secondaryClasses}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        type="button"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onSecondaryClick}
        className={secondaryClasses}
      >
        {content}
      </motion.button>
    );
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${className}`}
    >
      {renderPrimary()}
      {renderSecondary()}
    </div>
  );
}