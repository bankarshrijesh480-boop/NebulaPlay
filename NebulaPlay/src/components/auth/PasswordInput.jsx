import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function PasswordInput({
  id = "password",
  name = "password",
  label = "Password",
  placeholder = "Enter your password",
  value,
  onChange,
  error = "",
  required = false,
  autoComplete = "current-password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-3">
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-300"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-400">*</span>
        )}
      </label>

      {/* Input */}
      <div className="relative">
        {/* Lock Icon */}
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
          <Lock
            size={20}
            className="text-slate-500"
          />
        </div>

        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`h-14 w-full rounded-2xl border bg-slate-900/60 pl-12 pr-14 text-white placeholder:text-slate-500 outline-none transition-all duration-300 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 focus:border-cyan-500"
          }`}
        />

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 transition hover:text-cyan-400"
          aria-label={
            showPassword ? "Hide password" : "Show password"
          }
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}