"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  FileText,
  Building2,
  ExternalLink,
  ChevronRight,
  Info,
  CheckCircle2,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function PatientScreeningResultOverviewPage() {
  const router = useRouter();

  const handleFollowUpRecommendation = () => {
    router.push(ROUTES.PATIENT.TINDAK_LANJUT);
  };

  const handleGoToDetail = () => {
    router.push(ROUTES.PATIENT.HASIL_DETAIL);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] font-sans pb-28 flex flex-col items-center justify-start select-none overflow-x-hidden">
      
      {/* Main Container */}
      <div className="w-full max-w-[672px] mx-auto px-4 py-6 space-y-6">
        
        {/* FACILITY LOCATION & DATE BADGE */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-4 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#004AC6]/10 rounded-full flex items-center justify-center text-[#004AC6]">
              <Building2 className="w-5 h-5 text-[#004AC6]" />
            </div>
            <div>
              <h1 className="text-[#191B23] font-bold text-base">Puskesmas Jaksel</h1>
              <p className="text-[#434655] text-xs font-normal">Pemeriksaan tanggal 20 Juli 2026</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#86F2E4]/30 text-[#006F66] text-xs font-semibold rounded-full border border-[#86F2E4]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#006F66]" />
            <span>Selesai</span>
          </div>
        </div>

        {/* HERO TERRACOTTA RESULT CARD */}
        <div className="w-full bg-gradient-to-br from-[#FF9E78] via-[#D85A18] to-[#BC4800] rounded-2xl p-6 sm:p-8 shadow-xl text-white space-y-6 relative overflow-hidden group">
          
          {/* Subtle Ambient Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />

          {/* Header Row: Badge */}
          <div className="flex items-center justify-between relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold uppercase tracking-wider text-white">
              <AlertTriangle className="w-4 h-4 text-amber-200 fill-amber-200/20" />
              <span>HASIL SKRINING</span>
            </div>
            <span className="text-xs text-white/80 font-mono">HMV-200726-00182</span>
          </div>

          {/* Result Level Title */}
          <div className="space-y-1 relative z-10">
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight uppercase">
              RISIKO ANEMIA:<br />SEDANG
            </h2>
          </div>

          {/* Result Description */}
          <p className="text-[#FFEDE6] text-base sm:text-lg font-normal leading-relaxed max-w-lg relative z-10">
            Hasil menunjukkan adanya indikasi yang perlu diperhatikan. Ini merupakan hasil skrining, bukan diagnosis anemia.
          </p>

          {/* Action Buttons Stack */}
          <div className="w-full space-y-3 pt-2 relative z-10">
            
            {/* Button 1: Rekomendasi Tindak Lanjut */}
            <button
              type="button"
              onClick={handleFollowUpRecommendation}
              className="group/btn w-full py-4 px-6 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-[#004AC6]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Rekomendasi Tindak Lanjut</span>
              <ExternalLink className="w-5 h-5 text-white stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>

            {/* Button 2: Lihat Detail Hasil */}
            <button
              type="button"
              onClick={handleGoToDetail}
              className="w-full py-3.5 px-6 bg-white/20 hover:bg-white/30 active:scale-[0.99] border border-white/30 text-white font-bold text-sm sm:text-base rounded-xl shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Lihat Detail Hasil</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

        {/* MEDICAL DISCLAIMER CARD */}
        <div className="w-full bg-[#EDEDF9] border border-[#C3C6D7]/60 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-[#434655]">
          <Info className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Pemeriksaan ini memanfaatkan teknologi visi komputer non-invasif. Konsultasikan ke fasilitas pelayanan kesehatan terdekat untuk mendapatkan pemeriksaan konfirmasi Hb resmi.
          </p>
        </div>

      </div>

    </main>
  );
}
