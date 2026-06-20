"use client";
import { useState } from "react";

export default function DistrictMap() {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");

  const mapUrl =
    "https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805";

  const handleSearch = () => {
    if (!address.trim()) return;
    const encoded = encodeURIComponent(address);
    window.open(`${mapUrl}&find=${encoded}`, "_blank");
  };

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `${mapUrl}&find=${latitude},${longitude}`;
        window.open(url, "_blank");
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <section id="district-map" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Interactive District Map
        </h2>

        {/* Search Bar + Locate Me */}
        <div className="max-w-xl mx-auto mb-12 space-y-4">

          {/* Search Bar */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="flex-1 px-5 py-3 rounded-xl border border-gray-300 shadow-sm 
                         bg-white/90 backdrop-blur-sm
                         focus:ring-2 focus:ring-blue-600 focus:outline-none
                         text-gray-800 placeholder-gray-500"
            />

            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-xl font-semibold text-white 
                         bg-blue-700 hover:bg-blue-800 transition shadow-md"
            >
              Find
            </button>
          </div>

          {/* Locate Me Button */}
          <button
            onClick={handleLocateMe}
            className="w-full py-3 rounded-xl font-semibold text-blue-700 
                       bg-blue-100 hover:bg-blue-200 transition shadow-sm"
          >
            📍 Locate Me
          </button>
        </div>

        {/* Map + Text Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Description */}
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              This interactive map helps residents quickly identify their district
              and explore the neighborhoods, streets, and community areas that make
              up District 1.
            </p>
          </div>

          {/* Map Container */}
          <div className="relative w-full">

            {/* Loading Skeleton */}
            {loading && (
              <div className="absolute inset-0 rounded-3xl bg-gray-200 animate-pulse" />
            )}

            {/* Map Iframe */}
            <iframe
              src={mapUrl}
              className={`w-full h-80 md:h-full rounded-3xl shadow-2xl transition-opacity duration-700 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              style={{ border: "none" }}
              allowFullScreen
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>

        {/* Overview Section */}
        <h2 className="text-4xl font-bold text-center mt-24 mb-16">
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
