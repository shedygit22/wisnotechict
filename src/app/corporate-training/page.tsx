import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { PageHero } from "@/components/layout/page-hero";

const TRAINING_AREAS = [
  "Digital skills training for employees",
  "Microsoft Office and digital productivity",
  "Data processing and digital office skills",
  "Digital marketing for business teams",
  "AI tools for business and productivity",
  "Business automation and workflow development",
  "Custom software training for internal teams",
];

const PROCESS = [
  {
    title: "Needs discussion",
    description:
      "We discuss your organization's training needs, team size, and goals.",
  },
  {
    title: "Course recommendation",
    description:
      "We recommend suitable courses and the best delivery format for your team.",
  },
  {
    title: "Scope & quotation",
    description:
      "We provide a proposed scope, schedule, and quotation for approval.",
  },
  {
    title: "Training delivery",
    description:
      "Training is delivered in-person, online, or hybrid, with practical exercises.",
  },
];

const OUTCOMES = [
  {
    title: "Practical capability",
    description:
      "Your team learns by doing, using tools and workflows relevant to their actual work.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Flexible delivery",
    description:
      "Choose in-person, online, or hybrid training based on your team's location and schedule.",
    icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Relevant content",
    description:
      "Training can be tailored to your tools, processes, and the outcomes your organization needs.",
    icon: "M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM8 7h8M8 11h8M8 15h5",
  },
];

export default function CorporateTrainingPage() {
  return (
    <div className="relative overflow-hidden">
      <PageHero
        eyebrow="Corporate training"
        title={
          <>
            Upskill your team.{" "}
            <span className="text-gradient-gold">Improve how work gets done.</span>
          </>
        }
        description="Wisnotech provides practical digital skills training for organizations, from small businesses to corporate teams, schools, and media houses."
        primaryAction={{ href: "/contact", label: "Discuss Training" }}
        secondaryAction={{ href: "/courses", label: "View Courses" }}
        stats={[
          { value: "7", label: "Training areas" },
          { value: "3", label: "Delivery formats" },
          { value: "Custom", label: "Scoped to you" },
        ]}
        aside={
          <div className="relative overflow-hidden rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft md:p-7">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#C9A25B]/10 blur-2xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#A87E34]">
                Who it is for
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#0A1930]">
                Teams that need to work smarter with digital tools.
              </h2>
              <div className="mt-5 space-y-2.5">
                {[
                  "Corporate teams",
                  "Schools & institutions",
                  "Media organizations",
                  "Small businesses",
                  "Nonprofits",
                  "Growing startups",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#E3E8EF] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#334155]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-[#102A56]/[0.06] px-4 py-3">
                <p className="text-xs leading-relaxed text-[#475569]">
                  Training is quoted based on team size, scope, and delivery
                  format.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div data-reveal>
              <p className="eyebrow">Training areas</p>
              <h2 className="mt-4">Skills your team can apply immediately.</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-[#64748B]">
                Choose from focused training areas or combine them into a custom
                program for your organization.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {TRAINING_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 rounded-xl border border-[#E3E8EF] bg-white px-4 py-3.5 text-sm leading-relaxed text-[#334155] shadow-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A25B]/15 text-[#A87E34]">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0A1930_0%,#102A56_60%,#0A1930_100%)] p-7 text-white shadow-lift md:p-9"
              data-reveal
              style={{ transitionDelay: "80ms" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
              <div className="relative">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#D8B878]">
                  How it works
                </p>
                <h2 className="mt-3 text-2xl text-white">
                  A guided process from needs to delivery.
                </h2>
                <div className="timeline timeline-dark mt-7 space-y-5">
                  {PROCESS.map((step, index) => (
                    <div key={step.title} className="timeline-step">
                      <span className="timeline-marker">{index + 1}</span>
                      <h3 className="text-sm font-bold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#CBD5E1]">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-7 inline-flex">
                  <Button variant="accent">Discuss Corporate Training</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {OUTCOMES.map((outcome, idx) => (
              <Card
                key={outcome.title}
                className="h-full"
                data-reveal
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A25B]/25 bg-[#C9A25B]/10 text-[#A87E34]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={outcome.icon}></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0A1930]">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {outcome.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E3E8EF] bg-[#F6F8FC] py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="eyebrow justify-center">Plan your training</p>
            <h2 className="mt-4">Tell us about your team and goals.</h2>
            <p className="mt-3 leading-relaxed text-[#64748B]">
              We will recommend a training plan and provide a quotation based on
              your team size, scope, and delivery format.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button variant="accent" size="lg">Request a Training Plan</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">About Wisnotech</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
