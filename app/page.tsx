"use client";
import { Users, MapPin, Heart, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">HB</div>
            <div>
              <div className="font-semibold text-xl tracking-tight">Hiawatha Brown</div>
              <div className="text-sm text-gray-600 -mt-1">Cleveland City Council • District 1</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#about" className="hover:text-[#e91e63] transition-colors">About</a>
            <a href="#platform" className="hover:text-[#e91e63] transition-colors">Platform</a>
            <a href="#events" className="hover:text-[#e91e63] transition-colors">Events</a>
            <a href="#get-involved" className="hover:text-[#e91e63] transition-colors">Get Involved</a>
            <a href="https://www.facebook.com/profile.php?id=61567583096946" target="_blank" className="text-[#e91e63] hover:underline font-medium">Facebook</a>
          </div>

          <a href="#get-involved" className="hidden md:block bg-[#e91e63] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c2185b] transition-all active:scale-95">
            Join Us
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-2xl">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="flex flex-col px-6 py-6 space-y-4 font-medium">
              <a href="#about" className="hover:text-[#e91e63]">About</a>
              <a href="#platform" className="hover:text-[#e91e63]">Platform</a>
              <a href="#events" className="hover:text-[#e91e63]">Events</a>
              <a href="#get-involved" className="hover:text-[#e91e63]">Get Involved</a>
              <a href="https://www.facebook.com/profile.php?id=61567583096946" target="_blank" className="text-[#e91e63]">Facebook</a>
              <a href="#get-involved" className="bg-[#e91e63] text-white px-6 py-3 rounded-full text-center font-semibold">Join Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="hero-bg h-screen flex items-center text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/90 text-[#e91e63] px-6 py-2.5 rounded-full mb-8 font-semibold text-sm tracking-widest shadow">
            VOTE • 2026
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            HIAWATHA<br />BROWN
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90">District 1 • Cleveland City Council</p>
          
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

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Meet Hiawatha Brown</h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>Hiawatha Brown is a dedicated community leader and public servant with proven experience on the Cleveland Parks & Recreation Board. She is running for City Council District 1 because she believes our families and neighborhoods deserve strong, responsive leadership.</p>
                <p>With heart, experience, and an unwavering commitment to results, Hiawatha will champion public safety, vibrant public spaces, and economic opportunities for every resident of Cleveland, Tennessee.</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hiawatha-brown.png" 
                alt="Hiawatha Brown" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">My Priorities for Cleveland</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Users, 
                title: "Public Safety", 
                desc: "Stronger neighborhoods through better policing response times, community programs, and smart prevention strategies." 
              },
              { 
                icon: MapPin, 
                title: "Parks & Recreation", 
                desc: "World-class green spaces, youth programs, and community events that bring families together." 
              },
              { 
                icon: Heart, 
                title: "Economic Growth", 
                desc: "Supporting small businesses, attracting good jobs, and creating pathways to opportunity for all residents." 
              },
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#e91e63]/20">
                <item.icon className="w-12 h-12 text-[#e91e63] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="border-l-4 border-[#e91e63] pl-6 py-1">
              <p className="font-medium text-gray-500">Summer 2026</p>
              <p className="text-xl font-semibold">Community Meet & Greet</p>
              <p className="text-gray-600 mt-1">Meet Hiawatha and share your concerns for District 1.</p>
            </div>
            <div className="border-l-4 border-[#e91e63] pl-6 py-1">
              <p className="font-medium text-gray-500">July 2026</p>
              <p className="text-xl font-semibold">Volunteer Training & Yard Sign Distribution</p>
              <p className="text-gray-600 mt-1">Join the team and help spread the message.</p>
            </div>
          </div>
          <p className="text-center mt-12 text-gray-500">Follow her Facebook page for the latest updates and event details.</p>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="py-24 bg-[#e91e63] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Every volunteer, yard sign, conversation, and donation helps bring strong leadership to District 1.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Volunteer */}
            <a 
              href="https://forms.gle/998kKakUn9gtDVyQ8" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all active:scale-95"
            >
              Volunteer
            </a>
            
            {/* Donate */}
            <a 
              href="https://forms.gle/FTi7nzcnCz2SbUpK8" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              Donate to the Campaign
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Yard Signs */}
            <a 
              href="https://forms.gle/VHcBeQaVdwaVo3rr8" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all active:scale-95"
            >
              Request Yard Signs
            </a>
          </div>

          <p className="mt-10 text-sm opacity-75 max-w-md mx-auto">
            We are currently setting up official donation channels. 
            Thank you for your support — we will follow up with you soon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm">Paid for by Friends of Hiawatha Brown for City Council</p>
          <p className="mt-2">Cleveland, Tennessee • 2026 Election</p>
        </div>
      </footer>
    </div>
  );
}