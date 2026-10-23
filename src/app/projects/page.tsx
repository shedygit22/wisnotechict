import Link from "next/link";
import Card from "@/components/ui/card";

const PROJECTS = [
  {
    title: "School Management System — Demonstration",
    category: "Education Technology",
    description:
      "A demonstration of a student information system with admission portal, attendance tracking, and administrative dashboard for schools.",
    type: "Demonstration Project",
  },
  {
    title: "Business Website — Demonstration",
    category: "Web Development",
    description:
      "A responsive business website built for a professional services organization, with service pages, contact forms, and mobile-friendly design.",
    type: "Demonstration Project",
  },
  {
    title: "E-commerce Platform — Demonstration",
    category: "E-commerce",
    description:
      "An online store platform with product catalog, shopping cart, checkout, and order management for a retail business.",
    type: "Demonstration Project",
  },
  {
    title: "AI Assistant — Demonstration",
    category: "AI Solutions",
    description:
      "A knowledge-base chatbot demonstration for customer service, trained on sample business documentation.",
    type: "Demonstration Project",
  },
];

export default function ProjectsPage() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-4">
            Selected Work
          </h1>
          <p className="text-lg text-[#344054] leading-relaxed">
            We publish only verified project demonstrations. Demonstration
            projects are clearly labeled and do not represent client work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <Card key={project.title} hoverable>
              <div className="h-32 rounded-lg bg-[#F5F7FA] mb-4 flex items-center justify-center text-xs text-[#64748B]">
                {project.type}
              </div>
              <span className="inline-block mb-2 text-xs font-semibold text-[#102A56] uppercase tracking-wide">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold text-[#0A1930] mb-2">{project.title}</h3>
              <p className="text-sm text-[#344054] leading-relaxed mb-4">
                {project.description}
              </p>
              <Link
                href="/contact"
                className="text-xs font-semibold text-[#102A56] hover:underline inline-flex items-center gap-1"
              >
                Discuss a similar project
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-[#64748B]">
          No verified client case studies are currently published. Contact us to
          discuss your project.
        </div>
      </div>
    </section>
  );
}