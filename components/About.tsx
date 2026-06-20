import { BookOpen, Users, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: BookOpen, label: "Years in Education", value: "20+" },
  { icon: Users, label: "Parks & Rec Board", value: "Active" },
  { icon: Heart, label: "Community Services", value: "BCCSA" },
  { icon: MapPin, label: "District 1 Resident", value: "Lifelong" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#e91e63] font-semibold tracking-widest uppercase text-sm mb-3">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Who I am and Why I'm Running
          </h2>
        </div>

        {/* Main Split Layout */}
        <div className="grid md:grid-cols-[40%_60%] gap-10 rounded-3xl overflow-hidden">

          {/* LEFT SIDE — Photo + Quote */}
          <div className="flex flex-col bg-gray-900 rounded-3xl overflow-hidden">

            {/* Photo */}
            <div className="relative h-[420px]">
              <img
                src="/hiawatha-brown.png"
                alt="Hiawatha Brown"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              {/* Soft fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>

            {/* Quote Block */}
            <div className="bg-gray-900 px-8 py-10 flex flex-col items-center text-center">

              {/* Banner */}
              <span className="block w-full bg-[#e91e63] text-white text-sm font-bold uppercase tracking-widest py-2 rounded-md shadow">
                District 1 • Cleveland City Council
              </span>

              {/* Quote */}
              <blockquote className="text-white/90 italic text-sm leading-relaxed max-w-md mx-auto mt-8">
                "I'm not running because I want a title. I'm running because I know what not only District 1 but all of Cleveland is capable of — I am here to fight for the investment we deserve for our community and our future."
              </blockquote>

              {/* Attribution */}
              <span className="block text-[#e91e63] font-semibold text-xs uppercase tracking-widest mt-5">
                — Hiawatha Brown
              </span>
            </div>
          </div>

          {/* RIGHT SIDE — Bio + Stats */}
          <div className="flex flex-col justify-between">

            {/* Bio */}
            <div className="space-y-5 text-gray-700 leading-relaxed text-base">
              <p>
                Hiawatha Brown has spent her career showing up for the people of Cleveland, Tennessee — first as an educator, then as a public board member, and now as a candidate for City Council District 1. She isn't new to this work. She's been doing it for decades.
              </p>
              <p>
                As an <strong className="text-gray-900">Inclusion Teacher at Bradley Central High School</strong>, Hiawatha has dedicated herself to making sure every student — regardless of background or ability — has a seat at the table and the support they need to succeed. That same philosophy drives her approach to local government: no neighborhood left behind, no voice ignored.
              </p>
              <p>
                She serves on the <strong className="text-gray-900">Cleveland Parks & Recreation Board</strong> and with the <strong className="text-gray-900">Bradley Cleveland Community Services Agency (BCCSA)</strong>, advocating for equitable investment in District 1 parks and connecting residents with housing, nutrition, and social support services.
              </p>
              <p>
                She is running because District 1 deserves a representative who already knows the neighborhoods, already knows the needs, and is already doing the work.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8" />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {stats.map(({ icon: Icon, label, value }) => (
                    <div
                    key={label}
                    className="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center text-center"
                    >
                    <div className="w-8 h-8 rounded-xl bg-[#e91e63]/10 flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4 text-[#e91e63]" />
                    </div>

                    <div className="text-base font-bold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
