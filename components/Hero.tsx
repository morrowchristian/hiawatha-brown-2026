'use client';

export default function Hero() {
  return (
    <div className="card">
      <div className="fluid-pad fluid-stack">

        {/* 1. Headline at the top (full width above grid/flex container) */}
        <div className="hero-headline-block mb-4">
          <h2 className="card-title leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)] mx-1">
            Strong foundations.
            <span className="block text-pop">Revitalized communities.</span>
            Limitless opportunities.
          </h2>
          <div className="card-divider mx-2 mt-3" />
        </div>

        <div className="hero-container">

          {/* 2. Candidate Image Block */}
          <div className="hero-image-container">
            <img
              src="/candidate.jpg"
              alt="Hiawatha Brown putting up yard signs!"
              className="w-full h-auto block rounded-2xl"
            />
          </div>

          {/* 3. Quote Card Block */}
          <div className="hero-quote-container">
            <div className="card-inner relative rounded-3xl pt-2 pb-2 px-3">

              {/* Decorative Quotes */}
              <span className="quote-icon top-left" aria-hidden="true">“</span>
              <span className="quote-icon bottom-right" aria-hidden="true">”</span>

              {/* Quote Body */}
              <div className="card-body space-y-2 relative z-10 mx-4 my-4 ">
                <p className="leading-snug text-sm">
                  I'm running for {" "}
                  <span className="text-pop font-bold uppercase nowrap">District 1 City Council</span>{" "}
                  because this election isn't about the Left or the Right—it's about us, the people who proudly call Cleveland home. 
                  It's about finding ways to support one another instead of tearing each other apart. Because when we work together, we are...
                </p>

                {/* Staggered Callout Text */}
                <div className="text-pop font-bold uppercase tracking-wide text-2xl mx-6">
                  <span className="block text-left pl-2"><em>STRONGER</em></span>
                  <span className="block text-right pr-2"><em>TOGETHER.</em></span>
                </div>
              </div>

              {/* Attribution */}
              <p className="w-full pr-2 text-right font-serif italic text-pop relative z-10 text-xs">
                — Hiawatha Brown
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
