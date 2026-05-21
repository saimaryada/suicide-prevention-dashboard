import {
  Activity,
  Clock3,
  HeartPulse,
  PhoneCall,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

export type Confidence = "High" | "Moderate" | "Use Caution" | "Data Unavailable";
export type Status = "Improving" | "Mixed" | "Needs Work" | "Persistent Gap";
export type MetricTrendPoint = {
  year: string;
  value: number;
};
export type DashboardTrendPoint = {
  year: string;
  answerRate: number;
  waitTime: number;
  contactVolume: number;
  edVisits: number;
  followUp: number;
  deaths: number;
};

export const yearOptions = ["2026", "2025", "2024", "2023", "2022"];

export const metricCards = [
  {
    label: "988 answer rate",
    value: "91%",
    change: "+6 pts from 2022",
    status: "Improving" as Status,
    confidence: "High" as Confidence,
    interpretation: "More contacts are being answered before callers disengage.",
    icon: PhoneCall,
    trendLabel: "Answer rate",
    trendUnit: "%",
    trend: [
      { year: "2021", value: 80 },
      { year: "2022", value: 85 },
      { year: "2023", value: 88 },
      { year: "2024", value: 90 },
      { year: "2025", value: 91 },
    ] satisfies MetricTrendPoint[],
  },
  {
    label: "988 average wait time",
    value: "34 sec",
    change: "-18 sec from 2022",
    status: "Improving" as Status,
    confidence: "High" as Confidence,
    interpretation: "Wait times are moving in the right direction, though local variation remains.",
    icon: Clock3,
    trendLabel: "Average wait time",
    trendUnit: " sec",
    trend: [
      { year: "2021", value: 68 },
      { year: "2022", value: 52 },
      { year: "2023", value: 44 },
      { year: "2024", value: 39 },
      { year: "2025", value: 34 },
    ] satisfies MetricTrendPoint[],
  },
  {
    label: "988 contact volume",
    value: "5.2M",
    change: "+23% from 2022",
    status: "Mixed" as Status,
    confidence: "Moderate" as Confidence,
    interpretation: "Higher use may reflect greater awareness and higher demand for timely care.",
    icon: Activity,
    trendLabel: "Contact volume",
    trendUnit: "M",
    trend: [
      { year: "2021", value: 3.7 },
      { year: "2022", value: 4.2 },
      { year: "2023", value: 4.7 },
      { year: "2024", value: 5.0 },
      { year: "2025", value: 5.2 },
    ] satisfies MetricTrendPoint[],
  },
  {
    label: "ED visits for self-harm",
    value: "128 / 100k",
    change: "-4% from 2022",
    status: "Mixed" as Status,
    confidence: "Use Caution" as Confidence,
    interpretation: "Emergency department trends vary by region and may lag reporting cycles.",
    icon: HeartPulse,
    trendLabel: "ED visits",
    trendUnit: " / 100k",
    trend: [
      { year: "2021", value: 137 },
      { year: "2022", value: 133 },
      { year: "2023", value: 131 },
      { year: "2024", value: 129 },
      { year: "2025", value: 128 },
    ] satisfies MetricTrendPoint[],
  },
  {
    label: "Follow-up after crisis or hospitalization",
    value: "62%",
    change: "+3 pts from 2022",
    status: "Needs Work" as Status,
    confidence: "Moderate" as Confidence,
    interpretation: "Transitions from crisis care to ongoing support remain uneven.",
    icon: ShieldCheck,
    trendLabel: "Follow-up",
    trendUnit: "%",
    trend: [
      { year: "2021", value: 53 },
      { year: "2022", value: 59 },
      { year: "2023", value: 60 },
      { year: "2024", value: 61 },
      { year: "2025", value: 62 },
    ] satisfies MetricTrendPoint[],
  },
  {
    label: "Suicide deaths",
    value: "14.1 / 100k",
    change: "Long-term lagging outcome",
    status: "Persistent Gap" as Status,
    confidence: "High" as Confidence,
    interpretation: "A value like 14.1 / 100k means about 14.1 suicide deaths per 100,000 people in the population. This is a long-term lagging outcome and should be interpreted alongside upstream service indicators.",
    icon: TrendingDown,
    trendLabel: "Deaths",
    trendUnit: " / 100k",
    trend: [
      { year: "2021", value: 14.0 },
      { year: "2022", value: 14.2 },
      { year: "2023", value: 14.3 },
      { year: "2024", value: 14.1 },
      { year: "2025", value: 14.1 },
    ] satisfies MetricTrendPoint[],
  },
];

export const trendData: DashboardTrendPoint[] = [
  { year: "2020", answerRate: 78, waitTime: 72, contactVolume: 3.4, edVisits: 139, followUp: 51, deaths: 13.6 },
  { year: "2021", answerRate: 80, waitTime: 68, contactVolume: 3.7, edVisits: 137, followUp: 53, deaths: 14.0 },
  { year: "2022", answerRate: 85, waitTime: 52, contactVolume: 4.2, edVisits: 133, followUp: 59, deaths: 14.2 },
  { year: "2023", answerRate: 88, waitTime: 44, contactVolume: 4.7, edVisits: 131, followUp: 60, deaths: 14.3 },
  { year: "2024", answerRate: 90, waitTime: 39, contactVolume: 5.0, edVisits: 129, followUp: 61, deaths: 14.1 },
  { year: "2025", answerRate: 91, waitTime: 34, contactVolume: 5.2, edVisits: 128, followUp: 62, deaths: 14.1 },
];

export function getTrendForState(stateName: string): DashboardTrendPoint[] {
  const stateIndex = Math.max(stateNames.indexOf(stateName), 0);
  const accessAdjustment = (stateIndex % 7) - 3;
  const waitAdjustment = (stateIndex % 9) - 4;
  const volumeAdjustment = ((stateIndex % 5) - 2) * 0.08;
  const edAdjustment = (stateIndex % 11) - 5;
  const followUpAdjustment = (stateIndex % 6) - 2;
  const deathsAdjustment = ((stateIndex % 9) - 4) * 0.08;

  return trendData.map((point, index) => ({
    year: point.year,
    answerRate: Math.min(97, Math.max(62, point.answerRate + accessAdjustment + index * 0.2)),
    waitTime: Math.max(18, point.waitTime + waitAdjustment - index * 0.3),
    contactVolume: Number(Math.max(0.4, point.contactVolume + volumeAdjustment + index * 0.03).toFixed(1)),
    edVisits: Math.max(72, Math.round(point.edVisits + edAdjustment - index * 0.4)),
    followUp: Math.min(84, Math.max(42, point.followUp + followUpAdjustment + index * 0.15)),
    deaths: Number(Math.max(8.5, point.deaths + deathsAdjustment).toFixed(1)),
  }));
}

export const equityGapData = [
  { group: "Rural", gap: 18, confidence: "Moderate" as Confidence },
  { group: "Youth 15-24", gap: 12, confidence: "Use Caution" as Confidence },
  { group: "Veterans", gap: 21, confidence: "Moderate" as Confidence },
  { group: "AI", gap: 26, confidence: "Use Caution" as Confidence },
  { group: "Black", gap: 9, confidence: "Moderate" as Confidence },
  { group: "Hispanic", gap: 7, confidence: "Moderate" as Confidence },
];

export const geographicHighlights = [
  { region: "Northeast", status: "Improving" as Status, note: "Strong 988 answer-rate gains" },
  { region: "Midwest", status: "Mixed" as Status, note: "Uneven follow-up after discharge" },
  { region: "South", status: "Needs Work" as Status, note: "Higher ED visit burden in several areas" },
  { region: "West", status: "Persistent Gap" as Status, note: "Rural access gaps remain visible" },
];

export type StateMetric = {
  answerRate: string;
  waitTime: string;
  contactVolume: string;
  followUp: string;
  edVisits: string;
  status: Status;
  confidence: Confidence;
  signal: string;
};

const stateNames = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const statusCycle: Status[] = ["Improving", "Mixed", "Needs Work", "Persistent Gap"];
const confidenceCycle: Confidence[] = ["High", "Moderate", "Use Caution", "Moderate"];

export const stateMetrics = Object.fromEntries(
  stateNames.map((name, index) => {
    const status = statusCycle[index % statusCycle.length];
    const answerRate = 84 + ((index * 7) % 12);
    const waitTime = 24 + ((index * 5) % 38);
    const followUp = 54 + ((index * 3) % 18);
    const edVisits = 96 + ((index * 11) % 58);
    const contactVolume = `${(38 + ((index * 13) % 86)).toLocaleString()}k`;

    return [
      name,
      {
        answerRate: `${answerRate}%`,
        waitTime: `${waitTime} sec`,
        contactVolume,
        followUp: `${followUp}%`,
        edVisits: `${edVisits} / 100k`,
        status,
        confidence: confidenceCycle[index % confidenceCycle.length],
        signal:
          status === "Improving"
            ? "Crisis access indicators are moving in a favorable direction."
            : status === "Mixed"
              ? "Access is improving, but follow-up or ED patterns need review."
              : status === "Needs Work"
                ? "Policy attention may be needed for transitions after crisis care."
                : "Persistent gaps suggest a need for targeted service-capacity review.",
      },
    ];
  }),
) as Record<string, StateMetric>;

export const policyPriorities = [
  {
    priority: "Crisis line capacity",
    metric: "988 answer rate and wait time",
    current: "91%; 34 sec",
    status: "Improving" as Status,
    confidence: "High" as Confidence,
    policySignal: "Sustain workforce and routing investments.",
  },
  {
    priority: "Crisis stabilization and ED diversion",
    metric: "ED visits for self-harm",
    current: "128 / 100k",
    status: "Mixed" as Status,
    confidence: "Use Caution" as Confidence,
    policySignal: "Compare service capacity with emergency department burden.",
  },
  {
    priority: "Care transitions",
    metric: "Follow-up after crisis or hospitalization",
    current: "62%",
    status: "Needs Work" as Status,
    confidence: "Moderate" as Confidence,
    policySignal: "Prioritize warm handoffs and post-discharge contact.",
  },
  {
    priority: "Long-term outcomes",
    metric: "Suicide deaths",
    current: "14.1 / 100k",
    status: "Persistent Gap" as Status,
    confidence: "High" as Confidence,
    policySignal: "Use as a lagging marker, not a stand-alone performance measure.",
  },
];

export const resources = [
  { title: "National Action Alliance for Suicide Prevention", href: "https://theactionalliance.org/", type: "National strategy partner" },
  { title: "Suicide Prevention Resource Center", href: "https://sprc.org/", type: "Implementation resources" },
  { title: "988 Lifeline Network Metrics", href: "https://988lifeline.org/our-network/", type: "Crisis services metrics" },
  { title: "CDC WISQARS", href: "https://wisqars.cdc.gov/", type: "Injury data" },
  { title: "CDC WONDER", href: "https://wonder.cdc.gov/", type: "Mortality data" },
  { title: "CDC YRBS", href: "https://www.cdc.gov/yrbs/", type: "Youth risk data" },
  { title: "SAMHSA NSDUH", href: "https://www.samhsa.gov/data/data-we-collect/nsduh-national-survey-drug-use-and-health", type: "Behavioral health survey" },
  { title: "Colorado COVDRS Suicide Dashboard", href: "https://cdphe.colorado.gov/suicide-data-dashboard", type: "State dashboard example" },
  { title: "Healthy People 2030", href: "https://health.gov/healthypeople", type: "National objectives" },
  { title: "Arizona Opioid Dashboard", href: "https://www.azdhs.gov/opioid/", type: "Public dashboard example" },
  { title: "CFSR Data Profile Dashboard", href: "https://cwoutcomes.acf.hhs.gov/cwodatasite/", type: "Federal profile example" },
  { title: "Health Policy Ohio Health Value Dashboard", href: "https://www.healthpolicyohio.org/health-value-dashboard/", type: "Policy dashboard example" },
];
