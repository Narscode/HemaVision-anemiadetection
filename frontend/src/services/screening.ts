import { MOCK_SCREENINGS } from "@/data/mock/screenings";
import { Screening } from "@/types/screening";

export async function getScreenings(): Promise<Screening[]> {
  return Promise.resolve(MOCK_SCREENINGS);
}

export async function getScreeningById(id: string): Promise<Screening | null> {
  const item = MOCK_SCREENINGS.find((s) => s.id === id);
  return Promise.resolve(item || null);
}

export async function getScreeningsByPatientId(patientId: string): Promise<Screening[]> {
  const items = MOCK_SCREENINGS.filter((s) => s.patientId === patientId);
  return Promise.resolve(items);
}

export async function createScreeningSession(patientId: string): Promise<Screening> {
  const newScreening: Screening = {
    id: `scr-${Date.now()}`,
    patientId,
    createdAt: new Date().toISOString(),
    status: "draft",
    sites: {
      eye: { site: "eye", status: "pending" },
      finger: { site: "finger", status: "pending" },
      palm: { site: "palm", status: "pending" },
    },
    captureSessionId: `session-${Math.random().toString(36).substring(2, 9)}`,
  };
  MOCK_SCREENINGS.unshift(newScreening);
  return Promise.resolve(newScreening);
}
