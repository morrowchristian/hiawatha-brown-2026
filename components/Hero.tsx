'use client';

import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <div className="card grid md:grid-cols-[2fr_1fr] w-full text-left">
      
      {/* Left Content */}
      <div className="fluid-pad fluid-stack">
        <div className="md:col-span-3 fluid-pad fluid-stack flex flex-col justify-center">
          <div className="space-y-6 text-center">
            <div>
              <p className="card-label tracking-[0.25em] text-[#ff4f85]">
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
                href="https://forms.gle/8KoEqMkJiu1fZESn8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff4f85] hover:bg-[#d12e5c] px-8 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 active:scale-[0.98]"
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
          <blockquote className="text-description text-white/95 font-medium tracking-wide text-left">
            <p className="italic">
              “I am a candidate for City Council District 1, because it is not about the Left or the Right.
              It is about uniting ALL communities of District 1, because we are Stronger Together.
              Stronger infrastructure, commitment to revitalization of communities, and economic
              opportunities for District 1.”
            </p>

            <p className="mt-4 font-extrabold text-2xl text-[var(--primary-pink)] text-center leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)]">
              <span className="block">Strong foundations.</span>
              <span className="block">Revitalized communities.</span>
              <span className="block">Limitless opportunities.</span>
            </p>
          </blockquote>
          <p className="text-[#ff4f85] text-sm font-medium mt-4 text-right drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)]">Hiawatha Brown</p>
        </div>
      </div>
    </div>
  );
}
