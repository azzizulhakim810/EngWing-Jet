import { Suspense } from "react";
import { AuthForm } from "../../components/auth-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-14 lg:px-10">
      <Suspense fallback={<div className="text-center text-[#2563EB]">Loading login form…</div>}>
        <AuthForm mode="login" />
      </Suspense>
    </main>
  );
}
