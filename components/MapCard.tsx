'use client';

import { MapPin } from "lucide-react";

export default function MapCard() {
  return (
    <div className="card w-full text-left h-full">
      <div className="p-4 sm:p-5 flex flex-col h-full">

        {/* Header */}
        <div className="pb-3">
          <div className="card-header mx-2 flex items-center gap-3">
            <div className="card-icon shrink-0">
              <MapPin className="w-5 h-5 text-[#ff4f85]" />
            </div>

            <p className="card-title tracking-widest">
              Cleveland City District Map
            </p>
          </div>

          <div className="card-divider my-4 mx-2" />
        </div>

        {/* Map Content — using the working method */}
        <div className="mx-2 overflow-hidden rounded-2xl border border-[var(--card-border)]">
          <iframe
            src="https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Cleveland City District Map"
          />

          <p className="p-3 text-xs text-gray-600 bg-[var(--card-bg)] text-center border-t border-[var(--card-border)]">
            Source: City of Cleveland, TN —{" "}
            <a
              href="https://www.clevelandtn.gov/599/City-Council-District-Map"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-pink)] underline hover:opacity-80 transition-opacity duration-200"
            >
              City Council District Map
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
