// app/page.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import Nav from '../components/Nav';
import Background from '../components/Background';
import Hero from '../components/Hero';
import BioCard from '@/components/BioCard';
import PlatformCard from '@/components/PlatformCard';
import DistrictCard from '@/components/DistrictCard';
import Footer from '@/components/Footer';

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
                grid
                grid-cols-1
                gap-6
                w-full
                max-w-7xl
                mx-auto

                lg:grid-cols-[60%_40%]
                lg:grid-rows-[auto_auto_auto]
              "
            >

              <div className="lg:col-start-1 lg:row-start-1">
                <Hero />
              </div>

              <div className="lg:col-start-1 lg:row-start-2">
                <BioCard />
              </div>

              <div
                className="
                  order-3
                  lg:order-none
                  lg:col-start-2
                  lg:row-start-1
                  lg:row-span-3
                "
              >
                <PlatformCard />
              </div>

              <div
                className="
                  order-4
                  lg:order-none
                  lg:col-start-1
                  lg:row-start-3
                "
              >
                <DistrictCard />
              </div>

            </div>
          </section>


        </main>
      </div>
    </>
  );
}
