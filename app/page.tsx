import { Users, MapPin, Heart, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">HB</div>
            <div className="font-semibold">
              <div className="text-2xl tracking-tight">Hiawatha Brown</div>
              <div className="text-sm text-gray-600 -mt-1">Cleveland City Council • District 1</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#about" className="hover:text-[#e91e63] transition">About</a>
            <a href="#platform" className="hover:text-[#e91e63] transition">Platform</a>
            <a href="#events" className="hover:text-[#e91e63] transition">Events</a>
            <a href="#get-involved" className="hover:text-[#e91e63] transition">Get Involved</a>
            <a 
              href="https://www.facebook.com/profile.php?id=61567583096946" 
              target="_blank" 
              className="flex items-center gap-2 text-[#e91e63] hover:underline font-medium"
            >
              Facebook
            </a>
          </div>

          <a href="#get-involved" className="bg-[#e91e63] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c2185b] transition">
            Join Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg h-screen flex items-center text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/90 text-[#e91e63] px-6 py-2 rounded-full mb-6 font-semibold text-sm tracking-widest">
            VOTE • 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            HIAWATHA<br />BROWN
          </h1>
          <p className="text-2xl md:text-3xl mb-10">District 1 • Cleveland City Council</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#get-involved" className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              Get Involved
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61567583096946" 
              target="_blank"
              className="border-2 border-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 flex items-center justify-center gap-2"
            >
              Visit Facebook Page
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Meet Hiawatha Brown</h2>
              <div className="prose prose-lg text-gray-700">
                <p>Hiawatha Brown is a passionate community leader and public servant with experience on the Cleveland Parks & Recreation Board. She is running for City Council District 1 to deliver real results for our families and neighborhoods.</p>
                <p>With heart, experience, and dedication, she will fight for public safety, better parks, and economic opportunities for every resident in Cleveland, Tennessee.</p>
              </div>
            </div>
            <div>
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
          <h2 className="text-4xl font-bold text-center mb-16">Priorities for a Better Cleveland</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Public Safety", desc: "Safer neighborhoods and responsive city services." },
              { icon: MapPin, title: "Parks & Recreation", desc: "Quality green spaces and programs for families." },
              { icon: Heart, title: "Economic Growth", desc: "Supporting local businesses and job creation." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition border border-gray-100">
                <item.icon className="w-12 h-12 text-[#e91e63] mb-6" />
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
            <div className="border-l-4 border-[#e91e63] pl-6">
              <p className="font-medium text-gray-500">Summer 2026</p>
              <p className="text-xl font-medium">Community Meet & Greet</p>
            </div>
            <div className="border-l-4 border-[#e91e63] pl-6">
              <p className="font-medium text-gray-500">July 2026</p>
              <p className="text-xl font-medium">Volunteer Training & Yard Sign Distribution</p>
            </div>
          </div>
          <p className="text-center mt-12 text-gray-500">Follow her Facebook page for the latest event details.</p>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="py-24 bg-[#e91e63] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Campaign</h2>
          <p className="text-xl mb-12">Every volunteer, yard sign, and conversation helps bring strong leadership to District 1.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#" className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100">Volunteer</a>
            <a href="#" className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100">Request Yard Signs</a>
            <a href="#" className="bg-white text-[#e91e63] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100">Stay Updated</a>
          </div>
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