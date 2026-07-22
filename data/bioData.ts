// data/bioData.ts
import { LucideIcon } from "lucide-react";
import { BookOpen, Users, Heart, MapPin } from "lucide-react";

export interface BioCardItem {
  icon: LucideIcon;
  subtitle: string;
  body: string;
  highlights?: string[];
}

export const bioCards: BioCardItem[] = [
  {
    icon: MapPin,
    subtitle: "Cleveland Roots",
    body: "Born and raised in Cleveland's South Side, Hiawatha has a lifelong connection to the neighborhoods, families, and communities that make District 1 home.",
    highlights: ["neighborhoods, families, and communities"]
  },
  {
    icon: BookOpen,
    subtitle: "Education Leadership",
    body: "With degrees in education and leadership from UA Huntsville, Lee University, and ASU, Hiawatha has spent her career preparing students and building stronger opportunities for the next generation.",
    highlights: ["UA Huntsville, Lee University, and ASU"]
  },
  {
    icon: Users,
    subtitle: "Years of Service",
    body: "Nearly two decades as an educator, including 15 years serving Bradley County Public Schools, dedicated to supporting students, families, and the community.",
    highlights: ["15 years serving Bradley County Public Schools"]
  },
  {
    icon: Heart,
    subtitle: "Community Commitment",
    body: "Through the Cleveland Parks & Recreation Board and involvement at Pleasant Grove Missionary Baptist Church, Hiawatha continues to serve the community she calls home.",
    highlights: ["Cleveland Parks & Recreation Board"]
  }
];