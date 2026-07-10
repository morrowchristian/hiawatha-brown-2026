'use client';

import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <div className="card grid md:grid-cols-[2fr_1fr] w-full text-left">
      
      {/* Left Content */}
      <div className="fluid-pad fluid-stack">
        <div className="md:col-span-3 fluid-pad fluid-stack flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <p className="card-label tracking-[0.25em] text-[#E8366A]">
                CLEVELAND CITY COUNCIL • DISTRICT 1
              </p>
              <h1 className="fluid-title text-white text-[3.2rem] md:text-6xl leading-none tracking-tighter">
                HIAWATHA BROWN
              </h1>
            </div>

            <div className="space-y-1">
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                Stronger Together.
              </p>
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                District 1 First.
              </p>
            </div>
              
              <a
                href="https://forms.gle/your-form-link"   // ← Replace with real link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8366A] hover:bg-[#d12e5c] px-8 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Heart className="h-5 w-5" />
                Request Yard Sign • Donate • Volunteer
              </a>
          </div>
        </div>
      </div>

      {/* Right Side - Photo + Quote */}
      <div className="card-accent flex flex-col">
        {/* Photo */}
        <div className="w-full aspect-[1.35/1] overflow-hidden rounded-tr-[2rem]">
          <img 
            src="/candidate.jpg" 
            alt="Hiawatha Brown" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote with Green Accent Background */}
        <div className="fluid-pad fluid-stack">
          <blockquote className="fluid-body text-white/95 font-medium tracking-wide">
            “This race isn’t about Left or Right — it’s about putting District 1 first. 
            We are stronger when we stand together.”
          </blockquote>
          <p className="text-[#E8366A] text-sm font-medium mt-4">— Hiawatha Brown</p>
        </div>
      </div>
    </div>
  );
}