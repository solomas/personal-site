// Courses for the Training block on the about page, read from the
// certificates in Drive (PhD/extra/Certificates). The page shows the title,
// the organisation, the year and any modules. Date and kind are kept for the
// record and are not shown. Add a course as one more object, newest first.
// Titles are copied from the certificates as printed, spelling included.

export interface TrainingItem {
  title: string;
  organisation: string;
  year: number;
  /* Date on the certificate, as YYYY-MM-DD. */
  date: string;
  /* Kind of certificate, as printed or as the wording says. */
  kind: string;
  /* Module titles, for a course taken in parts. */
  modules?: string[];
}

export const training: TrainingItem[] = [
  {
    title: "Climate and Health Medicine: A Clinical Training Program for Healthcare Educators",
    organisation: "Global Consortium on Climate and Health Education and European Network on Climate and Health Education",
    year: 2026,
    date: "2026-06-05",
    kind: "Certificate of participation, 24-hour course, final exam passed",
  },
  {
    title: "International Spring School in Global Health",
    organisation: "ISGlobal, Barcelona Institute for Global Health",
    year: 2026,
    date: "2026-05-08",
    kind: "Certificate of participation, held online 23 to 27 March 2026, 10 hours per module",
    modules: [
      "Understanding and assessing the impact of research in society",
      "Intersectionality and gender: advancing equity in health research",
      "Climate change, sustainable work practices, and green jobs: research methods in occupational health",
    ],
  },
  // Attendance at a congress, left out on purpose. Remove the two slashes to show it.
  // { title: "2º Congresso Nacional da Saúde e Ambiente", organisation: "Conselho Português para a Saúde e Ambiente", year: 2026, date: "2026-04-10", kind: "Certificado de presença, 8 to 10 April 2026, Fundação Calouste Gulbenkian, Lisbon" },
];
