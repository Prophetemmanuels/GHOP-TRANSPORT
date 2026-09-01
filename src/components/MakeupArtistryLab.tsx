import React, { useState } from 'react';
import { Sparkles, Palette, Check, Heart, Shield, RefreshCw } from 'lucide-react';
import { MAKEUP_LOOKS } from '../data/mockData';
import { MakeupLook } from '../types';
import { soundManager } from '../utils/audio';

interface MakeupArtistryLabProps {
  onOpenBooking: () => void;
}

const SKIN_TONES = [
  { id: 'fair', label: 'Porcelain Fair', color: '#f8dcd0', undertone: 'Cool Rose / Neutral' },
  { id: 'medium', label: 'Warm Honey', color: '#d8aa83', undertone: 'Warm Golden' },
  { id: 'olive', label: 'Golden Olive', color: '#b98c63', undertone: 'Olive Bronze' },
  { id: 'deep', label: 'Rich Espresso', color: '#68452e', undertone: 'Deep Neutral Warm' },
];

const LIP_FINISHES = [
  { id: 'nude', label: 'Cashmere Nude Satin', hex: '#b3786c', vibe: 'Understated Luxury' },
  { id: 'ruby', label: 'Bespoke Crimson Noir', hex: '#88081f', vibe: 'Old Hollywood Power' },
  { id: 'peach', label: 'Gilded Peach Glaze', hex: '#cf7d61', vibe: 'Sun-Kissed Dew' },
  { id: 'berry', label: 'Velvet Blackberry', hex: '#4f1a2e', vibe: 'Met Gala Drama' },
];

export const MakeupArtistryLab: React.FC<MakeupArtistryLabProps> = ({ onOpenBooking }) => {
  const [selectedLook, setSelectedLook] = useState<MakeupLook>(MAKEUP_LOOKS[0]);
  const [selectedSkinTone, setSelectedSkinTone] = useState(SKIN_TONES[1]);
  const [selectedLip, setSelectedLip] = useState(LIP_FINISHES[0]);

  const handleSelectLook = (look: MakeupLook) => {
    soundManager.playChime();
    setSelectedLook(look);
  };

  return (
    <section id="makeup-suite" className="py-24 relative bg-[#0b0c10] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121319] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Haute Cosmetics Studio</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            GHOP <span className="text-gold-gradient">MAKEUP ARTISTRY</span> LAB
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            Zero flashback under 150MP strobe flash. Formulated with dermatological peptides and 18-hour stay-proof technology.
          </p>
        </div>

        {/* Master Lookbook Switchers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {MAKEUP_LOOKS.map((look) => (
            <div
              key={look.id}
              onClick={() => handleSelectLook(look)}
              className={`glass-panel p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                selectedLook.id === look.id
                  ? 'border-[#d4af37] ring-1 ring-[#d4af37]/50 bg-[#161720] shadow-xl shadow-[#d4af37]/10'
                  : 'border-neutral-800 hover:border-[#d4af37]/40'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 relative">
                <img
                  src={look.imageUrl}
                  alt={look.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-black/50"
                    style={{ backgroundColor: look.paletteColors.lip }}
                  />
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-black/50"
                    style={{ backgroundColor: look.paletteColors.highlight }}
                  />
                </div>
              </div>
              <h4 className="font-cinzel text-xs sm:text-sm font-bold text-white line-clamp-1">
                {look.name}
              </h4>
              <p className="text-[11px] text-[#d4af37] font-mono mt-0.5">
                {look.vibe}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Look Customizer + Step-by-Step Formula */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Swatch Builder */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#f3e5ab] font-bold">
                  Bespoke Formula Configurator
                </span>
              </div>
              <button
                onClick={() => {
                  setSelectedSkinTone(SKIN_TONES[0]);
                  setSelectedLip(LIP_FINISHES[0]);
                  soundManager.playChime();
                }}
                className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* 1. Skin Complexion Undertone */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono tracking-wider text-neutral-300 block">
                1. Complexion Foundation Match
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SKIN_TONES.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => {
                      setSelectedSkinTone(tone);
                      soundManager.playChime();
                    }}
                    className={`p-2.5 rounded-lg border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      selectedSkinTone.id === tone.id
                        ? 'border-[#d4af37] bg-[#1a1c25] ring-1 ring-[#d4af37]'
                        : 'border-neutral-800 bg-[#0e0f15] hover:border-neutral-700'
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-full border border-black/40 shrink-0 shadow-sm"
                      style={{ backgroundColor: tone.color }}
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">{tone.label}</span>
                      <span className="text-[9px] text-neutral-400 block font-mono">{tone.undertone}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Lip Shade & Texture */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono tracking-wider text-neutral-300 block">
                2. Signature Lip Formulation
              </label>
              <div className="grid grid-cols-2 gap-2">
                {LIP_FINISHES.map((lip) => (
                  <button
                    key={lip.id}
                    onClick={() => {
                      setSelectedLip(lip);
                      soundManager.playChime();
                    }}
                    className={`p-2.5 rounded-lg border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      selectedLip.id === lip.id
                        ? 'border-[#d4af37] bg-[#1a1c25] ring-1 ring-[#d4af37]'
                        : 'border-neutral-800 bg-[#0e0f15] hover:border-neutral-700'
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-full border border-black/40 shrink-0 shadow-sm"
                      style={{ backgroundColor: lip.hex }}
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">{lip.label}</span>
                      <span className="text-[9px] text-neutral-400 block font-mono">{lip.vibe}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Guaranteed Specifications */}
            <div className="pt-4 border-t border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <Shield className="w-4 h-4 text-[#d4af37]" />
                <span>100% Zero-Flashback Guarantee under Flash Strobes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <Heart className="w-4 h-4 text-[#d4af37]" />
                <span>Non-comedogenic, cruelty-free, luxury skincare base</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playShutterSound();
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a] text-black font-bold text-xs uppercase tracking-widest hover:shadow-xl transition-all cursor-pointer"
            >
              Book This Custom Glam Look
            </button>

          </div>

          {/* Right Column: Complete Application Master Recipe */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 space-y-6">
            
            <div className="space-y-2 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#d4af37]/20 text-[#f3e5ab] border border-[#d4af37]/30 uppercase font-bold">
                  {selectedLook.styleCategory} Protocol
                </span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                {selectedLook.name}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {selectedLook.description}
              </p>
            </div>

            {/* Step-by-Step Application Roadmap */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold">
                Application Master Protocol:
              </h4>
              <div className="space-y-2.5">
                {selectedLook.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#0e0f15] border border-neutral-800">
                    <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Used in Kit */}
            <div className="pt-4 border-t border-neutral-800 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold">
                Official Studio Kit Formulation:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedLook.productsUsed.map((prod, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-3 py-1 rounded-md bg-[#161720] border border-[#d4af37]/20 text-neutral-200 flex items-center gap-1.5"
                  >
                    <Check className="w-3 h-3 text-[#d4af37]" />
                    {prod}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
