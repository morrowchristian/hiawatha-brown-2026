// components/PanelSystem.tsx
'use client';
import About from './panels/AboutPanel';
import Platform from './panels/PlatformPanel';
import DistrictMap from './panels/DistrictPanel';
import GetInvolved from './panels/GetInvolvedPanel';

type PanelKey = 'about' | 'platform' | 'map' | 'get-involved';

const panelComponents: Record<PanelKey, React.ComponentType<{ onClose: () => void }>> = {
  about: About,
  platform: Platform,
  map: DistrictMap,
  'get-involved': GetInvolved,
};

interface PanelSystemProps {
  activePanel: PanelKey | null;
  onClose: () => void;
}

export default function PanelSystem({ activePanel, onClose }: PanelSystemProps) {
  const ActiveComponent = activePanel ? panelComponents[activePanel] : null;
  const labels: Record<PanelKey, string> = {
    about: 'Meet Hiawatha',
    platform: 'The Platform',
    map: 'District 1 Map',
    'get-involved': 'Join the Movement',
  };
  const activeLabel = activePanel ? labels[activePanel] : '';

  if (!activePanel || !ActiveComponent) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col text-slate-800">
        <header className="px-6 py-4 border-b flex items-center justify-between bg-slate-50">
          <h2 className="text-xl font-bold text-slate-800">{activeLabel}</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors text-sm font-medium"
          >
            Close (ESC)
          </button>
        </header>
        <div className="flex-1 overflow-y-auto text-slate-700">
          <ActiveComponent onClose={onClose} />
        </div>
      </div>
    </div>
  );
}