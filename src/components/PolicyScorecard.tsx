import { policyPriorities } from "../data/mockMetrics";
import { confidenceStyles, statusStyles } from "./status";

export function PolicyScorecard() {
  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-public-teal">
          Policy Priority Scorecard
        </p>
        <h2 className="mt-1 text-xl font-semibold text-ink">Signals for decision-makers</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr className="text-muted">
              <th className="border-b border-line pb-3 pr-4 font-semibold">Priority</th>
              <th className="border-b border-line pb-3 pr-4 font-semibold">Metric</th>
              <th className="border-b border-line pb-3 pr-4 font-semibold">Current</th>
              <th className="min-w-28 border-b border-line pb-3 pr-4 font-semibold">Status</th>
              <th className="border-b border-line pb-3 pr-4 font-semibold">Data confidence</th>
              <th className="border-b border-line pb-3 font-semibold">Policy signal</th>
            </tr>
          </thead>
          <tbody>
            {policyPriorities.map((row) => (
              <tr className="align-top" key={row.priority}>
                <td className="border-b border-line py-4 pr-4 font-semibold text-ink">{row.priority}</td>
                <td className="border-b border-line py-4 pr-4 text-muted">{row.metric}</td>
                <td className="border-b border-line py-4 pr-4 text-ink">{row.current}</td>
                <td className="min-w-28 border-b border-line py-4 pr-4">
                  <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusStyles[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="border-b border-line py-4 pr-4">
                  <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${confidenceStyles[row.confidence]}`}>
                    {row.confidence}
                  </span>
                </td>
                <td className="border-b border-line py-4 text-muted">{row.policySignal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
