// data/platformData.ts
import { LucideIcon } from "lucide-react";
import { Home, TreePine, Wrench, TrendingUp, Scale } from "lucide-react";

export interface Commitment {
  text: string;
  highlighted?: string;
}

export interface PlatformItem {
  title: string;
  icon: LucideIcon;
  commitments: Commitment[];
  difference: string; // Changed from ReactNode to string
}

export const platformItems: PlatformItem[] = [
  {
    title: "Housing & Stronger Communities",
    icon: Home,
    commitments: [
      { 
        text: "Advocate for expanded use of ", 
        highlighted: "Community Development Block Grant funding" 
      },
      { 
        text: " to rehabilitate owner-occupied homes in District 1." 
      },
      { 
        text: "Support stronger accountability for ", 
        highlighted: "absentee landlords" 
      },
      { 
        text: " through timely code enforcement and follow-up." 
      },
      { 
        text: "Support transitional housing efforts while ensuring ", 
        highlighted: "transparency, timelines, and community input." 
      },
      { 
        text: "Partner with the Cleveland Housing Authority to help residents ", 
        highlighted: "access available housing resources." 
      }
    ],
    difference: "Public investments should come with communication, accountability, and measurable progress. Residents deserve to understand how housing initiatives impact their neighborhoods."
  },

  {
    title: "Parks & Community Spaces",
    icon: TreePine,
    commitments: [
      { 
        text: "Advocate for ", 
        highlighted: "equitable access" 
      },
      { 
        text: " to recreational facilities for District 1 residents." 
      },
      { 
        text: "Support dependable funding for ", 
        highlighted: "long-term park maintenance." 
      },
      { 
        text: "Expand youth recreation through partnerships with ", 
        highlighted: "schools, churches, and community organizations." 
      },
      { 
        text: "Ensure residents have a meaningful voice in planning future park improvements." 
      }
    ],
    difference: "Strong parks require consistent investment, planning, and advocacy. Hiawatha will work to keep these spaces safe, welcoming, and accessible."
  },

  {
    title: "Neighborhood Revitalization",
    icon: Wrench,
    commitments: [
      { 
        text: "Advocate for ", 
        highlighted: "targeted code enforcement" 
      },
      { 
        text: " where neighborhood needs are greatest." 
      },
      { 
        text: "Support a public ", 
        highlighted: "blight-tracking dashboard" 
      },
      { 
        text: " so residents can monitor progress." 
      },
      { 
        text: "Ensure District 1 receives its fair share of ", 
        highlighted: "neighborhood improvement funding." 
      },
      { 
        text: "Create a more responsive process for residents to report concerns and receive timely follow-up." 
      }
    ],
    difference: "Revitalization requires transparency, accountability, and follow-through. Community priorities should become visible progress."
  },

  {
    title: "South Side Opportunity",
    icon: TrendingUp,
    commitments: [
      { 
        text: "Advocate for greater inclusion of South Side neighborhoods in ", 
        highlighted: "economic development planning." 
      },
      { 
        text: "Partner with local leaders to identify gaps in ", 
        highlighted: "businesses, services, and neighborhood amenities." 
      },
      { 
        text: "Support programs that help ", 
        highlighted: "grow small businesses" 
      },
      { 
        text: " while attracting new investment." 
      },
      { 
        text: "Champion infrastructure improvements that improve ", 
        highlighted: "safety, mobility, and quality of life." 
      }
    ],
    difference: "Growth should benefit every neighborhood. District 1 deserves a strong voice in Cleveland's future."
  },

  {
    title: "Transparent Leadership",
    icon: Scale,
    commitments: [
      { 
        text: "Advocate for a public dashboard tracking ", 
        highlighted: "projects, timelines, and spending." 
      },
      { 
        text: "Support community impact reporting before major budget decisions." 
      },
      { 
        text: "Hold regular District 1 town halls to ", 
        highlighted: "listen, communicate, and engage residents." 
      },
      { 
        text: "Promote accountability so residents understand how ", 
        highlighted: "their tax dollars are being used." 
      }
    ],
    difference: "Leadership requires tracking progress, communicating openly, and delivering results."
  }
];