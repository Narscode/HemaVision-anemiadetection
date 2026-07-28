"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PatientHeader } from "@/components/patient/PatientHeader";
import { PatientBottomNavigation } from "@/components/patient/PatientBottomNavigation";
import { AppContainer } from "@/components/layout/AppContainer";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isOnboarding = pathname === "/pasien";

  if (isOnboarding) {
    return <div className="min-h-screen bg-[#FAF8FF]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between pb-20">
      <PatientHeader />
      <main className="flex-1">
        <AppContainer size="narrow" className="py-6">
          {children}
        </AppContainer>
      </main>
      <PatientBottomNavigation />
    </div>
  );
}
