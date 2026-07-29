"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  Building2,
  ExternalLink,
  Info,
  ChevronRight,
  ShieldAlert,
  Activity,
  FileText,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function PatientScreeningResultOverviewPage() {
  const router = useRouter();
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleFollowUpRecommendation = () => {
    router.push(ROUTES.PATIENT.TINDAK_LANJUT);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FAF8FF] via-[#FAF8FF] to-[#FAF8FF] font-sans pb-28 flex flex-col items-center justify-start p-4 sm:p-6 select-none overflow-hidden">
      
      <div className="w-full max-w-[672px] mx-auto py-6 flex flex-col items-center space-y-6 animate-pop-in">
        
        {/* Header Title & Location */}
        <div className="text-center space-y-2">
          <h1 className="text-[#191B23] text-2xl sm:text-3xl font-semibold leading-snug tracking-tight">
            Hasil Skrining Anda (20 Juli 2026)
          </h1>
          <div className="flex items-center justify-center gap-1.5 text-[#434655] text-base font-normal">
            <Building2 className="w-4 h-4 text-[#434655]" />
            <span>Puskesmas Jakarta Selatan</span>
          </div>
        </div>

        {/* Main Screening Result Hero Card (Terracotta / Amber Warning Theme) */}
        <div className="w-full bg-[#BC4800] rounded-xl border border-[#943700] p-8 sm:p-10 shadow-xl flex flex-col items-center text-center space-y-4 text-[#FFEDE6] animate-pop-in relative overflow-hidden group">
          
          {/* Subtle Radial Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(255,237,230,0.15)_0%,rgba(255,237,230,0)_80%)] pointer-events-none" />

          {/* Animated Warning Icon Badge */}
          <div className="p-3 bg-[#FFEDE6]/15 rounded-2xl flex items-center justify-center text-[#FFEDE6] backdrop-blur-xs animate-bounce [animation-duration:2.5s]">
            <AlertTriangle className="w-12 h-12 text-[#FFEDE6] stroke-[2.2] drop-shadow-sm" />
          </div>

          {/* Result Level Title */}
          <div className="space-y-1">
            <h2 className="text-[#FFEDE6] text-2xl sm:text-3xl font-semibold leading-tight tracking-wide uppercase">
              RISIKO ANEMIA:<br />SEDANG
            </h2>
          </div>

          {/* Result Description */}
          <p className="text-[#FFEDE6]/90 text-base sm:text-lg font-normal leading-relaxed max-w-lg mx-auto">
            Hasil menunjukkan adanya indikasi yang perlu diperhatikan. Ini merupakan hasil skrining, bukan diagnosis anemia.
          </p>
        </div>

        {/* Action Buttons Stack */}
        <div className="w-full space-y-3 pt-2">
          
          {/* Button 1: Rekomendasi Tindak Lanjut */}
          <button
            type="button"
            onClick={handleFollowUpRecommendation}
            className="group w-full py-4 px-6 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-[#004AC6]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Rekomendasi Tindak Lanjut</span>
            <ExternalLink className="w-5 h-5 text-white stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Button 2: Lihat Detail Hasil */}
          <button
            type="button"
            onClick={() => setShowDetailModal(true)}
            className="w-full py-3.5 px-6 bg-transparent hover:bg-white/80 active:scale-[0.99] border border-[#C3C6D7] text-[#004AC6] font-bold text-sm sm:text-base rounded-xl shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Lihat Detail Hasil</span>
            <ChevronRight className="w-4 h-4 text-[#004AC6]" />
          </button>

        </div>

        {/* Disclaimer Info Card */}
        <div className="w-full pt-4">
          <div className="w-full p-4 bg-[#EDEDF9] rounded-lg border border-[#C3C6D7] flex items-start gap-4 shadow-2xs">
            <Info className="w-5 h-5 text-[#737686] flex-shrink-0 mt-0.5" />
            <p className="text-[#434655] text-sm font-normal leading-relaxed">
              HemaVision membantu skrining awal, tidak menggantikan diagnosis tenaga kesehatan.
            </p>
          </div>
        </div>

      </div>

      {/* Detailed Result Breakdown Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-[500px] bg-white rounded-2xl p-6 space-y-6 shadow-2xl animate-pop-in">
            <div className="flex items-center justify-between border-b border-[#C3C6D7]/40 pb-4">
              <div className="flex items-center gap-2 text-[#004AC6] font-bold text-lg">
                <Activity className="w-5 h-5" />
                <span>Rincian Detail Skrining</span>
              </div>
              <button
                type="button"
                onClick={() => setShowDetailModal(false)}
                className="text-[#737686] hover:text-[#191B23] font-bold text-sm p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-[#434655]">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-[#737686]">Tanggal Skrining:</span>
                <span className="font-semibold text-[#191B23]">20 Juli 2026</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-[#737686]">Estimasi Hb AI:</span>
                <span className="font-semibold text-[#BC4800]">10.8 g/dL (Sedang)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-[#737686]">Kualitas Citra Konjungtiva:</span>
                <span className="font-semibold text-[#006F66]">Memenuhi Standar</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-[#737686]">Kualitas Citra Kuku & Telapak:</span>
                <span className="font-semibold text-[#006F66]">Memenuhi Standar</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowDetailModal(false)}
              className="w-full py-3 bg-[#004AC6] text-white font-semibold text-sm rounded-xl hover:bg-[#003DA3] transition-colors"
            >
              Tutup Rincian
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
