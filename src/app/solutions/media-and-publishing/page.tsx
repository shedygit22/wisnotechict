import { SolutionDetail } from "@/components/solutions/solution-detail";

const SOLUTION = {
  id: "media-and-publishing",
  title: "Media & Publishing Platforms",
  seoTitle: "Media Company Website and Publishing Platform | Wisnotech",
  seoDescription:
    "Wisnotech builds publishing platforms, content management systems, and media company websites for media organizations in Nigeria.",
  description:
    "Publishing platforms, content management systems, and media company websites built for content teams and editorial workflows.",
  problem:
    "Media houses need flexible, reliable platforms to publish, manage, and distribute content efficiently to their audiences.",
  solution:
    "Wisnotech builds content management systems, publishing platforms, and media company websites designed for editorial workflows, content management, and audience engagement.",
  deliverables: [
    "Content management system (CMS) setup",
    "Media company website design and development",
    "Publishing platform development",
    "Content migration and setup",
    "Editorial team training",
    "Launch and handover",
  ],
  intendedCustomer:
    "Media houses, publishing companies, news organizations, and content creators.",
  process: [
    "Consultation to understand your publishing needs.",
    "Platform design and architecture proposal.",
    "Development and content integration.",
    "Review and revisions.",
    "Launch and editorial team training.",
  ],
  value:
    "A publishing platform that helps content teams publish faster, manage content efficiently, and reach their audience effectively.",
  imageAlt: "Media and publishing platform",
  image: "/images/courses/video-editing.svg",
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