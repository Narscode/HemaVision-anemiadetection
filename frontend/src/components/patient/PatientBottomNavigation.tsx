"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { BookOpen, FileCheck, History, Home, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Beranda", href: ROUTES.PATIENT.HOME, icon: Home },
  { label: "Hasil", href: ROUTES.PATIENT.HASIL, icon: FileCheck },
  { label: "Riwayat", href: ROUTES.PATIENT.RIWAYAT, icon: History },
  { label: "Edukasi", href: ROUTES.PATIENT.EDUKASI, icon: BookOpen },
  { label: "Profil", href: ROUTES.PATIENT.PROFIL, icon: User },
];

export function PatientBottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-lg px-2 py-1 flex items-center justify-around max-w-2xl mx-auto">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive =
          item.href === ROUTES.PATIENT.HOME
            ? pathname === ROUTES.PATIENT.HOME
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all min-w-[56px] min-h-[48px] justify-center",
              isActive ? "text-brand-600 font-bold" : "text-slate-500 hover:text-slate-800"
            )}
          >
            <Icon className={cn("w-5 h-5 transition-transform", isActive && "scale-110")} />
            <span className="text-[11px] leading-none">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
