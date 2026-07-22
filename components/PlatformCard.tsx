// components/PlatformCard.tsx
'use client';

import { platformItems, PlatformItem } from "@/data/platformData";
import { renderBody } from "@/utils/renderHelpers";

export default function PlatformCard() {
  return (
    <div className="card w-full text-left">
      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="pb-3">
          <h2 className="card-title leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)] mx-4">
            Building a stronger Cleveland.
            <span className="block text-[var(--primary-pink)]">
              Investing in District 1.
            </span>
            A future built together.
          </h2>

          <div className="card-divider my-2.5 mx-1" />

          <p className="card-head mx-4">
            Hiawatha Brown's platform is focused on{" "}
            <span className="text-[var(--primary-pink)] font-bold">
              stronger neighborhoods, responsible growth, and transparent leadership.
            </span>{" "}
            Together, we can create a Cleveland where every community has the
            opportunity to thrive.
          </p>
        </div>

        {/* Platform Items */}
        <div className="grid grid-cols-1 gap-3.5 mx-4">
          {platformItems.map((item, index) => (
            <PlatformItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlatformItemCard({ item }: { item: PlatformItem }) {
  const Icon = item.icon;

  return (
    <div className="card-inner !p-3 sm:!p-4">
      <div className="card-header flex items-center gap-2">
        <div className="card-icon shrink-0">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff4f85]" />
        </div>
        <p className="card-label tracking-wider text-xs sm:text-sm font-bold">
          {item.title}
        </p>
      </div>

      <div className="card-divider my-2.5" />

      <ul className="space-y-1.5 mx-1 mb-3">
        {item.commitments.map((commitment, i) => (
          <li key={i} className="card-body flex gap-2 text-xs leading-snug">
            <span className="text-[#ff4f85] shrink-0">•</span>
            <span>
              {commitment.text}{" "}
              {commitment.highlighted && (
                <span className="text-[var(--primary-pink)] font-bold">
                  {commitment.highlighted}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <div className="pt-2 border-t border-white/10 mx-1">
        <p className="text-[#ff4f85] text-[10px] font-bold tracking-widest mb-0.5">
          THE COMMITMENT
        </p>
        <p className="card-body text-xs leading-snug">
          {item.difference}
        </p>
      </div>
    </div>
  );
}
