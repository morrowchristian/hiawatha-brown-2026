// app/page.tsx
'use client';

import Nav from '../components/Nav';
import Background from '../components/Background';
import Hero from '../components/Hero';
import BioCard from '@/components/BioCard';
import PlatformCard from '@/components/PlatformCard';
import DistrictCard from '@/components/DistrictCard';
import MapCard from '@/components/MapCard'
import ContactCard from '@/components/ContactCard';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col relative text-white selection:bg-[#ff4f85]/30">
        <Background />
        <Nav />

        <main className="flex-1">
          <section className="relative z-10 w-full px-4 py-4">
            <div
              className="
                flex
                flex-col
                gap-6
                w-full
                max-w-7xl
                mx-auto

                min-[1000px]:flex-row
                min-[1000px]:items-start
                mb-6
              "
            >
              {/* Left Column (60% Desktop) */}
              <div className="w-full min-[1000px]:w-[60%] flex flex-col gap-6 order-1">
                <Hero />
                <BioCard />
                <DistrictCard />
                <MapCard />
              </div>

              {/* Right Column (40% Desktop) */}
              <div className="w-full min-[1000px]:w-[40%] flex flex-col gap-6 order-2 min-[1000px]:order-2">
                <PlatformCard />
                <ContactCard />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
