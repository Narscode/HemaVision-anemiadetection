"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Bell,
  Grid,
  AlertOctagon,
  RefreshCw,
  Eye,
  Hand,
  AlertTriangle,
  FileCheck,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function MonitoringPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full min-h-screen bg-[#FAF8FF] font-sans text-[#191B23] p-6 sm:p-8 space-y-6 pb-24">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-[#434655]">
        <Link href={ROUTES.NAKES.MONITORING} className="hover:underline">
          Monitoring
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#434655]" />
        <span>ID: PX-8842-19</span>
        <ChevronRight className="w-3.5 h-3.5 text-[#434655]" />
        <span className="font-semibold text-[#191B23]">Hasil Analisis</span>
      </div>

      {/* Main Page Title & Status Pill */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight">
            Evaluasi Citra
          </h1>
          <p className="text-sm text-[#434655]">
            Sesi Pemindaian: 24 Okt 2023, 14:30 WIB
          </p>
        </div>

        <div className="px-3.5 py-1.5 bg-[#EDEDF9] rounded-full text-xs font-mono font-medium text-[#434655] self-start sm:self-auto border border-[#C3C6D7]/40 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>STATUS: SELESAI DENGAN PERINGATAN</span>
        </div>
      </div>

      {/* Core Alert Grid (2 Columns: Inconclusive Banner + Consistency Gauge) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column (Span 7): Hasil Belum Konklusif */}
        <div className="lg:col-span-7 p-6 bg-[#FFDAD6]/40 border border-[#FFDAD6] rounded-2xl space-y-4 shadow-xs flex flex-col justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#BA1A1A] rounded-full text-white shrink-0">
              <AlertOctagon className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-[#BA1A1A] uppercase tracking-wide">
                HASIL BELUM KONKLUSIF
              </h2>
              <h3 className="text-lg font-semibold text-[#BA1A1A]">
                Hasil Antar-Lokasi Kurang Konsisten
              </h3>
            </div>
          </div>

          <div className="p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-[#FFDAD6]/60 text-sm text-[#434655] leading-relaxed">
            Analisis dari beberapa lokasi pemeriksaan menunjukkan tingkat konsistensi yang belum memadai untuk menghasilkan estimasi risiko dengan keyakinan yang cukup.
          </div>
        </div>

        {/* Right Column (Span 5): Metrik Konsistensi Multi-Lokasi */}
        <div className="lg:col-span-5 p-6 bg-[#FAF8FF] border border-[#C3C6D7] rounded-2xl flex flex-col items-center justify-between space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-[#434655] uppercase tracking-wider">
            <RefreshCw className="w-4 h-4 text-[#434655]" />
            <span>METRIK KONSISTENSI MULTI-LOKASI</span>
          </div>

          {/* Donut Gauge Ring */}
          <div className="relative w-28 h-28 rounded-full border-8 border-[#BA1A1A] border-t-slate-200 flex flex-col items-center justify-center shadow-inner">
            <span className="text-3xl font-black text-[#191B23]">32</span>
            <span className="text-xs font-bold text-[#434655] -mt-1">%</span>
          </div>

          {/* Status Badge */}
          <div className="px-8 py-1 bg-[#FFDAD6] text-[#BA1A1A] font-bold text-sm rounded-full border border-[#FFDAD6] tracking-wider uppercase">
            RENDAH
          </div>
        </div>
      </div>

      {/* Rincian Analisis per Lokasi Section */}
      <div className="space-y-4 pt-2">
        <h2 className="text-xl font-bold text-[#191B23]">
          Rincian Analisis per Lokasi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location 1: Konjungtiva Kanan (Matching exact HTML snippet) */}
          <div className="p-4 bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] flex flex-col justify-between space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#434655] text-sm font-medium">
                <Eye className="w-4 h-4 text-[#434655]" />
                <span>Konjungtiva Kanan</span>
              </div>
              <span className="px-2 py-0.5 bg-[#EDEDF9] rounded text-xs font-mono text-[#434655] font-medium">
                Capture #1
              </span>
            </div>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-3xl font-semibold text-[#191B23]">11.2</span>
              <span className="text-sm font-mono font-medium text-[#434655]">g/dL</span>
            </div>

            <div className="w-full h-1.5 bg-[#E1E2ED] rounded-full overflow-hidden">
              <div className="h-full bg-[#6BD8CB] rounded-full w-[60%]" />
            </div>

            <span className="text-xs font-medium text-[#434655]">
              Kualitasi Citra: Cukup
            </span>
          </div>

          {/* Location 2: Kuku Jari Telunjuk */}
          <div className="p-4 bg-[#FAF8FF] rounded-xl border border-[#C3C6D7] flex flex-col justify-between space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#434655] text-sm font-medium">
                <Hand className="w-4 h-4 text-[#434655]" />
                <span>Kuku Jari Telunjuk</span>
              </div>
              <span className="px-2 py-0.5 bg-[#EDEDF9] rounded text-xs font-mono text-[#434655] font-medium">
                Capture #2
              </span>
            </div>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-3xl font-semibold text-[#191B23]">14.5</span>
              <span className="text-sm font-mono font-medium text-[#434655]">g/dL</span>
            </div>

            <div className="w-full h-1.5 bg-[#E1E2ED] rounded-full overflow-hidden">
              <div className="h-full bg-[#004AC6] rounded-full w-[82%]" />
            </div>

            <span className="text-xs font-medium text-[#434655]">
              Kualitas Citra: Baik
            </span>
          </div>

          {/* Location 3: Telapak Tangan (Anomali) */}
          <div className="p-4 bg-[#FFDAD6]/20 rounded-xl border border-red-200 flex flex-col justify-between space-y-3 shadow-xs relative overflow-hidden">
            {/* Top Right Anomali Badge */}
            <div className="bg-[#BA1A1A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-bl-lg absolute top-0 right-0 tracking-wider">
              ANOMALI
            </div>

            <div className="flex items-center justify-between pr-14">
              <div className="flex items-center gap-2 text-[#434655] text-sm font-medium">
                <Hand className="w-4 h-4 text-[#434655]" />
                <span>Telapak Tangan</span>
              </div>
              <span className="px-2 py-0.5 bg-[#EDEDF9] rounded text-xs font-mono text-[#434655] font-medium">
                Capture #3
              </span>
            </div>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-3xl font-semibold text-[#BA1A1A]">8.9</span>
              <span className="text-sm font-mono font-medium text-[#434655]">g/dL</span>
            </div>

            <div className="w-full h-1.5 bg-[#E1E2ED] rounded-full overflow-hidden">
              <div className="h-full bg-[#BA1A1A] rounded-full w-[35%]" />
            </div>

            <span className="text-xs font-medium text-[#BA1A1A] flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-[#BA1A1A]" />
              <span>Indikasi Pencahayaan Buruk</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#C3C6D7]">
        <span className="text-sm font-medium text-[#434655]">
          Pertimbangkan Pemeriksaan Hb
        </span>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link
            href="/capture/session-eye-101"
            className="flex-1 sm:flex-none px-5 py-2.5 bg-white border border-[#004AC6] text-[#004AC6] font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Citra yang Direkomendasikan</span>
          </Link>

          <Link
            href="/nakes/hasil"
            className="flex-1 sm:flex-none px-6 py-2.5 bg-[#004AC6] hover:bg-[#003EA8] text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileCheck className="w-4 h-4" />
            <span>Review Kualitas Citra</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
