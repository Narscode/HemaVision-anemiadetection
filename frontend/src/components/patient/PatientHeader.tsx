"use client";

import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export function PatientHeader() {
  return (
    <header className="bg-[#FAF8FF] border-b border-[#C3C6D7] sticky top-0 z-30 px-4 h-16 flex items-center justify-between shadow-2xs">
      <Link href={ROUTES.PATIENT.HOME} className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#004AC6] text-2xl tracking-tight leading-8">
            HemaVision
          </span>
        </div>
      </Link>

      <Link
        href={ROUTES.PATIENT.PROFIL}
        className="w-8 h-8 rounded-full overflow-hidden border border-[#C3C6D7] hover:opacity-90 transition-opacity flex-shrink-0"
        aria-label="Profil Saya"
      >
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
          alt="Avatar Budi"
          className="w-full h-full object-cover"
        />
      </Link>
    </header>
  );
}
