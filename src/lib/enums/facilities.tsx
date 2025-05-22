export enum Facility {
  WIFI = "wifi",
  School = "school",
  University = "university",
  Taman = "Taman",
  TamanBermain = "Taman Bermain",
  Teras = "Teras",
  JalurTelepon = "Jalur Telepon",
  AC = "AC",
  KolamRenang = "Kolam Renang",
  KolamIkan = "Kolam Ikan",
  CCTV = "CCTV",
  Backyard = "Backyard",
  Keamanan24 = "Keamanan 24 Jam",
  TempatCuci = "Tempat Cuci",
  TempatJemuran = "Tempat Jemuran",
  TempatLaundry = "Tempat Laundry",
  TempatIbadah = "Tempat Ibadah",
  JoggingTrack = "Jogging Track",
  AksesParkir = "Akses Parkir",
  OneGateSystem = "One Gate System",
}

export type TFacility = {
  value: Facility;
  indonesian_label: string;
};

export const FACILITIES = [
  {
    value: Facility.WIFI,
    indonesian_label: Facility.WIFI,
  },
  {
    value: Facility.School,
    indonesian_label: "Sekolah",
  },
  {
    value: Facility.University,
    indonesian_label: "Universitas",
  },
  {
    value: Facility.AC,
    indonesian_label: Facility.AC,
  },
  {
    value: Facility.AksesParkir,
    indonesian_label: Facility.AksesParkir,
  },
  {
    value: Facility.Backyard,
    indonesian_label: Facility.Backyard,
  },
  {
    value: Facility.CCTV,
    indonesian_label: Facility.CCTV,
  },
  {
    value: Facility.JalurTelepon,
    indonesian_label: Facility.JalurTelepon,
  },
  {
    value: Facility.JoggingTrack,
    indonesian_label: Facility.JoggingTrack,
  },
  {
    value: Facility.Keamanan24,
    indonesian_label: Facility.Keamanan24,
  },
  {
    value: Facility.KolamIkan,
    indonesian_label: Facility.KolamIkan,
  },
  {
    value: Facility.KolamRenang,
    indonesian_label: Facility.KolamRenang,
  },
  {
    value: Facility.OneGateSystem,
    indonesian_label: Facility.OneGateSystem,
  },
  {
    value: Facility.Taman,
    indonesian_label: Facility.Taman,
  },
  {
    value: Facility.TamanBermain,
    indonesian_label: Facility.TamanBermain,
  },
  {
    value: Facility.TempatCuci,
    indonesian_label: Facility.TempatCuci,
  },
  {
    value: Facility.TempatIbadah,
    indonesian_label: Facility.TempatIbadah,
  },
  {
    value: Facility.TempatJemuran,
    indonesian_label: Facility.TempatJemuran,
  },
  {
    value: Facility.TempatLaundry,
    indonesian_label: Facility.TempatLaundry,
  },
  {
    value: Facility.Teras,
    indonesian_label: Facility.Teras,
  },
];
