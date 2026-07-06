import { motion } from "framer-motion";
import {
  Crown,
  CalendarDays,
  CreditCard,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const benefits = [
  "Unlimited Cloud Gaming",
  "RTX 4080 Cloud Servers",
  "4K HDR Streaming",
  "Priority Game Queue",
  "Unlimited Cloud Saves",
];

export default function SubscriptionCard() {
  return (
    <section className="py-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-slate-900 p-8 backdrop-blur-xl"
      >
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
              <Crown size={18} />
              Premium Membership
            </div>

            <h2 className="mt-6 text-4xl font-black text-white">
              NebulaPlay Ultimate
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Enjoy unlimited cloud gaming, RTX graphics,
              priority servers, cloud saves and exclusive
              member-only content.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Zap
                size={24}
                className="text-yellow-400"
              />

              <span className="font-semibold text-yellow-300">
                ACTIVE PLAN
              </span>
            </div>

            <div className="mt-6">
              <div className="text-5xl font-black text-white">
                ₹999
              </div>

              <div className="mt-2 text-slate-400">
                per month
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3">
                <CalendarDays
                  size={20}
                  className="text-cyan-400"
                />

                <div>
                  <div className="text-sm text-slate-400">
                    Next Billing
                  </div>

                  <div className="font-medium text-white">
                    25 July 2026
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CreditCard
                  size={20}
                  className="text-cyan-400"
                />

                <div>
                  <div className="text-sm text-slate-400">
                    Payment Method
                  </div>

                  <div className="font-medium text-white">
                    Visa •••• 4582
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 py-4 font-semibold text-black transition hover:opacity-90">
              Manage Subscription
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}