import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[200px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/90 to-violet-500/10 p-10 backdrop-blur-2xl md:p-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Ready to Play?
            </span>

            <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
              Start Your
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                Cloud Gaming
              </span>
              <br />
              Journey Today
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Experience console-quality gaming instantly. No downloads, no
              expensive hardware—just pure next-generation gaming from anywhere.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
                Start Free

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/10">
                <Play
                  size={18}
                  className="fill-current transition-transform duration-300 group-hover:scale-110"
                />

                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}