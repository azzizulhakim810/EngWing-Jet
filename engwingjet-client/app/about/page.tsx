import Link from "next/link";

const reasons = [
  {
    title: "Mentor-Led Learning",
    description:
      "Experienced instructors guide learners with personalized coaching and actionable feedback.",
  },
  {
    title: "Career-Focused Curriculum",
    description:
      "We design practical modules for interviews, meetings, and real-world professional communication.",
  },
  {
    title: "Progress You Can Measure",
    description:
      "Weekly milestones and performance tracking help learners see consistent improvement.",
  },
];

const methodology = [
  "Assess current English level and communication goals.",
  "Build a tailored learning track with weekly objectives.",
  "Practice with guided speaking, writing, and listening drills.",
  "Apply skills in live scenarios with mentor feedback loops.",
];

export default function AboutPage() {
  return (
    <main className="ewj-page">
      <div className="ewj-container">
        <header className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
            About EngWingJet
          </p>
          <h1 className="ewj-hero-title mt-2">Helping Learners Speak with Confidence</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            EngWingJet is a modern English learning platform built for ambitious learners
            who want fluency for academics, career growth, and global communication.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="ewj-card p-7">
            <h2 className="text-2xl font-bold">Mission</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Our mission is to make premium English education accessible, practical, and
              outcome-driven so learners can communicate clearly in every stage of life.
            </p>
          </article>
          <article className="ewj-card p-7">
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Our vision is to become the most trusted English learning ecosystem for
              students and professionals across emerging global communities.
            </p>
          </article>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="ewj-card p-6">
                <h3 className="text-xl font-semibold text-[#0F172A]">{reason.title}</h3>
                <p className="mt-3 text-slate-600">{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="ewj-card p-8">
            <h2 className="text-3xl font-bold">Learning Methodology</h2>
            <ol className="mt-5 space-y-4">
              {methodology.map((step, index) => (
                <li key={step} className="flex gap-3 text-slate-700">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-sm font-bold text-[#2563EB]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-14">
          <div className="ewj-cta-panel px-8 py-12 text-center sm:px-12">
            <p className="text-sm font-medium uppercase tracking-wide text-[#FACC15]">
              Start Your Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Learn English with a Proven Premium Approach
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Join EngWingJet and grow your confidence with structured practice, live
              feedback, and measurable outcomes.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-block rounded-full bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Create Free Account
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
