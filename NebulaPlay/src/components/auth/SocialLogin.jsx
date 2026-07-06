import { motion } from "framer-motion";
import { Chrome, Github } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";

const providers = [
  {
    id: "google",
    name: "Google",
    icon: Chrome,
    color: "hover:border-red-500/40 hover:bg-red-500/10",
  },
  {
    id: "github",
    name: "GitHub",
    icon: Github,
    color: "hover:border-white/30 hover:bg-white/10",
  },
  {
    id: "discord",
    name: "Discord",
    icon: FaDiscord,
    color: "hover:border-indigo-500/40 hover:bg-indigo-500/10",
  },
];

export default function SocialLogin({
  title = "Or continue with",
  onGoogle,
  onGithub,
  onDiscord,
}) {
  const handlers = {
    google: onGoogle,
    github: onGithub,
    discord: onDiscord,
  };

  return (
    <div className="w-full">
      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-slate-950 px-5 text-sm text-slate-400">
            {title}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-3 gap-4">
        {providers.map((provider) => {
          const Icon = provider.icon;

          return (
            <motion.button
              key={provider.id}
              type="button"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={handlers[provider.id]}
              className={`flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 ${provider.color}`}
            >
              <Icon size={28} />
            </motion.button>
          );
        })}
      </div>

      {/* Info */}
      <p className="mt-6 text-center text-sm leading-6 text-slate-500">
        Secure authentication powered by NebulaPlay.
        <br />
        Your account syncs across all cloud gaming devices.
      </p>
    </div>
  );
}