import { ArrowLeft, MapPin } from "lucide-react";
import { storyProfiles, type StoryProfile } from "../data/storyProfiles";

type YourStoriesProps = {
  selectedStory: StoryProfile | null;
  onSelectStory: (story: StoryProfile) => void;
  onBackToStories: () => void;
};

export function YourStories({
  selectedStory,
  onSelectStory,
  onBackToStories,
}: YourStoriesProps) {
  if (selectedStory) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-6">
        <button
          className="mb-4 inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-ink transition hover:border-public-teal"
          onClick={onBackToStories}
          type="button"
        >
          <ArrowLeft className="h-4 w-4 text-public-teal" aria-hidden="true" />
          Back to stories
        </button>
        <article className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
          <img
            alt={`${selectedStory.name} portrait`}
            className="h-80 w-full object-cover"
            src={selectedStory.imageUrl}
          />
          <div className="p-6">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="font-semibold text-public-teal">{selectedStory.role}</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {selectedStory.location}
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-ink">{selectedStory.name}'s story</h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-ink">{selectedStory.story}</p>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <section className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-public-teal">
          Your Stories
        </p>
        <h2 className="mt-1 text-2xl font-semibold text-ink">
          People behind the healthcare and crisis-service measures
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
          These fictional composite cards demonstrate how narrative content could
          help users understand what crisis response, follow-up care, and access
          gaps can mean in real life.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {storyProfiles.map((story) => (
          <button
            className="overflow-hidden rounded-lg border border-line bg-white text-left shadow-soft transition hover:-translate-y-0.5 hover:border-public-teal"
            key={story.id}
            onClick={() => onSelectStory(story)}
            type="button"
          >
            <img alt={`${story.name} portrait`} className="h-44 w-full object-cover" src={story.imageUrl} />
            <div className="p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="font-semibold text-public-teal">{story.role}</span>
                <span>{story.location}</span>
              </div>
              <h3 className="text-lg font-semibold text-ink">{story.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{story.summary}</p>
              <p className="mt-4 text-sm font-semibold text-public-teal">Read full story</p>
            </div>
          </button>
        ))}
      </section>
    </main>
  );
}
