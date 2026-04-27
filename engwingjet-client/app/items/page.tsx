"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courses } from "../courses-data";
import { ProtectedRoute } from "../../components/protected-route";
import { useAuth } from "../../context/auth-context";
import { useRouter } from "next/navigation";

export default function ItemsPage() {
  const { logout } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(courses.map((course) => course.category))],
    [],
  );
  const levels = useMemo(
    () => ["All", ...new Set(courses.map((course) => course.level))],
    [],
  );

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesSearch =
        term.length === 0 ||
        course.title.toLowerCase().includes(term) ||
        course.shortDescription.toLowerCase().includes(term);
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  async function handleLogout() {
    await logout();
    router.replace("/login");
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#F8FAFC] px-6 py-12 text-[#0F172A] lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
        <header className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                EngWingJet Items
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Explore English Courses</h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Find the right course using smart search and filters. Learn with a premium,
                structured experience built for fluency and career growth.
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:border-[#2563EB]"
            >
              Logout
            </button>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              <Link
                href="/items/add"
                className="inline-flex items-center rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Add Course
              </Link>
              <Link
                href="/items/manage"
                className="inline-flex items-center rounded-full border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:border-[#2563EB]"
              >
                Manage Courses
              </Link>
            </div>
          </div>
        </header>

        <section className="ewj-card mb-8 p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Search Courses
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by title or keyword..."
                className="rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Category
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Level
              <select
                value={selectedLevel}
                onChange={(event) => setSelectedLevel(event.target.value)}
                className="rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <div className="mb-5 text-sm font-medium text-slate-600">
          Showing {filteredCourses.length} of {courses.length} courses
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <article key={course.id} className="ewj-card flex h-full flex-col p-6">
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] p-4">
                <p className="inline-flex rounded-full bg-[#FACC15] px-2.5 py-1 text-xs font-semibold text-[#0F172A]">
                  {course.category}
                </p>
                <p className="mt-3 text-sm font-semibold text-[#2563EB]">{course.level}</p>
              </div>

              <h2 className="text-xl font-semibold text-[#0F172A]">{course.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {course.shortDescription}
              </p>

              <div className="mt-4 space-y-1 text-sm text-slate-600">
                <p>
                  Duration: <span className="font-medium text-slate-800">{course.duration}</span>
                </p>
                <p>
                  Rating: <span className="font-medium text-slate-800">{course.rating} / 5</span>
                </p>
                <p>
                  Price: <span className="font-medium text-slate-800">${course.price}</span>
                </p>
              </div>

              <Link
                href={`/items/${course.id}`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                View Details
              </Link>
            </article>
          ))}
        </section>
        </div>
      </main>
    </ProtectedRoute>
  );
}
