// components/panels/AboutPanel.tsx
import { BookOpen, Users, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: BookOpen, label: "Years in Education", value: "20+" },
  { icon: Users,    label: "Parks & Rec Board",  value: "Active" },
  { icon: Heart,    label: "Community Services", value: "BCCSA" },
  { icon: MapPin,   label: "District 1 Resident", value: "Lifelong" },
];

export default function AboutPanel() {
  return (
    <div className="p-6 space-y-4">

      {/* Photo + quote card */}
      <div className="rounded-2xl overflow-hidden bg-[#1E2A38] grid md:grid-cols-[200px_1fr]">
        <div className="relative h-56 md:h-auto">
          <img
            src="/hiawatha-brown.png"
            alt="Hiawatha Brown"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/60 to-transparent md:bg-gradient-to-r" />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <span className="inline-block bg-[#E8366A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
            District 1 · Cleveland City Council
          </span>
          <blockquote className="text-white/85 italic text-sm leading-relaxed">
            "I'm not running because I want a title. I'm running because I know what not only District 1 but all of Cleveland is capable of — I am here to fight for the investment we deserve for our community and our future."
          </blockquote>
          <p className="text-[#E8366A] text-[10px] font-bold tracking-widest uppercase mt-3">
            — Hiawatha Brown
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-2">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-[#2C3A4D] rounded-2xl p-4 flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-xl bg-[#E8366A]/20 flex items-center justify-center mb-2">
              <Icon className="w-4 h-4 text-[#E8366A]" />
            </div>
            <p className="text-white font-bold text-sm">{value}</p>
            <p className="text-[#8DA3B8] text-[10px] leading-tight mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Bio cards */}
      <div className="space-y-3">
        {[
          {
            heading: "Educator First",
            body: "Hiawatha Brown has spent her career showing up for the people of Cleveland — first as an educator, then as a public board member, and now as a candidate for City Council District 1. She isn't new to this work. She's been doing it for decades.",
          },
          {
            heading: "Inclusion Teacher at Bradley Central",
            body: "As an Inclusion Teacher at Bradley Central High School, Hiawatha has dedicated herself to making sure every student — regardless of background or ability — has a seat at the table. That same philosophy drives her approach to local government: no neighborhood left behind, no voice ignored.",
          },
          {
            heading: "Community Board Member",
            body: "She serves on the Cleveland Parks & Recreation Board and with the Bradley Cleveland Community Services Agency (BCCSA), advocating for equitable investment in District 1 parks and connecting residents with housing, nutrition, and social support services.",
          },
          {
            heading: "Why She's Running",
            body: "She is running because District 1 deserves a representative who already knows the neighborhoods, already knows the needs, and is already doing the work.",
          },
        ].map(({ heading, body }) => (
          <div key={heading} className="bg-white rounded-2xl p-5 border border-[#D0D8E4]">
            <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-1">{heading}</p>
            <p className="text-[#2C3A4D] text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

    </div>
  );
}