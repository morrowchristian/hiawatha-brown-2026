export default function DistrictMap() {
  return (
    <section id="district-map" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          District 1: Map Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Embedded Interactive Map */}
          <div className="w-full">
            <iframe
              src="https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805"
              className="w-full h-80 md:h-full rounded-3xl shadow-2xl"
              style={{ border: "none" }}
              allowFullScreen
            />
          </div>

          {/* Text Content */}
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              District 1 covers much of Cleveland’s south side, including several
              of the city’s oldest residential neighborhoods and key community
              corridors. The area is known for its historic character, long‑standing
              family homes, and strong neighborhood identity.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>South Side Core:</strong> Includes older residential streets,
                long‑established neighborhoods, and areas with aging infrastructure.
              </li>
              <li>
                <strong>Community Anchors:</strong> Home to several parks, schools,
                and public facilities that serve as central gathering points.
              </li>
              <li>
                <strong>Historic Business Corridors:</strong> Contains commercial
                areas that have seen slower reinvestment compared to northern districts.
              </li>
              <li>
                <strong>Housing Diversity:</strong> Mix of older single‑family homes,
                rental properties, and neighborhoods facing affordability pressures.
              </li>
              <li>
                <strong>Infrastructure Needs:</strong> Many streets, sidewalks, and
                drainage systems are decades old and require ongoing upgrades.
              </li>
            </ul>

            <p>
              This interactive map helps residents quickly identify their district
              and understand the unique character and needs of District 1.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
