const instructors = [
  {
    name: "Sarah Thompson",
    expertise: "Business English & Public Speaking",
    experience: "9+ years",
    languages: "English, Bengali",
    image: "ST",
  },
  {
    name: "Daniel Rahman",
    expertise: "IELTS & TOEFL Preparation",
    experience: "11+ years",
    languages: "English, Hindi, Urdu",
    image: "DR",
  },
  {
    name: "Nadia Karim",
    expertise: "Academic Writing & Grammar",
    experience: "8+ years",
    languages: "English, Bengali",
    image: "NK",
  },
  {
    name: "James Oliveira",
    expertise: "Conversational Fluency Coaching",
    experience: "10+ years",
    languages: "English, Portuguese",
    image: "JO",
  },
];

export default function TeachersPage() {
  return (
    <main className="ewj-page">
      <div className="ewj-container">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
            Our Teachers
          </p>
          <h1 className="ewj-hero-title mt-2">
            Meet the Experts Behind EngWingJet
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Our instructors combine academic excellence and real-world communication
            coaching to help learners become fluent, confident, and career-ready.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {instructors.map((teacher) => (
            <article key={teacher.name} className="ewj-card flex h-full flex-col p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] text-xl font-bold text-[#2563EB]">
                {teacher.image}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-[#0F172A]">{teacher.name}</h2>
              <p className="mt-3 text-sm text-slate-600">
                <span className="font-semibold text-slate-700">Expertise: </span>
                {teacher.expertise}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-semibold text-slate-700">Experience: </span>
                {teacher.experience}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-semibold text-slate-700">Spoken Languages: </span>
                {teacher.languages}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
