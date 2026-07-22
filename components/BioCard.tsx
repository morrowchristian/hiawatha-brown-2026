// components/BioCard.tsx
'use client';

import { bioCards } from "@/data/bioData";
import { renderBody } from "@/utils/renderHelpers";

export default function BioCard() {
  return (
    <div className="card">
      <div className="fluid-pad fluid-stack">
        
          <h2 className="card-title leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)] mx-4">
            Meet Hiawatha
            <span className="block text-pop">
              Lifelong Educator &amp; Community Leader
            </span>
            Cleveland Born &amp; Raised
          </h2>

          <div className="card-divider my-4 mx-2" />

            <p className="card-head mx-4">
            Hiawatha Brown has spent her life serving Cleveland — as a{" "}
            <span className="text-pop font-bold">
              lifelong resident, educator, and community leader.
            </span>{" "}
            Her career has been defined by helping others succeed and working to
            strengthen the community she proudly calls home.
          </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mx-2">
          {bioCards.map(({ icon: Icon, subtitle, body, highlights }, i) => (
            <div key={i} className="card-inner fluid-stack">
              <div className="flex items-center gap-4">
                <div className="card-icon shrink-0">
                  <Icon className="w-6 h-6 text-[#ff4f85]" />
                </div>

                <p className="card-label tracking-widest">
                  {subtitle}
                </p>
              </div>

              <div className="card-divider my-3" />

              <p className="card-body mx-2">
                {renderBody(body, highlights)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
