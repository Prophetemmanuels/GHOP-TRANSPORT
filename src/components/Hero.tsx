import React, { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  Award, 
  ArrowRight, 
  ChevronRight, 
  Eye,
  Share2
} from 'lucide-react';
import { BrandMode } from '../types';
import { STUDIO_STATS } from '../data/mockData';
import { soundManager } from '../utils/audio';

interface HeroProps {
  brandMode: BrandMode;
  onOpenBooking: () => void;
  onOpenAcademy: () => void;
}

const HERO_SLIDES = [
  {
    id: 'zambian-bridal',
    category: 'Royal White Weddings & Chilanga Mulilo',
    title: 'Immortalize Your Royal Zambian Legacy.',
    subtitle: 'From Lusaka Grand Ballrooms to Victoria Falls Sunsets & 18-Hour Melanin Glam',
    image: 'https://images.pexels.com/photos/32551069/pexels-photo-32551069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    tag: 'Zambia’s #1 Bridal Production',
    quote: '“GHOP captured our wedding like an African royalty Vogue cover.” — BellaNaija Weddings'
  },
  {
    id: 'melanin-makeup',
    category: 'Haute Melanin Makeup Artistry',
    title: '18-Hour Cry-Proof Golden Melanin Dew.',
    subtitle: 'Zero Ashiness, Zero Flashback, Cryo-Sculpted Cheekbones & Siren Eyes',
    image: 'https://images.pexels.com/photos/23158341/pexels-photo-23158341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    tag: 'Tear-Proof 18H Formula',
    quote: '“The ultimate benchmark in celebrity red carpet skin chemistry.” — African Bride'
  },
  {
    id: 'traditional-heritage',
    category: 'Chilanga Mulilo & Kitchen Parties',
    title: 'Traditional African Splendor & Culture.',
    subtitle: 'High-Speed Flash Synchronization for High-Energy Traditional Entry & Chitenge Elegance',
    image: 'https://images.pexels.com/photos/29046520/pexels-photo-29046520.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    tag: 'Hand-Bound Italian Leather Albums',
    quote: '“Capturing Zambian cultural heritage with breathtaking modern prestige.” — Vogue Africa'
  },
  {
    id: 'commercial-editorial',
    category: 'High-Fashion & Commercial Campaigns',
    title: '150MP Precision That Commands Global Stature.',
    subtitle: '150MP Phase One Medium Format, Commercial Billboard Licensing & Complete Art Direction',
    image: 'https://images.pexels.com/photos/19831081/pexels-photo-19831081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    tag: '100MP Hasselblad Clarity',
    quote: '“Over K4.8M campaign value generated for luxury brands.” — African Business'
  }
];

