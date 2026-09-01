import React, { useState } from 'react';
import { BrandMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandSwitcher } from './components/BrandSwitcher';
import { PortfolioSection } from './components/PortfolioSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { LightingStudioSimulator } from './components/LightingStudioSimulator';
import { MakeupArtistryLab } from './components/MakeupArtistryLab';
import { KnowledgeVault } from './components/KnowledgeVault';
import { SelfAdvertisingEngine } from './components/SelfAdvertisingEngine';
import { PackageConfigurator } from './components/PackageConfigurator';
import { ReviewsAndPress } from './components/ReviewsAndPress';
import { GlobalStudios } from './components/GlobalStudios';
import { Footer } from './components/Footer';
import { FloatingConcierge } from './components/FloatingConcierge';
import { BookingModal } from './components/BookingModal';
import { CertificateModal } from './components/CertificateModal';

export const App: React.FC = () => {
  const [brandMode, setBrandMode] = useState<BrandMode>('empire');
  const [currency, setCurrency] = useState<string>('ZMW');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [prefilledPackageId, setPrefilledPackageId] = useState<string | undefined>(undefined);
  const [prefilledAddOnIds, setPrefilledAddOnIds] = useState<string[] | undefined>(undefined);
  const [prefilledTotal, setPrefilledTotal] = useState<number | undefined>(undefined);
  const [certificateModalOpen, setCertificateModalOpen] = useState<boolean>(false);
  const [certificateStudentName, setCertificateStudentName] = useState<string>('Master Visual Producer');

  const handleOpenBooking = () => {
    setPrefilledPackageId(undefined);
    setPrefilledAddOnIds(undefined);
    setPrefilledTotal(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithDetails = (pkgId: string, addOnIds: string[], total: number) => {
    setPrefilledPackageId(pkgId);
    setPrefilledAddOnIds(addOnIds);
    setPrefilledTotal(total);
    setBookingModalOpen(true);
  };

  const handleOpenAcademy = () => {
    const el = document.getElementById('knowledge-vault');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCertificate = (name: string) => {
    setCertificateStudentName(name);
    setCertificateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-white selection:bg-[#d4af37] selection:text-black">
      
      {/* Top Fixed Luxury Navigation */}
      <Navbar
        brandMode={brandMode}
        setBrandMode={setBrandMode}
        onOpenBooking={handleOpenBooking}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero
          brandMode={brandMode}
          onOpenBooking={handleOpenBooking}
          onOpenAcademy={handleOpenAcademy}
        />

        {/* 2. Brand Ecosystem Switcher (Photography vs Makeup vs Empire) */}
        <BrandSwitcher
          brandMode={brandMode}
          setBrandMode={setBrandMode}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. Filterable Master Portfolio with EXIF & Makeup Data */}
        <PortfolioSection
          onOpenBooking={handleOpenBooking}
        />

        {/* 4. Interactive Before & After Retouching & Glamour Slider */}
        <BeforeAfterSlider />

        {/* 5. Interactive Studio Lighting Lab & Physics Simulator */}
        <LightingStudioSimulator />

        {/* 6. Haute Makeup Artistry Lab & Custom Palette Lab */}
        <MakeupArtistryLab
          onOpenBooking={handleOpenBooking}
        />

        {/* 7. The $1,000,000 Studio Playbook & Knowledge Vault */}
        <KnowledgeVault
          onOpenCertificate={handleOpenCertificate}
        />

        {/* 8. Self-Advertising & Omnichannel Growth Engine */}
        <SelfAdvertisingEngine />

        {/* 9. Bespoke Production Cost & Add-on Configurator */}
        <PackageConfigurator
          currency={currency}
          onOpenBookingWithDetails={handleOpenBookingWithDetails}
        />

        {/* 10. Reviews, Editorial Praise & Press Features */}
        <ReviewsAndPress />

        {/* 11. Global Studios Fleet (NYC, Paris, Dubai, London) with Live Clocks */}
        <GlobalStudios
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Floating VIP WhatsApp & Call Concierge (0760528887 - Lusaka, Zambia) */}
      <FloatingConcierge onOpenBooking={handleOpenBooking} />

      {/* VIP Booking Checkout Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledPackageId={prefilledPackageId}
        prefilledAddOnIds={prefilledAddOnIds}
        prefilledTotal={prefilledTotal}
      />

      {/* Official Masterclass Certificate Modal */}
      <CertificateModal
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
        studentName={certificateStudentName}
      />

    </div>
  );
};

export default App;
