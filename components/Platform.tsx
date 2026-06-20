// components/Platform.tsx
"use client";
import { useState } from "react";
import {
  Home,
  TreePine,
  Wrench,
  TrendingUp,
  DollarSign,
  X,
  ChevronRight,
} from "lucide-react";

type PolicyItem = {
  icon: React.ElementType;
  title: string;
  tag: string;
  desc: string;
  long: string;
  contrast?: string;
  bullets: string[];
};

export default function Platform() {
  const [activeItem, setActiveItem] = useState<PolicyItem | null>(null);

  const items: PolicyItem[] = [
    {
      icon: Home,
      title: "Housing & Homelessness",
      tag: "Keeping District 1 Home",
      desc: "Too many families in our district are one missed paycheck away from losing their home — and our most vulnerable neighbors have nowhere to turn. That has to change.",
      long: "District 1 has some of the highest concentrations of housing-cost burden and blight in Cleveland. Families are being squeezed by rising rents while absentee landlords let properties deteriorate. The Cleveland Housing Authority waitlist for rental assistance has repeatedly opened and closed within days — a sign of desperate need with no lasting solution in sight. Hiawatha believes that every District 1 family deserves a safe, stable place to call home, and that the city must be a proactive partner — not a passive observer — in making that happen.",
      bullets: [
        "Advocate for expanded local use of CDBG funds to rehabilitate owner-occupied homes in District 1",
        "Push for stronger absentee-landlord accountability, including faster code enforcement timelines",
        "Support the city's transitional housing initiative and demand regular public progress updates",
        "Partner with the Cleveland Housing Authority to reduce waitlist backlogs through proactive outreach",
      ],
      contrast:
        "The current District 1 seat voted to approve a tax increase that included a transitional housing facility — but residents are still waiting to see concrete timelines, site plans, or community input sessions. Hiawatha will make sure those promises come with a public accountability schedule.",
    },
    {
      icon: TreePine,
      title: "Parks, Recreation & Community Spaces",
      tag: "Spaces That Belong to Everyone",
      desc: "Our parks and community spaces are where District 1 comes alive — but too many of them haven't seen real investment in years. Every neighborhood deserves a safe, welcoming place to gather.",
      long: "As a member of the Cleveland Parks & Recreation Board, Hiawatha has already been doing this work — not waiting for a council seat to start showing up. District 1 parks like Tinsley and others on the south side see high community use but chronic underfunding compared to newer developments. The city's approved aquatic center and recreational facilities should serve all of Cleveland, not just the areas that already have the most resources.",
      bullets: [
        "Ensure the new aquatic center and recreational facilities are accessible and equitably located for District 1 residents",
        "Advocate for consistent park maintenance budgets — not just one-time cleanup events",
        "Support youth programming partnerships with schools and nonprofits in District 1",
        "Push for community input in park improvement planning, not top-down decisions",
      ],
      contrast:
        "The current seat's most notable District 1 park activity on public record was mentioning a Tinsley Park cleanup at a council meeting. Community spaces need sustained investment and a council member who champions them year-round — not just seasonally.",
    },
    {
      icon: Wrench,
      title: "Neighborhood Maintenance & Revitalization",
      tag: "A Neighborhood That Works for You",
      desc: "Blight, neglected roads, overgrown lots, and code violations aren't just eyesores — they drag down property values and tell residents they don't matter. District 1 deserves better.",
      long: "The city's CDBG-funded code enforcement division handled 567 cases in fiscal year 2024–2025 — a clear sign that housing deterioration and blight are active, ongoing problems in Cleveland's target neighborhoods, many of which fall in and around District 1. Addressing blight isn't just about aesthetics. It's about safety, property values, community pride, and sending a signal that every block in this city matters.",
      bullets: [
        "Prioritize code enforcement resources in neighborhoods with the highest concentration of violations",
        "Establish a public-facing blight tracking dashboard so residents can see progress in real time",
        "Work with CDBG coordinators to ensure District 1 neighborhoods receive their fair share of federal improvement funding",
        "Create a direct channel for residents to report and follow up on maintenance issues without running into bureaucratic dead ends",
      ],
      contrast:
        "Cleveland's Community Development Block Grant program has identified blight reduction as a top priority for years. What's missing is a District 1 voice that holds the city accountable for acting on those priorities neighborhood by neighborhood.",
    },
    {
      icon: TrendingUp,
      title: "South Side Investment",
      tag: "Growth That Reaches Everyone",
      desc: "Cleveland's recent commercial growth has been exciting — but if you live on the south side of District 1, it might not feel like it's meant for you. Hiawatha is committed to changing that.",
      long: "Much of Cleveland's recent commercial and retail development has concentrated along Keith Street, Paul Huff Parkway, and the north side corridors. South side neighborhoods — which make up a significant portion of District 1 — have seen comparatively little of that growth. Long-time residents shouldn't have to drive across town to access basic amenities, and local entrepreneurs in these neighborhoods deserve the same support and infrastructure investment as those in higher-traffic corridors.",
      bullets: [
        "Advocate for south-side inclusion in the city's economic development planning and incentive programs",
        "Work with the Chamber and city staff to identify gaps in services and retail access on the south side",
        "Support small business development resources for District 1 entrepreneurs, particularly those from underserved backgrounds",
        "Push for infrastructure improvements — sidewalks, lighting, road maintenance — that make south side corridors more inviting to residents and business owners alike",
      ],
      contrast:
        "Equitable investment isn't automatic — it requires a council member who actively advocates for south side neighborhoods in every budget conversation, not just during campaign season.",
    },
    {
      icon: DollarSign,
      title: "Fiscal Transparency & Community Impact",
      tag: "Your Tax Dollars, Accounted For",
      desc: "In 2025, the city approved a 3.16-cent property tax increase. Hiawatha supported the goals behind it — but believes every resident has the right to know exactly where that money is going and when.",
      long: "The 'Pennies for Progress' initiative was approved by a 4-3 council vote, with the District 1 seat voting in favor. The stated goals — a new elementary school, a transitional housing facility, an aquatic center, and road widening — are things most residents can get behind. But good intentions don't automatically mean good outcomes. Residents deserve more than a press release. They deserve regular, plain-language updates on project timelines, cost overruns, and community benefit delivered.",
      bullets: [
        "Advocate for a public progress dashboard that tracks all 'Pennies for Progress' projects with real milestones and deadlines",
        "Require community impact reports before any major budget reallocation",
        "Push for town halls in District 1 whenever significant city spending decisions are on the table",
        "Oppose any future tax increases that don't come with clear accountability frameworks and measurable outcomes for residents",
      ],
      contrast:
        "Voting yes on a tax increase is easy. Following up to make sure the community actually sees the benefit is where accountability lives. Hiawatha will be the council member who keeps asking — and keeps reporting back.",
    },
  ];

  return (
    <section id="platform" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e91e63] font-semibold tracking-widest uppercase text-sm mb-3">
            What We Stand For
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A Platform Built for District 1
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Real issues, real commitments. Click any topic to read the full
            position.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveItem(item)}
              className="group w-full text-left bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#e91e63]/30 flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#e91e63]/10 flex items-center justify-center group-hover:bg-[#e91e63]/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-[#e91e63]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#e91e63] mb-1 block">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#e91e63] flex-shrink-0 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveItem(null);
          }}
        >
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#e91e63] to-[#c2185b] px-8 pt-8 pb-6 relative flex-shrink-0">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <span className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2 block">
                {activeItem.tag}
              </span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <activeItem.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto px-8 py-7 flex-1 space-y-6">
              {/* Overview */}
              <p className="text-gray-700 leading-relaxed text-base">
                {activeItem.long}
              </p>

              {/* Commitments */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  Hiawatha's Commitments
                </h4>
                <ul className="space-y-3">
                  {activeItem.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#e91e63]/10 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-[#e91e63] block" />
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contrast callout */}
              {activeItem.contrast && (
                <div className="border-l-4 border-[#e91e63]/40 bg-gray-50 rounded-r-xl px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#e91e63] mb-1">
                    The Difference
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activeItem.contrast}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t border-gray-100 flex-shrink-0 flex items-center justify-between">
              <a
                href="#volunteer"
                onClick={() => setActiveItem(null)}
                className="text-sm text-[#e91e63] font-semibold hover:underline"
              >
                Get involved →
              </a>
              <button
                onClick={() => setActiveItem(null)}
                className="px-5 py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
