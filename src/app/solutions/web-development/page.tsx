import { SolutionDetail } from "@/components/solutions/solution-detail";

const SOLUTION = {
  id: "web-development",
  title: "Website Design and Development",
  seoTitle: "Website Design and Development | Wisnotech Nigeria",
  seoDescription:
    "Wisnotech designs and develops professional websites, e-commerce platforms, and web applications for businesses, schools, and media organizations in Nigeria.",
  description:
    "Professional websites, e-commerce platforms, and web applications built for businesses, schools, media organizations, and institutions.",
  problem:
    "A weak or outdated online presence limits customer reach, credibility, and the ability to serve audiences effectively.",
  solution:
    "Wisnotech designs and develops responsive, modern websites and web applications that represent your organization and serve your audience — from simple business sites to e-commerce platforms and member portals.",
  deliverables: [
    "Responsive website design and development",
    "Content management system setup",
    "E-commerce platform development",
    "Website hosting and domain guidance",
    "Mobile-friendly design",
    "Basic SEO setup",
    "Content migration and launch",
  ],
  intendedCustomer:
    "Businesses, schools, media houses, NGOs, and organizations that need a professional online presence.",
  process: [
    "Consultation to understand your website goals.",
    "Site structure and design proposal.",
    "Development and content integration.",
    "Review and revisions.",
    "Launch and handover.",
  ],
  value:
    "A digital presence that builds credibility, reaches more customers, and serves your audience 24/7.",
  imageAlt: "Website design and development",
  image: "/images/courses/web-development.svg",
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