// components/DistrictCard.tsx
'use client';
import { ArrowRight, MapPin } from 'lucide-react';

interface DistrictCardProps {
  onOpenPanel: (key: 'about' | 'platform' | 'map') => void;
}

export default function DistrictCard({ onOpenPanel }: DistrictCardProps) {
  return (
    <button
      onClick={() => onOpenPanel('map')}
      className="backdrop-blur-md bg-slate-900/70 hover:bg-slate-900/85 border border-white/10 rounded-2xl p-5 text-left transition-all hover:scale-[1.01] hover:border-white/20 group shadow-xl flex gap-4 items-start"
    >
      <div className="p-2.5 bg-[#E8366A]/20 rounded-xl border border-[#E8366A]/30 text-[#E8366A] shrink-0">
        <MapPin className="w-5 h-5" />
      </div>
      <div className="space-y-1 flex-1">
        <div className="flex justify-between items-center">
          <p className="text-[#E8366A] font-bold text-[10px] tracking-widest uppercase">Know Your District</p>
          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#FBBC04] group-hover:translate-x-0.5 transition-all" />
        </div>
        <h3 className="text-white text-lg font-bold">District 1 at a Glance</h3>
        
        <div className="text-white/80 text-xs font-medium pt-1 space-y-1">
          <p>South Cleveland • Generational neighborhoods • Housing diversity • Infrastructure needs</p>
        </div>
      </div>
    </button>
  );
}