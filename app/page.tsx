"use client";

import { useInView } from "@/lib/useInView";
import {
  Sparkles,
  Grid2X2,
  PenTool,
  Target,
  LayoutTemplate,
  Download,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const { ref: headRef, inView: headIn } = useInView({ threshold: 0.2 });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-foreground font-sans">
      {/* HERO */}
      <section className="relative mx-auto px-6 py-20 lg:px-8">
        <div
          className={`grid items-center gap-14 lg:grid-cols-2 transition-all duration-1500 ${
            headIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          ref={headRef}
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* BADGE */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2 text-lg font-manrope font-medium text-accent">
              <Sparkles className="h-4 w-4 fill-accent text-accent" />
              AI-Powered • Professional • Fast
            </div>

            {/* HEADLINE */}
            <h1 className="max-w-2xl text-5xl font-bold font-poppins leading-[1.05] tracking-tight text-neutral-950 md:text-7xl">
              Create Your Perfect Resume with{" "}
              <span className="text-orange-500">AI-Powered Precision.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-neutral-600">
              Answer a few questions and let AI craft a professional,
              ATS-friendly resume for you. Choose from stunning templates and
              download in seconds.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-5 text-lg font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]">
                Create My Resume
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button className="flex items-center justify-center gap-3 rounded-2xl border border-orange-100 bg-white px-8 py-5 text-lg font-semibold text-neutral-800 shadow-sm transition hover:border-orange-200 hover:bg-orange-50">
                Browse Templates
                <Grid2X2 className="h-5 w-5" />
              </button>
            </div>

            {/* USERS */}
            {/* <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-4">
                {[
                  "https://i.pravatar.cc/100?img=1",
                  "https://i.pravatar.cc/100?img=2",
                  "https://i.pravatar.cc/100?img=3",
                  "https://i.pravatar.cc/100?img=4",
                ].map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full border-4 border-[#F9F5F1]"
                  />
                ))}
              </div>

              <div>
                <div className="flex text-orange-500">{"★★★★★"}</div>

                <p className="text-lg text-neutral-600">
                  Loved by <span className="font-semibold">20,000+</span> job
                  seekers
                </p>
              </div>
            </div> */}
          </div>

          {/* RIGHT VISUAL */}
          <div
            style={{ transitionDelay: headIn ? `${300}ms` : "0ms" }}
            className={`relative flex justify-center transition-all duration-1500 ${
              headIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            ref={headRef}
          >
            {/* Background Blur */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100 blur-3xl" />

            {/* TEMPLATE PANEL */}
            <div className="absolute right-0 top-20 z-0 hidden w-[230px] rounded-[32px] border border-orange-100 bg-white p-6 shadow-xl lg:block">
              <h3 className="mb-5 text-xl font-bold text-neutral-900">
                Choose a Template
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className={`rounded-2xl border p-2 ${
                      item === 4
                        ? "border-orange-400 ring-2 ring-orange-200"
                        : "border-neutral-200"
                    }`}
                  >
                    <div className="h-28 rounded-xl bg-neutral-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* RESUME CARD */}
            <div className="relative z-10 w-full max-w-[600px] rounded-[40px] border border-orange-100 bg-white p-10 shadow-[0_30px_80px_rgba(255,140,0,0.12)]">
              {/* TOP */}
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h2 className="text-5xl font-black text-neutral-950">
                    Alex Johnson
                  </h2>

                  <p className="mt-2 text-2xl font-semibold text-orange-500">
                    Frontend Developer
                  </p>
                </div>

                <div className="flex gap-5 text-sm text-neutral-500">
                  <span>Preview</span>
                  <span>Download</span>
                </div>
              </div>

              {/* CONTACT */}
              <div className="mb-8 flex flex-wrap gap-6 text-sm text-neutral-500">
                <span>alex@email.com</span>
                <span>+1 (555) 123-4567</span>
                <span>San Francisco</span>
              </div>

              <div className="mb-8 h-px bg-neutral-200" />

              {/* SUMMARY */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-neutral-900">
                  PROFESSIONAL SUMMARY
                </h3>

                <p className="leading-relaxed text-neutral-600">
                  Detail-oriented Frontend Developer with 4+ years of experience
                  building responsive and user-friendly applications. Passionate
                  about creating seamless digital experiences.
                </p>
              </div>

              {/* EXPERIENCE */}
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-bold text-neutral-900">
                  EXPERIENCE
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-neutral-900">
                        Frontend Developer
                      </h4>

                      <span className="text-sm text-neutral-500">
                        Jan 2021 - Present
                      </span>
                    </div>

                    <p className="mt-2 text-neutral-600">
                      Built and maintained responsive web applications using
                      React, TypeScript, and Tailwind CSS.
                    </p>
                  </div>
                </div>
              </div>

              {/* SKILLS */}
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-bold text-neutral-900">
                  SKILLS
                </h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "JavaScript",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI ASSISTANT CARD */}
            <div className="absolute -left-10 bottom-10 z-20 hidden w-[270px] rounded-[32px] border border-orange-100 bg-white p-6 shadow-xl lg:block">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="text-2xl font-bold text-neutral-900">
                  AI Assistant
                </h3>
              </div>

              <div className="rounded-2xl bg-orange-50 p-4 text-neutral-700">
                What’s your job title?
              </div>

              <div className="mt-4 inline-flex rounded-2xl bg-orange-100 px-4 py-3 font-medium text-orange-700">
                Frontend Developer
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-neutral-900">
                  Generating your resume...
                </h4>

                <div className="mt-5 space-y-4">
                  {[
                    "Analyzing your profile",
                    "Crafting key highlights",
                    "Optimizing for ATS",
                    "Finalizing your resume",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-neutral-600"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                        ✓
                      </div>

                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-neutral-100">
                  <div className="h-full w-4/5 rounded-full bg-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STRIP */}
        <div
          className={`mt-24 grid gap-6 rounded-[40px] border border-orange-100 bg-white p-8 shadow-sm lg:grid-cols-4 transition-all duration-1500 ${
            headIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          ref={headRef}
          style={{ transitionDelay: headIn ? `${700}ms` : "0ms" }}
        >
          {[
            {
              icon: <PenTool className="h-7 w-7 text-orange-500" />,
              title: "AI-Powered Writing",
              desc: "Generate impactful content tailored to your profile",
            },
            {
              icon: <Target className="h-7 w-7 text-orange-500" />,
              title: "ATS Optimized",
              desc: "Beat the bots with ATS-friendly resumes",
            },
            {
              icon: <LayoutTemplate className="h-7 w-7 text-orange-500" />,
              title: "Multiple Templates",
              desc: "Choose from beautiful professional designs",
            },
            {
              icon: <Download className="h-7 w-7 text-orange-500" />,
              title: "Download & Share",
              desc: "Export as PDF and share anytime",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex gap-5 rounded-3xl p-4 transition hover:bg-orange-50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  {feature.title}
                </h3>

                <p className="mt-2 leading-relaxed text-neutral-600">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
