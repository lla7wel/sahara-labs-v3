import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahara Labs – Hardware Studio",
  description:
    "Minimal, connected hardware for calm workspaces. Sahara Labs builds smart clocks, docks, and lighting for focused work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050609] text-slate-50 antialiased">
        <header className="border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
            <span className="text-sm font-semibold tracking-tight">
              Sahara Labs
            </span>
            <nav className="flex gap-4 text-xs text-slate-300">
              <a href="#studio" className="hover:text-amber-300">
                Studio
              </a>
              <a href="#roadmap" className="hover:text-amber-300">
                Roadmap
              </a>
              <a href="#contact" className="hover:text-amber-300">
                Contact
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
