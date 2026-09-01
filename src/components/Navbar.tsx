import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Sparkles, 
  Crown, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  BookOpen, 
  TrendingUp, 
  MapPin, 
  DollarSign, 
  Layers
} from 'lucide-react';
import { BrandMode } from '../types';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  brandMode: BrandMode;
  setBrandMode: (mode: BrandMode) => void;
  onOpenBooking: () => void;
  currency: string;
  setCurrency: (c: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandMode,
  setBrandMode,
  onOpenBooking,
  currency,
  setCurrency
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = soundManager.toggleSound();
    setSoundActive(newState);
    if (newState) {
      soundManager.playShutterSound();
    }
  };

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio', icon: Camera },
    { name: 'Lighting Lab', href: '#lighting-simulator', icon: Layers },
    { name: 'Melanin Glam', href: '#makeup-suite', icon: Sparkles },
    { name: '$1M Knowledge Vault', href: '#knowledge-vault', icon: BookOpen, badge: 'ACADEMY' },
    { name: 'Growth Engine', href: '#growth-engine', icon: TrendingUp },
    { name: 'Pricing & ROI', href: '#pricing', icon: DollarSign },
    { name: 'Lusaka & Global', href: '#studios', icon: MapPin },
  ];

  const handleNavClick = () => {
    soundManager.playChime();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090c]/95 backdrop-blur-xl border-b border-[#d4af37]/25 py-2.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/95 via-black/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Verified GHOP Zambia Switcher */}
          <div className="flex items-center space-x-3">
            <a 
              href="#" 
              onClick={() => soundManager.playShutterSound()}
              className="group flex items-center space-x-2.5"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#aa820a] to-[#554005] p-[1.5px] shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-[#08090c] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#d4af37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg sm:text-2xl font-bold tracking-[0.2em] text-white flex items-center gap-1.5">
                  GHOP
                  <span className="text-[10px] font-sans tracking-widest px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 font-bold">
                    ZAMBIA
                  </span>
                  <a
                    href="https://web.facebook.com/GHOPzambia"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Official Verified Facebook Page @GHOPzambia"
                    onClick={(e) => e.stopPropagation()}
                    className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2]/30 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2] animate-pulse" />
                    <span>@GHOPzambia</span>
                  </a>
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#a3a3a3] font-sans">
                  {brandMode === 'photography' ? 'Photography Studios • Lusaka' : brandMode === 'makeup' ? 'Haute Makeup Artistry • Zambia' : 'Photography & Makeup Empire'}
                </span>
              </div>
            </a>

            {/* Brand Mode Selector Pills */}
            <div className="hidden xl:flex items-center bg-[#121319]/80 border border-[#d4af37]/20 rounded-full p-1 ml-4 shadow-inner">
              <button
                onClick={() => {
                  setBrandMode('empire');
                  soundManager.playChime();
                }}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                  brandMode === 'empire'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                The Empire
              </button>
              <button
                onClick={() => {
                  setBrandMode('photography');
                  soundManager.playShutterSound();
                }}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1 ${
                  brandMode === 'photography'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Camera className="w-3 h-3" />
                Photography
              </button>
              <button
                onClick={() => {
                  setBrandMode('makeup');
                  soundManager.playChime();
                }}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1 ${
                  brandMode === 'makeup'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                Makeup
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 text-xs uppercase tracking-widest font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="relative text-neutral-300 hover:text-[#d4af37] transition-colors py-1 group flex items-center gap-1"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[8px] bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] text-black font-bold px-1.5 py-0.2 rounded-full tracking-tighter">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Icons & VIP Book Button */}
          <div className="flex items-center space-x-2.5">
            
            {/* Direct Studio Line Lusaka */}
            <a
              href="tel:0760528887"
              onClick={() => soundManager.playChime()}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121319] border border-[#d4af37]/40 text-[#f3e5ab] hover:text-white hover:border-[#d4af37] text-xs font-mono font-bold transition-all shadow-sm"
              title="Call GHOP Lusaka directly: 0760528887"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>0760528887</span>
            </a>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="hidden sm:block bg-[#121319] text-[#d4af37] border border-[#d4af37]/30 rounded-md px-2 py-1 text-xs font-semibold focus:outline-none focus:border-[#d4af37] cursor-pointer"
            >
              <option value="ZMW">ZMW (K)</option>
              <option value="USD">USD ($)</option>
              <option value="GBP">GBP (£)</option>
              <option value="EUR">EUR (€)</option>
              <option value="ZAR">ZAR (R)</option>
            </select>

            {/* WhatsApp Quick Direct */}
            <a
              href="https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20photography%20%26%20makeup%20session%20in%20Lusaka%2C%20Zambia."
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (0760528887)"
              onClick={() => soundManager.playChime(true)}
              className="p-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.813 2.797.814 3.181 0 5.767-2.587 5.768-5.766.001-3.181-2.584-5.768-5.769-5.768zm0-2.172c4.418 0 8 3.582 8 8 0 4.419-3.582 8-8 8-1.408 0-2.731-.365-3.882-1.006l-4.149 1.089 1.107-4.043c-.694-1.187-1.076-2.557-1.076-4.04 0-4.418 3.582-8 8-8z"/></svg>
            </a>

            {/* Official Facebook Quick Link */}
            <a
              href="https://web.facebook.com/GHOPzambia"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Official Facebook Page @GHOPzambia"
              onClick={() => soundManager.playChime()}
              className="p-2 rounded-full bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/30 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundActive ? 'Sound Effects Enabled' : 'Sound Muted'}
              className="p-2 rounded-full bg-[#121319] border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all cursor-pointer"
            >
              {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-neutral-500" />}
            </button>

            {/* VIP Concierge Book CTA */}
            <button
              onClick={() => {
                soundManager.playShutterSound();
                onOpenBooking();
              }}
              className="relative group overflow-hidden rounded-full p-[1px] font-medium text-xs uppercase tracking-wider shadow-lg shadow-[#d4af37]/15 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a] animate-shimmer" />
              <span className="relative flex items-center gap-1.5 bg-[#08090c] group-hover:bg-[#08090c]/80 text-[#d4af37] group-hover:text-white px-3.5 py-2 rounded-full transition-all">
                <Crown className="w-3.5 h-3.5 text-[#d4af37] group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">VIP Booking</span>
              </span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08090c]/98 border-b border-[#d4af37]/25 px-6 py-6 transition-all duration-300">
          
          {/* Mobile Facebook Banner */}
          <a
            href="https://web.facebook.com/GHOPzambia"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 p-3 rounded-xl bg-[#1877F2]/15 border border-[#1877F2]/40 flex items-center justify-between text-xs text-[#1877F2]"
          >
            <div className="flex items-center gap-2 font-semibold">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Official Facebook @GHOPzambia</span>
            </div>
            <span className="text-[10px] font-mono bg-[#1877F2] text-white px-2 py-0.5 rounded-full">Follow</span>
          </a>

          {/* Mobile Brand Switcher */}
          <div className="grid grid-cols-3 gap-2 mb-6 bg-[#121319] p-1.5 rounded-lg border border-[#d4af37]/20">
            <button
              onClick={() => {
                setBrandMode('empire');
                soundManager.playChime();
              }}
              className={`text-xs py-2 rounded text-center font-medium ${
                brandMode === 'empire' ? 'bg-[#d4af37] text-black font-bold' : 'text-neutral-400'
              }`}
            >
              Empire
            </button>
            <button
              onClick={() => {
                setBrandMode('photography');
                soundManager.playShutterSound();
              }}
              className={`text-xs py-2 rounded text-center font-medium ${
                brandMode === 'photography' ? 'bg-[#d4af37] text-black font-bold' : 'text-neutral-400'
              }`}
            >
              Photo
            </button>
            <button
              onClick={() => {
                setBrandMode('makeup');
                soundManager.playChime();
              }}
              className={`text-xs py-2 rounded text-center font-medium ${
                brandMode === 'makeup' ? 'bg-[#d4af37] text-black font-bold' : 'text-neutral-400'
              }`}
            >
              Makeup
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="flex items-center justify-between text-neutral-200 hover:text-[#d4af37] text-sm uppercase tracking-wider py-2 border-b border-neutral-800"
              >
                <div className="flex items-center gap-2">
                  <link.icon className="w-4 h-4 text-[#d4af37]" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="text-[9px] bg-[#d4af37] text-black font-bold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:0760528887"
                onClick={() => soundManager.playChime()}
                className="py-2.5 rounded-lg bg-[#121319] border border-[#d4af37]/50 text-[#f3e5ab] text-center font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <span>📞 Call 0760528887</span>
              </a>
              <a
                href="https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20photography%20%26%20makeup%20session%20in%20Lusaka%2C%20Zambia."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playChime(true)}
                className="py-2.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/50 text-white text-center font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-bold text-center tracking-widest uppercase text-sm shadow-lg shadow-[#d4af37]/20"
            >
              Reserve Private Studio Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
