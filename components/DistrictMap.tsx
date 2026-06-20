"use client";
import { useState } from "react";

export default function DistrictMap() {
  const [loading, setLoading] = useState(true);

  const mapUrl =
    "https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805";

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `${mapUrl}&center=${latitude},${longitude}`;
        window.open(url, "_blank");
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <section id="district-map" className="py-24 bg-gray-50">

      {/* Header Row */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Title + Text */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">
              Interactive District Map
            </h2>

            <p className="text-lg text-gray-700 max-w-xl">
              Explore District 1 and the surrounding neighborhoods. Use the map
              to see boundaries, streets, and community areas across the district.
            </p>
          </div>

          {/* Locate Me Button */}
          <button
            onClick={handleLocateMe}
            className="px-6 py-3 rounded-xl font-semibold text-blue-700 
                       bg-blue-100 hover:bg-blue-200 transition shadow-sm
                       w-full md:w-auto"
          >
            📍 Locate Me
          </button>
        </div>
      </div>

      {/* Full‑Width Map */}
      <div className="relative w-full min-h-[400px]">

        {/* Loading Skeleton */}
        {loading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        <iframe
          src={mapUrl}
          className={`w-full h-[400px] md:h-[600px] transition-opacity duration-700 ${
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

        <div className="prose prose-lg text-gray-700 space-y-6">
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
