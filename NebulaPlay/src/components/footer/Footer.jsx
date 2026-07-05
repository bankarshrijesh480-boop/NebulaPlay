import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";

const productLinks = [
  "Games",
  "Cloud Gaming",
  "Pricing",
  "Download App",
  "Gift Cards",
];

const companyLinks = [
  "About",
  "Careers",
  "News",
  "Press",
  "Contact",
];

const supportLinks = [
  "Help Center",
  "Community",
  "System Status",
  "Privacy",
  "Terms",
];

const socialLinks = [
  {
    icon: Twitter,
    href: "#",
  },
  {
    icon: Instagram,
    href: "#",
  },
  {
    icon: Youtube,
    href: "#",
  },
  {
    icon: Twitch,
    href: "#",
  },
  {
    icon: Github,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: Facebook,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-3xl font-black text-transparent">
              NebulaPlay
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Experience the future of cloud gaming with ultra-low latency,
              RTX-powered graphics, and instant access to the world's biggest
              AAA games.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Product
            </h3>

            <ul className="mt-6 space-y-4">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Support
            </h3>

            <ul className="mt-6 space-y-4">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} NebulaPlay. All rights reserved.
            </p>

            <p className="text-sm text-slate-500">
              Built with React • Vite • Tailwind CSS • Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}