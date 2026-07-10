// app/page.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import Nav from '../components/Nav';
import Background from '../components/Background';
import Hero from '../components/Hero';
import PanelSystem from '../components/PanelSystem';
import GetInvolvedCard from '../components/GetInvolvedCard';
import PlatformCard from '@/components/PlatformCard';
import BioCard from '@/components/BioCard';
import DistrictCard from '@/components/DistrictCard';


export type PanelKey = 'about' | 'platform' | 'map' | 'get-involved';

export default function Home() {
  const [activePanel, setActivePanel] = useState<PanelKey | null>(null);

  const open = useCallback((key: PanelKey) => setActivePanel(key), []);
  const close = useCallback(() => setActivePanel(null), []);

  // Prevent background scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = activePanel ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePanel]);

  // ESC key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  return (
    <>
      <div className="min-h-screen flex flex-col relative text-white selection:bg-[#E8366A]/30">
        <Background />
        <Nav />

        <main className="relative z-10 w-full px-6 md:px-12 py-10">
          <Hero onOpenPanel={open} />
        </main>
        
        <section className="relative z-10 w-full px-6 md:px-12 py-10">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
            <BioCard />
            <PlatformCard onOpenPanel={open} />
            <DistrictCard onOpenPanel={open} />
            <GetInvolvedCard onOpenPanel={open} />
          </div>
        </section>
      </div>

      <PanelSystem activePanel={activePanel} onClose={close} />
    </>
  );
}