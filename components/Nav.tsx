"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">
            HB
          </div>
          <div>
            <div className="font-semibold text-xl tracking-tight">Hiawatha Brown</div>
            <div className="text-sm text-gray-600 -mt-1">Cleveland City Council • District 1</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#about" className="hover:text-[#e91e63] transition-colors">About</a>
          <a href="#platform" className="hover:text-[#e91e63] transition-colors">Platform</a>
          <a href="#events" className="hover:text-[#e91e63] transition-colors">Events</a>
          <a href="#get-involved" className="hover:text-[#e91e63] transition-colors">Get Involved</a>
          <a href="https://www.facebook.com/profile.php?id=61567583096946" target="_blank" className="text-[#e91e63] hover:underline font-medium">Facebook</a>
        </div>

        <a href="#get-involved" className="hidden md:block bg-[#e91e63] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c2185b] transition-all active:scale-95">
          Join Us
        </a>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-2xl">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-6 space-y-4 font-medium">
            <a href="#about" className="hover:text-[#e91e63]">About</a>
            <a href="#platform" className="hover:text-[#e91e63]">Platform</a>
            <a href="#events" className="hover:text-[#e91e63]">Events</a>
            <a href="#get-involved" className="hover:text-[#e91e63]">Get Involved</a>
            <a href="https://www.facebook.com/profile.php?id=61567583096946" target="_blank" className="text-[#e91e63]">Facebook</a>
            <a href="#get-involved" className="bg-[#e91e63] text-white px-6 py-3 rounded-full text-center font-semibold">Join Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
