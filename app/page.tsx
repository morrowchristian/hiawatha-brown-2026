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

        {/* HERO */}
        <main className="relative z-10 w-full px-6 md:px-12 py-10 order-1">
          <div className="w-full max-w-7xl mx-auto">
            <Hero />
          </div>
        </main>

        {/* CARDS */}
        <section className="relative z-10 w-full px-6 md:px-12 py-10 order-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">

            {/* BioCard — mobile order 2, desktop order 1 */}
            <div className="order-2 lg:order-1">
              <BioCard />
            </div>

            {/* PlatformCard — mobile order 3, desktop order 2 */}
            <div className="order-3 lg:order-2 lg:row-span-2">
              <PlatformCard />
            </div>

            {/* DistrictCard — mobile order 4, desktop order 3 */}
            <div className="order-4 lg:order-3">
              <DistrictCard />
            </div>

          </div>

          {/* Footer — mobile order 5 */}
          <div className="order-5">
            <Footer />
          </div>

        </section>
      </div>
    </>
  );
}
