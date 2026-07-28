"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Plus,
  RefreshCw,
  Search,
  Users,
  UserPlus,
} from "lucide-react";

interface PatientRow {
  id: string;
  name: string;
  patientId: string;
  avatarText: string;
  avatarBg: string;
  avatarColor: string;
  age: string;
  gender: string;
  lastScreening: string;
  riskLevel: "low" | "moderate" | "high";
  riskLabel: string;
  followUpStatus: "Selesai" | "Perlu Follow-up" | "Dalam Proses";
}

const INITIAL_PATIENTS: PatientRow[] = [
  {
    id: "p-1",
    name: "Siti Aminah",
    patientId: "ID-9921",
    avatarText: "SA",
    avatarBg: "bg-[#86F2E4]",
    avatarColor: "text-[#006F66]",
    age: "28 Thn",
    gender: "Perempuan",
    lastScreening: "12 Okt 2023",
    riskLevel: "low",
    riskLabel: "Risiko Rendah",
    followUpStatus: "Selesai",
  },
  {
    id: "p-2",
    name: "Budi Santoso",
    patientId: "ID-9844",
    avatarText: "BS",
    avatarBg: "bg-blue-100",
    avatarColor: "text-[#004AC6]",
    age: "45 Thn",
    gender: "Laki-laki",
    lastScreening: "14 Okt 2023",
    riskLevel: "high",
    riskLabel: "Risiko Tinggi",
    followUpStatus: "Perlu Follow-up",
  },
  {
    id: "p-3",
    name: "Ratna Mulya",
    patientId: "ID-9812",
    avatarText: "RM",
    avatarBg: "bg-[#FFB596]",
    avatarColor: "text-[#360F00]",
    age: "32 Thn",
    gender: "Perempuan",
    lastScreening: "15 Okt 2023",
    riskLevel: "moderate",
    riskLabel: "Risiko Sedang",
    followUpStatus: "Dalam Proses",
  },
  {
    id: "p-4",
    name: "Herman Wijaya",
    patientId: "ID-9755",
    avatarText: "HW",
    avatarBg: "bg-teal-100",
    avatarColor: "text-[#006A61]",
    age: "58 Thn",
    gender: "Laki-laki",
    lastScreening: "16 Okt 2023",
    riskLevel: "low",
    riskLabel: "Risiko Rendah",
    followUpStatus: "Selesai",
  },
];

