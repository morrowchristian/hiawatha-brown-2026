'use client';

export default function Hero() {
  return (
    <div className="card">
      <div className="fluid-pad fluid-stack">
        <div className="text-center">
          <div>

            <p className="font-extrabold text-left text-2xl leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)] mx-2">
              Strong foundations.
              <span className="block text-[var(--primary-pink)]">Revitalized communities.</span>
              Limitless opportunities.
            </p>
            
          </div>

          {/* Card Inner */}
          <div className="card-inner fluid-stack mx-2 my-4">

            {/* Centered Candidate Image */}
            <div className="w-full h-auto flex justify-center items-start">
              <img
                src="/candidate.jpg"
                alt="Hiawatha Brown putting up yard signs!"
                className="rounded-[2rem] w-[95%] h-auto object-cover"
              />
            </div>

            {/* Quote */}
            <div className="fluid-pad fluid-stack">
              <blockquote className="text-description text-white/95 font-light text-sm tracking-wide text-left">
                <p className="italic">
                  “I’m running for City Council, District 1, because this election isn’t about the{" "}
                  <span className="text-[var(--primary-pink)] font-bold uppercase">
                    Left or the Right
                  </span>
                  —it’s about the people who live here and proudly call this city home.
                  <br />
                  <br />
                  It’s about bringing together{" "}
                  <span className="text-[var(--primary-pink)] font-bold uppercase">
                    every neighborhood and every community
                  </span>{" "}
                  in Cleveland, because{" "}
                  <span className="text-[var(--primary-pink)] font-bold uppercase">
                    we are stronger together
                  </span>
                  .
                  <br />
                  <br />
                  Together, we can build{" "}
                  <span className="text-[var(--primary-pink)] font-bold uppercase">
                    stronger infrastructure
                  </span>
                  , revitalize our neighborhoods, expand{" "}
                  <span className="text-[var(--primary-pink)] font-bold uppercase">
                    economic opportunities
                  </span>
                  , and create a brighter future for District 1.”
                </p>
              </blockquote>

              <p className="text-[#ff4f85] text-sm font-medium mt-4 text-right drop-shadow-[0_1px_1px_rgba(0,0,0,0.10)]">
                Hiawatha Brown
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
