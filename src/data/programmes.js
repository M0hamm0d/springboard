// Central programme data for the Programmes pages.
// Amounts, diet dates and any policy items marked PLACEHOLDER must be
// confirmed against ICAN's official publications before launch.

export const ICAN_EXAM_CALENDAR_URL =
  "https://www.icanig.org/students/examination-calendar";
export const ICAN_SYLLABUS_URL = "https://www.icanig.org/students/syllabus";

// Placeholder WhatsApp contact (V2 replaces this with the Find-Your-Path quiz)
export const WHATSAPP_NUMBER = "2340000000000";

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const CLASS_OPTIONS = [
  {
    name: "Physical Classes",
    desc: "Held at our Tanke, Ilorin study centre — in-person lectures, mocks and tutor access.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/></svg>`,
  },
  {
    name: "Online Classes",
    desc: "Live virtual lectures with full tutor interaction — never a recording-only experience.",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  },
];

export const programmes = [
  {
    slug: "ats-1",
    name: "ATS I",
    fullTitle: "Accounting Technicians Scheme, Part I",
    track: "ATSWA",
    stage: "Part 1",
    category: "ATSWA Stage 1",
    whoFor:
      "For students who have completed WAEC/NECO (or equivalent) and want to begin their journey into professional accounting.",
    entryRequirements: [
      "Five (5) credit passes at SSCE/WAEC/NECO — including English Language and Mathematics — obtained at not more than two sittings.",
      "Current ICAN student registration for the ATSWA scheme.",
    ],
    subjects: [
      "Basic Accounting Processes & Systems",
      "Business Law",
      "Economics",
    ],
    learn:
      "This level builds your analytical foundation: how transactions are recorded and summarised, how the legal environment frames business decisions, and how economic forces shape markets — the vocabulary every accountant uses daily.",
    materials: [
      "Full ICAN study packs",
      "Lecture notes and slide decks",
      "Past questions with worked solutions",
      "Recorded class sessions for revision",
    ],
    fees: {
      full: null, // PLACEHOLDER: ₦ amount per level
      perSubject: null, // PLACEHOLDER
      registration: null, // PLACEHOLDER
    },
    faqs: [
      {
        q: "Can I skip ATS I if I already have an OND?",
        a: "Depending on your qualification, ICAN may grant exemptions at ATS level. Exemptions are confirmed by ICAN directly, so bring your certificate and we'll guide you through the exemption application.",
      },
      {
        q: "How long does ATS I take?",
        a: "Most students complete one level per diet with our structured lectures. With three diets a year, motivated candidates clear ATS I in their first attempt.",
      },
      {
        q: "Can I combine ATS with a full-time job?",
        a: "Yes — our weekend and evening batches, plus online classes, are designed around working students.",
      },
    ],
  },
  {
    slug: "ats-2",
    name: "ATS II",
    fullTitle: "Accounting Technicians Scheme, Part II",
    track: "ATSWA",
    stage: "Part 2",
    category: "ATSWA Stage 2",
    whoFor:
      "For continuing AAT students who have completed ATS I and are building toward technician status.",
    entryRequirements: [
      "Completion of ATS I (all papers passed or exempted).",
      "Current ICAN student registration for the ATSWA scheme.",
    ],
    subjects: [
      "Public Sector Accounting",
      "Quantitative Analysis",
      "Business Communication & Information Technology",
    ],
    learn:
      "You broaden beyond the private sector: how government accounts work, the quantitative tools behind financial decisions, and the professional communication and IT skills modern finance roles demand.",
    materials: [
      "Full ICAN study packs",
      "Lecture notes and slide decks",
      "Past questions with worked solutions",
      "Recorded class sessions for revision",
    ],
    fees: { full: null, perSubject: null, registration: null },
    faqs: [
      {
        q: "Can I take ATS II and ATS III papers in the same diet?",
        a: "ICAN allows combining levels subject to its current examination rules. Many of our students do — we'll help you plan a realistic paper combination.",
      },
      {
        q: "What happens after ATS III?",
        a: "You qualify as an AAT and can proceed into the ICAN Professional pathway, typically starting at Foundation.",
      },
    ],
  },
  {
    slug: "ats-3",
    name: "ATS III",
    fullTitle: "Accounting Technicians Scheme, Part III",
    track: "ATSWA",
    stage: "Part 3",
    category: "ATSWA Stage 3",
    whoFor:
      "For final-stage AAT students clearing the last papers before technician certification and the Professional pathway.",
    entryRequirements: [
      "Completion of ATS II (all papers passed or exempted).",
      "Current ICAN student registration for the ATSWA scheme.",
    ],
    subjects: ["Principles of Auditing", "Cost Accounting", "Investment & Finance"],
    learn:
      "The final AAT stage introduces professional-level thinking: how audits assure financial statements, how costs drive decisions, and how investments and finance shape an organisation's future.",
    materials: [
      "Full ICAN study packs",
      "Lecture notes and slide decks",
      "Past questions with worked solutions",
      "Recorded class sessions for revision",
    ],
    fees: { full: null, perSubject: null, registration: null },
    faqs: [
      {
        q: "Do I become an AAT after ATS III?",
        a: "Yes — after passing all ATSWA papers and meeting ICAN's certification requirements, you're inducted as an Associate Accounting Technician (AAT).",
      },
      {
        q: "Can I move straight into the Professional level after ATS III?",
        a: "AAT holders enter the ICAN Professional pathway. Your tutor will map the best entry point and any exemptions with you.",
      },
    ],
  },
  {
    slug: "foundation",
    name: "Foundation",
    fullTitle: "Professional Qualification — Foundation Level",
    track: "Professional",
    stage: "Level 1",
    category: "ICAN Stage 1",
    whoFor:
      "The entry point into the Professional pathway for degree/HND holders and qualified AATs beginning professional accountancy.",
    entryRequirements: [
      "A university degree or HND (any discipline), or the full AAT qualification.",
      "Current ICAN professional student registration.",
      "PLACEHOLDER: confirm current entry/exemption rules on ICAN's official syllabus page.",
    ],
    subjects: [
      "Financial Accounting",
      "Management Information",
      "Quantitative Techniques in Business",
      "Business Law",
    ],
    learn:
      "Foundation establishes the professional core: rigorous financial accounting, the information managers rely on, quantitative reasoning, and the legal frameworks of business — setting the tone for the entire Professional pathway.",
    materials: [
      "Full ICAN study packs",
      "Lecture notes and slide decks",
      "Past questions with worked solutions",
      "Recorded class sessions for revision",
    ],
    fees: { full: null, perSubject: null, registration: null },
    faqs: [
      {
        q: "I'm an AAT holder — do I start at Foundation?",
        a: "Yes, AATs enter the Professional pathway at Foundation, with possible paper exemptions depending on ICAN's current rules.",
      },
      {
        q: "My degree isn't in accounting. Can I still enrol?",
        a: "Absolutely — ICAN's graduate entry accepts non-accounting degrees. Foundation assumes no prior accounting knowledge, and our lectures start from first principles.",
      },
      {
        q: "How many papers can I write per diet?",
        a: "That depends on ICAN's current examination regulations — we'll help you pick a combination you can pass decisively.",
      },
    ],
  },
  {
    slug: "skills",
    name: "Skills",
    fullTitle: "Professional Qualification — Skills Level",
    track: "Professional",
    stage: "Level 2",
    category: "ICAN Stage 2",
    whoFor:
      "For students past Foundation deepening technical competence across reporting, performance, taxation and assurance.",
    entryRequirements: [
      "Completion of the Foundation level (all papers passed or exempted).",
      "Current ICAN professional student registration.",
      "PLACEHOLDER: confirm current entry/exemption rules on ICAN's official syllabus page.",
    ],
    subjects: [
      "Financial Reporting",
      "Performance Management",
      "Taxation",
      "Audit & Assurance",
      "Public Sector Accounting & Finance",
    ],
    learn:
      "Skills converts knowledge into professional capability: preparing and interrogating full financial statements, managing performance and tax obligations, and understanding assurance and the public sector context.",
    materials: [
      "Full ICAN study packs",
      "Lecture notes and slide decks",
      "Past questions with worked solutions",
      "Recorded class sessions for revision",
    ],
    fees: { full: null, perSubject: null, registration: null },
    faqs: [
      {
        q: "Is Skills harder than Foundation?",
        a: "It's more applied — questions are longer and more integrated. Our mock exams and marking practice are built specifically for that step-up.",
      },
      {
        q: "Can I spread Skills papers across diets?",
        a: "Yes. Many working professionals take two papers per diet. We'll help you sequence them sensibly.",
      },
    ],
  },
  {
    slug: "professional",
    name: "Professional",
    fullTitle: "Professional Qualification — Professional Level",
    track: "Professional",
    stage: "Level 3",
    category: "Final Stage",
    whoFor:
      "The final stage before ICAN induction and certification — for candidates ready to qualify as chartered accountants.",
    entryRequirements: [
      "Completion of the Skills level (all papers passed or exempted).",
      "Current ICAN professional student registration.",
      "PLACEHOLDER: confirm current entry/exemption rules on ICAN's official syllabus page.",
    ],
    subjects: [
      "Corporate Reporting",
      "Strategic Financial Management",
      "Advanced Audit & Assurance",
      "Advanced Taxation",
    ],
    learn:
      "The summit of the qualification: consolidated corporate reporting, strategic financial decision-making, advanced assurance and taxation — the competencies expected of a chartered accountant on day one.",
    materials: [
      "Full ICAN study packs",
      "Lecture notes and slide decks",
      "Past questions with worked solutions",
      "Recorded class sessions for revision",
      "Intensive case-study workshops",
    ],
    fees: { full: null, perSubject: null, registration: null },
    faqs: [
      {
        q: "What happens after I pass the Professional level?",
        a: "You proceed to ICAN induction as a chartered accountant (ACA), including the required professional ethics and work-experience components ICAN specifies.",
      },
      {
        q: "How intense is the final level?",
        a: "It demands the most preparation, which is why our Professional cohorts get smaller classes, senior tutors and extra mock cycles.",
      },
    ],
  },
];

// Shared class options for every programme
export const classOptions = CLASS_OPTIONS;

export function getProgrammeBySlug(slug) {
  return programmes.find((p) => p.slug === slug) || null;
}

export function getNeighbourProgrammes(slug) {
  const index = programmes.findIndex((p) => p.slug === slug);
  if (index === -1) return [];
  return programmes.filter((p) => p.slug !== slug);
}
