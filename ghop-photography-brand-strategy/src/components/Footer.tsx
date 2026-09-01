import React, { useState } from 'react';
import { Crown, Mail, ArrowRight, Globe, Check } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      soundManager.playChime(true);
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-[#d4af37]/20 pt-20 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Dispatch Newsletter Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-[#d4af37]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-widest">
              <Mail className="w-3.5 h-3.5" />
              <span>GHOP Zambia VIP Journal</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              JOIN THE GHOP PRIVATE DISPATCH
            </h3>
            <p className="text-xs text-neutral-300">
              Receive exclusive bridal lookbooks, Chilanga Mulilo schedules, photography masterclasses, and Facebook live stream notifications.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter VIP email or phone..."
              className="bg-[#08090c] border border-[#d4af37]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] min-w-[240px]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg transition-all shrink-0 cursor-pointer"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Request VIP Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1c1810] border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <Crown className="w-4 h-4" />
              </div>
              <span className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-[0.2em]">
                GHOP LUXURY STUDIOS ZAMBIA
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              The million-dollar world-class photography and makeup empire based in Lusaka, Zambia with global destination coverage. Engineering immortal visual legacy for African royalty, high-fashion brands, and traditional celebrations.
            </p>
            
            {/* Social icons with Facebook @GHOPzambia highlighted */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://web.facebook.com/GHOPzambia" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Official Facebook Page @GHOPzambia"
                className="px-3 py-1.5 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/50 flex items-center gap-1.5 text-xs text-white hover:bg-[#1877F2]/40 transition-colors"
              >
                <svg className="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span className="font-mono text-[10px]">@GHOPzambia</span>
              </a>

              <a href="#portfolio" title="Instagram" className="w-8 h-8 rounded-full bg-[#121319] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#portfolio" title="YouTube" className="w-8 h-8 rounded-full bg-[#121319] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#studios" title="Global" className="w-8 h-8 rounded-full bg-[#121319] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Haute Visuals
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Royal White Weddings</a></li>
              <li><a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Chilanga Mulilo & Matebeto</a></li>
              <li><a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Kitchen Party Glamour</a></li>
              <li><a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Victoria Falls Destination</a></li>
              <li><a href="#lighting-simulator" className="hover:text-[#d4af37] transition-colors">Lighting Physics Lab</a></li>
            </ul>
          </div>

          {/* Makeup & Academy */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Makeup & Academy
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#makeup-suite" className="hover:text-[#d4af37] transition-colors">18H Melanin Sweat Shield</a></li>
              <li><a href="#makeup-suite" className="hover:text-[#d4af37] transition-colors">Zero-Flashback Chemistry</a></li>
              <li><a href="#knowledge-vault" className="hover:text-[#d4af37] transition-colors">$1M Studio Playbook</a></li>
              <li><a href="#growth-engine" className="hover:text-[#d4af37] transition-colors">Facebook @GHOPzambia Ads</a></li>
              <li><a href="#knowledge-vault" className="hover:text-[#d4af37] transition-colors">Certification Challenge</a></li>
            </ul>
          </div>

          {/* Global Hubs & Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Lusaka HQ & Contact
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#studios" className="hover:text-[#d4af37] transition-colors">Lusaka Flagship (Kabulonga)</a></li>
              <li><a href="tel:0760528887" className="text-[#f3e5ab] font-bold font-mono hover:underline flex items-center gap-1">📞 0760528887</a></li>
              <li><a href="mailto:ghopbusinesscenter@gmail.com" className="text-[#d4af37] font-mono hover:underline truncate block text-[11px]">✉️ ghopbusinesscenter@gmail.com</a></li>
              <li><a href="https://wa.me/260760528887" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold font-mono hover:underline flex items-center gap-1">💬 WhatsApp Concierge</a></li>
              <li><a href="#studios" className="hover:text-[#d4af37] transition-colors">Livingstone & Copperbelt</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} GHOP Photography & GHOP Makeup Zambia (@GHOPzambia). All Global Commercial Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="https://web.facebook.com/GHOPzambia" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:underline">Facebook: @GHOPzambia</a>
            <a href="#" className="hover:text-neutral-300">Privacy Protocol</a>
            <a href="#" className="hover:text-neutral-300">Terms of Production</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
