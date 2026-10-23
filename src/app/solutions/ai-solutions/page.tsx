import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { WHATSAPP_URL } from "@/types";

const SOLUTION = {
  id: "ai-solutions",
  title: "AI Solutions",
  seoTitle: "AI Solutions and AI Integration Agency | Wisnotech",
  seoDescription:
    "Wisnotech provides practical AI integration, AI assistants, business process automation, and AI training for organizations in Nigeria and internationally.",
  description:
    "AI-powered customer service, sales assistants, knowledge-base tools, and AI training for practical, commercially useful business applications.",
  problem:
    "Customer inquiries and routine tasks overwhelm small teams, slow response times, and prevent organizations from focusing on strategic work.",
  solution:
    "Wisnotech helps organizations use AI in practical ways — AI assistants and knowledge-base chatbots, AI-powered customer service, AI sales and lead-generation workflows, and AI training for teams — focused on commercially useful outcomes, not hype.",
  deliverables: [
    "AI assistant and chatbot setup",
    "Knowledge-base integration",
    "AI-powered customer service workflows",
    "AI sales and lead qualification tools",
    "AI training for teams and staff",
    "Process documentation and handover",
  ],
  intendedCustomer:
    "Businesses, schools, media houses, and organizations exploring practical AI adoption.",
  process: [
    "Consultation to identify suitable AI use cases.",
    "Opportunity assessment and feasibility review.",
    "Proposed AI solution scope and quotation.",
    "Implementation and integration.",
    "Staff training and handover.",
    "Agreed support period.",
  ],
  value:
    "AI assistants that handle common queries, qualify leads, and free your team to focus on higher-value work — without exaggerated claims.",
  imageAlt: "AI solutions and chatbot",
};

export async function generateMetadata() {
  return {
    title: SOLUTION.seoTitle,
    description: SOLUTION.seoDescription,
    openGraph: {
      title: SOLUTION.seoTitle,
      description: SOLUTION.seoDescription,
      type: "website",
    },
  };
}

export default function SolutionPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <nav className="mb-8 text-xs text-[#64748B]">
            <ol className="flex flex-wrap gap-2" aria-label="Breadcrumb">
              <li>
                <Link href="/" className="hover:text-[#102A56]">Home</Link>
              </li>
              <li>
                <span className="text-[#344054]">/</span>
                <Link href="/solutions" className="hover:text-[#102A56]">Solutions</Link>
              </li>
              <li>
                <span className="text-[#344054]">/</span>
                <span className="text-[#0A1930]">{SOLUTION.title}</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-6">
            {SOLUTION.title}
          </h1>
          <p className="text-lg text-[#344054] leading-relaxed mb-8">
            {SOLUTION.description}
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-[#0A1930] mb-4">The Problem</h2>
                <p className="text-[#344054] leading-relaxed">
                  {SOLUTION.problem}
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-[#0A1930] mb-4">Our Solution</h2>
                <p className="text-[#344054] leading-relaxed mb-4">
                  {SOLUTION.solution}
                </p>
                <h3 className="text-lg font-bold text-[#0A1930] mb-3">Deliverables</h3>
                <ul className="space-y-2 text-[#344054] leading-relaxed">
                  {SOLUTION.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                        •
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-6">
                <h2 className="text-xl font-bold text-[#0A1930] mb-4">Intended Customer</h2>
                <p className="text-[#344054] leading-relaxed">
                  {SOLUTION.intendedCustomer}
                </p>
                <h3 className="text-lg font-bold text-[#0A1930] mt-6 mb-3">Business Value</h3>
                <p className="text-[#344054] leading-relaxed">
                  {SOLUTION.value}
                </p>
              </section>
            </div>

            <div className="bg-[#0A1930] text-white rounded-xl p-8 md:p-10">
              <h2 className="text-xl font-bold mb-6">Implementation Process</h2>
              <ol className="space-y-4 text-[#CBD5E1] leading-relaxed mb-8">
                {SOLUTION.process.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </ol>
              <div className="space-y-4">
                <Link href="/contact">
                  <Button fullWidth size="lg">Request a Proposal</Button>
                </Link>
                <a
                  href={WHATSAPP_URL}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#0A1930] border border-[#E3E8EF] rounded-md bg-white hover:bg-[#F5F7FA] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                  </svg>
                  WhatsApp Inquiry
                </a>
                <p className="mt-4 text-xs text-[#94A3B8]">
                  Project pricing is quoted after assessing your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}