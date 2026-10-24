import { SolutionDetail } from "@/components/solutions/solution-detail";

const SOLUTION = {
  id: "business-automation",
  title: "Business Automation",
  seoTitle: "Business Automation Services Nigeria | Wisnotech",
  seoDescription:
    "Wisnotech provides business process automation and workflow automation services for organizations in Nigeria and internationally.",
  description:
    "Workflow automation and AI assistants that reduce manual effort, eliminate repetitive tasks, and improve response times.",
  problem:
    "Repetitive administrative tasks consume staff time, create avoidable errors, and prevent teams from focusing on higher-value work.",
  solution:
    "Wisnotech identifies repetitive business processes and automates them using no-code and low-code tools, workflow platforms, and AI assistants — connecting your business applications and streamlining operations.",
  deliverables: [
    "Process audit and automation opportunity identification",
    "Workflow design and setup",
    "No-code/low-code automation implementation",
    "Application integrations",
    "AI assistant configuration",
    "Staff training and documentation",
    "Handover and support",
  ],
  intendedCustomer:
    "Businesses, startups, NGOs, and organizations with repetitive administrative processes.",
  process: [
    "Consultation to understand your current processes.",
    "Process audit and automation opportunity mapping.",
    "Proposed automation scope and quotation.",
    "Workflow implementation and testing.",
    "Staff training and handover.",
    "Agreed support period.",
  ],
  value:
    "Automated workflows that reduce manual effort, eliminate errors, and free your team to focus on higher-value work.",
  imageAlt: "Business automation workflow",
  image: "/images/courses/business-automation.svg",
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