import React, { useState } from 'react';
import { 
  TrendingUp, 
  Copy, 
  Check, 
  BarChart3, 
  Target, 
  Crown, 
  Download,
  Share2
} from 'lucide-react';
import { MARKETING_CAMPAIGNS } from '../data/mockData';
import { MarketingCampaignTemplate } from '../types';
import { soundManager } from '../utils/audio';

export const SelfAdvertisingEngine: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<MarketingCampaignTemplate>(MARKETING_CAMPAIGNS[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ROI Calculator State
  const [monthlyAdSpendUSD, setMonthlyAdSpendUSD] = useState(1500);
  const [avgClientValueUSD, setAvgClientValueUSD] = useState(4800);
  const [conversionRate] = useState(4.0); // %

  const handleCopyScript = (camp: MarketingCampaignTemplate) => {
    const fullText = `CAMPAIGN: ${camp.title}\nPLATFORM: ${camp.platform}\nHOOK: ${camp.hook}\n\nAD COPY:\n${camp.adCopy}\n\nTARGETING:\n${camp.targetAudience}\n\nVISUAL DIRECTION:\n${camp.visualDirection}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(camp.id);
    soundManager.playChime(true);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // ROI Math
  const estimatedCostPerLeadUSD = 25; // $
  const estimatedLeads = Math.round(monthlyAdSpendUSD / estimatedCostPerLeadUSD);
  const estimatedBookings = Math.max(1, Math.round(estimatedLeads * (conversionRate / 100)));
  const estimatedRevenueUSD = estimatedBookings * avgClientValueUSD;
  const netProfitUSD = estimatedRevenueUSD - monthlyAdSpendUSD;
  const roasMultiplier = (estimatedRevenueUSD / monthlyAdSpendUSD).toFixed(1);
  const kwachaRate = 27.5;

  return (
    <section id="growth-engine" className="py-24 relative bg-[#0b0c10] border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121319] border border-[#d4af37]/40 text-xs font-semibold text-[#f3e5ab] tracking-widest uppercase">
            <TrendingUp className="w-4 h-4 text-[#d4af37]" />
            <span>Facebook (@GHOPzambia) & Omnichannel Marketing Engine</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            THE 7-FIGURE <span className="text-gold-gradient">GROWTH ENGINE</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-neutral-300 italic">
            How GHOP Zambia captures high-profile brides, corporate mineral houses, and diaspora weddings on autopilot.
          </p>
        </div>

        {/* Dynamic ROI & Ad Spend Revenue Calculator */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-neutral-800 gap-4 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  Facebook & Meta Advertising ROI Simulator
                </h3>
              </div>
              <p className="text-xs text-neutral-400">
                Simulate how scaling Facebook (@GHOPzambia) and WhatsApp ad budgets converts into booked wedding contracts.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-mono text-neutral-400">Projected ROAS:</span>
              <span className="text-xl font-bold font-cinzel text-gold-gradient bg-[#161720] px-4 py-1.5 rounded-lg border border-[#d4af37]/30">
                {roasMultiplier}x Return
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders on Left */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Monthly Ad Budget */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300 uppercase">Monthly Advertising Budget:</span>
                  <span className="text-[#d4af37] font-bold text-sm">
                    ${monthlyAdSpendUSD.toLocaleString()} (~K{(monthlyAdSpendUSD * kwachaRate).toLocaleString()} ZMW)
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={10000}
                  step={250}
                  value={monthlyAdSpendUSD}
                  onChange={(e) => setMonthlyAdSpendUSD(Number(e.target.value))}
                  className="w-full accent-[#d4af37] h-2 bg-neutral-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>$500 (~K13.7k)</span>
                  <span>$5,000 (~K137k)</span>
                  <span>$10,000 (~K275k)</span>
                </div>
              </div>

              {/* Slider 2: Average Client Package Value */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300 uppercase">Average Client Production Value:</span>
                  <span className="text-[#d4af37] font-bold text-sm">
                    ${avgClientValueUSD.toLocaleString()} (~K{(avgClientValueUSD * kwachaRate).toLocaleString()} ZMW)
                  </span>
                </div>
                <input
                  type="range"
                  min={2000}
                  max={15000}
                  step={500}
                  value={avgClientValueUSD}
                  onChange={(e) => setAvgClientValueUSD(Number(e.target.value))}
                  className="w-full accent-[#d4af37] h-2 bg-neutral-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>$2,000 (Traditional Solo)</span>
                  <span>$5,800 (Royal White Wedding)</span>
                  <span>$15,000 (Presidential 2-Day)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#08090c] border border-neutral-800 flex items-center justify-between text-xs text-neutral-300 font-mono">
                <span>Estimated WhatsApp & FB Inquiries:</span>
                <span className="text-white font-bold">{estimatedLeads} High-Intent Leads / Mo</span>
              </div>

            </div>

            {/* Calculated Output Cards on Right */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              
              <div className="p-5 rounded-xl bg-[#121319] border border-[#d4af37]/30 text-center space-y-1">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">
                  Projected Bookings
                </span>
                <span className="font-cinzel text-3xl font-bold text-white">
                  {estimatedBookings}
                </span>
                <span className="text-[11px] text-[#f3e5ab] font-medium block">
                  Weddings & Shoots / Mo
                </span>
              </div>

              <div className="p-5 rounded-xl bg-[#121319] border border-[#d4af37]/30 text-center space-y-1">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">
                  Gross Monthly Revenue
                </span>
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient">
                  ${estimatedRevenueUSD.toLocaleString()}
                </span>
                <span className="text-[11px] text-neutral-400 font-medium block font-mono">
                  ~K{(estimatedRevenueUSD * kwachaRate).toLocaleString()} ZMW
                </span>
              </div>

              <div className="p-5 rounded-xl bg-[#121319] border border-neutral-800 text-center space-y-1">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">
                  Net Monthly Profit
                </span>
                <span className="font-cinzel text-2xl font-bold text-emerald-400">
                  ${netProfitUSD.toLocaleString()}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono block">
                  After Advertising Costs
                </span>
              </div>

              <div className="p-5 rounded-xl bg-[#121319] border border-neutral-800 text-center space-y-1">
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">
                  Customer Acquisition Cost
                </span>
                <span className="font-cinzel text-2xl font-bold text-neutral-200">
                  ${Math.round(monthlyAdSpendUSD / estimatedBookings).toLocaleString()}
                </span>
                <span className="text-[10px] text-neutral-500 font-mono block">
                  Under 12% of Contract Value
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Ready-to-Launch Ad Creative & Script Studio */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Turnkey Ad Campaign Studio
                </h3>
              </div>
              <p className="text-xs text-neutral-400">
                Battle-tested copywriting scripts, video hooks, and targeting specs for Facebook (@GHOPzambia) and WhatsApp funnels.
              </p>
            </div>

            {/* Campaign Platforms Switcher */}
            <div className="flex flex-wrap gap-2">
              {MARKETING_CAMPAIGNS.map((camp) => (
                <button
                  key={camp.id}
                  onClick={() => {
                    setSelectedCampaign(camp);
                    soundManager.playChime();
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs uppercase font-mono font-bold transition-all cursor-pointer ${
                    selectedCampaign.id === camp.id
                      ? 'bg-[#d4af37] text-black shadow-md'
                      : 'bg-[#121319] text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {camp.platform}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Ad Display Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-800 gap-3">
              <div>
                <span className="text-[10px] font-mono text-[#d4af37] uppercase font-bold tracking-wider">
                  Channel: {selectedCampaign.platform}
                </span>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  {selectedCampaign.title}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800 px-3 py-1 rounded-full">
                  {selectedCampaign.estimatedRoas}
                </span>
                <button
                  onClick={() => handleCopyScript(selectedCampaign)}
                  className="px-4 py-2 rounded-lg bg-[#1a1c25] hover:bg-[#d4af37] hover:text-black text-[#d4af37] text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-1.5 border border-[#d4af37]/40 cursor-pointer"
                >
                  {copiedId === selectedCampaign.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Script Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Ad Package</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hook Box */}
            <div className="p-4 rounded-xl bg-[#161720] border-l-4 border-[#d4af37] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
                The 3-Second Scroll-Stopping Hook:
              </span>
              <p className="font-cormorant text-lg text-[#f3e5ab] italic font-semibold">
                {selectedCampaign.hook}
              </p>
            </div>

            {/* Ad Body Copy */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                High-Converting Body Copy:
              </span>
              <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-line">
                {selectedCampaign.adCopy}
              </div>
            </div>

            {/* Targeting & Creative Guidance Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#0e0f15] border border-neutral-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold block">
                  🎯 Laser Target Audience Setup:
                </span>
                <p className="text-neutral-300 leading-relaxed">
                  {selectedCampaign.targetAudience}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0e0f15] border border-neutral-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold block">
                  🎬 Cinematic Visual Art Direction:
                </span>
                <p className="text-neutral-300 leading-relaxed">
                  {selectedCampaign.visualDirection}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Official Facebook Community Hub & VIP Black Card */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Official Facebook Page Integration */}
          <div className="glass-panel p-8 rounded-2xl border border-[#1877F2]/40 space-y-5 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1877F2]/20 border border-[#1877F2] flex items-center justify-center text-[#1877F2]">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  Official Facebook Hub @GHOPzambia
                </h4>
                <p className="text-xs text-neutral-400">Join our growing community of luxury brides & fans</p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Explore daily live wedding streams, behind-the-scenes Chilanga Mulilo reels, client feedback, and real-time announcements on our verified Facebook page.
            </p>

            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#d4af37]" />
                <span>Daily 4K Bridal sneak peeks & highlight reels</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#d4af37]" />
                <span>Direct Messenger inquiry with &lt; 15-minute response SLA</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#d4af37]" />
                <span>Exclusive lookbook drops before public releases</span>
              </li>
            </ul>

            <a
              href="https://web.facebook.com/GHOPzambia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playChime(true)}
              className="w-full py-3.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1877F2]/20 cursor-pointer"
            >
              <span>Visit Official Facebook Page @GHOPzambia</span>
              <Share2 className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: 2025 Lookbook & Press Pack */}
          <div className="glass-panel p-8 rounded-2xl border border-[#d4af37]/30 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1c1810] border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  2025 Royal Lookbook & Media Kit
                </h4>
                <p className="text-xs text-neutral-400">Editorial submission guidelines & high-res assets</p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Planning your wedding or corporate event in Zambia or abroad? Download our comprehensive 2025 Bridal & Commercial rate card with full equipment specifications.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0e0f15] border border-neutral-800">
                <span className="text-[10px] font-mono text-[#d4af37] block">Zambian Weddings</span>
                <span className="text-neutral-200 font-semibold">Chilanga Mulilo + White</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0e0f15] border border-neutral-800">
                <span className="text-[10px] font-mono text-[#d4af37] block">Master Gear</span>
                <span className="text-neutral-200 font-semibold">Phase One & Sony 50MP</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playShutterSound();
                alert('Downloading 2025 GHOP Zambia Royal Bridal Lookbook & Media Kit (.PDF)...');
              }}
              className="w-full py-3 rounded-xl bg-[#1a1c25] hover:bg-[#d4af37] hover:text-black text-[#d4af37] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border border-[#d4af37]/40 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download 2025 Official Lookbook (.PDF)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
