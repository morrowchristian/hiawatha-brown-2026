'use client';

import { BookOpen, Users, Heart, MapPin } from "lucide-react";

const bioCards = [
  {
    icon: MapPin,
    subtitle: "Lifelong Resident",
    body: "Grew up in District 1 and have lived my entire life on the south side of Cleveland.",
  },
  {
    icon: BookOpen,
    subtitle: "Education",
    body: "BA in Education (UA Huntsville), Master’s in Special Education (Lee University), Ed.S. in Educational Leadership (ASU).",
  },
  {
    icon: Users,
    subtitle: "Teaching Career",
    body: "19 years as a teacher — 15 years in Bradley County Public Schools.",
  },
  {
    icon: Heart,
    subtitle: "Community Service",
    body: "Cleveland Parks & Recreation Board + Active at Pleasant Grove Missionary Baptist Church.",
  },
];

export default function BioCard() {
  return (
    <div className="card w-full text-left">
      <div className="fluid-pad fluid-stack">
        <div className="text-center">
          <p className="card-label tracking-[0.25em]">MEET HIAWATHA BROWN</p>
          <h2 className="fluid-title text-white">Lifelong Educator &amp; Community Leader</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
          {bioCards.map(({ icon: Icon, subtitle, body }, i) => (
            <div key={i} className="card-inner fluid-stack">
              <div className="card-icon">
                <Icon className="w-5 h-5 text-[#ff4f85]" />
              </div>
              <p className="card-label tracking-widest">{subtitle}</p>
              <p className="card-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}