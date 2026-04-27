"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ProtectedRoute } from "../../../components/protected-route";

const STORAGE_KEY = "engwingjet_custom_courses";

interface NewCourseForm {
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  category: string;
  level: string;
  image: string;
}

const initialState: NewCourseForm = {
  title: "",
  shortDescription: "",
  fullDescription: "",
  price: "",
  category: "General English",
  level: "Beginner",
  image: "",
};

export default function AddCoursePage() {
  const router = useRouter();
  const [form, setForm] = useState<NewCourseForm>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function updateField<K extends keyof NewCourseForm>(field: K, value: NewCourseForm[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function isValidImageUrl(value: string) {
    if (!value.trim()) {
      return true;
    }
    try {
      const url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!isValidImageUrl(form.image)) {
      setError("Please enter a valid Image URL (http/https).");
      return;
    }

    setSubmitting(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed: unknown[] = stored ? JSON.parse(stored) : [];

      const newCourse = {
        id: `custom-${Date.now()}`,
        title: form.title.trim(),
        shortDescription: form.shortDescription.trim(),
        fullDescription: form.fullDescription.trim(),
        price: Number(form.price),
        category: form.category,
        level: form.level,
        image: form.image.trim(),
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify([newCourse, ...parsed]));
      setForm(initialState);
      setMessage("Course saved successfully to local storage.");
    } catch {
      setError("Could not save the course. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#F8FAFC] px-6 py-10 text-[#0F172A] lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl font-bold">Add Course</h1>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-full border border-[#38BDF8]/35 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:border-[#2563EB]"
              >
                Back
              </button>
              <Link
                href="/items"
                className="rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                All Courses
              </Link>
            </div>
          </div>

          <section className="ewj-card p-6 sm:p-8">
            <p className="mb-6 text-sm text-slate-600">
              Create a new course entry. This will be stored in your browser local storage.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">
                Title
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(event) => updateField("title", event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Short description
                <input
                  type="text"
                  required
                  value={form.shortDescription}
                  onChange={(event) => updateField("shortDescription", event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Full description
                <textarea
                  required
                  rows={5}
                  value={form.fullDescription}
                  onChange={(event) => updateField("fullDescription", event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block text-sm font-medium text-slate-700">
                  Price
                  <input
                    type="number"
                    required
                    min={0}
                    step="0.01"
                    value={form.price}
                    onChange={(event) => updateField("price", event.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Category
                  <select
                    value={form.category}
                    onChange={(event) => updateField("category", event.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                  >
                    <option>General English</option>
                    <option>Business English</option>
                    <option>Test Preparation</option>
                    <option>Academic English</option>
                    <option>Conversation</option>
                  </select>
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Level
                  <select
                    value={form.level}
                    onChange={(event) => updateField("level", event.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Image URL
                <input
                  type="url"
                  value={form.image}
                  onChange={(event) => updateField("image", event.target.value)}
                  placeholder="https://example.com/course-image.jpg"
                  className="mt-2 w-full rounded-xl border border-[#38BDF8]/35 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                />
              </label>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              {message ? <p className="text-sm text-emerald-700">{message}</p> : null}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Saving..." : "Submit Course"}
              </button>
            </form>
          </section>
        </div>
      </main>
    </ProtectedRoute>
  );
}
