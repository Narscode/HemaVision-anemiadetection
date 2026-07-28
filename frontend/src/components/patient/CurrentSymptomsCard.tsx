"use client";

import React, { useState } from "react";
import { UserCheck, Moon, Activity, Plus } from "lucide-react";

export function CurrentSymptomsCard() {
  const [symptoms, setSymptoms] = useState(["Kelelahan", "Pusing"]);

  const handleAddSymptom = () => {
    const newSymptom = prompt("Masukkan gejala baru:");
    if (newSymptom && newSymptom.trim() !== "") {
      setSymptoms((prev) => [...prev, newSymptom.trim()]);
    }
  };

  return (
    <div className="bg-[#F3F3FE] rounded-xl outline outline-1 outline-[#C3C6D7] p-6 flex flex-col gap-4">
      {/* Card Header */}
      <div className="flex items-center gap-2">
        <UserCheck className="w-5 h-5 text-[#006A61]" />
        <h3 className="text-base font-bold text-[#191B23]">
          Gejala Terkini
        </h3>
      </div>

      {/* Symptom Cards & Add Action */}
      <div className="flex flex-wrap items-center gap-3">
        {symptoms.map((symptom, idx) => (
          <div
            key={idx}
            className="px-4 py-2 bg-white rounded-lg outline outline-1 outline-[#C3C6D7] shadow-2xs flex items-center gap-2"
          >
            {idx === 0 ? (
              <Moon className="w-4 h-4 text-[#943700]" />
            ) : (
              <Activity className="w-4 h-4 text-[#943700]" />
            )}
            <span className="text-sm font-medium text-[#191B23]">
              {symptom}
            </span>
          </div>
        ))}

        {/* Add Symptom Button */}
        <button
          onClick={handleAddSymptom}
          className="px-4 py-2 rounded-lg outline outline-1 outline-[#737686] hover:bg-slate-200/50 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4 text-[#191B23]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#191B23]">
            TAMBAH
          </span>
        </button>
      </div>
    </div>
  );
}
