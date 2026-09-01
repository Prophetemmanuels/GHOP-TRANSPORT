import React, { useState } from 'react';
import { 
  DollarSign, 
  Check, 
  Plus, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  Share2
} from 'lucide-react';
import { PRICING_PACKAGES, ADD_ON_OPTIONS } from '../data/mockData';
import { PricingService } from '../types';
import { soundManager } from '../utils/audio';

interface PackageConfiguratorProps {
  currency: string;
  onOpenBookingWithDetails: (packageId: string, addOnIds: string[], total: number) => void;
}

export const PackageConfigurator: React.FC<PackageConfiguratorProps> = ({
  currency,
  onOpenBookingWithDetails
}) => {
  const [selectedPkg, setSelectedPkg] = useState<PricingService>(PRICING_PACKAGES[1]); // Default Royal White Wedding
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    'addon-express-24h', 
    'addon-heirloom-album'
  ]);

  const currencyRates: Record<string, { symbol: string; rate: number; isSuffix?: boolean }> = {
    ZMW: { symbol: 'K', rate: 27.5 },
    USD: { symbol: '$', rate: 1.0 },
    GBP: { symbol: '£', rate: 0.79 },
    EUR: { symbol: '€', rate: 0.92 },
    ZAR: { symbol: 'R', rate: 18.2 },
  };

  const curr = currencyRates[currency] || currencyRates.ZMW;

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * curr.rate);
    return `${curr.symbol} ${converted.toLocaleString()}`;
  };

  const toggleAddOn = (addonId: string) => {
    soundManager.playChime();
    setSelectedAddOns(prev => 
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const calculateTotalUSD = () => {
    let total = selectedPkg.basePriceUSD;
    selectedAddOns.forEach(id => {
      const found = ADD_ON_OPTIONS.find(a => a.id === id);
      if (found) total += found.priceUSD;
    });
    return total;
  };

  const totalUSD = calculateTotalUSD();
  const retainerUSD = Math.round(totalUSD * 0.5);

  const handleBookNow = () => {
    soundManager.playShutterSound();
    onOpenBookingWithDetails(selectedPkg.id, selectedAddOns, totalUSD);
  };

  return (
    <section id="pricing" className="py-24 relative bg-[#08090c] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121319] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Transparent Haute Couture Investments • Zambia & Global</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            BESPOKE PRODUCTION <span className="text-gold-gradient">CONFIGURATOR</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            Select your master suite for Chilanga Mulilo, Royal White Weddings, or Studio Commercial campaigns.
          </p>
        </div>

        {/* Step 1: Base Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRICING_PACKAGES.map((pkg) => {
            const isSelected = selectedPkg.id === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => {
                  setSelectedPkg(pkg);
                  soundManager.playChime();
                }}
                className={`glass-panel p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between relative overflow-hidden border ${
                  isSelected
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37]/40 bg-[#161720] shadow-2xl shadow-[#d4af37]/20 -translate-y-1'
                    : 'border-neutral-800 hover:border-[#d4af37]/40'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#d4af37] to-[#aa820a] text-black text-[9px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider block">
                      {pkg.type.toUpperCase()} SUITE
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="space-y-1">
                    <span className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient">
                      {formatPrice(pkg.basePriceUSD)}
                    </span>
                    <p className="text-[11px] text-neutral-400 font-mono">
                      {pkg.duration}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-neutral-800 text-xs text-neutral-300">
                    {pkg.deliverables.slice(0, 4).map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    className={`w-full py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                      isSelected
                        ? 'bg-[#d4af37] text-black shadow-md'
                        : 'bg-[#101117] text-neutral-300 border border-neutral-800'
                    }`}
                  >
                    {isSelected ? 'Selected Suite' : 'Select Suite'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step 2: Bespoke Add-Ons & Total Production Invoice Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Add-Ons Checklist */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <h4 className="font-cinzel text-base font-bold text-white">
                  Bespoke Production Upgrades & Add-ons
                </h4>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                {selectedAddOns.length} Upgrades Selected
              </span>
            </div>

            <div className="space-y-3">
              {ADD_ON_OPTIONS.map((addon) => {
                const isChecked = selectedAddOns.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isChecked
                        ? 'bg-[#161720] border-[#d4af37]/60 ring-1 ring-[#d4af37]/30'
                        : 'bg-[#0e0f15] border-neutral-800/80 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        isChecked ? 'bg-[#d4af37] border-[#d4af37] text-black' : 'border-neutral-700 bg-black'
                      }`}>
                        {isChecked ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3 h-3 text-neutral-600" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{addon.name}</span>
                          <span className="text-[9px] font-mono text-neutral-400 uppercase bg-neutral-900 px-1.5 py-0.2 rounded">
                            {addon.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-0.5">{addon.description}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-[#f3e5ab] font-mono">
                        +{formatPrice(addon.priceUSD)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right: Live Production Summary & Checkout Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/40 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-1 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase">
                <Crown className="w-3.5 h-3.5" />
                <span>Production Invoice Estimate</span>
              </div>
              <h3 className="font-cinzel text-xl font-bold text-white">
                {selectedPkg.name}
              </h3>
            </div>

            {/* Line items */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-neutral-300">
                <span>Base Suite Rate:</span>
                <span className="font-mono font-bold text-white">{formatPrice(selectedPkg.basePriceUSD)}</span>
              </div>

              {selectedAddOns.map(id => {
                const addon = ADD_ON_OPTIONS.find(a => a.id === id);
                if (!addon) return null;
                return (
                  <div key={id} className="flex justify-between text-neutral-400">
                    <span className="truncate pr-2">+ {addon.name}:</span>
                    <span className="font-mono text-[#f3e5ab] shrink-0">+{formatPrice(addon.priceUSD)}</span>
                  </div>
                );
              })}

              <div className="pt-3 border-t border-neutral-800 flex justify-between items-end">
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase block">Total Investment</span>
                  <span className="text-[11px] text-neutral-500">Includes Master Retouching & Glam</span>
                </div>
                <div className="text-right">
                  <span className="font-cinzel text-3xl font-bold text-gold-gradient">
                    {formatPrice(totalUSD)}
                  </span>
                </div>
              </div>

              {/* Retainer Note */}
              <div className="p-3 rounded-lg bg-[#0e0f15] border border-neutral-800 flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400">50% Reservation Retainer:</span>
                <span className="text-[#d4af37] font-bold">{formatPrice(retainerUSD)}</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 text-[11px] text-neutral-400 border-t border-neutral-800 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Ironclad Creative Contract & 100% Zero-Flashback Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Guaranteed Express Delivery with Private Digital Vault</span>
              </div>
            </div>

            {/* Direct Facebook & WhatsApp Action */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={handleBookNow}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a] text-black font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In Bespoke Production</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://web.facebook.com/GHOPzambia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playChime()}
                className="w-full py-2.5 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/40 text-[#1877F2] font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Message on Facebook (@GHOPzambia)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
