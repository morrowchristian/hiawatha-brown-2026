// components/DistrictCard.tsx
'use client';

import { MapPin } from "lucide-react";
import { districtFacts } from "@/data/districtData";
import { renderBody } from "@/utils/renderHelpers";

export default function DistrictCard() {
  return (
    <div className="card w-full text-left">
      <div className="fluid-pad fluid-stack">
        {/* Header */}
        <div className="pb-6">
          <h2 className="card-title leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)] mx-2">
            District 1 - At a Glance
            <span className="block text-[var(--primary-pink)]">
              Strength Through Community
            </span>
            History That Inspires
          </h2>

          <div className="card-divider my-4 mx-2" />

          <p className="card-summary mx-2">
            District 1 is the heart of Cleveland's South Side — a community built
            on generations of hard work, strong neighborhoods, and neighbors who
            look out for one another. By investing in our infrastructure,
            supporting local communities, and protecting the character of our
            neighborhoods, we can build a stronger future while honoring the
            history that makes this district unique.
          </p>
        </div>

        {/* Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-2">
          {districtFacts.map((fact, i) => {
            const Icon = fact.icon;

            return (
              <div key={i} className="card-inner">
                <div className="card-header">
                  <div className="card-icon">
                    <Icon className="w-6 h-6 text-[#ff4f85]" />
                  </div>

                  <p className="card-label tracking-widest">
                    {fact.title}
                  </p>
                </div>

                <div className="card-divider my-3" />

                <p className="card-body mx-2">
                  {renderBody(fact.body, fact.highlights)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
