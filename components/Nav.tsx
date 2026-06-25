"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Only thing left */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#E8366A] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
            HB
          </div>
          <div>
            <div className="font-bold text-white tracking-tight text-lg leading-none">
              HIAWATHA BROWN
            </div>
            <div className="text-[#E8366A] text-xs font-medium tracking-widest uppercase -mt-0.5">
              DISTRICT 1
            </div>
          </div>
        </Link>

        {/* Optional: Very minimal right side */}
        <div className="text-white/40 text-sm font-medium hidden sm:block">
          Cleveland, TN • 2026
        </div>
      </div>
    </nav>
  );
}