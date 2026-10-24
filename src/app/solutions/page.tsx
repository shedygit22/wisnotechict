import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";

const SOLUTIONS = [
  {
    id: "school-management-system",
    title: "School Management System",
    description:
      "Student information systems, admission portals, and administrative tools for schools and educational institutions.",
    problem:
      "Disconnected records, manual administration, and paper-based processes slow down school operations.",
    value:
      "Centralized student records, automated admissions, and streamlined administrative workflows.",
    image: "/images/courses/data-processing.svg",
    imageAlt: "School management system dashboard interface",
    icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Tailored business software and management systems built around your organization's unique workflows.",
    problem: "Generic off-the-shelf tools do not fit your specific business processes.",
    value:
      "Software built for your operations, reducing repetitive work and replacing disconnected spreadsheets.",
    image: "/images/courses/software-development.svg",
    imageAlt: "Custom software development environment",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Professional websites, e-commerce platforms, and web applications for businesses and institutions.",
    problem:
      "A weak online presence limits customer reach and organizational credibility.",
    value:
      "A digital presence that represents your organization and serves your audience effectively.",
    image: "/images/courses/web-development.svg",
    imageAlt: "Website design and development preview",
    icon: "M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Mobile applications for iOS and Android that extend your services to customers on their devices.",
    problem:
      "Customers increasingly expect mobile access to services and information.",
    value: "Mobile apps that bring your products and services directly to your users.",
    image: "/images/solutions/mobile-app-development.svg",
    imageAlt: "Mobile application design preview",
    icon: "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Workflow automation and AI assistants that reduce manual effort and improve response times.",
    problem:
      "Repetitive administrative tasks consume staff time and create avoidable errors.",
    value: "Automated workflows that let your team focus on higher-value work.",
    image: "/images/courses/business-automation.svg",
    imageAlt: "Business automation workflow diagram",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
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
    image: "/images/courses/ai-content-creation.svg",
    imageAlt: "AI solutions and assistant interface",
    icon: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z",
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
    image: "/images/courses/video-editing.svg",
    imageAlt: "Media and publishing platform preview",
    icon: "M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your organization, current processes, constraints, and the outcome you need.",
  },
  {
    step: "02",
    title: "Scoping",
    description:
      "We define requirements, recommend an approach, and provide a clear scope, timeline, and quotation.",
  },
  {
    step: "03",
    title: "Build & test",
    description:
      "We design, develop, and test the solution with agreed checkpoints and regular communication.",
  },
  {
    step: "04",
    title: "Launch & support",
    description:
      "We deploy the solution, hand over documentation, and provide the agreed support period.",
  },
];

const SECTORS = [
  "Schools & institutions",
  "Startups",
  "Media houses",
  "NGOs",
  "SMEs",
  "Enterprises",
];

export default function SolutionsPage() {
  return (
    <div className="relative overflow-hidden">
      <PageHero
        eyebrow="Digital solutions"
        title={
          <>
            Technology built around{" "}
            <span className="text-gradient-gold">your business.</span>
          </>
        }
        description="We design and build custom digital systems for schools, startups, media houses, NGOs, and enterprises. Every engagement starts with the business problem, not the technology."
        primaryAction={{ href: "/contact", label: "Request a Proposal" }}
        secondaryAction={{ href: "/projects", label: "View Demonstrations" }}
        stats={[
          { value: "7", label: "Solution areas" },
          { value: "Custom", label: "Built to fit" },
          { value: "Clear", label: "Scoped delivery" },
        ]}
        aside={
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0A1930_0%,#102A56_60%,#0A1930_100%)] p-6 text-white shadow-lift md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C9A25B]/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#D8B878]">
                    What we build
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Purpose-built digital systems.
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D8B878]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h10"></path>
                  </svg>
                </span>
              </div>

              <div className="mt-6 space-y-2.5">
                {[
                  "Management systems",
                  "Web & mobile applications",
                  "Business automation",
                  "AI assistants & workflows",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#E2E8F0]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A25B]/15 text-[#D8B878]">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {SECTORS.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] font-medium text-[#CBD5E1]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
              <p className="mt-5 border-t border-white/10 pt-4 text-[0.7rem] leading-relaxed text-[#94A3B8]">
                Bespoke projects are quoted after a requirements assessment.
              </p>
            </div>
          </div>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">Solution areas</p>
            <h2 className="mt-4">Start with the problem. We build the system.</h2>
            <p>
              Explore the areas where we help organizations replace manual work,
              improve service delivery, and build a stronger digital foundation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((solution, idx) => (
              <Card
                key={solution.id}
                hoverable
                className="group flex h-full flex-col p-4"
                data-reveal
                style={{ transitionDelay: `${(idx % 3) * 70}ms` }}
              >
                <div className="relative h-44 overflow-hidden rounded-xl border border-[#E3E8EF] bg-[#F5F7FA]">
                  <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={350}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,17,31,0.35)_100%)]" />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#102A56] shadow-sm backdrop-blur">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={solution.icon}></path>
                    </svg>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-2 pt-4">
                  <h3 className="text-lg font-bold text-[#0A1930]">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                    {solution.description}
                  </p>

                  <div className="mt-4 space-y-2.5 border-t border-[#E3E8EF] pt-4">
                    <div>
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#A87E34]">
                        Problem
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                        {solution.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                        Value
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                        {solution.value}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/solutions/${solution.id}`}
                    className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]"
                  >
                    Explore solution
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E3E8EF] bg-[#F6F8FC] py-16 md:py-24">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">Delivery process</p>
            <h2 className="mt-4">A clear process from first conversation to launch.</h2>
            <p>
              You know what happens next at every stage. No black boxes and no
              surprise scope changes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, idx) => (
              <div
                key={step.step}
                className="relative overflow-hidden rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft"
                data-reveal
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <span className="font-display text-4xl font-bold text-[#C9A25B]/25">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[#0A1930]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-[#07111F] px-6 py-12 text-center text-white shadow-lift md:px-12 md:py-16" data-reveal>
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#C9A25B]/20 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow justify-center text-[#D8B878]">Start a project</p>
              <h2 className="mt-4 text-3xl text-white md:text-4xl">
                Tell us what needs to work better.
              </h2>
              <p className="mt-4 leading-relaxed text-[#94A3B8]">
                We will assess your requirements and respond with a clear scope,
                timeline, and quotation. No fixed prices for bespoke systems.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Request a Proposal
                  </Button>
                </Link>
                <Link href="/corporate-training">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                  >
                    Corporate Training
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
