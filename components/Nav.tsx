"use client";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Minimal Logo Only */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-[#ff4f85] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-105 transition-transform">
            HB
          </div>
          <div className="hidden sm:block">
            <div className="font-black text-white tracking-tighter text-xl leading-none">
              HIAWATHA BROWN
            </div>
            <div className="text-[#ff4f85] text-xs font-medium tracking-[2px] uppercase">
              DISTRICT 1 • CLEVELAND
            </div>
          </div>
        </Link>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61567583096946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1664C2] hover:-translate-y-0.5 hover:shadow-md"
          >
            Follow on Facebook <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}