import { SolutionDetail } from "@/components/solutions/solution-detail";

const SOLUTION = {
  id: "custom-software-development",
  title: "Custom Software Development",
  seoTitle: "Custom Software Development Company Nigeria | Wisnotech",
  seoDescription:
    "Wisnotech is a custom software development company in Nigeria building business software, management systems, and web applications for startups, SMEs, and enterprises.",
  description:
    "Custom business software and management systems built around your organization's unique workflows, replacing disconnected spreadsheets and generic tools.",
  problem:
    "Generic off-the-shelf software often forces organizations to adapt their processes to the tool, creating inefficiencies and workarounds.",
  solution:
    "Wisnotech builds tailored business software — management systems, internal dashboards, reporting tools, and role-based internal applications — designed around your actual operations.",
  deliverables: [
    "Requirements analysis and system design",
    "Custom business application development",
    "Internal dashboards and reporting systems",
    "Database design and setup",
    "User training and documentation",
    "Deployment and handover",
    "Agreed support period",
  ],
  intendedCustomer:
    "Startups, SMEs, NGOs, corporate organizations, and enterprises that need software built for their specific operations.",
  process: [
    "Discovery session to understand your business challenge.",
    "Requirements gathering and workflow mapping.",
    "Proposed scope, timeline, and quotation.",
    "Development with regular reviews.",
    "Testing, deployment, and staff training.",
    "Ongoing support under agreed terms.",
  ],
  value:
    "Replace disconnected spreadsheets with structured systems, reduce repetitive administrative work, and build digital infrastructure that grows with your organization.",
  imageAlt: "Custom software development workflow",
  image: "/images/courses/software-development.svg",
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