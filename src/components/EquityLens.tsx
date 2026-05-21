import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { equityGapData } from "../data/mockMetrics";
import { confidenceStyles } from "./status";

export function EquityLens() {
  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-public-teal">
          Equity Lens
        </p>
        <h2 className="mt-1 text-xl font-semibold text-ink">Gaps in timely follow-up care</h2>
        <p className="mt-2 text-sm text-muted">
          Mock percentage-point gaps show groups and places where transitions after crisis
          events may need closer policy attention.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={equityGapData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#e4e8f0" strokeDasharray="4 4" vertical={false} />
                <XAxis dataKey="group" tickLine={false} axisLine={false} interval={0} />
                <YAxis
                  domain={[0, 30]}
                  label={{
                    value: "Gap from benchmark",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: "#637083", fontSize: 12 },
                  }}
                  tickFormatter={(value) => `${value} pts`}
                  tickLine={false}
                  axisLine={false}
                />
                <ReferenceLine
                  y={0}
                  stroke="#253042"
                  strokeWidth={1.5}
                  label={{ value: "No gap baseline", position: "insideBottomLeft", fill: "#637083", fontSize: 12 }}
                />
                <Tooltip
                  formatter={(value: number | string) => [`${value} percentage points`, "Gap"]}
                  contentStyle={{ borderColor: "#d9dee8", borderRadius: "8px" }}
                />
                <Bar dataKey="gap" fill="#2d7f7b" radius={[6, 6, 0, 0]} background={{ fill: "#eef2f6", radius: 6 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs text-muted">
            Baseline represents no follow-up gap. Taller bars show larger percentage-point gaps from the benchmark.
          </p>
        </div>
        <div className="space-y-3">
          {equityGapData.map((item) => (
            <div className="rounded-lg border border-line bg-panel p-3" key={item.group}>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-ink">{item.group}</p>
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${confidenceStyles[item.confidence]}`}>
                  {item.confidence}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{item.gap} point follow-up gap</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
