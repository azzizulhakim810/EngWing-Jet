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
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/85 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="text-xl font-bold tracking-tight text-sky-700">
            EngWingJet
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-sky-700"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#cta"
            className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Start Free
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#7dd3fc_0%,transparent_55%)]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div className="space-y-7">
              <p className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-700">
                Trusted by 18,000+ learners worldwide
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
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
                  className="rounded-full bg-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700"
                >
                  Book Free Trial
                </a>
                <a
                  href="#courses"
                  className="rounded-full border border-sky-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
                >
                  Explore Courses
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-xl shadow-sky-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-sky-100 p-5">
                  <p className="text-3xl font-bold text-sky-700">95%</p>
                  <p className="mt-1 text-sm text-slate-600">Completion rate</p>
                </div>
                <div className="rounded-2xl bg-blue-100 p-5">
                  <p className="text-3xl font-bold text-blue-700">4.9/5</p>
                  <p className="mt-1 text-sm text-slate-600">Learner rating</p>
                </div>
                <div className="col-span-2 rounded-2xl bg-slate-900 p-5">
                  <p className="text-sm font-medium text-sky-200">Weekly growth</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    +32% speaking confidence in first 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Learn Faster
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="courses" className="bg-white/60 py-18">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                  Popular Courses
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Pick Your Learning Track
                </h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.name}
                  className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{course.name}</h3>
                  <p className="mt-4 text-sm text-slate-600">
                    Level: <span className="font-medium text-slate-800">{course.level}</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Duration:{" "}
                    <span className="font-medium text-slate-800">{course.duration}</span>
                  </p>
                  <a
                    href="#cta"
                    className="mt-6 inline-block rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
                  >
                    Enroll Now
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Learning Benefits
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Built to Deliver Real-World Progress
              </h2>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-100 to-blue-100 p-8 shadow-lg shadow-sky-100">
              <p className="text-sm font-medium text-sky-700">EngWingJet Advantage</p>
              <p className="mt-3 text-2xl font-semibold leading-snug text-slate-900">
                A premium, mentor-backed platform designed for modern learners
                aiming for global opportunities.
              </p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white/60 py-18">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Learners Love Their Results
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
                >
                  <p className="leading-relaxed text-slate-600">“{item.quote}”</p>
                  <p className="mt-6 font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center shadow-xl shadow-slate-300 sm:px-12">
            <p className="text-sm font-medium uppercase tracking-wide text-sky-300">
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
              className="mt-8 inline-block rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Claim Your Free Trial
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} EngWingJet. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-sky-700">
              Terms
            </a>
            <a
              href="#"
              className="transition hover:text-sky-700"
            >
              Privacy
            </a>
            <a href="#" className="transition hover:text-sky-700">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
