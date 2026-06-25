// components/BioCard.tsx
'use client';
import { ArrowRight, User } from 'lucide-react';

interface BioCardProps {
  onOpenPanel: (key: 'about' | 'platform' | 'map' | 'get-involved') => void;
}

export default function BioCard({ onOpenPanel }: BioCardProps) {
  return (
    <button
      onClick={() => onOpenPanel('about')}
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
  );
}