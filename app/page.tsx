// app/page.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && (window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, [mounted]);

  return (
    <div className="h-screen flex flex-col bg-[#EEF1F5] overflow-hidden">

      <section
        className="flex-1 max-w-7xl w-full mx-auto px-3 py-3 grid grid-cols-4 md:grid-cols-12 gap-2"
        style={{ gridTemplateRows: "repeat(6, 1fr)" }}
      >

        {/* ── Hero ── */}
        <div className="col-span-4 md:col-span-8 row-span-3 hero-bg relative rounded-2xl overflow-hidden flex flex-col justify-end p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/90 via-[#1E2A38]/30 to-transparent" />
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.9] mb-2">
              HIAWATHA<br />BROWN
            </h1>
            <p className="text-white/80 text-sm mb-3">
              Candidate for City Council &middot; District 1 &middot; Cleveland, TN
            </p>
            <p className="text-[#E8366A] font-bold text-sm tracking-widest uppercase">
              A VOICE FOR DISTRICT 1, A VISION FOR CLEVELAND
            </p>
          </div>
        </div>

        {/* ── Photo ── */}
        <Link
          href="/about"
          className="col-span-2 md:col-span-4 row-span-2 group rounded-2xl overflow-hidden relative"
        >
          <img
            src="/hiawatha-brown.png"
            alt="Hiawatha Brown"
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <p className="text-white font-bold">Meet Hiawatha</p>
            <p className="text-white/50 text-sm flex items-center gap-1 group-hover:text-[#E8366A] transition-colors">
              Her story <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </Link>

        {/* ── Quote ── */}
        <div className="col-span-2 md:col-span-4 row-span-1 bg-[#E8366A] rounded-2xl px-5 py-4 flex flex-col justify-center">
          <p className="text-white text-xs md:text-sm leading-snug">
            &ldquo;This is about what happens when District 1 stops being left out of the conversation. By standing up for our community, we make all of Cleveland stronger—because we are finally bringing it together.&rdquo;
          </p>
          <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mt-1.5">
            Stronger Together
          </p>
        </div>

        {/* ── Platform ── */}
        <Link
          href="/platform"
          className="col-span-4 md:col-span-4 row-span-2 group bg-[#2C3A4D] rounded-2xl p-6 flex flex-col justify-between hover:bg-[#364759] transition-colors"
        >
          <div>
            <p className="text-[#E8366A] font-semibold text-xs tracking-widest uppercase mb-1">
              What We Stand For
            </p>
            <h2 className="text-white text-2xl font-bold mb-3">The Platform</h2>
            <div className="flex flex-wrap gap-1.5">
              {["Housing", "Parks & Rec", "Neighborhoods", "South Side", "Transparency"].map((tag) => (
                <span key={tag} className="bg-white/[0.08] text-[#8DA3B8] text-xs px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[#8DA3B8] text-sm flex items-center gap-1 group-hover:text-[#FBBC04] transition-colors">
            Read positions <ArrowRight className="w-3 h-3" />
          </p>
        </Link>

        {/* ── Facebook Feed ── */}
        <div className="col-span-4 md:col-span-4 row-span-3 bg-[#2C3A4D] rounded-2xl p-4 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <p className="text-white text-sm font-bold">Latest Updates</p>
            <a
              href="https://www.facebook.com/profile.php?id=61567583096946"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8DA3B8] text-xs hover:text-[#E8366A] transition-colors flex items-center gap-1"
            >
              Facebook <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex-1 overflow-hidden rounded-xl bg-white">
            {mounted && (
              <div
                className="fb-page w-full h-full"
                data-href="https://www.facebook.com/profile.php?id=61567583096946"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="false"
              />
            )}
          </div>
        </div>

        {/* ── Get Involved ── */}
        <Link
          href="/get-involved"
          className="col-span-4 md:col-span-4 row-span-3 group bg-[#E8366A] rounded-2xl p-6 flex flex-col justify-between hover:bg-[#D4215A] transition-colors"
        >
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">
              Get Involved
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Join the<br />Movement
            </h2>
          </div>
          <div>
            <p className="text-white/60 text-sm mb-3">
              Volunteer &middot; Donate &middot; Yard Signs
            </p>
            <span className="inline-flex items-center gap-2 bg-white text-[#E8366A] px-4 py-2 rounded-full text-sm font-bold group-hover:gap-3 transition-all">
              Get Involved <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* ── Bottom row ── */}
        <div className="col-span-4 md:col-span-4 row-span-1 rounded-2xl overflow-hidden grid grid-cols-2 gap-2">
          <Link
            href="/district"
            className="group bg-[#15803d] rounded-2xl px-4 py-3 flex items-center justify-between hover:bg-[#166534] transition-colors"
          >
            <div>
              <p className="text-white font-bold text-sm">District 1</p>
              <p className="text-white/40 text-xs">View map</p>
            </div>
            <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
          </Link>

          <div className="bg-[#2C3A4D] rounded-2xl px-4 py-3 flex items-center justify-around">
            <div className="text-center">
              <p className="text-base font-bold text-white">20+</p>
              <p className="text-[#8DA3B8] text-[9px]">Yrs Educator</p>
            </div>
            <div className="text-center">
              <p className="text-base font-bold text-[#FBBC04]">Aug 5</p>
              <p className="text-[#8DA3B8] text-[9px]">Election Day</p>
            </div>
          </div>
        </div>

      </section>

      <footer className="shrink-0 px-6 py-3 flex items-center justify-between">
        <p className="text-[#2C3A4D]/40 text-xs">
          Paid for by Friends of Hiawatha Brown for City Council
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61567583096946"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C3A4D]/40 text-xs hover:text-[#E8366A] transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://ovr.govote.tn.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C3A4D]/40 text-xs hover:text-[#E8366A] transition-colors"
          >
            Register to Vote
          </a>
        </div>
      </footer>
    </div>
  );
}
