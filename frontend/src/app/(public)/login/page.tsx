"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff, LogIn, ShieldCheck } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(ROUTES.PATIENT.SKRINING_LANGKAH1);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] flex flex-col justify-start items-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-[420px] mx-auto py-6 space-y-6">
        
        {/* Top Header Section */}
        <div className="space-y-6">
          {/* Logo Brand Header */}
          <div className="flex items-center gap-3">
            <img
              src="/hemavision-logo.png"
              alt="HemaVision Logo"
              style={{ width: "38px", height: "37px", minWidth: "38px", minHeight: "37px", objectFit: "contain" }}
              className="w-[38px] h-[37px] min-w-[38px] min-h-[37px] object-contain flex-shrink-0"
            />
            <span className="text-[#004AC6] text-2xl font-bold leading-8 tracking-tight">
              HemaVision
            </span>
          </div>

          {/* Welcome Text */}
          <div className="space-y-2">
            <h1 className="text-[#191B23] text-2xl font-semibold leading-8">
              Selamat Datang Kembali
            </h1>
            <p className="text-[#434655] text-base font-normal leading-6">
              Silakan masukkan kredensial klinis Anda untuk mengakses sistem.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Field 1: Email / Phone */}
          <div className="space-y-1.5">
            <label className="block text-[#191B23] text-sm font-medium leading-5">
              Email/Nomor Telepon
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#737686]">
                <User className="w-[18px] h-[18px]" />
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Masukkan email atau nomor telepon"
                className="w-full py-3 pl-11 pr-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-sm text-base text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
            </div>
          </div>

          {/* Field 2: Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-[#191B23] text-sm font-medium leading-5">
                Kata Sandi
              </label>
              <a
                href="#forgot-password"
                className="text-[#004AC6] text-sm font-medium leading-5 hover:underline"
              >
                Lupa Kata Sandi?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#737686]">
                <Lock className="w-[18px] h-[18px]" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
                className="w-full py-3 pl-11 pr-11 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-sm text-base text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#737686] hover:text-[#191B23] focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-[18px] h-[18px]" />
                ) : (
                  <Eye className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-medium text-sm leading-5 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Masuk</span>
            <LogIn className="w-[16px] h-[16px]" />
          </button>
        </form>

        {/* Footer & Sign Up */}
        <div className="space-y-5 pt-1">
          <div className="pt-5 border-t border-[#C3C6D7]/50 text-center">
            <span className="text-[#434655] text-base font-normal leading-6">
              Belum memiliki akun?{" "}
            </span>
            <Link
              href={ROUTES.PUBLIC.REGISTER}
              className="text-[#004AC6] text-base font-normal leading-6 hover:underline"
            >
              Daftar
            </Link>
          </div>

          {/* Compliance & Security Indicators */}
          <div className="flex items-center justify-center gap-6 opacity-50 text-[#434655] text-xs font-normal leading-4">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#434655]" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#434655]" />
              <span>End-to-End Encrypted</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}



