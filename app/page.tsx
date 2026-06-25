// app/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, X } from "lucide-react";
import AboutPanel from "@/components/panels/AboutPanel";
import PlatformPanel from "@/components/panels/PlatformPanel";
import GetInvolvedPanel from "@/components/panels/GetInvolvedPanel";
import DistrictPanel from "@/components/panels/DistrictPanel";

/**
 * TODO: Engineering Recommendations for Production Completeness
 * * 1. PERSISTENCE & DEEP-LINKING:
 * - Currently, `window.history.pushState` updates the URL path locally. However, if a user reloads `/platform`, Next.js will return a 404 unless parallel routes/intercepting routes or true subdirectories are set up.
 * - RECOMMENDATION: Convert this dashboard to use Next.js App Router dynamic segments or parallel slots (e.g., `app/[panel]/page.tsx`) so server-side routing mirrors the active panel state seamlessly on deep-linked refreshes.
 * * 2. COMPONENT IMPORT VALIDATION:
 * - Ensure structural consistency across `@/components/panels/` file names. Verify if `About.tsx` / `Platform.tsx` in the directory match the imported `AboutPanel` / `PlatformPanel` default export conventions exactly.
 * * 3. EXTRACT ANIMATION STYLES:
 * - The `<style>` tag containing `slideInRight` works well for an initial draft. For a production Next.js build, migrate this animation to `tailwind.config.ts` under `extend.keyframes` and `extend.animation` (e.g., `animate-slide-in-right`) to preserve atomic CSS compliance.
 * * 4. ACCESSIBILITY (a11y):
 * - Implement focus traps (e.g., using `@radix-ui/react-dialog` or a lightweight `useFocusTrap` hook) within the Overlay Panel container so screen readers and keyboard navigators cannot interact with the background grid while a modal is visible.
 * * 5. DATA INCONSISTENCY SANITIZATION:
 * - "Candidate Stats" grid lists Election Day as "Aug 5", while the standalone dynamic event card beneath it lists "Aug 6". Audit the exact operational calendar for Cleveland, TN local races and unify this metric via a shared environment constant.
 */

type PanelKey = "about" | "platform" | "get-involved" | "district" | null;

interface FbWindow extends Window {
  FB?: {
    XFBML: {
      parse: () => void;
    };
  };
}

const panels: Record<NonNullable<PanelKey>, { label: string; Component: React.ComponentType }> = {
  about: { label: "Meet Hiawatha", Component: AboutPanel },
  platform: { label: "The Platform", Component: PlatformPanel },
  "get-involved": { label: "Get Involved", Component: GetInvolvedPanel },
  district: { label: "District 1 Map", Component: DistrictPanel },
};

