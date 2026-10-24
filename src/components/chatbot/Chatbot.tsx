"use client";

import * as React from "react";
import { searchKnowledgeBase } from "@/lib/knowledge-base";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [aiAvailable, setAiAvailable] = React.useState(true);

  React.useEffect(() => {
    setMessages([
      {
        role: "bot",
        text: "Hello! I'm the Wisnotech assistant. I can help you find information about our courses, services, pricing, and enrollment. What would you like to learn or build today?",
      },
    ]);
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userText = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      if (!response.ok) throw new Error("AI unavailable");
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setAiAvailable(false);
      const fallback = searchKnowledgeBase(userText);
      let reply = "I'm sorry, I'm having trouble connecting right now. ";
      if (fallback.length > 0) {
        reply += `Here's what I found: ${fallback[0].content.substring(0, 300)}...`;
      } else {
        reply += "Please contact us on WhatsApp for assistance.";
      }
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sw">
      <button
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 rounded-full bg-[#102A56] text-white flex items-center justify-center shadow-lg hover:bg-[#0A1930] transition-colors focus:outline-none focus:ring-2 focus:ring-[#102A56]/30"
        aria-label="Open chatbot"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[61] flex items-end justify-end pr-4 pb-4">
          <div className="w-full md:w-96 h-[85vh] bg-white border border-[#E3E8EF] rounded-2xl shadow-2xl flex flex-col">
            <div className="bg-[#0A1930] text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#102A56] flex items-center justify-center text-xs font-bold">
                  W
                </div>
                <span className="font-semibold">Wisnotech Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#94A3B8] hover:text-white"
                aria-label="Close chatbot"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] ${
                    m.role === "user" ? "ml-auto text-right" : "mr-auto"
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      m.role === "user"
                        ? "bg-[#102A56] text-white"
                        : "bg-[#F5F7FA] text-[#344054] border border-[#E3E8EF]"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="mr-auto">
                  <div className="inline-block p-3 rounded-lg bg-[#F5F7FA] border border-[#E3E8EF] text-[#344054] animate-pulse">
                    Typing…
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-[#E3E8EF]">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  className="flex-1 px-4 py-3 border border-[#E3E8EF] rounded-md text-[#344054] focus:outline-none focus:border-[#102A56]"
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-3 bg-[#102A56] text-white rounded-md text-sm font-semibold hover:bg-[#0A1930] disabled:opacity-50"
                >
                  Send
                </button>
              </form>
              {!aiAvailable && (
                <div className="mt-3 p-3 rounded bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs">
                  AI assistant is currently unavailable. Please contact us on WhatsApp for direct assistance.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};