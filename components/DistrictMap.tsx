// components/DistrictMap.tsx
"use client";
import { useState } from "react";

const mapUrl =
  "https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805";

export default function DistrictMap() {
  const [loading, setLoading] = useState(true);

  return (
    <section id="district-map" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-[#e91e63] font-semibold tracking-widest uppercase text-sm mb-3">
            Know Your District
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive District Map
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore Cleveland’s city districts — their boundaries, streets, and neighborhoods — and quickly check which district your address belongs to.
          </p>
        </div>

        <div className="relative w-full">
          {loading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-3xl" />
          )}
          <iframe
            src={mapUrl}
            className={`w-full min-h-[560px] rounded-3xl shadow-xl transition-opacity duration-700 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            style={{ border: "none" }}
            allowFullScreen
            onLoad={() => setLoading(false)}
          />
        </div>

      </div>
    </section>
  );
}
