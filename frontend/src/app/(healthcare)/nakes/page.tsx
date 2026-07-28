"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import {
  ChevronRight,
  Plus,
  Search,
  Users,
  FileText,
  Calendar,
  AlertTriangle,
  Info,
  Megaphone,
} from "lucide-react";

export default function HealthcareDashboardPage() {
  const [activeBar, setActiveBar] = useState<number>(2); // Default to Wednesday (RAB)
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const chartRef = useRef<HTMLDivElement | null>(null);

  const weeklyData = [
    { day: "SEN", height: "45%", delay: "100ms" },
    { day: "SEL", height: "65%", delay: "200ms" },
    { day: "RAB", height: "92%", delay: "300ms" },
    { day: "KAM", height: "55%", delay: "400ms" },
    { day: "JUM", height: "82%", delay: "500ms" },
    { day: "SAB", height: "70%", delay: "600ms" },
    { day: "MIN", height: "98%", delay: "700ms" },
  ];

  // Scroll Trigger Observer: Re-trigger upward bar animation whenever graph scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when scrolled out of view
        }
      },
      { threshold: 0.25 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#FAF8FF] min-h-screen p-6 sm:p-8 lg:p-10 space-y-10 font-sans relative">
      {/* Top Welcome Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-[32px] font-semibold text-[#191B23] leading-tight tracking-tight">
            Selamat datang, Dr. Pratama
          </h1>
          <p className="text-base text-[#434655]">
            Berikut ringkasan aktivitas hematologi hari ini.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Button: Cari Pasien */}
          <Link
            href={ROUTES.NAKES.PASIEN_LIST}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#C3C6D7] text-[#191B23] font-bold text-base rounded-lg shadow-xs hover:bg-[#b0b4c7] hover:shadow-md active:scale-[0.96] active:ring-4 active:ring-slate-300 active:border active:border-slate-500 transition-all duration-150 select-none cursor-pointer"
          >
            <Search className="w-5 h-5 text-[#191B23]" />
            <span>Cari Pasien</span>
          </Link>

          {/* Button: + Mulai Skrining Baru */}
          <Link
            href={ROUTES.NAKES.SKRINING_BARU}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#004AC6] text-white font-bold text-base rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.96] active:ring-4 active:ring-blue-300 active:border active:border-blue-800 transition-all duration-150 select-none cursor-pointer"
          >
            <Plus className="w-5 h-5 text-white stroke-[3]" />
            <span>+ Mulai Skrining Baru</span>
          </Link>
        </div>
      </div>

      {/* 4 Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Total Pasien */}
        <div className="bg-white rounded-xl p-6 border border-[#C3C6D7] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-[#DBE1FF] rounded-lg">
              <Users className="w-5 h-5 text-[#004AC6]" />
            </div>
            <span className="text-sm font-bold text-[#006A61]">+2.4%</span>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium text-[#434655] block">Total Pasien</span>
            <span className="text-2xl font-semibold text-[#191B23]">1,240</span>
          </div>
        </div>

        {/* Card 2: Total Skrining */}
        <div className="bg-white rounded-xl p-6 border border-[#C3C6D7] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-[#DBE1FF] rounded-lg">
              <FileText className="w-5 h-5 text-[#004AC6]" />
            </div>
            <span className="text-sm font-bold text-[#006A61]">+12%</span>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium text-[#434655] block">Total Skrining</span>
            <span className="text-2xl font-semibold text-[#191B23]">3,450</span>
          </div>
        </div>

        {/* Card 3: Skrining Hari Ini */}
        <div className="bg-white rounded-xl p-6 border border-[#C3C6D7] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-[#DBE1FF] rounded-lg">
              <Calendar className="w-5 h-5 text-[#004AC6]" />
            </div>
            <span className="text-sm font-bold text-[#434655]">Hari Ini</span>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium text-[#434655] block">Skrining Hari Ini</span>
            <span className="text-2xl font-semibold text-[#191B23]">42</span>
          </div>
        </div>

        {/* Card 4: Membutuhkan Tindak Lanjut (Urgent) */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-l-[#BA1A1A] border-y border-r border-[#C3C6D7] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="p-2 bg-[#FFDAD6] rounded-lg">
              <AlertTriangle className="w-5 h-5 text-[#BA1A1A]" />
            </div>
            <span className="text-sm font-bold text-[#BA1A1A]">Urgent</span>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium text-[#434655] block leading-tight">
              Membutuhkan Tindak Lanjut
            </span>
            <span className="text-2xl font-semibold text-[#BA1A1A]">8</span>
          </div>
        </div>
      </div>

      {/* Skrining Terbaru Table Card */}
      <div className="bg-white rounded-xl border border-[#C3C6D7] shadow-xs overflow-hidden">
        <div className="p-6 border-b border-[#C3C6D7] flex items-center justify-between">
          <h2 className="text-xl font-normal text-[#191B23]">Skrining Terbaru</h2>
          <Link
            href={ROUTES.NAKES.HASIL}
            className="text-sm font-bold text-[#004AC6] hover:underline"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#F3F3FE] text-sm font-medium text-[#434655] border-b border-[#C3C6D7]">
              <tr>
                <th className="px-6 py-4 font-medium">Pasien</th>
                <th className="px-6 py-4 font-medium">Tanggal</th>
                <th className="px-6 py-4 font-medium">Risiko</th>
                <th className="px-6 py-4 font-medium">Confidence</th>
                <th className="px-6 py-4 font-medium">Status Tindak Lanjut</th>
                <th className="px-6 py-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C3C6D7]">
              {/* Row 1: Anisa Septiani */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#86F2E4] text-[#006F66] font-bold text-xs flex items-center justify-center shrink-0">
                      AS
                    </div>
                    <div>
                      <div className="font-semibold text-[#191B23] text-base leading-snug">
                        Anisa Septiani
                      </div>
                      <div className="text-xs text-[#434655]">ID: HV-9021</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#191B23] text-base">12 Okt 2023, 09:15</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-[#FEE2E2] text-[#BA1A1A] text-xs font-bold rounded-full">
                    Risiko Tinggi
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-20 space-y-1">
                    <div className="w-full h-1.5 bg-[#C3C6D7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#BA1A1A] rounded-full" style={{ width: "98.2%" }} />
                    </div>
                    <span className="text-xs text-[#434655] font-normal block">98.2%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-[#DBEAFE] text-[#004AC6] text-xs font-bold rounded-full">
                    Perlu Follow-up
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <Link
                    href={ROUTES.NAKES.HASIL}
                    className="inline-block p-1.5 text-[#737686] hover:text-[#004AC6] hover:bg-blue-50 rounded-full active:scale-90 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </td>
              </tr>

              {/* Row 2: Budi Kusuma */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#DBE1FF] text-[#00174B] font-bold text-xs flex items-center justify-center shrink-0">
                      BK
                    </div>
                    <div>
                      <div className="font-semibold text-[#191B23] text-base leading-snug">
                        Budi Kusuma
                      </div>
                      <div className="text-xs text-[#434655]">ID: HV-8821</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#191B23] text-base">12 Okt 2023, 08:45</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-[#DCFCE7] text-[#006A61] text-xs font-bold rounded-full">
                    Risiko Rendah
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-20 space-y-1">
                    <div className="w-full h-1.5 bg-[#C3C6D7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#006A61] rounded-full" style={{ width: "94.5%" }} />
                    </div>
                    <span className="text-xs text-[#434655] font-normal block">94.5%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-[#E7E7F3] text-[#434655] text-xs font-bold rounded-full">
                    Selesai
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <Link
                    href={ROUTES.NAKES.HASIL}
                    className="inline-block p-1.5 text-[#737686] hover:text-[#004AC6] hover:bg-blue-50 rounded-full active:scale-90 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </td>
              </tr>

              {/* Row 3: Maya Lestari */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FFDBCD] text-[#360F00] font-bold text-xs flex items-center justify-center shrink-0">
                      ML
                    </div>
                    <div>
                      <div className="font-semibold text-[#191B23] text-base leading-snug">
                        Maya Lestari
                      </div>
                      <div className="text-xs text-[#434655]">ID: HV-7632</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#191B23] text-base">11 Okt 2023, 16:20</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-[#FEF3C7] text-[#943700] text-xs font-bold rounded-full">
                    Risiko Sedang
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-20 space-y-1">
                    <div className="w-full h-1.5 bg-[#C3C6D7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#943700] rounded-full" style={{ width: "87.1%" }} />
                    </div>
                    <span className="text-xs text-[#434655] font-normal block">87.1%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-[#DBEAFE] text-[#004AC6] text-xs font-bold rounded-full">
                    Perlu Follow-up
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <Link
                    href={ROUTES.NAKES.HASIL}
                    className="inline-block p-1.5 text-[#737686] hover:text-[#004AC6] hover:bg-blue-50 rounded-full active:scale-90 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Grid Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Tren Diagnostik Mingguan (Scroll-Triggered Animated Bar Graph) */}
        <div
          ref={chartRef}
          className="bg-[#F3F3FE] rounded-xl p-6 outline outline-1 outline-[#C3C6D7] flex flex-col justify-between space-y-4"
        >
          <h3 className="text-lg font-normal text-[#191B23]">Tren Diagnostik Mingguan</h3>

          <div className="bg-[#FAF8FF] rounded-lg p-4 h-48 flex items-end justify-between gap-3 overflow-hidden">
            {weeklyData.map((item, index) => {
              const isSelected = activeBar === index;
              return (
                <div
                  key={item.day}
                  onClick={() => setActiveBar(index)}
                  className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer group"
                >
                  <div
                    className={`w-full rounded-t-xs transition-all duration-500 ${
                      isVisible ? "animate-bar-grow" : "scale-y-0 opacity-0"
                    } ${
                      isSelected
                        ? "bg-[#004AC6] shadow-md shadow-blue-500/30"
                        : "bg-[#B4C5FF] hover:bg-[#85a3ff]"
                    }`}
                    style={{
                      height: isVisible ? item.height : "0%",
                      animationDelay: isVisible ? item.delay : "0ms",
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-between text-[10px] font-bold text-[#434655] uppercase tracking-wider px-1">
            {weeklyData.map((item, index) => (
              <span
                key={item.day}
                onClick={() => setActiveBar(index)}
                className={`cursor-pointer transition-colors ${
                  activeBar === index ? "text-[#004AC6] font-extrabold" : "hover:text-[#004AC6]"
                }`}
              >
                {item.day}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Pengumuman & Update */}
        <div className="bg-[#F3F3FE] rounded-xl p-6 outline outline-1 outline-[#C3C6D7] flex flex-col justify-start space-y-4">
          <h3 className="text-lg font-normal text-[#191B23]">Pengumuman & Update</h3>

          <div className="space-y-3">
            {/* Item 1 */}
            <div className="p-4 bg-white rounded-lg outline outline-1 outline-[#C3C6D7] flex items-start gap-4 shadow-xs hover:shadow-md hover:outline-blue-400 active:scale-[0.98] transition-all cursor-pointer">
              <div className="p-1 text-[#943700] shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-[#191B23] text-sm leading-snug">
                  Update Protokol Lab
                </h4>
                <p className="text-xs text-[#434655] leading-relaxed">
                  Standar kalibrasi analyzer diperbarui untuk parameter HGB.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-4 bg-white rounded-lg outline outline-1 outline-[#C3C6D7] flex items-start gap-4 shadow-xs hover:shadow-md hover:outline-blue-400 active:scale-[0.98] transition-all cursor-pointer">
              <div className="p-1 text-[#004AC6] shrink-0 mt-0.5">
                <Megaphone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-[#191B23] text-sm leading-snug">
                  Webinar Hematologi
                </h4>
                <p className="text-xs text-[#434655] leading-relaxed">
                  Besok pukul 14:00: Analisis Sel Morfologi berbasis AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <Link
        href={ROUTES.NAKES.SKRINING_BARU}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#004AC6] hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/40 z-40 hover:scale-105 active:scale-90 active:ring-4 active:ring-blue-300 transition-all duration-150 select-none cursor-pointer"
        aria-label="Mulai Skrining Baru"
      >
        <Plus className="w-8 h-8 stroke-[3]" />
      </Link>
    </div>
  );
}
