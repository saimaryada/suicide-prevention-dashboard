type KnowledgeAnswer = {
  keywords: string[];
  answer: string;
};

export const suggestedQuestions = [
  "What does ED self-harm visits mean?",
  "What does /100k mean?",
  "What is data confidence?",
  "What does follow-up gap mean?",
  "What does suicide deaths /100k mean?",
  "What is an upstream crisis indicator?",
  "What do 988 metrics measure?",
  "Why are there two axes in the trend chart?",
  "What does AI mean in the equity chart?",
  "Why is this dashboard using mock data?",
];

export const chatbotKnowledge: KnowledgeAnswer[] = [
  {
    keywords: ["ed", "emergency", "self-harm", "self harm", "harm visits"],
    answer:
      "ED means Emergency Department. ED visits for self-harm are emergency department visits related to self-harm. A value such as 128 / 100k means about 128 visits per 100,000 people in the population.",
  },
  {
    keywords: ["100k", "/100k", "per 100", "per 100k", "rate"],
    answer:
      "Per 100k means per 100,000 people in the population. It lets policy makers compare places with different population sizes. For example, 14.1 / 100k means about 14.1 suicide deaths per 100,000 people.",
  },
  {
    keywords: ["suicide deaths", "suicide death", "deaths", "mortality", "dieing", "dying"],
    answer:
      "Suicide deaths are a long-term lagging outcome. A value like 14.1 / 100k means about 14.1 suicide deaths per 100,000 people in the population. It should be interpreted alongside upstream service indicators.",
  },
  {
    keywords: ["confidence", "data confidence", "high", "moderate", "caution"],
    answer:
      "Data confidence describes how much trust to place in a metric for decision-making. High means the data are likely more standardized and complete. Moderate means useful but with limitations. Use Caution means the metric may be affected by missing data, small numbers, inconsistent definitions, or reporting differences.",
  },
  {
    keywords: ["follow-up", "follow up", "after crisis", "hospitalization"],
    answer:
      "Follow-up after crisis or hospitalization means whether a person receives timely care or contact after a crisis event, emergency visit, or hospitalization. It is important because transitions after crisis care are a common point where people can lose connection to support.",
  },
  {
    keywords: ["gap", "equity", "points", "percentage point", "benchmark"],
    answer:
      "An equity gap is shown in percentage points from a benchmark. If the benchmark follow-up rate is 70% and a group has a 21-point gap, that group would be at about 49% follow-up in this mock example.",
  },
  {
    keywords: ["ai", "american indian", "alaska native"],
    answer:
      "In this prototype, AI is the shortened label used in the Equity Lens. In many public health contexts, AI/AN means American Indian and Alaska Native.",
  },
  {
    keywords: ["upstream", "crisis indicator", "indicator"],
    answer:
      "An upstream crisis indicator is a warning sign that appears before a long-term outcome. ED self-harm visits are upstream because they show serious distress and emergency care use before changes in suicide deaths may appear.",
  },
  {
    keywords: ["988", "answer rate", "wait time", "contact volume"],
    answer:
      "988 metrics describe crisis line access and demand. Answer rate shows the share of contacts answered, average wait time shows how long people wait, and contact volume shows how many contacts the system receives.",
  },
  {
    keywords: ["national trend", "axis", "left axis", "right axis", "trend"],
    answer:
      "The National Trend chart uses the left axis for percentage metrics and the right axis for rates per 100,000. Wait time and contact volume are shown in the metric panels instead so they are not compared on a misleading shared scale.",
  },
  {
    keywords: ["mock", "prototype", "static"],
    answer:
      "This dashboard uses static mock data for prototype purposes. The structure shows how validated crisis services, healthcare, equity, geography, and resource metrics could be integrated later.",
  },
];

export function getChatbotAnswer(question: string) {
  const normalizedQuestion = question.toLowerCase();
  const match = chatbotKnowledge.find((item) =>
    item.keywords.some((keyword) => normalizedQuestion.includes(keyword)),
  );

  return (
    match?.answer ??
    "I can answer questions about dashboard definitions, metric meanings, chart axes, equity gaps, confidence labels, and the prototype content. Try asking about ED visits, /100k, follow-up gaps, 988 metrics, or data confidence."
  );
}
