// components/ContactCard.tsx
'use client';

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="card w-full text-left h-full">
      <div className="p-4 sm:p-5 flex flex-col h-full">
        {/* Header */}
        <div className="pb-3">
          <div className="card-header mx-2 flex items-center gap-3">
            <p className="card-title tracking-widest">
              Contact Us
            </p>
          </div>

          <div className="card-divider my-4 mx-2" />
        </div>

        {/* Contact Info - Left Aligned */}
        <div className="flex-1 mx-2 space-y-3 text-sm">
          <p className="flex items-center gap-3 text-white">
            <Phone className="w-4 h-4 text-[var(--primary-pink)] shrink-0" />
            <span>(423) 584-3335</span>
          </p>
          <p className="flex items-center gap-3 text-white">
            <Mail className="w-4 h-4 text-[var(--primary-pink)] shrink-0" />
            <span>hfbrown720@gmail.com</span>
          </p>
          <p className="flex items-center gap-3 text-white">
            <MapPin className="w-4 h-4 text-[var(--primary-pink)] shrink-0" />
            <span>PO Box 585, Cleveland, TN 37364</span>
          </p>
        </div>

        {/* Footer - Bottom Aligned, Center */}
        <div className="mt-auto pt-4">
          <div className="card-divider mx-2" />
          <p className="text-xs text-white/70 text-center mt-4 leading-relaxed">
            PAID FOR BY THE COMMITTEE TO ELECT HIAWATHA BROWN
          </p>
        </div>
      </div>
    </div>
  );
}