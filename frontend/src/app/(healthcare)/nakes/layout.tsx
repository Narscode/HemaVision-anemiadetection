import React from "react";
import { HealthcareSidebar } from "@/components/healthcare/HealthcareSidebar";
import { HealthcareHeader } from "@/components/healthcare/HealthcareHeader";

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      <HealthcareSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <HealthcareHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
