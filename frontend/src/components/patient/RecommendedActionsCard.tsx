"use client";

import React from "react";
import { Pill, Apple } from "lucide-react";

export function RecommendedActionsCard() {
  return (
    <div className="bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs p-6 flex flex-col justify-between gap-4">
      {/* Header */}
      <h3 className="text-base font-bold text-[#191B23]">
        Rekomendasi Tindakan
      </h3>

      {/* Action List */}
      <div className="flex flex-col gap-3">
        {/* Item 1 */}
        <div className="p-3 bg-[#FAF8FF] rounded-lg outline outline-1 outline-[#C3C6D7] flex items-center gap-3">
          <div className="p-2 bg-blue-100/60 rounded-md shrink-0">
            <Pill className="w-4 h-4 text-[#004AC6]" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-[#191B23]">
              Resep Suplemen Besi
            </h4>
            <p className="text-xs text-[#434655]">
              Tinjau dosis untuk ibu hamil
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-3 bg-[#FAF8FF] rounded-lg outline outline-1 outline-[#C3C6D7] flex items-center gap-3">
          <div className="p-2 bg-teal-100/60 rounded-md shrink-0">
            <Apple className="w-4 h-4 text-[#006A61]" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-[#191B23]">
              Konsultasi Gizi
            </h4>
            <p className="text-xs text-[#434655]">
              Jadwalkan dengan ahli gizi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
