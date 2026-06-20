"use client";
import { useState } from "react";

export default function DistrictMap() {
  const [loading, setLoading] = useState(true);

  const mapUrl =
    "https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805";

  return (
    <section id="district-map" className="py-24 bg-gray-50">

      {/* Centered Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Interactive District Map
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore District 1 and the surrounding neighborhoods. Use the map
          to see boundaries, streets, and community areas across the district.
        </p>
      </div>

      {/* Full‑Width Map with Side Padding */}
      <div className="relative w-full px-[25px]">
        {/* Loading Skeleton */}
        {loading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-3xl" />
        )}

        <iframe
          src={mapUrl}
          className={`w-full min-h-[300px] md:h-[500px] rounded-3xl shadow-2xl transition-opacity duration-700 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          style={{ border: "none" }}
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
      </div>

      {/* Overview Section */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          District 1 Overview
        </h2>

        <div className="prose prose-lg text-gray-700 space-y-6 mx-auto">
          <p>
            District 1 includes many of Cleveland’s long‑established neighborhoods,
            community corridors, and residential areas on the south side of the city.
            The district reflects a mix of historic homes, family‑oriented streets,
            and community spaces that have served local residents for generations.
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>South Side Core:</strong> A collection of older residential
              streets and long‑standing neighborhoods with deep community roots.
            </li>
            <li>
              <strong>Community Anchors:</strong> Parks, schools, and public spaces
              that serve as gathering points for families and neighbors.
            </li>
            <li>
              <strong>Historic Business Corridors:</strong> Commercial areas that
              reflect the district’s long history and evolving needs.
            </li>
            <li>
              <strong>Housing Diversity:</strong> A blend of older single‑family
              homes, rental properties, and neighborhoods with a wide range of
              housing styles.
            </li>
            <li>
              <strong>Infrastructure Needs:</strong> Many streets, sidewalks, and
              drainage systems are aging and require ongoing maintenance and
              improvement.
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}
