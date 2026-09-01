import React, { useState } from 'react';
import { Layers, Lightbulb, Sun, Info } from 'lucide-react';
import { LIGHTING_PRESETS } from '../data/mockData';
import { LightingPreset } from '../types';
import { soundManager } from '../utils/audio';

export const LightingStudioSimulator: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<LightingPreset>(LIGHTING_PRESETS[0]);

  const handleSelectPreset = (preset: LightingPreset) => {
    soundManager.playShutterSound();
    setSelectedPreset(preset);
  };

  return (
    <section id="lighting-simulator" className="py-24 relative bg-[#08090c] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121319] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Proprietary Studio Physics</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            INTERACTIVE <span className="text-gold-gradient">LIGHTING LAB</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            Understand the exact mathematical lighting ratios and modifier geometry behind million-dollar commercial covers.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {LIGHTING_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                selectedPreset.id === preset.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black shadow-lg shadow-[#d4af37]/25 font-bold'
                  : 'bg-[#121319] text-neutral-300 hover:text-white border border-neutral-800 hover:border-[#d4af37]/40'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{preset.name.split('/')[0]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Lab Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Studio Schematic Blueprint */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#d4af37]/30">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#f3e5ab] font-bold">
                    Top-Down Studio Floor Blueprint
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30">
                  {selectedPreset.ratio}
                </span>
              </div>

              {/* 2D Studio Diagram Stage */}
              <div className="relative aspect-[16/10] w-full bg-[#050608] rounded-xl border border-neutral-800 p-6 flex items-center justify-center overflow-hidden">
                
                {/* Backdrop Seamless Curve */}
                <div className="absolute top-4 left-8 right-8 h-4 rounded-t-full bg-neutral-800/80 border-t-2 border-[#d4af37]/40 flex items-center justify-center">
                  <span className="text-[9px] font-mono text-neutral-400 -top-5 relative">
                    OBSIDIAN SEAMLESS BACKDROP
                  </span>
                </div>

                {/* Background / Halo Light Indicator */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-[9px] text-amber-300 font-bold">
                    BG
                  </div>
                  <span className="text-[8px] font-mono text-neutral-400 mt-1">Glow</span>
                </div>

                {/* Left / Right Rim Strobes */}
                <div className="absolute top-20 left-12 flex items-center gap-1">
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 border border-blue-400 flex items-center justify-center text-[8px] text-blue-300 font-bold">
                    R1
                  </div>
                  <span className="text-[8px] font-mono text-neutral-400">Rim 45°</span>
                </div>

                <div className="absolute top-20 right-12 flex items-center gap-1">
                  <span className="text-[8px] font-mono text-neutral-400">Rim 45°</span>
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 border border-blue-400 flex items-center justify-center text-[8px] text-blue-300 font-bold">
                    R2
                  </div>
                </div>

                {/* Center Model Subject */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#554005] p-[2px] shadow-lg shadow-[#d4af37]/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#121319] flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] font-bold text-white font-cinzel">MODEL</span>
                      <span className="text-[8px] text-[#d4af37]">Face</span>
                    </div>
                  </div>
                  <div className="w-0.5 h-6 bg-[#d4af37]/40 mt-1" />
                </div>

                {/* Fill Light / Reflector Position */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-20 h-2 bg-neutral-600 rounded-full border border-neutral-400" />
                  <span className="text-[8px] font-mono text-neutral-400 mt-0.5">Silver Reflector / Fill</span>
                </div>

                {/* Key Light Position (Paramount / Angle) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-lg shadow-[#d4af37]/30">
                    <Sun className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-[9px] font-mono text-[#f3e5ab] font-bold mt-1">
                    KEY LIGHT (Octa/Dish)
                  </span>
                </div>

                {/* Camera Rig Position */}
                <div className="absolute bottom-2 right-8 flex items-center gap-1">
                  <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-600 flex items-center justify-center text-[9px] text-white">
                    📷
                  </div>
                  <span className="text-[8px] font-mono text-neutral-400">100MP Cam</span>
                </div>

              </div>
            </div>

            {/* Gear & Position Breakdown Checklist */}
            <div className="mt-6 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-cinzel">
                Lighting Modifier Specifications:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#08090c] border border-neutral-800">
                  <span className="text-[10px] font-mono text-[#d4af37] block uppercase font-bold">Key Light</span>
                  <span className="text-neutral-300 font-medium">{selectedPreset.keyLight}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#08090c] border border-neutral-800">
                  <span className="text-[10px] font-mono text-[#d4af37] block uppercase font-bold">Fill / Bounce</span>
                  <span className="text-neutral-300 font-medium">{selectedPreset.fillLight}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#08090c] border border-neutral-800">
                  <span className="text-[10px] font-mono text-[#d4af37] block uppercase font-bold">Rim / Hair Edge</span>
                  <span className="text-neutral-300 font-medium">{selectedPreset.rimLight}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#08090c] border border-neutral-800">
                  <span className="text-[10px] font-mono text-[#d4af37] block uppercase font-bold">Background Tone</span>
                  <span className="text-neutral-300 font-medium">{selectedPreset.backgroundLight}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Visual Result & Educational Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Real Rendered Output Preview */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl relative">
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img
                  src={selectedPreset.imageUrl}
                  alt={selectedPreset.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#d4af37] text-black font-bold">
                    {selectedPreset.type}
                  </span>
                  <h4 className="font-cinzel text-xl font-bold text-white">
                    {selectedPreset.name}
                  </h4>
                </div>
              </div>
            </div>

            {/* Why this lighting creates million-dollar value */}
            <div className="glass-panel p-6 rounded-2xl border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                <Info className="w-4 h-4" />
                <span>Commercial Advantage:</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {selectedPreset.description}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 font-mono border-t border-neutral-800">
                <span>Best For:</span>
                <span className="text-[#f3e5ab] font-medium">{selectedPreset.bestFor}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
