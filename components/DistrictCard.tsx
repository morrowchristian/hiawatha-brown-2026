'use client';

import { MapPin, Users, Home, Zap, Award } from "lucide-react";

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

export default function DistrictCard() {
  return (
    <div className="card w-full text-left">
      <div className="fluid-pad fluid-stack">
        <div className="text-center pb-6">
          <p className="card-label tracking-[0.25em]">DISTRICT 1</p>
          <h2 className="fluid-title text-white">At a Glance</h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            Strong communities. Deep roots. Real opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {districtFacts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <div key={i} className="card-inner fluid-stack">
                <div className="flex items-start gap-4">
                  <div className="card-icon shrink-0">
                    <Icon className="w-6 h-6 text-[#E8366A]" />
                  </div>
                  <div>
                    <p className="card-label tracking-widest mb-2">{fact.title}</p>
                    <p className="card-body">{fact.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Interactive District Map */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[#E8366A]" />
            <p className="card-label tracking-widest">Official District 1 Map</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <iframe 
              src="https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805" 
              width="100%" 
              height="480" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy"
            />
            <div className="p-3 text-xs text-white/70 bg-black/70 text-center">
              Source: City of Cleveland, TN — 
              <a 
                href="https://www.clevelandtn.gov/599/City-Council-District-Map" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                City Council District Map
              </a>
            </div>
          </div>
        </div>

        {/* Why District 1 Matters */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-5 h-5 text-[#E8366A]" />
            <p className="card-label tracking-widest">Why District 1 Matters</p>
          </div>
          <p className="card-body text-white/80">
            District 1 is the heart of Cleveland’s south side — rich in history, strong in community, 
            and full of potential. With the right leadership, we can bring new investment, better 
            infrastructure, and real revitalization while preserving what makes our neighborhoods special.
          </p>
        </div>
      </div>
    </div>
  );
}