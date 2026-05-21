import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { getChatbotAnswer, suggestedQuestions } from "../data/chatbotKnowledge";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    text: "Ask me about metric definitions, equity gaps, chart axes, confidence labels, or any dashboard content.",
  },
];

export function DashboardChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [askedSuggestedQuestions, setAskedSuggestedQuestions] = useState<string[]>([]);
  const visibleSuggestedQuestions = suggestedQuestions
    .filter((question) => !askedSuggestedQuestions.includes(question))
    .slice(0, 4);

  function askQuestion(question: string) {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: trimmedQuestion },
      { role: "assistant", text: getChatbotAnswer(trimmedQuestion) },
    ]);
    setDraft("");
  }

  function askSuggestedQuestion(question: string) {
    askQuestion(question);
    setAskedSuggestedQuestions((currentQuestions) =>
      currentQuestions.includes(question) ? currentQuestions : [...currentQuestions, question],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    askQuestion(draft);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <section
          aria-label="Dashboard help chatbot"
          className="mb-3 flex h-[34rem] w-[24rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-lg border border-line bg-white shadow-soft"
        >
          <header className="flex items-center justify-between border-b border-line bg-public-navy px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold">Dashboard Help</p>
                <p className="text-xs text-white/75">Definitions and content guide</p>
              </div>
            </div>
            <button
              aria-label="Close chatbot"
              className="rounded-md p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-panel p-4">
            {messages.map((message, index) => (
              <div
                className={`max-w-[88%] rounded-lg px-3 py-2 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto bg-public-teal text-white"
                    : "border border-line bg-white text-ink"
                }`}
                key={`${message.role}-${index}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-line bg-white p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {visibleSuggestedQuestions.map((question) => (
                <button
                  className="rounded-full border border-line bg-panel px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-public-teal hover:bg-white"
                  key={question}
                  onClick={() => askSuggestedQuestion(question)}
                  type="button"
                >
                  {question}
                </button>
              ))}
            </div>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="dashboard-chatbot-question">
                Ask a dashboard question
              </label>
              <input
                className="min-w-0 flex-1 rounded-md border border-line px-3 py-2 text-sm text-ink outline-none transition focus:border-public-teal"
                id="dashboard-chatbot-question"
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask about a metric..."
                type="text"
                value={draft}
              />
              <button
                className="inline-flex items-center justify-center rounded-md bg-public-navy px-3 py-2 text-white transition hover:bg-public-teal"
                type="submit"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Send</span>
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        aria-expanded={isOpen}
        aria-label="Open dashboard help chatbot"
        className="inline-flex items-center gap-2 rounded-full bg-public-navy px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-public-teal"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        type="button"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Ask Dashboard Help
      </button>
    </div>
  );
}
