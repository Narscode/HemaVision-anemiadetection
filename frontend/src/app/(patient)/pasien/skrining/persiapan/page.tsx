"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Sun,
  Camera,
  AlertCircle,
  Scan,
  Info,
  Video,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function PreScreeningPreparationPage() {
  const router = useRouter();

  const handleStartCameraCheck = () => {
    // Navigates to the Camera Check page
    router.push(ROUTES.PATIENT.SKRINING_PERIKSA_KAMERA);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] font-sans relative pb-28">
      
      {/* Top Sticky Header */}
      <header className="bg-[#FAF8FF] border-b border-[#C3C6D7] sticky top-0 z-30 px-4 h-16 flex items-center gap-3">
        <Link
          href={ROUTES.PATIENT.SKRINING}
          className="p-2 -ml-2 rounded-full hover:bg-black/5 text-[#434655] transition-colors"
          aria-label="Kembali"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-[#004AC6] text-base font-bold leading-8 tracking-tight">
          Sebelum Memulai
        </h1>
      </header>

      <div className="w-full max-w-[640px] mx-auto p-4 sm:p-6 space-y-6">
        
        {/* Intro Subtext */}
        <p className="text-[#434655] text-base font-normal leading-relaxed">
          Untuk memastikan akurasi analisis HemaVision, pastikan Anda mempersiapkan 3 area pengambilan gambar dengan benar.
        </p>

        {/* 3 Preparation Cards Grid */}
        <div className="space-y-4">
          
          {/* Card 1: 1. Mata (Konjungtiva) */}
          <div className="bg-white rounded-xl border border-[#C3C6D7] shadow-2xs overflow-hidden">
            <div className="relative w-full h-32 bg-[#F3F3FE] flex items-end p-2.5 sm:p-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                alt="Konjungtiva Mata"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 px-2.5 py-1.5 bg-[#FAF8FF]/85 backdrop-blur-md rounded border border-white/50">
                <span className="text-[#004AC6] text-sm font-bold leading-5">
                  1. Mata (Konjungtiva)
                </span>
              </div>
            </div>
            <div className="p-3 text-center bg-white">
              <p className="text-[#434655] text-sm font-normal leading-5">
                Tarik perlahan kelopak mata bawah.
              </p>
            </div>
          </div>

          {/* Card 2: 2. Kuku Jari */}
          <div className="bg-white rounded-xl border border-[#C3C6D7] shadow-2xs overflow-hidden">
            <div className="relative w-full h-32 bg-[#F3F3FE] flex items-end p-2.5 sm:p-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80"
                alt="Kuku Jari"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 px-2.5 py-1.5 bg-[#FAF8FF]/85 backdrop-blur-md rounded border border-white/50">
                <span className="text-[#004AC6] text-sm font-bold leading-5">
                  2. Kuku Jari
                </span>
              </div>
            </div>
            <div className="p-3 text-center bg-white">
              <p className="text-[#434655] text-sm font-normal leading-5">
                Pastikan kuku bersih tanpa pewarna.
              </p>
            </div>
          </div>

          {/* Card 3: 3. Telapak Tangan */}
          <div className="bg-white rounded-xl border border-[#C3C6D7] shadow-2xs overflow-hidden">
            <div className="relative w-full h-32 bg-[#F3F3FE] flex items-end p-2.5 sm:p-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
                alt="Telapak Tangan"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 px-2.5 py-1.5 bg-[#FAF8FF]/85 backdrop-blur-md rounded border border-white/50">
                <span className="text-[#004AC6] text-sm font-bold leading-5">
                  3. Telapak Tangan
                </span>
              </div>
            </div>
            <div className="p-3 text-center bg-white">
              <p className="text-[#434655] text-sm font-normal leading-5">
                Buka telapak tangan sepenuhnya.
              </p>
            </div>
          </div>

        </div>

        {/* Section: Persiapan Lingkungan */}
        <div className="bg-white rounded-xl border border-[#C3C6D7] shadow-2xs p-5 sm:p-6 space-y-4">
          <h2 className="text-[#191B23] text-2xl font-semibold leading-8 pb-2 border-b border-[#C3C6D7]">
            Persiapan Lingkungan
          </h2>

          <div className="space-y-4 pt-1">
            
            {/* Requirement 1: Pencahayaan cukup */}
            <div className="flex items-start gap-3">
              <Sun className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-[#191B23] text-sm font-medium leading-5">
                  Pencahayaan cukup
                </h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Gunakan cahaya ruangan yang terang dan merata.
                </p>
              </div>
            </div>

            {/* Requirement 2: Kamera bersih */}
            <div className="flex items-start gap-3">
              <Camera className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-[#191B23] text-sm font-medium leading-5">
                  Kamera bersih
                </h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Bersihkan lensa kamera perangkat Anda dari noda atau sidik jari.
                </p>
              </div>
            </div>

            {/* Requirement 3: Hindari cahaya langsung */}
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-[#191B23] text-sm font-medium leading-5">
                  Hindari cahaya langsung
                </h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Jangan membelakangi jendela atau sumber cahaya kuat (backlight).
                </p>
              </div>
            </div>

            {/* Requirement 4: Ikuti panduan layar */}
            <div className="flex items-start gap-3">
              <Scan className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-[#191B23] text-sm font-medium leading-5">
                  Ikuti panduan layar
                </h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Posisikan area tubuh tepat di dalam garis panduan pada layar kamera nanti.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Alert Banner: Penting */}
        <div className="p-4 sm:p-5 bg-[#86F2E4]/20 border border-[#86F2E4] rounded-xl flex items-start gap-3 text-left">
          <Info className="w-5 h-5 text-[#006A61] flex-shrink-0 mt-0.5" />
          <p className="text-[#006F66] text-base font-bold leading-relaxed">
            Penting: <span className="font-semibold">Kualitas gambar dapat memengaruhi hasil skrining. Ikuti petunjuk di atas untuk hasil analisis hematologi yang optimal.</span>
          </p>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8FF] border-t border-[#C3C6D7] p-4 shadow-[0px_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="w-full max-w-[640px] mx-auto">
          <button
            onClick={handleStartCameraCheck}
            className="w-full py-3.5 px-4 bg-[#2563EB] hover:bg-[#004AC6] active:scale-[0.99] text-white font-semibold text-sm rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Video className="w-5 h-5" />
            <span>Periksa Kamera</span>
          </button>
        </div>
      </div>

    </main>
  );
}
