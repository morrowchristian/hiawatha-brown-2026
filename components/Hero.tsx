// components/Hero.tsx
'use client';

import React from 'react';
import { ArrowRight, Heart, Megaphone, MapPin } from 'lucide-react'; // 👈 Removed Facebook
import { PanelKey } from "@/app/page";
import PlatformCard from './PlatformCard';
import BioCard from './BioCard';
import DistrictCard from './DistrictCard';

interface HeroProps {
  onOpenPanel: (key: PanelKey) => void;
}

export default function Hero({ onOpenPanel }: HeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
      {/* LEFT COLUMN: Hero Content */}
      <div className="lg:col-span-7 lg:-mr-4 space-y-6 text-left">
        <div className="space-y-3">
          <h1 className="text-6xl md:text-6xl font-black tracking-tight leading-[0.9] drop-shadow-md">
            Hiawatha Brown
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
      </div>

      {/* RIGHT COLUMN: Three Info Overlays */}
      
    </div>
  );
}