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
  Zap,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

const CAPTURED_IMAGES = [
  {
    id: "eye",
    title: "Mata (Konjungtiva)",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    status: "Memenuhi standar",
    delay: "0ms",
  },
  {
    id: "nail",
    title: "Kuku Jari",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    status: "Memenuhi standar",
    delay: "150ms",
  },
  {
    id: "palm",
    title: "Telapak Tangan",
    icon: Hand,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    status: "Memenuhi standar",
    delay: "300ms",
  },
];

export default function ImageAnalysisReadinessPage() {
  const router = useRouter();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      router.push(ROUTES.PATIENT.SKRINING_PROSES);
    }, 500);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FAF8FF] via-[#F3F3FE] to-[#FAF8FF] font-sans pb-24 select-none">
      
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
          <div className="flex items-center gap-2">
            <h1 className="text-[#004AC6] text-2xl font-bold font-sans tracking-tight">
              HemaVision
            </h1>
            <Sparkles className="w-4 h-4 text-[#004AC6] animate-pulse" />
          </div>
        </div>

        {/* Profile Avatar Badge */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#004AC6]/30 shadow-xs hover:scale-110 transition-transform cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Profil Pasien"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-[640px] mx-auto px-4 py-8 space-y-8">
        
        {/* Title & Description Header with Animated Sparkle Icon */}
        <div className="space-y-3 text-center animate-pop-in">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-[#004AC6]/10 rounded-full text-[#004AC6] text-xs font-semibold tracking-wide uppercase shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#004AC6] animate-bounce" />
            <span>Kualitas Citra Optimal</span>
          </div>
          <h2 className="text-[#191B23] text-2xl sm:text-3xl font-bold leading-tight">
            Citra Siap Dianalisis
          </h2>
          <p className="text-[#434655] text-base sm:text-lg font-normal leading-relaxed max-w-md mx-auto">
            Pastikan semua citra memenuhi standar sebelum memulai proses analisis hematologi AI.
          </p>
        </div>

        {/* 3 Captured Images Cards with Staggered Motion Animations */}
        <div className="space-y-6">
          {CAPTURED_IMAGES.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#C3C6D7] p-4 shadow-sm hover:shadow-lg transition-all duration-500 space-y-4 group hover:border-[#004AC6]/50 animate-pop-in relative overflow-hidden"
                style={{ animationDelay: item.delay }}
              >
                {/* Image Container with Dark Gradient Overlay & Scan Shine */}
                <div className="relative w-full h-[220px] sm:h-[243px] rounded-xl overflow-hidden bg-[#E1E2ED] shadow-inner group-hover:shadow-md transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95"
                  />
                  
                  {/* Subtle Laser Scan Line Effect */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#86F2E4] to-transparent shadow-[0_0_12px_#86F2E4] animate-scan-shine pointer-events-none" />

                  {/* Gradient Overlay & Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm drop-shadow-md">
                      <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </div>

                {/* Quality Standard Status Badge */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 text-[#006A61] font-semibold text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#86F2E4]/40 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#006A61] animate-pulse" />
                    </div>
                    <span>{item.status}</span>
                  </div>

                  <span className="text-xs text-slate-400 font-mono">
                    AI Quality Pass 100%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Readiness & Action Card with Motion Glow */}
        <div className="bg-white rounded-2xl border border-[#C3C6D7] p-6 shadow-md space-y-6 transition-all duration-300 hover:shadow-xl animate-pop-in relative overflow-hidden" style={{ animationDelay: "450ms" }}>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#86F2E4] flex items-center justify-center text-[#006F66] flex-shrink-0 shadow-sm animate-float-gentle">
              <CheckCircle2 className="w-6 h-6 text-[#006F66]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[#191B23] text-xl font-bold leading-snug">
                Kesiapan Analisis
              </h3>
              <p className="text-[#434655] text-base font-normal leading-relaxed">
                3 dari 3 citra memenuhi persyaratan kualitas.
              </p>
            </div>
          </div>

          {/* Primary Action Button with Gradient Motion & Shimmer */}
          <button
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
            className="w-full py-4 px-6 bg-gradient-to-r from-[#2563EB] to-[#004AC6] hover:from-[#004AC6] hover:to-[#003DA3] active:scale-[0.98] text-white font-semibold text-base rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 relative overflow-hidden"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 text-white animate-spin" />
                <span>Memproses Analisis Hematologi...</span>
              </>
            ) : (
              <>
                <BarChart2 className="w-5 h-5 text-white animate-pulse" />
                <span>Mulai Analisis</span>
              </>
            )}
          </button>
        </div>

      </div>

    </main>
  );
}
