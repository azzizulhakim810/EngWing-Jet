"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { useAuth } from "../context/auth-context";

interface AuthFormProps {
  mode: "login" | "register";
}

export function AuthForm({ mode }: AuthFormProps) {
  const { login, register, loginWithGoogle } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const isLogin = mode === "login";

  const submitLabel = isLogin ? "Login" : "Create Account";
  const heading = isLogin ? "Welcome Back" : "Create Your Account";
  const helperText = isLogin
    ? "Sign in to continue learning with EngWingJet."
    : "Start your EngWingJet journey in under a minute.";

  const emailError = useMemo(() => {
    if (!touched.email) {
      return "";
    }
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return valid ? "" : "Please enter a valid email address.";
  }, [email, touched.email]);

  const passwordError = useMemo(() => {
    if (!touched.password) {
      return "";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return "";
  }, [password, touched.password]);

  const isFormInvalid =
    !email.trim() || !password || Boolean(emailError) || Boolean(passwordError);

  function redirectAfterAuth() {
    const next = searchParams.get("next");
    router.replace(next || "/items");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setTouched({ email: true, password: true });

    if (isFormInvalid) {
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password);
      }
      redirectAfterAuth();
    } catch {
      setError("Authentication failed. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setError("");
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
      redirectAfterAuth();
    } catch {
      setError("Google login failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-[#38BDF8]/20 bg-white shadow-[0_22px_54px_rgba(37,99,235,0.12)]">
      <div className="grid md:grid-cols-2">
        <aside className="relative hidden bg-gradient-to-br from-[#2563EB] to-[#38BDF8] p-10 text-white md:block">
          <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            EngWingJet
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-tight">
            Learn English with confidence and career impact
          </h2>
          <p className="mt-4 text-sm text-blue-50/95">
            Premium educational experience with structured lessons, mentor support,
            and practical speaking growth.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <p>• Mentor-backed curriculum</p>
            <p>• Real-world conversation focus</p>
            <p>• Progress tracking and milestones</p>
          </div>
        </aside>

        <div className="p-7 sm:p-9">
          <h1 className="text-2xl font-bold text-[#0F172A]">{heading}</h1>
          <p className="mt-2 text-sm text-slate-600">{helperText}</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                required
                className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              />
              {emailError ? <span className="mt-1 block text-xs text-red-600">{emailError}</span> : null}
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                required
                minLength={6}
                className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              />
              {passwordError ? (
                <span className="mt-1 block text-xs text-red-600">{passwordError}</span>
              ) : null}
            </label>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              type="submit"
              disabled={loading || googleLoading || isFormInvalid}
              className="w-full rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Please wait..." : submitLabel}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading || googleLoading}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#38BDF8]/35 bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition hover:border-[#2563EB] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="text-base">G</span>
            {googleLoading ? "Signing in..." : "Continue with Google"}
          </button>

          <p className="mt-5 text-sm text-slate-600">
            {isLogin ? "New here?" : "Already have an account?"}{" "}
            <Link
              href={isLogin ? "/register" : "/login"}
              className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              {isLogin ? "Create an account" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
