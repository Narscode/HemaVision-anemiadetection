"use client";

import React from "react";
import { Calendar, ArrowRight, Activity } from "lucide-react";

interface LastResultCardProps {
  lastDate?: string;
  riskTitle?: string;
  riskPercentage?: number;
  aiConfidence?: string;
  recommendedBy?: string;
}

export function LastResultCard({
  lastDate = "14 Okt 2023",
  riskTitle = "Risiko Sedang",
  riskPercentage = 87,
  aiConfidence = "Tinggi",
  recommendedBy = "HemaVision AI v2.4",
}: LastResultCardProps) {
  return (
    <div className="relative bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs p-6 flex flex-col justify-between overflow-hidden gap-6">
      {/* Background Watermark Icon */}
      <div className="absolute top-1 right-1 opacity-10 pointer-events-none p-4">
        <Activity className="w-20 h-20 text-[#191B23]" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-2 relative z-10">
        {/* Date Row */}
        <div className="flex items-center gap-2 text-[#434655] text-base">
          <Calendar className="w-4 h-4 text-[#434655]" />
          <span>Hasil Terakhir: {lastDate}</span>
        </div>

        {/* Risk Value */}
        <div className="pt-2">
          <h3 className="text-3xl sm:text-[32px] font-bold text-[#943700] leading-10">
            {riskTitle}
          </h3>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="flex items-center gap-4 py-1">
          <div className="flex-1 h-2 bg-[#E7E7F3] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-[#943700] rounded-full transition-all duration-700"
              style={{ width: `${riskPercentage}%` }}
            />
          </div>
          <span className="font-mono font-bold text-base text-[#943700]">
            {riskPercentage}%
          </span>
        </div>

        {/* Confidence Level */}
        <p className="text-xs italic text-[#434655]">
          Tingkat kepercayaan diagnosa AI: {aiConfidence}
        </p>
      </div>

      {/* Footer Divider & AI Info */}
      <div className="pt-4 border-t border-[#C3C6D7] flex items-center justify-between relative z-10">
        <div>
          <p className="text-xs text-[#434655]">Direkomendasikan oleh:</p>
          <p className="text-xs font-bold text-[#191B23]">{recommendedBy}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-[#004AC6]" />
      </div>
    </div>
  );
}
