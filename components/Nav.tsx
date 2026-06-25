"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Minimal Logo Only */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-[#E8366A] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-105 transition-transform">
            HB
          </div>
          <div className="hidden sm:block">
            <div className="font-black text-white tracking-tighter text-xl leading-none">
              HIAWATHA BROWN
            </div>
            <div className="text-[#E8366A] text-xs font-medium tracking-[2px] uppercase">
              DISTRICT 1 • CLEVELAND
            </div>
          </div>
        </Link>

        <div className="text-white/30 text-sm hidden md:block">
          2026 City Council
        </div>
      </div>
    </nav>
  );
}