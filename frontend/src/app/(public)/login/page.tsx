"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff, LogIn, ShieldCheck, UserCheck, Stethoscope, Sparkles } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"patient" | "nakes">("patient");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFillDemo = (demoType: "patient" | "nakes") => {
    setRole(demoType);
    if (demoType === "patient") {
      setIdentifier("pasien@hemavision.id");
      setPassword("pasien123");
    } else {
      setIdentifier("dr.nakes@hemavision.id");
      setPassword("nakes123");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (typeof window !== "undefined") {
        const userSession = {
          name: identifier.split("@")[0] || (role === "patient" ? "Pasien HemaVision" : "Dr. Tenaga Kesehatan"),
          email: identifier.includes("@") ? identifier : `${identifier}@hemavision.id`,
          role: role,
          isLoggedIn: true,
          loginAt: new Date().toISOString(),
        };
        localStorage.setItem("hemavision_user", JSON.stringify(userSession));
        localStorage.setItem("hemavision_role", role);
      }
    } catch {
      // fallback if localStorage disabled
    }

    setTimeout(() => {
      if (role === "patient") {
        router.push(ROUTES.PATIENT.ONBOARDING_LANGKAH1);
      } else {
        router.push(ROUTES.NAKES.DASHBOARD);
      }
    }, 600);
  };

  return (
    <main className="min-h-screen w-full bg-[#FAF8FF] flex flex-col justify-start items-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-[440px] mx-auto py-6 space-y-6">
        
        {/* Top Header Section */}
        <div className="space-y-6">
          {/* Logo Brand Header */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/hemavision-logo.png"
                alt="HemaVision Logo"
                style={{ width: "38px", height: "37px", minWidth: "38px", minHeight: "37px", objectFit: "contain" }}
                className="w-[38px] h-[37px] min-w-[38px] min-h-[37px] object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <span className="text-[#004AC6] text-2xl font-bold leading-8 tracking-tight">
                HemaVision
              </span>
            </Link>

            <span className="text-xs px-2.5 py-1 bg-[#004AC6]/10 text-[#004AC6] rounded-full font-semibold">
              Deployment Ready
            </span>
          </div>

          {/* Welcome Text */}
          <div className="space-y-2">
            <h1 className="text-[#191B23] text-2xl font-semibold leading-8">
              Selamat Datang Kembali
            </h1>
            <p className="text-[#434655] text-base font-normal leading-6">
              Pilih peran Anda dan masukkan akun untuk mengakses portal HemaVision.
            </p>
          </div>
        </div>

        {/* Role Toggle Selector Tabs */}
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

        {/* Quick Demo Autofill Pill Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs text-[#737686] font-medium">Uji Coba Demo:</span>
          <button
            type="button"
            onClick={() => handleFillDemo("patient")}
            className="px-2.5 py-1 text-xs bg-[#2563EB]/10 text-[#004AC6] hover:bg-[#004AC6] hover:text-white rounded-md transition-colors cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            <span>Demo Pasien</span>
          </button>
          <button
            type="button"
            onClick={() => handleFillDemo("nakes")}
            className="px-2.5 py-1 text-xs bg-emerald-500/10 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-md transition-colors cursor-pointer flex items-center gap-1"
          >
            <Stethoscope className="w-3 h-3" />
            <span>Demo Nakes</span>
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Field 1: Email / Phone */}
          <div className="space-y-1.5">
            <label className="block text-[#191B23] text-sm font-medium leading-5">
              Email / Nomor Telepon
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#737686]">
                <User className="w-[18px] h-[18px]" />
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={role === "patient" ? "pasien@email.com atau 0812..." : "nakes@faskes.go.id"}
                className="w-full py-3 pl-11 pr-4 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-xs text-base text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
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
                onClick={(e) => {
                  e.preventDefault();
                  alert("Link reset kata sandi telah dikirim ke email/nomor telepon Anda.");
                }}
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
                placeholder="Masukkan kata sandi Anda"
                className="w-full py-3 pl-11 pr-11 bg-[#FAF8FF] border border-[#C3C6D7] rounded-lg shadow-xs text-base text-[#191B23] placeholder-[#737686] focus:outline-none focus:ring-2 focus:ring-[#004AC6]/20 focus:border-[#004AC6] transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#737686] hover:text-[#191B23] focus:outline-none cursor-pointer"
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
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-[#004AC6] hover:bg-[#003DA3] active:scale-[0.99] text-white font-medium text-sm leading-5 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
          >
            <span>{isLoading ? "Memproses..." : role === "patient" ? "Masuk ke Onboarding Pasien" : "Masuk ke Dashboard Nakes"}</span>
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
              className="text-[#004AC6] text-base font-semibold leading-6 hover:underline"
            >
              Daftar Baru
            </Link>
          </div>

          {/* Compliance & Security Indicators */}
          <div className="flex items-center justify-center gap-6 opacity-60 text-[#434655] text-xs font-normal leading-4">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#434655]" />
              <span>HIPAA & Kemenkes Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#434655]" />
              <span>AES-256 Encrypted</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}




