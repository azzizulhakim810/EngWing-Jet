const faqs = [
  {
    question: "How quickly can I start learning?",
    answer:
      "You can start immediately after registration. Your first learning path is available within minutes.",
  },
  {
    question: "Do you offer live classes?",
    answer:
      "Yes. EngWingJet includes mentor-led live sessions and practice labs for speaking confidence.",
  },
  {
    question: "Is there support for working professionals?",
    answer:
      "Absolutely. Our tracks include business communication, interview English, and flexible schedules.",
  },
];

export default function ContactPage() {
  return (
    <main className="ewj-page">
      <div className="ewj-container">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
            Contact
          </p>
          <h1 className="ewj-hero-title mt-2">
            Let’s Connect with EngWingJet
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Reach out for admissions, partnerships, or curriculum support. Our team
            responds quickly and helps you choose the best learning path.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <article className="ewj-card p-7">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <form className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              />
              <textarea
                placeholder="How can we help you?"
                rows={6}
                className="w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              />
              <button
                type="button"
                className="rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Send Message
              </button>
            </form>
          </article>

          <article className="ewj-card p-7">
            <h2 className="text-2xl font-bold">Contact Info</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Email: </span>
                support@engwingjet.com
              </p>
              <p>
                <span className="font-semibold">Phone: </span>
                +880 1234 567890
              </p>
              <p>
                <span className="font-semibold">Address: </span>
                12 Learning Avenue, Dhaka, Bangladesh
              </p>
            </div>
          </article>
        </section>

        <section className="mt-12">
          <h2 className="ewj-section-title">Frequently Asked Questions</h2>
          <div className="mt-5 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="ewj-card p-6">
                <h3 className="text-lg font-semibold text-[#0F172A]">{faq.question}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
