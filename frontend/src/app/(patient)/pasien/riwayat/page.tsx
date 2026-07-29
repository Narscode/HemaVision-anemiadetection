"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Info,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Activity,
  ChevronRight,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function PatientHistoryPage() {
  const [chartAnimated, setChartAnimated] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-[672px] mx-auto px-4 py-6 space-y-8 pb-32">
      
      {/* Page Title */}
      <div className="w-full text-center py-2 border-b border-[#C3C6D7]/40">
        <h1 className="text-[#004AC6] text-2xl font-bold tracking-tight">
          Riwayat Skrining
        </h1>
      </div>

      {/* Notice Info Card */}
      <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-xl p-4 flex items-start gap-3.5 shadow-xs hover:shadow-md hover:border-[#004AC6]/40 transition-all duration-300 group">
        <div className="w-8 h-8 rounded-full bg-[#004AC6]/10 flex items-center justify-center text-[#004AC6] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
          <Info className="w-5 h-5 text-[#004AC6]" />
        </div>
        <p className="text-[#434655] text-base font-normal leading-relaxed">
          Riwayat ini membantu Anda melihat perubahan hasil skrining dari waktu ke waktu.
        </p>
      </div>

      {/* SECTION 1: GARIS WAKTU (TIMELINE) */}
      <section className="space-y-4">
        <h2 className="text-[#191B23] text-2xl font-bold tracking-tight">
          Garis Waktu
        </h2>

        {/* Timeline Container Card */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-xs relative space-y-6 overflow-hidden">
          {/* Vertical Timeline Connecting Line */}
          <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-[#C3C6D7]" />

          {/* Timeline Item 1: 20 Jul 2026 */}
          <div className="flex items-start gap-4 relative z-10 group">
            {/* Node Icon Circle (Teal Turquoise) */}
            <div className="w-8 h-8 rounded-full bg-[#86F2E4] border-2 border-white flex items-center justify-center text-[#006F66] shadow-xs flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-4 h-4 text-[#006F66]" />
            </div>

            {/* Card Content */}
            <Link
              href={ROUTES.PATIENT.HASIL_DETAIL}
              className="flex-1 bg-[#FAF8FF] border border-[#C3C6D7] hover:border-[#004AC6] rounded-xl p-4 space-y-2 group/card hover:shadow-md transition-all duration-300 block cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[#434655] text-sm font-semibold">
                  20 Jul 2026
                </span>
                <span className="bg-[#BC4800] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-2xs">
                  Risiko Sedang
                </span>
              </div>

              <h3 className="text-[#191B23] text-lg font-bold group-hover/card:text-[#004AC6] transition-colors flex items-center justify-between">
                <span>Evaluasi CBC Rutin</span>
                <ChevronRight className="w-4 h-4 text-[#737686] group-hover/card:translate-x-1 transition-transform" />
              </h3>

              <p className="text-[#434655] text-base font-normal leading-relaxed">
                Peningkatan ringan pada leukosit terdeteksi.
              </p>
            </Link>
          </div>

          {/* Timeline Item 2: 05 Apr 2026 */}
          <div className="flex items-start gap-4 relative z-10 group">
            {/* Node Icon Circle (Grey) */}
            <div className="w-8 h-8 rounded-full bg-[#E1E2ED] border-2 border-white flex items-center justify-center text-[#191B23] shadow-xs flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-4 h-4 text-[#191B23]" />
            </div>

            {/* Card Content */}
            <Link
              href={ROUTES.PATIENT.HASIL_DETAIL}
              className="flex-1 bg-[#FAF8FF] border border-[#C3C6D7] hover:border-[#004AC6] rounded-xl p-4 space-y-2 group/card hover:shadow-md transition-all duration-300 block cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[#434655] text-sm font-semibold">
                  05 Apr 2026
                </span>
                <span className="bg-[#006A61] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-2xs">
                  Risiko Rendah
                </span>
              </div>

              <h3 className="text-[#191B23] text-lg font-bold group-hover/card:text-[#004AC6] transition-colors flex items-center justify-between">
                <span>Skrining Awal</span>
                <ChevronRight className="w-4 h-4 text-[#737686] group-hover/card:translate-x-1 transition-transform" />
              </h3>

              <p className="text-[#434655] text-base font-normal leading-relaxed">
                Parameter darah dalam batas normal.
              </p>
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 2: TREN RISIKO (ANIMATED CURVED GRAPHIC MATCHING IMAGE 2) */}
      <section ref={chartRef} className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[#004AC6]" />
          <h2 className="text-[#191B23] text-2xl font-bold tracking-tight">
            Tren Risiko
          </h2>
        </div>

        {/* Chart Container */}
        <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-xs space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between border-b border-[#C3C6D7]/40 pb-3">
            <h3 className="text-[#191B23] text-lg font-semibold">
              Perubahan Hasil Skrining
            </h3>
            <span className="text-xs text-[#004AC6] font-semibold bg-[#004AC6]/10 px-2.5 py-1 rounded-full flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" /> Est. Hb (g/dL)
            </span>
          </div>

          {/* SVG Smooth Curved Graph Canvas */}
          <div className="relative w-full h-[220px] pt-4 select-none">
            
            {/* Floating Tooltip */}
            {hoveredPoint === 1 && (
              <div className="absolute left-[20%] top-[25%] bg-[#191B23] text-white text-xs px-3 py-1.5 rounded-lg shadow-lg z-20 animate-fade-in pointer-events-none transform -translate-x-1/2">
                05 Apr: 13.2 g/dL (Normal)
              </div>
            )}
            {hoveredPoint === 2 && (
              <div className="absolute left-[70%] top-[10%] bg-[#BC4800] text-white text-xs px-3 py-1.5 rounded-lg shadow-lg z-20 animate-fade-in pointer-events-none transform -translate-x-1/2">
                20 Jul: 10.8 g/dL (Sedang)
              </div>
            )}

            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 500 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Blue Gradient Fill under curve */}
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="180">
                  <stop offset="0%" stopColor="#004AC6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#004AC6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Background Horizontal Dashed Lines */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="#F1F3F9" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="80" x2="500" y2="80" stroke="#F1F3F9" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="130" x2="500" y2="130" stroke="#E1E2ED" strokeWidth="1" />

              {/* Dashed Secondary Light-Blue Baseline Curve (As in Image 2) */}
              <path
                d="M 0 145 C 100 135, 200 155, 300 135 C 400 115, 450 135, 500 150"
                stroke="#DBE1FF"
                strokeWidth="3"
                strokeDasharray="6 6"
                fill="none"
              />

              {/* Gradient Area Fill under primary curve */}
              <path
                d="M 0 130 C 120 100, 200 150, 280 130 C 360 65, 440 55, 500 110 L 500 180 L 0 180 Z"
                fill="url(#chartGradient)"
                className={`transition-opacity duration-1000 ${chartAnimated ? "opacity-100" : "opacity-0"}`}
              />

              {/* Primary Vibrant Blue Curved Wave Line (As in Image 2) */}
              <path
                d="M 0 130 C 120 100, 200 150, 280 130 C 360 65, 440 55, 500 110"
                stroke="#004AC6"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: chartAnimated ? 0 : 1000,
                  transition: "stroke-dashoffset 2s ease-in-out",
                }}
              />

              {/* Glowing Interactive Data Point 1 (Apr) */}
              <g
                onMouseEnter={() => setHoveredPoint(1)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="cursor-pointer group/dot"
              >
                <circle
                  cx="130"
                  cy="108"
                  r="7"
                  fill="#004AC6"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className={`transition-all duration-500 hover:scale-150 ${chartAnimated ? "scale-100" : "scale-0"}`}
                />
                <circle cx="130" cy="108" r="12" fill="#004AC6" opacity="0.2" className="animate-ping" />
              </g>

              {/* Glowing Interactive Data Point 2 (Jul) */}
              <g
                onMouseEnter={() => setHoveredPoint(2)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="cursor-pointer group/dot"
              >
                <circle
                  cx="365"
                  cy="75"
                  r="8"
                  fill="#004AC6"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className={`transition-all duration-500 hover:scale-150 ${chartAnimated ? "scale-100" : "scale-0"}`}
                />
                <circle cx="365" cy="75" r="14" fill="#004AC6" opacity="0.3" className="animate-ping" />
              </g>
            </svg>

            {/* X-Axis Month Labels */}
            <div className="flex justify-between items-center px-4 pt-2 text-[#434655] text-xs font-semibold">
              <span>Apr</span>
              <span>Mei</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
