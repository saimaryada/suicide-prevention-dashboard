import { useMemo, useState, type MouseEvent } from "react";
import { geoAlbersUsa, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import statesTopoJson from "us-atlas/states-10m.json";
import { Map } from "lucide-react";
import { geographicHighlights, stateMetrics, type StateMetric } from "../data/mockMetrics";
import { statusStyles } from "./status";

type TooltipState = {
  name: string;
  metrics: StateMetric;
  x: number;
  y: number;
};

type StateFeature = {
  id?: string | number;
  properties: {
    name: string;
  };
};

const mapFillByStatus = {
  Improving: "#bfe4d5",
  Mixed: "#cce2f6",
  "Needs Work": "#f7dc9c",
  "Persistent Gap": "#efc5c5",
};

const statesTopology = statesTopoJson as unknown as {
  objects: {
    states: unknown;
  };
};

type GeographyPanelProps = {
  selectedState: string | null;
  onStateSelect: (stateName: string) => void;
};

export function GeographyPanel({ selectedState, onStateSelect }: GeographyPanelProps) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const stateFeatures = useMemo(
    () =>
      (
        feature(statesTopology as never, statesTopology.objects.states as never) as unknown as {
          features: StateFeature[];
        }
      ).features,
    [],
  );
  const path = useMemo(
    () => geoPath(geoAlbersUsa().scale(980).translate([400, 245])),
    [],
  );

  function updateTooltip(
    event: MouseEvent<SVGPathElement>,
    name: string,
    metrics: StateMetric,
  ) {
    const bounds = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
    setTooltip({
      name,
      metrics,
      x: event.clientX - (bounds?.left ?? 0),
      y: event.clientY - (bounds?.top ?? 0),
    });
  }

  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-public-teal">
            Geographic Variation
          </p>
          <h2 className="mt-1 text-xl font-semibold text-ink">Where service access differs</h2>
        </div>
        <Map className="h-6 w-6 text-public-teal" aria-hidden="true" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative min-h-72 overflow-hidden rounded-lg border border-line bg-panel p-3">
          <svg
            className="h-full min-h-72 w-full"
            viewBox="0 0 800 500"
            role="img"
            aria-label="United States state map with mock crisis service metrics"
          >
            {stateFeatures.map((geo) => {
              const name = geo.properties.name;
              const metrics = stateMetrics[name];
              const isActive = tooltip?.name === name || selectedState === name;

              return (
                <path
                  aria-label={metrics ? `${name} metrics` : name}
                  className="transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-public-teal"
                  d={path(geo as unknown as Parameters<typeof path>[0]) ?? ""}
                  fill={metrics ? (isActive ? "#2d7f7b" : mapFillByStatus[metrics.status]) : "#e5e7eb"}
                  key={geo.id ?? name}
                  onBlur={() => setTooltip(null)}
                  onFocus={() => {
                    if (metrics) {
                      setTooltip({ name, metrics, x: 390, y: 110 });
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  onMouseMove={(event) => {
                    if (metrics) {
                      updateTooltip(event, name, metrics);
                    }
                  }}
                  onClick={() => {
                    if (metrics) {
                      onStateSelect(name);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (metrics && (event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      onStateSelect(name);
                    }
                  }}
                  stroke="#ffffff"
                  strokeWidth={isActive ? 1 : 0.65}
                  style={{ cursor: metrics ? "pointer" : "default" }}
                  tabIndex={metrics ? 0 : -1}
                />
              );
            })}
          </svg>
          {tooltip && (
            <div
              className="pointer-events-none absolute z-10 w-72 rounded-lg border border-line bg-white p-4 text-sm shadow-soft"
              style={{
                left: `min(${tooltip.x + 16}px, calc(100% - 19rem))`,
                top: `min(${tooltip.y + 16}px, calc(100% - 13rem))`,
              }}
            >
              <div className="absolute -left-1 top-4 h-2 w-2 rotate-45 border-b border-l border-line bg-white" />
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-ink">{tooltip.name}</p>
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ring-1 ${statusStyles[tooltip.metrics.status]}`}>
                  {tooltip.metrics.status}
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div>
                  <dt className="text-muted">988 answer rate</dt>
                  <dd className="font-semibold text-ink">{tooltip.metrics.answerRate}</dd>
                </div>
                <div>
                  <dt className="text-muted">Avg wait time</dt>
                  <dd className="font-semibold text-ink">{tooltip.metrics.waitTime}</dd>
                </div>
                <div>
                  <dt className="text-muted">Contact volume</dt>
                  <dd className="font-semibold text-ink">{tooltip.metrics.contactVolume}</dd>
                </div>
                <div>
                  <dt className="text-muted">Follow-up care</dt>
                  <dd className="font-semibold text-ink">{tooltip.metrics.followUp}</dd>
                </div>
                <div>
                  <dt className="text-muted">ED self-harm visits</dt>
                  <dd className="font-semibold text-ink">{tooltip.metrics.edVisits}</dd>
                </div>
                <div>
                  <dt className="text-muted">Confidence</dt>
                  <dd className="font-semibold text-ink">{tooltip.metrics.confidence}</dd>
                </div>
              </dl>
              <p className="mt-3 text-xs leading-5 text-muted">{tooltip.metrics.signal}</p>
            </div>
          )}
          <div className="mt-2 flex flex-wrap gap-2 px-1 text-xs text-muted">
            {Object.entries(mapFillByStatus).map(([status, color]) => (
              <span className="inline-flex items-center gap-1.5" key={status}>
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
                {status}
              </span>
            ))}
          </div>
          <p className="px-1 pt-2 text-xs text-muted">
            Hover or focus a state to view mock crisis-service metrics. County layers can be added later.
          </p>
          <noscript>
            <div className="rounded-md border border-line bg-white px-4 py-3 text-center shadow-soft">
              Interactive state metrics require JavaScript.
            </div>
          </noscript>
        </div>
        <div className="space-y-3">
          {geographicHighlights.map((item) => (
            <div className="rounded-lg border border-line bg-panel p-4" key={item.region}>
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-ink">{item.region}</p>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusStyles[item.status]}`}>
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
