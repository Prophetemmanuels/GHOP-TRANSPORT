import React, { useState } from 'react';
import { 
  Camera, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sliders, 
  MapPin, 
  Calendar, 
  Share2, 
  Maximize2
} from 'lucide-react';
import { PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { soundManager } from '../utils/audio';

interface PortfolioSectionProps {
  onOpenBooking: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<'exif' | 'makeup'>('exif');

  const categories = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'bridal', label: 'Royal White Weddings' },
    { id: 'traditional', label: 'Chilanga Mulilo & Traditional' },
    { id: 'makeup', label: 'Haute Melanin Glam' },
    { id: 'fashion', label: 'Editorial Fashion' },
    { id: 'commercial', label: 'Commercial & Jewelry' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenItem = (item: PortfolioItem) => {
    soundManager.playShutterSound();
    setActiveItem(item);
    setActiveTab(item.makeupDetails ? 'makeup' : 'exif');
  };

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex(i => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    soundManager.playShutterSound();
    setActiveItem(PORTFOLIO_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex(i => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    soundManager.playShutterSound();
    setActiveItem(PORTFOLIO_ITEMS[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-24 relative bg-[#08090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              <Camera className="w-3.5 h-3.5" />
              <span>GHOP Zambia Master Curation</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white tracking-tight">
              MASTER <span className="text-gold-gradient">PORTFOLIO</span>
            </h2>
            <p className="font-cormorant text-lg text-neutral-400 italic max-w-xl">
              From grand Zambian ballrooms and Chilanga Mulilo feasts to 150MP commercial covers. Click any piece to inspect camera EXIF and melanin makeup formulations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  soundManager.playChime();
                }}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black shadow-lg shadow-[#d4af37]/20 font-bold'
                    : 'bg-[#121319] text-neutral-400 hover:text-white border border-neutral-800 hover:border-[#d4af37]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenItem(item)}
              className="group relative rounded-xl overflow-hidden bg-[#121319] border border-[#d4af37]/15 hover:border-[#d4af37]/60 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#f3e5ab] border border-[#d4af37]/30">
                    {item.ceremonyType || item.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5 transform transition-transform">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
                    {item.client}
                  </p>
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  
                  {item.featuredIn && (
                    <p className="text-[11px] font-cormorant italic text-neutral-300">
                      As seen in {item.featuredIn}
                    </p>
                  )}

                  <div className="pt-2 flex items-center gap-3 text-[10px] text-neutral-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Camera className="w-3 h-3 text-[#d4af37]" />
                      EXIF Data
                    </span>
                    {item.makeupDetails && (
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#d4af37]" />
                        Melanin Spec
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-6 rounded-2xl bg-[#121319] border border-[#d4af37]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-cinzel">Planning a Traditional Chilanga Mulilo or Royal Wedding?</h4>
              <p className="text-xs text-neutral-400">Our creative directors build custom multi-day schedules, lighting setups, and glam squads for Zambian celebrations.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://web.facebook.com/GHOPzambia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/40 text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#1877F2]/30 transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Facebook Page</span>
            </a>
            <button
              onClick={() => {
                soundManager.playShutterSound();
                onOpenBooking();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all shrink-0 cursor-pointer"
            >
              Request Date Quote
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal with EXIF & Makeup Breakdown */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative max-w-5xl w-full bg-[#0e0f15] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => {
                soundManager.playChime();
                setActiveItem(null);
              }}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-neutral-300 hover:text-white border border-[#d4af37]/30 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Viewport */}
            <div className="md:w-1/2 bg-black flex items-center justify-center relative overflow-hidden group min-h-[350px]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-contain max-h-[85vh]"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Data Inspector */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
              
              <div className="space-y-5">
                
                {/* Meta header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase">
                    <span>{activeItem.ceremonyType || activeItem.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {activeItem.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {activeItem.year}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono">
                    Client: <span className="text-neutral-200">{activeItem.client}</span>
                  </p>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {activeItem.description}
                </p>

                {activeItem.featuredIn && (
                  <div className="p-3 rounded-lg bg-[#161720] border border-[#d4af37]/20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-[#d4af37]" />
                      <span className="text-neutral-300 font-medium">Editorial Feature:</span>
                      <span className="text-[#f3e5ab] font-bold">{activeItem.featuredIn}</span>
                    </div>
                    <a
                      href="https://web.facebook.com/GHOPzambia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#1877F2] font-mono hover:underline"
                    >
                      @GHOPzambia
                    </a>
                  </div>
                )}

                {/* Tab Switcher: EXIF vs Makeup */}
                <div className="flex border-b border-neutral-800 gap-4">
                  <button
                    onClick={() => {
                      setActiveTab('exif');
                      soundManager.playChime();
                    }}
                    className={`pb-2 text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === 'exif'
                        ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                        : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Camera & Lighting EXIF</span>
                  </button>

                  {activeItem.makeupDetails && (
                    <button
                      onClick={() => {
                        setActiveTab('makeup');
                        soundManager.playChime();
                      }}
                      className={`pb-2 text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        activeTab === 'makeup'
                          ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                          : 'text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Melanin Makeup Spec</span>
                    </button>
                  )}
                </div>

                {/* Tab Content 1: Camera & Lighting */}
                {activeTab === 'exif' && (
                  <div className="space-y-3 bg-[#121319] p-4 rounded-xl border border-neutral-800 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-neutral-500 block">Camera System</span>
                        <span className="font-semibold text-neutral-200">{activeItem.exif.camera}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-neutral-500 block">Lens</span>
                        <span className="font-semibold text-neutral-200">{activeItem.exif.lens}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-neutral-500 block">Aperture & Shutter</span>
                        <span className="font-semibold text-neutral-200">{activeItem.exif.aperture} | {activeItem.exif.shutter}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-neutral-500 block">ISO Sensitivity</span>
                        <span className="font-semibold text-neutral-200">ISO {activeItem.exif.iso}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-neutral-800">
                      <span className="text-[10px] uppercase font-mono text-[#d4af37] block">Studio / Outdoor Lighting Modifiers</span>
                      <span className="text-neutral-300">{activeItem.exif.lighting}</span>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: Makeup Formulation */}
                {activeTab === 'makeup' && activeItem.makeupDetails && (
                  <div className="space-y-3 bg-[#121319] p-4 rounded-xl border border-neutral-800 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-neutral-500 block">Pre-Makeup Skin Therapy</span>
                      <span className="text-neutral-200 font-medium">{activeItem.makeupDetails.skinPrep}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-neutral-500 block">Melanin Foundation & Complexion</span>
                      <span className="text-neutral-200 font-medium">{activeItem.makeupDetails.foundation}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-neutral-500 block">Eye & Brow Definition</span>
                      <span className="text-neutral-200 font-medium">{activeItem.makeupDetails.eyes}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-neutral-500 block">Lip Formulation & Contour</span>
                      <span className="text-neutral-200 font-medium">{activeItem.makeupDetails.lips}</span>
                    </div>
                    <div className="pt-2 border-t border-neutral-800 flex justify-between items-center">
                      <span className="text-[10px] uppercase font-mono text-[#d4af37]">Lead Glam Artistry:</span>
                      <span className="text-neutral-300 font-semibold">{activeItem.makeupDetails.leadArtist}</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Bottom CTA */}
              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between gap-4 mt-6">
                <button
                  onClick={() => {
                    soundManager.playShutterSound();
                    setActiveItem(null);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-bold text-xs uppercase tracking-widest text-center shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Book This Exact Aesthetic
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
