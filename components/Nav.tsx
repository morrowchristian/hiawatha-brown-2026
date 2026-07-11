"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
  </svg>
);

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50">
      {/* Visual layer (safe for blur, borders, etc.) */}
      <div className="
        bg-[rgba(2,6,23,0.70)]
        backdrop-blur-md
        border-b border-white/10
        py-[clamp(0.5rem,1vw,1rem)]
      ">
        <div className="
          max-w-7xl mx-auto 
          px-[clamp(0.75rem,2vw,2rem)]
          flex items-center
        ">
          
          {/* LEFT SIDE — Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            
            <div className="
              rounded-2xl bg-[#ff4f85] text-white font-black shadow-lg
              w-[clamp(2rem,4vw,2.75rem)]
              h-[clamp(2rem,4vw,2.75rem)]
              text-[clamp(1rem,2.5vw,1.75rem)]
              flex items-center justify-center
            ">
              HB
            </div>
            
            <div className="leading-tight flex flex-col">

              <div className="font-black text-white tracking-tighter text-[clamp(1rem,2.5vw,1.5rem)]">
                HIAWATHA BROWN
              </div>

              <div className="h-[2px] w-full bg-[#ff4f85] my-[2px]" />

              <div className="text-white text-[clamp(0.5rem,1.5vw,0.75rem)] tracking-[2px] uppercase">
                CITY COUNCIL, DISTRICT 1 <br/>CLEVELAND, TN
              </div>

            </div>

          </Link>

          {/* SPACER */}
          <div className="flex-1" />

          {/* RIGHT SIDE — Buttons */}
          <div className="flex items-center gap-3">

            <a
              href="https://forms.gle/8KoEqMkJiu1fZESn8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff4f85] hover:bg-[#d12e5c] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.25rem,1.0vw,0.575rem)] text-[clamp(0.75rem,2vw,1rem)] font-semibold text-white"
            >
              <Heart className="h-5 w-5 hidden [@media(min-width:950px)]:block" />
              <span className="hidden [@media(min-width:950px)]:inline">
                Request Yard Sign • Donate • Volunteer
              </span>
              <span className="[@media(min-width:950px)]:hidden">
                Sign Up
              </span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61567583096946"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.25rem,1.0vw,0.575rem)] text-[clamp(0.75rem,2vw,1rem)] font-semibold text-white"
            >
              <FacebookIcon />
              <span className="hidden [@media(min-width:950px)]:inline">
                Follow on Facebook
              </span>
            </a>

          </div>
        </div>
      </div>
    </nav>

  );
}
