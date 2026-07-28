"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Video,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Info,
  User,
  ShieldCheck,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function CameraCheckPage() {
  const router = useRouter();

  // Animation states for sequential checkmarks appearing one by one
  const [step1Done, setStep1Done] = useState(false);
  const [step2Done, setStep2Done] = useState(false);
  const [step3Done, setStep3Done] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Step 1: Kamera Terdeteksi (500ms)
    const timer1 = setTimeout(() => {
      setStep1Done(true);
    }, 500);

    // Step 2: Pencahayaan Memadai (1100ms)
    const timer2 = setTimeout(() => {
      setStep2Done(true);
    }, 1100);

    // Step 3: Ketajaman Memadai (1700ms)
    const timer3 = setTimeout(() => {
      setStep3Done(true);
    }, 1700);

    // Final Step: Perangkat Siap Digunakan (2200ms)
    const timer4 = setTimeout(() => {
      setIsReady(true);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleContinueScreening = () => {
    router.push(ROUTES.PATIENT.SKRINING_LANGKAH1);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FAF8FF] to-white flex flex-col justify-center items-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-[512px] mx-auto space-y-6">
        
        {/* Main Card */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7]/40 shadow-xs p-6 sm:p-8 space-y-6">
          
          {/* Header Section */}
          <div className="space-y-2 text-center">
            <h1 className="text-[#004AC6] text-2xl font-semibold leading-8">
              Periksa Perangkat
            </h1>
            <p className="text-[#434655] text-base font-normal leading-relaxed">
              Memastikan kamera dan pencahayaan optimal untuk akurasi skrining.
            </p>
          </div>

          {/* Camera Live Preview Simulation Box */}
          <div className="relative w-full h-44 sm:h-48 bg-[#EDEDF9] rounded-xl border border-[#C3C6D7] overflow-hidden flex items-center justify-center shadow-inner">
            
            {/* Viewfinder Target Frame */}
            <div className="w-48 h-32 border-2 border-[#004AC6]/30 border-dashed rounded-xl flex flex-col items-center justify-center space-y-2 bg-[#E1E2ED]/30 backdrop-blur-2xs">
              <User className="w-12 h-12 text-[#737686]/40" />
            </div>

            {/* Active Preview Pill Badge */}
            <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#FAF8FF]/90 backdrop-blur-xs rounded-full border border-white/60 shadow-xs flex items-center gap-1.5">
              <Video className="w-4 h-4 text-[#004AC6] animate-pulse" />
              <span className="text-[#004AC6] text-xs font-medium">Preview Aktif</span>
            </div>
          </div>

          {/* Sequential Check Items */}
          <div className="space-y-2.5 pt-1">
            
            {/* Item 1: Kamera terdeteksi */}
            <div className="p-3 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7]/20 flex items-center justify-between transition-all">
              <div className="flex items-center gap-3">
                {step1Done ? (
                  <CheckCircle2 className="w-5 h-5 text-[#006A61] flex-shrink-0 animate-pop-in" />
                ) : (
                  <Loader2 className="w-5 h-5 text-[#004AC6] animate-spin flex-shrink-0" />
                )}
                <span className="text-[#191B23] text-base font-normal">
                  Kamera terdeteksi
                </span>
              </div>
              <div>
                {step1Done ? (
                  <span className="text-[#006A61] font-mono text-sm font-semibold tracking-wide animate-pop-in">
                    OK
                  </span>
                ) : (
                  <span className="text-[#737686] font-mono text-xs animate-pulse">
                    Memeriksa...
                  </span>
                )}
              </div>
            </div>

            {/* Item 2: Pencahayaan memadai */}
            <div className="p-3 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7]/20 flex items-center justify-between transition-all">
              <div className="flex items-center gap-3">
                {step2Done ? (
                  <CheckCircle2 className="w-5 h-5 text-[#006A61] flex-shrink-0 animate-pop-in" />
                ) : (
                  <Loader2 className="w-5 h-5 text-[#004AC6] animate-spin flex-shrink-0" />
                )}
                <span className="text-[#191B23] text-base font-normal">
                  Pencahayaan memadai
                </span>
              </div>
              <div>
                {step2Done ? (
                  <span className="text-[#006A61] font-mono text-sm font-semibold tracking-wide animate-pop-in">
                    OK
                  </span>
                ) : (
                  <span className="text-[#737686] font-mono text-xs animate-pulse">
                    Memeriksa...
                  </span>
                )}
              </div>
            </div>

            {/* Item 3: Ketajaman memadai */}
            <div className="p-3 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7]/20 flex items-center justify-between transition-all">
              <div className="flex items-center gap-3">
                {step3Done ? (
                  <CheckCircle2 className="w-5 h-5 text-[#006A61] flex-shrink-0 animate-pop-in" />
                ) : (
                  <Loader2 className="w-5 h-5 text-[#004AC6] animate-spin flex-shrink-0" />
                )}
                <span className="text-[#191B23] text-base font-normal">
                  Ketajaman memadai
                </span>
              </div>
              <div>
                {step3Done ? (
                  <span className="text-[#006A61] font-mono text-sm font-semibold tracking-wide animate-pop-in">
                    OK
                  </span>
                ) : (
                  <span className="text-[#737686] font-mono text-xs animate-pulse">
                    Memeriksa...
                  </span>
                )}
              </div>
            </div>

            {/* Ready Banner */}
            {isReady && (
              <div className="pt-1 animate-pop-in">
                <div className="p-3 bg-[#86F2E4]/20 rounded-lg border border-[#6BD8CB]/30 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#006A61] flex-shrink-0" />
                  <span className="text-[#006F66] text-sm font-semibold">
                    Perangkat Siap Digunakan
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action Area & Disclaimer */}
          <div className="space-y-4 pt-2 border-t border-[#C3C6D7]/20">
            <button
              onClick={handleContinueScreening}
              disabled={!isReady}
              className={`w-full py-3.5 px-6 font-medium text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isReady
                  ? "bg-[#2563EB] hover:bg-[#004AC6] active:scale-[0.99] text-white shadow-md"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed opacity-80"
              }`}
            >
              <span>Lanjutkan Skrining</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-2 opacity-80 pt-1">
              <Info className="w-4 h-4 text-[#434655] flex-shrink-0 mt-0.5" />
              <p className="text-[#434655] text-xs leading-relaxed text-center">
                Kualitas gambar dapat bervariasi bergantung pada spesifikasi perangkat keras dan kondisi pencahayaan lingkungan Anda. Hasil skrining bersifat indikatif.
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
