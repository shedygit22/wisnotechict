import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { PageHero } from "@/components/layout/page-hero";
import {
  CONTACT_INFO,
  WHATSAPP_URL,
  GMAIL_URL,
  TEL_URL,
  BRAND,
} from "@/types";

const DIVISIONS = [
  {
    title: "Wisnotech Academy",
    description:
      "Practical digital skills training for individuals, students, and professionals.",
    icon: "M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.42a12.08 12.08 0 01.34 3.02c0 2.29-2.91 4.15-6.5 4.15S5.5 15.89 5.5 13.6c0-1.08.29-2.08.78-2.94",
    href: "/academy",
  },
  {
    title: "Wisnotech Digital Solutions",
    description:
      "Custom technology solutions for businesses, schools, and institutions.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    href: "/solutions",
  },
  {
    title: "Wisnotech AI & Innovation",
    description:
      "Practical AI implementation, automation, and innovation support for organizations.",
    icon: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z",
    href: "/ai-innovation",
  },
];

const PRINCIPLES = [
  {
    title: "Practical first",
    description:
      "We focus on skills and systems people can actually use, not theory for its own sake.",
  },
  {
    title: "Transparent",
    description:
      "Course fees are displayed upfront. Bespoke projects receive a clear scope and quotation.",
  },
  {
    title: "Accountable",
    description:
      "We publish only verified work, label demonstrations clearly, and avoid exaggerated promises.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <PageHero
        eyebrow="About Wisnotech"
        title={
          <>
            A technology company built for{" "}
            <span className="text-gradient-gold">practical impact.</span>
          </>
        }
        description={BRAND.positioning}
        primaryAction={{ href: "/contact", label: "Contact Us" }}
        secondaryAction={{ href: "/courses", label: "Explore Training" }}
        stats={[
          { value: "3", label: "Divisions" },
          { value: "Uromi", label: "Based in" },
          { value: "Global", label: "Reach" },
        ]}
        aside={
          <div className="relative overflow-hidden rounded-2xl border border-[#E3E8EF] bg-white p-7 shadow-soft md:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C9A25B]/10 blur-2xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#A87E34]">
                At a glance
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#0A1930]">
                One company. Three focused divisions.
              </h2>
              <div className="mt-6 space-y-3">
                {[
                  ["Location", "Uromi, Edo State, Nigeria"],
                  ["Training formats", "In-person, online, and hybrid"],
                  ["Who we serve", "Individuals and organizations"],
                  ["Project pricing", "Quoted after assessment"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-4 border-b border-[#E3E8EF] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#64748B]">
                      {label}
                    </span>
                    <span className="text-right text-sm font-semibold text-[#0A1930]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-[#102A56]/[0.06] px-4 py-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#102A56] text-white">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <p className="text-xs font-semibold text-[#102A56]">
                  Practical work. Clear expectations.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-4">Built in Nigeria. Focused on useful work.</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-[#475569]">
                <p>
                  Wisnotech is a Nigerian technology company and digital agency
                  based in Uromi, Edo State. We serve individuals, startups, small
                  and medium-sized businesses, schools, media houses,
                  corporations, nonprofits, and other organizations in Nigeria and
                  internationally.
                </p>
                <p>
                  Our work is organized around three divisions: training,
                  digital solutions, and AI innovation. Each division exists to
                  help people and organizations use technology in practical,
                  responsible ways.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/courses">
                  <Button>Explore Courses</Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline">Build a Solution</Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" data-reveal style={{ transitionDelay: "80ms" }}>
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-[#E3E8EF] bg-white p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#0A1930]">
                        {principle.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {DIVISIONS.map((division, idx) => (
              <Card
                key={division.title}
                hoverable
                className="group flex h-full flex-col"
                data-reveal
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A25B]/25 bg-[#C9A25B]/10 text-[#A87E34]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={division.icon}></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0A1930]">
                  {division.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">
                  {division.description}
                </p>
                <Link
                  href={division.href}
                  className="mt-5 inline-flex items-center gap-1 border-t border-[#E3E8EF] pt-4 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]"
                >
                  Learn more
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E3E8EF] bg-[#F6F8FC] py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0A1930_0%,#102A56_60%,#0A1930_100%)] p-7 text-white shadow-lift md:p-10" data-reveal>
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A25B]/20 blur-3xl" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="eyebrow text-[#D8B878]">Contact Wisnotech</p>
                <h2 className="mt-4 text-3xl text-white">
                  Have a question or a project in mind?
                </h2>
                <p className="mt-3 max-w-md leading-relaxed text-[#CBD5E1]">
                  Speak with our team about training, software, automation, or AI.
                  We will point you in the right direction.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button variant="accent">Contact Us</Button>
                  </Link>
                  <Link href="/enroll">
                    <Button
                      variant="outline"
                      className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    label: "Email",
                    value: CONTACT_INFO.email,
                    href: GMAIL_URL,
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  },
                  {
                    label: "Phone",
                    value: CONTACT_INFO.phone,
                    href: TEL_URL,
                    icon: "M3 5a2 2 0 012-2h3.28a2 2 0 012 1.68l.9 4.5a2 2 0 01-1.1 2.2l-2.1 1a12 12 0 005.6 5.6l1-2.1a2 2 0 012.2-1.1l4.5.9a2 2 0 011.68 2V19a2 2 0 01-2 2A16 16 0 013 5z",
                  },
                  {
                    label: "WhatsApp",
                    value: CONTACT_INFO.whatsapp,
                    href: WHATSAPP_URL,
                    icon: "M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z",
                  },
                  {
                    label: "Location",
                    value: CONTACT_INFO.location,
                    href: undefined,
                    icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  },
                ].map((item) => {
                  const content = (
                    <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors hover:bg-white/10">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#D8B878]">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={item.icon}></path>
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
                          {item.label}
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
