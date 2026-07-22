// data/districtData.ts
import { LucideIcon } from "lucide-react";
import { MapPin, Users, Home, Zap } from "lucide-react";

export interface DistrictFact {
  icon: LucideIcon;
  title: string;
  body: string;
  highlights?: string[];
}

export const districtFacts: DistrictFact[] = [
  {
    icon: MapPin,
    title: "Rooted Neighborhoods",
    body: "Generations of families have built their lives here, creating neighborhoods with deep roots, strong traditions, and a shared commitment to community.",
    highlights: ["neighborhoods with deep roots", "community."]
  },
  {
    icon: Users,
    title: "Connected Communities",
    body: "From parks and schools to churches and local gathering spaces, the places that bring neighbors together are the foundation of a connected and thriving community.",
    highlights: ["connected and thriving community."]
  },
  {
    icon: Home,
    title: "Smart Growth",
    body: "Our neighborhoods offer a variety of housing options and reflect the needs of the people who call District 1 home. Thoughtful growth means creating opportunities while preserving our community's character and identity.",
    highlights: ["Thoughtful growth", "character and identity."]
  },
  {
    icon: Zap,
    title: "Building for the Future",
    body: "Reliable roads, safe sidewalks, improved drainage, and well-maintained public spaces are essential to supporting families, attracting investment, and preparing our community for the future.",
    highlights: ["supporting families"]
  }
];