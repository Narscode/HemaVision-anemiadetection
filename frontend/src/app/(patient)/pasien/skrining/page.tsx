"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  Heart,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function PatientScreeningOverviewPage() {
  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] p-4 sm:p-6 font-sans space-y-6 pb-24">
      <div className="w-full max-w-[640px] mx-auto space-y-6">
        
        {/* Main Hero Card: Skrining Risiko Anemia */}
        <div className="relative w-full bg-[#004AC6] rounded-xl shadow-md border border-[#C3C6D7] p-6 sm:p-8 overflow-hidden text-white space-y-6">
          {/* Subtle Diagonal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          {/* Header Title & Subtitle */}
          <div className="space-y-3 text-center relative z-10">
            <h1 className="text-white text-2xl sm:text-3xl font-semibold leading-8">
              Skrining Risiko Anemia
            </h1>
            <p className="text-white/90 text-sm sm:text-base font-normal leading-relaxed max-w-md mx-auto">
              Lakukan skrining awal risiko anemia melalui pengambilan citra mata, kuku/jari, dan telapak tangan.
            </p>
          </div>

          {/* Bullet Features List */}
          <div className="space-y-2 py-2 text-white/90 text-sm font-medium flex flex-col items-center justify-center relative z-10">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white flex-shrink-0" />
              <span>Sekitar 3–5 menit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
              <span>Tanpa jarum</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
              <span>Tanpa pengambilan darah</span>
            </div>
          </div>

          {/* Primary Action Button: Mulai Skrining */}
          <div className="relative z-10 pt-2">
            <Link
              href={ROUTES.PATIENT.SKRINING_PERSIAPAN}
              className="w-full py-3.5 px-6 bg-[#FAF8FF] hover:bg-white active:scale-[0.99] text-[#004AC6] font-bold text-sm rounded-lg shadow-sm transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>Mulai Skrining</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Section: Hasil Skrining Terakhir */}
        <div className="space-y-4 pt-2">
          <h2 className="text-[#191B23] text-2xl font-semibold leading-8">
            Hasil Skrining Terakhir
          </h2>

          <div className="space-y-4">
            
            {/* Card 1: Detak Jantung */}
            <div className="p-5 bg-[#FAF8FF] sm:bg-white rounded-xl border border-[#C3C6D7] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Heart className="w-5 h-5 text-[#006A61] fill-[#006A61]/10 stroke-[2.2]" />
                  <span className="text-[#434655] text-sm font-medium">Detak Jantung</span>
                </div>
                <span className="px-2.5 py-1 bg-[#EDEDF9] text-[#434655] text-xs font-normal rounded">
                  14 Okt
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-[#191B23] text-4xl sm:text-5xl font-bold leading-none">
                  72
                </span>
                <span className="text-[#434655] text-base font-normal">bpm</span>
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-[#86F2E4] text-[#006F66] text-xs font-bold rounded-full">
                  Normal
                </span>
              </div>
            </div>

            {/* Card 2: Risiko Anemia */}
            <div className="p-5 bg-[#FAF8FF] sm:bg-white rounded-xl border border-[#C3C6D7] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-[#004AC6] stroke-[2.2]" />
                  <span className="text-[#434655] text-sm font-medium">Risiko Anemia</span>
                </div>
                <span className="px-2.5 py-1 bg-[#EDEDF9] text-[#434655] text-xs font-normal rounded">
                  14 Okt
                </span>
              </div>

              <div>
                <span className="text-[#191B23] text-2xl font-semibold leading-8">
                  Rendah
                </span>
              </div>

              {/* Progress Meter Bar */}
              <div className="w-full h-2 bg-[#EDEDF9] rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-[#006A61] rounded-full" />
              </div>

              <p className="text-[#434655] text-xs font-normal leading-4">
                Berdasarkan pemindaian konjungtiva dan kuku.
              </p>
            </div>

            {/* Card 3: Rekomendasi */}
            <div className="p-5 bg-[#FAF8FF] sm:bg-white rounded-xl border border-[#C3C6D7] shadow-2xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#DBE1FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lightbulb className="w-5 h-5 text-[#00174B]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[#191B23] text-sm font-bold leading-5">
                    Rekomendasi
                  </h3>
                  <p className="text-[#434655] text-sm font-normal leading-relaxed">
                    Lanjutkan pola makan sehat kaya zat besi. Skrining berikutnya disarankan dalam 30 hari.
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <Link
                  href={ROUTES.PATIENT.HASIL}
                  className="inline-flex items-center gap-1 text-[#004AC6] hover:underline text-sm font-medium transition-all"
                >
                  <span>Lihat Detail</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
