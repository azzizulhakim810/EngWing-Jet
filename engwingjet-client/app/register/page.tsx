import { AuthForm } from "../../components/auth-form";

interface RegisterPageProps {
  searchParams?: { next?: string };
}

export default function RegisterPage({ searchParams }: RegisterPageProps) {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-14 lg:px-10">
      <AuthForm mode="register" next={searchParams?.next} />
    </main>
  );
}
