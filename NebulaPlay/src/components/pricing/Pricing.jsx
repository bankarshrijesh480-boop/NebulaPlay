import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for casual gamers getting started with cloud gaming.",
    buttonText: "Start Free",
    features: [
      "1080p Streaming",
      "60 FPS",
      "20 Free Games",
      "Basic Cloud Saves",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: "14.99",
    description: "Unlock premium performance and a massive AAA game library.",
    popular: true,
    buttonText: "Upgrade to Pro",
    features: [
      "4K HDR Streaming",
      "Up to 240 FPS",
      "Unlimited AAA Library",
      "RTX Ray Tracing",
      "Priority Servers",
      "Cross Platform Sync",
      "Cloud Saves",
      "Premium Support",
    ],
  },
  {
    name: "Ultimate RTX",
    price: "24.99",
    description: "Maximum performance for competitive and enthusiast gamers.",
    buttonText: "Go Ultimate",
    features: [
      "8K Ready Streaming",
      "RTX 5090 Cloud GPUs",
      "Unlimited Games",
      "DLSS 4 Support",
      "AI Frame Generation",
      "Lowest Latency",
      "Dedicated Servers",
      "24/7 Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-24 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Membership Plans
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Choose Your
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Gaming Tier
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Whether you're a casual gamer or a competitive esports player,
            NebulaPlay has a membership designed for you.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}