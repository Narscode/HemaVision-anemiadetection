"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, RotateCcw, Eye, EyeOff } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(ROUTES.PATIENT.SKRINING_LANGKAH1);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] flex flex-col justify-start items-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-[420px] mx-auto py-6 sm:py-8 space-y-6">
        
        {/* Logo Brand Header */}
        <div className="flex items-center gap-2">
          <img
            src="/hemavision-logo.png"
            alt="HemaVision Logo"
            style={{ width: "28px", height: "27px", minWidth: "28px", minHeight: "27px", objectFit: "contain" }}
            className="w-[28px] h-[27px] min-w-[28px] min-h-[27px] object-contain flex-shrink-0"
          />
          <span className="text-[#004AC6] text-[24px] font-semibold leading-[32px] tracking-tight">
            HemaVision
          </span>
        </div>

        {/* Welcome Text */}
        <div className="space-y-2">
          <h1 className="text-[#191B23] text-[24px] font-semibold leading-[32px]">
            Buat Akun HemaVision
          </h1>
          <p className="text-[#434655] text-[16px] font-normal leading-[24px]">
            Lengkapi data di bawah ini untuk mendaftar sebagai tenaga kesehatan.
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full py-[14px] pl-[40px] pr-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-sm text-[16px] text-[#191B23] placeholder-[#C3C6D7] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
            </div>
          </div>

          {/* Field 2: Email/Nomor Telepon */}
          <div className="space-y-1">
            <label className="block text-[#191B23] text-[14px] font-medium leading-[20px]">
              Email/Nomor Telepon
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#737686]">
                <Mail className="w-[18px] h-[18px]" />
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="nama@email.com atau 0812..."
                className="w-full py-[14px] pl-[40px] pr-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-sm text-[16px] text-[#191B23] placeholder-[#C3C6D7] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
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
                className="w-full py-[14px] pl-[40px] pr-[40px] bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-sm text-[16px] text-[#191B23] placeholder-[#C3C6D7] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#737686] hover:text-[#191B23] focus:outline-none"
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
                className="w-full py-[14px] pl-[40px] pr-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-sm text-[16px] text-[#191B23] placeholder-[#C3C6D7] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
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
            <label htmlFor="privacy-terms" className="text-[#434655] text-[14px] font-normal leading-[20px] cursor-pointer">
              Saya telah membaca dan menyetujui ketentuan penggunaan dan kebijakan privasi.
            </label>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-[12px] px-4 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-medium text-[14px] leading-[20px] rounded-lg shadow-sm transition-all cursor-pointer text-center"
            >
              Lanjutkan
            </button>
          </div>
        </form>

        {/* Footer Login Link */}
        <div className="pt-2 text-center">
          <span className="text-[#004AC6] text-[14px] font-medium leading-[20px]">
            Sudah memiliki akun?{" "}
          </span>
          <Link
            href={ROUTES.PUBLIC.LOGIN}
            className="text-[#004AC6] text-[14px] font-bold underline leading-[20px] hover:opacity-80"
          >
            Masuk
          </Link>
        </div>

      </div>
    </main>
  );
}



