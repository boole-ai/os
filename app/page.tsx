"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DeviceShowcase } from "@/components/DeviceShowcase";
import { LayersSection } from "@/components/LayersSection";
import { AppGenDemo } from "@/components/AppGenDemo";
import { PrivacySection } from "@/components/PrivacySection";
import { LicensingSection } from "@/components/LicensingSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { RFIModal } from "@/components/RFIModal";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  const [rfiOpen, setRfiOpen] = useState(false);
  const [showTiers] = useState(true);

  return (
    <div className="bg-[#0F0F11] text-[#F2F1ED] min-h-screen">
      <Navigation onOpenRfi={() => setRfiOpen(true)} />

      <div className="bg-[#2E5BFF] text-[#F2F1ED]">
        <div className="max-w-[1280px] mx-auto px-16 py-6 flex items-center justify-between gap-10 flex-wrap">
          <span className="font-[family-name:var(--font-heading)] font-medium text-[26px] leading-[1.2] tracking-[-0.025em]">
            Licensed to device manufacturers. Not sold to consumers.
          </span>
          <span className="font-[family-name:var(--font-mono)] font-medium text-[10px] tracking-[0.22em] text-[#F2F1ED]">
            SHIPPING SILICON, TODAY
          </span>
        </div>
      </div>

      <Hero onOpenRfi={() => setRfiOpen(true)} />
      <DeviceShowcase />
      <LayersSection />
      <AppGenDemo />
      <PrivacySection />
      {showTiers && <LicensingSection />}
      <FinalCTA onOpenRfi={() => setRfiOpen(true)} />
      <Footer />

      {rfiOpen && (
        <RFIModal onClose={() => setRfiOpen(false)} />
      )}
    </div>
  );
}
