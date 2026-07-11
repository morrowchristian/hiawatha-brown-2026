'use client';

import { BookOpen, Users, Heart, MapPin } from "lucide-react";

const bioCards = [
  {
    icon: MapPin,
    subtitle: "Cleveland Roots",
    body: (
      <>
        Born and raised in Cleveland’s South Side, Hiawatha has a lifelong 
        connection to the{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          neighborhoods, families, and communities
        </span>{" "}
        that make District 1 home.
      </>
    ),
  },
  {
    icon: BookOpen,
    subtitle: "Education Leadership",
    body: (
      <>
        With degrees in education and leadership from{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          UA Huntsville, Lee University, and ASU
        </span>
        , Hiawatha has spent his career preparing students and building stronger 
        opportunities for the next generation.
      </>
    ),
  },
  {
    icon: Users,
    subtitle: "Years of Service",
    body: (
      <>
        Nearly two decades as an educator, including{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          15 years serving Bradley County Public Schools
        </span>
        , dedicated to supporting students, families, and the community.
      </>
    ),
  },
  {
    icon: Heart,
    subtitle: "Community Commitment",
    body: (
      <>
        Through the{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          Cleveland Parks & Recreation Board
        </span>{" "}
        and involvement at Pleasant Grove Missionary Baptist Church, Hiawatha 
        continues to serve the community he calls home.
      </>
    ),
  },
];

export default function BioCard() {
  return (
    <div className="card w-full text-left">
      <div className="fluid-pad fluid-stack">
        <div className="text-center">
          <p className="font-extrabold text-left text-2xl leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)] mx-2">
            Meet Hiawatha
            <span className="block text-[var(--primary-pink)]">
              Lifelong Educator &amp; Community Leader
            </span>
            Cleveland Born &amp; Raised
          </p>

          <div className="card-divider my-4 mx-2" />

          <p className="card-body text-white/80 mt-4 text-left mx-2">
            Hiawatha Brown has spent his life serving Cleveland — as a{" "}
            <span className="text-[var(--primary-pink)] font-bold">
              lifelong resident, educator, and community leader.
            </span>{" "}
            His career has been defined by helping others succeed and working to 
            strengthen the community he proudly calls home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mx-2">
          {bioCards.map(({ icon: Icon, subtitle, body }, i) => (
            <div key={i} className="card-inner fluid-stack">
              <div className="flex items-center gap-4">
                <div className="card-icon shrink-0">
                  <Icon className="w-6 h-6 text-[#ff4f85]" />
                </div>

                <p className="card-label tracking-widest">
                  {subtitle}
                </p>
              </div>

              <div className="card-divider my-3" />

              <p className="card-body mx-2">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}