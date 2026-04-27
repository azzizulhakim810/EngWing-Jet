import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "../../courses-data";

interface ItemDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ItemDetailsPage({ params }: ItemDetailsPageProps) {
  const { id } = await params;

  const course = courses.find((item) => item.id === id);

  if (!course) {
    notFound();
  }

  const relatedCourses = courses
    .filter(
      (item) =>
        item.id !== course.id &&
        (item.category === course.category || item.level === course.level),
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-10 text-[#0F172A] lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <Link
          href="/items"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-medium text-[#2563EB] transition hover:border-[#2563EB]"
        >
          ← Back to Courses
        </Link>

        <section className="ewj-card overflow-hidden p-0">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-72 bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE]">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-7 sm:p-9">
              <p className="inline-flex rounded-full bg-[#FACC15] px-3 py-1 text-xs font-semibold text-[#0F172A]">
                {course.category}
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                {course.title}
              </h1>
              <p className="mt-4 leading-relaxed text-slate-600">{course.fullDescription}</p>

              <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-[#38BDF8]/25 bg-white p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Level
                  </p>
                  <p className="mt-1 font-semibold text-[#0F172A]">{course.level}</p>
                </div>
                <div className="rounded-xl border border-[#38BDF8]/25 bg-white p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Duration
                  </p>
                  <p className="mt-1 font-semibold text-[#0F172A]">{course.duration}</p>
                </div>
                <div className="rounded-xl border border-[#38BDF8]/25 bg-white p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Price
                  </p>
                  <p className="mt-1 font-semibold text-[#0F172A]">${course.price}</p>
                </div>
                <div className="rounded-xl border border-[#38BDF8]/25 bg-white p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Rating
                  </p>
                  <p className="mt-1 font-semibold text-[#0F172A]">{course.rating} / 5</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Related Courses</h2>
            <Link
              href="/items"
              className="text-sm font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedCourses.map((item) => (
              <article key={item.id} className="ewj-card flex h-full flex-col p-6">
                <p className="inline-flex w-fit rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#2563EB]">
                  {item.category}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.shortDescription}
                </p>
                <div className="mt-4 text-sm text-slate-600">
                  <p>
                    Level: <span className="font-medium text-slate-800">{item.level}</span>
                  </p>
                  <p>
                    Price: <span className="font-medium text-slate-800">${item.price}</span>
                  </p>
                </div>
                <Link
                  href={`/items/${item.id}`}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
                >
                  View Details
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
