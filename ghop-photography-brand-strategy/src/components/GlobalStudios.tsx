import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, CheckCircle, ChevronRight, Building, Share2, MessageCircle } from 'lucide-react';
import { STUDIO_LOCATIONS } from '../data/mockData';
import { soundManager } from '../utils/audio';

interface GlobalStudiosProps {
  onOpenBooking: () => void;
}

export const GlobalStudios: React.FC<GlobalStudiosProps> = ({ onOpenBooking }) => {
  const [selectedLocation, setSelectedLocation] = useState(STUDIO_LOCATIONS[0]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCityTime = (timezoneOffsetHours: number) => {
    const utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    const cityDate = new Date(utc + (3600000 * timezoneOffsetHours));
    return cityDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const getOffset = (locId: string) => {
    switch (locId) {
      case 'loc-lusaka': return 2;
      case 'loc-livingstone': return 2;
      case 'loc-copperbelt': return 2;
      case 'loc-london-paris': return 1;
      default: return 2;
    }
  };

  return (
    <section id="studios" className="py-24 relative bg-[#0b0c10] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121319] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
            <Building className="w-3.5 h-3.5" />
            <span>GHOP Zambia Studio Fleet & Global Network</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            FLAGSHIP STUDIOS & <span className="text-gold-gradient">DESTINATIONS</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            From Lusaka cycloramas to Victoria Falls sunset expeditions and Copperbelt corporate suites.
          </p>
        </div>

        {/* Studio City Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {STUDIO_LOCATIONS.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            const cityTime = getCityTime(getOffset(loc.id));
            return (
              <button
                key={loc.id}
                onClick={() => {
                  setSelectedLocation(loc);
                  soundManager.playChime();
                }}
                className={`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'border-[#d4af37] bg-[#161720] ring-1 ring-[#d4af37]/50 shadow-xl shadow-[#d4af37]/10'
                    : 'border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                  <span>{loc.country}</span>
                  <span className="flex items-center gap-1 text-[#d4af37]">
                    <Clock className="w-3 h-3" />
                    {cityTime}
                  </span>
                </div>
                <h4 className="font-cinzel text-base font-bold text-white truncate">
                  {loc.city.split(' ')[0]}
                </h4>
                <p className="text-[11px] text-neutral-400 truncate mt-0.5 font-mono">
                  {loc.address}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Flagship Highlight Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-10 rounded-2xl border border-[#d4af37]/30">
          
          {/* Left: Studio Image */}
          <div className="lg:col-span-7 aspect-[16/10] rounded-xl overflow-hidden relative shadow-2xl border border-neutral-800">
            <img
              src={selectedLocation.imageUrl}
              alt={selectedLocation.city}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#d4af37] text-black font-bold">
                  {selectedLocation.squareFeet}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                  {selectedLocation.city}
                </h3>
              </div>
            </div>
          </div>

          {/* Right: Studio Specs & Concierge Booking */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedLocation.address}</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Flagship Studio Amenities
              </h3>
              <p className="text-xs text-neutral-300">
                Lead Studio Director: <span className="text-white font-semibold">{selectedLocation.leadProducer}</span>
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-2.5">
              {selectedLocation.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Direct Studio Phone, Email & Social */}
            <div className="p-4 rounded-xl bg-[#08090c] border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  Lusaka Studio Line:
                </span>
                <a
                  href="tel:0760528887"
                  className="text-[#f3e5ab] font-bold hover:underline"
                >
                  0760528887
                </a>
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-1 border-t border-neutral-800/60">
                <span className="text-neutral-400">Executive Email:</span>
                <a
                  href="mailto:ghopbusinesscenter@gmail.com"
                  className="text-[#d4af37] font-bold hover:underline truncate max-w-[200px]"
                >
                  ghopbusinesscenter@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-1 border-t border-neutral-800/60">
                <span className="text-neutral-400">Official Social:</span>
                <a
                  href="https://web.facebook.com/GHOPzambia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2] font-bold hover:underline"
                >
                  Facebook @GHOPzambia
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  soundManager.playShutterSound();
                  onOpenBooking();
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a] text-black font-bold text-xs uppercase tracking-widest hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Studio Session</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20photography%20%26%20makeup%20session%20in%20Lusaka%2C%20Zambia."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playChime(true)}
                className="py-3.5 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#25D366]/30 transition-all"
                title="WhatsApp 0760528887"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://web.facebook.com/GHOPzambia"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-3 rounded-xl bg-[#1877F2]/15 border border-[#1877F2]/40 text-[#1877F2] font-semibold text-xs flex items-center justify-center gap-1 hover:bg-[#1877F2]/25 transition-all"
                title="Facebook @GHOPzambia"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
