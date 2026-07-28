"use client";

import React from "react";
import Link from "next/link";
import { FileText, MessageSquare, UserPlus } from "lucide-react";
import { ROUTES } from "@/lib/routes";

const ACTIVITIES = [
  {
    id: 1,
    date: "14 Okt 2023",
    title: "Skrining Rutin Kehamilan",
    subtitle: "Hasil: Risiko Sedang",
    icon: FileText,
    active: true,
  },
  {
    id: 2,
    date: "12 Sep 2023",
    title: "Konsultasi Telemedicine",
    subtitle: "Keluhan lemas & pucat",
    icon: MessageSquare,
    active: false,
  },
  {
    id: 3,
    date: "10 Ags 2023",
    title: "Pendaftaran Pasien Baru",
    subtitle: null,
    icon: UserPlus,
    active: false,
  },
];

export function RecentActivitiesCard() {
  return (
    <div className="bg-white rounded-xl outline outline-1 outline-[#C3C6D7] shadow-xs p-6 flex flex-col justify-between gap-6">
      {/* Header */}
      <h3 className="text-base font-bold text-[#191B23]">
        Aktivitas Terakhir
      </h3>

      {/* Timeline */}
      <div className="flex flex-col relative pl-2">
        {ACTIVITIES.map((activity, idx) => {
          const Icon = activity.icon;
          const isLast = idx === ACTIVITIES.length - 1;

          return (
            <div key={activity.id} className="relative flex gap-4 pb-6 group">
              {/* Connecting Vertical Line */}
              {!isLast && (
                <div className="absolute left-4 top-8 bottom-0 w-[2px] bg-[#C3C6D7]" />
              )}

              {/* Icon Circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${
                  activity.active
                    ? "bg-[#004AC6] text-white"
                    : "bg-[#EDEDF9] text-[#434655]"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-0.5 pt-0.5">
                <span className="text-xs text-[#434655]">{activity.date}</span>
                <h4 className="text-sm font-bold text-[#191B23]">
                  {activity.title}
                </h4>
                {activity.subtitle && (
                  <p className="text-xs text-[#434655]">{activity.subtitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Link */}
      <div className="pt-2 border-t border-transparent text-center">
        <Link
          href={ROUTES.NAKES.MONITORING}
          className="text-sm font-bold text-[#004AC6] hover:underline"
        >
          Lihat Semua Riwayat
        </Link>
      </div>
    </div>
  );
}
