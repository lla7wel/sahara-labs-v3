"use client";

import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050609] text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-16 md:px-6 lg:px-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid items-center gap-12 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Sahara Labs · Hardware Studio
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Minimal hardware,
              <span className="block text-amber-300">
                built for quiet focus.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Sahara Labs designs calm, connected objects for your desk and
              home—smart clocks, docks, and lighting that feel as considered as
              your favorite apps. No visual noise. No clutter. Just signal.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-amber-300 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-amber-300/30 transition hover:bg-amber-200"
              >
                Join the early waitlist
              </a>
              <a
                href="#roadmap"
                className="rounded-full border border-white/15 bg-white/0 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/5"
              >
                View roadmap
              </a>
            </div>

            <p className="text-xs text-slate-400">
              First drop: Sahara Clock v1 — Wi-Fi enabled desk clock with
              ambient status light and ultra-low power display.
            </p>
          </div>

          {/* Hero device card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-amber-400/15 via-amber-200/0 to-sky-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between text-xs text-slate-300">
                <span>Sahara Clock v1</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
                  Prototype ready
                </span>
              </div>

              <div className="relative mb-6 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5">
                <div className="mb-4 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Desk overview</span>
                  <span className="text-slate-400">Thu · 9:41</span>
                </div>

                <div className="grid grid-cols-[1.4fr,1fr] gap-4">
                  <div className="flex flex-col justify-center gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-semibold tracking-tight">
                        09:41
                      </span>
                      <span className="text-[11px] text-slate-400">
                        AM · Focus block
                      </span>
                    </div>
                    <div className="flex gap-1.5 text-[11px] text-slate-300">
                      <span className="rounded-full bg-slate-800 px-2 py-1">
                        Deep work
                      </span>
                      <span className="rounded-full bg-slate-800 px-2 py-1">
                        Notifications off
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-slate-800">
                      <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between text-[11px] text-slate-300">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span>Next event</span>
                        <span className="text-slate-400">10:30</span>
                      </div>
                      <div className="rounded-2xl bg-slate-800/70 px-3 py-2">
                        Sahara Labs · Standup
                        <div className="text-[10px] text-slate-400">
                          15 min · Online
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Ambient strip</span>
                        <span className="text-slate-400">Warm · 40%</span>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="h-6 flex-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />
                        <span className="h-6 w-10 rounded-full bg-slate-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400">
                Designed for desks that feel like home. One glance gives you
                time, focus state, and what&apos;s next—without opening a single
                app.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* What we build */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                What we build
              </h2>
              <p className="max-w-xl text-sm text-slate-300">
                A small family of connected objects that share a common
                language—soft light, subtle sound, and glanceable information.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              For individuals, studios, and resellers who care about details.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Sahara Clock",
                body: "Wi-Fi desk clock with ambient status light, focus modes, and API hooks for your tools.",
                tag: "Flagship",
              },
              {
                title: "Desert Dock",
                body: "Magnetic charging base with soft under-glow and a single braided cable for your whole desk.",
                tag: "In design",
              },
              {
                title: "Signal Strip",
                body: "Low-profile LED strip that can mirror calendar load, notifications, or custom signals.",
                tag: "Exploring",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/0 p-4 transition hover:border-amber-300/60 hover:bg-white/5"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-medium text-slate-50">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-200">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* For individuals / resellers */}
        <motion.section
          id="studio"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-4 md:grid-cols-2"
        >
          <div className="space-y-3 rounded-3xl border border-white/10 bg-white/0 p-5">
            <h2 className="text-sm font-semibold text-slate-50">
              For individuals & teams
            </h2>
            <p className="text-xs text-slate-300">
              Build a desk that keeps you in flow. Sahara hardware slots into
              your existing tools—calendar, task manager, music—and gives you a
              calm, physical surface for your digital life.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>· Focus modes you can tap, not configure.</li>
              <li>· Glanceable time, next event, and workload.</li>
              <li>· Subtle sound and light, tuned for long days.</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-3xl border border-amber-300/40 bg-amber-300/5 p-5">
            <h2 className="text-sm font-semibold text-amber-100">
              For resellers & partners
            </h2>
            <p className="text-xs text-amber-50/90">
              We&apos;re opening a small network of resellers and studio
              partners. If you curate tools for creative teams, remote offices,
              or work-from-anywhere setups, we&apos;d love to talk.
            </p>
            <ul className="space-y-1.5 text-xs text-amber-50/90">
              <li>· Early access to production runs.</li>
              <li>· Custom finishes and co-branding options.</li>
              <li>· Simple, transparent pricing and support.</li>
            </ul>
          </div>
        </motion.section>

        {/* Roadmap */}
        <motion.section
          id="roadmap"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                Roadmap · 2025
              </h2>
              <p className="max-w-md text-sm text-slate-300">
                We&apos;re intentionally small. A few products, obsessively
                built—and shipped when they feel right.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Q1 · Engineering",
                points: [
                  "Finalize Sahara Clock v1 electronics & enclosure.",
                  "Internal firmware + Wi-Fi stack beta.",
                  "Pilot run with friends & early contributors.",
                ],
              },
              {
                title: "Q2 · First drop",
                points: [
                  "Public announcement & waitlist.",
                  "Limited first-run preorders for individuals.",
                  "Partner program for select resellers.",
                ],
              },
              {
                title: "Q3–Q4 · Studio",
                points: [
                  "Desert Dock and Signal Strip exploration.",
                  "API & integrations for teams.",
                  "Second production run based on feedback.",
                ],
              },
            ].map((phase) => (
              <div
                key={phase.title}
                className="rounded-3xl border border-white/10 bg-white/0 p-4"
              >
                <h3 className="mb-2 text-xs font-semibold text-amber-200">
                  {phase.title}
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {phase.points.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact / waitlist */}
        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-7"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50">
                Stay close to the lab.
              </h2>
              <p className="text-sm text-slate-300">
                Add your email and we&apos;ll send a short note when Sahara
                Clock v1 is ready, plus occasional behind-the-scenes from the
                hardware studio. No noise, no lists sold.
              </p>
              <p className="text-xs text-slate-500">
                If you&apos;re a reseller or studio partner, mention it below
                and we&apos;ll prioritize your message.
              </p>
            </div>

            <form className="space-y-3">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@studio.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-amber-300/70 focus:bg-slate-900 focus:ring-2 focus:ring-amber-300/40"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="notes"
                  className="text-xs font-medium text-slate-200"
                >
                  Anything we should know?{" "}
                  <span className="font-normal text-slate-400">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Tell us about your setup, studio, or what you’d like Sahara to build."
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-xs text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-amber-300/70 focus:bg-slate-900 focus:ring-2 focus:ring-amber-300/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-amber-300 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-amber-300/30 transition hover:bg-amber-200"
              >
                Join the waitlist
              </button>

              <p className="text-[11px] text-slate-500">
                Form is currently front-end only — hook it up later to
                Formspree, Netlify Forms, or a custom Next.js API route.
              </p>
            </form>
          </div>
        </motion.section>

        <footer className="border-t border-white/10 pt-6 text-[11px] text-slate-500">
          Sahara Labs · 2025 · Quiet hardware for loud worlds.
        </footer>
      </div>
    </main>
  );
}
