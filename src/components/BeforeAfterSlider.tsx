import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Camera, Sliders, CheckCircle } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeMode, setActiveMode] = useState<'photo' | 'makeup'>('photo');
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const photoComparison = {
    title: 'Editorial Photography: RAW Medium Format vs Master Fine-Art Retouch',
    subtitle: 'Preserving 100% natural pore texture with micro-dodge & burn rather than plastic blur filters',
    beforeImg: 'https://images.pexels.com/photos/19222069/pexels-photo-19222069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    afterImg: 'https://images.pexels.com/photos/19222075/pexels-photo-19222075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    beforeLabel: 'RAW Sensor Capture',
    afterLabel: 'Ghop Master Vogue Retouch',
    highlights: [
      'Micro Dodge & Burn local contrast sculpting',
      'Hasselblad 16-Bit color matrix skin calibration',
      'Architectural shadow roll-off & velvet black depth'
    ]
  };

  const makeupComparison = {
    title: 'Haute Makeup: Natural Pre-Glam vs 18-Hour Royal Monaco Glamour',
    subtitle: 'Zero-flashback micro-silicone base with cryo-sculpted cheekbones & dimensional lip contour',
    beforeImg: 'https://images.pexels.com/photos/5432912/pexels-photo-5432912.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    afterImg: 'https://images.pexels.com/photos/6651665/pexels-photo-6651665.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    beforeLabel: 'Pre-Glam Clean Skin',
    afterLabel: 'Ghop 18H Royal Signature Glam',
    highlights: [
      'Cryo ice-globe lymphatic drainage base',
      '18-Hour transfer-resistant film barrier',
      'Pat McGrath celestial multi-chrome shimmer'
    ]
  };

  const current = activeMode === 'photo' ? photoComparison : makeupComparison;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 relative bg-[#0b0c10] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121319] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Quality Benchmark</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            THE ART OF <span className="text-gold-gradient">TRANSFORMATION</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            Drag the slider to witness how Ghop artistry elevates raw reality into high-fashion immortality.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 rounded-full bg-[#121319] border border-[#d4af37]/25 shadow-lg mt-4">
            <button
              onClick={() => {
                setActiveMode('photo');
                soundManager.playShutterSound();
              }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeMode === 'photo'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Photography & Retouching</span>
            </button>
            <button
              onClick={() => {
                setActiveMode('makeup');
                soundManager.playChime();
              }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeMode === 'makeup'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Makeup Artistry Transformation</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Viewport */}
        <div className="max-w-4xl mx-auto">
          
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/30 select-none cursor-ew-resize bg-black"
          >
            {/* After Image (Base Layer - Full View) */}
            <img
              src={current.afterImg}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-semibold uppercase tracking-wider shadow-lg">
              {current.afterLabel}
            </div>

            {/* Before Image (Clipped Overlay Layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={current.beforeImg}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                  height: containerRef.current ? `${containerRef.current.offsetHeight}px` : '100%'
                }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-700 text-neutral-300 text-xs font-semibold uppercase tracking-wider shadow-lg">
                {current.beforeLabel}
              </div>
            </div>

            {/* Slider Dividing Line & Luxury Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[2px] bg-gradient-to-b from-[#f3e5ab] via-[#d4af37] to-[#aa820a] pointer-events-none shadow-[0_0_15px_rgba(212,175,55,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#08090c] border-2 border-[#d4af37] shadow-xl flex items-center justify-center text-[#d4af37]">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>

          </div>

          {/* Highlights & Features Breakdown */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {current.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl flex items-start gap-3 border border-neutral-800"
              >
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-300 font-medium">{highlight}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
