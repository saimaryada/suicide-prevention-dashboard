# National Strategy for Suicide Prevention Dashboard

A React + Vite prototype dashboard for the **National Strategy for Suicide Prevention**, focused on **Strategic Direction #2: Healthcare and Crisis Services**.

Live demo: https://saimaryada.github.io/suicide-prevention-dashboard/

## Project Overview

This repo is a polished prototype for showing dashboard structure, audience pathways, visual design, and how selected healthcare and crisis-service metrics could eventually be integrated. It uses static mock data only. There is no backend yet.

The first audience is policy makers and decision-makers, so the interface emphasizes:

- clear executive summary metrics
- plain-language interpretation
- geographic variation
- equity gaps
- policy priority scorecards
- resource links
- story-based context
- a small in-app help chatbot for definitions

## What Is Included

### Dashboard Views

- **Executive Snapshot**: high-level metric cards with five-year mini trends
- **National Trend**: dual-axis trend chart with percentage metrics and rates per 100,000
- **Geographic Variation**: interactive U.S. state map with state-level mock metrics
- **Policy Priority Scorecard**: policy-oriented table of priorities, signals, status, and confidence
- **Equity Lens**: follow-up care gap chart with a no-gap baseline
- **What This Means**: concise plain-English policy interpretation
- **Actions, Resources, and Related Tools**: links to relevant national resources and example dashboards
- **Your Stories**: story cards showing how narrative content could sit alongside metrics
- **Dashboard Help Chatbot**: static Q&A helper for definitions and dashboard content

### Current Interactions

- Click a state on the U.S. map to switch the trend chart into that state view.
- Use **Show national view** to return to national trend data.
- Click **Your stories** to view narrative story cards.
- Click a story card to open the full story.
- Click **Export PDF** to open the browser print dialog and save as PDF.
- Open **Ask Dashboard Help** to ask definition-style questions about the dashboard.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Recharts
- lucide-react
- d3-geo + topojson-client + us-atlas for the U.S. state map
- GitHub Pages for deployment

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    DashboardChatbot.tsx
    EquityLens.tsx
    FilterBar.tsx
    GeographyPanel.tsx
    Header.tsx
    InterpretationPanel.tsx
    MetricCard.tsx
    PolicyScorecard.tsx
    ResourceLinks.tsx
    TrendChart.tsx
    YourStories.tsx
  data/
    chatbotKnowledge.ts
    mockMetrics.ts
    storyProfiles.ts
  App.tsx
  main.tsx
  styles.css
```

## Data Notes

All values are mock data for prototype purposes. Real implementation would need validated sources, governance, definitions, update schedules, suppression rules, and geographic comparability checks.

Mock metrics currently include:

- 988 answer rate
- 988 average wait time
- 988 contact volume
- emergency department visits for self-harm
- follow-up after crisis or hospitalization
- suicide deaths as a long-term lagging outcome
- equity gaps by rurality, age group, veteran status, and selected race/ethnicity labels where data are available

## Deployment

The app is deployed with GitHub Actions to GitHub Pages.

Deployment workflow:

```text
.github/workflows/deploy.yml
```

The Vite base path is configured for the repository Pages URL:

```ts
base: "/suicide-prevention-dashboard/"
```

## Important Prototype Framing

This is not a production dashboard. It is intended for kickoff discussions, stakeholder review, and early design/requirements conversations about how a future Suicide Prevention Dashboard could organize healthcare and crisis-service indicators.
