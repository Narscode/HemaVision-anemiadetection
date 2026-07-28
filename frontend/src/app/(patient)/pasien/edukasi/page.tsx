import React from "react";
import { Card } from "@/components/ui/Card";
import { BookOpen, Sparkles, HeartPulse, ShieldCheck } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Edukasi Anemia</h1>
        <p className="text-xs text-slate-500 mt-1">Pahami gejala, penyebab, dan pencegahan anemia defisiensi besi</p>
      </div>

      <div className="space-y-4">
        <Card className="p-5 bg-white border-slate-200 space-y-2">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-600" />
            Apa Itu Anemia?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Anemia adalah kondisi ketika jumlah sel darah merah atau kadar hemoglobin dalam darah lebih rendah dari normal, sehingga tubuh kekurangan oksigen.
          </p>
        </Card>

        <Card className="p-5 bg-white border-slate-200 space-y-2">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-rose-600" />
            Gejala Utama (5L)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Lesu, Letih, Lemah, Lelah, dan Lalai. Gejala lain termasuk pusing, mata berkunang-kunang, dan kulit/konjungtiva mata yang pucat.
          </p>
        </Card>

        <Card className="p-5 bg-white border-slate-200 space-y-2">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Pencegahan Anemia
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Makan makanan kaya protein dan zat besi (daging, bayam, kacang), hindari minum teh/kopi bersamaan dengan makan karena menghambat penyerapan zat besi.
          </p>
        </Card>
      </div>
    </div>
  );
}
