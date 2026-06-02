"use client";

import Link from "next/link";
import { ArrowRight, Home, Sparkles } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F9F5F1] px-6 py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100 blur-3xl" />

      {/* Decorative Elements */}
      <div className="absolute left-10 top-20 h-24 w-24 rounded-full border border-orange-200 opacity-40" />
      <div className="absolute bottom-16 right-16 h-40 w-40 rounded-full border border-orange-100 opacity-30" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-[40px] border border-orange-100 bg-white p-10 shadow-[0_30px_80px_rgba(255,140,0,0.12)] md:p-16">
        {/* Logo */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/20">
            <Sparkles className="h-7 w-7 text-white" />
          </div>

          <span className="text-4xl font-black tracking-tight text-neutral-950">
            RegenAI
          </span>
        </div>

        {/* 404 */}
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-8xl font-black text-transparent md:text-[10rem]">
            404
          </h1>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-neutral-950 md:text-5xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            The page you’re looking for doesn’t exist or may have been moved.
            Let AI help you build the perfect resume instead.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-5 text-lg font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <Link
            href="/templates"
            className="group flex items-center justify-center gap-2 rounded-2xl border border-orange-100 bg-orange-50 px-8 py-5 text-lg font-semibold text-neutral-800 transition hover:border-orange-200 hover:bg-orange-100"
          >
            Browse Templates
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid gap-6 rounded-3xl border border-orange-100 bg-orange-50/50 p-6 md:grid-cols-3">
          {[
            {
              title: "AI Resume Builder",
              desc: "Generate professional resumes instantly.",
            },
            {
              title: "ATS Optimized",
              desc: "Designed to pass modern hiring systems.",
            },
            {
              title: "Beautiful Templates",
              desc: "Choose from stunning modern layouts.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-neutral-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
