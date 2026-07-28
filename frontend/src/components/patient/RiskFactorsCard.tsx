"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

export function RiskFactorsCard() {
  return (
    <div className="bg-[#F3F3FE] rounded-xl outline outline-1 outline-[#C3C6D7] p-6 flex flex-col gap-4">
      {/* Card Header */}
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-[#004AC6]" />
        <h3 className="text-base font-bold text-[#191B23]">
          Faktor Risiko
        </h3>
      </div>

      {/* Factors List */}
      <div className="flex flex-col gap-3">
        {/* Factor 1 */}
        <div className="flex items-start gap-3">
          <div className="pt-2">
            <div className="w-1.5 h-1.5 bg-[#BA1A1A] rounded-full" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-[#191B23]">
              Diet rendah zat besi
            </h4>
            <p className="text-xs text-[#434655] leading-relaxed">
              Pola makan kurang variasi protein hewani
            </p>
          </div>
        </div>

        {/* Factor 2 */}
        <div className="flex items-start gap-3">
          <div className="pt-2">
            <div className="w-1.5 h-1.5 bg-[#943700] rounded-full" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-[#191B23]">
              Riwayat keluarga
            </h4>
            <p className="text-xs text-[#434655] leading-relaxed">
              Kecenderungan anemia pada garis ibu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
