'use client';

import { useState, useCallback, useEffect } from 'react';
import { ArrowRight, Mail, Shield, User, Heart, CheckCircle } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import About from '../components/panels/AboutPanel';
import Platform from '../components/panels/PlatformPanel';
import DistrictMap from '../components/panels/DistrictPanel';
import GetInvolved from '../components/panels/GetInvolvedPanel';

type PanelKey = 'about' | 'platform' | 'map' | 'get-involved';

interface PanelConfig {
  label: string;
  Component: React.ComponentType<{ onClose: () => void }>;
}

const panels: Record<PanelKey, PanelConfig> = {
  about: { label: 'Meet Hiawatha', Component: About },
  platform: { label: 'The Platform', Component: Platform },
  map: { label: 'District 1 Map', Component: DistrictMap },
  'get-involved': { label: 'Join the Movement', Component: GetInvolved },
};

export default function Home() {
  const [activePanel, setActivePanel] = useState<PanelKey | null>(null);
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');

  const open = useCallback((key: PanelKey) => setActivePanel(key), []);
  const close = useCallback(() => setActivePanel(null), []);

  useEffect(() => {
    document.body.style.overflow = activePanel ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePanel]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing, neighbor! (${email}, ${zip})`);
    setEmail('');
    setZip('');
  };

  const ActiveComponent = activePanel ? panels[activePanel].Component : null;
  const activeLabel = activePanel ? panels[activePanel].label : '';

  return (
    <>
      <div className="min-h-screen flex flex-col relative text-white selection:bg-[#E8366A]/30">
        
        {/* ================= FULL PAGE IMMERSIVE BACKGROUND LAYER ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://visitclevelandtn.com/wp-content/uploads/2017/02/charm-downtown-cleveland.jpg" 
            alt="Downtown Cleveland, TN" 
            className="w-full h-full object-cover object-[30%_18%] md:object-[38%_18%] brightness-[0.75] contrast-[1.05] fixed transition-transform duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none fixed" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none fixed" />
        </div>

        {/* Global Navigation Bar */}
        <Nav />

        {/* ================= MAIN LANDING INTERACTION INTERFACE ================= */}
        <main className="flex-1 relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col justify-center py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* LEFT COLUMN: HERO NAME TREATMENT & HIGH-CONVERSION DONATION CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] drop-shadow-md">
                  HIAWATHA<br />BROWN
                </h1>
                
                <div className="space-y-1">
                  <p className="text-white text-xl md:text-2xl font-bold tracking-wide">
                    City Council &middot; District 1 &middot; Cleveland, TN
                  </p>
                  <p className="text-[#E8366A] font-extrabold text-sm md:text-base tracking-widest uppercase">
                    A Voice for District 1, A Vision for Cleveland
                  </p>
                </div>
              </div>

              {/* Action Area: Primary Donation Triggers */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => open('get-involved')}
                  className="inline-flex items-center gap-2 bg-[#E8366A] text-white font-black text-base px-8 py-4 rounded-xl shadow-2xl hover:bg-[#ff477e] hover:scale-[1.03] active:scale-[0.98] transition-all group scale-105"
                >
                  Donate Now
                  <Heart className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                </button>
                
                <button 
                  onClick={() => open('get-involved')}
                  className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/40 font-bold text-base px-6 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/80 transition-all shadow-md"
                >
                  Volunteer
                </button>
              </div>

              {/* Subscription Lead Capture Form */}
              <div className="pt-4 max-w-lg bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl">
                <p className="text-xs font-bold uppercase tracking-wider text-white/90 flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-[#E8366A]" /> Stay Informed About the Campaign
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-white/50 text-white focus:outline-none focus:border-[#E8366A] focus:bg-white/15 transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="ZIP" 
                    required
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full sm:w-24 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-white/50 text-white text-center focus:outline-none focus:border-[#E8366A] focus:bg-white/15 transition-all"
                  />
                  <button 
                    type="submit"
                    className="bg-[#E8366A] text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-[#ff477e] transition-colors shrink-0 shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: HIGH-VALUE ESSENTIAL SCAN CARDS */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
              
              {/* Tighter, Fast-Scan Platform Card */}
              <button
                onClick={() => open('platform')}
                className="backdrop-blur-md bg-slate-900/70 hover:bg-slate-900/85 border border-white/10 rounded-2xl p-5 text-left transition-all hover:scale-[1.01] hover:border-white/20 group shadow-xl flex gap-4 items-start"
              >
                <div className="p-2.5 bg-[#E8366A]/20 rounded-xl border border-[#E8366A]/30 text-[#E8366A] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-[#E8366A] font-bold text-[10px] tracking-widest uppercase">Core Priorities</p>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#FBBC04] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="text-white text-lg font-bold">The Platform</h3>
                  
                  <div className="text-white/80 text-xs font-medium pt-1.5 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#E8366A] shrink-0" />
                      <span>Fixing roads in South Cleveland</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#E8366A] shrink-0" />
                      <span>More affordable housing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#E8366A] shrink-0" />
                      <span>Transparent leadership</span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Candidate Bio Preview Card */}
              <button
                onClick={() => open('about')}
                className="backdrop-blur-md bg-slate-950/50 hover:bg-slate-950/70 border border-white/5 rounded-2xl p-5 text-left transition-all hover:scale-[1.01] hover:border-white/10 group shadow-xl flex gap-4 items-start"
              >
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-white/80 shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-white/50 font-bold text-[10px] tracking-widest uppercase">The Candidate</p>
                    <ArrowRight className="w-4 h-4 text-[#E8366A] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-white text-lg font-bold">Meet Hiawatha</h3>
                  <p className="text-white/70 text-xs leading-relaxed italic pt-0.5">
                    &ldquo;By standing up for our families, we make all of Cleveland stronger—because we are finally bringing structural investment back to District 1.&rdquo;
                  </p>
                </div>
              </button>

            </div>
          </div>

          {/* Social Proof Engagement Metric Sub-Footer Anchor */}
          <div className="mt-12 lg:mt-16 pt-4 border-t border-white/10 flex items-center justify-start gap-2 text-white/60 text-xs font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E8366A] animate-pulse" />
            Join over 450+ Cleveland neighbors building a stronger, more transparent District 1.
          </div>
        </main>

        {/* Cleaned Global Footer Integration */}
        <Footer />
      </div>

      {/* Sliding Sheet Panel System Layer */}
      {activePanel && ActiveComponent && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-0" onClick={close} />
          <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col text-slate-800">
            <header className="px-6 py-4 border-b flex items-center justify-between bg-slate-50">
              <h2 className="text-xl font-bold text-slate-800">{activeLabel}</h2>
              <button 
                onClick={close}
                className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors text-sm font-medium"
              >
                Close (ESC)
              </button>
            </header>
            <div className="flex-1 overflow-y-auto text-slate-700">
              <ActiveComponent onClose={close} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}