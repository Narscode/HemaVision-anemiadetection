"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  Hand,
  Sparkles,
  BarChart2,
  Loader2,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

const CAPTURED_IMAGES = [
  {
    id: "eye",
    title: "Mata",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    status: "Memenuhi standar",
  },
  {
    id: "nail",
    title: "Kuku",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    status: "Memenuhi standar",
  },
  {
    id: "palm",
    title: "Telapak Tangan",
    icon: Hand,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    status: "Memenuhi standar",
  },
];

export default function ImageAnalysisReadinessPage() {
  const router = useRouter();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate AI Hematology Analysis Processing
    setTimeout(() => {
      router.push(ROUTES.PATIENT.ONBOARDING_SELESAI);
    }, 1500);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FAF8FF] to-[#FAF8FF] font-sans pb-24 select-none">
      
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-30 w-full h-[64px] px-4 bg-[#FAF8FF]/90 backdrop-blur-md border-b border-[#C3C6D7] flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-4">
          <Link
            href={ROUTES.PATIENT.SKRINING_CAPTURE}
            className="p-2 rounded-full hover:bg-black/5 active:scale-95 text-[#434655] transition-all cursor-pointer"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-[#004AC6] text-2xl font-bold font-sans tracking-tight">
            HemaVision
          </h1>
        </div>

        {/* Profile Avatar Badge */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C3C6D7] shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Profil Pasien"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-[640px] mx-auto px-4 py-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Title & Description Header */}
        <div className="space-y-2 text-center">
          <h2 className="text-[#191B23] text-2xl sm:text-3xl font-semibold leading-tight">
            Citra Siap Dianalisis
          </h2>
          <p className="text-[#434655] text-base sm:text-lg font-normal leading-relaxed max-w-md mx-auto">
            Pastikan semua citra memenuhi standar sebelum memulai proses analisis hematologi.
          </p>
        </div>

        {/* 3 Captured Images Cards */}
        <div className="space-y-6">
          {CAPTURED_IMAGES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#C3C6D7] p-4 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group hover:border-[#004AC6]/40"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Image Container with Dark Gradient Overlay & Label */}
                <div className="relative w-full h-[220px] sm:h-[243px] rounded-lg overflow-hidden bg-[#E1E2ED] shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                    <div className="flex items-center gap-2 text-white font-medium text-sm drop-shadow-md">
                      <IconComponent className="w-4 h-4 text-white" />
                      <span>{item.title}</span>
                    </div>
                  </div>
                </div>

                {/* Quality Standard Status Badge */}
                <div className="flex items-center gap-2 text-[#006A61] font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#006A61] animate-pulse" />
                  <span>{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Readiness & Action Card */}
        <div className="bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-sm space-y-6 transition-all hover:shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#86F2E4] flex items-center justify-center text-[#006F66] flex-shrink-0 shadow-xs">
              <CheckCircle2 className="w-6 h-6 text-[#006F66]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[#191B23] text-xl font-semibold leading-snug">
                Kesiapan Analisis
              </h3>
              <p className="text-[#434655] text-base font-normal leading-relaxed">
                3 dari 3 citra memenuhi persyaratan kualitas.
              </p>
            </div>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
            className="w-full py-3.5 px-6 bg-[#2563EB] hover:bg-[#004AC6] active:scale-[0.98] text-white font-medium text-base rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 text-white animate-spin" />
                <span>Memproses Analisis...</span>
              </>
            ) : (
              <>
                <BarChart2 className="w-5 h-5 text-white" />
                <span>Mulai Analisis</span>
              </>
            )}
          </button>
        </div>

      </div>

    </main>
  );
}
