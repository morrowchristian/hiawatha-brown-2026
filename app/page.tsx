// app/page.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import Nav from '../components/Nav';
import Background from '../components/Background';
import Hero from '../components/Hero';
import BioCard from '@/components/BioCard';
import PlatformCard from '@/components/PlatformCard';
import DistrictCard from '@/components/DistrictCard';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col relative text-white selection:bg-[#E8366A]/30">
        <Background />
        <Nav />

        <main className="relative z-10 w-full px-6 md:px-12 py-10">
          <Hero />
        </main>
        
        <section className="relative z-10 w-full px-6 md:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
            <BioCard />
            <PlatformCard />
            <DistrictCard />
          </div>
        </section>
      </div>
    </>
  );
}