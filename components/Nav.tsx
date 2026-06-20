"use client";

import { Menu, X, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "District Map", href: "#district-map" },
  { label: "Updates", href: "#updates" },
  {
    label: "Register to Vote",
    href: "https://ovr.govote.tn.gov/",
    external: true,
  },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={ `sticky top-0 z-50 bg-gray-700/90 py-3 shadow-lg" }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-[#e91e63] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
            HB
          </div>
          <div className="hidden sm:block">
            <div className="text-med font-bold text-white/90 leading-tight">
              <p>District 1</p>
              <div className="border-b border-[#e91e63] my-0.25" />
              <p>City Council</p>
            </div>
          </div>
        </a>

        {/* Desktop Links (optically centered) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-10 font-medium text-sm text-gray-100">
            {navLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                className="relative group flex items-center gap-1"
              >
                <span className="transition-colors group-hover:text-[#e91e63]">
                  {label}
                </span>

                {external && (
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover:text-[#e91e63]" />
                )}

                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e91e63] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <a
          href="#get-involved"
          className="hidden md:block bg-[#e91e63] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c2185b] transition-all hover:scale-[1.05] active:scale-95"
        >
          Get Involved
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-100" />
          ) : (
            <Menu className="w-6 h-6 text-gray-100" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-700/30 bg-gray-900/95 backdrop-blur-md animate-fadeIn">
          <div className="flex flex-col px-6 py-5 space-y-2">

            {navLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4 text-gray-100 font-medium hover:text-[#e91e63] border-b border-gray-700/30 last:border-0 flex items-center gap-2"
              >
                {label}
                {external && (
                  <ExternalLink className="w-4 h-4 opacity-70" />
                )}
              </a>
            ))}

            <a
              href="#get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-[#e91e63] text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-[#c2185b] transition-colors hover:scale-[1.03] active:scale-95"
            >
              Get Involved
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
