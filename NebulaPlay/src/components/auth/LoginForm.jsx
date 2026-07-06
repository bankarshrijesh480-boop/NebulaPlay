import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login", form);

    // TODO:
    // Firebase Auth
    // Supabase Auth
    // JWT API
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Email */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-300">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-slate-900/60 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Password */}
        <PasswordInput
          value={form.password}
          onChange={handleChange}
          required
        />

        {/* Remember */}
        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="h-4 w-4 rounded border-white/20 accent-cyan-500"
            />

            <span className="text-sm text-slate-400">
              Remember me
            </span>
          </label>

          <Link
            to="/forgot-password"
            className="text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login */}
        <button
          type="submit"
          className="h-14 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Sign In
        </button>
      </form>

      {/* Social Login */}
      <SocialLogin
        onGoogle={() => console.log("Google")}
        onGithub={() => console.log("GitHub")}
        onDiscord={() => console.log("Discord")}
      />

      {/* Register */}
      <div className="mt-8 text-center">
        <span className="text-slate-400">
          Don't have an account?
        </span>

        <Link
          to="/register"
          className="ml-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Create Account
        </Link>
      </div>
    </>
  );
}