"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  AlertTriangle,
  Info,
  Activity,
  Eye,
  Sparkles,
  Hand,
  ChevronDown,
  ChevronUp,
  Microscope,
  HelpCircle,
  Printer,
  Share2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { PatientBottomNavigation } from "@/components/patient/PatientBottomNavigation";

export default function ResultExplanationPage() {
  const router = useRouter();

  // Accordion toggle states
  const [openAccuracy, setOpenAccuracy] = useState(false);
  const [openWhy, setOpenWhy] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Hasil Skrining HemaVision",
        text: "Hasil Skrining HemaVision Anda: Risiko Anemia Sedang (Estimasi Hb: 10.8 g/dL)",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] font-sans pb-32 flex flex-col items-center justify-start select-none overflow-x-hidden relative">
      
      {/* Top Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#DBE1FF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 left-0 w-80 h-80 bg-[#86F2E4]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar Header */}
      <header className="w-full bg-[#FAF8FF]/90 border-b border-[#C3C6D7] px-4 h-16 flex items-center justify-between sticky top-0 z-30 shadow-2xs backdrop-blur-md">
        <div className="w-full max-w-[672px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="p-1.5 rounded-full text-[#434655] hover:text-[#191B23] hover:bg-[#E7E7F3]/70 transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Kembali"
            >
              <ArrowLeft className="w-5 h-5 text-[#191B23]" />
            </button>
            <div>
              <h1 className="text-[#004AC6] text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                Penjelasan Hasil
              </h1>
              <p className="text-[#434655] text-xs font-normal">
                Memahami hasil skrining HemaVision Anda
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-[672px] mx-auto px-4 py-6 space-y-6 relative z-10">
        
        {/* SUB-HEADER METADATA BAR */}
        <div className="flex items-center gap-2 text-[#434655] text-sm font-medium px-1">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#434655]" />
            <span>20 Juli 2026</span>
          </div>
          <span className="w-1 h-1 bg-[#C3C6D7] rounded-full" />
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#434655]" />
            <span>Puskesmas Jakarta Selatan</span>
          </div>
        </div>

        {/* CARD 1: HASIL SKRINING OVERVIEW */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-xs space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#434655]/80">
            HASIL SKRINING
          </span>

          <div className="flex items-center gap-3">
            {/* Animated Amber Bar */}
            <div className="w-3 h-10 bg-[#F59E0B] rounded-full animate-pulse shadow-xs" />
            <h2 className="text-[#D97706] text-2xl sm:text-3xl font-bold leading-snug">
              RISIKO ANEMIA:<br />SEDANG
            </h2>
          </div>

          <p className="text-[#191B23] text-base font-normal leading-relaxed pt-1">
            Hasil skrining menunjukkan adanya indikasi yang perlu diperhatikan dan dapat memerlukan pemeriksaan lebih lanjut.
          </p>

          <div className="p-4 bg-[#F3F3FE] border-l-4 border-[#737686] rounded-r-lg flex items-start gap-3 text-[#434655] italic text-sm">
            <Info className="w-5 h-5 text-[#737686] flex-shrink-0 mt-0.5" />
            <p>Ini merupakan hasil skrining awal, bukan diagnosis medis.</p>
          </div>
        </div>

        {/* CARD 2: ESTIMASI HEMOGLOBIN (HB) & ANIMATED COLOR GAUGE BAR */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-xs space-y-6">
          
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#DBE1FF] rounded-full text-[#004AC6] flex-shrink-0 animate-pulse">
              <Activity className="w-5 h-5 text-[#004AC6]" />
            </div>
            <h2 className="text-[#191B23] text-xl sm:text-2xl font-bold tracking-tight leading-snug">
              Estimasi Hemoglobin<br />(Hb)
            </h2>
          </div>

          {/* Huge Hb Value */}
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-5xl sm:text-6xl font-extrabold text-[#191B23] tracking-tight">10,8</span>
            <span className="text-2xl font-semibold text-[#434655]">g/dL</span>
          </div>

          {/* ANIMATED COLOR GAUGE BAR */}
          <div className="space-y-2 pt-2">
            <div className="relative w-full max-w-sm h-3 bg-[#E1E2ED] rounded-full overflow-hidden flex items-center border border-gray-200 shadow-inner">
              {/* Segment 1: Red (Rendah) */}
              <div className="w-[30%] h-full bg-[#BA1A1A] transition-all duration-700" />
              {/* Segment 2: Orange/Amber (Sedang) */}
              <div className="w-[40%] h-full bg-[#F59E0B] border-x border-white/50 relative overflow-hidden">
                {/* Shimmer sweep animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-scan-shine" />
              </div>
              {/* Segment 3: Green (Normal) */}
              <div className="w-[30%] h-full bg-[#006A61] transition-all duration-700" />

              {/* Animated Position Pointer Marker */}
              <div className="absolute left-[45%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-5 h-5 bg-[#F59E0B] rounded-full border-2 border-white shadow-md animate-ping absolute opacity-75" />
                <div className="w-4 h-4 bg-[#F59E0B] rounded-full border-2 border-white shadow-md relative z-10" />
              </div>
            </div>

            <div className="flex justify-between max-w-sm px-1 text-[10px] font-bold text-[#434655] tracking-wider">
              <span>RENDAH</span>
              <span className="text-[#D97706]">SEDANG (10.8)</span>
              <span>NORMAL</span>
            </div>
          </div>

          {/* Explanation Text */}
          <p className="text-[#191B23] text-base font-normal leading-relaxed pt-1">
            Estimasi berbasis analisis HemaVision. HemaVision memperkirakan kadar Hb berada di sekitar nilai tersebut berdasarkan data skrining yang tersedia.
          </p>

          {/* AI Estimate Blue Notice Box */}
          <div className="p-4 bg-[#2563EB]/10 border border-[#004AC6]/20 rounded-xl flex items-start gap-3 text-[#003EA8] text-sm font-medium leading-relaxed">
            <Info className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
            <p>
              Nilai ini merupakan estimasi AI. Estimasi Hb dapat berbeda dari hasil pemeriksaan laboratorium. Gunakan hasil ini sebagai informasi skrining awal, bukan sebagai pengganti pemeriksaan Hb.
            </p>
          </div>

          {/* Accordion: Seberapa pasti estimasi ini? */}
          <div className="border-t border-[#C3C6D7] pt-4">
            <button
              type="button"
              onClick={() => setOpenAccuracy(!openAccuracy)}
              className="w-full flex items-center justify-between font-bold text-[#191B23] text-sm text-left hover:text-[#004AC6] transition-colors cursor-pointer"
            >
              <span>Seberapa pasti estimasi ini?</span>
              {openAccuracy ? <ChevronUp className="w-5 h-5 text-[#191B23]" /> : <ChevronDown className="w-5 h-5 text-[#191B23]" />}
            </button>
            {openAccuracy && (
              <div className="pt-3 text-sm text-[#434655] space-y-2 animate-fade-in">
                <p>
                  Akurasi estimasi AI HemaVision didasarkan pada model pembelajaran mesin yang dilatih dengan ribuan citra klinis terverifikasi.
                </p>
                <p>
                  Tingkat kepastian bergantung pada pencahayaan, fokus kamera, dan kejernihan struktur vaskular saat pengambilan citra.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 3: BAGAIMANA HASIL INI DIPEROLEH? */}
        <section className="space-y-4">
          <h2 className="text-[#191B23] text-2xl font-bold tracking-tight leading-tight">
            Bagaimana Hasil Ini<br />Diperoleh?
          </h2>

          {/* FLOW PIPELINE BOX WITH ICON MOTIONS */}
          <div className="w-full bg-[#EDEDF9] rounded-xl p-5 overflow-x-auto">
            <div className="min-w-[500px] flex items-center justify-between gap-4">
              
              {/* 3 Input Area Icons */}
              <div className="flex items-center gap-4">
                {/* Mata */}
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full border border-[#004AC6] shadow-2xs flex items-center justify-center text-[#004AC6] group-hover:scale-110 group-hover:bg-[#DBE1FF] transition-all duration-300">
                    <Eye className="w-6 h-6 text-[#004AC6]" />
                  </div>
                  <div className="flex items-center gap-1 text-[#006A61] text-[10px] font-bold tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-[#006A61]" />
                    <span>MATA</span>
                  </div>
                </div>

                {/* Kuku */}
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full border border-[#004AC6] shadow-2xs flex items-center justify-center text-[#004AC6] group-hover:scale-110 group-hover:bg-[#DBE1FF] transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-[#004AC6]" />
                  </div>
                  <div className="flex items-center gap-1 text-[#006A61] text-[10px] font-bold tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-[#006A61]" />
                    <span>KUKU</span>
                  </div>
                </div>

                {/* Telapak */}
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full border border-[#004AC6] shadow-2xs flex items-center justify-center text-[#004AC6] group-hover:scale-110 group-hover:bg-[#DBE1FF] transition-all duration-300">
                    <Hand className="w-6 h-6 text-[#004AC6]" />
                  </div>
                  <div className="flex items-center gap-1 text-[#006A61] text-[10px] font-bold tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-[#006A61]" />
                    <span>TELAPAK</span>
                  </div>
                </div>
              </div>

              {/* Animated Arrow Connector */}
              <ArrowRight className="w-6 h-6 text-[#004AC6] animate-pulse" />

              {/* Output Box */}
              <div className="bg-white border-2 border-[#004AC6] rounded-xl p-3.5 shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#434655]">OUTPUT</span>
                <div className="flex items-center gap-1.5 text-[#004AC6] font-bold text-xs">
                  <span className="w-1.5 h-1.5 bg-[#004AC6] rounded-full animate-ping" />
                  <span>Estimasi Hb</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#004AC6] font-bold text-xs">
                  <span className="w-1.5 h-1.5 bg-[#004AC6] rounded-full" />
                  <span>Risiko Anemia</span>
                </div>
              </div>

            </div>
          </div>

          {/* 3 Area Image Quality List */}
          <div className="space-y-3">
            {/* Row 1: Mata */}
            <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-4 shadow-2xs flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                alt="Area Mata"
                className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-[#191B23] font-bold text-sm">Mata</h3>
                <p className="text-[#006A61] text-xs font-bold pt-0.5">Kualitas Citra: Memadai</p>
              </div>
            </div>

            {/* Row 2: Kuku/Jari */}
            <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-4 shadow-2xs flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=100&q=80"
                alt="Area Kuku"
                className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-[#191B23] font-bold text-sm">Kuku/Jari</h3>
                <p className="text-[#006A61] text-xs font-bold pt-0.5">Kualitas Citra: Memadai</p>
              </div>
            </div>

            {/* Row 3: Telapak Tangan */}
            <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-4 shadow-2xs flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=100&q=80"
                alt="Area Telapak Tangan"
                className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-[#191B23] font-bold text-sm">Telapak Tangan</h3>
                <p className="text-[#006A61] text-xs font-bold pt-0.5">Kualitas Citra: Memadai</p>
              </div>
            </div>
          </div>
        </section>

        {/* CARD 4: APA ARTI HASIL SAYA? */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-xs space-y-4">
          <h2 className="text-[#191B23] text-2xl font-bold tracking-tight">Apa Arti Hasil Saya?</h2>
          
          <p className="text-[#191B23] text-base font-normal leading-relaxed">
            Hasil skrining Anda berada pada kategori risiko sedang. Estimasi Hb dari HemaVision memberikan indikasi awal yang dapat digunakan bersama informasi kesehatan lainnya untuk menentukan apakah diperlukan pemeriksaan lanjutan.
          </p>

          <div className="inline-block px-4 py-2 bg-[#FFDBCD] text-[#360F00] text-sm font-bold rounded-lg shadow-2xs">
            Risiko sedang ≠ diagnosis anemia
          </div>

          <div className="border-t border-[#C3C6D7] pt-4">
            <button
              type="button"
              onClick={() => setOpenWhy(!openWhy)}
              className="w-full flex items-center justify-between font-bold text-[#191B23] text-sm text-left hover:text-[#004AC6] transition-colors cursor-pointer"
            >
              <span>Mengapa saya mendapatkan hasil ini?</span>
              {openWhy ? <ChevronUp className="w-5 h-5 text-[#191B23]" /> : <ChevronDown className="w-5 h-5 text-[#191B23]" />}
            </button>
            {openWhy && (
              <div className="pt-3 text-sm text-[#434655] space-y-2 animate-fade-in">
                <p>
                  Tingkat paleness (kepucatan) pada jaringan konjungtiva dan kuku terdeteksi sedikit di bawah ambang normal populasi umum.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CARD 5: PERLU MEMASTIKAN HASIL? (PROMO CARD WITH MICROSCOPE ICON MOTION) */}
        <div className="w-full bg-[#DBE1FF] rounded-2xl border border-[#004AC6]/20 p-6 sm:p-8 space-y-6 shadow-sm">
          {/* Animated Microscope Icon */}
          <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center text-white shadow-md animate-bounce-slow">
            <Microscope className="w-7 h-7 text-white" />
          </div>

          <div className="space-y-2">
            <h2 className="text-[#00174B] text-2xl font-bold tracking-tight">
              Perlu Memastikan Hasil?
            </h2>
            <p className="text-[#003EA8] text-base font-normal leading-relaxed">
              Pemeriksaan Hb menggunakan metode klinis/laboratorium tetap diperlukan untuk mengonfirmasi kondisi Anda apabila direkomendasikan oleh tenaga kesehatan.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push(ROUTES.PATIENT.TINDAK_LANJUT)}
            className="w-full py-3.5 px-6 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-md shadow-[#004AC6]/20 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <span>Lihat Rekomendasi Pemeriksaan</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* CARD 6: ACCORDION TENTANG HASIL & ACTION BUTTONS */}
        <div className="space-y-4">
          <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenAbout(!openAbout)}
              className="w-full p-4 flex items-center justify-between font-bold text-[#434655] text-sm text-left hover:bg-[#E7E7F3] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#434655]" />
                <span>Tentang Hasil HemaVision</span>
              </div>
              {openAbout ? <ChevronUp className="w-5 h-5 text-[#434655]" /> : <ChevronDown className="w-5 h-5 text-[#434655]" />}
            </button>

            {openAbout && (
              <div className="p-4 border-t border-[#C3C6D7] text-sm text-[#434655] space-y-2 bg-white animate-fade-in">
                <p>
                  HemaVision adalah alat skrining pendukung keputusan klinis berbasis AI yang dirancang untuk membantu deteksi dini risiko anemia di masyarakat.
                </p>
              </div>
            )}
          </div>

          {/* Print & Share Buttons */}
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 py-3 px-4 border border-[#C3C6D7] bg-white hover:bg-gray-50 active:scale-[0.98] text-[#191B23] font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
            >
              <Printer className="w-5 h-5 text-[#191B23]" />
              <span>Cetak Hasil</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="flex-1 py-3 px-4 border border-[#C3C6D7] bg-white hover:bg-gray-50 active:scale-[0.98] text-[#191B23] font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
            >
              <Share2 className="w-5 h-5 text-[#191B23]" />
              <span>{copiedShare ? "Tersalin!" : "Bagikan"}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <PatientBottomNavigation />

    </main>
  );
}