export default function HealthcarePatientManagePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRisk, setSelectedRisk] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedSort, setSelectedSort] = useState("newest");

  // Filtering Logic
  const filteredPatients = INITIAL_PATIENTS.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.patientId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRisk =
      selectedRisk === "all" ? true : p.riskLevel === selectedRisk;
    const matchesStatus =
      selectedStatus === "all" ? true : p.followUpStatus === selectedStatus;
    return matchesSearch && matchesRisk && matchesStatus;
  });

  return (
    <div className="bg-[#FAF8FF] min-h-screen p-6 sm:p-8 lg:p-10 space-y-8 font-sans relative">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-[32px] font-semibold text-[#191B23] leading-tight tracking-tight">
            Pasien
          </h1>
          <p className="text-base text-[#434655]">
            Kelola dan pantau status kesehatan hematologi pasien Anda.
          </p>
        </div>

        <Link
          href={ROUTES.NAKES.PASIEN_BARU}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#004AC6] text-white font-medium text-sm rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-[0.96] active:ring-4 active:ring-blue-300 transition-all duration-150 select-none cursor-pointer"
        >
          <UserPlus className="w-5 h-5 text-white" />
          <span>+ Tambah Pasien</span>
        </Link>
      </div>

      {/* Filter & Metric Summary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Dropdown 1: Tingkat Risiko */}
        <div className="bg-white p-4 rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs flex flex-col gap-2">
          <label className="text-sm font-medium text-[#434655]">Tingkat Risiko</label>
          <select
            value={selectedRisk}
            onChange={(e) => setSelectedRisk(e.target.value)}
            className="w-full px-3 py-2 bg-[#F3F3FE] text-[#191B23] text-sm rounded-lg outline-none cursor-pointer border border-[#C3C6D7] focus:border-blue-600 font-normal"
          >
            <option value="all">Semua Risiko</option>
            <option value="high">Risiko Tinggi</option>
            <option value="moderate">Risiko Sedang</option>
            <option value="low">Risiko Rendah</option>
          </select>
        </div>

        {/* Dropdown 2: Status Follow-up */}
        <div className="bg-white p-4 rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs flex flex-col gap-2">
          <label className="text-sm font-medium text-[#434655]">Status Follow-up</label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3 py-2 bg-[#F3F3FE] text-[#191B23] text-sm rounded-lg outline-none cursor-pointer border border-[#C3C6D7] focus:border-blue-600 font-normal"
          >
            <option value="all">Semua Status</option>
            <option value="Perlu Follow-up">Perlu Follow-up</option>
            <option value="Dalam Proses">Dalam Proses</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>

        {/* Dropdown 3: Urutkan Berdasarkan */}
        <div className="bg-white p-4 rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs flex flex-col gap-2">
          <label className="text-sm font-medium text-[#434655]">Urutkan Berdasarkan</label>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="w-full px-3 py-2 bg-[#F3F3FE] text-[#191B23] text-sm rounded-lg outline-none cursor-pointer border border-[#C3C6D7] focus:border-blue-600 font-normal"
          >
            <option value="newest">Terbaru</option>
            <option value="oldest">Terlama</option>
            <option value="name">Nama (A-Z)</option>
          </select>
        </div>

        {/* Metric Box: Total Pasien Aktif */}
        <div className="p-4 bg-blue-50/80 rounded-xl outline outline-1 outline-blue-300/60 shadow-xs flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-2xl font-bold text-[#004AC6] block">142</span>
            <span className="text-sm font-medium text-[#191B23]">Total Pasien Aktif</span>
          </div>
          <div className="p-2.5 bg-blue-600/10 rounded-xl text-[#004AC6]">
            <Users className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Patient Data Table */}
      <div className="bg-white rounded-xl border border-[#C3C6D7] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#F3F3FE] text-xs font-medium text-[#434655] uppercase tracking-wider border-b border-[#C3C6D7]">
              <tr>
                <th className="px-6 py-4">NAMA & ID</th>
                <th className="px-6 py-4">USIA / JK</th>
                <th className="px-6 py-4">SKRINING TERAKHIR</th>
                <th className="px-6 py-4">RISIKO LEVEL</th>
                <th className="px-6 py-4">FOLLOW-UP</th>
                <th className="px-6 py-4 text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C3C6D7]">
              {filteredPatients.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-slate-500">
                    Tidak ada pasien yang sesuai dengan filter pencarian.
                  </td>
                </tr>
              ) : (
                filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                    {/* Nama & ID */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${patient.avatarBg} ${patient.avatarColor} font-bold text-sm flex items-center justify-center shrink-0`}
                        >
                          {patient.avatarText}
                        </div>
                        <div>
                          <div className="font-bold text-[#191B23] text-sm leading-snug">
                            {patient.name}
                          </div>
                          <div className="text-xs font-mono text-[#434655] font-medium">
                            {patient.patientId}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Usia / JK */}
                    <td className="px-6 py-4">
                      <div className="font-normal text-[#191B23] text-base">{patient.age}</div>
                      <div className="text-xs text-[#434655]">{patient.gender}</div>
                    </td>

                    {/* Skrining Terakhir */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-[#191B23] text-base font-normal">
                        <Calendar className="w-4 h-4 text-[#434655]" />
                        <span>{patient.lastScreening}</span>
                      </div>
                    </td>

                    {/* Risiko Level */}
                    <td className="px-6 py-4">
                      {patient.riskLevel === "low" && (
                        <span className="inline-block px-3 py-1 bg-[#DCFCE7] text-[#15803D] text-xs font-bold rounded-full border border-[#BBF7D0]">
                          Risiko Rendah
                        </span>
                      )}
                      {patient.riskLevel === "high" && (
                        <span className="inline-block px-3 py-1 bg-[#FFDAD6] text-[#BA1A1A] text-xs font-bold rounded-full border border-[#BA1A1A]/20">
                          Risiko Tinggi
                        </span>
                      )}
                      {patient.riskLevel === "moderate" && (
                        <span className="inline-block px-3 py-1 bg-[#FEF3C7] text-[#943700] text-xs font-bold rounded-full">
                          Risiko Sedang
                        </span>
                      )}
                    </td>

                    {/* Follow-up */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-base font-normal text-[#191B23]">
                        {patient.followUpStatus === "Selesai" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                            <span>Selesai</span>
                          </>
                        )}
                        {patient.followUpStatus === "Perlu Follow-up" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-[#BA1A1A]" />
                            <span>Perlu Follow-up</span>
                          </>
                        )}
                        {patient.followUpStatus === "Dalam Proses" && (
                          <>
                            <span className="w-2 h-2 rounded-full bg-[#EAB308]" />
                            <span>Dalam Proses</span>
                          </>
                        )}
                      </div>
                    </td>

                    {/* Aksi */}
                    <td className="px-6 py-4 text-center">
                      <Link
                        href={ROUTES.NAKES.PASIEN_DETAIL(patient.id)}
                        className="inline-block p-2 text-[#434655] hover:text-[#004AC6] hover:bg-slate-100 rounded-lg active:scale-90 transition-all"
                        aria-label="Opsi Pasien"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 bg-white border-t border-[#C3C6D7] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#434655]">
          <div>Menampilkan 1-10 dari 142 pasien</div>
          <div className="flex items-center gap-1">
            <button
              disabled
              className="p-1.5 rounded-lg border border-[#C3C6D7] opacity-50 cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 text-[#191B23]" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#004AC6] text-white font-bold text-sm flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-[#191B23] text-sm flex items-center justify-center">
              2
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-[#191B23] text-sm flex items-center justify-center">
              3
            </button>
            <button className="p-1.5 rounded-lg border border-[#C3C6D7] hover:bg-slate-100 text-[#191B23]">
              <ChevronRight className="w-4 h-4 text-[#191B23]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row Grid: Analisis Populasi Pasien Banner & Aktivitas Terbaru */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Blue Banner Card: Analisis Populasi Pasien (Span 2) */}
        <div className="lg:col-span-2 bg-[#004AC6] text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="space-y-3 max-w-md">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Analisis Populasi Pasien
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed font-normal">
                Sebanyak 12% pasien baru terdeteksi memiliki risiko anemia tinggi dalam 30 hari terakhir. Perlu penjadwalan follow-up prioritas untuk daftar pasien terkait.
              </p>
            </div>

            {/* Metric Box inside Banner */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 min-w-[160px] text-center space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">
                RISIKO TINGGI
              </span>
              <span className="text-4xl font-extrabold text-white block">+18</span>
              <span className="text-xs text-blue-200 block font-medium">
                ↗ 4% vs bulan lalu
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href={ROUTES.NAKES.LAPORAN}>
              <button className="px-5 py-2.5 bg-white text-[#004AC6] font-bold text-sm rounded-lg hover:bg-blue-50 active:scale-[0.96] transition-all cursor-pointer">
                Lihat Laporan Detail
              </button>
            </Link>
            <button className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white font-medium text-sm rounded-lg active:scale-[0.96] transition-all cursor-pointer border border-white/20">
              Tandai Dibaca
            </button>
          </div>
        </div>

        {/* Right Card: Aktivitas Terbaru (Span 1) */}
        <div className="bg-white rounded-2xl p-6 border border-[#C3C6D7] shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#191B23]">Aktivitas Terbaru</h3>
              <button
                className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Refresh Timeline"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Timeline item 1 */}
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#004AC6] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#191B23] text-sm">
                    Hasil Skrining Diperbarui
                  </h4>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Siti Aminah • 5 menit yang lalu
                  </p>
                </div>
              </div>

              {/* Timeline item 2 */}
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#191B23] text-sm">Follow-up Selesai</h4>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Herman Wijaya • 2 jam yang lalu
                  </p>
                </div>
              </div>

              {/* Timeline item 3 */}
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#191B23] text-sm">
                    Pasien Baru Ditambahkan
                  </h4>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Budi Santoso • 3 jam yang lalu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-center">
            <Link
              href={ROUTES.NAKES.MONITORING}
              className="text-xs font-bold text-[#004AC6] hover:underline"
            >
              Lihat Semua Aktivitas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
