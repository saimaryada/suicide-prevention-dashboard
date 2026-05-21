import { useState } from "react";
import { DashboardChatbot } from "./components/DashboardChatbot";
import { FilterBar } from "./components/FilterBar";
import { GeographyPanel } from "./components/GeographyPanel";
import { Header } from "./components/Header";
import { InterpretationPanel } from "./components/InterpretationPanel";
import { MetricCard } from "./components/MetricCard";
import { PolicyScorecard } from "./components/PolicyScorecard";
import { ResourceLinks } from "./components/ResourceLinks";
import { TrendChart } from "./components/TrendChart";
import { EquityLens } from "./components/EquityLens";
import { metricCards } from "./data/mockMetrics";
import { YourStories } from "./components/YourStories";
import type { StoryProfile } from "./data/storyProfiles";

export default function App() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [activeAudience, setActiveAudience] = useState("Policy View");
  const [selectedStory, setSelectedStory] = useState<StoryProfile | null>(null);

  function handleAudienceChange(audience: string) {
    setActiveAudience(audience);

    if (audience !== "Your stories") {
      setSelectedStory(null);
    }
  }

  function handleExportPdf() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-[#eef2f6]">
      <Header
        activeAudience={activeAudience}
        onAudienceChange={handleAudienceChange}
        onExportPdf={handleExportPdf}
      />
      {activeAudience === "Your stories" ? (
        <YourStories
          onBackToStories={() => setSelectedStory(null)}
          onSelectStory={setSelectedStory}
          selectedStory={selectedStory}
        />
      ) : (
        <>
          <FilterBar />
          <main className="mx-auto max-w-7xl space-y-6 px-6 py-6">
            <section aria-labelledby="executive-snapshot">
              <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-public-teal">
                    Executive Snapshot
                  </p>
                  <h2 id="executive-snapshot" className="mt-1 text-2xl font-semibold text-ink">
                    Current signals across healthcare and crisis services
                  </h2>
                </div>
                <p className="max-w-2xl text-sm text-muted">
                  A policy-first view of access, timeliness, follow-up, emergency care,
                  long-term outcomes, and equity patterns.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {metricCards.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </div>
            </section>
            <TrendChart selectedState={selectedState} onClearState={() => setSelectedState(null)} />
            <GeographyPanel selectedState={selectedState} onStateSelect={setSelectedState} />
            <PolicyScorecard />
            <EquityLens />
            <InterpretationPanel />
            <ResourceLinks />
          </main>
        </>
      )}
      <DashboardChatbot />
    </div>
  );
}
