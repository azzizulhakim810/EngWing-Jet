"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { courses } from "../courses-data";

const STORAGE_KEY = "engwingjet_custom_courses";

interface LocalStorageCourse {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  level: string;
  price: number;
  image?: string;
  duration?: string;
  rating?: number;
  uid?: string;
  createdAt?: string;
}

interface DisplayCourse {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  level: string;
  price: number;
  duration: string;
  rating: number;
  isCustom: boolean;
}

export default function ItemsPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const userAddedCourses = useMemo<LocalStorageCourse[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? (JSON.parse(stored) as LocalStorageCourse[]) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, []);

  const unifiedCourses = useMemo<DisplayCourse[]>(() => {
    const staticCourses: DisplayCourse[] = courses.map((course) => ({
      id: course.id,
      title: course.title,
      shortDescription: course.shortDescription,
      category: course.category,
      level: course.level,
      price: course.price,
      duration: course.duration,
      rating: course.rating,
      isCustom: false,
    }));

    const localCourses: DisplayCourse[] = userAddedCourses.map(
      (course, index) => ({
        id: course.id || `ewj-${index + 1}`,
        title: course.title || "Untitled Course",
        shortDescription:
          course.shortDescription || "Custom course added by user.",
        category: course.category || "General English",
        level: course.level || "Beginner",
        price: Number(course.price) || 0,
        duration: course.duration || "Self-paced",
        rating: Number(course.rating) || 5,
        isCustom: true,
      }),
    );

    const merged = [...staticCourses, ...localCourses];
    const seen = new Set<string>();

    return merged.map((course, index) => {
      if (!seen.has(course.id)) {
        seen.add(course.id);
        return course;
      }

      const uniqueId = `${course.id}-dup-${index + 1}`;
      seen.add(uniqueId);
      return { ...course, id: uniqueId };
    });
  }, [userAddedCourses]);

  const categories = useMemo(
    () => ["All", ...new Set(unifiedCourses.map((course) => course.category))],
    [unifiedCourses],
  );
  const levels = useMemo(
    () => ["All", ...new Set(unifiedCourses.map((course) => course.level))],
    [unifiedCourses],
  );

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return unifiedCourses.filter((course) => {
      const matchesSearch =
        term.length === 0 ||
        course.title.toLowerCase().includes(term) ||
        course.shortDescription.toLowerCase().includes(term);
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel, unifiedCourses]);

  async function handleLogout() {
    await logout();
    router.replace("/login");
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-12 text-[#0F172A] lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                EngWingJet Items
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                Explore English Courses
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Find the right course using smart search and filters. Learn with
                a premium, structured experience built for fluency and career
                growth.
              </p>
            </div>
            {user ? (
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:border-[#2563EB]"
              >
                Logout
              </button>
            ) : null}
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
          Showing {filteredCourses.length} of {unifiedCourses.length} courses
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="ewj-card flex h-full flex-col p-6"
            >
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] p-4">
                <p className="inline-flex rounded-full bg-[#FACC15] px-2.5 py-1 text-xs font-semibold text-[#0F172A]">
                  {course.category}
                </p>
                <p className="mt-3 text-sm font-semibold text-[#2563EB]">
                  {course.level}
                </p>
                {course.isCustom ? (
                  <p className="mt-2 inline-flex rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-[#2563EB]">
                    User Added
                  </p>
                ) : null}
              </div>

              <h2 className="text-xl font-semibold text-[#0F172A]">
                {course.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {course.shortDescription}
              </p>

              <div className="mt-4 space-y-1 text-sm text-slate-600">
                <p>
                  Duration:{" "}
                  <span className="font-medium text-slate-800">
                    {course.duration}
                  </span>
                </p>
                <p>
                  Rating:{" "}
                  <span className="font-medium text-slate-800">
                    {course.rating} / 5
                  </span>
                </p>
                <p>
                  Price:{" "}
                  <span className="font-medium text-slate-800">
                    ${course.price}
                  </span>
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
  );
}
