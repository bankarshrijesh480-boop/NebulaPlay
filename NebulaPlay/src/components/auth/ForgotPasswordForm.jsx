import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reset Password:", email);

    // TODO:
    // Firebase Auth
    // Supabase
    // Custom API

    setSent(true);
  };

  if (sent) {
    return (
      <div className="space-y-8">
        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle2
              size={48}
              className="text-emerald-400"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white">
            Check Your Email
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            If an account exists for
            <span className="mx-1 font-semibold text-cyan-300">
              {email}
            </span>
            you'll receive password reset instructions shortly.
          </p>
        </div>

        <Link
          to="/login"
          className="flex h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Back to Login
        </Link>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-8"
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
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="h-14 w-full rounded-2xl border border-white/10 bg-slate-900/60 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="h-14 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Send Reset Link
        </button>
      </form>

      <div className="mt-10 text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={18} />
          Back to Login
        </Link>
      </div>
    </>
  );
}