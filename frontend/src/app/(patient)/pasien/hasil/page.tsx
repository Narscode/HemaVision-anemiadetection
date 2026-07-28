import React from "react";
import { getLatestResultForPatient } from "@/services/results";
import { PatientResultCard } from "@/components/patient/PatientResultCard";
import { MedicalDisclaimer } from "@/components/healthcare/MedicalDisclaimer";

export default async function PatientResultPage() {
  const result = await getLatestResultForPatient("p-001");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Hasil Skrining Anda</h1>
        <p className="text-xs text-slate-500 mt-1">Rincian estimasi tingkat hemoglobin dan rekomendasi</p>
      </div>

      <MedicalDisclaimer compact />

      {result && <PatientResultCard result={result} />}
    </div>
  );
}
