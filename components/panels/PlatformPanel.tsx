// components/panels/PlatformPanel.tsx
"use client";
import { useState } from "react";
import { Home, TreePine, Wrench, TrendingUp, DollarSign, X } from "lucide-react";

type PolicyItem = {
  icon: React.ElementType;
  title: string;
  tag: string;
  desc: string;
  long: string;
  contrast?: string;
  bullets: string[];
  color: string;
};

const items: PolicyItem[] = [
  {
    icon: Home,
    title: "Housing & Homelessness",
    tag: "Keeping District 1 Home",
    color: "#2C3A4D",
    desc: "Too many families in our district are one missed paycheck away from losing their home — and our most vulnerable neighbors have nowhere to turn. That has to change.",
    long: "District 1 has some of the highest concentrations of housing-cost burden and blight in Cleveland. Families are being squeezed by rising rents while absentee landlords let properties deteriorate. The Cleveland Housing Authority waitlist for rental assistance has repeatedly opened and closed within days — a sign of desperate need with no lasting solution in sight. Hiawatha believes that every District 1 family deserves a safe, stable place to call home, and that the city must be a proactive partner — not a passive observer — in making that happen.",
    bullets: [
      "Advocate for expanded local use of CDBG funds to rehabilitate owner-occupied homes in District 1",
      "Push for stronger absentee-landlord accountability, including faster code enforcement timelines",
      "Support the city's transitional housing initiative and demand regular public progress updates",
      "Partner with the Cleveland Housing Authority to reduce waitlist backlogs through proactive outreach",
    ],
    contrast: "The current District 1 seat voted to approve a tax increase that included a transitional housing facility — but residents are still waiting to see concrete timelines, site plans, or community input sessions. Hiawatha will make sure those promises come with a public accountability schedule.",
  },
  {
    icon: TreePine,
    title: "Parks, Recreation & Community Spaces",
    tag: "Spaces That Belong to Everyone",
    color: "#15803d",
    desc: "Our parks and community spaces are where District 1 comes alive — but too many of them haven't seen real investment in years. Every neighborhood deserves a safe, welcoming place to gather.",
    long: "As a member of the Cleveland Parks & Recreation Board, Hiawatha has already been doing this work — not waiting for a council seat to start showing up. District 1 parks like Tinsley and others on the south side see high community use but chronic underfunding compared to newer developments. The city's approved aquatic center and recreational facilities should serve all of Cleveland, not just the areas that already have the most resources.",
    bullets: [
      "Ensure the new aquatic center and recreational facilities are accessible and equitably located for District 1 residents",
      "Advocate for consistent park maintenance budgets — not just one-time cleanup events",
      "Support youth programming partnerships with schools and nonprofits in District 1",
      "Push for community input in park improvement planning, not top-down decisions",
    ],
    contrast: "The current seat's most notable District 1 park activity on public record was mentioning a Tinsley Park cleanup at a council meeting. Community spaces need sustained investment and a council member who champions them year-round — not just seasonally.",
  },
  {
    icon: Wrench,
    title: "Neighborhood Maintenance & Revitalization",
    tag: "A Neighborhood That Works for You",
    color: "#1E2A38",
    desc: "Blight, neglected roads, overgrown lots, and code violations aren't just eyesores — they drag down property values and tell residents they don't matter. District 1 deserves better.",
    long: "The city's CDBG-funded code enforcement division handled 567 cases in fiscal year 2024–2025 — a clear sign that housing deterioration and blight are active, ongoing problems in Cleveland's target neighborhoods, many of which fall in and around District 1. Addressing blight isn't just about aesthetics. It's about safety, property values, community pride, and sending a signal that every block in this city matters.",
    bullets: [
      "Prioritize code enforcement resources in neighborhoods with the highest concentration of violations",
      "Establish a public-facing blight tracking dashboard so residents can see progress in real time",
      "Work with CDBG coordinators to ensure District 1 neighborhoods receive their fair share of federal improvement funding",
      "Create a direct channel for residents to report and follow up on maintenance issues without running into bureaucratic dead ends",
    ],
    contrast: "Cleveland's Community Development Block Grant program has identified blight reduction as a top priority for years. What's missing is a District 1 voice that holds the city accountable for acting on those priorities neighborhood by neighborhood.",
  },
  {
    icon: TrendingUp,
    title: "South Side Investment",
    tag: "Growth That Reaches Everyone",
    color: "#364759",
    desc: "Cleveland's recent commercial growth has been exciting — but if you live on the south side of District 1, it might not feel like it's meant for you. Hiawatha is committed to changing that.",
    long: "Much of Cleveland's recent commercial and retail development has concentrated along Keith Street, Paul Huff Parkway, and the north side corridors. South side neighborhoods — which make up a significant portion of District 1 — have seen comparatively little of that growth. Long-time residents shouldn't have to drive across town to access basic amenities, and local entrepreneurs in these neighborhoods deserve the same support and infrastructure investment as those in higher-traffic corridors.",
    bullets: [
      "Advocate for south-side inclusion in the city's economic development planning and incentive programs",
      "Work with the Chamber and city staff to identify gaps in services and retail access on the south side",
      "Support small business development resources for District 1 entrepreneurs, particularly those from underserved backgrounds",
      "Push for infrastructure improvements — sidewalks, lighting, road maintenance — that make south side corridors more inviting to residents and business owners alike",
    ],
    contrast: "Equitable investment isn't automatic — it requires a council member who actively advocates for south side neighborhoods in every budget conversation, not just during campaign season.",
  },
  {
    icon: DollarSign,
    title: "Fiscal Transparency & Community Impact",
    tag: "Your Tax Dollars, Accounted For",
    color: "#E8366A",
    desc: "In 2025, the city approved a 3.16-cent property tax increase. Hiawatha supported the goals behind it — but believes every resident has the right to know exactly where that money is going and when.",
    long: "The 'Pennies for Progress' initiative was approved by a 4-3 council vote, with the District 1 seat voting in favor. The stated goals — a new elementary school, a transitional housing facility, an aquatic center, and road widening — are things most residents can get behind. But good intentions don't automatically mean good outcomes. Residents deserve more than a press release. They deserve regular, plain-language updates on project timelines, cost overruns, and community benefit delivered.",
    bullets: [
      "Advocate for a public progress dashboard that tracks all 'Pennies for Progress' projects with real milestones and deadlines",
      "Require community impact reports before any major budget reallocation",
      "Push for town halls in District 1 whenever significant city spending decisions are on the table",
      "Oppose any future tax increases that don't come with clear accountability frameworks and measurable outcomes for residents",
    ],
    contrast: "Voting yes on a tax increase is easy. Following up to make sure the community actually sees the benefit is where accountability lives. Hiawatha will be the council member who keeps asking — and keeps reporting back.",
  },
];

