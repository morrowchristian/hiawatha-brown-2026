"use client";

export default function Hero() {
  return (
    <section className="hero-bg bg-fixed h-[30vh] relative text-white flex items-stretch overflow-hidden">

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-0" />

      {/* TOP HEADER RIBBON */}
      <div className="absolute top-14 left-0 bg-primary/80 backdrop-blur-xl 
                      border-r border-t border-b border-white/20 
                      px-10 py-4 rounded-r-xl 
                      shadow-[0_0_35px_rgba(255,255,255,0.25)]
                      text-white tracking-widest text-sm font-semibold z-10">

        <h1 className="text-5xl md:text-6xl font-bold tracking-[-0.035em] leading-[0.85]"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.35)" }}>
          HIAWATHA BROWN
        </h1>
      </div>

      {/* BOTTOM RIBBON */}
      <div className="absolute top-[140px] left-0 bg-green-700/90 backdrop-blur-xl 
                      border-r border-t border-b border-white/20 
                      px-25 py-4 rounded-r-xl 
                      shadow-[0_0_35px_rgba(255,255,255,0.25)]
                      text-white tracking-widest text-sm font-semibold z-20">

        <p>Candidate for City Council, District 1</p>
      </div>

      {/* RIGHT SIDE — OPEN BACKGROUND */}
      <div className="flex-1" />
    </section>
  );
}
