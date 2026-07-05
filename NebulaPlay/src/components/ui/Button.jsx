import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-[0_0_40px_rgba(59,130,246,.35)] hover:shadow-[0_0_60px_rgba(59,130,246,.55)]",

    secondary:
      "bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:border-cyan-400/40 hover:bg-white/10",

    ghost:
      "text-slate-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm rounded-xl",

    md: "px-7 py-3 rounded-2xl",

    lg: "px-10 py-4 text-lg rounded-2xl",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        relative
        overflow-hidden
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {variant === "primary" && (
        <span
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            hover:opacity-100
            bg-gradient-to-r
            from-cyan-400/20
            via-blue-500/20
            to-violet-500/20
          "
        />
      )}
    </motion.button>
  );
}