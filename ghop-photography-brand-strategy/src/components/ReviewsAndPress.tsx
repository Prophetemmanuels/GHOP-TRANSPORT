import React from 'react';
import { Star, Quote, Award, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

const PRESS_LOGOS = [
  'VOGUE',
  'HARPER’S BAZAAR',
  'ELLE',
  'VANITY FAIR',
  'ROBB REPORT',
  'TATLER',
  'L’OFFICIEL'
];

export const ReviewsAndPress: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#08090c] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Press Badges Marquee Banner */}
        <div className="pb-16 border-b border-neutral-800">
          <p className="text-center text-[11px] font-mono uppercase tracking-[0.3em] text-[#d4af37] mb-8">
            Featured In & Accredited By World Editorial Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {PRESS_LOGOS.map((logo, idx) => (
              <span
                key={idx}
                className="font-cinzel text-lg sm:text-2xl font-bold tracking-[0.2em] text-neutral-400 hover:text-[#d4af37] transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 my-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121319] border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37] tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Verified High-Net-Worth Praise</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            COMMERCIAL IMPACT & <span className="text-gold-gradient">CLIENT PRAISE</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            How Ghop Studios turns moments into history and brand campaigns into market dominance.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="glass-panel p-8 rounded-2xl border border-[#d4af37]/25 flex flex-col justify-between relative shadow-xl hover:border-[#d4af37]/60 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#d4af37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {review.pressLogo && (
                    <span className="text-[10px] font-cinzel font-bold text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded">
                      {review.pressLogo}
                    </span>
                  )}
                </div>

                <Quote className="w-8 h-8 text-[#d4af37]/30" />

                <p className="font-cormorant text-base sm:text-lg italic text-neutral-200 leading-relaxed">
                  “{review.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800 mt-6 flex items-center gap-3.5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#d4af37]/40 shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="font-cinzel text-xs sm:text-sm font-bold text-white truncate flex items-center gap-1">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  </h4>
                  <p className="text-[10px] text-[#d4af37] font-mono truncate">{review.role}</p>
                  <p className="text-[10px] text-neutral-400 truncate">{review.companyOrEvent}</p>
                  
                  {review.revenueImpact && (
                    <span className="inline-block text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-800 px-1.5 py-0.2 rounded mt-1">
                      {review.revenueImpact}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
