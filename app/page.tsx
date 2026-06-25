// app/page.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import PanelSystem from '../components/PanelSystem';

type PanelKey = 'about' | 'platform' | 'map' | 'get-involved';

export default function Home() {
  const [activePanel, setActivePanel] = useState<PanelKey | null>(null);
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');

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

  const handleSubscribe = (submittedEmail: string, submittedZip: string) => {
    alert(`Thank you for subscribing, neighbor! (${submittedEmail}, ${submittedZip})`);
    setEmail('');
    setZip('');
  };

  return (
    <>
      <div className="min-h-screen flex flex-col relative text-white selection:bg-[#E8366A]/30">
        <Background />
        <Nav />

        <main className="flex-1 relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col justify-center py-12 lg:py-20">
          <Hero onOpenPanel={open} onSubscribe={handleSubscribe} />
          <SocialProof />
        </main>

        <Footer onOpenPanel={open} />
      </div>

      <PanelSystem activePanel={activePanel} onClose={close} />
    </>
  );
}