"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import {
  LayoutGrid,
  Users,
  PlusCircle,
  History,
  BarChart3,
  Settings,
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { Button } from "../ui/Button";

const NAV_ITEMS = [
  { label: "Dashboard", href: ROUTES.NAKES.DASHBOARD, icon: LayoutGrid },
  { label: "Pasien", href: ROUTES.NAKES.PASIEN_LIST, icon: Users },
  { label: "Skrining Baru", href: ROUTES.NAKES.SKRINING_BARU, icon: PlusCircle },
  { label: "Riwayat & Monitoring", href: ROUTES.NAKES.MONITORING, icon: History },
  { label: "Laporan", href: ROUTES.NAKES.LAPORAN, icon: BarChart3 },
  { label: "Pengaturan", href: "/nakes/pengaturan", icon: Settings },
];

export function HealthcareSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const desktopNavContent = (
    <nav className="flex flex-col gap-1 py-4">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        // Check active route or default "Skrining Baru" / "Pasien"
        const isActive =
          item.href === ROUTES.NAKES.DASHBOARD
            ? pathname === ROUTES.NAKES.DASHBOARD
            : pathname.startsWith(item.href) ||
              (item.label === "Skrining Baru" && pathname.includes("/pasien/"));

        return (
          <Link
            key={item.href}
            href={item.href}
            title={isCollapsed ? item.label : undefined}
            className={cn(
              "flex items-center text-base transition-all relative border-r-4 rounded-l-lg",
              isCollapsed ? "justify-center px-0 py-3" : "gap-3 px-4 py-3 mx-2",
              isActive
                ? "bg-[#F3F3FE] text-[#004AC6] border-[#004AC6] font-bold"
                : "text-[#434655] hover:bg-slate-100 hover:text-slate-900 border-transparent font-normal"
            )}
          >
            <Icon
              className={cn(
                "w-5 h-5 shrink-0 transition-colors",
                isActive ? "text-[#004AC6]" : "text-[#434655]"
              )}
            />
            {!isCollapsed && <span className="truncate">{item.label}</span>}
          </Link>
        );
      })}
    </nav>
  );

  const mobileNavContent = (
    <nav className="flex flex-col gap-1 py-4">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive =
          item.href === ROUTES.NAKES.DASHBOARD
            ? pathname === ROUTES.NAKES.DASHBOARD
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 mx-2 text-base transition-all relative border-r-4 rounded-l-lg",
              isActive
                ? "bg-[#F3F3FE] text-[#004AC6] border-[#004AC6] font-bold"
                : "text-[#434655] hover:bg-slate-100 hover:text-slate-900 border-transparent font-normal"
            )}
          >
            <Icon
              className={cn(
                "w-5 h-5 shrink-0",
                isActive ? "text-[#004AC6]" : "text-[#434655]"
              )}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile Bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#FAF8FF] border-b border-[#C3C6D7] sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <img
            src="/hemavision-logo.png"
            alt="HemaVision Logo"
            className="w-8 h-8 object-contain"
          />
          <div>
            <h1 className="font-bold text-[#004AC6] text-xl tracking-tight">HemaVision Pro</h1>
            <p className="text-xs text-[#434655] opacity-70">Portal Tenaga Kesehatan</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900/40 z-40 backdrop-blur-xs"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={cn(
          "lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-[#FAF8FF] z-50 shadow-2xl flex flex-col transition-transform duration-300 transform border-r border-[#C3C6D7]",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 border-b border-[#C3C6D7] flex items-center justify-between">
          <div>
            <h2 className="font-bold text-[#004AC6] text-2xl tracking-tight">HemaVision Pro</h2>
            <p className="text-sm text-[#434655] opacity-70">Portal Tenaga Kesehatan</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setMobileOpen(false)}>
            <X className="w-5 h-5 text-[#434655]" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">{mobileNavContent}</div>
        <div className="p-6 border-t border-[#C3C6D7] flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#B4C5FF] text-[#003EA8] font-bold text-sm flex items-center justify-center shrink-0">
            DR
          </div>
          <div>
            <span className="font-bold text-[#191B23] text-base block leading-tight">Dr. Rian Ardian</span>
            <span className="text-[10px] text-[#434655] uppercase tracking-wider block">HEMATOLOGIST</span>
          </div>
        </div>
      </aside>

      {/* Desktop Collapsible Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col border-r border-[#C3C6D7] bg-[#FAF8FF] min-h-screen shrink-0 sticky top-0 h-screen justify-between transition-all duration-300 select-none",
          isCollapsed ? "w-20" : "w-72"
        )}
      >
        <div>
          {/* Header with Toggle Button */}
          <div
            className={cn(
              "p-6 pb-8 border-b border-[#C3C6D7]/40 flex items-center transition-all",
              isCollapsed ? "justify-center flex-col gap-3 px-3" : "justify-between"
            )}
          >
            {!isCollapsed ? (
              <div className="flex items-center gap-3">
                <img
                  src="/hemavision-logo.png"
                  alt="HemaVision Logo"
                  className="w-10 h-10 object-contain drop-shadow-xs"
                />
                <div>
                  <h2 className="font-bold text-[#004AC6] text-2xl tracking-tight leading-8">HemaVision Pro</h2>
                  <p className="text-sm font-medium text-[#434655] opacity-70">Portal Tenaga Kesehatan</p>
                </div>
              </div>
            ) : (
              <img
                src="/hemavision-logo.png"
                alt="HemaVision Logo"
                className="w-10 h-10 object-contain drop-shadow-xs"
              />
            )}

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 rounded-lg text-[#434655] hover:text-[#004AC6] hover:bg-[#F3F3FE] active:scale-95 transition-all cursor-pointer"
              title={isCollapsed ? "Buka Sidebar (Expand)" : "Tutup Sidebar (Collapse)"}
              aria-label="Toggle Sidebar"
            >
              {isCollapsed ? (
                <PanelLeftOpen className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Navigation Items */}
          <div className="py-2">{desktopNavContent}</div>
        </div>

        {/* Profile Footer */}
        <div
          className={cn(
            "p-6 border-t border-[#C3C6D7] flex items-center transition-all",
            isCollapsed ? "justify-center px-2" : "gap-3"
          )}
        >
          <div className="w-10 h-10 rounded-full bg-[#B4C5FF] text-[#003EA8] font-bold text-sm flex items-center justify-center shrink-0">
            DR
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <span className="font-bold text-[#191B23] text-base block leading-tight truncate">
                Dr. Rian Ardian
              </span>
              <span className="text-[10px] text-[#434655] uppercase tracking-wider block truncate">
                HEMATOLOGIST
              </span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
