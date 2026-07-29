"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PatientHeader } from "@/components/patient/PatientHeader";
import { PatientBottomNavigation } from "@/components/patient/PatientBottomNavigation";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Full page mode without top header/bottom navbar ONLY for onboarding & setup
  const isFullPage =
    (pathname.toLowerCase().startsWith("/pasien/onboarding") && !pathname.toLowerCase().includes("/selesai")) ||
    pathname.startsWith("/pasien/skrining/persiapan") ||
    pathname.startsWith("/pasien/skrining/periksa-kamera") ||
    pathname.startsWith("/pasien/skrining/capture") ||
    pathname.startsWith("/pasien/skrining/proses") ||
    pathname.startsWith("/pasien/skrining/bantuan") ||
    pathname.startsWith("/pasien/setup");

  if (isFullPage) {
    return <div className="min-h-screen bg-[#FAF8FF]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#FAF8FF] flex flex-col justify-between relative pb-24">
      <PatientHeader />
      <main className="flex-1 w-full max-w-[640px] mx-auto">
        {children}
      </main>
      <PatientBottomNavigation />
    </div>
  );
}
