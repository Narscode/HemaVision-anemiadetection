import React from "react";
import { getPatientById } from "@/services/patients";
import { Card } from "@/components/ui/Card";
import { User, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default async function PatientProfilePage() {
  const patient = await getPatientById("p-001");

  if (!patient) return null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Profil Pasien</h1>
        <p className="text-xs text-slate-500 mt-1">Data identitas dan riwayat klinis terdaftar</p>
      </div>

      <Card className="p-6 bg-white border-slate-200 space-y-4">
        <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
          <div className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl">
            {patient.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{patient.name}</h3>
            <p className="text-xs font-mono text-slate-500">No. RM: {patient.medicalRecordNumber}</p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-slate-700">
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-slate-400" />
            <span>
              {patient.age} Tahun • {patient.sex === "male" ? "Laki-laki" : "Perempuan"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-slate-400" />
            <span>{patient.phone}</span>
          </div>
          {patient.email && (
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{patient.email}</span>
            </div>
          )}
          {patient.address && (
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{patient.address}</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
