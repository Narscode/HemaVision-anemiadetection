"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, PlusCircle } from "lucide-react";
import { ROUTES } from "@/lib/routes";

interface PatientHeaderBannerProps {
  name?: string;
  medicalRecordNumber?: string;
  age?: number;
  sex?: string;
  category?: string;
  location?: string;
  phone?: string;
  avatarUrl?: string;
}

export function PatientHeaderBanner({
  name = "Siti Aminah",
  medicalRecordNumber = "ID-9921",
  age = 28,
  sex = "Perempuan",
  category = "Ibu Hamil",
  location = "Jakarta Selatan",
  phone = "+62 812-3456-XXXX",
  avatarUrl = "/patient-siti-aminah.png",
}: PatientHeaderBannerProps) {
  return (
    <div className="w-full bg-white pt-6 px-6 sm:px-8 pb-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
        {/* Main Info Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          {/* Avatar and Patient Info */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar Box */}
            <div className="w-24 h-24 rounded-2xl overflow-hidden outline outline-2 outline-[#2563EB] outline-offset-[-2px] shadow-sm shrink-0 bg-slate-100 relative">
              <Image
                src={avatarUrl}
                alt={name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-3">
              {/* Name & ID Badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-[32px] font-semibold text-[#191B23] leading-10">
                  {name}
                </h1>
                <span className="px-3 py-0.5 bg-[#EDEDF9] text-[#434655] text-xs font-medium font-mono rounded-full">
                  {medicalRecordNumber}
                </span>
              </div>

              {/* Tag Pills */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-[#DBE1FF] text-[#00174B] text-xs font-bold rounded-lg">
                  Dewasa
                </span>
                <span className="px-3 py-1 bg-[#E7E7F3] text-[#191B23] text-xs font-bold rounded-lg">
                  {age} Tahun
                </span>
                <span className="px-3 py-1 bg-[#E7E7F3] text-[#191B23] text-xs font-bold rounded-lg">
                  {sex}
                </span>
                <span className="px-3 py-1 bg-[#86F2E4] text-[#006F66] text-xs font-bold rounded-lg">
                  {category}
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-4 pt-1 text-xs text-[#434655] flex-wrap">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#434655]" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#434655]" />
                  <span>{phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Link href={ROUTES.NAKES.SKRINING_BARU}>
            <button className="px-6 py-3.5 bg-[#004AC6] hover:bg-[#003EA8] active:scale-[0.99] transition-all text-white text-base font-bold rounded-xl flex items-center gap-2 shadow-md cursor-pointer shrink-0">
              <PlusCircle className="w-5 h-5 text-white" />
              <span>Mulai Skrining Baru</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
