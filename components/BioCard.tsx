'use client';

import { BookOpen, Users, Heart, MapPin } from "lucide-react";

const bioCards = [
  {
    icon: MapPin,
    subtitle: "Lifelong Resident",
    body: "I grew up in District 1 and have lived my entire life in our community on the south side of Cleveland.",
  },
  {
    icon: BookOpen,
    subtitle: "Education & Degrees",
    body: "BA in Education (UA Huntsville), Master’s in Special Education (Lee University), Ed.S. in Educational Leadership (ASU).",
  },
  {
    icon: Users,
    subtitle: "Teaching Career",
    body: "19 years as a teacher — 15 of those years right here in Bradley County Public Schools.",
  },
  {
    icon: Heart,
    subtitle: "Community Leadership",
    body: "Active member of the Cleveland Parks & Recreation Board and Pleasant Grove Missionary Baptist Church.",
  },
];

export default function BioCard() {
  return (
    <div className="card grid md:grid-cols-[2fr_1fr] w-full text-left">

      {/* LEFT */}
      <div className="fluid-pad fluid-stack">

        <div className="fluid-stack">
          <p className="card-label tracking-[0.25em]">
            Meet Hiawatha Brown
          </p>

          <h2 className="fluid-title text-white">
            A Lifelong Educator and Community Leader
          </h2>

          <p className="fluid-body text-white/70 max-w-prose">
            Born and raised in District 1...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {bioCards.map(({ icon: Icon, subtitle, body }, i) => (
            <div key={i} className="card-inner fluid-stack">
              
              <div className="card-icon">
                <Icon className="w-5 h-5 text-[#E8366A]" />
              </div>

              <p className="card-label tracking-widest">{subtitle}</p>

              <p className="card-body">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="card-accent flex flex-col">

        <div className="w-full aspect-[1.35/1] overflow-hidden rounded-tr-[2rem]">
          <img src="/candidate.jpg" className="w-full h-full object-cover" />
        </div>

        <div className="fluid-pad fluid-stack">
          <blockquote className="fluid-body text-white/95 font-medium tracking-wide">
            “I'm not running because I want a title…”
          </blockquote>
        </div>

      </div>

    </div>

  );
}
