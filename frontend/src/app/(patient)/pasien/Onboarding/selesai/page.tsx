"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Check, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function OnboardingSuccessPage() {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push(ROUTES.PATIENT.HOME);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#F3F3FE] via-[#FAF8FF] to-[#F3F3FE] flex flex-col justify-center items-center p-4 sm:p-6 font-sans overflow-hidden">
      
      {/* Outer Card with Pop-in Entrance Animation */}
      <div className="w-full max-w-[448px] mx-auto bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,74,198,0.06)] border border-[#E1E2ED] p-6 sm:p-10 flex flex-col items-center text-center space-y-7 animate-pop-in relative">
        
        {/* Floating Sparkle Decoration - Top Left */}
        <div className="absolute top-4 left-6 text-[#004AC6]/40 animate-float-gentle">
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Floating Sparkle Decoration - Top Right */}
        <div className="absolute top-8 right-6 text-[#86F2E4] animate-float-gentle [animation-delay:1s]">
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Animated Success Icon Badge Container */}
        <div className="relative w-32 h-32 flex items-center justify-center my-1">
          
          {/* Layer 1: Expanding Pulse Aura */}
          <div className="absolute inset-2 bg-[#DBE1FF]/50 rounded-full animate-ping [animation-duration:3s]" />
          
          {/* Layer 2: Dotted Orbit Ring Moving in a Circle */}
          <div className="absolute inset-0 border-2 border-dashed border-[#004AC6]/30 rounded-full animate-spin-slow" />

          {/* Layer 3: Reverse Orbit Ring with Particle Dots */}
          <div className="absolute inset-1 border border-dotted border-[#86F2E4] rounded-full animate-spin-reverse relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#004AC6] rounded-full shadow-xs" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#86F2E4] rounded-full shadow-xs" />
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#B4C5FF] rounded-full shadow-xs" />
          </div>

          {/* Layer 4: Inner Solid Blue Badge */}
          <div className="relative w-20 h-20 bg-gradient-to-tr from-[#003DA3] to-[#004AC6] rounded-full flex items-center justify-center shadow-lg shadow-[#004AC6]/30 animate-pop-in">
            <Check className="w-10 h-10 text-white stroke-[3.5] drop-shadow-xs" />
          </div>

          {/* Layer 5: Top-Right Verified Small Dot */}
          <div className="absolute top-2 right-2 w-7 h-7 bg-[#86F2E4] rounded-full flex items-center justify-center shadow-md border-2 border-white animate-float-gentle">
            <Check className="w-4 h-4 text-[#006F66] stroke-[3]" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2.5">
          <h1 className="text-[#004AC6] text-3xl font-bold leading-10 tracking-tight">
            Profil Anda Siap
          </h1>
          <p className="text-[#434655] text-base font-normal leading-relaxed max-w-xs mx-auto">
            Informasi dasar Anda berhasil disimpan. Anda dapat memperbaruinya melalui menu Profil.
          </p>
        </div>

        {/* Feature Box: Akun Terverifikasi */}
        <div className="w-full p-4 bg-[#F3F3FE] hover:bg-[#EDEDF9] transition-colors rounded-xl border border-[#E1E2ED] flex items-center gap-4 text-left shadow-2xs group cursor-default">
          <div className="w-10 h-10 bg-[#B4C5FF] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-5 h-5 text-[#004AC6]" />
          </div>
          <div className="space-y-0.5">
            <h2 className="text-[#191B23] text-sm font-bold leading-5">
              Akun Terverifikasi
            </h2>
            <p className="text-[#434655] text-sm font-normal leading-5">
              Akses penuh ke portal HemaVision Pro.
            </p>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="w-full pt-1">
          <button
            type="button"
            onClick={handleGoToHome}
            className="group w-full py-3.5 px-6 bg-gradient-to-r from-[#004AC6] to-[#2563EB] hover:from-[#003DA3] hover:to-[#1D4ED8] active:scale-[0.99] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#004AC6]/20 hover:shadow-lg hover:shadow-[#004AC6]/35 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Masuk ke Beranda</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </main>
  );
}
