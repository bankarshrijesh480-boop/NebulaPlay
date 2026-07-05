import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  popular = false,
  buttonText = "Get Started",
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`group relative overflow-hidden rounded-[32px] border backdrop-blur-2xl transition-all duration-300 ${
        popular
          ? "border-cyan-400/50 bg-gradient-to-b from-cyan-500/10 via-slate-900/80 to-slate-950 shadow-[0_0_50px_rgba(34,211,238,0.18)]"
          : "border-white/10 bg-white/5 hover:border-cyan-400/30"
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          Most Popular
        </div>
      )}

      <div className="p-8">
        {/* Plan Name */}
        <h3 className="text-3xl font-black text-white">
          {name}
        </h3>

        {/* Description */}
        <p className="mt-3 text-slate-400">
          {description}
        </p>

        {/* Price */}
        <div className="mt-8 flex items-end gap-2">
          <span className="text-6xl font-black text-white">
            ${price}
          </span>

          <span className="mb-2 text-slate-400">
            {period}
          </span>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Features */}
        <div className="space-y-5">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3"
            >
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/15">
                <Check
                  size={14}
                  className="text-cyan-400"
                />
              </div>

              <span className="text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileTap={{
            scale: 0.97,
          }}
          className={`mt-10 flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-semibold transition-all duration-300 ${
            popular
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
              : "border border-white/15 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-white/10"
          }`}
        >
          {buttonText}

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </div>
    </motion.div>
  );
}