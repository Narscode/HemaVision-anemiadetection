"use client";

import React from "react";
import Link from "next/link";
import { AppContainer } from "@/components/layout/AppContainer";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <AppContainer size="narrow">
        <Card className="p-6 bg-white border-slate-200 space-y-6 shadow-lg">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-brand-600 rounded-xl text-white font-black text-xl flex items-center justify-center mx-auto">
              HV
            </div>
            <h1 className="text-2xl font-black text-slate-900">Masuk HemaVision</h1>
            <p className="text-xs text-slate-500">Pilih akses Tenaga Kesehatan atau Pasien</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <Input label="Email / ID Pengguna" placeholder="nama@faskes.id" required />
            <Input label="Kata Sandi" type="password" placeholder="••••••••" required />

            <div className="flex gap-3 pt-2">
              <Link href={ROUTES.NAKES.DASHBOARD} className="flex-1">
                <Button variant="primary" size="md" className="w-full">
                  Masuk HemaVision Pro
                </Button>
              </Link>
              <Link href={ROUTES.PATIENT.HOME} className="flex-1">
                <Button variant="secondary" size="md" className="w-full">
                  Masuk Pasien
                </Button>
              </Link>
            </div>
          </form>

          <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
            Belum memiliki akun?{" "}
            <Link href={ROUTES.PUBLIC.REGISTER} className="font-bold text-brand-600 hover:underline">
              Daftar di sini
            </Link>
          </div>
        </Card>
      </AppContainer>
    </main>
  );
}
