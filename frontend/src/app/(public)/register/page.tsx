"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, RotateCcw, Eye, EyeOff, UserCheck, Stethoscope, Sparkles, ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<"patient" | "nakes">("patient");
  const [fullName, setFullName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Konfirmasi kata sandi tidak cocok. Harap periksa kembali.");
      return;
    }
    setIsLoading(true);

    try {
      if (typeof window !== "undefined") {
        const registrationData = {
          fullName,
          emailOrPhone: identifier,
          role,
          registeredAt: new Date().toISOString(),
        };
        localStorage.setItem("hemavision_registered_user", JSON.stringify(registrationData));
        localStorage.setItem("hemavision_patient_name", fullName);
        if (identifier.startsWith("0") || identifier.startsWith("+")) {
          localStorage.setItem("hemavision_patient_phone", identifier);
        }
      }
    } catch {
      // fallback if localStorage is disabled
    }

    setTimeout(() => {
      if (role === "patient") {
        router.push(ROUTES.PATIENT.ONBOARDING_LANGKAH1);
      } else {
        router.push(ROUTES.NAKES.DASHBOARD);
      }
    }, 500);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] flex flex-col justify-start items-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-[440px] mx-auto py-6 sm:py-8 space-y-6">
        
        {/* Logo Brand Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/hemavision-logo.png"
              alt="HemaVision Logo"
              style={{ width: "28px", height: "27px", minWidth: "28px", minHeight: "27px", objectFit: "contain" }}
              className="w-[28px] h-[27px] min-w-[28px] min-h-[27px] object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
            />
            <span className="text-[#004AC6] text-[24px] font-bold leading-[32px] tracking-tight">
              HemaVision
            </span>
          </Link>
          <span className="text-xs px-2.5 py-1 bg-[#004AC6]/10 text-[#004AC6] rounded-full font-semibold">
            Onboarding Pasien
          </span>
        </div>

        {/* Welcome Text */}
        <div className="space-y-2">
          <h1 className="text-[#191B23] text-[24px] font-semibold leading-[32px]">
            Buat Akun HemaVision
          </h1>
          <p className="text-[#434655] text-[15px] font-normal leading-[22px]">
            Daftarkan diri Anda untuk mengakses fitur skrining anemia berbasis AI HemaVision.
          </p>
        </div>

        {/* Role Toggle Selector */}
        <div className="p-1 bg-[#EDEDF9] rounded-xl flex items-center gap-1 border border-[#C3C6D7]/40 shadow-xs">
          <button
            type="button"
            onClick={() => setRole("patient")}
            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              role === "patient"
                ? "bg-white text-[#004AC6] shadow-sm border border-[#C3C6D7]/40"
                : "text-[#434655] hover:text-[#191B23]"
            }`}
          >
            <UserCheck className="w-4 h-4 text-[#004AC6]" />
            <span>Pasien</span>
          </button>

          <button
            type="button"
            onClick={() => setRole("nakes")}
            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              role === "nakes"
                ? "bg-white text-[#004AC6] shadow-sm border border-[#C3C6D7]/40"
                : "text-[#434655] hover:text-[#191B23]"
            }`}
          >
            <Stethoscope className="w-4 h-4 text-[#004AC6]" />
            <span>Tenaga Kesehatan</span>
          </button>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Field 1: Nama Lengkap */}
          <div className="space-y-1">
            <label className="block text-[#191B23] text-[14px] font-medium leading-[20px]">
              Nama Lengkap
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#737686]">
                <User className="w-[18px] h-[18px]" />
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Masukkan nama lengkap Anda"
                className="w-full py-[12px] pl-[40px] pr-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-xs text-[15px] text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
            </div>
          </div>

          {/* Field 2: Email/Nomor Telepon */}
          <div className="space-y-1">
            <label className="block text-[#191B23] text-[14px] font-medium leading-[20px]">
              Email / Nomor Telepon
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#737686]">
                <Mail className="w-[18px] h-[18px]" />
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="nama@email.com atau 08123456789"
                className="w-full py-[12px] pl-[40px] pr-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-xs text-[15px] text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
            </div>
          </div>

          {/* Field 3: Kata Sandi */}
          <div className="space-y-1">
            <label className="block text-[#191B23] text-[14px] font-medium leading-[20px]">
              Kata Sandi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#737686]">
                <Lock className="w-[18px] h-[18px]" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 8 karakter"
                className="w-full py-[12px] pl-[40px] pr-[40px] bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-xs text-[15px] text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#737686] hover:text-[#191B23] focus:outline-none cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-[18px] h-[18px]" />
                ) : (
                  <Eye className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>
          </div>

          {/* Field 4: Konfirmasi Kata Sandi */}
          <div className="space-y-1">
            <label className="block text-[#191B23] text-[14px] font-medium leading-[20px]">
              Konfirmasi Kata Sandi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#737686]">
                <RotateCcw className="w-[18px] h-[18px]" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Ketik ulang kata sandi"
                className="w-full py-[12px] pl-[40px] pr-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-xs text-[15px] text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
            </div>
          </div>

          {/* Terms & Privacy Policy Checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <input
              id="privacy-terms"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 mt-0.5 rounded border-[#C3C6D7] bg-[#FAF8FF] text-[#004AC6] focus:ring-[#004AC6]/20 cursor-pointer"
              required
            />
            <label htmlFor="privacy-terms" className="text-[#434655] text-[13px] font-normal leading-[18px] cursor-pointer">
              Saya telah membaca dan menyetujui ketentuan penggunaan dan kebijakan privasi HemaVision.
            </label>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-[14px] px-4 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-semibold text-[14px] leading-[20px] rounded-lg shadow-sm transition-all cursor-pointer text-center flex items-center justify-center gap-2 disabled:opacity-75"
            >
              <span>{isLoading ? "Mendaftar..." : role === "patient" ? "Daftar & Mulai Onboarding Pasien" : "Daftar Akun Nakes"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Footer Login Link */}
        <div className="pt-2 text-center">
          <span className="text-[#434655] text-[14px] font-medium leading-[20px]">
            Sudah memiliki akun?{" "}
          </span>
          <Link
            href={ROUTES.PUBLIC.LOGIN}
            className="text-[#004AC6] text-[14px] font-bold underline leading-[20px] hover:opacity-80"
          >
            Masuk Kredensial
          </Link>
        </div>

      </div>
    </main>
  );
}




