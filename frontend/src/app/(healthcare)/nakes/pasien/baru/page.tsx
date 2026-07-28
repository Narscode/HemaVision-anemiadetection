"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Phone,
  FileText,
  Lock,
  Search,
  QrCode,
  CheckCircle2,
  Circle,
  Info,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function NewPatientRegisterPage() {
  const router = useRouter();

  // Form States
  const [patientName, setPatientName] = useState("Budi Santoso");
  const [birthDate, setBirthDate] = useState("1986-05-24");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("812 3456 7890");
  const [email, setEmail] = useState("budi.santoso@email.com");
  const [showGuardian, setShowGuardian] = useState(false);

  // Screening Context States
  const [pastAnemia, setPastAnemia] = useState<string>("no");
  const [familyAnemia, setFamilyAnemia] = useState<string>("no");
  const [conditions, setConditions] = useState<string[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([
    "Lemas / Lunglai",
    "Napas Pendek / Sesak",
  ]);
  const [otherSymptoms, setOtherSymptoms] = useState("");
  const [symptomDuration, setSymptomDuration] = useState("1-4-weeks");

  const SYMPTOM_OPTIONS = [
    "Lelah Berlebih",
    "Lemas / Lunglai",
    "Pusing / Sakit Kepala",
    "Sulit Konsentrasi",
    "Napas Pendek / Sesak",
    "Kulit Pucat",
    "Jantung Berdebar",
    "Tangan Kaki Dingin",
  ];

  const CONDITION_OPTIONS = [
    { id: "ginjal", label: "Gangguan Ginjal" },
    { id: "hati", label: "Penyakit Hati" },
    { id: "talasemia", label: "Talasemia" },
    { id: "autoimun", label: "Autoimun" },
    { id: "kanker", label: "Kanker" },
    { id: "perdarahan", label: "Perdarahan Akut" },
    { id: "malaria", label: "Malaria" },
    { id: "gastritis", label: "Gastritis" },
  ];

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const toggleCondition = (id: string) => {
    if (conditions.includes(id)) {
      setConditions(conditions.filter((c) => c !== id));
    } else {
      setConditions([...conditions, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/nakes/skrining/multisite");
  };

  return (
    <div className="min-h-screen bg-[#FAF8FF] p-6 sm:p-8 lg:p-10 space-y-8 font-sans pb-40">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#434655]">
            <Link href={ROUTES.NAKES.PASIEN_LIST} className="hover:text-[#004AC6]">
              Pasien
            </Link>
            <span>›</span>
            <span className="text-[#191B23]">Tambah Pasien</span>
          </div>

          <h1 className="text-3xl sm:text-[32px] font-bold text-[#191B23] leading-tight tracking-tight">
            Daftarkan Pasien Baru
          </h1>
          <p className="text-sm text-[#434655] max-w-2xl">
            Lengkapi informasi pasien yang diperlukan sebelum melakukan skrining HemaVision untuk akurasi analisis AI PallorSense.
          </p>
        </div>

        {/* Top Quick Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="px-4 py-2.5 bg-white border border-[#C3C6D7] rounded-xl text-sm font-bold text-[#191B23] hover:bg-slate-50 flex items-center gap-2 shadow-2xs transition-all cursor-pointer">
            <QrCode className="w-4 h-4 text-[#004AC6]" />
            <span>Scan QR</span>
          </button>
          <button className="px-4 py-2.5 bg-white border border-[#C3C6D7] rounded-xl text-sm font-bold text-[#191B23] hover:bg-slate-50 flex items-center gap-2 shadow-2xs transition-all cursor-pointer">
            <Search className="w-4 h-4 text-[#004AC6]" />
            <span>Cari Pasien</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Form Left (Span 2) & Summary Right (Span 1) */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column - Form Sections */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Identitas Pasien */}
          <div className="bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2 bg-[#DBE1FF] rounded-lg">
                <User className="w-5 h-5 text-[#004AC6]" />
              </div>
              <h2 className="text-lg font-bold text-[#191B23]">Identitas Pasien</h2>
            </div>

            <div className="space-y-5">
              {/* Nama Lengkap Pasien */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#191B23]">Nama Lengkap Pasien</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-4 py-3 bg-white border border-[#C3C6D7] rounded-xl text-sm text-[#191B23] placeholder:text-[#949494] focus:outline-none focus:border-[#004AC6] transition-all"
                  required
                />
              </div>

              {/* Tanggal Lahir & Jenis Kelamin */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#191B23]">Tanggal Lahir</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#C3C6D7] rounded-xl text-sm text-[#191B23] focus:outline-none focus:border-[#004AC6] transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#191B23]">Jenis Kelamin</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#C3C6D7] rounded-xl text-sm text-[#191B23] focus:outline-none focus:border-[#004AC6] transition-all cursor-pointer"
                  >
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>
              </div>

              {/* Nomor Rekam Medis (Auto) */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#191B23]">Nomor Rekam Medis (Auto)</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value="RM-20260723-001"
                    readOnly
                    className="w-full pl-4 pr-10 py-3 bg-[#F3F3FE] border border-[#C3C6D7] rounded-xl text-sm font-mono text-[#434655] cursor-not-allowed"
                  />
                  <Lock className="w-4 h-4 text-[#737686] absolute right-4 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Informasi Kontak */}
          <div className="bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2 bg-[#DBE1FF] rounded-lg">
                <Phone className="w-5 h-5 text-[#004AC6]" />
              </div>
              <h2 className="text-lg font-bold text-[#191B23]">Informasi Kontak</h2>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nomor Telepon / WhatsApp */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#191B23]">Nomor Telepon / WhatsApp</label>
                  <div className="flex items-center">
                    <span className="px-3.5 py-3 bg-[#F3F3FE] border border-r-0 border-[#C3C6D7] rounded-l-xl text-sm font-bold text-[#191B23]">
                      +62
                    </span>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="812 3456 7890"
                      className="w-full px-4 py-3 bg-white border border-[#C3C6D7] rounded-r-xl text-sm text-[#191B23] placeholder:text-[#949494] focus:outline-none focus:border-[#004AC6] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#191B23]">Alamat Email (Opsional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="budi.santoso@email.com"
                    className="w-full px-4 py-3 bg-white border border-[#C3C6D7] rounded-xl text-sm text-[#191B23] placeholder:text-[#949494] focus:outline-none focus:border-[#004AC6] transition-all"
                  />
                </div>
              </div>

              {/* Accordion / Checkbox: Pendamping */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowGuardian(!showGuardian)}
                  className="w-full px-4 py-3.5 bg-[#F3F3FE] border border-[#C3C6D7] rounded-xl flex items-center justify-between text-sm font-medium text-[#191B23] hover:bg-[#e8e8fb] transition-colors"
                >
                  <span>Tambahkan informasi pendamping / keluarga</span>
                  <ChevronDown className={`w-4 h-4 text-[#434655] transition-transform ${showGuardian ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Konteks Skrining & Gejala */}
          <div className="bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2 bg-[#DBE1FF] rounded-lg">
                <FileText className="w-5 h-5 text-[#004AC6]" />
              </div>
              <h2 className="text-lg font-bold text-[#191B23]">Konteks Skrining & Gejala</h2>
            </div>

            <div className="space-y-6">
              {/* Radio 1: Pernah didiagnosa anemia? */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4.5 rounded-xl border border-[#C3C6D7] bg-white space-y-3">
                  <label className="text-sm font-semibold text-[#191B23] block leading-snug">
                    Pernah didiagnosa anemia sebelumnya?
                  </label>
                  <div className="flex items-center gap-4 text-xs font-medium text-[#191B23]">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="pastAnemia"
                        value="yes"
                        checked={pastAnemia === "yes"}
                        onChange={() => setPastAnemia("yes")}
                        className="accent-[#004AC6]"
                      />
                      <span>Ya</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="pastAnemia"
                        value="no"
                        checked={pastAnemia === "no"}
                        onChange={() => setPastAnemia("no")}
                        className="accent-[#004AC6]"
                      />
                      <span>Tidak</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="pastAnemia"
                        value="unknown"
                        checked={pastAnemia === "unknown"}
                        onChange={() => setPastAnemia("unknown")}
                        className="accent-[#004AC6]"
                      />
                      <span>Tidak Diketahui</span>
                    </label>
                  </div>
                </div>

                {/* Radio 2: Riwayat keluarga? */}
                <div className="p-4.5 rounded-xl border border-[#C3C6D7] bg-white space-y-3">
                  <label className="text-sm font-semibold text-[#191B23] block leading-snug">
                    Ada riwayat anemia dalam keluarga?
                  </label>
                  <div className="flex items-center gap-4 text-xs font-medium text-[#191B23]">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="familyAnemia"
                        value="yes"
                        checked={familyAnemia === "yes"}
                        onChange={() => setFamilyAnemia("yes")}
                        className="accent-[#004AC6]"
                      />
                      <span>Ya</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="familyAnemia"
                        value="no"
                        checked={familyAnemia === "no"}
                        onChange={() => setFamilyAnemia("no")}
                        className="accent-[#004AC6]"
                      />
                      <span>Tidak</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Kondisi Kesehatan Relevan */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#434655]">
                  Kondisi Kesehatan Relevan
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {CONDITION_OPTIONS.map((item) => {
                    const isChecked = conditions.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleCondition(item.id)}
                        className={`p-3.5 rounded-xl border text-xs font-medium text-left transition-all flex items-center gap-2 cursor-pointer ${
                          isChecked
                            ? "border-[#004AC6] bg-blue-50/60 text-[#004AC6] font-bold"
                            : "border-[#C3C6D7] bg-white text-[#191B23] hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? "border-[#004AC6] bg-[#004AC6]" : "border-[#C3C6D7]"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Gejala Yang Dilaporkan */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#434655]">
                  Gejala Yang Dilaporkan
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {SYMPTOM_OPTIONS.map((symptom) => {
                    const isSelected = selectedSymptoms.includes(symptom);
                    return (
                      <button
                        key={symptom}
                        type="button"
                        onClick={() => toggleSymptom(symptom)}
                        className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#004AC6] text-white shadow-xs"
                            : "bg-white border border-[#C3C6D7] text-[#191B23] hover:border-slate-400"
                        }`}
                      >
                        {symptom}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Gejala Lainnya & Durasi */}
              <div className="space-y-5 pt-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#191B23]">Gejala Lainnya</label>
                  <input
                    type="text"
                    value={otherSymptoms}
                    onChange={(e) => setOtherSymptoms(e.target.value)}
                    placeholder="Input gejala"
                    className="w-full px-4 py-3 bg-white border border-[#C3C6D7] rounded-xl text-sm text-[#191B23] placeholder:text-[#949494] focus:outline-none focus:border-[#004AC6] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#191B23]">Durasi Gejala</label>
                  <select
                    value={symptomDuration}
                    onChange={(e) => setSymptomDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#C3C6D7] rounded-xl text-sm text-[#191B23] focus:outline-none focus:border-[#004AC6] transition-all cursor-pointer"
                  >
                    <option value="less-1-week">Kurang dari 1 minggu</option>
                    <option value="1-4-weeks">1 - 4 minggu</option>
                    <option value="1-3-months">1 - 3 bulan</option>
                    <option value="more-3-months">Lebih dari 3 bulan</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Summary & Tips */}
        <div className="space-y-6">
          {/* Card 1: Ringkasan Pasien */}
          <div className="bg-[#F3F3FE] rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs p-6 space-y-6">
            <h3 className="text-base font-bold text-[#191B23] border-b border-[#C3C6D7] pb-3">
              Ringkasan Pasien
            </h3>

            {/* Detail Utama */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#434655] block">
                DETAIL UTAMA
              </span>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#004AC6]" />
                  <span className="text-sm font-bold text-[#191B23]">{patientName || "Nama Pasien"}</span>
                </div>
                <p className="text-xs text-[#434655] pl-6">
                  38 Tahun • {gender === "male" ? "Laki-laki" : "Perempuan"}
                </p>
                <p className="text-xs font-mono text-[#434655] pl-6">RM-20260723-001</p>
              </div>
            </div>

            {/* Kelengkapan Data */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-[#434655]">KELENGKAPAN DATA</span>
                <span className="font-mono font-bold text-[#004AC6]">85%</span>
              </div>

              <div className="h-2 bg-[#E7E7F3] rounded-full overflow-hidden">
                <div className="h-full bg-[#004AC6] rounded-full w-[85%]" />
              </div>

              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center gap-2 text-[#006A61] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#006A61]" />
                  <span>Identitas Utama Lengkap</span>
                </div>
                <div className="flex items-center gap-2 text-[#006A61] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#006A61]" />
                  <span>Kontak Terverifikasi</span>
                </div>
                <div className="flex items-center gap-2 text-[#434655]">
                  <Circle className="w-4 h-4 text-[#C3C6D7]" />
                  <span>Informasi Medis Tambahan</span>
                </div>
              </div>
            </div>

            {/* Prediksi Konteks Box */}
            <div className="p-4 bg-blue-50/80 rounded-xl border border-blue-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#004AC6]">
                <Sparkles className="w-3.5 h-3.5 text-[#004AC6]" />
                <span>Prediksi Konteks</span>
              </div>
              <p className="text-xs text-[#1E3A8A] leading-relaxed font-normal">
                Berdasarkan durasi gejala (1-4 minggu) dan gejala lemas/sesak, disarankan pemeriksaan konjungtiva segera.
              </p>
            </div>
          </div>

          {/* Card 2: Tips Skrining Akurat */}
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-5 flex items-start gap-3.5 shadow-2xs">
            <Info className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#065F46] uppercase tracking-wider">
                Tips Skrining Akurat
              </h4>
              <p className="text-xs text-[#047857] leading-relaxed">
                Pastikan pasien melepas kacamata atau lensa kontak sebelum memulai prosedur pengambilan gambar mata.
              </p>
            </div>
          </div>
        </div>
      </form>

      {/* Sticky Bottom Action Bar starting after desktop sidebar */}
      <div className="fixed bottom-0 left-0 lg:left-72 right-0 bg-white border-t border-[#C3C6D7] px-6 sm:px-10 py-4 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link
            href={ROUTES.NAKES.PASIEN_LIST}
            className="text-sm font-medium text-[#434655] hover:text-[#191B23] transition-colors"
          >
            Batal
          </Link>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-sm font-bold text-[#004AC6] hover:underline cursor-pointer px-3 py-2 transition-all"
            >
              Simpan Draft
            </button>
            <button
              type="button"
              className="px-5 py-2.5 border border-[#004AC6] text-[#004AC6] font-bold text-sm rounded-xl hover:bg-blue-50 transition-all cursor-pointer"
            >
              Simpan Pasien
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="px-6 py-2.5 bg-[#004AC6] hover:bg-[#003EA8] active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Simpan & Mulai Skrining</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
