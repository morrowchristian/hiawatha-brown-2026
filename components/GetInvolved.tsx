// components/GetInvolved.tsx
import { ArrowRight, Heart, MapPin, Megaphone } from 'lucide-react';

const actions = [
  {
    icon: Megaphone,
    label: 'Volunteer',
    sub: 'Join the team on the ground',
    href: 'https://forms.gle/998kKakUn9gtDVyQ8',
    bg: '#2C3A4D',
  },
  {
    icon: Heart,
    label: 'Donate to the Campaign',
    sub: 'Every dollar supports District 1 outreach',
    href: 'https://forms.gle/FTi7nzcnCz2SbUpK8',
    bg: '#E8366A',
  },
  {
    icon: MapPin,
    label: 'Request a Yard Sign',
    sub: 'Show your support around the district',
    href: 'https://forms.gle/VHcBeQaVdwaVo3rr8',
    bg: '#15803d',
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 md:py-24">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl backdrop-blur md:p-10">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8366A]">Get Involved</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">Join the Movement</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Every volunteer shift, yard sign, conversation, and contribution helps bring strong leadership to District 1.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {actions.map(({ icon: Icon, label, sub, href, bg }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl">
              <div className="flex items-center gap-4 p-5 transition-opacity hover:opacity-90" style={{ backgroundColor: bg }}>
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FBBC04]">Election Day</p>
            <p className="mt-1 text-xl font-bold text-white">August 5, 2025</p>
            <p className="mt-2 max-w-2xl text-sm text-white/60">
              Make sure you are registered to vote in Tennessee before the deadline and stay connected with the campaign.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://ovr.govote.tn.gov/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200">
              Register to Vote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61567583096946" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#E8366A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d11f5a]">
              Follow on Facebook <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
