import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialCard({
  name,
  role,
  avatar,
  rating,
  review,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/30"
    >
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-bold text-white">
            {name}
          </h3>

          <p className="text-sm text-slate-400">
            {role}
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-6 leading-8 text-slate-300">
        "{review}"
      </p>
    </motion.div>
  );
}