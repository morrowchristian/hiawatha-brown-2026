// components/panels/DistrictPanel.tsx
"use client";
import { useState } from "react";

const mapUrl =
  "https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805";

export default function DistrictPanel() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="p-6 space-y-4">

      {/* Intro */}
      <div className="bg-[#1E2A38] rounded-2xl p-5">
        <p className="text-[#E8366A] text-[10px] font-bold uppercase tracking-widest mb-1">Know Your District</p>
        <h2 className="text-white font-bold text-xl mb-2">Interactive District Map</h2>
        <p className="text-white/60 text-sm leading-relaxed">
          Explore Cleveland's city districts — their boundaries, streets, and neighborhoods — and check which district your address belongs to.
        </p>
      </div>

      {/* Map */}
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "480px" }}>
        {loading && (
          <div className="absolute inset-0 bg-[#2C3A4D] animate-pulse rounded-2xl flex items-center justify-center">
            <p className="text-[#8DA3B8] text-sm">Loading map…</p>
          </div>
        )}
        <iframe
          src={mapUrl}
          className={`w-full h-full transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
          style={{ border: "none" }}
          allowFullScreen
          onLoad={() => setLoading(false)}
          title="Cleveland TN District Map"
        />
      </div>

      {/* Quick facts */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "District", value: "1" },
          { label: "City", value: "Cleveland, TN" },
          { label: "Election", value: "Aug 5" },
          { label: "Candidate", value: "H. Brown" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[#2C3A4D] rounded-2xl p-4 text-center">
            <p className="text-[#8DA3B8] text-[10px] uppercase tracking-widest mb-1">{label}</p>
            <p className="text-white font-bold text-lg">{value}</p>
          </div>
        ))}
      </div>

    </div>
  );
}