import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";

const PROJECTS = [
  {
    title: "School Management System",
    category: "Education Technology",
    description:
      "A demonstration of a student information system with admission portal, attendance tracking, and administrative dashboard for schools.",
    type: "Demonstration Project",
    image: "/images/courses/data-processing.svg",
    imageAlt: "School management system dashboard demonstration",
  },
  {
    title: "Business Website",
    category: "Web Development",
    description:
      "A responsive business website built for a professional services organization, with service pages, contact forms, and mobile-friendly design.",
    type: "Demonstration Project",
    image: "/images/courses/web-development.svg",
    imageAlt: "Business website design demonstration",
  },
  {
    title: "E-commerce Platform",
    category: "E-commerce",
    description:
      "An online store platform with product catalog, shopping cart, checkout, and order management for a retail business.",
    type: "Demonstration Project",
    image: "/images/courses/digital-marketing.svg",
    imageAlt: "E-commerce platform demonstration",
  },
  {
    title: "AI Assistant",
    category: "AI Solutions",
    description:
      "A knowledge-base chatbot demonstration for customer service, trained on sample business documentation.",
    type: "Demonstration Project",
    image: "/images/courses/ai-content-creation.svg",
    imageAlt: "AI assistant chat demonstration",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Demonstrations built with{" "}
            <span className="text-gradient-gold">purpose.</span>
          </>
        }
        description="We publish only verified project demonstrations. Each project is clearly labeled and represents a demonstration, not client work."
        primaryAction={{ href: "/contact", label: "Discuss a Project" }}
        secondaryAction={{ href: "/solutions", label: "Explore Solutions" }}
        stats={[
          { value: `${PROJECTS.length}`, label: "Demonstrations" },
          { value: "4", label: "Categories" },
          { value: "100%", label: "Clearly labeled" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project, idx) => (
              <Card
                key={project.title}
                hoverable
                className="group flex h-full flex-col p-4"
                data-reveal
                style={{ transitionDelay: `${(idx % 2) * 80}ms` }}
              >
                <div className="relative h-56 overflow-hidden rounded-xl border border-[#E3E8EF] bg-[#F5F7FA] md:h-64">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={350}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,17,31,0.4)_100%)]" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#0A1930]/85 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-2 pt-5">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#A87E34]">
                    {project.category}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-[#0A1930]">
                    {project.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">
                    {project.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1 border-t border-[#E3E8EF] pt-4 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]"
                  >
                    Discuss a similar project
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#C9A25B]/25 bg-[#C9A25B]/10 px-6 py-5 text-center" data-reveal>
            <p className="text-sm leading-relaxed text-[#7A5A22]">
              No verified client case studies are currently published. The work
              above is demonstration-only. Contact us to discuss your project.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E3E8EF] bg-[#F6F8FC] py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="eyebrow justify-center">Your project next</p>
            <h2 className="mt-4">Bring us the problem. We will shape the solution.</h2>
            <p className="mt-3 leading-relaxed text-[#64748B]">
              Share your goals and requirements. We will respond with a clear
              scope, timeline, and quotation.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button variant="accent" size="lg">Start a Conversation</Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg">Explore Solutions</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
