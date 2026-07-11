// components/PlatformCard.tsx
'use client';

import { Home, TreePine, Wrench, TrendingUp, Scale } from "lucide-react";

const platformItems = [
  {
    title: "Housing & Stronger Communities",
    icon: Home,
    commitments: [
      <>
        Advocate for expanded use of{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          Community Development Block Grant funding
        </span>{" "}
        to rehabilitate owner-occupied homes in District 1.
      </>,
      <>
        Support stronger accountability for{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          absentee landlords
        </span>{" "}
        through timely code enforcement and follow-up.
      </>,
      <>
        Support transitional housing efforts while ensuring{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          transparency, timelines, and community input.
        </span>
      </>,
      <>
        Partner with the Cleveland Housing Authority to help residents{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          access available housing resources.
        </span>
      </>
    ],
    difference: (
      <>
        Public investments should come with{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          communication, accountability, and measurable progress.
        </span>{" "}
        Residents deserve to understand how housing initiatives impact their
        neighborhoods.
      </>
    )
  },

  {
    title: "Parks & Community Spaces",
    icon: TreePine,
    commitments: [
      <>
        Advocate for{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          equitable access
        </span>{" "}
        to recreational facilities for District 1 residents.
      </>,
      <>
        Support dependable funding for{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          long-term park maintenance.
        </span>
      </>,
      <>
        Expand youth recreation through partnerships with{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          schools, churches, and community organizations.
        </span>
      </>,
      <>
        Ensure residents have a meaningful voice in planning future park improvements.
      </>
    ],
    difference: (
      <>
        Strong parks require{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          consistent investment, planning, and advocacy.
        </span>{" "}
        Hiawatha will work to keep these spaces safe, welcoming, and accessible.
      </>
    )
  },

  {
    title: "Neighborhood Revitalization",
    icon: Wrench,
    commitments: [
      <>
        Advocate for{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          targeted code enforcement
        </span>{" "}
        where neighborhood needs are greatest.
      </>,
      <>
        Support a public{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          blight-tracking dashboard
        </span>{" "}
        so residents can monitor progress.
      </>,
      <>
        Ensure District 1 receives its fair share of{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          neighborhood improvement funding.
        </span>
      </>,
      <>
        Create a more responsive process for residents to report concerns and
        receive timely follow-up.
      </>
    ],
    difference: (
      <>
        Revitalization requires{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          transparency, accountability, and follow-through.
        </span>{" "}
        Community priorities should become visible progress.
      </>
    )
  },

  {
    title: "South Side Opportunity",
    icon: TrendingUp,
    commitments: [
      <>
        Advocate for greater inclusion of South Side neighborhoods in{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          economic development planning.
        </span>
      </>,
      <>
        Partner with local leaders to identify gaps in{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          businesses, services, and neighborhood amenities.
        </span>
      </>,
      <>
        Support programs that help{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          grow small businesses
        </span>{" "}
        while attracting new investment.
      </>,
      <>
        Champion infrastructure improvements that improve{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          safety, mobility, and quality of life.
        </span>
      </>
    ],
    difference: (
      <>
        Growth should benefit every neighborhood. District 1 deserves a{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          strong voice in Cleveland’s future.
        </span>
      </>
    )
  },

  {
    title: "Transparent Leadership",
    icon: Scale,
    commitments: [
      <>
        Advocate for a public dashboard tracking{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          projects, timelines, and spending.
        </span>
      </>,
      <>
        Support community impact reporting before major budget decisions.
      </>,
      <>
        Hold regular District 1 town halls to{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          listen, communicate, and engage residents.
        </span>
      </>,
      <>
        Promote accountability so residents understand how{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          their tax dollars are being used.
        </span>
      </>
    ],
    difference: (
      <>
        Leadership requires{" "}
        <span className="text-[var(--primary-pink)] font-bold">
          tracking progress, communicating openly, and delivering results.
        </span>
      </>
    )
  }
];


export default function PlatformCard() {
  return (
    <div className="card w-full text-left">

      <div className="fluid-pad fluid-stack">


        {/* Header */}

        <div className="pb-6">

          <p className="font-extrabold text-left text-2xl leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)] mx-2">
            Building a stronger Cleveland.
            <span className="block text-[var(--primary-pink)]">
              Investing in District 1.
            </span>
            A future built together.
          </p>


          <div className="card-divider my-4 mx-2" />


          <p className="card-body text-white/80 mx-2">

            Hiawatha Brown’s platform is focused on{" "}
            <span className="text-[var(--primary-pink)] font-bold">
              stronger neighborhoods, responsible growth, and transparent leadership.
            </span>{" "}
            Together, we can create a Cleveland where every community has the
            opportunity to thrive.

          </p>

        </div>



        {/* Platform Items */}

        <div className="grid grid-cols-1 gap-6 mx-2">

          {platformItems.map((item, index) => {

            const Icon = item.icon;

            return (

              <div 
                key={index}
                className="card-inner"
              >


                <div className="card-header">


                  <div className="card-icon">

                    <Icon className="w-6 h-6 text-[#ff4f85]" />

                  </div>


                  <p className="card-label tracking-widest text-lg">

                    {item.title}

                  </p>


                </div>



                <div className="card-divider my-4" />



                <ul className="space-y-3 mx-2 mb-5">

                  {item.commitments.map((commitment, i) => (

                    <li
                      key={i}
                      className="card-body flex gap-3"
                    >

                      <span className="text-[#ff4f85] shrink-0 mt-1">
                        •
                      </span>

                      <span>
                        {commitment}
                      </span>

                    </li>

                  ))}

                </ul>



                <div className="pt-4 border-t border-white/10 mx-2">


                  <p className="text-[#ff4f85] text-xs font-bold tracking-widest mb-2">
                    THE COMMITMENT
                  </p>


                  <p className="card-body text-white/75 leading-relaxed">

                    {item.difference}

                  </p>


                </div>


              </div>

            );

          })}

        </div>


      </div>

    </div>
  );
}