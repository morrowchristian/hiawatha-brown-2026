// components/GetInvolvedCard.tsx
import { ArrowRight, Heart, MapPin, Megaphone } from "lucide-react";
import type { PanelKey } from "@/app/page";

export default function GetInvolvedCard({
  onOpenPanel,
}: {
  onOpenPanel?: (key: PanelKey) => void;
}) {
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
      sub: "Every dollar supports District 1 outreach",
      href: "https://forms.gle/FTi7nzcnCz2SbUpK8",
      bg: "#E8366A",
    },
    {
      icon: MapPin,
      label: "Request a Yard Sign",
      sub: "Show your support around the district",
      href: "https://forms.gle/VHcBeQaVdwaVo3rr8",
      bg: "#15803d",
    },
  ];

  return (
    <button
      onClick={() => onOpenPanel?.("get-involved")}
      className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl backdrop-blur md:p-10 w-full text-left hover:bg-slate-900/70 transition"
    >
      <div className="max-w-4xl">
        <p className="text-4x1 font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-[#E8366A] to-[#8DB600] bg-clip-text text-transparent">
          Stronger Together
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-2xl">
          Get Involved and Make <span>Your Voice</span> Heard
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Every volunteer shift, yard sign, conversation, and contribution helps bring strong leadership to District 1.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {actions.map(({ icon: Icon, label, sub, href, bg }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl"
          >
            <div
              className="flex items-center gap-4 p-5 transition-opacity hover:opacity-90"
              style={{ backgroundColor: bg }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-base font-bold text-white">{label}</p>
                <p className="text-sm text-white/70">{sub}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-white/50 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FBBC04]">
            Election Day
          </p>
          <p className="mt-1 text-xl font-bold text-white">August 5, 2025</p>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            Make sure you are registered to vote in Tennessee before the deadline and stay connected with the campaign.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://ovr.govote.tn.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
          >
            Register to Vote <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61567583096946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8366A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d11f5a]"
          >
            Follow on Facebook <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </button>
  );
}
