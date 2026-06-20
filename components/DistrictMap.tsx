export default function DistrictMap() {
  return (
    <section id="district-map" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">District 1: Map Overview</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img 
              src="/District-Map.png"
              alt="Cleveland City Council District 1 Map"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>District 1 covers much of Cleveland’s south side...</p>

            <ul className="list-disc pl-6 space-y-3">
              <li><strong>South Side Core:</strong> Includes older residential streets...</li>
              <li><strong>Community Anchors:</strong> Home to several parks...</li>
              <li><strong>Historic Business Corridors:</strong> Contains commercial areas...</li>
              <li><strong>Housing Diversity:</strong> Mix of older single‑family homes...</li>
              <li><strong>Infrastructure Needs:</strong> Many streets and drainage systems...</li>
            </ul>

            <p>This geographic snapshot highlights the unique character of District 1...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
