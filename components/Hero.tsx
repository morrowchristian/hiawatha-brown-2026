export default function Hero() {
  return (
    <section className="hero-bg h-screen flex items-center text-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-white/90 text-[#e91e63] px-6 py-2.5 rounded-full mb-8 font-semibold text-sm tracking-widest shadow">
          VOTE • 2026
        </div>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
          HIAWATHA<br />BROWN
        </h1>

        <p className="text-2xl md:text-3xl mb-10 text-white/90">
          District 1 • Cleveland City Council
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#get-involved" className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all active:scale-95">
            Get Involved
          </a>
          <a href="https://www.facebook.com/profile.php?id=61567583096946" target="_blank" className="border-2 border-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
            Visit Facebook Page
          </a>
        </div>
      </div>
    </section>
  );
}
