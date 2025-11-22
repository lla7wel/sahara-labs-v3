"use client";

import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
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
          <h2 className="text-lg font-semibold tracking-tight text-slate-50">Stay close to the lab.</h2>
          <p className="text-sm text-slate-300">
            Add your email and we&apos;ll send a short note when Sahara Clock v1 is ready, plus occasional behind-the-scenes from the hardware studio. No noise, no lists sold.
          </p>
          <p className="text-xs text-slate-500">
            If you&apos;re a reseller or studio partner, mention it below and we&apos;ll prioritize your message.
          </p>
        </div>

        <form className="space-y-3">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium text-slate-200">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@studio.com"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-amber-300/70 focus:bg-slate-900 focus:ring-2 focus:ring-amber-300/40"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="notes" className="text-xs font-medium text-slate-200">
              Anything we should know? <span className="font-normal text-slate-400">(optional)</span>
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
            Form is currently front-end only — hook it up later to Formspree, Netlify Forms, or a custom Next.js API route.
          </p>
        </form>
      </div>
    </motion.section>
  );
}
