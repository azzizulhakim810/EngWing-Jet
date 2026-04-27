import { AuthForm } from "../../components/auth-form";

interface LoginPageProps {
  searchParams?: { next?: string };
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-14 lg:px-10">
      <AuthForm mode="login" next={searchParams?.next} />
    </main>
  );
}
