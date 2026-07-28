import React from "react";
import { getScreeningsByPatientId } from "@/services/screening";
import { Card } from "@/components/ui/Card";
import { PatientRiskBadge } from "@/components/ui/Badge";
import { formatHb } from "@/lib/utils";

export default async function PatientHistoryPage() {
  const history = await getScreeningsByPatientId("p-001");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Riwayat Skrining</h1>
        <p className="text-xs text-slate-500 mt-1">Daftar riwayat pemeriksaan anemia non-invasif Anda</p>
      </div>

      <div className="space-y-3">
        {history.map((s) => (
          <Card key={s.id} className="p-4 bg-white border-slate-200 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                {new Date(s.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              {s.result && <PatientRiskBadge risk={s.result.riskLevel} />}
            </div>

            {s.result && (
              <div className="text-sm font-bold text-slate-900">
                Estimasi Hb (AI): <span className="font-mono">{formatHb(s.result.estimatedHb)}</span>
              </div>
            )}
            <p className="text-xs text-slate-500 leading-relaxed">{s.result?.recommendation}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
