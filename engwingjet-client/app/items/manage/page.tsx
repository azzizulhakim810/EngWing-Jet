"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProtectedRoute } from "../../../components/protected-route";
import { useAuth } from "../../../context/auth-context";

const STORAGE_KEY = "engwingjet_custom_courses";

interface CustomCourse {
  id: string;
  uid: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  category: string;
  level: string;
  image: string;
  createdAt?: string;
}

export default function ManageCoursesPage() {
  const { user } = useAuth();
  const [allCourses, setAllCourses] = useState<CustomCourse[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? (JSON.parse(stored) as CustomCourse[]) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const currentUserUid = user?.uid ?? "";

  const courses = useMemo(
    () => allCourses.filter((course) => course.uid === currentUserUid),
    [allCourses, currentUserUid],
  );

  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === selectedCourseId) ?? null,
    [courses, selectedCourseId],
  );

  function handleDelete(courseId: string) {
    if (!currentUserUid) {
      return;
    }

    const ownedCourse = courses.find((course) => course.id === courseId);
    if (!ownedCourse) {
      return;
    }

    const confirmed = window.confirm("Delete this course from local storage?");
    if (!confirmed) {
      return;
    }

    setAllCourses((prev) => {
      const updated = prev.filter(
        (course) => !(course.id === courseId && course.uid === currentUserUid),
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      if (selectedCourseId === courseId) {
        setSelectedCourseId(null);
      }
      return updated;
    });
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#F8FAFC] px-6 py-10 text-[#0F172A] lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <header className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                EngWingJet Dashboard
              </p>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Manage Added Courses</h1>
              <p className="mt-2 text-sm text-slate-600">
                View and manage all custom courses saved in your browser local storage.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/items/add"
                className="rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Add Course
              </Link>
              <Link
                href="/items"
                className="rounded-full border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:border-[#2563EB]"
              >
                Back to Items
              </Link>
            </div>
          </header>

          {courses.length === 0 ? (
            <section className="ewj-card p-8 text-center">
              <h2 className="text-xl font-semibold">No Added Courses Yet</h2>
              <p className="mt-2 text-sm text-slate-600">
                Start by creating your first custom course from the Add Course page.
              </p>
              <Link
                href="/items/add"
                className="mt-5 inline-flex rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Go to Add Course
              </Link>
            </section>
          ) : (
            <section className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
              <div className="ewj-card overflow-hidden p-0">
                <div className="hidden overflow-x-auto md:block">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-[#EFF6FF] text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Title</th>
                        <th className="px-4 py-3 font-semibold">Category</th>
                        <th className="px-4 py-3 font-semibold">Level</th>
                        <th className="px-4 py-3 font-semibold">Price</th>
                        <th className="px-4 py-3 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.id} className="border-t border-slate-100">
                          <td className="px-4 py-3 font-medium text-[#0F172A]">{course.title}</td>
                          <td className="px-4 py-3 text-slate-600">{course.category}</td>
                          <td className="px-4 py-3 text-slate-600">{course.level}</td>
                          <td className="px-4 py-3 text-slate-600">${course.price}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => setSelectedCourseId(course.id)}
                                className="rounded-full border border-[#38BDF8]/35 bg-white px-3 py-1.5 text-xs font-semibold text-[#2563EB] transition hover:border-[#2563EB]"
                              >
                                View
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDelete(course.id)}
                                className="rounded-full border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:border-red-300"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid gap-4 p-4 md:hidden">
                  {courses.map((course) => (
                    <article key={course.id} className="rounded-2xl border border-slate-100 bg-white p-4">
                      <h3 className="text-lg font-semibold text-[#0F172A]">{course.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {course.category} • {course.level}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-700">${course.price}</p>
                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedCourseId(course.id)}
                          className="flex-1 rounded-full border border-[#38BDF8]/35 bg-white px-3 py-2 text-xs font-semibold text-[#2563EB]"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(course.id)}
                          className="flex-1 rounded-full border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="ewj-card p-6">
                <h2 className="text-lg font-semibold text-[#0F172A]">Course Details</h2>
                {selectedCourse ? (
                  <div className="mt-4 space-y-3 text-sm">
                    <p>
                      <span className="font-semibold text-slate-700">Title:</span>{" "}
                      <span className="text-slate-600">{selectedCourse.title}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Short:</span>{" "}
                      <span className="text-slate-600">{selectedCourse.shortDescription}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Full:</span>{" "}
                      <span className="text-slate-600">{selectedCourse.fullDescription}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Category:</span>{" "}
                      <span className="text-slate-600">{selectedCourse.category}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Level:</span>{" "}
                      <span className="text-slate-600">{selectedCourse.level}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Price:</span>{" "}
                      <span className="text-slate-600">${selectedCourse.price}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Image URL:</span>{" "}
                      <span className="break-all text-slate-600">
                        {selectedCourse.image || "Not provided"}
                      </span>
                    </p>
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-slate-600">
                    Select a course using the View button to preview details here.
                  </p>
                )}
              </aside>
            </section>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
