import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MedicalDisclaimer } from "@/components/healthcare/MedicalDisclaimer";
import { AlertCircle, CheckCircle2, Hospital, Stethoscope, Utensils } from "lucide-react";

export default function FollowUpGuidancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Panduan Tindak Lanjut</h1>
        <p className="text-xs text-slate-500 mt-1">Langkah klinis dan medis yang disarankan setelah skrining</p>
      </div>

      <MedicalDisclaimer compact />

      <Card className="p-5 bg-white border-slate-200 space-y-4">
        <CardHeader className="p-0 border-none">
          <CardTitle className="text-base text-slate-900 flex items-center gap-2">
            <Hospital className="w-5 h-5 text-brand-600" />
            <span>1. Tes Konfirmasi Laboratorium (Diwajibkan)</span>
          </CardTitle>
        </CardHeader>
        <p className="text-xs text-slate-600 leading-relaxed">
          Kunjungi Puskesmas atau Laboratorium Kesehatan terdekat untuk melakukan pemeriksaan darah tepi (Darah Lengkap / CBC) guna memperoleh angka pasti kadar hemoglobin secara medis.
        </p>
      </Card>

      <Card className="p-5 bg-white border-slate-200 space-y-4">
        <CardHeader className="p-0 border-none">
          <CardTitle className="text-base text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-emerald-600" />
            <span>2. Tingkatkan Asupan Makanan Kaya Zat Besi</span>
          </CardTitle>
        </CardHeader>
        <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
          <li>Daging merah, hati ayam, dan ikan.</li>
          <li>Sayuran hijau gelap seperti bayam dan daun katuk.</li>
          <li>Kacang-kacangan dan suplemen zat besi atas petunjuk dokter.</li>
        </ul>
      </Card>

      <Card className="p-5 bg-white border-slate-200 space-y-4">
        <CardHeader className="p-0 border-none">
          <CardTitle className="text-base text-slate-900 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-amber-600" />
            <span>3. Konsultasi Petugas Kesehatan</span>
          </CardTitle>
        </CardHeader>
        <p className="text-xs text-slate-600 leading-relaxed">
          Tunjukkan hasil skrining ini kepada dokter atau perawat di Puskesmas Kebayoran Baru untuk mendapatkan resep suplemen atau saran medis lebih lanjut.
        </p>
      </Card>
    </div>
  );
}
