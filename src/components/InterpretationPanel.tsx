import { Lightbulb } from "lucide-react";

export function InterpretationPanel() {
  return (
    <section>
      <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <div className="mb-3 flex items-center gap-2 text-public-teal">
          <Lightbulb className="h-5 w-5" aria-hidden="true" />
          <p className="text-sm font-semibold uppercase tracking-[0.08em]">What This Means</p>
        </div>
        <h2 className="text-xl font-semibold text-ink">Plain-language interpretation for policy makers</h2>
        <p className="mt-4 text-base leading-7 text-ink">
          The data suggest that access to crisis services is improving overall, but
          follow-up care after crisis events remains uneven across groups and regions.
        </p>
      </div>
    </section>
  );
}
