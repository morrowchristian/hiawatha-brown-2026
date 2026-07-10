// components/panels/GetInvolvedPanel.tsx
'use client';

import { ArrowRight, Heart, Megaphone, MapPin } from "lucide-react";

const actions = [
  {
    icon: Megaphone,
    label: "Volunteer",
    sub: "Join the team on the ground",
    href: "https://forms.gle/998kKakUn9gtDVyQ8",
    bg: "#2C3A4D",
  },
  {
    icon: Heart,
    label: "Donate to the Campaign",
    sub: "Every dollar goes directly to District 1",
    href: "https://forms.gle/FTi7nzcnCz2SbUpK8",
    bg: "#E8366A",
  },
  {
    icon: MapPin,
    label: "Request a Yard Sign",
    sub: "Put District 1 on the map",
    href: "https://forms.gle/VHcBeQaVdwaVo3rr8",
    bg: "#15803d",
  },
];

export default function GetInvolvedPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-6 space-y-4">

      {/* Hero card */}
      <div className="bg-[#1E2A38] rounded-2xl p-6">
        <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-2">
          Get Involved
        </p>
        <h2 className="text-white font-bold text-3xl leading-tight mb-3">
          Join the<br />Movement
        </h2>
        <p className="text-white/60 text-sm leading-relaxed">
          Every volunteer, yard sign, conversation, and donation helps bring strong leadership to District 1. 
          For official election information, please confirm details with trusted state sources such as 
          <a href="https://vote.gov" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            vote.gov
          </a>.
        </p>
      </div>

      {/* Action cards */}
      <div className="space-y-3">
        {actions.map(({ icon: Icon, label, sub, href, bg }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden"
          >
            <div
              className="p-5 flex items-center gap-4 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: bg }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-base">{label}</p>
                <p className="text-white/60 text-sm">{sub}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </div>
          </a>
        ))}
      </div>

      {/* Register to vote */}
      <div className="bg-white border border-[#D0D8E4] rounded-2xl p-5">
        <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-1">
          Election Day
        </p>
        <p className="text-[#FBBC04] font-bold text-2xl mb-1">August 5, 2025</p>
        <p className="text-[#5A6A7A] text-sm mb-4">
          Make sure you're registered to vote in Tennessee before the deadline. 
          Always confirm election details with trusted sources such as the Tennessee Secretary of State or 
          <a href="https://ovr.govote.tn.gov/" target="_blank" rel="noopener noreferrer" className="underline ml-1">
            GoVoteTN
          </a>.
        </p>
        <a
          href="https://ovr.govote.tn.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1E2A38] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2C3A4D] transition-colors"
        >
          Register to Vote <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Facebook */}
      <div className="bg-[#2C3A4D] rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="text-white font-bold text-sm">Follow on Facebook</p>
          <p className="text-[#8DA3B8] text-xs">Campaign updates and events</p>
        </div>
        <a
          href="https://www.facebook.com/profile.php?id=61567583096946"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-[#E8366A] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#D4215A] transition-colors"
        >
          Follow <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <p className="text-[#8DA3B8] text-xs text-center px-4">
        We are currently setting up official donation channels. Thank you for your support — we will follow up with you soon.
      </p>
    </div>
  );
}
