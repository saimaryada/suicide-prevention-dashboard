import type { LucideIcon } from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Confidence, MetricTrendPoint, Status } from "../data/mockMetrics";
import { confidenceStyles, statusStyles } from "./status";

type MetricCardProps = {
  label: string;
  value: string;
  change: string;
  status: Status;
  confidence: Confidence;
  interpretation: string;
  icon: LucideIcon;
  trendLabel: string;
  trendUnit: string;
  trend: MetricTrendPoint[];
};

export function MetricCard({
  label,
  value,
  change,
  status,
  confidence,
  interpretation,
  icon: Icon,
  trendLabel,
  trendUnit,
  trend,
}: MetricCardProps) {
  const firstYear = trend[0]?.year;
  const lastYear = trend[trend.length - 1]?.year;

  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-muted">{label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-normal text-ink">{value}</p>
        </div>
        <div className="rounded-md bg-panel p-2 text-public-teal">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-2 text-sm text-muted">{change}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusStyles[status]}`}>
          {status}
        </span>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${confidenceStyles[confidence]}`}>
          Confidence: {confidence}
        </span>
      </div>
      <div className="mt-5 rounded-lg border border-line bg-panel px-3 py-2">
        <div className="mb-1 flex items-center justify-between gap-3 text-xs">
          <p className="font-semibold text-muted">Five-year view</p>
          <p className="text-muted">
            {firstYear}-{lastYear}
          </p>
        </div>
        <div className="h-20">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trend} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
              <XAxis dataKey="year" hide />
              <YAxis dataKey="value" hide domain={["dataMin", "dataMax"]} />
              <Tooltip
                cursor={{ stroke: "#d9dee8", strokeWidth: 1 }}
                formatter={(chartValue: number | string) => [`${chartValue}${trendUnit}`, trendLabel]}
                labelFormatter={(year) => `Year ${year}`}
                contentStyle={{
                  borderColor: "#d9dee8",
                  borderRadius: "8px",
                  boxShadow: "0 10px 24px rgba(31,58,95,.12)",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2d7f7b"
                strokeWidth={2.5}
                dot={{ r: 2.5, fill: "#ffffff", stroke: "#2d7f7b", strokeWidth: 1.5 }}
                activeDot={{ r: 4, fill: "#1f3a5f", stroke: "#ffffff", strokeWidth: 2 }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-ink">{interpretation}</p>
    </article>
  );
}
