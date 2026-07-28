"use client";

import React from "react";
import Image from "next/image";
import { Search, Bell, LayoutGrid } from "lucide-react";

export function HealthcareHeader() {
  return (
    <header className="hidden lg:flex items-center justify-between px-6 h-16 bg-[#FAF8FF] border-b border-[#C3C6D7] sticky top-0 z-20 w-full">
      {/* Search Input Pill */}
      <div className="flex-1 max-w-md">
        <div className="relative flex items-center">
          <Search className="w-[18px] h-[18px] text-[#434655] absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Cari Pasien atau ID..."
            className="w-full pl-10 pr-4 py-2 bg-[#F3F3FE] text-[#191B23] placeholder:text-[#6B7280] text-sm font-medium rounded-full outline-none border border-transparent focus:border-[#004AC6] transition-all"
          />
        </div>
      </div>

      {/* Right Icons & User Profile */}
      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <button
          className="p-2.5 rounded-full hover:bg-slate-200/60 transition-colors text-[#434655] relative cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-[#434655]" />
          <span className="w-2 h-2 absolute top-2 right-2.5 bg-[#BA1A1A] rounded-full" />
        </button>

        {/* Layout Grid Icon */}
        <button
          className="p-2.5 rounded-full hover:bg-slate-200/60 transition-colors text-[#434655] cursor-pointer"
          aria-label="Grid View"
        >
          <LayoutGrid className="w-5 h-5 text-[#434655]" />
        </button>

        {/* Vertical Separator */}
        <div className="px-2">
          <div className="w-[1px] h-8 bg-[#C3C6D7]" />
        </div>

        {/* User Profile Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C3C6D7] shrink-0 relative bg-[#B4C5FF]">
          <Image
            src="/doctor-avatar.png"
            alt="Dr. Rian Ardian"
            width={40}
            height={40}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </header>
  );
}
