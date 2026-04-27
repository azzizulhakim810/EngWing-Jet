import { AuthForm } from "../../components/auth-form";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-14 lg:px-10">
      <AuthForm mode="register" />
    </main>
  );
}
