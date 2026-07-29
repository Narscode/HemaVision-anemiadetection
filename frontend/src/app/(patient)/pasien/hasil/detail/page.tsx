"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  Sparkles,
  Hand,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Info,
  ExternalLink,
  Copy,
  Check,
  Microscope,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function ScreeningDetailInspectionPage() {
  const router = useRouter();
  const [copiedId, setCopiedId] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const examinationId = "HMV-200726-00182";

  const handleCopyId = () => {
    navigator.clipboard.writeText(examinationId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleBackToResults = () => {
    router.push(ROUTES.PATIENT.HASIL);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] font-sans pb-16 flex flex-col items-center justify-start select-none overflow-x-hidden relative">
      
      {/* Top Background Radial Ambient Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DBE1FF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#86F2E4]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar Header */}
      <header className="w-full bg-[#FAF8FF] border-b border-[#C3C6D7] px-4 h-16 flex items-center justify-between sticky top-0 z-30 shadow-2xs backdrop-blur-md">
        <div className="w-full max-w-[672px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleBackToResults}
              className="p-1.5 rounded-full text-[#434655] hover:text-[#191B23] hover:bg-[#E7E7F3]/70 transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Kembali ke Hasil"
            >
              <ArrowLeft className="w-5 h-5 text-[#191B23]" />
            </button>
            <h1 className="text-[#004AC6] text-xl sm:text-2xl font-bold tracking-tight">
              Detail Pemeriksaan
            </h1>
          </div>

          {/* Profile Avatar */}
          <Link
            href={ROUTES.PATIENT.PROFIL}
            className="w-8 h-8 rounded-full overflow-hidden border border-[#C3C6D7] hover:opacity-90 transition-opacity flex-shrink-0"
            aria-label="Profil Saya"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt="Avatar Budi"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-[672px] mx-auto px-4 py-6 space-y-8 animate-pop-in relative z-10">
        
        {/* Header Summary */}
        <div className="space-y-2">
          <p className="text-[#434655] text-base font-normal">
            Ringkasan pemeriksaan HemaVision Anda
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#86F2E4] text-[#006F66] text-sm font-medium rounded-full shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#006F66]" />
            <span>Pemeriksaan Selesai</span>
          </div>
        </div>

        {/* Metadata Card (Tanggal, Waktu, Lokasi, Status, Tipe) */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-5 shadow-xs space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#434655] uppercase tracking-wider">TANGGAL</span>
              <p className="text-[#191B23] font-normal text-base">20 Juli 2026</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#434655] uppercase tracking-wider">WAKTU</span>
              <p className="text-[#191B23] font-normal text-base">10.35 WIB</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#434655] uppercase tracking-wider">LOKASI</span>
              <p className="text-[#191B23] font-normal text-base">Puskesmas Jaksel</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#434655] uppercase tracking-wider">STATUS</span>
              <p className="text-[#006A61] font-normal text-base flex items-center gap-1">
                ✓ Selesai
              </p>
            </div>
          </div>

          <div className="border-t border-[#C3C6D7] pt-3 space-y-1">
            <span className="text-xs font-semibold text-[#434655] uppercase tracking-wider">TIPE PEMERIKSAAN</span>
            <p className="text-[#191B23] font-medium text-base">Skrining Awal Risiko Anemia</p>
          </div>
        </div>

        {/* SECTION 1: AREA PEMERIKSAAN */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-[#191B23] text-2xl font-bold tracking-tight">Area Pemeriksaan</h2>
            <p className="text-[#434655] text-base font-normal">
              HemaVision menganalisis beberapa area untuk mendukung proses skrining.
            </p>
          </div>

          <div className="space-y-3">
            {/* Card 1: Mata */}
            <div className="group w-full bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6] p-4 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DBE1FF] rounded-lg flex items-center justify-center text-[#004AC6] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Eye className="w-6 h-6 text-[#004AC6]" />
                </div>
                <div>
                  <h3 className="text-[#191B23] font-bold text-base group-hover:text-[#004AC6] transition-colors">Mata</h3>
                  <p className="text-[#006A61] text-xs font-normal flex items-center gap-1 pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006A61]" />
                    <span>Citra Memadai</span>
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#737686] group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Card 2: Kuku / Jari */}
            <div className="group w-full bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6] p-4 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DBE1FF] rounded-lg flex items-center justify-center text-[#004AC6] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-[#004AC6]" />
                </div>
                <div>
                  <h3 className="text-[#191B23] font-bold text-base group-hover:text-[#004AC6] transition-colors">Kuku / Jari</h3>
                  <p className="text-[#006A61] text-xs font-normal flex items-center gap-1 pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006A61]" />
                    <span>Citra Memadai</span>
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#737686] group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Card 3: Telapak Tangan */}
            <div className="group w-full bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6] p-4 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DBE1FF] rounded-lg flex items-center justify-center text-[#004AC6] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Hand className="w-6 h-6 text-[#004AC6]" />
                </div>
                <div>
                  <h3 className="text-[#191B23] font-bold text-base group-hover:text-[#004AC6] transition-colors">Telapak Tangan</h3>
                  <p className="text-[#006A61] text-xs font-normal flex items-center gap-1 pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006A61]" />
                    <span>Citra Memadai</span>
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#737686] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </section>

        {/* SECTION 2: KUALITAS PEMERIKSAAN */}
        <section className="space-y-4">
          <h2 className="text-[#191B23] text-2xl font-bold tracking-tight">Kualitas Pemeriksaan</h2>
          <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#C3C6D7] text-[#006A61] font-medium text-base">
              <CheckCircle2 className="w-5 h-5 text-[#006A61]" />
              <span>Kualitas Data Memadai</span>
            </div>

            <div className="space-y-3 text-base">
              <div className="flex justify-between items-center text-[#191B23]">
                <span>Area Mata</span>
                <span className="text-[#006A61] font-medium">✓ Memadai</span>
              </div>
              <div className="flex justify-between items-center text-[#191B23]">
                <span>Area Kuku/Jari</span>
                <span className="text-[#006A61] font-medium">✓ Memadai</span>
              </div>
              <div className="flex justify-between items-center text-[#191B23]">
                <span>Area Telapak Tangan</span>
                <span className="text-[#006A61] font-medium">✓ Memadai</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: RINGKASAN HASIL (TERRACOTTA CARD) */}
        <section className="space-y-4">
          <h2 className="text-[#191B23] text-2xl font-bold tracking-tight">Ringkasan Hasil</h2>
          
          <div className="w-full bg-gradient-to-br from-[#FF9E78] to-[#BC4800] rounded-xl p-6 sm:p-8 shadow-xl text-white space-y-4 relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-white/80">HASIL SKRINING</span>
            <h3 className="text-3xl font-extrabold leading-tight text-white">
              RISIKO ANEMIA:<br />SEDANG
            </h3>
            <p className="text-[#FFEDE6] text-base font-normal leading-relaxed">
              Hasil menunjukkan adanya indikasi yang perlu diperhatikan dan dapat memerlukan evaluasi lebih lanjut.
            </p>

            <div className="p-3 bg-white/10 rounded-lg text-xs text-white flex items-start gap-2 backdrop-blur-xs">
              <Info className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
              <span>
                Hasil ini merupakan skrining awal dan bukan diagnosis anemia. Konsultasikan ke dokter untuk hasil resmi.
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowExplanation(!showExplanation)}
              className="w-full py-3 px-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-center font-bold text-white text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{showExplanation ? "Tutup Penjelasan" : "Lihat Penjelasan Hasil"}</span>
              {showExplanation ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-white" />}
            </button>

            {/* Inline Explanation Section */}
            {showExplanation && (
              <div className="p-4 bg-white/15 rounded-lg text-sm text-white/95 space-y-2 border border-white/20 animate-fade-in">
                <p>
                  Kategori <strong className="underline decoration-white font-bold">Risiko Anemia Sedang</strong> menunjukkan bahwa analisis citra mendeteksi rona warna konjungtiva dan kuku yang memerlukan konfirmasi medis laboratorium.
                </p>
                <p>
                  Ini bukan diagnosis medis final. Sangat disarankan untuk mendatangi fasilitas kesehatan terdekat untuk melakukan tes darah lengkap (CBC).
                </p>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 4: TINDAK LANJUT PEMERIKSAAN */}
        <section className="space-y-4">
          <h2 className="text-[#191B23] text-2xl font-bold tracking-tight">Tindak Lanjut Pemeriksaan</h2>
          
          <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-5 shadow-xs relative space-y-3">
            <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#004AC6] text-white text-[10px] font-bold uppercase rounded-full tracking-wider">
              PRIORITAS 1
            </span>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#DBE1FF] rounded-full text-[#004AC6] flex-shrink-0">
                <Microscope className="w-5 h-5 text-[#004AC6]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[#191B23] font-bold text-lg">Pemeriksaan Hb Konfirmasi</h3>
                <span className="inline-block px-2 py-0.5 bg-[#2563EB] text-[#EEEFFF] text-xs font-semibold rounded">
                  Direkomendasikan
                </span>
                <p className="text-[#434655] text-base font-normal leading-relaxed pt-1">
                  Pemeriksaan laboratorium lanjutan disarankan untuk memastikan tingkat hemoglobin dalam darah sebagai tindak lanjut atas temuan skrining ini.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ACCORDION & ID PEMERIKSAAN */}
        <section className="space-y-4">
          {/* How HemaVision Works Accordion */}
          <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setShowHowItWorks(!showHowItWorks)}
              className="w-full p-4 flex items-center justify-between font-bold text-[#191B23] text-base text-left hover:bg-[#E7E7F3] transition-colors cursor-pointer"
            >
              <span>Bagaimana HemaVision melakukan skrining?</span>
              {showHowItWorks ? (
                <ChevronUp className="w-5 h-5 text-[#191B23]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#191B23]" />
              )}
            </button>

            {showHowItWorks && (
              <div className="p-4 border-t border-[#C3C6D7] text-sm text-[#434655] space-y-2 bg-white animate-fade-in">
                <p>
                  HemaVision mengombinasikan algoritma visi komputer dan kecerdasan buatan untuk mengamati tingkat pucat (pallor) pada konjungtiva mata, kuku jari, dan lipatan telapak tangan.
                </p>
                <p>
                  Sistem mengekstrak fitur warna dan mikrostroktur vaskular permukaan untuk mengestimasi risiko kecenderungan kondisi anemia tanpa menusuk kulit atau mengambil sampel darah.
                </p>
              </div>
            )}
          </div>

          {/* ID Pemeriksaan Box */}
          <div className="w-full py-8 px-6 bg-white rounded-2xl border-2 border-dashed border-[#C3C6D7] flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-xs font-bold text-[#434655] uppercase tracking-wider">ID PEMERIKSAAN</span>
            <p className="font-mono text-xl sm:text-2xl text-[#191B23] font-normal tracking-wide">
              {examinationId}
            </p>
            <button
              type="button"
              onClick={handleCopyId}
              className="pt-2 text-[#004AC6] text-base font-normal flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              {copiedId ? (
                <>
                  <Check className="w-4 h-4 text-[#006A61]" />
                  <span className="text-[#006A61] font-semibold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#004AC6]" />
                  <span>Salin ID</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* SECTION 6: ACTION BUTTONS IN-FLOW AT BOTTOM */}
        <section className="pt-4 pb-6 border-t border-[#C3C6D7]/40 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleBackToResults}
            className="w-full sm:flex-1 py-3.5 px-6 border-2 border-[#004AC6] bg-white text-[#004AC6] font-bold text-base rounded-xl hover:bg-[#004AC6]/10 active:scale-[0.98] transition-all cursor-pointer text-center shadow-xs"
          >
            Hasil Skrining
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="w-full sm:flex-1 py-3.5 px-6 bg-[#E1E2ED] text-[#434655] hover:bg-[#C3C6D7] font-bold text-base rounded-xl active:scale-[0.98] transition-all cursor-pointer text-center"
          >
            Kembali
          </button>
        </section>

      </div>

    </main>
  );
}
