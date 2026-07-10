// components/panels/DistrictPanel.tsx
'use client';

import { MapPin, Users, Home, Zap } from "lucide-react";

const districtFacts = [
  {
    icon: MapPin,
    title: "South Side Neighborhoods",
    body: "Long-established residential communities with deep roots and generations of families who have helped shape Cleveland."
  },
  {
    icon: Users,
    title: "Community Anchors",
    body: "Neighborhood parks, schools, churches, and public spaces that bring residents together and strengthen community connections."
  },
  {
    icon: Home,
    title: "Diverse Housing",
    body: "A mix of owner-occupied homes, rental properties, and neighborhoods with varying housing needs and opportunities."
  },
  {
    icon: Zap,
    title: "Infrastructure Priorities",
    body: "Aging roads, sidewalks, drainage systems, and public infrastructure that require continued investment to support future growth."
  }
];

interface DistrictCardProps {
  onOpenPanel?: (key: string) => void;
}

export default function DistrictCard({ onOpenPanel }: DistrictCardProps) {
  return (
    <div className="card w-full text-left cursor-pointer hover:scale-[1.01] transition-all" onClick={() => onOpenPanel?.('map')}>
      <div className="fluid-pad fluid-stack">
        <div>
          <p className="card-label tracking-[0.25em]">DISTRICT 1 AT A GLANCE</p>
          <h2 className="fluid-title text-white">Our Community</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
          {districtFacts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div key={i} className="card-inner fluid-stack">
                <div className="card-icon">
                  <Icon className="w-5 h-5 text-[#E8366A]" />
                </div>
                <p className="card-label tracking-widest">{fact.title}</p>
                <p className="card-body">{fact.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}