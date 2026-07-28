export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    OFFLINE: "/offline",
  },
  NAKES: {
    DASHBOARD: "/nakes",
    PASIEN_LIST: "/nakes/pasien",
    PASIEN_BARU: "/nakes/pasien/baru",
    PASIEN_DETAIL: (id: string) => `/nakes/pasien/${id}`,
    SKRINING_OVERVIEW: "/nakes/skrining",
    SKRINING_BARU: "/nakes/skrining/baru",
    HASIL: "/nakes/hasil",
    MONITORING: "/nakes/monitoring",
    LAPORAN: "/nakes/laporan",
  },
  PATIENT: {
    HOME: "/pasien",
    HASIL: "/pasien/hasil",
    TINDAK_LANJUT: "/pasien/tindak-lanjut",
    RIWAYAT: "/pasien/riwayat",
    EDUKASI: "/pasien/edukasi",
    PROFIL: "/pasien/profil",
  },
  CAPTURE: {
    SESSION: (sessionId: string) => `/capture/${sessionId}`,
  },
};
