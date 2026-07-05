import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What is NebulaPlay?",
    answer:
      "NebulaPlay is a next-generation cloud gaming platform that lets you instantly play AAA games from powerful cloud GPUs without downloading or installing them.",
  },
  {
    question: "Do I need a gaming PC?",
    answer:
      "No. NebulaPlay streams games from enterprise cloud infrastructure, allowing you to play on laptops, desktops, tablets, phones, and smart TVs.",
  },
  {
    question: "What internet speed is recommended?",
    answer:
      "We recommend at least 25 Mbps for Full HD, 50 Mbps for 4K HDR streaming, and a stable low-latency connection for the best gaming experience.",
  },
  {
    question: "Can I continue my game on another device?",
    answer:
      "Yes. Your saves are securely synchronized in the cloud so you can continue your progress from any supported device.",
  },
  {
    question: "Does NebulaPlay support controllers?",
    answer:
      "Yes. Most popular controllers are supported, including Xbox, PlayStation, and many third-party Bluetooth controllers.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. You can start with the Free plan and upgrade to Pro or Ultimate whenever you need higher performance and more features.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Got
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Questions?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Everything you need to know about NebulaPlay and cloud gaming.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}