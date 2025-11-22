"use client";

import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Roadmap() {
  const phases = [
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
  ];

  return (
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
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">Roadmap · 2025</h2>
          <p className="max-w-md text-sm text-slate-300">
            We&apos;re intentionally small. A few products, obsessively built—and shipped when they feel right.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {phases.map((phase) => (
          <div key={phase.title} className="rounded-3xl border border-white/10 bg-white/0 p-4">
            <h3 className="mb-2 text-xs font-semibold text-amber-200">{phase.title}</h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {phase.points.map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
