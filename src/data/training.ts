// Courses for the Training block on the about page, read from the
// certificates in Drive (PhD/extra/Certificates). The page shows the title,
// the organisation, the year, any modules and a link to each certificate.
// Date and kind are kept for the record and are not shown. Add a course as
// one more object, newest first. Titles are copied from the certificates as
// printed, spelling included. The certificate PDFs live in
// public/certificates/, so a link is a path such as
// "/certificates/isglobal-2026-m2.pdf".

export interface TrainingModule {
  title: string;
  /* Path to the module's certificate PDF. */
  certificate?: string;
}

export interface TrainingItem {
  title: string;
  organisation: string;
  year: number;
  /* Date on the certificate, as YYYY-MM-DD. */
  date: string;
  /* Kind of certificate, as printed or as the wording says. */
  kind: string;
  /* Path to the certificate PDF, for a course with one certificate. */
  certificate?: string;
  /* Modules, for a course taken in parts, each with its own certificate. */
  modules?: TrainingModule[];
}

export const training: TrainingItem[] = [
  {
    title: "Climate and Health Medicine: A Clinical Training Program for Healthcare Educators",
    organisation: "Global Consortium on Climate and Health Education and European Network on Climate and Health Education",
    year: 2026,
    date: "2026-06-05",
    kind: "Certificate of participation, 24-hour course, final exam passed",
    certificate: "/certificates/climate-and-health-medicine-2026.pdf",
  },
  {
    title: "International Spring School in Global Health",
    organisation: "ISGlobal, Barcelona Institute for Global Health",
    year: 2026,
    date: "2026-05-08",
    kind: "Certificate of participation, held online 23 to 27 March 2026, 10 hours per module",
    modules: [
      { title: "Understanding and assessing the impact of research in society", certificate: "/certificates/isglobal-2026-m2.pdf" },
      { title: "Intersectionality and gender: advancing equity in health research", certificate: "/certificates/isglobal-2026-m3.pdf" },
      { title: "Climate change, sustainable work practices, and green jobs: research methods in occupational health", certificate: "/certificates/isglobal-2026-m5.pdf" },
    ],
  },
  // Attendance at a congress, left out on purpose, with no certificate PDF. Remove the two slashes to show it.
  // { title: "2º Congresso Nacional da Saúde e Ambiente", organisation: "Conselho Português para a Saúde e Ambiente", year: 2026, date: "2026-04-10", kind: "Certificado de presença, 8 to 10 April 2026, Fundação Calouste Gulbenkian, Lisbon" },
];
