"use client";

import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function StudioSection() {
  return (
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
        <h2 className="text-sm font-semibold text-slate-50">For individuals & teams</h2>
        <p className="text-xs text-slate-300">
          Build a desk that keeps you in flow. Sahara hardware slots into your existing tools—calendar, task manager, music—and gives you a calm, physical surface for your digital life.
        </p>
        <ul className="space-y-1.5 text-xs text-slate-300">
          <li>· Focus modes you can tap, not configure.</li>
          <li>· Glanceable time, next event, and workload.</li>
          <li>· Subtle sound and light, tuned for long days.</li>
        </ul>
      </div>

      <div className="space-y-3 rounded-3xl border border-amber-300/40 bg-amber-300/5 p-5">
        <h2 className="text-sm font-semibold text-amber-100">For resellers & partners</h2>
        <p className="text-xs text-amber-50/90">
          We&apos;re opening a small network of resellers and studio partners. If you curate tools for creative teams, remote offices, or work-from-anywhere setups, we&apos;d love to talk.
        </p>
        <ul className="space-y-1.5 text-xs text-amber-50/90">
          <li>· Early access to production runs.</li>
          <li>· Custom finishes and co-branding options.</li>
          <li>· Simple, transparent pricing and support.</li>
        </ul>
      </div>
    </motion.section>
  );
}
