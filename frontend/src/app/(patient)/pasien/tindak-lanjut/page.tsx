"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  Activity,
  FileText,
  UtensilsCrossed,
  Footprints,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  Syringe,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function FollowUpRecommendationsPage() {
  const router = useRouter();

  const handleStartNewScreening = () => {
    router.push(ROUTES.PATIENT.SKRINING_PERSIAPAN);
  };

  const handleGoToDetail = () => {
    router.push(ROUTES.PATIENT.HASIL_DETAIL);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] font-sans pb-28 flex flex-col items-center justify-start select-none overflow-x-hidden">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[672px] mx-auto px-4 py-6 space-y-10">
        
        {/* SECTION 1: LANGKAH DIREKOMENDASIKAN */}
        <section className="space-y-4">
          <h2 className="text-[#191B23] text-2xl font-bold tracking-tight">
            Langkah Direkomendasikan
          </h2>

          <div className="space-y-4">
            
            {/* Step Card 1: Pemeriksaan Hb Konfirmasi */}
            <div
              onClick={handleGoToDetail}
              className="group w-full bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden space-y-2 cursor-pointer outline-1 outline-offset-[-1px] outline-[#C3C6D7] hover:outline-[#2563EB] hover:bg-gradient-to-r hover:from-white hover:to-[#2563EB]/5"
            >
              {/* Corner Curve Decoration */}
              <div className="w-24 h-24 bg-[#004AC6]/5 rounded-bl-full absolute -top-4 -right-4 pointer-events-none group-hover:bg-[#2563EB]/15 transition-colors duration-300" />

              {/* Card Header Row */}
              <div className="flex items-center justify-between pb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 bg-[#E7E7F3] text-[#191B23] border border-[#C3C6D7] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:scale-110 group-hover:shadow-md">
                  1
                </div>
                <span className="px-3 py-1 bg-[#E1E2ED] text-[#434655] text-xs font-medium rounded-full group-hover:bg-[#2563EB]/10 group-hover:text-[#004AC6] transition-colors">
                  Klinis
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[#191B23] text-xl sm:text-2xl font-semibold leading-snug group-hover:text-[#004AC6] transition-colors">
                Pemeriksaan Hb Konfirmasi
              </h3>

              {/* Status Badge */}
              <div className="flex items-center gap-2 pt-1 text-[#006A61] text-sm font-bold">
                <Calendar className="w-4 h-4 text-[#006A61] group-hover:animate-pulse" />
                <span>Dijadwalkan - 24 Juli 2026</span>
              </div>

              {/* Body Description */}
              <p className="text-[#434655] text-sm font-normal leading-relaxed pt-1">
                Pemeriksaan darah lengkap lanjutan untuk memverifikasi tingkat hemoglobin.
              </p>
            </div>

            {/* Step Card 2: Konsultasi Tenaga Kesehatan */}
            <div
              onClick={handleGoToDetail}
              className="group w-full bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden space-y-2 cursor-pointer outline-1 outline-offset-[-1px] outline-[#C3C6D7] hover:outline-[#2563EB] hover:bg-gradient-to-r hover:from-white hover:to-[#BC4800]/5"
            >
              {/* Corner Curve Decoration */}
              <div className="w-24 h-24 bg-[#BC4800]/10 rounded-bl-full absolute -top-4 -right-4 pointer-events-none group-hover:bg-[#BC4800]/20 transition-colors duration-300" />

              {/* Card Header Row */}
              <div className="flex items-center justify-between pb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 bg-[#E7E7F3] text-[#191B23] border border-[#C3C6D7] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:scale-110 group-hover:shadow-md">
                  2
                </div>
                <span className="px-3 py-1 bg-[#E1E2ED] text-[#434655] text-xs font-medium rounded-full group-hover:bg-[#2563EB]/10 group-hover:text-[#004AC6] transition-colors">
                  Konsultasi
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[#191B23] text-xl sm:text-2xl font-semibold leading-snug group-hover:text-[#004AC6] transition-colors">
                Konsultasi Tenaga Kesehatan
              </h3>

              {/* Status Badge */}
              <div className="flex items-center gap-2 pt-1 text-[#434655] text-sm font-medium">
                <Clock className="w-4 h-4 text-[#434655]" />
                <span>Menunggu hasil tes</span>
              </div>

              {/* Body Description */}
              <p className="text-[#434655] text-sm font-normal leading-relaxed pt-1">
                Jadwalkan pertemuan dengan ahli hematologi setelah hasil keluar.
              </p>
            </div>

            {/* Step Card 3: Pantau Kondisi */}
            <div
              className="group w-full bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden space-y-2 cursor-pointer outline-1 outline-offset-[-1px] outline-[#C3C6D7] hover:outline-[#2563EB] hover:bg-gradient-to-r hover:from-white hover:to-[#86F2E4]/10"
            >
              {/* Corner Curve Decoration */}
              <div className="w-24 h-24 bg-[#86F2E4]/20 rounded-bl-full absolute -top-4 -right-4 pointer-events-none group-hover:bg-[#86F2E4]/30 transition-colors duration-300" />

              {/* Card Header Row */}
              <div className="flex items-center justify-between pb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 bg-[#E7E7F3] text-[#191B23] border border-[#C3C6D7] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:scale-110 group-hover:shadow-md">
                  3
                </div>
                <span className="px-3 py-1 bg-[#E1E2ED] text-[#434655] text-xs font-medium rounded-full group-hover:bg-[#2563EB]/10 group-hover:text-[#004AC6] transition-colors">
                  Mandiri
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[#191B23] text-xl sm:text-2xl font-semibold leading-snug group-hover:text-[#004AC6] transition-colors">
                Pantau Kondisi
              </h3>

              {/* Status Badge */}
              <div className="flex items-center gap-2 pt-1 text-[#434655] text-sm font-medium">
                <Activity className="w-4 h-4 text-[#434655]" />
                <span>Berkelanjutan</span>
              </div>

              {/* Body Description */}
              <p className="text-[#434655] text-sm font-normal leading-relaxed pt-1">
                Catat gejala pusing, lelah berlebih, atau sesak napas setiap hari.
              </p>
            </div>

          </div>

          {/* Action Button: Lihat Detail Pemeriksaan */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={handleGoToDetail}
              className="w-full sm:w-auto py-3.5 px-6 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.98] text-white font-bold text-sm rounded-lg shadow-md shadow-[#004AC6]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Lihat Detail Pemeriksaan</span>
            </button>
          </div>
        </section>

        {/* SECTION 2: MENJAGA KESEHATAN SEHARI-HARI */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#191B23]">
            <HeartPulse className="w-6 h-6 text-[#004AC6]" />
            <h2 className="text-2xl font-bold tracking-tight">
              Menjaga Kesehatan Sehari-hari
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Health Card 1: Nutrisi Optimal */}
            <div className="group w-full bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6] p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-pointer">
              <div className="w-12 h-12 bg-[#BC4800]/10 rounded-full flex items-center justify-center text-[#943700] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#BC4800]/20 transition-all">
                <UtensilsCrossed className="w-5 h-5 text-[#943700]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[#191B23] text-lg font-bold group-hover:text-[#004AC6] transition-colors">
                  Nutrisi Optimal
                </h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Tingkatkan asupan makanan kaya zat besi seperti sayuran hijau gelap, daging tanpa lemak, dan kacang-kacangan. Padukan dengan vitamin C.
                </p>
              </div>
            </div>

            {/* Health Card 2: Aktivitas Ringan */}
            <div className="group w-full bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6] p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-pointer">
              <div className="w-12 h-12 bg-[#86F2E4]/20 rounded-full flex items-center justify-center text-[#006A61] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#86F2E4]/40 transition-all">
                <Footprints className="w-5 h-5 text-[#006A61]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[#191B23] text-lg font-bold group-hover:text-[#004AC6] transition-colors">
                  Aktivitas Ringan
                </h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Lakukan aktivitas fisik ringan seperti berjalan kaki 30 menit sehari. Hindari olahraga berat hingga hasil tes keluar.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: SKRINING RISIKO ANEMIA PROMOTION CARD */}
        <section className="pt-2">
          <div className="w-full bg-[#2563EB] rounded-xl border border-[#C3C6D7] p-6 sm:p-8 shadow-md text-white space-y-6 relative overflow-hidden group">
            {/* Background Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />

            <div className="space-y-2 text-center sm:text-left relative z-10">
              <h3 className="text-2xl font-semibold leading-snug">
                Skrining Risiko Anemia
              </h3>
              <p className="text-white/90 text-base font-normal leading-relaxed max-w-lg">
                Lakukan skrining awal risiko anemia melalui pengambilan citra mata, kuku/jari, dan telapak tangan.
              </p>
            </div>

            {/* 3 Feature Tags */}
            <div className="space-y-2 text-sm font-medium text-white/90 relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-white" />
                <span>Sekitar 3–5 menit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Syringe className="w-4 h-4 text-white" />
                <span>Tanpa jarum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Tanpa pengambilan darah</span>
              </div>
            </div>

            {/* Action Button: Mulai Skrining */}
            <div className="relative z-10 pt-2">
              <button
                type="button"
                onClick={handleStartNewScreening}
                className="w-full py-3.5 px-6 bg-[#FAF8FF] hover:bg-white active:scale-[0.98] text-[#004AC6] font-bold text-sm rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Mulai Skrining</span>
                <Sparkles className="w-4 h-4 text-[#004AC6]" />
              </button>
            </div>

          </div>
        </section>

      </div>

    </main>
  );
}
