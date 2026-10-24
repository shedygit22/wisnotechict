import Link from "next/link";
import PageHero from "@/components/layout/page-hero";
import Button from "@/components/ui/button";

const AI_SERVICES = [
  {
    title: "AI Integration and Implementation",
    problem:
      "Organizations want to use AI but lack a clear path to integrate it into existing systems and workflows.",
    solution:
      "We assess your operations, identify suitable AI use cases, and implement AI tools that integrate with your current systems — from knowledge bases to customer service platforms.",
    benefit: "Practical AI adoption that fits your existing operations without disruption.",
  },
  {
    title: "Business Process Automation",
    problem:
      "Repetitive manual tasks consume staff time and create errors across departments.",
    solution:
      "We automate workflows using AI-assisted tools and process automation platforms, connecting your applications and reducing manual data entry.",
    benefit: "Streamlined operations and staff time freed for higher-value work.",
  },
  {
    title: "AI Assistants and Knowledge-Base Chatbots",
    problem:
      "Customer and employee questions overwhelm teams, slowing response times.",
    solution:
      "We build AI assistants trained on your knowledge base that handle common queries, qualify leads, and provide instant answers around the clock.",
    benefit: "Faster responses and reduced load on your support and sales teams.",
  },
  {
    title: "AI-Powered Customer Service",
    problem:
      "Support teams struggle to respond to growing volumes of customer inquiries.",
    solution:
      "AI-powered customer service tools that handle routine inquiries, route complex issues to humans, and improve resolution times.",
    benefit: "Improved customer responsiveness without scaling headcount proportionally.",
  },
  {
    title: "AI Sales and Lead-Generation Workflows",
    problem:
      "Sales teams spend too much time on unqualified leads and manual follow-up.",
    solution:
      "AI-assisted lead qualification and outreach workflows that help your sales team focus on high-potential prospects.",
    benefit: "More efficient sales processes and better lead conversion.",
  },
  {
    title: "AI Training for Teams and Organizations",
    problem:
      "Staff lack the skills to use AI tools effectively and safely in their work.",
    solution:
      "Practical AI training for teams — covering AI tools, prompt engineering, and responsible AI use — tailored to your industry and workflows.",
    benefit: "A workforce equipped to use AI productively and responsibly.",
  },
];

const STEPS = [
  {
    title: "Assess the workflow",
    text: "We start with the work your team does, not the tool. The goal is to find where time is lost, where errors happen, and where AI can genuinely help.",
  },
  {
    title: "Choose a practical use case",
    text: "We identify a focused use case with a clear operational benefit, then propose an implementation approach that fits your existing systems.",
  },
  {
    title: "Implement, train, and hand over",
    text: "We configure the solution, connect it to your workflow, train your team, and document what was delivered so your organization can use it confidently.",
  },
];

export default function AIInnovationPage() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="AI & Innovation"
        title={
          <>
            Practical AI for
            <br className="hidden sm:block" /> real business outcomes.
          </>
        }
        description="Wisnotech helps organizations use AI in practical, commercially useful ways. We focus on real business outcomes — not hype."
        primaryAction={{ href: "/contact", label: "Discuss AI Solutions" }}
        secondaryAction={{ href: "/solutions/ai-solutions", label: "Explore AI Solutions" }}
        aside={
          <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-lift">
            <p className="eyebrow">Our filter</p>
            <h2 className="mt-3 text-2xl">Problem first. Tool second.</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
              We assess the workflow before recommending any AI tool. If a
              simpler process solves the problem, we will say so.
            </p>
            <ul className="mt-5 space-y-3">
              {["Use-case assessment", "Integration planning", "Team training"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#334155]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-[#0A1930] p-5 text-white">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#D8B878]">
                No hype-led promises
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#CBD5E1]">
                Every implementation starts with an assessment of your needs.
                We do not promise automated results or guaranteed returns.
              </p>
            </div>
          </div>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">AI services</p>
            <h2 className="mt-3">Where AI can genuinely help.</h2>
            <p className="mt-4 leading-relaxed text-[#475569]">
              Six practical areas where we help organizations reduce manual
              work, improve response times, and use AI responsibly.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {AI_SERVICES.map((service, index) => (
              <article
                key={service.title}
                data-reveal
                className="group flex flex-col rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A25B]/40 hover:shadow-lift md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-sm font-bold tracking-[0.14em] text-[#A87E34]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A56]/[0.06] text-[#102A56] transition-colors group-hover:bg-[#102A56] group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48l2.12 2.12m0-12.72l-2.12 2.12M7.76 16.24l-2.12 2.12"></path>
                    </svg>
                  </span>
                </div>

                <h3 className="mt-5 text-xl text-[#0A1930]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  <span className="font-semibold text-[#334155]">The challenge: </span>
                  {service.problem}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {service.solution}
                </p>

                <div className="mt-auto border-t border-[#E3E8EF] pt-4">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#A87E34]">
                    Operational benefit
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#334155]">
                    {service.benefit}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E3E8EF] bg-[#F6F8FC] py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="lg:sticky lg:top-28" data-reveal>
              <p className="eyebrow">How we work</p>
              <h2 className="mt-3">A grounded approach to AI.</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-[#475569]">
                We keep the process focused and practical: understand the work,
                select a useful use case, then implement and train your team.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button>Request an Assessment</Button>
                </Link>
                <Link href="/academy">
                  <Button variant="outline">AI Training</Button>
                </Link>
              </div>
            </div>

            <ol className="space-y-4">
              {STEPS.map((step, index) => (
                <li
                  key={step.title}
                  data-reveal
                  className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#102A56] text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg text-[#0A1930]">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
