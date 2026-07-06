import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, User } from "lucide-react";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const passwordStrength = () => {
    const password = form.password;

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = passwordStrength();

  const strengthLabel = [
    "Weak",
    "Weak",
    "Fair",
    "Good",
    "Strong",
  ][strength];

  const strengthWidth = [
    "0%",
    "25%",
    "50%",
    "75%",
    "100%",
  ][strength];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register", form);

    // Firebase / Supabase / API integration
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Full Name */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-300">
            Full Name
          </label>

          <div className="relative">
            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="h-14 w-full rounded-2xl border border-white/10 bg-slate-900/60 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-300">
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
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="h-14 w-full rounded-2xl border border-white/10 bg-slate-900/60 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Password */}
        <PasswordInput
          value={form.password}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />

        {/* Strength */}
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-400">
              Password Strength
            </span>

            <span className="text-cyan-300">
              {strengthLabel}
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              style={{
                width: strengthWidth,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <PasswordInput
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />

        {/* Terms */}
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            required
            className="mt-1 accent-cyan-500"
          />

          <span className="text-sm leading-6 text-slate-400">
            I agree to the Terms of Service and Privacy Policy of
            NebulaPlay.
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="h-14 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Create Account
        </button>
      </form>

      <SocialLogin
        title="Or sign up with"
        onGoogle={() => console.log("Google")}
        onGithub={() => console.log("GitHub")}
        onDiscord={() => console.log("Discord")}
      />

      <div className="mt-8 text-center">
        <span className="text-slate-400">
          Already have an account?
        </span>

        <Link
          to="/login"
          className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Sign In
        </Link>
      </div>
    </>
  );
}