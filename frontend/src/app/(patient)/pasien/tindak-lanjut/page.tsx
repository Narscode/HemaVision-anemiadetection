"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Activity,
  ChevronDown,
  ChevronUp,
  FileText,
  Copy,
  Check,
  AlertOctagon,
  HelpCircle,
  Stethoscope,
  SquareCheck,
  Square,
  FileEdit,
  Info,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function ExaminationRecommendationPage() {
  const router = useRouter();
  const [openWhy, setOpenWhy] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Interactive Preparation Checklist State
  const [checklist, setChecklist] = useState({
    result: true,
    symptoms: false,
    history: false,
    meds: false,
  });

  const toggleChecklist = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const summaryText =
    "PASIEN: BUDI SANTOSO (20/07/2026).\nHASIL HEMAVISION: RISIKO SEDANG\n(EST. HB 10.8 G/DL). GEJALA\nDILAPORKAN: KELELAHAN, PUSING,\nKESULITAN FOKUS. DATA BERDASARKAN\nANALISIS MULTI-MODALITAS AI\n(CONJUNCTIVA, PALMAR, NAILBED).\nMOHON EVALUASI KLINIS DAN\nKONFIRMASI LABORATORIUM.";

  const handleCopySummary = () => {
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] font-sans pb-32 flex flex-col items-center justify-start select-none overflow-x-hidden relative">
      
      {/* Top Ambient Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DBE1FF]/30 rounded-full blur-3xl pointer-events-none" />
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
            <h1 className="text-[#004AC6] text-xl sm:text-2xl font-bold tracking-tight">
              Rekomendasi Pemeriksaan
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
      <div className="w-full max-w-[672px] mx-auto px-4 py-6 space-y-8 relative z-10">
        
        {/* Subtitle */}
        <p className="text-[#434655] text-base font-normal">
          Langkah yang disarankan berdasarkan hasil skrining Anda
        </p>

        {/* CARD 1: 1. PEMERIKSAAN Hb KONFIRMASI */}
        <div className="group w-full bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6] p-6 shadow-xs hover:shadow-md transition-all duration-300 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#86F2E4] text-[#006F66] text-xs font-bold rounded-full shadow-2xs group-hover:bg-[#006F66] group-hover:text-white transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Direkomendasikan</span>
              </div>
              <h2 className="text-[#004AC6] text-2xl font-bold leading-tight group-hover:translate-x-0.5 transition-transform">
                1. PEMERIKSAAN Hb<br />KONFIRMASI
              </h2>
            </div>

            {/* Medical Bag Icon */}
            <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center text-[#004AC6] flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Stethoscope className="w-7 h-7 text-[#004AC6]" />
            </div>
          </div>

          {/* Accordion: Mengapa direkomendasikan? */}
          <div className="border-t border-[#C3C6D7] pt-4">
            <button
              type="button"
              onClick={() => setOpenWhy(!openWhy)}
              className="w-full flex items-center justify-between font-normal text-[#191B23] text-base text-left hover:text-[#004AC6] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#004AC6]" />
                <span className="font-medium">Mengapa direkomendasikan?</span>
              </div>
              {openWhy ? <ChevronUp className="w-5 h-5 text-[#191B23]" /> : <ChevronDown className="w-5 h-5 text-[#191B23]" />}
            </button>

            {openWhy && (
              <div className="pt-3 text-sm text-[#434655] space-y-2 bg-[#F3F3FE] p-4 rounded-lg mt-2 border border-[#C3C6D7]/40 animate-fade-in">
                <p>
                  Pemeriksaan laboratorium lanjutan disarankan untuk memastikan tingkat hemoglobin secara pasti dalam darah sebagai tindak lanjut atas temuan indikasi risiko sedang dari skrining ini.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 2: TIMELINE "APA YANG MUNGKIN TERJADI SELANJUTNYA?" */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#434655] text-sm font-semibold uppercase tracking-wider">
            <Activity className="w-4 h-4 text-[#004AC6] animate-pulse" />
            <h2>APA YANG MUNGKIN TERJADI SELANJUTNYA?</h2>
          </div>

          {/* Vertical Timeline Container */}
          <div className="relative pl-8 space-y-4">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-[#C3C6D7]" />

            {/* Timeline Step 1: Diskusi */}
            <div className="relative group">
              <div className="absolute -left-[25px] top-3 w-4 h-4 rounded-full bg-[#004AC6] border-4 border-[#FAF8FF] shadow-xs animate-pulse" />
              <div className="bg-[#F3F3FE] rounded-xl p-4 border border-[#004AC6]/30 group-hover:border-[#004AC6] group-hover:shadow-md transition-all duration-300 space-y-1">
                <h3 className="text-[#004AC6] font-bold text-base">Diskusi</h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Menunjukkan hasil skrining HemaVision kepada tenaga medis.
                </p>
              </div>
            </div>

            {/* Timeline Step 2: Evaluasi */}
            <div className="relative group">
              <div className="absolute -left-[25px] top-3 w-4 h-4 rounded-full bg-[#C3C6D7] border-4 border-[#FAF8FF] group-hover:bg-[#004AC6] transition-colors" />
              <div className="bg-[#F3F3FE] rounded-xl p-4 border border-transparent group-hover:border-[#004AC6]/50 group-hover:shadow-sm transition-all duration-300 space-y-1">
                <h3 className="text-[#191B23] font-bold text-base group-hover:text-[#004AC6] transition-colors">Evaluasi</h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Dokter menanyakan gejala klinis dan riwayat kesehatan Anda.
                </p>
              </div>
            </div>

            {/* Timeline Step 3: Pemeriksaan */}
            <div className="relative group">
              <div className="absolute -left-[25px] top-3 w-4 h-4 rounded-full bg-[#C3C6D7] border-4 border-[#FAF8FF] group-hover:bg-[#004AC6] transition-colors" />
              <div className="bg-[#F3F3FE] rounded-xl p-4 border border-transparent group-hover:border-[#004AC6]/50 group-hover:shadow-sm transition-all duration-300 space-y-1">
                <h3 className="text-[#191B23] font-bold text-base group-hover:text-[#004AC6] transition-colors">Pemeriksaan</h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Pengambilan sampel darah untuk pemeriksaan laboratorium resmi.
                </p>
              </div>
            </div>

            {/* Timeline Step 4: Interpretasi */}
            <div className="relative group">
              <div className="absolute -left-[25px] top-3 w-4 h-4 rounded-full bg-[#C3C6D7] border-4 border-[#FAF8FF] group-hover:bg-[#004AC6] transition-colors" />
              <div className="bg-[#F3F3FE] rounded-xl p-4 border border-transparent group-hover:border-[#004AC6]/50 group-hover:shadow-sm transition-all duration-300 space-y-1">
                <h3 className="text-[#191B23] font-bold text-base group-hover:text-[#004AC6] transition-colors">Interpretasi</h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Membaca hasil laboratorium bersama tenaga kesehatan profesional.
                </p>
              </div>
            </div>

            {/* Timeline Step 5: Rencana */}
            <div className="relative group">
              <div className="absolute -left-[25px] top-3 w-4 h-4 rounded-full bg-[#C3C6D7] border-4 border-[#FAF8FF] group-hover:bg-[#004AC6] transition-colors" />
              <div className="bg-[#F3F3FE] rounded-xl p-4 border border-transparent group-hover:border-[#004AC6]/50 group-hover:shadow-sm transition-all duration-300 space-y-1">
                <h3 className="text-[#191B23] font-bold text-base group-hover:text-[#004AC6] transition-colors">Rencana</h3>
                <p className="text-[#434655] text-sm font-normal leading-relaxed">
                  Pemberian saran nutrisi atau suplemen jika diperlukan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARD 3: KAPAN SEBAIKNYA DIPERIKSA? */}
        <div className="w-full bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] p-5 shadow-xs space-y-2 hover:border-[#004AC6] transition-all group">
          <div className="flex items-center gap-2 text-[#434655]">
            <Clock className="w-5 h-5 text-[#004AC6] group-hover:animate-spin-slow" />
            <h3 className="text-[#434655] font-semibold text-base">Kapan Sebaiknya Diperiksa?</h3>
          </div>
          <p className="text-[#191B23] text-base font-normal leading-relaxed">
            Konsultasikan dengan tenaga kesehatan untuk menentukan waktu terbaik pemeriksaan.
          </p>
          <p className="text-[#434655] text-sm italic font-normal leading-relaxed pt-1">
            Segera periksakan jika Anda merasa sangat lelah, pusing, atau sesak napas.
          </p>
        </div>

        {/* CARD 4: YANG PERLU DISIAPKAN (INTERACTIVE CHECKLIST) */}
        <div className="w-full bg-[#E7E7F3] rounded-xl border border-[#C3C6D7] p-5 space-y-4 shadow-2xs">
          <h3 className="text-[#191B23] font-bold text-base">Yang Perlu Disiapkan</h3>

          <div className="space-y-3">
            {/* Checklist Item 1 */}
            <div
              onClick={() => toggleChecklist("result")}
              className="flex items-start gap-3 cursor-pointer group"
            >
              {checklist.result ? (
                <SquareCheck className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5" />
              ) : (
                <Square className="w-5 h-5 text-[#737686] flex-shrink-0 mt-0.5 group-hover:text-[#004AC6]" />
              )}
              <div className="space-y-0.5">
                <span className={`text-base font-medium transition-colors ${checklist.result ? "text-[#191B23]" : "text-[#434655]"}`}>
                  Hasil skrining HemaVision
                </span>
                <p className="text-[#434655] text-xs font-normal">
                  Simpan tangkapan layar atau ID riwayat
                </p>
              </div>
            </div>

            {/* Checklist Item 2 */}
            <div
              onClick={() => toggleChecklist("symptoms")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              {checklist.symptoms ? (
                <SquareCheck className="w-5 h-5 text-[#004AC6] flex-shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-[#737686] flex-shrink-0 group-hover:text-[#004AC6]" />
              )}
              <span className={`text-base font-medium transition-colors ${checklist.symptoms ? "text-[#191B23]" : "text-[#434655]"}`}>
                Daftar Gejala yang dirasakan
              </span>
            </div>

            {/* Checklist Item 3 */}
            <div
              onClick={() => toggleChecklist("history")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              {checklist.history ? (
                <SquareCheck className="w-5 h-5 text-[#004AC6] flex-shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-[#737686] flex-shrink-0 group-hover:text-[#004AC6]" />
              )}
              <span className={`text-base font-medium transition-colors ${checklist.history ? "text-[#191B23]" : "text-[#434655]"}`}>
                Riwayat kesehatan keluarga
              </span>
            </div>

            {/* Checklist Item 4 */}
            <div
              onClick={() => toggleChecklist("meds")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              {checklist.meds ? (
                <SquareCheck className="w-5 h-5 text-[#004AC6] flex-shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-[#737686] flex-shrink-0 group-hover:text-[#004AC6]" />
              )}
              <span className={`text-base font-medium transition-colors ${checklist.meds ? "text-[#191B23]" : "text-[#434655]"}`}>
                Daftar Obat/suplemen rutin
              </span>
            </div>
          </div>
        </div>

        {/* CARDS 5 & 6: ACTION GUIDANCE CARDS */}
        <div className="space-y-3">
          <div className="w-full bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] p-4 flex items-start gap-3 hover:border-[#004AC6] transition-all cursor-pointer group">
            <FileEdit className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div className="space-y-1">
              <h4 className="text-[#191B23] font-semibold text-base group-hover:text-[#004AC6] transition-colors">
                Catat Perubahan Gejala
              </h4>
              <p className="text-[#434655] text-xs font-normal leading-relaxed">
                Perhatikan jika muncul pucat pada telapak tangan atau mata.
              </p>
            </div>
          </div>

          <div className="w-full bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] p-4 flex items-start gap-3 hover:border-[#004AC6] transition-all cursor-pointer group">
            <Info className="w-5 h-5 text-[#004AC6] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div className="space-y-1">
              <h4 className="text-[#191B23] font-semibold text-base group-hover:text-[#004AC6] transition-colors">
                Siapkan Informasi Kesehatan
              </h4>
              <p className="text-[#434655] text-xs font-normal leading-relaxed">
                Ketahui asupan harian zat besi dari makanan Anda.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 7: RINGKASAN UNTUK TENAGA KESEHATAN (BLUE CARD) */}
        <div className="w-full bg-[#004AC6] rounded-xl p-6 shadow-xl text-white space-y-4 relative overflow-hidden group">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

          <div className="flex items-center justify-between">
            <h3 className="text-[#EEEFFF] font-semibold text-base">
              Ringkasan untuk Tenaga Kesehatan
            </h3>
            <FileText className="w-5 h-5 text-[#EEEFFF]/80 group-hover:rotate-12 transition-transform" />
          </div>

          <div className="bg-white/10 rounded-lg p-4 font-mono text-xs sm:text-sm text-[#EEEFFF] leading-relaxed backdrop-blur-xs border border-white/20 select-all">
            {summaryText}
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="w-full py-3.5 px-6 bg-[#EEEFFF] hover:bg-white active:scale-[0.98] text-[#004AC6] font-bold text-sm rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {copiedSummary ? (
              <>
                <Check className="w-4 h-4 text-[#006A61]" />
                <span className="text-[#006A61]">Tersalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#004AC6]" />
                <span>Salin Ringkasan</span>
              </>
            )}
          </button>
        </div>

        {/* CARD 8: JIKA KONDISI MEMBURUK (EMERGENCY RED BOX) */}
        <div className="w-full bg-[#FFDAD6] border border-[#BA1A1A] rounded-xl p-4 flex items-center gap-4 text-[#93000A] shadow-xs">
          <div className="w-10 h-10 bg-[#BA1A1A] rounded-full flex items-center justify-center text-white animate-pulse flex-shrink-0 shadow-xs">
            <AlertOctagon className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-bold text-base text-[#93000A]">Jika Kondisi Memburuk</h4>
            <p className="text-sm font-normal text-[#93000A]/90">
              Cari pertolongan medis segera di UGD terdekat.
            </p>
          </div>
        </div>

        {/* SECTION 9: ACCORDION TENTANG REKOMENDASI INI */}
        <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-xl overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenAbout(!openAbout)}
            className="w-full p-4 flex items-center justify-between font-normal text-[#434655] text-base text-left hover:bg-[#E7E7F3] transition-colors cursor-pointer"
          >
            <span>Tentang Rekomendasi Ini</span>
            {openAbout ? <ChevronUp className="w-5 h-5 text-[#434655]" /> : <ChevronDown className="w-5 h-5 text-[#434655]" />}
          </button>

          {openAbout && (
            <div className="p-4 border-t border-[#C3C6D7] text-sm text-[#434655] space-y-2 bg-white animate-fade-in">
              <p>
                Rekomendasi ini disusun berdasarkan panduan penanganan awal risiko anemia dan dirancang untuk membantu komunikasi antara pasien dan tenaga medis secara efektif.
              </p>
            </div>
          )}
        </div>

      </div>

    </main>
  );
}
