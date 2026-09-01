import React, { useState } from 'react';
import { Phone, MessageCircle, Share2, X, Crown, Calendar, Mail, Check, Copy } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface FloatingConciergeProps {
  onOpenBooking: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onOpenBooking }) => {
  const [minimized, setMinimized] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phoneNumber = '0760528887';
  const internationalPhone = '+260760528887';
  const emailAddress = 'ghopbusinesscenter@gmail.com';
  const whatsappUrl = 'https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20photography%20%26%20makeup%20session%20in%20Lusaka%2C%20Zambia.';
  const facebookUrl = 'https://web.facebook.com/GHOPzambia';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    soundManager.playChime();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2">
      
      {!minimized ? (
        <div className="glass-panel p-4 rounded-2xl border border-[#d4af37]/40 shadow-2xl shadow-black/90 max-w-xs sm:max-w-sm backdrop-blur-xl bg-[#08090c]/95 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#d4af37]/20 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div className="flex flex-col">
                <span className="font-cinzel text-xs font-bold text-white flex items-center gap-1">
                  GHOP VIP CONCIERGE
                  <Crown className="w-3 h-3 text-[#d4af37]" />
                </span>
                <span className="text-[10px] font-mono text-[#d4af37]">
                  Lusaka, Zambia • Online Now
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playChime();
                setMinimized(true);
              }}
              title="Minimize Concierge"
              className="text-neutral-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Info & Number */}
          <div className="p-2.5 rounded-xl bg-[#121319] border border-neutral-800 mb-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-400 font-mono text-[10px] uppercase">Direct Studio Line:</span>
              <span className="text-emerald-400 text-[10px] font-bold font-mono">AVAILABLE</span>
            </div>
            <a
              href={`tel:${phoneNumber}`}
              onClick={() => soundManager.playChime()}
              className="text-sm sm:text-base font-bold font-mono text-gold-gradient hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>{phoneNumber}</span>
              <span className="text-[10px] text-neutral-400 font-normal">({internationalPhone})</span>
            </a>
          </div>

          {/* Email Info Card */}
          <div className="p-2.5 rounded-xl bg-[#121319] border border-neutral-800 mb-3 flex items-center justify-between gap-2">
            <div className="overflow-hidden">
              <span className="text-[9px] font-mono uppercase text-neutral-400 block">Official Executive Email:</span>
              <a
                href={`mailto:${emailAddress}`}
                className="text-xs text-[#f3e5ab] font-mono font-medium hover:underline truncate block"
              >
                {emailAddress}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              title="Copy Email"
              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-[#d4af37] hover:text-black text-neutral-300 transition-colors shrink-0 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            
            {/* WhatsApp Direct */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playChime(true)}
              className="p-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-white flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#25D366]/10 font-bold"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${phoneNumber}`}
              onClick={() => soundManager.playChime()}
              className="p-2.5 rounded-xl bg-[#d4af37]/20 hover:bg-[#d4af37]/30 border border-[#d4af37]/50 text-[#f3e5ab] flex items-center justify-center gap-1.5 transition-all font-bold"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call Now</span>
            </a>

            {/* Email Dispatch */}
            <a
              href={`mailto:${emailAddress}`}
              onClick={() => soundManager.playChime()}
              className="p-2 rounded-xl bg-[#1a1c25] hover:bg-neutral-800 border border-neutral-700 text-neutral-200 flex items-center justify-center gap-1.5 transition-all text-[11px]"
            >
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Email VIP</span>
            </a>

            {/* Facebook Page @GHOPzambia */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playChime()}
              className="p-2 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/40 text-neutral-200 flex items-center justify-center gap-1.5 transition-all text-[11px]"
            >
              <Share2 className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>@GHOPzambia</span>
            </a>

          </div>

          {/* Book Suite Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                soundManager.playShutterSound();
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-bold flex items-center justify-center gap-1.5 transition-all shadow-md text-xs uppercase tracking-wider cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Studio Suite</span>
            </button>
          </div>

        </div>
      ) : (
        /* Minimized Floating Quick Pill */
        <div className="flex items-center gap-2">
          
          {/* Quick Direct Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            onClick={() => soundManager.playChime()}
            className="px-3.5 py-2 rounded-full bg-[#121319] border border-[#d4af37]/50 text-[#f3e5ab] hover:text-white shadow-xl flex items-center gap-2 text-xs font-mono font-bold transition-all hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
            <span>0760528887</span>
          </a>

          {/* WhatsApp Icon Trigger */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playChime(true)}
            title="Chat with GHOP Zambia on WhatsApp (0760528887)"
            className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-[#25D366]/40"
          >
            <MessageCircle className="w-6 h-6" />
          </a>

          {/* Email Quick Trigger */}
          <a
            href={`mailto:${emailAddress}`}
            title="Email GHOP Zambia: ghopbusinesscenter@gmail.com"
            className="w-12 h-12 rounded-full bg-[#121319] border border-[#d4af37]/60 text-[#d4af37] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* Re-expand Concierge Button */}
          <button
            onClick={() => {
              soundManager.playChime();
              setMinimized(false);
            }}
            title="Open VIP Concierge Hub"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#aa820a] text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-[#d4af37]/40 cursor-pointer"
          >
            <Crown className="w-6 h-6" />
          </button>
        </div>
      )}

    </div>
  );
};
