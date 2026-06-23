// app/page.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <section className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 grid grid-cols-4 md:grid-cols-12 auto-rows-[140px] gap-3">

        {/* ── Hero tile ── */}
        <div className="col-span-4 md:col-span-8 row-span-3 hero-bg relative rounded-3xl overflow-hidden flex flex-col justify-end p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative z-10">
            <p className="text-[#e91e63] font-semibold text-sm tracking-widest uppercase mb-2">
              Cleveland, TN &middot; 2026
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.9] mb-3">
              HIAWATHA<br />BROWN
            </h1>
            <p className="text-white/70 text-lg max-w-md">
              Candidate for City Council, District 1
            </p>
          </div>
        </div>

        {/* ── Meet Hiawatha ── */}
        <Link
          href="/about"
          className="col-span-2 md:col-span-4 row-span-2 group bg-white rounded-3xl overflow-hidden relative shadow-sm"
        >
          <img
            src="/hiawatha-brown.png"
            alt="Hiawatha Brown"
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <p className="text-white font-bold text-lg">Meet Hiawatha</p>
            <p className="text-white/60 text-sm flex items-center gap-1 group-hover:text-[#e91e63] transition-colors">
              Her story <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </Link>

        {/* ── Quote tile ── */}
        <div className="col-span-2 md:col-span-4 row-span-1 bg-[#e91e63] rounded-3xl p-6 flex flex-col justify-center">
          <p className="text-white/90 text-xs md:text-sm italic leading-snug mb-2">
            &ldquo;I&apos;m not running for a title. I&apos;m running because I know what District 1 is capable of — and it&apos;s time for someone to stand up and take our seat at the table.&rdquo;
          </p>
          <p className="text-white font-bold text-xs tracking-widest uppercase">
            Stronger Together. Stronger District 1. Stronger Cleveland.
          </p>
        </div>

        {/* ── Platform tile ── */}
        <Link
          href="/platform"
          className="col-span-4 md:col-span-5 row-span-2 group bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all border border-gray-200/60"
        >
          <div>
            <p className="text-[#e91e63] font-semibold text-xs tracking-widest uppercase mb-2">
              What We Stand For
            </p>
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4">
              The Platform
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Housing", "Parks & Rec", "Neighborhoods", "South Side Investment", "Fiscal Transparency"].map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-sm flex items-center gap-1 group-hover:text-[#e91e63] transition-colors mt-4">
            Read full positions <ArrowRight className="w-3 h-3" />
          </p>
        </Link>

        {/* ── District Map tile ── */}
        <Link
          href="/district"
          className="col-span-2 md:col-span-3 row-span-2 group bg-green-50 rounded-3xl p-6 flex flex-col justify-between border border-green-200/60 hover:border-green-400/50 transition-colors shadow-sm"
        >
          <div>
            <p className="text-green-700 font-semibold text-xs tracking-widest uppercase mb-2">
              District 1
            </p>
            <h3 className="text-gray-900 text-xl font-bold">
              The Neighborhoods
            </h3>
          </div>
          <p className="text-gray-400 text-sm flex items-center gap-1 group-hover:text-green-600 transition-colors">
            View map <ArrowRight className="w-3 h-3" />
          </p>
        </Link>

        {/* ── Get Involved tile ── */}
        <Link
          href="/get-involved"
          className="col-span-2 md:col-span-4 row-span-2 group bg-[#e91e63] rounded-3xl p-8 flex flex-col justify-between hover:bg-[#d81557] transition-colors shadow-sm"
        >
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Join the<br />Movement
            </h2>
          </div>
          <div>
            <p className="text-white/70 text-sm mb-3">
              Volunteer &middot; Donate &middot; Yard Signs
            </p>
            <span className="inline-flex items-center gap-2 bg-white text-[#e91e63] px-5 py-2.5 rounded-full text-sm font-bold group-hover:gap-3 transition-all">
              Get Involved <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* ── Facebook Feed tile — tall and narrow ── */}
        <div className="col-span-4 md:col-span-4 row-span-4 bg-white rounded-3xl p-5 flex flex-col overflow-hidden shadow-sm border border-gray-200/60">
          <div className="mb-3">
            <p className="text-[#e91e63] font-semibold text-xs tracking-widest uppercase mb-1">
              Latest Updates
            </p>
            <h3 className="text-gray-900 text-lg font-bold">From the Campaign</h3>
          </div>
          <div className="flex-1 overflow-hidden rounded-2xl">
            {mounted && (
              <div
                className="fb-page w-full"
                data-href="https://www.facebook.com/profile.php?id=61567583096946"
                data-tabs="timeline"
                data-width=""
                data-height="500"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="false"
              />
            )}
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61567583096946"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xs hover:text-[#e91e63] transition-colors flex items-center gap-1 mt-3"
          >
            Follow on Facebook <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* ── Stats tile ── */}
        <div className="col-span-4 md:col-span-4 row-span-1 bg-white rounded-3xl p-6 grid grid-cols-3 gap-4 shadow-sm border border-gray-200/60">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">20+</p>
            <p className="text-gray-400 text-xs">Years in Education</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#e91e63]">D1</p>
            <p className="text-gray-400 text-xs">Lifelong Resident</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">2026</p>
            <p className="text-gray-400 text-xs">Election Year</p>
          </div>
        </div>

        {/* ── Tagline tile — bottom accent ── */}
        <div className="col-span-4 md:col-span-4 row-span-1 bg-gray-900 rounded-3xl p-6 flex items-center justify-center">
          <p className="text-white/80 text-sm font-semibold tracking-widest uppercase text-center">
            Stronger Together. Stronger District 1. Stronger Cleveland.
          </p>
        </div>

      </section>

      <Footer />
    </div>
  );
}
