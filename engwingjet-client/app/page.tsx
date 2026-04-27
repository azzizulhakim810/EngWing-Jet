export default function Home() {
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Courses", href: "#courses" },
    { label: "Benefits", href: "#benefits" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const features = [
    {
      title: "Live Speaking Labs",
      description:
        "Practice real conversations with mentors and get instant pronunciation feedback.",
    },
    {
      title: "Adaptive Learning Paths",
      description:
        "AI-guided lessons personalize your curriculum based on progress and weak spots.",
    },
    {
      title: "Career English Toolkit",
      description:
        "Master interviews, presentations, and workplace communication with structured modules.",
    },
  ];

  const courses = [
    { name: "Fluent Foundations", level: "Beginner", duration: "6 Weeks" },
    { name: "Business English Accelerator", level: "Intermediate", duration: "8 Weeks" },
    { name: "IELTS Mastery Sprint", level: "Advanced", duration: "10 Weeks" },
  ];

  const benefits = [
    "Structured roadmap from basics to confident fluency.",
    "Weekly progress analytics with mentor checkpoints.",
    "Community challenges that boost speaking consistency.",
    "Portfolio-ready certifications for academic and career growth.",
  ];

  const testimonials = [
    {
      quote:
        "EngWingJet made me comfortable speaking in meetings within two months. The mentorship is world-class.",
      name: "Nafisa Rahman",
      role: "Marketing Executive",
    },
    {
      quote:
        "The adaptive lessons felt like having a private coach. My IELTS speaking score jumped from 6.0 to 7.5.",
      name: "Arman Hossain",
      role: "Undergraduate Student",
    },
    {
      quote:
        "I landed a remote role after completing the career communication track. Highly practical and polished.",
      name: "Sadia Karim",
      role: "Customer Success Specialist",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="sticky top-0 z-50 border-b border-[#38BDF8]/20 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="text-xl font-bold tracking-tight text-[#2563EB]">
            EngWingJet
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-[#2563EB]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#cta"
            className="rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#2563EB]/20 transition hover:bg-[#1D4ED8]"
          >
            Start Free
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#38BDF8_0%,transparent_56%)]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div className="space-y-7">
              <p className="inline-flex rounded-full border border-[#38BDF8]/35 bg-white px-4 py-1 text-sm font-medium text-[#2563EB]">
                Trusted by 18,000+ learners worldwide
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-5xl">
                Speak English with Confidence, Clarity, and Career Impact
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                EngWingJet combines live coaching, smart practice, and a proven
                roadmap to help you communicate fluently in real-life and
                professional settings.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="rounded-full bg-[#2563EB] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/20 transition hover:bg-[#1D4ED8]"
                >
                  Book Free Trial
                </a>
                <a
                  href="#courses"
                  className="rounded-full border border-[#38BDF8]/40 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#38BDF8] hover:text-[#2563EB]"
                >
                  Explore Courses
                </a>
              </div>
            </div>
            <div className="ewj-card rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#EFF6FF] p-5">
                  <p className="text-3xl font-bold text-[#2563EB]">95%</p>
                  <p className="mt-1 text-sm text-slate-600">Completion rate</p>
                </div>
                <div className="rounded-2xl bg-[#E0F2FE] p-5">
                  <p className="text-3xl font-bold text-[#2563EB]">4.9/5</p>
                  <p className="mt-1 text-sm text-slate-600">Learner rating</p>
                </div>
                <div className="col-span-2 rounded-2xl bg-slate-900 p-5">
                  <p className="text-sm font-medium text-[#38BDF8]">Weekly growth</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    +32% speaking confidence in first 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
              Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Everything You Need to Learn Faster
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => (
              <article
                key={item.title}
                className="ewj-card p-6"
              >
                <h3 className="text-xl font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="courses" className="bg-white/70 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                  Popular Courses
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                  Pick Your Learning Track
                </h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.name}
                  className="ewj-card p-6"
                >
                  <h3 className="text-xl font-semibold text-[#0F172A]">{course.name}</h3>
                  <p className="mt-4 text-sm text-slate-600">
                    Level: <span className="font-medium text-slate-800">{course.level}</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Duration:{" "}
                    <span className="font-medium text-slate-800">{course.duration}</span>
                  </p>
                  <a
                    href="#cta"
                    className="mt-6 inline-block rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
                  >
                    Enroll Now
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                Learning Benefits
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Built to Deliver Real-World Progress
              </h2>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-sm font-bold text-[#2563EB]">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#38BDF8]/30 bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] p-8 shadow-[0_16px_36px_rgba(56,189,248,0.16)]">
              <p className="text-sm font-medium text-[#2563EB]">EngWingJet Advantage</p>
              <p className="mt-3 text-2xl font-semibold leading-snug text-[#0F172A]">
                A premium, mentor-backed platform designed for modern learners
                aiming for global opportunities.
              </p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white/70 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Learners Love Their Results
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="ewj-card p-6"
                >
                  <p className="leading-relaxed text-slate-600">“{item.quote}”</p>
                  <p className="mt-6 font-semibold text-[#0F172A]">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center shadow-xl shadow-slate-300 sm:px-12">
            <p className="text-sm font-medium uppercase tracking-wide text-[#FACC15]">
              Ready to Begin?
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Take Off with EngWingJet Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Join thousands of learners and transform your communication skills
              with expert guidance and modern tools.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Claim Your Free Trial
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#38BDF8]/20 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} EngWingJet. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-[#2563EB]">
              Terms
            </a>
            <a
              href="#"
              className="transition hover:text-[#2563EB]"
            >
              Privacy
            </a>
            <a href="#" className="transition hover:text-[#2563EB]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
