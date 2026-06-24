// app/(site)/layout.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#EEF1F5] flex flex-col">
      <header className="bg-[#1E2A38] px-6 py-4 flex items-center gap-4 shrink-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#8DA3B8] hover:text-[#E8366A] transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
        <div className="w-px h-4 bg-white/10" />
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#E8366A] rounded-full flex items-center justify-center text-white font-bold text-sm">
            HB
          </div>
          <span className="text-white/70 text-sm font-medium hidden sm:block">
            Hiawatha Brown · District 1
          </span>
        </Link>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#1E2A38] px-6 py-3 flex items-center justify-between shrink-0">
        <p className="text-white/30 text-xs">
          Paid for by Friends of Hiawatha Brown for City Council
        </p>
        <a
          href="https://ovr.govote.tn.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8DA3B8] text-xs hover:text-[#E8366A] transition-colors"
        >
          Register to Vote
        </a>
      </footer>
    </div>
  );
}