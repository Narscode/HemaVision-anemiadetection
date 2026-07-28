"use client";

import React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Stethoscope,
  FileBarChart2,
  History,
  BookOpen,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function PatientDashboardPage() {
  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] p-4 sm:p-6 font-sans space-y-6 pb-24">
      <div className="w-full max-w-[640px] mx-auto space-y-6">
        
        {/* Greeting Section */}
        <div className="space-y-1">
          <h1 className="text-[#191B23] text-2xl font-semibold leading-8">
            Halo, Budi
          </h1>
          <p className="text-[#434655] text-base font-normal leading-6">
            Berikut adalah ringkasan kesehatan Anda hari ini.
          </p>
        </div>

        {/* Primary Status Card: Hasil Skrining Terakhir */}
        <div className="relative w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-xs overflow-hidden space-y-6">
          
          {/* Teal Blur Background Circle in Top Right */}
          <div className="absolute -top-24 -right-12 w-64 h-64 bg-[#86F2E4]/30 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            {/* Warning Header Badge */}
            <div className="flex items-center gap-2 text-[#943700]">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 stroke-[2.5]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.70px]">
                PERHATIAN DIPERLUKAN
              </span>
            </div>

            {/* Title & Status */}
            <div className="space-y-1">
              <h2 className="text-[#191B23] text-2xl font-semibold leading-8">
                Hasil Skrining Terakhir:{" "}
                <span className="text-[#943700]">Risiko Sedang</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#434655] text-base leading-6">
              Hasil skrining pada <strong className="text-[#191B23] font-medium">20 Juli 2026</strong> menunjukkan adanya risiko anemia yang perlu ditindaklanjuti. Hasil skrining bukan diagnosis medis.
            </p>
          </div>

          {/* Action Button: Lihat Hasil */}
          <div className="relative z-10 pt-2">
            <Link
              href={ROUTES.PATIENT.HASIL}
              className="w-full sm:w-auto inline-flex items-center justify-center py-3 px-8 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-semibold text-sm rounded-lg shadow-sm transition-all cursor-pointer gap-2"
            >
              <span>Lihat Hasil</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Next Step Banner: Konsultasi Nakes */}
        <div className="w-full p-4 bg-[#86F2E4]/30 border border-[#86F2E4] rounded-xl flex items-start gap-4 text-left">
          <div className="w-12 h-12 bg-[#006A61] rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-xs">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-0.5 pt-0.5">
            <h3 className="text-[#006F66] text-sm font-bold leading-5">
              Langkah Berikutnya:
            </h3>
            <p className="text-[#006F66] text-base font-normal leading-6">
              Konsultasikan hasil dengan tenaga kesehatan.
            </p>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="space-y-3 pt-2">
          <h2 className="text-[#191B23] text-2xl font-semibold leading-8">
            Akses Cepat
          </h2>

          <div className="space-y-3">
            {/* Quick Link 1: Hasil Skrining */}
            <Link
              href={ROUTES.PATIENT.HASIL}
              className="p-5 bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6]/50 hover:shadow-xs transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <FileBarChart2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#191B23] text-sm font-semibold leading-5">
                  Hasil Skrining
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#434655] group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Quick Link 2: Riwayat Skrining */}
            <Link
              href={ROUTES.PATIENT.RIWAYAT}
              className="p-5 bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6]/50 hover:shadow-xs transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#86F2E4] rounded-full flex items-center justify-center text-[#006F66] flex-shrink-0">
                  <History className="w-5 h-5 text-[#006F66]" />
                </div>
                <span className="text-[#191B23] text-sm font-semibold leading-5">
                  Riwayat Skrining
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#434655] group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Quick Link 3: Edukasi Anemia */}
            <Link
              href={ROUTES.PATIENT.EDUKASI}
              className="p-5 bg-white rounded-xl border border-[#C3C6D7] hover:border-[#004AC6]/50 hover:shadow-xs transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#E1E2ED] rounded-full flex items-center justify-center text-[#191B23] flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-[#191B23]" />
                </div>
                <span className="text-[#191B23] text-sm font-semibold leading-5">
                  Edukasi Anemia
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#434655] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured Article Card */}
        <Link
          href={ROUTES.PATIENT.EDUKASI}
          className="relative w-full h-40 rounded-xl overflow-hidden shadow-xs cursor-pointer block group"
        >
          {/* Article Image */}
          <img
            src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
            alt="Pola Makan untuk Atasi Anemia"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-5 flex flex-col justify-end text-white">
            <span className="text-xs font-medium text-white/90">Artikel Baru</span>
            <h3 className="text-lg font-bold text-white leading-snug">
              Pola Makan untuk Atasi Anemia
            </h3>
            <div className="mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-xs border border-white/40 text-white text-xs font-medium rounded-lg transition-all">
                <span>Baca Selengkapnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Link>

      </div>
    </main>
  );
}
