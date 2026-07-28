import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { AppContainer } from "@/components/layout/AppContainer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { MedicalDisclaimer } from "@/components/healthcare/MedicalDisclaimer";
import { ArrowRight, Camera, Stethoscope, UserCheck, ShieldCheck, Sparkles } from "lucide-react";

export default function RootHomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col justify-between py-12 px-4">
      <AppContainer size="default" className="flex-1 flex flex-col justify-center gap-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span>AI-Assisted Early Anemia Screening System</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            HemaVision Platform
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Sistem pendukung skrining anemia dini berbasis citra non-invasif mata (konjungtiva), jari, dan telapak tangan.
          </p>
        </div>

        <div className="max-w-xl mx-auto w-full">
          <MedicalDisclaimer />
        </div>

        {/* Experience Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full mt-4">
          {/* HemaVision Pro Card */}
          <Card className="bg-slate-800/80 border-slate-700 text-white hover:border-brand-500 transition-all shadow-xl flex flex-col justify-between">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-brand-600/30 text-brand-400 border border-brand-500/30 flex items-center justify-center mb-2">
                <Stethoscope className="w-6 h-6" />
              </div>
              <CardTitle className="text-white text-xl">HemaVision Pro</CardTitle>
              <p className="text-xs text-slate-400 font-mono">DESKTOP-FIRST CLINICAL WORKSPACE</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm leading-relaxed">
                Portal khusus Tenaga Kesehatan / Puskesmas untuk manajemen pasien, pendaftaran, pemicuan sesi pengambilan citra, dan peninjauan hasil klinis.
              </p>
            </CardContent>
            <CardFooter className="bg-slate-800/40 border-t border-slate-700/60 p-4">
              <Link href={ROUTES.NAKES.DASHBOARD} className="w-full">
                <Button variant="primary" size="md" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Masuk HemaVision Pro
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* HemaVision Patient Card */}
          <Card className="bg-slate-800/80 border-slate-700 text-white hover:border-emerald-500 transition-all shadow-xl flex flex-col justify-between">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-2">
                <UserCheck className="w-6 h-6" />
              </div>
              <CardTitle className="text-white text-xl">HemaVision Pasien</CardTitle>
              <p className="text-xs text-slate-400 font-mono">MOBILE-FIRST PATIENT PORTAL</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm leading-relaxed">
                Antarmuka pasien / masyarakat untuk melihat hasil estimasi skrining, panduan tindak lanjut kesehatan, riwayat, dan edukasi anemia.
              </p>
            </CardContent>
            <CardFooter className="bg-slate-800/40 border-t border-slate-700/60 p-4">
              <Link href={ROUTES.PATIENT.HOME} className="w-full">
                <Button variant="secondary" size="md" className="w-full bg-slate-700 text-white hover:bg-slate-600 border-slate-600" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Masuk Portal Pasien
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* HemaVision Capture Companion Card */}
          <Card className="bg-slate-800/80 border-slate-700 text-white hover:border-amber-500 transition-all shadow-xl flex flex-col justify-between">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-amber-600/30 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-2">
                <Camera className="w-6 h-6" />
              </div>
              <CardTitle className="text-white text-xl">Capture Mode</CardTitle>
              <p className="text-xs text-slate-400 font-mono">MOBILE IMAGE ACQUISITION</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pengalaman akuisisi gambar via smartphone (mata, kuku, telapak tangan) yang dipicu dari QR code/sesi klinis.
              </p>
            </CardContent>
            <CardFooter className="bg-slate-800/40 border-t border-slate-700/60 p-4">
              <Link href={ROUTES.CAPTURE.SESSION("demo-session-123")} className="w-full">
                <Button variant="outline" size="md" className="w-full border-slate-600 text-slate-200 hover:bg-slate-700" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Buka Capture Mode
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </AppContainer>

      <footer className="text-center text-xs text-slate-500 border-t border-slate-800 pt-6 mt-8">
        HemaVision PWA Architecture Foundation • Built with Next.js App Router, TypeScript & Tailwind CSS
      </footer>
    </main>
  );
}
