import React from 'react';
import { X, Crown, Printer, Award } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentName
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundManager.playChime();
    window.print();
  };

  const serialNumber = `GHOP-CERT-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
  const issueDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <div className="relative max-w-4xl w-full bg-[#08090c] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playChime();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-neutral-300 hover:text-white border border-[#d4af37]/30 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* The Printable High-End Certificate Canvas */}
        <div className="relative bg-gradient-to-br from-[#121319] via-[#0b0c10] to-[#121319] border-4 border-[#d4af37]/60 p-8 sm:p-12 rounded-xl text-center shadow-2xl space-y-6 overflow-hidden">
          
          {/* Ornamental Inner Border */}
          <div className="absolute inset-3 border border-[#d4af37]/30 rounded-lg pointer-events-none" />
          
          {/* Certificate Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Crown className="w-8 h-8 text-[#d4af37]" />
            </div>
            <p className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#d4af37]">
              GHOP LUXURY STUDIOS & ACADEMY OF VISUAL ARTS
            </p>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-wider text-white">
              CERTIFICATE OF LUXURY MASTERY
            </h2>
          </div>

          <p className="font-cormorant text-base italic text-neutral-300">
            This certifies that the esteemed visual producer
          </p>

          {/* Student Name */}
          <div className="py-2 border-b-2 border-[#d4af37]/50 max-w-md mx-auto">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient tracking-wide">
              {studentName}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Has demonstrated comprehensive command over the <strong>$1,000,000 Studio Playbook</strong>, including High-Ticket Commercial Licensing Physics, Inverse Square Studio Lighting Geometry, 18-Hour Royal Bridal Chemistry, and Omnichannel Client Acquisition Systems.
          </p>

          <div className="inline-block px-4 py-1.5 rounded-full bg-[#1c1810] border border-[#d4af37] text-xs font-mono text-[#f3e5ab] uppercase tracking-widest font-bold">
            Credential: Ghop Certified Luxury Visual Producer (GCLVP)
          </div>

          {/* Certificate Footer with Seal and Signatures */}
          <div className="pt-8 grid grid-cols-3 items-end gap-4 border-t border-neutral-800 text-xs">
            <div className="text-left font-mono">
              <span className="text-[9px] text-neutral-500 uppercase block">Issue Date:</span>
              <span className="text-neutral-300 font-semibold">{issueDate}</span>
              <span className="text-[9px] text-neutral-500 uppercase block mt-2">Verification ID:</span>
              <span className="text-[#d4af37] text-[10px] font-bold">{serialNumber}</span>
            </div>

            {/* Gold Seal */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#aa820a] p-[2px] shadow-xl">
                <div className="w-full h-full rounded-full bg-[#08090c] flex flex-col items-center justify-center text-center">
                  <Award className="w-6 h-6 text-[#d4af37]" />
                  <span className="text-[7px] font-mono text-[#d4af37] font-bold">VERIFIED</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <span className="font-cormorant italic text-lg text-neutral-200 block">Ghop Master Executive</span>
              <div className="w-32 h-[1px] bg-[#d4af37] ml-auto my-1" />
              <span className="text-[9px] text-neutral-500 font-mono uppercase block">Founder & Creative Director</span>
            </div>
          </div>

        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={handlePrint}
            className="px-6 py-2.5 rounded-lg bg-[#1a1c25] hover:bg-[#d4af37] hover:text-black text-[#d4af37] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border border-[#d4af37]/40 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Official Certificate</span>
          </button>

          <button
            onClick={() => {
              soundManager.playChime();
              onClose();
            }}
            className="px-6 py-2.5 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#f3e5ab] transition-all cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
