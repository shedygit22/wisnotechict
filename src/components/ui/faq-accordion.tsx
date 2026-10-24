"use client";

import * as React from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const baseId = React.useId();

  return (
    <div className="space-y-4" id="faq-list">
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `${baseId}-faq-button-${idx}`;
        const panelId = `${baseId}-faq-panel-${idx}`;

        return (
          <div key={faq.q} className="border border-[#E3E8EF] rounded-lg">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left text-lg font-semibold text-[#0A1930] hover:text-[#102A56] transition-colors"
              >
                <span>{faq.q}</span>
                <svg
                  className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm text-[#344054] leading-relaxed"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
