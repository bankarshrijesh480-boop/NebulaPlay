import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Professional Gamer",
    avatar: "/images/testimonials/avatar-1.webp",
    rating: 5,
    review:
      "NebulaPlay completely changed the way I game. The latency is incredibly low, and playing AAA titles without downloads feels like magic.",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Content Creator",
    avatar: "/images/testimonials/avatar-2.webp",
    rating: 5,
    review:
      "Streaming in 4K HDR with RTX graphics is stunning. I can jump into games instantly on any device without worrying about storage.",
  },
  {
    id: 3,
    name: "Daniel Kim",
    role: "Esports Player",
    avatar: "/images/testimonials/avatar-3.webp",
    rating: 5,
    review:
      "The AI server routing and ultra-low latency make NebulaPlay one of the smoothest cloud gaming platforms I've ever used.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-24 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[180px]" />
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
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Loved by
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Gamers Worldwide
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Thousands of players trust NebulaPlay for premium cloud gaming,
            ultra-low latency, and an incredible AAA experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}