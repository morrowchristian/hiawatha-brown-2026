// components/Hero.tsx
'use client';

import React from 'react';
import { ArrowRight, Mail, Shield, User, Heart, CheckCircle } from 'lucide-react';
import PlatformCard from './PlatformCard';
import BioCard from './BioCard';
import DistrictCard from './DistrictCard';

interface HeroProps {
  onOpenPanel: (key: 'about' | 'platform' | 'map' | 'get-involved') => void;
  onSubscribe: (email: string, zip: string) => void;
}

export default function Hero({ onOpenPanel, onSubscribe }: HeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12  gap-6 items-center w-full">
      {/* LEFT COLUMN: Hero Content */}
      <div className="lg:col-span-7 lg:-mr-4 space-y-6 text-left">
        <div className="space-y-3">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] drop-shadow-md ">
            HIAWATHA<br />BROWN
          </h1>
          
          <div className="space-y-1">
            <p className="text-white text-xl md:text-2xl font-bold tracking-wide">
              City Council &middot; District 1 &middot; Cleveland, TN
            </p>
            <p className="text-[#E8366A] font-extrabold text-sm md:text-base tracking-widest uppercase">
              Fighting for South Cleveland Families
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <button 
            onClick={() => onOpenPanel('get-involved')}
            className="inline-flex items-center gap-2 bg-[#E8366A] text-white font-black text-lg md:text-xl px-10 md:px-12 py-5 md:py-6 rounded-xl shadow-2xl hover:bg-[#ff477e] hover:scale-[1.03] active:scale-[0.98] transition-all group scale-105 relative overflow-hidden"
            style={{
              boxShadow: '0 0 30px rgba(232, 54, 106, 0.5), 0 0 60px rgba(232, 54, 106, 0.25)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Donate Now
              <Heart className="w-6 h-6 md:w-7 md:h-7 fill-white group-hover:scale-110 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => onOpenPanel('get-involved')}
            className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/40 font-bold text-base px-6 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/80 transition-all shadow-md"
          >
            Volunteer
          </button>
        </div>

        {/* Subscription Form */}
        <SubscriptionForm onSubscribe={onSubscribe} />
      </div>

      {/* RIGHT COLUMN: Three Cards */}
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
        <PlatformCard onOpenPanel={onOpenPanel} />
        <BioCard onOpenPanel={onOpenPanel} />
        <DistrictCard onOpenPanel={onOpenPanel} />
      </div>
    </div>
  );
}

// Subscription Form
function SubscriptionForm({ onSubscribe }: { onSubscribe: (email: string, zip: string) => void }) {
  const [email, setEmail] = React.useState('');
  const [zip, setZip] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe(email, zip);
    setEmail('');
    setZip('');
  };

  return (
    <div className="pt-4 max-w-lg bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl">
      <p className="text-xs font-bold uppercase tracking-wider text-white/90 flex items-center gap-2 mb-3">
        <Mail className="w-4 h-4 text-[#E8366A]" /> Stay Informed About the Campaign
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
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
  );
}