export default function PlatformPanel() {
  const [activeItem, setActiveItem] = useState<PolicyItem | null>(null);

  return (
    <div className="p-6 space-y-3">

      {/* Intro card */}
      <div className="bg-[#1E2A38] rounded-2xl p-5">
        <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-1">A Platform Built for District 1</p>
        <p className="text-white/70 text-sm leading-relaxed">
          Real issues, real commitments. Tap any topic to read the full position and Hiawatha's specific commitments to District 1.
        </p>
      </div>

      {/* Policy cards */}
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <button
            key={i}
            onClick={() => setActiveItem(item)}
            className="w-full text-left group"
          >
            <div className="bg-white border border-[#D0D8E4] rounded-2xl p-5 hover:border-[#E8366A]/40 hover:shadow-sm transition-all duration-200">
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-0.5">{item.tag}</p>
                  <h3 className="text-[#1E2A38] font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-[#5A6A7A] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-[#EEF1F5] flex items-center justify-between">
                <div className="flex gap-1.5 items-center">
                  {item.bullets.slice(0, 2).map((_, bi) => (
                    <span key={bi} className="w-1.5 h-1.5 rounded-full bg-[#E8366A]/40" />
                  ))}
                  <span className="text-[#8DA3B8] text-[10px] ml-1">{item.bullets.length} commitments</span>
                </div>
                <span className="text-[#E8366A] text-xs font-semibold group-hover:underline">
                  Full position →
                </span>
              </div>
            </div>
          </button>
        );
      })}

      {/* District sidebar info */}
      <div className="bg-[#2C3A4D] rounded-2xl p-5 space-y-3">
        <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest">District 1 at a Glance</p>
        {[
          { label: "South Side Core", body: "Older residential streets and long-standing neighborhoods with generational roots." },
          { label: "Community Anchors", body: "Parks, schools, and public spaces that serve as gathering points for families." },
          { label: "Housing Diversity", body: "A blend of single-family homes, rentals, and neighborhoods with varied housing needs." },
          { label: "Infrastructure Needs", body: "Aging streets, sidewalks, and drainage systems that require sustained investment." },
        ].map(({ label, body }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#E8366A] shrink-0" />
            <p className="text-[#8DA3B8] text-sm leading-relaxed">
              <strong className="text-white">{label}:</strong> {body}
            </p>
          </div>
        ))}
      </div>

      {/* Policy drill-down modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(30,42,56,0.75)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setActiveItem(null); }}
        >
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
            <div className="bg-[#1E2A38] px-6 pt-6 pb-5 relative shrink-0">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <span className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-2 block">
                {activeItem.tag}
              </span>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: activeItem.color }}
                >
                  <activeItem.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{activeItem.title}</h3>
              </div>
            </div>

            <div className="overflow-y-auto px-6 py-5 flex-1 space-y-5 bg-[#EEF1F5]">
              <p className="text-[#2C3A4D] text-sm leading-relaxed">{activeItem.long}</p>
              <div className="bg-white rounded-2xl p-5 border border-[#D0D8E4]">
                <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-3">Hiawatha's Commitments</p>
                <ul className="space-y-2.5">
                  {activeItem.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#E8366A] shrink-0" />
                      <span className="text-[#2C3A4D] text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {activeItem.contrast && (
                <div className="bg-[#2C3A4D] rounded-2xl px-5 py-4">
                  <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-1.5">The Difference</p>
                  <p className="text-white/75 text-sm leading-relaxed">{activeItem.contrast}</p>
                </div>
              )}
            </div>

            <div className="bg-[#1E2A38] px-6 py-3 flex items-center justify-between shrink-0">
              <span className="text-white/30 text-[10px]">District 1 · Cleveland, TN</span>
              <button
                onClick={() => setActiveItem(null)}
                className="text-[#8DA3B8] text-xs hover:text-[#E8366A] transition-colors"
              >
                ← Back to platform
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}