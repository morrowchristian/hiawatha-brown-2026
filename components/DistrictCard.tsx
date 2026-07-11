'use client';

import { MapPin, Users, Home, Zap } from "lucide-react";

const districtFacts = [
  {
    icon: MapPin,
    title: "Rooted Neighborhoods",
    body: (
      <>
        Generations of families have built their lives here, creating{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          neighborhoods with deep roots
        </span>
        , strong traditions, and a shared commitment to{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          community.
        </span>
      </>
    )
  },
  {
    icon: Users,
    title: "Connected Communities",
    body: (
      <>
        From parks and schools to churches and local gathering spaces, the places
        that bring neighbors together are the foundation of a{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          connected and thriving community.
        </span>
      </>
    )
  },
  {
    icon: Home,
    title: "Smart Growth",
    body: (
      <>
        Our neighborhoods offer a variety of housing options and reflect the
        needs of the people who call District 1 home.{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          Thoughtful growth
        </span>{" "}
        means creating opportunities while preserving our community’s{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          character and identity.
        </span>
      </>
    )
  },
  {
    icon: Zap,
    title: "Building for the Future",
    body: (
      <>
        Reliable roads, safe sidewalks, improved drainage, and well-maintained
        public spaces are essential to{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          supporting families
        </span>
        , attracting investment, and preparing our community for the future.
      </>
    )
  }
];


export default function DistrictCard() {
  return (
    <div className="card w-full text-left">

      <div className="fluid-pad fluid-stack">


        {/* Header */}
        <div className="pb-6">

          <p className="font-extrabold text-left text-2xl leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)] mx-2">
            District 1 - At a Glance
            <span className="block text-[var(--primary-pink)]">
              Strength Through Community
            </span>
            History That Inspires
          </p>


          <div className="card-divider my-4 mx-2" />


          <p className="card-summary mx-2">
            District 1 is the heart of Cleveland’s South Side — a community built
            on generations of hard work, strong neighborhoods, and neighbors who
            look out for one another. By investing in our infrastructure,
            supporting local communities, and protecting the character of our
            neighborhoods, we can build a stronger future while honoring the
            history that makes this district unique.
          </p>

        </div>



        {/* Facts */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-2">

          {districtFacts.map((fact, i) => {

            const Icon = fact.icon;

            return (

              <div 
                key={i}
                className="card-inner"
              >

                <div className="card-header">

                  <div className="card-icon">

                    <Icon className="w-6 h-6 text-[#ff4f85]" />

                  </div>


                  <p className="card-label tracking-widest">

                    {fact.title}

                  </p>

                </div>


                <div className="card-divider my-3" />


                <p className="card-body mx-2">

                  {fact.body}

                </p>


              </div>

            );

          })}

        </div>



        {/* Map */}

        <div className="pt-8 mt-8 border-t border-white/10">


          <div className="card-header mx-2">

            <div className="card-icon">

              <MapPin className="w-5 h-5 text-[#ff4f85]" />

            </div>


            <p className="card-label tracking-widest">

              Official District 1 Map

            </p>

          </div>


          <div className="card-divider my-4 mx-2" />


          <div className="mx-2 overflow-hidden rounded-2xl border border-white/10">

            <iframe
              src="https://clevelandtn.maps.arcgis.com/apps/webappviewer/index.html?id=b51605b3d1764b4bb7ee9c0976bb0805"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />


            <p className="p-3 text-xs text-white/70 bg-black/70 text-center">

              Source: City of Cleveland, TN —{" "}

              <a
                href="https://www.clevelandtn.gov/599/City-Council-District-Map"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                City Council District Map
              </a>

            </p>


          </div>


        </div>


      </div>

    </div>
  );
}