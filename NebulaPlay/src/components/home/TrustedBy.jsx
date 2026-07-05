import { motion } from "framer-motion";

const partners = [
  "PlayStation",
  "Xbox",
  "NVIDIA",
  "Epic Games",
  "Unreal Engine",
  "Unity",
  "AMD",
  "Intel",
  "Steam",
  "Ubisoft",
];

const marquee = [...partners, ...partners];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950/60 py-20 backdrop-blur-xl">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Trusted Technology
          </span>

          <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
            Built with
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Industry-Leading Technology
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            NebulaPlay is engineered using cutting-edge gaming, graphics, cloud,
            and streaming technologies to deliver a premium AAA gaming
            experience.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max gap-6"
          >
            {marquee.map((partner, index) => (
              <motion.div
                key={`${partner}-${index}`}
                whileHover={{
                  scale: 1.06,
                  y: -4,
                }}
                className="flex h-24 min-w-[220px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-10 backdrop-blur-xl transition-colors hover:border-cyan-400/30 hover:bg-white/10"
              >
                <span className="text-lg font-bold tracking-wide text-slate-300 transition-colors hover:text-white">
                  {partner}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            {
              value: "150+",
              label: "Global Servers",
            },
            {
              value: "500+",
              label: "AAA Games",
            },
            {
              value: "4K HDR",
              label: "Streaming",
            },
            {
              value: "99.99%",
              label: "Platform Uptime",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <div className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-3xl font-black text-transparent">
                {item.value}
              </div>

              <p className="mt-2 text-sm tracking-wide text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}