"use client";

import React, { useState } from "react";
import {
  User,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Edit3,
  AlertTriangle,
  HeartPulse,
  Activity,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

export default function PatientProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full max-w-[672px] mx-auto px-4 py-6 space-y-8 pb-32">
      
      {/* SECTION 1: HEADER & EDIT BUTTON */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-[#191B23] text-2xl sm:text-3xl font-bold tracking-tight">
            Profil Pasien
          </h1>
          <p className="text-[#434655] text-base font-normal leading-relaxed">
            Kelola informasi pribadi, faktor risiko, dan kontak darurat Anda dengan aman.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="px-6 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-[#EEEFFF] font-medium text-sm rounded-lg shadow-md transition-all cursor-pointer inline-flex items-center gap-2 self-start sm:self-auto flex-shrink-0"
        >
          <Edit3 className="w-4 h-4 text-[#EEEFFF]" />
          <span>{isEditing ? "Simpan Profil" : "Ubah Profil"}</span>
        </button>
      </div>

      {/* SECTION 2: MAIN AVATAR & IDENTITUDE CARD */}
      <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 sm:p-8 text-center space-y-4 shadow-xs relative overflow-hidden group hover:shadow-md transition-shadow">
        
        {/* Profile Avatar Image */}
        <div className="relative w-32 h-32 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
            alt="Siti Jubaedah"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover group-hover:scale-105 transition-transform duration-300 mx-auto"
          />
        </div>

        {/* User Info */}
        <div className="space-y-1">
          <h2 className="text-[#191B23] text-2xl font-bold">
            Siti Jubaedah
          </h2>
          <p className="text-[#434655] text-base font-normal">
            siti.jubaedah@gmail.com
          </p>
        </div>

        {/* Verified Badge */}
        <div className="pt-2">
          <span className="bg-[#E7E7F3] text-[#191B23] text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#C3C6D7]/40 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#004AC6]" />
            <span>Akun Terverifikasi</span>
          </span>
        </div>
      </div>

      {/* SECTION 3: KONTAK DARURAT */}
      <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 space-y-4 shadow-2xs hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 border-b border-[#C3C6D7]/60 pb-3">
          <div className="w-8 h-8 rounded-full bg-[#BA1A1A]/10 flex items-center justify-center text-[#BA1A1A]">
            <PhoneCall className="w-4 h-4 text-[#BA1A1A]" />
          </div>
          <h3 className="text-[#191B23] text-xl font-bold">
            Kontak Darurat
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[#434655] text-sm font-semibold block">
              Nama Kontak
            </label>
            <p className="text-[#191B23] text-base font-normal">
              Siti Rahmawati (Istri)
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-[#434655] text-sm font-semibold block">
              Nomor Telepon
            </label>
            <p className="text-[#191B23] text-base font-normal">
              +62 812-3456-7890
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: DATA DIRI */}
      <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 space-y-4 shadow-2xs hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 border-b border-[#C3C6D7]/60 pb-3">
          <div className="w-8 h-8 rounded-full bg-[#004AC6]/10 flex items-center justify-center text-[#004AC6]">
            <User className="w-4 h-4 text-[#004AC6]" />
          </div>
          <h3 className="text-[#191B23] text-xl font-bold">
            Data Diri
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[#434655] text-sm font-semibold block">
              Nama Lengkap
            </label>
            <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-lg p-3 text-[#191B23] text-base font-normal">
              Siti Jubaedah
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#434655] text-sm font-semibold block">
              Nomor Rekam Medis (RM)
            </label>
            <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-lg p-3 text-[#191B23] font-mono text-sm font-medium tracking-wide">
              RM-8829104
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#434655] text-sm font-semibold block">
              Usia
            </label>
            <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-lg p-3 text-[#191B23] text-base font-normal">
              45 Tahun
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#434655] text-sm font-semibold block">
              Gender
            </label>
            <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-lg p-3 text-[#191B23] text-base font-normal">
              Perempuan
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: FAKTOR RISIKO */}
      <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 space-y-4 shadow-2xs hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 border-b border-[#C3C6D7]/60 pb-3">
          <div className="w-8 h-8 rounded-full bg-[#004AC6]/10 flex items-center justify-center text-[#004AC6]">
            <AlertTriangle className="w-4 h-4 text-[#004AC6]" />
          </div>
          <h3 className="text-[#191B23] text-xl font-bold">
            Faktor Risiko
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[#434655] text-sm font-semibold block">
              Riwayat Keluarga
            </label>
            <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-lg p-4 text-[#191B23] space-y-1.5 text-base font-normal">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004AC6]" />
                <span>Hipertensi (Ayah)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004AC6]" />
                <span>Diabetes Tipe 2 (Ibu)</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#434655] text-sm font-semibold block">
              Pola Diet & Gaya Hidup
            </label>
            <div className="w-full bg-[#F3F3FE] border border-[#C3C6D7] rounded-lg p-4 text-[#191B23] space-y-1.5 text-base font-normal">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004AC6]" />
                <span>Perokok Aktif (1 bungkus/hari)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004AC6]" />
                <span>Diet rendah serat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: INFORMASI KESEHATAN */}
      <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 space-y-4 shadow-2xs hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between border-b border-[#C3C6D7]/60 pb-3">
          <span className="text-[#004AC6] font-semibold text-xs uppercase tracking-wider">
            INFORMASI KESEHATAN
          </span>
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="text-[#004AC6] font-semibold text-sm hover:underline cursor-pointer flex items-center gap-1"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Ubah</span>
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[#434655] text-sm font-semibold block">
              Riwayat Anemia dalam Keluarga
            </label>
            <p className="text-[#191B23] text-base font-normal">
              Tidak ada riwayat keluarga yang diketahui.
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-[#434655] text-sm font-semibold block">
              Kondisi Medis Penyerta
            </label>
            <div className="flex items-center gap-2 text-[#191B23] text-base font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004AC6]" />
              <span>Hipertensi (Terkontrol)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 7: GEJALA SAAT INI */}
      <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 space-y-4 shadow-2xs hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between border-b border-[#C3C6D7]/60 pb-3">
          <span className="text-[#004AC6] font-semibold text-xs uppercase tracking-wider">
            GEJALA SAAT INI
          </span>
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="text-[#004AC6] font-semibold text-sm hover:underline cursor-pointer flex items-center gap-1"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Ubah</span>
          </button>
        </div>

        <div className="space-y-3">
          {/* Badges Stack */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#FFDAD6] text-[#93000A] font-medium text-sm px-3.5 py-1 rounded-full">
              Mudah Lelah
            </span>
            <span className="bg-[#FFDAD6] text-[#93000A] font-medium text-sm px-3.5 py-1 rounded-full">
              Pusing
            </span>
            <span className="bg-[#E1E2ED] text-[#434655] font-medium text-sm px-3.5 py-1 rounded-full">
              Pucat
            </span>
          </div>

          <p className="text-[#434655] text-sm font-normal">
            Durasi gejala: Kurang lebih 2 minggu terakhir.
          </p>
        </div>
      </div>

    </div>
  );
}
