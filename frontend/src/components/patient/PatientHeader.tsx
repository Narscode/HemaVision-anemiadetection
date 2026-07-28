"use client";

import React from "react";
import Link from "next/link";
import { User } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export function PatientHeader() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 py-3 flex items-center justify-between shadow-2xs">
      <Link href={ROUTES.PATIENT.HOME} className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-black text-sm">
          HV
        </div>
        <span className="font-extrabold text-slate-900 text-lg tracking-tight">HemaVision</span>
      </Link>

      <Link
        href={ROUTES.PATIENT.PROFIL}
        className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors"
        aria-label="Profil Saya"
      >
        <User className="w-4 h-4" />
      </Link>
    </header>
  );
}
