"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Pencil, CheckCircle2, ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function Step4ScreeningPage() {
  const router = useRouter();

  const handleSaveAndFinish = () => {
    router.push(ROUTES.PATIENT.ONBOARDING_SELESAI);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#F3F3FE] to-[#FAF8FF] flex flex-col justify-center items-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-[640px] mx-auto space-y-6">

        {/* Step Indicator Header (LANGKAH 4 DARI 4) */}
        <div className="space-y-2 px-1">
          <div className="flex items-center justify-between">
            <span className="text-[#004AC6] text-xs sm:text-sm font-semibold uppercase tracking-[0.35px]">
              LANGKAH 4 DARI 4
            </span>
          </div>
          {/* Progress Bar (100% filled with 4 active segments) */}
          <div className="w-full h-2 bg-[#E1E2ED] rounded-full overflow-hidden flex">
            <div className="w-1/4 h-full bg-[#004AC6] border-r border-white rounded-l-full transition-all duration-500" />
            <div className="w-1/4 h-full bg-[#004AC6] border-r border-white transition-all duration-500" />
            <div className="w-1/4 h-full bg-[#004AC6] border-r border-white transition-all duration-500" />
            <div className="w-1/4 h-full bg-[#004AC6] rounded-r-full transition-all duration-500" />
          </div>
        </div>

        {/* Main Review Card */}
        <div className="w-full bg-[#FAF8FF] sm:bg-white rounded-xl shadow-[0px_4px_24px_rgba(0,0,0,0.04)] border border-[#E1E2ED] p-6 sm:p-8 space-y-8">

          {/* Header Title Section */}
          <div className="space-y-2 text-center">
            <h1 className="text-[#191B23] text-2xl font-semibold leading-8">
              Periksa Kembali Data Anda
            </h1>
            <p className="text-[#434655] text-base font-normal leading-6 max-w-md mx-auto">
              Mohon periksa kembali informasi yang telah Anda masukkan sebelum menyimpan data skrining ini.
            </p>
          </div>

          {/* Review Sections List */}
          <div className="space-y-6">

            {/* Section 1: DATA DIRI */}
            <div className="p-6 bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] space-y-4">
              <div className="pb-2 border-b border-[#C3C6D7] flex items-center justify-between">
                <span className="text-[#004AC6] text-sm font-semibold uppercase tracking-[0.70px]">
                  DATA DIRI
                </span>
                <Link
                  href={ROUTES.PATIENT.SKRINING_LANGKAH1}
                  className="flex items-center gap-1 text-[#004AC6] hover:underline text-sm font-medium transition-all"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  <span>Ubah</span>
                </Link>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="block text-[#434655] text-xs sm:text-sm font-medium">Nama Lengkap</span>
                  <span className="block text-[#191B23] text-base font-normal">Budi Santoso</span>
                </div>
                <div>
                  <span className="block text-[#434655] text-xs sm:text-sm font-medium">Tanggal Lahir</span>
                  <span className="block text-[#191B23] text-base font-normal">15 Agustus 1985</span>
                </div>
                <div>
                  <span className="block text-[#434655] text-xs sm:text-sm font-medium">Usia</span>
                  <span className="block text-[#191B23] text-base font-normal">38 Tahun</span>
                </div>
                <div>
                  <span className="block text-[#434655] text-xs sm:text-sm font-medium">Jenis Kelamin</span>
                  <span className="block text-[#191B23] text-base font-normal">Laki-laki</span>
                </div>
              </div>
            </div>

            {/* Section 2: INFORMASI KESEHATAN */}
            <div className="p-6 bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] space-y-4">
              <div className="pb-2 border-b border-[#C3C6D7] flex items-center justify-between">
                <span className="text-[#004AC6] text-sm font-semibold uppercase tracking-[0.70px]">
                  INFORMASI KESEHATAN
                </span>
                <Link
                  href={ROUTES.PATIENT.SKRINING_LANGKAH2}
                  className="flex items-center gap-1 text-[#004AC6] hover:underline text-sm font-medium transition-all"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  <span>Ubah</span>
                </Link>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="block text-[#434655] text-xs sm:text-sm font-medium">Riwayat Anemia dalam Keluarga</span>
                  <span className="block text-[#191B23] text-base font-normal">Tidak ada riwayat keluarga yang diketahui.</span>
                </div>
                <div>
                  <span className="block text-[#434655] text-xs sm:text-sm font-medium">Kondisi Medis Penyerta</span>
                  <span className="block text-[#191B23] text-base font-normal">Hipertensi (Terkontrol)</span>
                </div>
              </div>
            </div>

            {/* Section 3: GEJALA SAAT INI */}
            <div className="p-6 bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] space-y-4">
              <div className="pb-2 border-b border-[#C3C6D7] flex items-center justify-between">
                <span className="text-[#004AC6] text-sm font-semibold uppercase tracking-[0.70px]">
                  GEJALA SAAT INI
                </span>
                <Link
                  href={ROUTES.PATIENT.SKRINING_LANGKAH3}
                  className="flex items-center gap-1 text-[#004AC6] hover:underline text-sm font-medium transition-all"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  <span>Ubah</span>
                </Link>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 bg-[#FFDAD6] text-[#93000A] text-sm font-medium rounded-full">
                    Mudah Lelah
                  </span>
                  <span className="px-3 py-1 bg-[#FFDAD6] text-[#93000A] text-sm font-medium rounded-full">
                    Pusing
                  </span>
                  <span className="px-3 py-1 bg-[#E1E2ED] text-[#434655] text-sm font-medium rounded-full">
                    Pucat
                  </span>
                </div>
                <p className="text-[#434655] text-sm font-normal pt-1">
                  Durasi gejala: Kurang lebih 2 minggu terakhir.
                </p>
              </div>
            </div>

          </div>

          {/* Action Footer Buttons (Stacked vertically as in design mockup) */}
          <div className="pt-4 border-t border-[#C3C6D7] space-y-3">
            <button
              type="button"
              onClick={handleSaveAndFinish}
              className="w-full py-3.5 px-6 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-semibold text-sm rounded-lg shadow-sm transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>Simpan & Selesaikan</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>

            <Link
              href={ROUTES.PATIENT.SKRINING_LANGKAH3}
              className="w-full py-3 px-6 bg-white border border-[#C3C6D7] hover:bg-[#FAF8FF] text-[#004AC6] font-semibold text-sm rounded-lg transition-all text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
