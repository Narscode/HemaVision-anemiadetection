import { MOCK_PATIENTS } from "@/data/mock/patients";
import { Patient } from "@/types/patient";

export async function getPatients(): Promise<Patient[]> {
  // Service boundary: easily swappable with fetch('/api/patients')
  return Promise.resolve(MOCK_PATIENTS);
}

export async function getPatientById(id: string): Promise<Patient | null> {
  const patient = MOCK_PATIENTS.find((p) => p.id === id);
  return Promise.resolve(patient || null);
}

export async function createPatient(data: Omit<Patient, "id" | "createdAt">): Promise<Patient> {
  const newPatient: Patient = {
    ...data,
    id: `p-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  MOCK_PATIENTS.unshift(newPatient);
  return Promise.resolve(newPatient);
}
