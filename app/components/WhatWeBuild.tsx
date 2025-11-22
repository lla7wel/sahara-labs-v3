"use client";

import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhatWeBuild() {
  const items = [
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
  ];

  return (
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
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">What we build</h2>
          <p className="max-w-xl text-sm text-slate-300">
            A small family of connected objects that share a common language—soft light, subtle sound, and glanceable information.
          </p>
        </div>
        <p className="text-xs text-slate-400">For individuals, studios, and resellers who care about details.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl border border-white/10 bg-white/0 p-4 transition hover:border-amber-300/60 hover:bg-white/5"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-sm font-medium text-slate-50">{item.title}</h3>
              <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-200">{item.tag}</span>
            </div>
            <p className="text-xs text-slate-300">{item.body}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
