import React, { useState } from 'react';
import { 
  X, 
  Crown, 
  Sparkles, 
  Camera, 
  CheckCircle, 
  ArrowRight,
  Share2,
  Phone,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPackageId?: string;
  prefilledAddOnIds?: string[];
  prefilledTotal?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledPackageId,
  prefilledTotal
}) => {
  const [step, setStep] = useState(1);
  const [sessionType, setSessionType] = useState(prefilledPackageId ? 'configured' : 'royal-wedding');
  const [location, setLocation] = useState('lusaka');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [glamIncluded, setGlamIncluded] = useState(true);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleNextStep = () => {
    soundManager.playChime();
    setStep(prev => prev + 1);
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || (!email && !phone)) {
      alert('Please provide your name and phone/WhatsApp number for the VIP Concierge confirmation.');
      return;
    }

    const randomId = `GHOP-ZM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomId);
    setStep(3);
    soundManager.playChime(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#f3e5ab', '#ffffff', '#1877F2']
    });
  };

  const handleModalClose = () => {
    soundManager.playChime();
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <div className="relative max-w-2xl w-full bg-[#0e0f15] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Modal Close */}
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-neutral-300 hover:text-white border border-[#d4af37]/30 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#161720] via-[#121319] to-[#0e0f15] border-b border-[#d4af37]/20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-1">
            <Crown className="w-4 h-4" />
            <span>GHOP Zambia VIP Concierge Reservation</span>
          </div>
          <h3 className="font-cinzel text-2xl font-bold text-white">
            {step === 3 ? 'RESERVATION CONFIRMED' : 'RESERVE GHOP PRODUCTION'}
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            {step === 3 ? 'Your booking has been logged with executive priority. Official Facebook: @GHOPzambia' : 'Step ' + step + ' of 2 • White-Glove Onboarding'}
          </p>
        </div>

        {/* Step 1: Session & Flagship Location */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            
            {prefilledTotal && (
              <div className="p-3 rounded-lg bg-[#1a1710] border border-[#d4af37]/40 flex items-center justify-between text-xs font-mono">
                <span className="text-[#f3e5ab]">Configured Package Estimate:</span>
                <span className="text-white font-bold">${prefilledTotal.toLocaleString()} USD</span>
              </div>
            )}

            {/* Session Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                Select Production Category:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'royal-wedding', label: 'Royal White Wedding & Reception', icon: Crown },
                  { id: 'chilanga-mulilo', label: 'Chilanga Mulilo & Kitchen Party', icon: Sparkles },
                  { id: 'makeup-suite', label: 'Haute Melanin Glam Studio', icon: Sparkles },
                  { id: 'commercial', label: 'Commercial & Executive Suite', icon: Camera },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSessionType(item.id);
                      soundManager.playChime();
                    }}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      sessionType === item.id
                        ? 'border-[#d4af37] bg-[#161720] ring-1 ring-[#d4af37]'
                        : 'border-neutral-800 bg-[#08090c] hover:border-neutral-700'
                    }`}
                  >
                    <item.icon className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="text-xs font-semibold text-white">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Flagship Studio Location */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                Select Location in Zambia or Abroad:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'lusaka', label: 'Lusaka Flagship' },
                  { id: 'copperbelt', label: 'Copperbelt (Kitwe/Ndola)' },
                  { id: 'livingstone', label: 'Livingstone / Victoria Falls' },
                  { id: 'destination', label: 'Global / Destination' },
                ].map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => {
                      setLocation(loc.id);
                      soundManager.playChime();
                    }}
                    className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                      location === loc.id
                        ? 'border-[#d4af37] bg-[#1a1c25] text-white font-bold'
                        : 'border-neutral-800 bg-[#08090c] text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Full Glam Team */}
            <div className="p-4 rounded-xl bg-[#08090c] border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="text-xs font-bold text-white block">Include GHOP Master Makeup & Hair Team</span>
                  <span className="text-[10px] text-neutral-400 block">18-hour sweat & cry-proof melanin shield</span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={glamIncluded}
                onChange={(e) => setGlamIncluded(e.target.checked)}
                className="w-4 h-4 accent-[#d4af37] cursor-pointer"
              />
            </div>

            <button
              onClick={handleNextStep}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa820a] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Continue to Contact Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        )}

        {/* Step 2: Contact Form & Calendar Date */}
        {step === 2 && (
          <form onSubmit={handleCompleteBooking} className="p-6 sm:p-8 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-300 block">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Mwamba & Natasha Kasonde"
                  className="w-full bg-[#08090c] border border-neutral-800 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-300 block">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+260 97X XXX XXX"
                  className="w-full bg-[#08090c] border border-neutral-800 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-300 block">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="natasha@example.com"
                  className="w-full bg-[#08090c] border border-neutral-800 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-300 block">Target Event / Wedding Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#08090c] border border-neutral-800 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-300 block">Ceremony Details & Venue</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention your venue (Ciêla, Taj Pamodzi, Radisson, Livingstone, etc.), Chitenge themes, or specific package requests..."
                className="w-full bg-[#08090c] border border-neutral-800 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-mono text-neutral-400 hover:text-white cursor-pointer"
              >
                ← Back
              </button>

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                Submit Private Reservation
              </button>
            </div>

          </form>
        )}

        {/* Step 3: Confirmation View */}
        {step === 3 && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#aa820a] p-[2px] mx-auto shadow-2xl shadow-[#d4af37]/30">
              <div className="w-full h-full rounded-full bg-[#08090c] flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#d4af37]" />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-cinzel text-2xl font-bold text-white">
                WELCOME TO THE GHOP FAMILY, {fullName.toUpperCase() || 'ESTEEMED CLIENT'}
              </h4>
              <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                Your VIP concierge reference ID is <strong className="text-[#f3e5ab] font-mono">{bookingRef}</strong>. Our lead wedding producer will reach out via WhatsApp / Phone within 15 minutes to confirm date lock and lookbook preparations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#121319] border border-[#d4af37]/30 max-w-sm mx-auto text-xs text-left space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-neutral-400">Reference:</span>
                <span className="text-white font-bold">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Ceremony:</span>
                <span className="text-[#f3e5ab] capitalize">{sessionType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Location:</span>
                <span className="text-white uppercase">{location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Response SLA:</span>
                <span className="text-emerald-400 font-bold">&lt; 15 Minutes VIP Guarantee</span>
              </div>
            </div>

            {/* Direct Instant Contact Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-md mx-auto pt-2">
              <a
                href="https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20just%20submitted%20a%20booking%20reservation%20(Ref%3A%20VIP).%20I%20am%20ready%20to%20discuss%20our%20shoot%20in%20Lusaka."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp (0760528887)</span>
              </a>

              <a
                href="tel:0760528887"
                className="p-3 rounded-xl bg-[#121319] border border-[#d4af37]/60 text-[#f3e5ab] font-bold text-xs uppercase tracking-wider hover:bg-[#d4af37] hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call Concierge (0760528887)</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://web.facebook.com/GHOPzambia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1877F2] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#166fe5] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1877F2]/20"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Official Facebook @GHOPzambia</span>
              </a>

              <button
                onClick={handleModalClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#f3e5ab] transition-all cursor-pointer"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
