"use client";

import React, { useState, use } from "react";
import { PatientHeaderBanner } from "@/components/patient/PatientHeaderBanner";
import { PatientDetailTabs } from "@/components/patient/PatientDetailTabs";
import { LastResultCard } from "@/components/patient/LastResultCard";
import { HemoglobinTrendCard } from "@/components/patient/HemoglobinTrendCard";
import { RecommendedActionsCard } from "@/components/patient/RecommendedActionsCard";
import { RiskFactorsCard } from "@/components/patient/RiskFactorsCard";
import { CurrentSymptomsCard } from "@/components/patient/CurrentSymptomsCard";
import { RecentActivitiesCard } from "@/components/patient/RecentActivitiesCard";

export default function PatientDetailPage({
  params,
}: {
  params: Promise<{ patientId: string }>;
}) {
  const resolvedParams = use(params);
  const patientId = resolvedParams?.patientId || "ID-9921";
  const [activeTab, setActiveTab] = useState("ringkasan");

  return (
    <div className="min-h-screen bg-[#FAF8FF] flex flex-col -m-4 sm:-m-6 lg:-m-8">
      {/* Patient Header Banner */}
      <PatientHeaderBanner
        name="Siti Aminah"
        medicalRecordNumber={patientId.startsWith("ID-") ? patientId : `ID-${patientId}`}
        age={28}
        sex="Perempuan"
        category="Ibu Hamil"
        location="Jakarta Selatan"
        phone="+62 812-3456-XXXX"
        avatarUrl="/patient-siti-aminah.png"
      />

      {/* Tabs Navigation */}
      <PatientDetailTabs
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-6 sm:px-8 py-8 sm:py-10 w-full max-w-7xl mx-auto space-y-8">
        {activeTab === "ringkasan" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <LastResultCard
                lastDate="14 Okt 2023"
                riskTitle="Risiko Sedang"
                riskPercentage={87}
                aiConfidence="Tinggi"
                recommendedBy="HemaVision AI v2.4"
              />
              <RiskFactorsCard />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <HemoglobinTrendCard />
              <CurrentSymptomsCard />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <RecommendedActionsCard />
              <RecentActivitiesCard />
            </div>
          </div>
        )}

        {activeTab === "riwayat" && (
          <div className="p-8 bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs text-center text-slate-600">
            <h3 className="text-lg font-bold text-[#191B23]">Riwayat Skrining Pasien</h3>
            <p className="text-sm text-[#434655] mt-2">
              Menampilkan riwayat lengkap skrining anemia untuk Siti Aminah ({patientId}).
            </p>
          </div>
        )}

        {activeTab === "tindak-lanjut" && (
          <div className="p-8 bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs text-center text-slate-600">
            <h3 className="text-lg font-bold text-[#191B23]">Rencana Tindak Lanjut</h3>
            <p className="text-sm text-[#434655] mt-2">
              Daftar rekomendasi intervensi medis dan jadwal kontrol ulang.
            </p>
          </div>
        )}

        {activeTab === "laporan" && (
          <div className="p-8 bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs text-center text-slate-600">
            <h3 className="text-lg font-bold text-[#191B23]">Laporan Hasil Lab & AI</h3>
            <p className="text-sm text-[#434655] mt-2">
              Unduh atau cetak laporan diagnostik lengkap HemaVision Pro.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
