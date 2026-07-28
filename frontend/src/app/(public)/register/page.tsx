"use client";

import React from "react";
import Link from "next/link";
import { AppContainer } from "@/components/layout/AppContainer";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/routes";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <AppContainer size="narrow">
        <Card className="p-6 bg-white border-slate-200 space-y-6 shadow-lg">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-black text-slate-900">Pendaftaran HemaVision</h1>
            <p className="text-xs text-slate-500">Buat akun untuk Tenaga Kesehatan atau Pasien</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <Input label="Nama Lengkap" placeholder="Nama lengkap" required />
            <Input label="Email" type="email" placeholder="nama@email.com" required />
            <Select
              label="Peran Akun"
              options={[
                { label: "Tenaga Kesehatan / Dokter / Perawat", value: "healthcare" },
                { label: "Pasien / Masyarakat Umum", value: "patient" },
              ]}
            />
            <Input label="Kata Sandi" type="password" placeholder="••••••••" required />

            <Link href={ROUTES.PUBLIC.LOGIN} className="block pt-2">
              <Button variant="primary" size="md" className="w-full">
                Daftar Akun
              </Button>
            </Link>
          </form>

          <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
            Sudah memiliki akun?{" "}
            <Link href={ROUTES.PUBLIC.LOGIN} className="font-bold text-brand-600 hover:underline">
              Masuk
            </Link>
          </div>
        </Card>
      </AppContainer>
    </main>
  );
}
