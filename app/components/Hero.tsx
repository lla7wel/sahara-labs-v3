"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid items-start gap-10 py-6 md:gap-16 md:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]"
    >
      <div className="space-y-5 md:space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-[12px] font-medium text-slate-200">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-sm" />
          Sahara Labs · Hardware Studio
        </div>

        <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Minimal hardware,
          <span className="block text-amber-300">built for quiet focus.</span>
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
          Sahara Labs designs calm, connected objects for your desk and home—smart clocks, docks, and lighting that feel as considered as your favorite apps. No visual noise. No clutter. Just signal.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-300/30 transition hover:bg-amber-200"
          >
            Join the early waitlist
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/3"
          >
            View roadmap
          </a>
        </div>

        <p className="text-xs text-slate-400">
          First drop: Sahara Clock v1 — Wi-Fi enabled desk clock with ambient status light and ultra-low power display.
        </p>
      </div>

      {/* Hero device card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.985, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.5 }}
        className="relative -mx-2 md:mx-0"
      >
        <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-br from-amber-400/12 via-amber-200/0 to-sky-500/8 blur-[18px]" />
        <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-slate-900/95 to-slate-950 p-5 md:p-6 shadow-xl">
          <div className="mb-5 flex items-center justify-between text-xs text-slate-300">
            <span className="text-sm">Sahara Clock v1</span>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">
              Prototype ready
            </span>
          </div>

          <div className="relative mb-5 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4 md:p-5">
            <div className="mb-3 flex items-center justify-between text-[11px] text-slate-300">
              <span>Desk overview</span>
              <span className="text-slate-400">Thu · 9:41</span>
            </div>

            <div className="grid grid-cols-[1.35fr,1fr] gap-3 md:gap-4">
              <div className="flex flex-col justify-center gap-2.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-semibold tracking-tight">09:41</span>
                  <span className="text-[11px] text-slate-400">AM · Focus block</span>
                </div>
                <div className="flex gap-1.5 text-[11px] text-slate-300">
                  <span className="rounded-full bg-slate-800 px-2 py-1">Deep work</span>
                  <span className="rounded-full bg-slate-800 px-2 py-1">Notifications off</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-slate-800">
                  <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                </div>
              </div>

              <div className="flex flex-col justify-between text-[11px] text-slate-300">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Next event</span>
                    <span className="text-slate-400">10:30</span>
                  </div>
                  <div className="rounded-2xl bg-slate-800/70 px-3 py-2">
                    Sahara Labs · Standup
                    <div className="text-[10px] text-slate-400">15 min · Online</div>
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
            Designed for desks that feel like home. One glance gives you time, focus state, and what's next—without opening a single app.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
