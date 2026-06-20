import { Users, MapPin, Heart } from "lucide-react";

export default function Platform() {
  const items = [
    {
      icon: Users,
      title: "Housing & Homelessness",
      desc: "District 1 includes several neighborhoods facing rising housing costs..."
    },
    {
      icon: MapPin,
      title: "Parks, Recreation & Community Spaces",
      desc: "As a member of the Cleveland Parks & Recreation Board..."
    },
    {
      icon: Heart,
      title: "Neighborhood Maintenance & Revitalization",
      desc: "Many south‑side neighborhoods face higher rates of blight..."
    },
    {
      icon: Users,
      title: "South Side Investment",
      desc: "Much of Cleveland’s recent commercial growth has occurred..."
    },
    {
      icon: MapPin,
      title: "Fiscal Transparency & Community Impact",
      desc: "In 2025, the City Council approved a 3.16‑cent property tax increase..."
    },
  ];

  return (
    <section id="platform" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Key Issues for District 1</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#e91e63]/20">
              <item.icon className="w-12 h-12 text-[#e91e63] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
