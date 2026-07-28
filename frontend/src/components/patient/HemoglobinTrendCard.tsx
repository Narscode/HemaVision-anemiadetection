"use client";

import React, { useState } from "react";
import { TrendingDown } from "lucide-react";

interface BarData {
  month: string;
  value: number;
  heightPx: number;
  bgClass: string;
}

const TREND_DATA: BarData[] = [
  { month: "JUL", value: 10.2, heightPx: 76.8, bgClass: "bg-[#E7E7F3]" },
  { month: "AGU", value: 11.5, heightPx: 96.0, bgClass: "bg-[#E7E7F3]" },
  { month: "SEP", value: 10.8, heightPx: 83.2, bgClass: "bg-[#004AC6]/40" },
  { month: "OKT", value: 9.8, heightPx: 70.4, bgClass: "bg-[#004AC6]" },
];

export function HemoglobinTrendCard() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs p-6 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-3">
        {/* Card Header */}
        <h3 className="text-base font-bold text-[#191B23]">
          Tren Hemoglobin (3 Bulan)
        </h3>

        {/* Bar Chart Area */}
        <div className="h-36 pt-6 px-2 flex items-end justify-between gap-3">
          {TREND_DATA.map((item, idx) => (
            <div
              key={item.month}
              className="flex-1 flex flex-col items-center group relative cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Tooltip Pill */}
              <div
                className={`absolute -top-7 px-2 py-0.5 bg-[#191B23] text-white text-[10px] font-normal rounded transition-opacity duration-200 pointer-events-none z-10 ${
                  hoveredIdx === idx ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.value}
              </div>

              {/* Bar */}
              <div
                className={`w-full max-w-[52px] rounded-t-sm transition-all duration-300 ${item.bgClass}`}
                style={{ height: `${item.heightPx}px` }}
              />
            </div>
          ))}
        </div>

        {/* Month Labels */}
        <div className="flex items-center justify-between px-2 text-[10px] font-mono font-normal text-[#434655] uppercase">
          {TREND_DATA.map((item) => (
            <div key={item.month} className="flex-1 text-center">
              {item.month}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Trend Alert */}
      <div className="pt-4 flex items-center gap-1.5 text-[#BA1A1A] text-xs font-medium">
        <TrendingDown className="w-3.5 h-3.5 text-[#BA1A1A]" />
        <span>Turun 0.4 g/dL dari bulan lalu</span>
      </div>
    </div>
  );
}
