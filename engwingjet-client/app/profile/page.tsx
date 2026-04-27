"use client";

import { useAuth } from "../../context/auth-context";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-10 text-[#0F172A] lg:px-10">
      <div className="ewj-card mx-auto w-full max-w-3xl p-7 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">Profile</p>
        <h1 className="mt-2 text-3xl font-bold">My Account</h1>
        <div className="mt-6 space-y-3 text-sm">
          <p>
            <span className="font-semibold text-slate-700">Name:</span>{" "}
            <span className="text-slate-600">{user?.displayName || "Not set"}</span>
          </p>
          <p>
            <span className="font-semibold text-slate-700">Email:</span>{" "}
            <span className="text-slate-600">{user?.email || "Not available"}</span>
          </p>
          <p>
            <span className="font-semibold text-slate-700">UID:</span>{" "}
            <span className="break-all text-slate-600">{user?.uid || "Not available"}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