export const Hero: React.FC<HeroProps> = ({
  brandMode,
  onOpenBooking,
  onOpenAcademy
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const current = HERO_SLIDES[activeSlide];

  const handleSlideChange = (index: number) => {
    soundManager.playShutterSound();
    setActiveSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      
      {/* Background Image with Cinematic Overlay */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1.2s' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-gradient luxury overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/75 to-[#08090c]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08090c]/50 to-[#08090c]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/90 via-[#08090c]/40 to-transparent" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Headline & CTAs */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Top Luxury Credential Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121319]/90 border border-[#d4af37]/30 shadow-lg shadow-black backdrop-blur-md">
              <Crown className="w-4 h-4 text-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#f3e5ab]">
                GHOP ZAMBIA • THE MILLION-DOLLAR STANDARD
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <a
                href="https://web.facebook.com/GHOPzambia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[10px] text-[#1877F2] font-mono hover:underline flex items-center gap-1"
              >
                <span>fb.com/GHOPzambia</span>
              </a>
            </div>

            {/* Dynamic Title */}
            <div className="space-y-2">
              <h1 className="font-cinzel text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                {brandMode === 'photography' ? (
                  <>
                    CAPTURING <span className="text-gold-gradient block">IMMORTAL</span> AFRICAN ROYALTY
                  </>
                ) : brandMode === 'makeup' ? (
                  <>
                    18-HOUR <span className="text-gold-gradient block">GOLDEN MELANIN</span> GLAMOUR
                  </>
                ) : (
                  <>
                    WHERE AFRICAN ROYALTY <span className="text-gold-gradient block">BECOMES IMMORTAL</span>
                  </>
                )}
              </h1>
              <p className="font-cormorant text-xl sm:text-2xl lg:text-3xl italic text-[#f3e5ab]/90 font-light max-w-2xl">
                {current.subtitle}
              </p>
            </div>

            {/* Sub-description */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              GHOP Photography & GHOP Makeup combine 150MP medium-format precision, master studio lighting physics, and red-carpet bridal cosmetics for Chilanga Mulilo, grand royal weddings, and commercial campaigns across Zambia and worldwide.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  soundManager.playShutterSound();
                  onOpenBooking();
                }}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a] text-black font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl shadow-[#d4af37]/25 hover:shadow-2xl hover:shadow-[#d4af37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer"
              >
                <span>Book Bespoke Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://web.facebook.com/GHOPzambia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playChime()}
                className="px-6 py-4 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/50 hover:bg-[#1877F2]/30 text-white text-xs sm:text-sm uppercase tracking-[0.18em] transition-all flex items-center gap-2.5 backdrop-blur-md cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#1877F2]" />
                <span>Visit @GHOPzambia Page</span>
              </a>

              <button
                onClick={() => {
                  soundManager.playChime();
                  onOpenAcademy();
                }}
                className="px-6 py-4 rounded-full bg-[#121319]/80 border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f3e5ab] hover:text-white text-xs sm:text-sm uppercase tracking-[0.18em] transition-all flex items-center gap-2.5 backdrop-blur-md cursor-pointer hover:bg-[#1a1c25]"
              >
                <Award className="w-4 h-4 text-[#d4af37]" />
                <span>$1M Studio Playbook</span>
              </button>
            </div>

            {/* Slide Navigation Switches */}
            <div className="pt-4 flex items-center space-x-3">
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono">Specialty:</span>
              <div className="flex flex-wrap items-center gap-2">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => handleSlideChange(idx)}
                    className={`text-xs px-3 py-1 rounded-md transition-all cursor-pointer ${
                      idx === activeSlide
                        ? 'bg-[#d4af37] text-black font-bold shadow-md shadow-[#d4af37]/20'
                        : 'bg-[#121319]/80 text-neutral-400 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {slide.category.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Floating Feature Card */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs uppercase tracking-widest text-[#f3e5ab] font-bold">
                    Featured Masterpiece
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                  {current.tag}
                </span>
              </div>

              <div className="py-4 space-y-2">
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                  {current.category}
                </p>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  {current.title}
                </h3>
                <p className="font-cormorant italic text-sm text-[#d4af37]">
                  {current.quote}
                </p>
              </div>

              {/* Quick interactive links inside card */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-800">
                <a
                  href="#lighting-simulator"
                  onClick={() => soundManager.playChime()}
                  className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-[#08090c] hover:bg-[#1a1c25] text-[11px] text-neutral-300 hover:text-[#d4af37] transition-all border border-neutral-800"
                >
                  <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Lighting Lab</span>
                </a>
                <a
                  href="#makeup-suite"
                  onClick={() => soundManager.playChime()}
                  className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-[#08090c] hover:bg-[#1a1c25] text-[11px] text-neutral-300 hover:text-[#d4af37] transition-all border border-neutral-800"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Melanin Glam</span>
                </a>
              </div>
            </div>

            {/* Quick Live Studio Availability Indicator */}
            <div className="bg-[#121319]/90 border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <p className="text-xs font-semibold text-white">Lusaka & Global Availability</p>
                  <p className="text-[11px] text-neutral-400 font-mono">Limited 2025–2026 Wedding Slots</p>
                </div>
              </div>
              <button
                onClick={() => {
                  soundManager.playShutterSound();
                  onOpenBooking();
                }}
                className="text-xs text-[#d4af37] hover:text-[#f3e5ab] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              >
                <span>Check</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-[#d4af37]/20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {STUDIO_STATS.totalRevenueGenerated}
            </span>
            <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Commercial & Bridal Value Delivered
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {STUDIO_STATS.editorialCampaigns}
            </span>
            <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Weddings & Campaigns Captured
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">
              18-Hour
            </span>
            <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Sweat & Cry-Proof Melanin Shield
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">
              150 Megapixels
            </span>
            <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
              Medium Format Clarity & Drone 4K
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
