import { motion } from "framer-motion";
import {
  Newspaper,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

const news = [
  {
    id: 1,
    title: "Cyber Nexus Season 2 launches next week",
    description:
      "Explore a brand-new cyber city, unlock legendary weapons, and battle advanced AI enemies.",
    image: "/images/news/news-1.webp",
    date: "Today",
  },
  {
    id: 2,
    title: "NebulaPlay introduces RTX 4080 Cloud Servers",
    description:
      "Experience higher frame rates, ray tracing, and ultra-low latency with our newest cloud infrastructure.",
    image: "/images/news/news-2.webp",
    date: "Yesterday",
  },
  {
    id: 3,
    title: "Summer Gaming Festival begins now",
    description:
      "Enjoy exclusive discounts, free weekends, and limited-time rewards across the NebulaPlay library.",
    image: "/images/news/news-3.webp",
    date: "3 Days Ago",
  },
];

export default function NewsFeed() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white">
            Gaming News
          </h2>

          <p className="mt-2 text-slate-400">
            Stay updated with the latest NebulaPlay announcements.
          </p>
        </div>

        <button className="flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* News Cards */}
      <div className="space-y-8">
        {news.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -4,
            }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="h-64 lg:h-auto lg:w-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    <Newspaper size={16} />
                    News
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-slate-500">
                    <CalendarDays size={18} />
                    {item.date}
                  </div>
                </div>

                <button className="mt-8 flex w-fit items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}