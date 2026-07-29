"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  X,
  ImageOff,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function ScreeningImageQualityHelpPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push(ROUTES.PATIENT.HOME);
  };

  const handleRetry = () => {
    router.push(ROUTES.PATIENT.SKRINING_CAPTURE);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FAF8FF] via-[#FAF8FF] to-[#FAF8FF] font-sans flex flex-col items-center justify-between pb-28 select-none overflow-hidden">
      
      {/* Top Header Bar */}
      <header className="w-full h-[56px] px-4 bg-[#FAF8FF] border-b border-[#C3C6D7]/30 flex items-center justify-between z-20">
        <button
          type="button"
          onClick={handleClose}
          className="p-2 rounded-full text-[#434655] hover:text-[#191B23] hover:bg-[#E7E7F3]/50 transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>
        <h1 className="text-[#434655] text-sm font-medium">
          Bantuan Skrining
        </h1>
        <div className="w-9" /> {/* Spacer for centering */}
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-[448px] mx-auto px-4 py-8 flex flex-col items-center space-y-8">
        
        {/* Top Hero Edge Case Icon & Description */}
        <div className="flex flex-col items-center text-center space-y-4">
          
          {/* Grey Circular Icon Badge */}
          <div className="w-24 h-24 bg-[#E7E7F3] rounded-full border border-[#C3C6D7]/50 shadow-xs flex items-center justify-center text-[#737686]">
            <ImageOff className="w-10 h-10 stroke-[1.8]" />
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2 px-2">
            <h2 className="text-[#191B23] text-2xl sm:text-3xl font-semibold leading-snug tracking-tight">
              Kami Belum Mendapatkan<br />Citra yang Sesuai
            </h2>
            <p className="text-[#434655] text-base font-normal leading-relaxed max-w-sm mx-auto">
              Perbedaan kondisi pencahayaan atau karakteristik kamera memengaruhi kualitas gambar. Untuk hasil yang akurat, kami menyarankan metode alternatif.
            </p>
          </div>

        </div>

        {/* Healthcare Worker Alternative Card */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
          
          {/* Header Row */}
          <div className="flex items-center gap-3.5 pb-3 border-b border-[#C3C6D7]/40">
            <div className="w-10 h-10 bg-[#004AC6]/10 rounded-full flex items-center justify-center text-[#004AC6] flex-shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-[#191B23] text-lg font-semibold leading-snug">
              Skrining dengan Tenaga<br />Kesehatan
            </h3>
          </div>

          {/* 3 Benefit Items */}
          <div className="space-y-3 pt-1">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
              <p className="text-[#434655] text-base font-normal leading-snug">
                Kondisi lingkungan dan pencahayaan terkontrol
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
              <p className="text-[#434655] text-base font-normal leading-snug">
                Dibantu langsung oleh petugas medis berpengalaman
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
              <p className="text-[#434655] text-base font-normal leading-snug">
                Menggunakan perangkat diagnostik terstandarisasi
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Sticky Action Bar */}
      <footer className="fixed bottom-0 inset-x-0 bg-[#FAF8FF] border-t border-[#C3C6D7]/30 p-4 z-30 flex justify-center shadow-lg">
        <div className="w-full max-w-[448px] mx-auto">
          <button
            type="button"
            onClick={handleRetry}
            className="group w-full py-3.5 px-6 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.98] text-white font-medium text-sm rounded-lg shadow-md shadow-[#004AC6]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Ulangi Lagi</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </footer>

    </main>
  );
}
