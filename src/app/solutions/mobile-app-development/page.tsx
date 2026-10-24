import { SolutionDetail } from "@/components/solutions/solution-detail";

const SOLUTION = {
  id: "mobile-app-development",
  title: "Mobile Application Development",
  seoTitle: "Mobile App Development Company Nigeria | Wisnotech",
  seoDescription:
    "Wisnotech builds mobile applications for iOS and Android for businesses and organizations in Nigeria and internationally.",
  description:
    "Mobile applications for iOS and Android that extend your services to customers and users on their devices.",
  problem:
    "Customers and users increasingly expect mobile access to services, information, and transactions.",
  solution:
    "Wisnotech builds mobile applications that bring your products and services directly to your users — from customer-facing apps to internal team tools.",
  deliverables: [
    "Mobile app design and prototyping",
    "iOS and Android application development",
    "API integration and backend setup",
    "App store submission guidance",
    "User training and documentation",
    "Launch and handover",
  ],
  intendedCustomer:
    "Businesses, startups, schools, and organizations that want to reach users on mobile devices.",
  process: [
    "Consultation to define your mobile app goals.",
    "Design and prototyping.",
    "Development and testing.",
    "Review and revisions.",
    "App store submission and launch.",
  ],
  value:
    "Mobile access to your services, improved user engagement, and a modern channel to reach your audience.",
  imageAlt: "Mobile application development",
  image: "/images/solutions/mobile-app-development.svg",
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