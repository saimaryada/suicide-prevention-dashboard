import { ExternalLink } from "lucide-react";
import { resources } from "../data/mockMetrics";

export function ResourceLinks() {
  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-public-teal">
          Actions, Resources, and Related Tools
        </p>
        <h2 className="mt-1 text-xl font-semibold text-ink">Reference points for the next phase</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <a
            className="group rounded-lg border border-line bg-panel p-4 transition hover:border-public-teal hover:bg-white"
            href={resource.href}
            key={resource.title}
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold leading-6 text-ink">{resource.title}</p>
                <p className="mt-1 text-sm text-muted">{resource.type}</p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted group-hover:text-public-teal" aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
