import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

const SOLUTIONS = [
  {
    id: "school-management-system",
    title: "School Management System",
    description:
      "Student information systems, admission portals, and administrative tools for schools and educational institutions.",
    problem: "Disconnected records, manual administration, and paper-based processes slow down school operations.",
    value:
      "Centralized student records, automated admissions, and streamlined administrative workflows.",
    icon: "S",
    image: "/images/courses/data-processing.svg",
    imageAlt: "School management system dashboard interface",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Tailored business software and management systems built around your organization's unique workflows.",
    problem: "Generic off-the-shelf tools do not fit your specific business processes.",
    value:
      "Software built for your operations, reducing repetitive work and replacing disconnected spreadsheets.",
    icon: "C",
    image: "/images/courses/software-development.svg",
    imageAlt: "Custom software development environment",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Professional websites, e-commerce platforms, and web applications for businesses and institutions.",
    problem: "A weak online presence limits customer reach and organizational credibility.",
    value:
      "A digital presence that represents your organization and serves your audience effectively.",
    icon: "W",
    image: "/images/courses/web-development.svg",
    imageAlt: "Website design and development preview",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Mobile applications for iOS and Android that extend your services to customers on their devices.",
    problem: "Customers increasingly expect mobile access to services and information.",
    value:
      "Mobile apps that bring your products and services directly to your users.",
    icon: "M",
    image: "/images/solutions/mobile-app-development.svg",
    imageAlt: "Mobile application design preview",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Workflow automation and AI assistants that reduce manual effort and improve response times.",
    problem:
      "Repetitive administrative tasks consume staff time and create avoidable errors.",
    value:
      "Automated workflows that let your team focus on higher-value work.",
    icon: "A",
    image: "/images/courses/business-automation.svg",
    imageAlt: "Business automation workflow diagram",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "AI-powered customer service, sales assistants, and knowledge-base tools for practical business use.",
    problem:
      "Customer inquiries and routine tasks overwhelm small teams and slow response times.",
    value:
      "AI assistants that handle common queries and qualify leads around the clock.",
    icon: "I",
    image: "/images/courses/ai-content-creation.svg",
    imageAlt: "AI solutions and assistant interface",
  },
  {
    id: "media-and-publishing",
    title: "Media & Publishing",
    description:
      "Publishing platforms, content management systems, and media company websites.",
    problem:
      "Media houses need flexible platforms to publish and manage content efficiently.",
    value:
      "CMS and publishing tools built for content teams and editorial workflows.",
    icon: "P",
    image: "/images/courses/video-editing.svg",
    imageAlt: "Media and publishing platform preview",
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-4">
              Digital Solutions for Organizations
            </h1>
            <p className="text-lg text-[#344054] leading-relaxed max-w-2xl mx-auto">
              Wisnotech builds custom digital systems for schools, startups,
              media houses, NGOs, corporate organizations, and enterprises. We
              focus on business outcomes — not just technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SOLUTIONS.map((solution) => (
              <Card key={solution.id} hoverable className="flex flex-col h-full">
                <div className="h-36 rounded-lg bg-[#F5F7FA] overflow-hidden mb-4">
                  <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={350}
                  />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#102A56]/10 flex items-center justify-center mb-5 text-[#102A56] font-bold text-xl">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0A1930] mb-2">
                  {solution.title}
                </h3>
                <p className="text-[#344054] leading-relaxed mb-4 flex-1">
                  {solution.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#102A56] uppercase tracking-wide mb-1">
                    The problem
                  </p>
                  <p className="text-xs text-[#64748B]">{solution.problem}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#102A56] uppercase tracking-wide mb-1">
                    The value
                  </p>
                  <p className="text-xs text-[#64748B]">{solution.value}</p>
                </div>
                <Link
                  href={`/solutions/${solution.id}`}
                  className="text-xs font-semibold text-[#102A56] hover:underline flex items-center gap-1 mt-auto"
                >
                  Learn more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-[#0A1930] mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-[#344054] leading-relaxed mb-6 max-w-xl mx-auto">
              We do not publish fixed prices for bespoke software projects.
              Every project requires assessment to provide an accurate scope
              and quotation.
            </p>
            <Link href="/contact">
              <Button size="lg">Request a Proposal</Button>
            </Link>
            <p className="mt-4 text-sm text-[#64748B]">
              Or WhatsApp us directly to start the conversation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}