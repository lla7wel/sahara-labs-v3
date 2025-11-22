"use client";

import Hero from "./components/Hero";
import WhatWeBuild from "./components/WhatWeBuild";
import StudioSection from "./components/StudioSection";
import Roadmap from "./components/Roadmap";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050609] text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-16 md:px-6 lg:px-8">
        <Hero />

        <WhatWeBuild />

        <StudioSection />

        <Roadmap />

        <ContactSection />

        <footer className="border-t border-white/10 pt-6 text-[11px] text-slate-500">
          Sahara Labs · 2025 · Quiet hardware for loud worlds.
        </footer>
      </div>
    </main>
  );
}
