"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function Step1ScreeningPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState<"male" | "female">("female");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const savedName = localStorage.getItem("hemavision_patient_name");
        const savedPhone = localStorage.getItem("hemavision_patient_phone");
        const savedBirth = localStorage.getItem("hemavision_patient_birthdate");
        const savedGender = localStorage.getItem("hemavision_patient_gender") as "male" | "female" | null;

        if (savedName) setFullName(savedName);
        if (savedPhone) setPhone(savedPhone.replace(/^\+62/, ""));
        if (savedBirth) setBirthDate(savedBirth);
        if (savedGender) setGender(savedGender);
      }
    } catch {
      // fallback
    }
  }, []);

  const calculateAge = (dateString: string) => {
    if (!dateString) return "";
    const birth = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age > 0 ? `${age} Tahun` : "0 Tahun";
  };

  const computedAge = calculateAge(birthDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("hemavision_patient_name", fullName || "Pasien HemaVision");
        localStorage.setItem("hemavision_patient_birthdate", birthDate);
        localStorage.setItem("hemavision_patient_age", computedAge);
        localStorage.setItem("hemavision_patient_gender", gender);
        localStorage.setItem("hemavision_patient_phone", phone ? `+62${phone}` : "");
        localStorage.setItem("hemavision_onboarding_step", "1");
      }
    } catch {
      // fallback
    }
    router.push(ROUTES.PATIENT.SKRINING_LANGKAH2);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#F3F3FE] to-[#FAF8FF] flex flex-col justify-center items-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-[600px] mx-auto space-y-6">
        
        {/* Step Indicator Header (LANGKAH 1 DARI 4) */}
        <div className="space-y-2 px-1">
          <div className="flex items-center justify-between">
            <span className="text-[#004AC6] text-xs sm:text-sm font-semibold uppercase tracking-[0.35px]">
              LANGKAH 1 DARI 4
            </span>
          </div>
          {/* Progress Bar (25% filled) */}
          <div className="w-full h-2 bg-[#E1E2ED] rounded-full overflow-hidden flex">
            <div className="w-1/4 h-full bg-[#004AC6] rounded-full transition-all duration-500" />
            <div className="w-3/4 h-full bg-transparent" />
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full bg-white rounded-xl shadow-[0px_4px_24px_rgba(0,0,0,0.04)] border border-[#C3C6D7]/50 p-6 sm:p-8 space-y-8">
          
          {/* Card Title Section */}
          <div className="space-y-2">
            <h1 className="text-[#191B23] text-2xl font-semibold leading-8">
              Kenali Anda Lebih Baik
            </h1>
            <p className="text-[#434655] text-base font-normal leading-6">
              Informasi ini membantu HemaVision memberikan pengalaman skrining yang lebih sesuai.
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Field 1: Nama Lengkap */}
            <div className="space-y-2">
              <label className="block text-[#191B23] text-sm font-medium leading-5">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Masukkan nama lengkap sesuai identitas"
                className="w-full py-3.5 px-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg text-base text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
            </div>

            {/* Field 2 & 3: Tanggal Lahir & Usia */}
            <div className="space-y-6">
              {/* Tanggal Lahir */}
              <div className="space-y-2">
                <label className="block text-[#191B23] text-sm font-medium leading-5">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full py-3 px-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg text-base text-[#191B23] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all cursor-pointer"
                  required
                />
              </div>

              {/* Usia (Auto-filled) */}
              <div className="space-y-2">
                <label className="block text-[#191B23] text-sm font-medium leading-5">
                  Usia
                </label>
                <input
                  type="text"
                  value={computedAge || "Otomatis terisi"}
                  disabled
                  className="w-full py-3.5 px-4 bg-[#EDEDF9] border border-transparent rounded-lg text-base text-[#6B7280] font-normal cursor-not-allowed select-none"
                />
              </div>
            </div>

            {/* Field 4: Jenis Kelamin */}
            <div className="space-y-2">
              <label className="block text-[#191B23] text-sm font-medium leading-5">
                Jenis Kelamin
              </label>
              <div className="w-full p-1 bg-[#EDEDF9] rounded-lg flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`flex-1 py-2 rounded-md text-center text-sm transition-all cursor-pointer ${
                    gender === "male"
                      ? "bg-white text-[#004AC6] font-bold shadow-xs border border-[#C3C6D7]/30"
                      : "text-[#434655] font-medium hover:text-[#191B23]"
                  }`}
                >
                  Laki-laki
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`flex-1 py-2 rounded-md text-center text-sm transition-all cursor-pointer ${
                    gender === "female"
                      ? "bg-white text-[#004AC6] font-bold shadow-xs border border-[#C3C6D7]/30"
                      : "text-[#434655] font-medium hover:text-[#191B23]"
                  }`}
                >
                  Perempuan
                </button>
              </div>
            </div>

            {/* Field 5: Nomor Telepon */}
            <div className="space-y-2">
              <label className="block text-[#191B23] text-sm font-medium leading-5">
                Nomor Telepon
              </label>
              <div className="flex items-center w-full">
                <div className="py-3.5 px-4 bg-[#EDEDF9] border border-[#C3C6D7] border-r-0 rounded-l-lg text-base text-[#434655] font-normal select-none flex-shrink-0">
                  +62
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="812 3456 7890"
                  className="w-full py-3.5 px-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-r-lg text-base text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                  required
                />
              </div>
            </div>

            {/* Divider & Submit Button */}
            <div className="pt-6 border-t border-[#C3C6D7]/50">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-bold text-sm leading-5 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Lanjutkan ke Langkah 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>

        </div>

      </div>
    </main>
  );
}

