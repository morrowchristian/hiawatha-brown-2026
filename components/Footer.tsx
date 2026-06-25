// components/Footer.tsx
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenPanel?: (key: 'about' | 'platform' | 'map' | 'get-involved') => void;
}

export default function Footer({ onOpenPanel }: FooterProps) {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 py-12 mt-auto text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Left Column: Campaign Branding Logo & Disclaimer */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#E8366A] text-white font-black text-sm px-2.5 py-1 rounded-md tracking-wider shadow-sm">
                HB
              </span>
              <span className="font-bold tracking-tight text-white/90 text-sm">
                Hiawatha Brown for City Council
              </span>
            </div>
            
            <div className="inline-block border border-white/10 px-4 py-2 bg-white/5 rounded-xl">
              <p className="text-[10px] uppercase tracking-widest text-white/40 text-center font-bold">
                Paid for by Friends of Hiawatha Brown for City Council
              </p>
            </div>
          </div>

          {/* Right Column: Clean, Uncluttered Campaign Links */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 md:justify-items-end w-full pt-2">
            
            {/* Link Block 1: District Boundaries */}
            <div className="space-y-1.5 text-left md:text-right">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8366A]">Boundaries</h4>
              <button 
                onClick={() => onOpenPanel?.('map')}
                className="text-sm text-white/60 hover:text-[#FBBC04] transition-colors inline-flex items-center gap-1 group text-left md:text-right"
              >
                District 1 Map
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Link Block 2: Voter Registration Verification */}
            <div className="space-y-1.5 text-left md:text-right">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">Voter Tools</h4>
              <a 
                href="https://wttv.govotetn.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
              >
                Register to Vote
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Link Block 3: Social Outreach Hub */}
            <div className="space-y-1.5 text-left md:text-right">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400">Updates</h4>
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
              >
                Official Facebook
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Footer Sub-Attribution Metadata Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-[11px] font-medium">
          <p>&copy; 2026 Hiawatha Brown Campaign. All Rights Reserved.</p>
          <p className="tracking-wide text-white/20">Cleveland, TN &middot; District 1</p>
        </div>

      </div>
    </footer>
  );
}