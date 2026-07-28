"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Eye,
  Hand,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Camera,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

type SiteType = "eye" | "nail" | "palm";

export default function MultiSiteScreeningPage() {
  const router = useRouter();

  // Active selected site: 'eye', 'nail', or 'palm'
  const [selectedSite, setSelectedSite] = useState<SiteType>("eye");

  // State for site progress
  const [eyeStatus, setEyeStatus] = useState<"pending" | "completed">("pending");
  const [nailStatus, setNailStatus] = useState<"pending" | "completed">("pending");
  const [palmStatus, setPalmStatus] = useState<"pending" | "completed">("pending");

  const handleStartCapture = (site: SiteType, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedSite(site);
    router.push(`/capture/session-${site}-101`);
  };

  return (
    <div className="min-h-screen bg-[#FAF8FF] flex flex-col font-sans">
      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-8 pb-36 space-y-10">
        {/* Stepper Card (7 Steps) */}
        <div className="w-full bg-[#FAF8FF] rounded-xl outline outline-1 outline-[#C3C6D7] p-6 shadow-xs overflow-x-auto">
          <div className="min-w-[768px] flex items-center justify-between relative px-2">
            {/* Step 1: Data Pasien */}
            <div className="flex flex-col items-center gap-2 z-10">
              <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-sm font-medium text-[#191B23]">Data Pasien</span>
            </div>

            {/* Line 1-2 */}
            <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

            {/* Step 2: Persiapan */}
            <div className="flex flex-col items-center gap-2 z-10">
              <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-sm font-medium text-[#191B23]">Persiapan</span>
            </div>

            {/* Line 2-3 */}
            <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

            {/* Step 3: Mata */}
            <div className="flex flex-col items-center gap-2 z-10 cursor-pointer" onClick={() => setSelectedSite("eye")}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 ${
                  selectedSite === "eye"
                    ? "bg-[#2563EB] outline outline-2 outline-[#004AC6] outline-offset-[-2px] text-white scale-110 shadow-sm"
                    : eyeStatus === "completed"
                    ? "bg-[#004AC6] text-white"
                    : "bg-[#FAF8FF] outline outline-2 outline-[#C3C6D7] outline-offset-[-2px] text-[#434655]"
                }`}
              >
                {eyeStatus === "completed" ? <Check className="w-4 h-4 stroke-[3]" /> : "3"}
              </div>
              <span className={`text-sm transition-colors ${selectedSite === "eye" ? "font-bold text-[#004AC6]" : "font-medium text-[#434655]"}`}>
                Mata
              </span>
            </div>

            {/* Line 3-4 */}
            <div className={`flex-1 h-[2px] mx-2 transition-all ${selectedSite === "nail" || selectedSite === "palm" || nailStatus === "completed" ? "bg-[#004AC6]" : "bg-[#C3C6D7]"}`} />

            {/* Step 4: Kuku/Jari */}
            <div className="flex flex-col items-center gap-2 z-10 cursor-pointer" onClick={() => setSelectedSite("nail")}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 ${
                  selectedSite === "nail"
                    ? "bg-[#2563EB] outline outline-2 outline-[#004AC6] outline-offset-[-2px] text-white scale-110 shadow-sm"
                    : nailStatus === "completed"
                    ? "bg-[#004AC6] text-white"
                    : "bg-[#FAF8FF] outline outline-2 outline-[#C3C6D7] outline-offset-[-2px] text-[#434655]"
                }`}
              >
                {nailStatus === "completed" ? <Check className="w-4 h-4 stroke-[3]" /> : "4"}
              </div>
              <span className={`text-sm transition-colors ${selectedSite === "nail" ? "font-bold text-[#004AC6]" : "font-medium text-[#434655]"}`}>
                Kuku/Jari
              </span>
            </div>

            {/* Line 4-5 */}
            <div className={`flex-1 h-[2px] mx-2 transition-all ${selectedSite === "palm" || palmStatus === "completed" ? "bg-[#004AC6]" : "bg-[#C3C6D7] opacity-50"}`} />

            {/* Step 5: Telapak */}
            <div className="flex flex-col items-center gap-2 z-10 cursor-pointer" onClick={() => setSelectedSite("palm")}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 ${
                  selectedSite === "palm"
                    ? "bg-[#2563EB] outline outline-2 outline-[#004AC6] outline-offset-[-2px] text-white scale-110 shadow-sm"
                    : palmStatus === "completed"
                    ? "bg-[#004AC6] text-white"
                    : "bg-[#FAF8FF] outline outline-2 outline-[#C3C6D7] outline-offset-[-2px] text-[#434655]"
                }`}
              >
                {palmStatus === "completed" ? <Check className="w-4 h-4 stroke-[3]" /> : "5"}
              </div>
              <span className={`text-sm transition-colors ${selectedSite === "palm" ? "font-bold text-[#004AC6]" : "font-medium text-[#434655]"}`}>
                Telapak
              </span>
            </div>

            {/* Line 5-6 */}
            <div className="flex-1 h-[2px] bg-[#C3C6D7] opacity-50 mx-2" />

            {/* Step 6: Analisis */}
            <div className="flex flex-col items-center gap-2 opacity-50 z-10">
              <div className="w-8 h-8 rounded-full bg-[#FAF8FF] outline outline-2 outline-[#C3C6D7] outline-offset-[-2px] flex items-center justify-center text-[#434655] font-bold text-base">
                6
              </div>
              <span className="text-sm font-medium text-[#434655]">Analisis</span>
            </div>
          </div>
        </div>

        {/* Title & Description Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-[32px] font-semibold text-[#191B23] tracking-tight leading-tight">
            Pemeriksaan Multi-Site
          </h1>
          <p className="text-lg text-[#434655] leading-relaxed">
            HemaVision menggunakan analisis citra multi-site (mata, kuku, dan telapak tangan) untuk memberikan penilaian risiko anemia yang komprehensif dan akurat.
          </p>
        </div>

        {/* 3 Inspection Site Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Konjungtiva Mata */}
          <div
            onClick={() => setSelectedSite("eye")}
            className={`bg-[#FAF8FF] rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 cursor-pointer active:scale-[0.98] ${
              selectedSite === "eye"
                ? "outline outline-2 outline-[#004AC6] shadow-lg scale-[1.02] opacity-100"
                : "outline outline-1 outline-[#C3C6D7] opacity-70 hover:opacity-100 hover:shadow-md"
            }`}
          >
            {/* Soft Blue Tint Overlay when Active */}
            {selectedSite === "eye" && (
              <div className="absolute inset-0 bg-blue-600/5 pointer-events-none transition-opacity duration-300" />
            )}

            {/* Icon Badge */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 transition-all duration-300 ${
                selectedSite === "eye"
                  ? "bg-blue-600/20 text-[#004AC6] scale-105"
                  : "bg-[#E7E7F3] text-[#434655]"
              }`}
            >
              <Eye className="w-8 h-8" />
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl font-semibold text-[#191B23] mb-2 z-10">
              Konjungtiva Mata
            </h2>
            <p className="text-base text-[#434655] leading-relaxed mb-6 flex-1 z-10">
              Pengambilan gambar palpebra inferior untuk analisis pucat.
            </p>

            {/* Status Pill */}
            <div className={`px-3 py-1 rounded-full flex items-center gap-2 mb-6 z-10 transition-all ${selectedSite === "eye" ? "bg-[#E7E7F3] border border-[#C3C6D7]" : "bg-white border border-[#C3C6D7]"}`}>
              <div className={`w-2 h-2 rounded-full ${eyeStatus === "completed" ? "bg-green-600" : "bg-[#737686]"}`} />
              <span className="text-sm font-medium text-[#434655]">
                {eyeStatus === "completed" ? "Selesai diperiksa" : "Belum diperiksa"}
              </span>
            </div>

            {/* Action Button */}
            <button
              onClick={(e) => handleStartCapture("eye", e)}
              className={`w-full py-3 text-white font-medium text-sm rounded-lg transition-all shadow-md cursor-pointer z-10 active:scale-[0.97] ${
                selectedSite === "eye"
                  ? "bg-[#004AC6] hover:bg-[#003EA8]"
                  : "bg-[#2563EB] hover:bg-[#1D4ED8]"
              }`}
            >
              Mulai Pemeriksaan Mata
            </button>
          </div>

          {/* Card 2: Kuku & Jari */}
          <div
            onClick={() => setSelectedSite("nail")}
            className={`bg-[#FAF8FF] rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 cursor-pointer active:scale-[0.98] ${
              selectedSite === "nail"
                ? "outline outline-2 outline-[#004AC6] shadow-lg scale-[1.02] opacity-100"
                : "outline outline-1 outline-[#C3C6D7] opacity-70 hover:opacity-100 hover:shadow-md"
            }`}
          >
            {/* Soft Blue Tint Overlay when Active */}
            {selectedSite === "nail" && (
              <div className="absolute inset-0 bg-blue-600/5 pointer-events-none transition-opacity duration-300" />
            )}

            {/* Icon Badge */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 transition-all duration-300 ${
                selectedSite === "nail"
                  ? "bg-blue-600/20 text-[#004AC6] scale-105"
                  : "bg-[#E7E7F3] text-[#434655]"
              }`}
            >
              <Hand className="w-7 h-7" />
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl font-semibold text-[#191B23] mb-2 z-10">
              Kuku & Jari
            </h2>
            <p className="text-base text-[#434655] leading-relaxed mb-6 flex-1 z-10">
              Analisis kapiler dan warna dasar kuku (nail bed).
            </p>

            {/* Status Pill */}
            <div className={`px-3 py-1 rounded-full flex items-center gap-2 mb-6 z-10 transition-all ${selectedSite === "nail" ? "bg-[#E7E7F3] border border-[#C3C6D7]" : "bg-white border border-[#C3C6D7]"}`}>
              <div className={`w-2 h-2 rounded-full ${nailStatus === "completed" ? "bg-green-600" : "bg-[#737686]"}`} />
              <span className="text-sm font-medium text-[#434655]">
                {nailStatus === "completed" ? "Selesai diperiksa" : "Belum diperiksa"}
              </span>
            </div>

            {/* Action Button */}
            <button
              onClick={(e) => handleStartCapture("nail", e)}
              className={`w-full py-3 text-white font-medium text-sm rounded-lg transition-all shadow-md cursor-pointer z-10 active:scale-[0.97] ${
                selectedSite === "nail"
                  ? "bg-[#004AC6] hover:bg-[#003EA8]"
                  : "bg-[#2563EB] hover:bg-[#1D4ED8]"
              }`}
            >
              Mulai Pemeriksaan Kuku
            </button>
          </div>

          {/* Card 3: Telapak Tangan */}
          <div
            onClick={() => setSelectedSite("palm")}
            className={`bg-[#FAF8FF] rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 cursor-pointer active:scale-[0.98] ${
              selectedSite === "palm"
                ? "outline outline-2 outline-[#004AC6] shadow-lg scale-[1.02] opacity-100"
                : "outline outline-1 outline-[#C3C6D7] opacity-70 hover:opacity-100 hover:shadow-md"
            }`}
          >
            {/* Soft Blue Tint Overlay when Active */}
            {selectedSite === "palm" && (
              <div className="absolute inset-0 bg-blue-600/5 pointer-events-none transition-opacity duration-300" />
            )}

            {/* Icon Badge */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 transition-all duration-300 ${
                selectedSite === "palm"
                  ? "bg-blue-600/20 text-[#004AC6] scale-105"
                  : "bg-[#E7E7F3] text-[#434655]"
              }`}
            >
              <Hand className="w-7 h-7" />
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl font-semibold text-[#191B23] mb-2 z-10">
              Telapak Tangan
            </h2>
            <p className="text-base text-[#434655] leading-relaxed mb-6 flex-1 z-10">
              Evaluasi warna garis tangan (palmar creases).
            </p>

            {/* Status Pill */}
            <div className={`px-3 py-1 rounded-full flex items-center gap-2 mb-6 z-10 transition-all ${selectedSite === "palm" ? "bg-[#E7E7F3] border border-[#C3C6D7]" : "bg-white border border-[#C3C6D7]"}`}>
              <div className={`w-2 h-2 rounded-full ${palmStatus === "completed" ? "bg-green-600" : "bg-[#737686]"}`} />
              <span className="text-sm font-medium text-[#434655]">
                {palmStatus === "completed" ? "Selesai diperiksa" : "Belum diperiksa"}
              </span>
            </div>

            {/* Action Button */}
            <button
              onClick={(e) => handleStartCapture("palm", e)}
              className={`w-full py-3 text-white font-medium text-sm rounded-lg transition-all shadow-md cursor-pointer z-10 active:scale-[0.97] ${
                selectedSite === "palm"
                  ? "bg-[#004AC6] hover:bg-[#003EA8]"
                  : "bg-[#2563EB] hover:bg-[#1D4ED8]"
              }`}
            >
              Mulai Pemeriksaan Telapak
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
