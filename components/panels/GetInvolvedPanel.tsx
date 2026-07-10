// components/panels/GetInvolvedPanel.tsx
'use client';

import { Users, Heart, Mail } from "lucide-react";

interface GetInvolvedCardProps {
  onOpenPanel?: (key: string) => void;
}

export default function GetInvolvedCard({ onOpenPanel }: GetInvolvedCardProps) {
  return (
    <div className="card w-full text-left cursor-pointer hover:scale-[1.01] transition-all" onClick={() => onOpenPanel?.('get-involved')}>
      <div className="fluid-pad fluid-stack">
        <div className="flex justify-between items-start">
          <div>
            <p className="card-label tracking-[0.25em]">JOIN THE MOVEMENT</p>
            <h2 className="fluid-title text-white">Get Involved</h2>
          </div>
        </div>

        <div className="pt-4 space-y-6">
          <div className="card-inner">
            <div className="card-icon mb-4">
              <Users className="w-6 h-6 text-[#E8366A]" />
            </div>
            <p className="card-label">Volunteer</p>
            <p className="card-body">Help with canvassing, events, and community outreach.</p>
          </div>

          <div className="card-inner">
            <div className="card-icon mb-4">
              <Heart className="w-6 h-6 text-[#E8366A]" />
            </div>
            <p className="card-label">Yard Signs & Support</p>
            <p className="card-body">Show your support and spread the word in your neighborhood.</p>
          </div>

          <div className="card-inner">
            <div className="card-icon mb-4">
              <Mail className="w-6 h-6 text-[#E8366A]" />
            </div>
            <p className="card-label">Stay Connected</p>
            <p className="card-body">Sign up for updates and District 1 news.</p>
          </div>
        </div>
      </div>
    </div>
  );
}