import { RotateCcw } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getTrendForState, trendData } from "../data/mockMetrics";

type TrendChartProps = {
  selectedState: string | null;
  onClearState: () => void;
};

const trendLines = [
  { key: "answerRate", name: "988 answer rate", unit: "%", yAxisId: "percent", stroke: "#2d7f7b" },
  {
    key: "followUp",
    name: "Follow-up after crisis or hospitalization",
    unit: "%",
    yAxisId: "percent",
    stroke: "#1f3a5f",
  },
  {
    key: "edVisits",
    name: "ED self-harm visits",
    unit: " / 100k",
    yAxisId: "rate",
    stroke: "#9f5f80",
  },
  {
    key: "deaths",
    name: "Suicide deaths",
    unit: " / 100k",
    yAxisId: "rate",
    stroke: "#b45f5f",
  },
];

export function TrendChart({ selectedState, onClearState }: TrendChartProps) {
  const chartData = selectedState ? getTrendForState(selectedState) : trendData;
  const scopeLabel = selectedState ? `${selectedState} Trend` : "National Trend";

  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-public-teal">
            {scopeLabel}
          </p>
          <h2 className="mt-1 text-xl font-semibold text-ink">
            Healthcare and crisis-service metrics, 2020-2025
          </h2>
        </div>
        <div className="flex max-w-xl flex-col gap-3 lg:items-end">
          <p className="text-sm text-muted lg:text-right">
            {selectedState
              ? `Mock trend series are filtered to ${selectedState} after selecting the state on the map. Percent metrics use the left axis; rates per 100,000 use the right axis.`
              : "This view compares percentage-based access and follow-up indicators on the left axis and rates per 100,000 on the right axis. Metrics with different units, such as wait time and contact volume, are shown above panels to avoid misleading comparisons."}
          </p>
          {selectedState && (
            <button
              className="inline-flex w-fit items-center gap-2 rounded-md border border-line bg-panel px-3 py-2 text-sm font-semibold text-ink transition hover:border-public-teal hover:bg-white"
              onClick={onClearState}
              type="button"
            >
              <RotateCcw className="h-4 w-4 text-public-teal" aria-hidden="true" />
              Show national view
            </button>
          )}
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 24, left: 0, bottom: 12 }}>
            <CartesianGrid stroke="#e4e8f0" strokeDasharray="4 4" />
            <XAxis dataKey="year" tickLine={false} axisLine={false} />
            <YAxis
              yAxisId="percent"
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="rate"
              orientation="right"
              tickFormatter={(value) => `${value}/100k`}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              formatter={(value: number | string, name, item) => {
                const line = trendLines.find((trendLine) => trendLine.key === item.dataKey);
                return [`${value}${line?.unit ?? ""}`, name];
              }}
              contentStyle={{
                borderColor: "#d9dee8",
                borderRadius: "8px",
                boxShadow: "0 12px 30px rgba(31,58,95,.12)",
              }}
            />
            <Legend wrapperStyle={{ color: "#637083", fontSize: 12, paddingTop: 14 }} />
            {trendLines.map((line) => (
              <Line
                dataKey={line.key}
                dot={{ r: 4 }}
                key={line.key}
                name={line.name}
                stroke={line.stroke}
                strokeWidth={3}
                type="monotone"
                yAxisId={line.yAxisId}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-xs text-muted">
        Data integration placeholder: connect validated 988, claims, hospital discharge,
        surveillance, and mortality feeds here when source agreements are finalized.
      </p>
    </section>
  );
}
