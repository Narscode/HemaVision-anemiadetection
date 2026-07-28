"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Bell,
  Grid,
  FileText,
  FileCheck,
  Info,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Check,
  Edit3,
  CheckSquare,
  Clock,
  ChevronRight,
  Activity,
  FileSpreadsheet,
  Download,
  Loader2,
  Printer,
  DownloadCloud,
} from "lucide-react";

interface ReportItem {
  id: string;
  transactionId: string;
  patientName: string;
  age: number;
  gender: string;
  screeningDate: string;
  riskLevel: "Rendah" | "Sedang" | "Tinggi";
  status: "Draft AI" | "Disetujui";
  symptoms: string;
  riskFactors: string;
  eyeScore: number;
  nailScore: number;
  palmScore: number;
  hbPrediction: number;
}

const sampleReports: ReportItem[] = [
  {
    id: "rep-1",
    transactionId: "HV-20231024-0092",
    patientName: "Siti Aminah",
    age: 28,
    gender: "Perempuan",
    screeningDate: "24 Oktober 2023",
    riskLevel: "Sedang",
    status: "Draft AI",
    symptoms: "Pasien melaporkan sering merasakan pusing berputar, terutama saat beraktivitas fisik ringan.",
    riskFactors: "Pola diet rendah zat besi dalam 3 bulan terakhir. Riwayat anemia pada keluarga terkonfirmasi.",
    eyeScore: 72,
    nailScore: 68,
    palmScore: 70,
    hbPrediction: 14.2,
  },
  {
    id: "rep-2",
    transactionId: "HV-20231024-0089",
    patientName: "Ny. Sarah Wijaya",
    age: 34,
    gender: "Perempuan",
    screeningDate: "24 Oktober 2023",
    riskLevel: "Tinggi",
    status: "Draft AI",
    symptoms: "Cepat lelah, konjungtiva tampak pucat menonjol, dan keluhan pusing hebat.",
    riskFactors: "Riwayat perdarahan postpartum ringan 6 bulan lalu.",
    eyeScore: 85,
    nailScore: 78,
    palmScore: 80,
    hbPrediction: 9.8,
  },
  {
    id: "rep-3",
    transactionId: "HV-20231023-0074",
    patientName: "Budi Santoso",
    age: 45,
    gender: "Laki-laki",
    screeningDate: "23 Oktober 2023",
    riskLevel: "Rendah",
    status: "Disetujui",
    symptoms: "Pemeriksaan rutin tahunan tanpa gejala fisik yang mengganggu.",
    riskFactors: "Aktif berolahraga dan mengonsumsi makanan bergizi seimbang.",
    eyeScore: 40,
    nailScore: 35,
    palmScore: 38,
    hbPrediction: 15.1,
  },
];

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isExporting, setIsExporting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 4000);
    }, 600);
  };

  const filteredReports = sampleReports.filter(
    (r) =>
      r.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#FAF8FF] font-sans text-[#191B23] p-6 sm:p-8 space-y-6 pb-32 print:p-0 print:m-0 print:bg-white">
      {/* Success Toast Notification */}
      {showSuccessToast && (
        <div className="fixed top-6 right-6 z-50 bg-[#006A61] text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce print:hidden">
          <CheckCircle2 className="w-5 h-5 text-[#89F5E7]" />
          <span className="font-semibold text-sm">
            Laporan Medis Digital berhasil disetujui & disimpan sebagai PDF!
          </span>
        </div>
      )}

      {/* If Detailed Report is Selected */}
      {selectedReport ? (
        <div className="max-w-[1024px] space-y-6 animate-fade-in print:max-w-none print:w-full">
          {/* Back Button */}
          <button
            onClick={() => setSelectedReport(null)}
            className="flex items-center gap-2 text-[#004AC6] hover:underline font-semibold text-sm cursor-pointer print:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Laporan</span>
          </button>

          {/* Header Title & Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#C3C6D7] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#004AC6] font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#004AC6]" />
                <span>LAPORAN MEDIS DIGITAL</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#191B23]">
                Laporan Skrining Pasien
              </h1>
              <p className="text-sm text-[#434655]">
                ID Transaksi: {selectedReport.transactionId}
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto print:hidden">
              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="px-4 py-2.5 bg-white border border-[#004AC6] text-[#004AC6] hover:bg-[#F3F3FE] active:scale-95 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <DownloadCloud className="w-4 h-4 text-[#004AC6]" />
                <span>Unduh PDF</span>
              </button>

              <div className="px-4 py-2.5 bg-[rgba(37,99,235,0.10)] border border-[#2563EB] rounded-xl text-[#004AC6] font-bold text-xs uppercase tracking-wider">
                DRAFT LAPORAN AI
              </div>
            </div>
          </div>

          {/* Disclaimer Info Banner */}
          <div className="p-4 bg-[#E1E2ED]/40 border-l-4 border-[#004AC6] rounded-r-xl flex items-start gap-3 text-sm text-[#434655] italic shadow-xs">
            <Info className="w-5 h-5 text-[#004AC6] shrink-0 mt-0.5" />
            <p>
              &quot;Laporan ini dibuat secara otomatis berdasarkan data yang tersedia dan harus ditinjau oleh tenaga kesehatan sebelum disahkan.&quot;
            </p>
          </div>

          {/* Identitas Pasien & Ringkasan Asesmen Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Identitas Pasien (Span 5) */}
            <div className="lg:col-span-5 p-6 bg-white rounded-xl border border-[#C3C6D7] space-y-4 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-[#C3C6D7] pb-3">
                <h3 className="text-base font-semibold text-[#191B23]">
                  Identitas Pasien
                </h3>
                <UserCheck className="w-5 h-5 text-[#737686]" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-sm text-[#434655] block">Nama Lengkap</span>
                  <span className="text-base font-bold text-[#191B23]">
                    {selectedReport.patientName}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-[#434655] block">Usia</span>
                    <span className="text-base font-bold text-[#191B23]">
                      {selectedReport.age} Tahun
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-[#434655] block">Gender</span>
                    <span className="text-base font-bold text-[#191B23]">
                      {selectedReport.gender}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-[#434655] block">Tanggal Skrining</span>
                  <span className="text-base font-bold text-[#191B23]">
                    {selectedReport.screeningDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Ringkasan Asesmen (Span 7) */}
            <div className="lg:col-span-7 p-6 bg-white rounded-xl border border-[#C3C6D7] space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#C3C6D7] pb-3">
                <h3 className="text-base font-semibold text-[#191B23]">
                  Ringkasan Asesmen
                </h3>
                <FileCheck className="w-5 h-5 text-[#737686]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Gejala Utama */}
                <div className="p-4 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#434655] font-semibold text-sm">
                    <Activity className="w-4 h-4 text-[#004AC6]" />
                    <span>Gejala Utama</span>
                  </div>
                  <p className="text-sm text-[#191B23] leading-relaxed">
                    {selectedReport.symptoms}
                  </p>
                </div>

                {/* Faktor Risiko */}
                <div className="p-4 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#434655] font-semibold text-sm">
                    <AlertTriangle className="w-4 h-4 text-[#943700]" />
                    <span>Faktor Risiko</span>
                  </div>
                  <p className="text-sm text-[#191B23] leading-relaxed">
                    {selectedReport.riskFactors}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Analisis Multi-Site (Full Width) */}
          <div className="p-6 bg-white rounded-xl border border-[#C3C6D7] space-y-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#C3C6D7] pb-3">
              <div>
                <h3 className="text-base font-semibold text-[#191B23]">
                  Analisis Multi-Site
                </h3>
                <p className="text-sm text-[#434655]">
                  Deteksi vaskularitas melalui pemindaian optik AI
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Mata */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32 rounded-full border-[8px] border-[#004AC6] flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-mono font-medium text-[#191B23]">
                    {selectedReport.eyeScore}%
                  </span>
                  <span className="text-sm text-[#434655]">Mata</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#191B23]">Konjungtiva</h4>
                  <p className="text-sm text-[#434655]">Pucat ringan terdeteksi</p>
                </div>
              </div>

              {/* Jari */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32 rounded-full border-[8px] border-[#006A61] flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-mono font-medium text-[#191B23]">
                    {selectedReport.nailScore}%
                  </span>
                  <span className="text-sm text-[#434655]">Jari</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#191B23]">Bantalan Kuku</h4>
                  <p className="text-sm text-[#434655]">Sirkulasi perifer sedang</p>
                </div>
              </div>

              {/* Telapak */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32 rounded-full border-[8px] border-[#004AC6] flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-mono font-medium text-[#191B23]">
                    {selectedReport.palmScore}%
                  </span>
                  <span className="text-sm text-[#434655]">Telapak</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#191B23]">Lipatan Palmar</h4>
                  <p className="text-sm text-[#434655]">Hipopigmentasi ringan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kesimpulan & Kisaran Hb Pasien Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Kesimpulan (Span 7) */}
            <div className="lg:col-span-7 p-6 bg-white rounded-xl border border-[#C3C6D7] space-y-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-[#191B23]">Kesimpulan</h3>

                {/* Orange Risk Box */}
                <div className="p-4 bg-[rgba(188,72,0,0.10)] border border-[rgba(188,72,0,0.30)] rounded-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BC4800] text-[#FFEDE6] flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#943700]">
                      Risiko {selectedReport.riskLevel}
                    </h4>
                    <p className="text-sm text-[#434655]">
                      Probabilitas Anemia Defisiensi Besi terhitung sebesar 64% berdasarkan model diagnostik.
                    </p>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-[#191B23] pt-2">
                  Rencana Tindak Lanjut
                </h4>

                <div className="space-y-3 text-sm text-[#191B23]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#004AC6] shrink-0 mt-0.5" />
                    <span>Segera lakukan pemeriksaan Laboratorium Hemoglobin (Hb) lengkap.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#004AC6] shrink-0 mt-0.5" />
                    <span>Disarankan pemeriksaan Serum Ferritin untuk konfirmasi cadangan besi.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#004AC6] shrink-0 mt-0.5" />
                    <span>Evaluasi pola makan oleh ahli gizi dalam 2 minggu ke depan.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kisaran Hb Pasien (Span 5 - Blue Card) */}
            <div className="lg:col-span-5 p-6 bg-[#004AC6] rounded-xl text-white shadow-xl flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-full p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 space-y-3">
                <h4 className="text-base font-normal text-white">Kisaran Hb Pasien</h4>
                <p className="text-sm text-white/80">
                  Prediksi pemulihan jika dilakukan intervensi segera
                </p>

                <div className="pt-2 flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-white">
                    {selectedReport.hbPrediction}
                  </span>
                  <span className="text-base font-mono text-white/70">g/dL</span>
                </div>

                <div className="text-[#89F5E7] font-bold text-sm pt-2">
                  Target Normal: 12.0 - 15.5 g/dL
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Action Bar at Bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#C3C6D7] p-4 sm:px-8 z-40 shadow-xl print:hidden">
            <div className="max-w-[1024px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[#434655]">
                <Clock className="w-4 h-4 text-[#737686]" />
                <span>Terakhir diupdate: Hari ini, 14:20</span>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedReport(null)}
                  className="flex-1 sm:flex-none px-6 py-3 border border-[#737686] text-[#004AC6] font-bold text-sm rounded-xl hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                >
                  Edit Laporan
                </button>

                <button
                  onClick={handleExportPDF}
                  disabled={isExporting}
                  className="flex-1 sm:flex-none px-8 py-3 bg-[#004AC6] hover:bg-[#003EA8] active:scale-95 transition-all duration-150 ease-in-out text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
                >
                  {isExporting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Menyiapkan PDF...</span>
                    </>
                  ) : (
                    <>
                      <FileCheck className="w-5 h-5 text-white" />
                      <span>Tinjau & Setujui Laporan</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Initial View: Report Overview & Patient Table List */
        <div className="max-w-[1024px] space-y-6">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#C3C6D7] pb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#191B23] tracking-tight">
                Laporan Medis Digital Pasien
              </h1>
              <p className="text-sm text-[#434655] mt-1">
                Pilih pasien di bawah ini untuk melihat detail laporan medis digital AI.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#737686] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pasien atau laporan..."
                className="w-full pl-10 pr-4 py-2 bg-[#F3F3FE] border border-[#C3C6D7] rounded-full text-sm text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]"
              />
            </div>
          </div>

          {/* Summary Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-xl border border-[#C3C6D7] space-y-1 shadow-xs">
              <span className="text-xs font-bold text-[#434655] uppercase tracking-wider">
                Total Laporan Medis
              </span>
              <div className="text-3xl font-bold text-[#191B23]">3 Laporan</div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#C3C6D7] space-y-1 shadow-xs">
              <span className="text-xs font-bold text-[#434655] uppercase tracking-wider">
                Perlu Review Nakes
              </span>
              <div className="text-3xl font-bold text-[#004AC6]">2 Draft AI</div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#C3C6D7] space-y-1 shadow-xs">
              <span className="text-xs font-bold text-[#434655] uppercase tracking-wider">
                Status Disetujui
              </span>
              <div className="text-3xl font-bold text-[#006A61]">1 Disahkan</div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl border border-[#C3C6D7] overflow-hidden shadow-xs">
            <div className="p-4 border-b border-[#C3C6D7] bg-[#FAF8FF] flex items-center justify-between">
              <h2 className="text-base font-bold text-[#191B23]">
                Daftar Rekam Medis Skrining Pasien
              </h2>
              <span className="text-xs text-[#434655]">
                Menampilkan {filteredReports.length} laporan
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#191B23]">
                <thead className="bg-[#EDEDF9] text-[#434655] text-xs font-bold uppercase tracking-wider border-b border-[#C3C6D7]">
                  <tr>
                    <th className="py-3.5 px-4">ID Transaksi</th>
                    <th className="py-3.5 px-4">Nama Pasien</th>
                    <th className="py-3.5 px-4">Usia & Gender</th>
                    <th className="py-3.5 px-4">Tanggal Skrining</th>
                    <th className="py-3.5 px-4">Risiko</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C3C6D7]/40">
                  {filteredReports.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => setSelectedReport(item)}
                      className="hover:bg-[#F3F3FE]/60 transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-4 font-mono font-medium text-[#004AC6]">
                        {item.transactionId}
                      </td>
                      <td className="py-4 px-4 font-bold text-[#191B23]">
                        {item.patientName}
                      </td>
                      <td className="py-4 px-4 text-[#434655]">
                        {item.age} Thn • {item.gender}
                      </td>
                      <td className="py-4 px-4 text-[#434655]">
                        {item.screeningDate}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.riskLevel === "Tinggi"
                              ? "bg-red-100 text-red-700"
                              : item.riskLevel === "Sedang"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-teal-100 text-teal-800"
                          }`}
                        >
                          {item.riskLevel}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.status === "Draft AI"
                              ? "bg-blue-100 text-[#004AC6]"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedReport(item);
                          }}
                          className="px-4 py-2 bg-[#004AC6] hover:bg-[#003EA8] text-white text-xs font-bold rounded-lg shadow-xs transition-all cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <span>Lihat Laporan Medis</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
