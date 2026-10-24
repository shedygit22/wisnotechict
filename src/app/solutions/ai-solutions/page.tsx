import { SolutionDetail } from "@/components/solutions/solution-detail";

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
  image: "/images/courses/ai-content-creation.svg",
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
  return <SolutionDetail solution={SOLUTION} />;
}