export default function Home() {
  const [activePanel, setActivePanel] = useState<PanelKey>(null);

  // Trigger Facebook SDK re-parse on UI mount
  useEffect(() => {
    const win = window as FbWindow;
    if (win.FB) {
      win.FB.XFBML.parse();
    }
  }, []);

  // Sync state mutations to the browser address bar safely
  useEffect(() => {
    if (activePanel) {
      window.history.pushState(null, "", `/${activePanel}`);
    } else {
      window.history.pushState(null, "", "/");
    }
  }, [activePanel]);

  // Handle hardware / browser back navigation actions gracefully
  useEffect(() => {
    const onPop = () => setActivePanel(null);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Keyboard accessibility override (Escape key dismiss behavior)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePanel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll pinning to safeguard scrolling context when dynamic panels are layout-bound
  useEffect(() => {
    document.body.style.overflow = activePanel ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activePanel]);

  const open = useCallback((key: PanelKey) => setActivePanel(key), []);
  const close = useCallback(() => setActivePanel(null), []);

  const ActiveComponent = activePanel ? panels[activePanel].Component : null;
  const activeLabel = activePanel ? panels[activePanel].label : "";

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#EEF1F5]">
        <section
          className="flex-1 max-w-7xl w-full mx-auto px-3 py-3 grid grid-cols-4 md:grid-cols-16 gap-2"
          style={{ gridTemplateRows: "repeat(6, 1fr)" }}
        >
          {/* Hero */}
          <div className="col-span-4 md:col-span-12 row-span-2 hero-bg relative rounded-2xl overflow-hidden flex flex-col justify-end p-8 md:p-10">
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

          {/* Facebook Feed */}
          <div className="col-span-4 md:col-span-4 row-span-2 bg-[#2C3A4D] rounded-2xl p-4 flex flex-col overflow-hidden">
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
            </div>
          </div>

          {/* Platform Panel Activation Button */}
          <button
            onClick={() => open("platform")}
            className="col-span-4 md:col-span-4 md:col-start-1 md:row-start-4 md:row-span-1 group bg-[#2C3A4D] rounded-2xl p-6 flex flex-col justify-between hover:bg-[#364759] transition-colors text-left"
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
          </button>

          {/* About Panel Activation Button */}
          <button
            onClick={() => open("about")}
            className="col-span-4 md:col-span-4 md:col-start-5 md:row-start-4 md:row-span-1 group rounded-2xl overflow-hidden relative text-left"
          >
            {/* TODO: Swap standard raw <img> with Next.js <Image /> for optimized cumulative layout shift handling and compression */}
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
          </button>

          {/* Candidate Stats */}
          <div className="col-span-4 md:col-span-4 md:col-start-9 md:row-start-4 rounded-2xl bg-[#2C3A4D] p-5 flex flex-col justify-between">
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-[0.35em] mb-3">District 1 Profile</p>
              <h2 className="text-white text-2xl font-bold mb-4">Candidate Stats</h2>
              <div className="grid gap-3 text-sm text-white/80">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-xs uppercase tracking-[0.25em] mt-1 text-white/60">Years Educator</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-3xl font-bold text-[#FBBC04]">Aug 5</p>
                  <p className="text-xs uppercase tracking-[0.25em] mt-1 text-white/60">Election Day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="col-span-4 md:col-span-4 md:col-start-5 md:row-start-5 rounded-2xl bg-[#E8366A] px-5 py-6 flex flex-col justify-center">
            <p className="text-white text-xs md:text-sm leading-snug">
              &ldquo;This is about what happens when District 1 stops being left out of the conversation. By standing up for our community, we make all of Cleveland stronger—because we are finally bringing it together.&rdquo;
            </p>
            <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mt-4">
              Stronger Together
            </p>
          </div>

          {/* Get Involved Panel Activation Button */}
          <button
            onClick={() => open("get-involved")}
            className="col-span-4 md:col-span-8 md:col-start-1 md:row-start-6 md:row-span-1 group bg-[#E8366A] rounded-2xl p-6 flex flex-col justify-between hover:bg-[#D4215A] transition-colors text-left"
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
          </button>

          {/* District Map Panel Activation Button */}
          <button
            onClick={() => open("district")}
            className="col-span-4 md:col-span-4 md:col-start-1 md:row-start-5 rounded-2xl bg-[#15803d] px-4 py-5 text-left group hover:bg-[#166534] transition-colors"
          >
            <div className="flex items-center justify-between md:flex-col md:items-start gap-3">
              <div>
                <p className="text-white font-bold text-sm">District 1</p>
                <p className="text-white/40 text-xs">View map</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </div>
          </button>

          {/* Static Calendar Callout */}
          <div className="col-span-4 md:col-span-4 md:col-start-9 md:row-start-5 rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-[#15803d] text-[10px] uppercase tracking-[0.35em] mb-3">Election Day</p>
            <p className="text-3xl font-bold text-[#2C3A4D]">Aug 6</p>
            <p className="text-sm text-[#667085] mt-2">Vote in Cleveland City Council District 1.</p>
          </div>

          {/* External Voter Registration CTA */}
          <a
            href="https://ovr.govote.tn.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-4 md:col-span-4 md:col-start-9 md:row-start-6 rounded-2xl bg-white p-5 text-[#2C3A4D] font-bold shadow-sm flex items-center justify-center hover:bg-[#f7f7f7] transition-colors"
          >
            Register to Vote
          </a>
        </section>

        {/* Global Footer Layout */}
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

      {/* Dynamic Slide-Over Overlay Drawer System */}
      {activePanel && (
        <div
          className="fixed inset-0 z-50 flex items-stretch justify-end"
          role="dialog"
          aria-modal="true"
          aria-label={activeLabel}
        >
          {/* Backdrop Mask layer */}
          <div
            className="absolute inset-0 bg-[#1E2A38]/70 backdrop-blur-sm"
            onClick={close}
          />
          {/* Drawer Sheet Content Area */}
          <div
            className="relative z-10 w-full md:w-[680px] lg:w-[760px] bg-[#EEF1F5] flex flex-col shadow-2xl"
            style={{ animation: "slideInRight 0.25s ease-out" }}
          >
            {/* Sheet Context Header */}
            <div className="bg-[#1E2A38] px-6 py-4 flex items-center justify-between shrink-0">
              <div>
                <p className="text-[#E8366A] text-[10px] font-bold tracking-widest uppercase mb-0.5">
                  District 1 · Cleveland, TN
                </p>
                <h2 className="text-white font-bold text-lg leading-tight">
                  {activeLabel}
                </h2>
              </div>
              <button
                onClick={close}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close panel"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Dynamic Panel Mount Node Container */}
            <div className="flex-1 overflow-y-auto">
              {ActiveComponent && <ActiveComponent />}
            </div>

            {/* Sheet Context Footer */}
            <div className="bg-[#1E2A38] px-6 py-3 flex items-center justify-between shrink-0">
              <p className="text-white/30 text-[10px]">
                Paid for by Friends of Hiawatha Brown for City Council
              </p>
              <button
                onClick={close}
                className="text-[#8DA3B8] text-xs hover:text-[#E8366A] transition-colors"
              >
                ← Back to home
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}