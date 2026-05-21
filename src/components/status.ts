import type { Confidence, Status } from "../data/mockMetrics";

export const statusStyles: Record<Status, string> = {
  Improving: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  Mixed: "bg-sky-50 text-sky-800 ring-sky-200",
  "Needs Work": "bg-amber-50 text-amber-800 ring-amber-200",
  "Persistent Gap": "bg-rose-50 text-rose-800 ring-rose-200",
};

export const confidenceStyles: Record<Confidence, string> = {
  High: "bg-slate-100 text-slate-800",
  Moderate: "bg-blue-50 text-blue-800",
  "Use Caution": "bg-amber-50 text-amber-800",
  "Data Unavailable": "bg-zinc-100 text-zinc-600",
};
