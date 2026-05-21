import { CalendarDays, MapPin } from "lucide-react";
import { yearOptions } from "../data/mockMetrics";

export function FilterBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-5">
      <div className="flex flex-col gap-4 rounded-lg border border-line bg-white p-4 shadow-soft lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-3xl text-sm text-muted">
          Using static mock data to demonstrate dashboard structure,
          audience pathways, visual design, and interactivity. In a real implementation, this data would be dynamically fetched from an API or database, allowing for real-time updates and user-specific filtering based on geography and year.
        </p>
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center gap-2 rounded-md border border-line bg-panel px-3 py-2 text-sm text-ink">
            <MapPin className="h-4 w-4 text-public-teal" aria-hidden="true" />
            <span className="sr-only">Geography</span>
            <select className="bg-transparent outline-none" defaultValue="United States">
              <option>United States</option>
              <option>State</option>
              <option>County</option>
            </select>
          </label>
          <label className="flex items-center gap-2 rounded-md border border-line bg-panel px-3 py-2 text-sm text-ink">
            <CalendarDays className="h-4 w-4 text-public-teal" aria-hidden="true" />
            <span className="sr-only">Year</span>
            <select className="bg-transparent outline-none" defaultValue="2026">
              {yearOptions.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}
