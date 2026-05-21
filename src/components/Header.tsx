import { Download, FileText } from "lucide-react";

const audiences = [
  "Policy View",
  "Implementation View",
  "Research/Data View",
  "Community View",
  "Your stories",
];

type HeaderProps = {
  activeAudience: string;
  onAudienceChange: (audience: string) => void;
  onExportPdf: () => void;
};

export function Header({ activeAudience, onAudienceChange, onExportPdf }: HeaderProps) {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-public-teal">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Prototype dashboard
          </div>
          <h1 className="text-2xl font-semibold tracking-normal text-ink lg:text-3xl">
            National Strategy for Suicide Prevention Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted lg:text-base">
            Strategic Direction #2: Healthcare and Crisis Services
          </p>
        </div>
        <div className="flex flex-col gap-3 print:hidden">
          <div className="flex flex-wrap gap-2" aria-label="Audience view">
            {audiences.map((audience) => (
              <button
                className={`rounded-md border px-3 py-2 text-sm font-medium transition ${
                  audience === activeAudience
                    ? "border-public-navy bg-public-navy text-white"
                    : "border-line bg-white text-ink hover:border-public-teal"
                }`}
                key={audience}
                onClick={() => onAudienceChange(audience)}
                type="button"
              >
                {audience}
              </button>
            ))}
          </div>
          <button
            className="inline-flex w-fit items-center gap-2 rounded-md border border-line bg-panel px-3 py-2 text-sm font-semibold text-ink"
            onClick={onExportPdf}
            type="button"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Export PDF
          </button>
        </div>
      </div>
    </header>
  );
}
