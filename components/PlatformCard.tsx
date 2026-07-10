// components/PlatformCard.tsx
'use client';

import { Home, TreePine, Wrench, TrendingUp, Scale } from "lucide-react";

const platformItems = [
  {
    title: "Housing & Homelessness",
    icon: Home,
    commitments: [
      "Advocate for expanded use of Community Development Block Grant (CDBG) funding to rehabilitate owner-occupied homes in District 1.",
      "Support stronger accountability for absentee landlords through more timely code enforcement and follow-up.",
      "Back the city's transitional housing initiative while calling for regular public updates on project timelines, implementation, and community engagement.",
      "Partner with the Cleveland Housing Authority to improve outreach and help eligible residents navigate available housing assistance."
    ],
    difference: "The current council approved funding that included a transitional housing facility, but many residents are still waiting for clear timelines, project updates, and opportunities for community input. Hiawatha believes major public investments should be accompanied by consistent communication and measurable accountability."
  },
  {
    title: "Parks, Recreation & Public Spaces",
    icon: TreePine,
    commitments: [
      "Advocate for equitable access to the new aquatic center and future recreational facilities for District 1 residents.",
      "Support dependable, long-term funding for park maintenance instead of relying primarily on volunteer cleanup efforts.",
      "Expand youth recreation programming through partnerships with local schools, churches, and nonprofit organizations.",
      "Ensure residents have a meaningful voice in planning future park improvements."
    ],
    difference: "Healthy parks require more than occasional attention—they require consistent advocacy, planning, and investment. Hiawatha will work year-round to ensure District 1's parks remain places where families can gather, children can play, and neighborhoods can thrive."
  },
  {
    title: "Neighborhood Maintenance & Revitalization",
    icon: Wrench,
    commitments: [
      "Advocate for code enforcement resources to be directed where violations and neighborhood needs are greatest.",
      "Support the creation of a public blight-tracking dashboard so residents can monitor progress.",
      "Work with city staff to ensure District 1 receives its fair share of federal neighborhood improvement funding.",
      "Create a more responsive process that allows residents to report maintenance concerns and receive timely follow-up."
    ],
    difference: "The city has identified blight reduction as an ongoing priority. Hiawatha will work to ensure those priorities translate into visible progress for District 1 neighborhoods through transparency, accountability, and consistent follow-through."
  },
  {
    title: "South Side Investment",
    icon: TrendingUp,
    commitments: [
      "Advocate for greater inclusion of south side neighborhoods in economic development planning.",
      "Partner with the Chamber of Commerce and city staff to identify gaps in retail services and neighborhood amenities.",
      "Support programs that help District 1 attract new businesses while revitalizing existing businesses, and grow small businesses.",
      "Champion infrastructure improvements—including sidewalks, lighting, drainage, and road maintenance—that encourage investment and improve quality of life."
    ],
    difference: "Balanced growth requires intentional leadership. Hiawatha will work to ensure every neighborhood has a voice during budget discussions and economic development planning."
  },
  {
    title: "Fiscal Transparency & Community Impact",
    icon: Scale,
    commitments: [
      "Advocate for a public project dashboard that tracks milestones, timelines, and expenditures.",
      "Support community impact reporting before significant budget reallocations.",
      "Hold regular District 1 town halls to discuss major spending decisions and gather public input.",
      "Promote accountability and transparency for future public investments so residents understand how their tax dollars are being used."
    ],
    difference: "Approving funding is only the first step. Effective leadership means tracking progress, communicating openly with residents, and ensuring projects deliver the promised benefits. Hiawatha is committed to keeping the community informed every step of the way."
  }
];

export default function PlatformCard() {
  return (
    <div className="card w-full text-left">
      <div className="fluid-pad fluid-stack">
        <div className="text-center pb-6">
          <p className="card-label tracking-[0.25em]">OUR PLATFORM</p>
          <h2 className="fluid-title text-white">Priorities for District 1</h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            Concrete commitments to improve housing, parks, neighborhoods, and transparency in Cleveland.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {platformItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="card-inner fluid-stack">
                <div className="flex items-start gap-4">
                  <div className="card-icon shrink-0 mt-1">
                    <Icon className="w-6 h-6 text-[#E8366A]" />
                  </div>
                  <div className="flex-1">
                    <p className="card-label tracking-widest mb-3 text-lg">{item.title}</p>
                    
                    <ul className="space-y-2.5 mb-5">
                      {item.commitments.map((commitment, i) => (
                        <li key={i} className="card-body flex gap-3">
                          <span className="text-[#E8366A] shrink-0 mt-1 text-lg leading-none">•</span>
                          <span>{commitment}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[#E8366A] text-xs font-medium tracking-wider mb-1">THE DIFFERENCE</p>
                      <p className="card-body text-white/75 leading-relaxed">{item.difference}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}