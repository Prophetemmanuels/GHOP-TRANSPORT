import React from 'react';
import { Camera, Sparkles, Crown, CheckCircle2, ArrowRight } from 'lucide-react';
import { BrandMode } from '../types';
import { soundManager } from '../utils/audio';

interface BrandSwitcherProps {
  brandMode: BrandMode;
  setBrandMode: (mode: BrandMode) => void;
  onOpenBooking: () => void;
}

export const BrandSwitcher: React.FC<BrandSwitcherProps> = ({
  brandMode,
  setBrandMode,
  onOpenBooking
}) => {
  return (
    <section className="py-20 relative bg-[#0b0c10] border-t border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121319] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
            <Crown className="w-3.5 h-3.5" />
            <span>Dual Pillar Luxury Ecosystem</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            THE GHOP <span className="text-gold-gradient">MASTERY</span> ECOSYSTEM
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            Why separate your visual capture from your glam architecture? Experience total creative synchronization.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Ghop Photography */}
          <div 
            onClick={() => {
              setBrandMode('photography');
              soundManager.playShutterSound();
            }}
            className={`glass-panel rounded-2xl p-8 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
              brandMode === 'photography'
                ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/10'
                : 'hover:border-[#d4af37]/50'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-[#1a1c25] border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Camera className="w-6 h-6 text-[#d4af37]" />
            </div>

            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-widest font-mono text-[#d4af37]">Pillar 01</span>
              <h3 className="font-cinzel text-2xl font-bold text-white">Ghop Photography</h3>
              <p className="text-sm text-neutral-400">
                150MP Phase One Medium Format, master chiaroscuro lighting, and commercial Vogue editorial framing.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-neutral-300 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Phase One IQ4 150MP & Hasselblad H6D Medium Format</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Custom Broncolor Para & Profoto Studio Lighting Physics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Handcrafted Florentine Leather Heirloom Albums</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Perpetual Commercial Billboard & Web Licensing</span>
              </li>
            </ul>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setBrandMode('photography');
                soundManager.playShutterSound();
              }}
              className={`w-full py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 ${
                brandMode === 'photography'
                  ? 'bg-[#d4af37] text-black shadow-md'
                  : 'bg-[#1a1c25] text-neutral-300 group-hover:text-white'
              }`}
            >
              <span>Explore Photography</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: The Integrated Empire (Hero Middle Card) */}
          <div 
            onClick={() => {
              setBrandMode('empire');
              soundManager.playChime(true);
            }}
            className={`glass-panel rounded-2xl p-8 cursor-pointer transition-all duration-300 relative overflow-hidden group lg:-translate-y-4 ${
              brandMode === 'empire'
                ? 'border-[#d4af37] ring-2 ring-[#d4af37]/50 shadow-2xl shadow-[#d4af37]/20 bg-[#121319]'
                : 'hover:border-[#d4af37]/50'
            }`}
          >
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#d4af37] to-[#aa820a] text-black text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-bl-xl">
              World-Class Synergy
            </div>

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa820a] p-[1px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#d4af37]/20">
              <div className="w-full h-full bg-[#08090c] rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-[#d4af37]" />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-widest font-mono text-[#f3e5ab]">Pillar 03 (Unified)</span>
              <h3 className="font-cinzel text-2xl font-bold text-white">The Ghop Empire</h3>
              <p className="text-sm text-neutral-300">
                The full turn-key visual production house where lighting and makeup are calibrated in exact harmony.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-neutral-200 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Zero On-Set Friction: Photographer & Glam team synchronized</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Calibrated Skin Profiles: Foundation matched to flash color temps</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Dedicated Production Producer & 24/7 VIP Concierge</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Highest Client ROI: Saves 40% time on shoot day</span>
              </li>
            </ul>

            <button
              onClick={(e) => {
                e.stopPropagation();
                soundManager.playShutterSound();
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a] text-black text-xs uppercase tracking-widest font-bold shadow-lg shadow-[#d4af37]/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Full Empire Experience</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Ghop Makeup Artistry */}
          <div 
            onClick={() => {
              setBrandMode('makeup');
              soundManager.playChime();
            }}
            className={`glass-panel rounded-2xl p-8 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
              brandMode === 'makeup'
                ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/10'
                : 'hover:border-[#d4af37]/50'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-[#1a1c25] border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-[#d4af37]" />
            </div>

            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-widest font-mono text-[#d4af37]">Pillar 02</span>
              <h3 className="font-cinzel text-2xl font-bold text-white">Ghop Makeup Artistry</h3>
              <p className="text-sm text-neutral-400">
                Celebrity red-carpet glam, 18-hour royal bridal formulas, and camera-ready micro-silicone skin prep.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-neutral-300 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Proprietary 18-Hour Tear & Sweat-Proof Royal Bridal Shield</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Cryo-Sculpting & Lymphatic Drainage Skin Preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Zero Flashback Micro-Powder Camera Formulations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>On-Set Master Touch-Up Stylist Included</span>
              </li>
            </ul>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setBrandMode('makeup');
                soundManager.playChime();
              }}
              className={`w-full py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 ${
                brandMode === 'makeup'
                  ? 'bg-[#d4af37] text-black shadow-md'
                  : 'bg-[#1a1c25] text-neutral-300 group-hover:text-white'
              }`}
            >
              <span>Explore Makeup Artistry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
