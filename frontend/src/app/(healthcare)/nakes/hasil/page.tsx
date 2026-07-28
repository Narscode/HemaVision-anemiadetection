"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Grid,
  Check,
  Calendar,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Clock,
  Printer,
  Share2,
  FileText,
  Save,
  Info,
  Sparkles,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function ClinicalResultsPage() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [clinicalNotes, setClinicalNotes] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF8FF] font-sans text-[#191B23] p-6 sm:p-8 space-y-6 pb-40">
      {/* Stepper Card (Progressive Bar 6 Steps) */}
      <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-xs overflow-x-auto">
        <div className="min-w-[768px] flex items-center justify-between relative px-4">
          {/* Step 1: Data Pasien */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#191B23]">Data Pasien</span>
          </div>

          <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

          {/* Step 2: Persiapan */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#191B23]">Persiapan</span>
          </div>

          <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

          {/* Step 3: Mata */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#191B23]">Mata</span>
          </div>

          <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

          {/* Step 4: Kuku/Jari */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#191B23]">Kuku/Jari</span>
          </div>

          <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

          {/* Step 5: Telapak */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#191B23]">Telapak</span>
          </div>

          <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

          {/* Step 6: Analisis (Active Final Step) */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#004AC6] text-white flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-[#004AC6] ring-offset-2">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#004AC6]">Analisis</span>
          </div>
        </div>
      </div>

      {/* Main Container Area */}
      <div className="w-full max-w-[1024px] space-y-6">
        {/* Page Title & Date Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs sm:text-sm font-bold text-[#004AC6] uppercase tracking-[0.70px]">
              HASIL PEMERIKSAAN #HV-2023-0892
            </span>
            <h1 className="text-2xl sm:text-[32px] font-semibold text-[#191B23] leading-tight">
              Hasil Skrining Klinis
            </h1>
          </div>

          <div className="p-2.5 bg-[#EDEDF9] rounded-lg flex items-center gap-2 text-[#434655] text-sm sm:text-base font-normal self-start sm:self-auto">
            <Calendar className="w-4 h-4 text-[#434655]" />
            <span>24 Okt 2023 • 14:20 WIB</span>
          </div>
        </div>

        {/* Results Overview Grid (Risk Banner + Reliability Metrics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Risk Banner Card (Span 7) */}
          <div className="lg:col-span-7 p-6 bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] rounded-xl border-l-[6px] border-[#F97316] shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F97316] rounded-full text-white shrink-0">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#7C2D12]">
                  RISIKO ANEMIA: SEDANG
                </h2>
                <p className="text-sm sm:text-base text-[#9A3412] leading-relaxed max-w-lg">
                  Berdasarkan analisis citra konjungtiva, bantalan kuku, dan telapak tangan, pasien menunjukkan indikasi anemia tingkat menengah.
                </p>
              </div>
            </div>

            {/* Disclaimer Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(254,215,170,0.50)] border border-[#FDBA74] rounded-full text-[#7C2D12] text-xs font-bold self-start">
              <Info className="w-3.5 h-3.5" />
              <span>HASIL SKRINING AWAL, BUKAN DIAGNOSIS MEDIS.</span>
            </div>
          </div>

          {/* Right: Reliability Metrics Card (Span 5) */}
          <div className="lg:col-span-5 p-6 bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] flex flex-col justify-between space-y-4 shadow-xs">
            <div className="flex items-center gap-2 border-b border-[#C3C6D7] pb-3">
              <ShieldCheck className="w-5 h-5 text-[#004AC6]" />
              <h3 className="text-sm font-bold text-[#191B23]">Metrik Keandalan</h3>
            </div>

            <div className="space-y-4">
              {/* Confidence Level */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-[#434655] uppercase text-[11px] tracking-wider">
                    CONFIDENCE LEVEL
                  </span>
                  <span className="font-bold text-[#004AC6]">87% (Tinggi)</span>
                </div>
                <div className="w-full h-2 bg-[#EDEDF9] rounded-full overflow-hidden">
                  <div className="h-full bg-[#004AC6] rounded-full w-[87%]" />
                </div>
              </div>

              {/* Citra & Konsistensi Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {/* Kualitas Citra */}
                <div className="p-3 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7]/30 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-[#434655] uppercase">
                    KUALITAS CITRA
                  </span>
                  <div className="flex items-center gap-1.5 text-[#006A61] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#006A61]" />
                    <span>Baik</span>
                  </div>
                </div>

                {/* Konsistensi */}
                <div className="p-3 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7]/30 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-[#434655] uppercase">
                    KONSISTENSI
                  </span>
                  <div className="flex items-center gap-1.5 text-[#006A61] font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-[#006A61]" />
                    <span>Konsisten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Accordion Card: Lihat Detail Analisis */}
        <div className="w-full bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] overflow-hidden shadow-xs">
          <button
            onClick={() => setIsDetailOpen(!isDetailOpen)}
            className="w-full p-6 flex items-center justify-between hover:bg-slate-100/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#004AC6]" />
              <h3 className="text-xl sm:text-2xl font-semibold text-[#191B23]">
                Lihat Detail Analisis
              </h3>
            </div>
            {isDetailOpen ? (
              <ChevronUp className="w-5 h-5 text-[#191B23]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#191B23]" />
            )}
          </button>

          {isDetailOpen && (
            <div className="p-6 pt-0 border-t border-[#C3C6D7] bg-white space-y-4 text-sm text-[#434655]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-[#FAF8FF] rounded-lg border border-[#C3C6D7]">
                  <h4 className="font-bold text-[#191B23] mb-1">Pemeriksaan Konjungtiva</h4>
                  <p className="text-xs">Pallor Index: 0.68 (Warna tampak pucat ringan-sedang)</p>
                </div>
                <div className="p-4 bg-[#FAF8FF] rounded-lg border border-[#C3C6D7]">
                  <h4 className="font-bold text-[#191B23] mb-1">Pemeriksaan Bantalan Kuku</h4>
                  <p className="text-xs">Capillary Refill Estimation: 2.1 detik (Vaskularisasi cukup)</p>
                </div>
                <div className="p-4 bg-[#FAF8FF] rounded-lg border border-[#C3C6D7]">
                  <h4 className="font-bold text-[#191B23] mb-1">Pemeriksaan Telapak Tangan</h4>
                  <p className="text-xs">Erythema Distribution: Menunjukkan penurunan rona kemerahan</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2 Columns: Rekomendasi Klinis (Left) & Catatan Klinis (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Rekomendasi Klinis (Span 7) */}
          <div className="lg:col-span-7 p-6 bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] space-y-6 shadow-xs">
            <div className="flex items-center gap-3">
              <Stethoscope className="w-6 h-6 text-[#004AC6]" />
              <h3 className="text-xl sm:text-2xl font-semibold text-[#191B23]">
                Rekomendasi Klinis
              </h3>
            </div>

            <div className="space-y-4">
              {/* Recommendation 1 (Blue) */}
              <div className="p-4 bg-[rgba(37,99,235,0.10)] border border-[rgba(37,99,235,0.20)] rounded-xl flex items-start gap-4">
                <div className="pt-1 shrink-0">
                  <Stethoscope className="w-5 h-5 text-[#004AC6]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#004AC6]">
                    Pertimbangkan Pemeriksaan Hb Konfirmasi
                  </h4>
                  <p className="text-sm text-[#434655] leading-relaxed">
                    Lakukan pemeriksaan laboratorium darah lengkap (CBC) untuk memverifikasi kadar hemoglobin secara akurat.
                  </p>
                </div>
              </div>

              {/* Recommendation 2 (Teal) */}
              <div className="p-4 bg-[rgba(134,242,228,0.10)] border border-[rgba(134,242,228,0.20)] rounded-xl flex items-start gap-4">
                <div className="pt-1 shrink-0">
                  <Clock className="w-5 h-5 text-[#006A61]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#006A61]">
                    Monitor kondisi dalam 2 minggu
                  </h4>
                  <p className="text-sm text-[#434655] leading-relaxed">
                    Jika gejala fisik meningkat (lemas, pusing), segera lakukan konsultasi tatap muka.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Catatan Klinis (Span 5) */}
          <div className="lg:col-span-5 p-6 bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#004AC6]" />
              <h3 className="text-sm font-bold text-[#191B23]">Catatan Klinis</h3>
            </div>

            <div className="space-y-2">
              <textarea
                value={clinicalNotes}
                onChange={(e) => setClinicalNotes(e.target.value)}
                placeholder="Masukkan observasi tambahan atau instruksi untuk pasien..."
                className="w-full h-40 p-4 bg-white border border-[#C3C6D7] rounded-xl text-sm text-[#191B23] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#004AC6] resize-none"
              />
              <div className="flex items-center gap-2 text-xs italic text-[#434655]">
                <Info className="w-3.5 h-3.5 shrink-0 text-[#434655]" />
                <span>Catatan ini akan disimpan dalam rekam medis elektronik pasien.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FAF8FF] border-t border-[#C3C6D7] p-4 sm:px-8 z-40 shadow-xl">
        <div className="max-w-[1024px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-3 border border-[#C3C6D7] rounded-xl text-base font-bold text-[#191B23] hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <Printer className="w-5 h-5 text-[#191B23]" />
              <span>Cetak Laporan</span>
            </button>
            <button className="flex-1 sm:flex-none px-6 py-3 border border-[#C3C6D7] rounded-xl text-base font-bold text-[#191B23] hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <Share2 className="w-5 h-5 text-[#191B23]" />
              <span>Bagikan</span>
            </button>
          </div>

          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#004AC6] hover:bg-[#003EA8] active:scale-[0.99] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            {isSaved ? (
              <>
                <Check className="w-5 h-5 text-white stroke-[3]" />
                <span>Berhasil Disimpan!</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5 text-white" />
                <span>Konfirmasi Tindak Lanjut & Simpan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
