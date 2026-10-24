import Link from "next/link";
import { getAvailableCourses } from "@/lib/courses";
import { formatNaira } from "@/lib/pricing";
import { CONTACT_INFO, WHATSAPP_URL, GMAIL_URL, TEL_URL } from "@/types";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { TiltCard } from "@/components/ui/tilt-card";

const HERO_IMAGE = "/images/courses/students-collaborating.jpg";

const TOOLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git & GitHub",
  "Figma",
  "Canva",
  "AI Tools",
  "Microsoft Office",
  "Data Processing",
];

const FAQS = [
  {
    q: "What courses are available?",
    a: "Wisnotech Academy offers web development, graphic design, UI/UX design, video editing, AI content creation, digital marketing, software development, Microsoft Office, and data processing. Some courses are planned and not yet open for enrollment.",
  },
  {
    q: "Where is training located?",
    a: "In-person training is held in Uromi, Edo State, Nigeria. Some courses are available online or in hybrid format.",
  },
  {
    q: "Is accommodation provided?",
    a: "Accommodation may be available for eligible students travelling from outside Edo State for in-person programs, where the offer has been confirmed. Please confirm with our team.",
  },
  {
    q: "How much do courses cost?",
    a: "Course fees are listed on each course page. Standard in-person training starts at ₦300,000 for Edo State residents and ₦500,000 for students from outside Edo State. Online training has course-specific pricing.",
  },
  {
    q: "Do you build custom software?",
    a: "Yes. We build custom business software, school management systems, websites, mobile apps, and AI solutions. Prices are quoted after assessing your requirements.",
  },
  {
    q: "How do I enroll?",
    a: "Select your course on our website, complete the enrollment form, and submit your details. You will be directed to WhatsApp to continue the process with our team.",
  },
];

const AUDIENCES = [
  {
    title: "Individuals & Students",
    desc: "Practical digital skills training for learners at every level, from beginners to working professionals.",
    icon: "M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.42a12.08 12.08 0 01.34 3.02c0 2.29-2.91 4.15-6.5 4.15S5.5 15.89 5.5 13.6c0-1.08.29-2.08.78-2.94",
  },
  {
    title: "Entrepreneurs & Freelancers",
    desc: "Build your own websites, market your business, and deliver digital services to clients.",
    icon: "M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2",
  },
  {
    title: "Schools & Institutions",
    desc: "School management systems, student portals, websites, and digital skills training for educators and students.",
    icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1",
  },
  {
    title: "Startups & Growing Businesses",
    desc: "Custom software, web and mobile apps, automation, and AI tools to scale your operations.",
    icon: "M3 17l6-6 4 4 8-8M21 7v5m0-5h-5",
  },
  {
    title: "Media Organizations",
    desc: "Publishing platforms, content management systems, and media company websites.",
    icon: "M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
  },
  {
    title: "Corporate & Enterprise Teams",
    desc: "Corporate digital training, internal dashboards, CRM integrations, and digital transformation consulting.",
    icon: "M17 20h5v-2a3 3 0 00-5.36-1.86M17 20H7m10 0v-2c0-.66-.13-1.28-.36-1.86M7 20H2v-2a3 3 0 015.36-1.86M7 20v-2c0-.66.13-1.28.36-1.86m0 0a5 5 0 019.28 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const SOLUTIONS = [
  {
    title: "School Management Systems",
    desc: "Student information systems, admission portals, and administrative tools that improve school operations.",
    problem: "Disconnected records and manual administration slow down school operations.",
    value: "Centralized student records, automated admissions, and streamlined school management.",
    href: "/solutions/school-management-system",
    icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1",
  },
  {
    title: "Custom Software Development",
    desc: "Tailored business software and management systems built around your organization’s workflows.",
    problem: "Generic tools don’t fit your unique business processes.",
    value: "Software built for your operations, reducing repetitive work and replacing spreadsheets.",
    href: "/solutions/custom-software-development",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Web & Mobile Development",
    desc: "Professional websites, e-commerce platforms, and mobile applications for businesses and institutions.",
    problem: "A weak online presence limits customer reach and credibility.",
    value: "A digital presence that represents your organization and serves your audience.",
    href: "/solutions/web-development",
    icon: "M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Business Automation",
    desc: "Workflow automation and AI assistants that reduce manual effort and improve response times.",
    problem: "Repetitive administrative tasks consume staff time and create errors.",
    value: "Automated workflows that let your team focus on higher-value work.",
    href: "/solutions/business-automation",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "AI Solutions",
    desc: "AI-powered customer service, sales assistants, and knowledge-base tools for practical business use.",
    problem: "Customer inquiries and routine tasks overwhelm small teams.",
    value: "AI assistants that handle common queries and qualify leads around the clock.",
    href: "/solutions/ai-solutions",
    icon: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z",
  },
  {
    title: "Media & Publishing",
    desc: "Publishing platforms, content management systems, and media company websites.",
    problem: "Media houses need flexible platforms to publish and manage content efficiently.",
    value: "CMS and publishing tools built for content teams and editorial workflows.",
    href: "/solutions/media-and-publishing",
    icon: "M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
  },
];

const TRAINING_STEPS = [
  "Choose a course from our catalog.",
  "Submit your enrollment details.",
  "Confirm your training format, schedule, and fee.",
  "Complete payment through an approved process.",
  "Begin practical, project-based training.",
];

const PROJECT_STEPS = [
  "Tell us about your business challenge and goals.",
  "Meet with our team to define your requirements.",
  "Receive a clear project scope, timeline, and quotation.",
  "Approve the plan and confirm the project schedule.",
  "We build, test, and deploy the solution, then provide agreed support.",
];

const SELECTED_WORK = [
  {
    title: "School Management System",
    desc: "A demonstration of a student information system with admission portal and administrative dashboard.",
    type: "Demonstration Project",
    image: "/images/courses/data-processing.svg",
    imageAlt: "School management system dashboard demonstration",
  },
  {
    title: "Business Website",
    desc: "A responsive business website built for a professional services organization.",
    type: "Demonstration Project",
    image: "/images/courses/web-development.svg",
    imageAlt: "Business website design demonstration",
  },
  {
    title: "E-commerce Platform",
    desc: "An online store platform with product catalog, cart, and payment integration.",
    type: "Demonstration Project",
    image: "/images/courses/digital-marketing.svg",
    imageAlt: "E-commerce platform demonstration",
  },
];

const EXPECTATIONS = [
  {
    title: "No guaranteed income",
    desc: "We focus on practical skills and portfolio development. We do not promise employment or income outcomes.",
    icon: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
  },
  {
    title: "Transparent pricing",
    desc: "Course fees are displayed upfront. Bespoke projects receive a quotation after assessment.",
    icon: "M20 12V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-5zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Verified projects only",
    desc: "We publish only real, verified work. Demonstration projects are clearly labeled.",
    icon: "M9 12l2 2 4-4m5.62-4.38A9.96 9.96 0 0112 3a9.96 9.96 0 01-8.62 4.62A9.05 9.05 0 003 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-.9-.13-1.78-.38-2.62z",
  },
];

export default function HomePage() {
  const allCourses = getAvailableCourses();
  const featuredCourses = allCourses.slice(0, 4);

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="hero-surface relative overflow-hidden px-4 pb-16 pt-12 md:pb-24 md:pt-20">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]"
          aria-hidden="true"
        />
        <div className="hero-orb -right-24 top-10 h-72 w-72 md:h-[26rem] md:w-[26rem]" aria-hidden="true" />
        <div className="hero-orb hero-orb-secondary -left-32 bottom-0 h-72 w-72" aria-hidden="true" />

        <div className="container relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span
                className="hero-animate inline-flex items-center gap-2.5 rounded-full border border-[#E3E8EF] bg-white/80 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#102A56] shadow-sm backdrop-blur"
                style={{ animationDelay: "40ms" }}
              >
                <span className="eyebrow-dot" />
                Digital Agency & Training Academy
              </span>

              <h1
                className="hero-animate mt-6 max-w-2xl text-[2.4rem] leading-[1.05] text-[#0A1930] sm:text-5xl lg:text-[3.9rem]"
                style={{ animationDelay: "120ms" }}
              >
                Technology skills and{" "}
                <span className="text-gradient-gold">digital solutions</span> for
                a smarter future.
              </h1>

              <p
                className="hero-animate mt-6 max-w-xl text-lg leading-relaxed text-[#475569]"
                style={{ animationDelay: "200ms" }}
              >
                Wisnotech equips individuals with practical digital skills and
                helps organizations build software, automate workflows, and use
                AI to solve real business problems.
              </p>

              <div
                className="hero-animate mt-8 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "280ms" }}
              >
                <Link href="/courses" className="w-full sm:w-auto">
                  <Button size="lg" fullWidth className="sm:w-auto">
                    Explore Training
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Button>
                </Link>
                <Link href="/solutions" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" fullWidth className="sm:w-auto">
                    Build a Solution
                  </Button>
                </Link>
                <a
                  href={WHATSAPP_URL}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#102A56] transition-colors hover:bg-white/70 sm:w-auto sm:justify-start"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                  </svg>
                  WhatsApp Inquiry
                </a>
              </div>

              <div
                className="hero-animate mt-10 grid max-w-lg grid-cols-3 gap-5 border-t border-[#E3E8EF] pt-6"
                style={{ animationDelay: "360ms" }}
              >
                {[
                  { value: `${allCourses.length}`, label: "Available courses" },
                  { value: "3", label: "Delivery formats" },
                  { value: "7", label: "Solution areas" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold text-[#0A1930]">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hero-animate relative mx-auto w-full max-w-md lg:max-w-none"
              style={{ animationDelay: "260ms" }}
            >
              <div
                className="absolute -inset-5 rounded-[2.2rem] bg-[radial-gradient(circle_at_40%_20%,rgba(201,162,91,0.3),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(16,42,86,0.28),transparent_55%)] blur-2xl"
                aria-hidden="true"
              />
              <TiltCard className="relative">
                <div className="image-frame relative">
                  <img
                    src={HERO_IMAGE}
                    alt="Students in a practical technology training session at Wisnotech Academy"
                    className="h-[420px] w-full object-cover object-center md:h-[540px]"
                    loading="eager"
                    width={896}
                    height={1200}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.02)_35%,rgba(7,17,31,0.72)_100%)]" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                    <div className="glass-panel rounded-xl px-4 py-3">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/65">
                        Wisnotech Academy
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Practical, project-based training
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D8B878]" />
                      Now enrolling
                    </span>
                  </div>
                </div>
              </TiltCard>

              <div className="floating-chip absolute -left-4 top-8 hidden items-center gap-2.5 rounded-xl px-4 py-3 md:flex">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#102A56] text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold text-[#0A1930]">Learn by building</p>
                  <p className="text-[0.65rem] text-[#64748B]">Real projects, real portfolios</p>
                </div>
              </div>

              <div
                className="floating-chip absolute -right-3 bottom-24 hidden items-center gap-2.5 rounded-xl px-4 py-3 md:flex"
                style={{ animationDelay: "-3s" }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9A25B]/15 text-[#A87E34]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold text-[#0A1930]">Uromi · Online · Hybrid</p>
                  <p className="text-[0.65rem] text-[#64748B]">Flexible training formats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools marquee */}
      <section className="border-y border-[#E3E8EF] bg-white/80 py-5">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center">
          <p className="shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#64748B]">
            Tools & technologies
          </p>
          <div className="marquee flex-1">
            <div className="marquee-track">
              {[...TOOLS, ...TOOLS].map((tool, index) => (
                <span
                  key={`${tool}-${index}`}
                  className="whitespace-nowrap text-sm font-semibold text-[#475569]"
                >
                  {tool}
                  <span className="ml-12 text-[#C9A25B]">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">Who we serve</p>
            <h2 className="mt-4">Built for people and organizations doing real work.</h2>
            <p>
              We work with individuals, entrepreneurs, schools, media
              organizations, startups, and enterprise teams across Nigeria and
              internationally.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((item, idx) => (
              <Card
                key={item.title}
                hoverable
                className="group h-full"
                data-reveal
                style={{ transitionDelay: `${(idx % 3) * 70}ms` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A25B]/25 bg-[#C9A25B]/10 text-[#A87E34] transition-transform duration-300 group-hover:-translate-y-0.5">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d={item.icon}></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0A1930]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Two journeys */}
      <section className="relative overflow-hidden border-y border-[#E3E8EF] bg-[#F6F8FC] py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="container relative">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">Two ways to work with us</p>
            <h2 className="mt-4">Learn a skill or build a solution.</h2>
            <p>
              Start where you are. Both paths are practical, transparent, and
              focused on outcomes you can use.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3E8EF] bg-white p-8 shadow-soft md:p-10"
              data-reveal
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C9A25B]/10 blur-2xl" />
              <span className="badge w-fit">For learners</span>
              <h3 className="mt-5 text-2xl font-bold text-[#0A1930]">Learn a Digital Skill</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#475569]">
                Choose from practical, project-based courses in web development,
                graphic design, UI/UX, video editing, AI content creation,
                digital marketing, software development, and more.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Hands-on, guided practical training",
                  "Real projects and portfolio development",
                  "In-person, online, and hybrid formats",
                  "Student support and feedback",
                  "Transparent pricing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#334155]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#102A56]/10 text-[#102A56]">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex-1" />
              <Link href="/courses">
                <Button fullWidth>Find Your Course</Button>
              </Link>
            </div>

            <div
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0A1930_0%,#102A56_55%,#0A1930_100%)] p-8 text-white shadow-lift md:p-10"
              data-reveal
              style={{ transitionDelay: "80ms" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A25B]/20 blur-3xl" aria-hidden="true" />
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A25B]/30 bg-[#C9A25B]/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#E6C988]">
                For organizations
              </span>
              <h3 className="relative mt-5 text-2xl font-bold text-white">Build a Business Solution</h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-[#CBD5E1]">
                We build custom software, school management systems, websites,
                mobile apps, automation workflows, and AI solutions for schools,
                startups, media houses, NGOs, and corporations.
              </p>
              <ul className="relative mt-6 space-y-3">
                {[
                  "Custom business software and management systems",
                  "School management systems and portals",
                  "Web and mobile application development",
                  "Business process automation",
                  "AI assistants and AI-powered customer service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#CBD5E1]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D8B878]">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 flex-1" />
              <Link href="/solutions">
                <Button variant="accent" fullWidth>
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="eyebrow">Featured training</p>
              <h2 className="mt-4 max-w-xl">Practical programs that build real capability.</h2>
              <p className="mt-3 max-w-xl text-[#64748B]">
                Project-based courses designed around the work you want to do.
              </p>
            </div>
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#102A56] transition-colors hover:text-[#A87E34]"
            >
              View all courses
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course, idx) => (
              <Card
                key={course.id}
                hoverable
                className="group flex h-full flex-col p-4"
                data-reveal
                style={{ transitionDelay: `${(idx % 4) * 60}ms` }}
              >
                <div className="relative h-40 overflow-hidden rounded-xl bg-[#F5F7FA]">
                  <img
                    src={course.image}
                    alt={course.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#102A56] backdrop-blur">
                    {course.status === "available" ? "Available" : "Planned"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-2 pt-4">
                  <h3 className="text-base font-bold leading-snug text-[#0A1930]">{course.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#64748B]">
                    {course.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-[#E3E8EF] pt-3">
                    <span className="text-sm font-bold text-[#0A1930]">
                      {course.baseFee ? formatNaira(course.baseFee) : "Request details"}
                    </span>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]"
                    >
                      View
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business solutions */}
      <section className="border-y border-[#E3E8EF] bg-[#F6F8FC] py-20 md:py-24">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">For organizations</p>
            <h2 className="mt-4">Technology that solves business problems.</h2>
            <p>
              Custom digital systems for schools, startups, media houses, NGOs,
              and enterprises. We focus on business outcomes, not just technology.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((item, idx) => (
              <Card
                key={item.title}
                hoverable
                className="group flex h-full flex-col"
                data-reveal
                style={{ transitionDelay: `${(idx % 3) * 70}ms` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#102A56]/15 bg-[#102A56]/[0.06] text-[#102A56] transition-transform duration-300 group-hover:-translate-y-0.5">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d={item.icon}></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0A1930]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.desc}</p>
                <div className="mt-5 space-y-3 border-t border-[#E3E8EF] pt-4">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#A87E34]">Problem</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#64748B]">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#0F766E]">Value</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#64748B]">{item.value}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]"
                >
                  Explore solution
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">How it works</p>
            <h2 className="mt-4">A clear path from first conversation to delivery.</h2>
            <p>
              No guesswork. You know what happens next at every stage of training
              or a project.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#E3E8EF] bg-white p-7 shadow-soft md:p-9" data-reveal>
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102A56]/10 text-[#102A56]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.25v5.25l3.5 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1930]">How Training Works</h3>
                  <p className="text-xs text-[#64748B]">A simple, guided enrollment process</p>
                </div>
              </div>
              <div className="timeline space-y-5">
                {TRAINING_STEPS.map((step, index) => (
                  <div key={step} className="timeline-step">
                    <span className="timeline-marker">{index + 1}</span>
                    <p className="text-sm leading-relaxed text-[#334155]">{step}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/courses"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#102A56] transition-colors hover:text-[#A87E34]"
              >
                Browse courses
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0A1930_0%,#102A56_60%,#0A1930_100%)] p-7 text-white shadow-lift md:p-9"
              data-reveal
              style={{ transitionDelay: "80ms" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
              <div className="relative mb-7 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A25B]/15 text-[#D8B878]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">How Business Projects Work</h3>
                  <p className="text-xs text-[#94A3B8]">Structured delivery with clear milestones</p>
                </div>
              </div>
              <div className="timeline timeline-dark relative space-y-5">
                {PROJECT_STEPS.map((step, index) => (
                  <div key={step} className="timeline-step">
                    <span className="timeline-marker">{index + 1}</span>
                    <p className="text-sm leading-relaxed text-[#CBD5E1]">{step}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D8B878] transition-colors hover:text-white"
              >
                Start a conversation
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practical learning */}
      <section className="border-y border-[#E3E8EF] bg-[#F6F8FC] py-20 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1" data-reveal>
              <div className="image-frame">
                <img
                  src="/images/courses/web-development.jpg"
                  alt="Students in practical training sessions building projects and portfolios at Wisnotech Academy"
                  className="h-[420px] w-full object-cover object-center md:h-[500px]"
                  loading="lazy"
                  width={896}
                  height={1200}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,17,31,0.55)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/65">
                    Portfolio-first learning
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Leave with work you can show employers and clients.
                  </p>
                </div>
              </div>
              <div className="floating-chip absolute -right-4 -top-5 hidden items-center gap-2 rounded-xl px-4 py-3 md:flex">
                <span className="h-2 w-2 rounded-full bg-[#0F766E]" />
                <span className="text-xs font-bold text-[#0A1930]">Guided projects in every course</span>
              </div>
            </div>

            <div className="order-1 lg:order-2" data-reveal>
              <p className="eyebrow">Practical learning</p>
              <h2 className="mt-4">Practice over theory. Results over promises.</h2>
              <p className="mt-4 leading-relaxed text-[#475569]">
                Every Wisnotech course emphasizes hands-on practice. Students
                build real projects, solve actual problems, and graduate with a
                portfolio of work they can show employers and clients.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Guided projects in every course",
                  "Portfolio development support",
                  "Problem-solving focused curriculum",
                  "Real-world applications, not just theory",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-[#E3E8EF] bg-white/70 px-4 py-3 text-sm text-[#334155]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/academy">
                  <Button size="lg">Explore the Academy</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 max-w-xl">Demonstrations of what we build.</h2>
              <p className="mt-3 max-w-xl text-[#64748B]">
                We publish only verified project demonstrations. Demonstration
                projects are clearly labeled.
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#102A56] transition-colors hover:text-[#A87E34]"
            >
              View all projects
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {SELECTED_WORK.map((item, idx) => (
              <Card
                key={item.title}
                hoverable
                className="group flex h-full flex-col p-4"
                data-reveal
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="relative h-44 overflow-hidden rounded-xl border border-[#E3E8EF] bg-[#F5F7FA]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={350}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#0A1930]/85 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                    {item.type}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-2 pt-4">
                  <h3 className="text-lg font-semibold text-[#0A1930]">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]">
                    Demonstration project
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-y border-[#E3E8EF] bg-[#F6F8FC] py-20 md:py-24">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">What to expect</p>
            <h2 className="mt-4">Honest, practical, and clear from day one.</h2>
            <p>
              No exaggerated promises. Just focused training and technology work
              with expectations set upfront.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {EXPECTATIONS.map((item, idx) => (
              <Card
                key={item.title}
                className="h-full"
                data-reveal
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A25B]/25 bg-[#C9A25B]/10 text-[#A87E34]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d={item.icon}></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0A1930]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div data-reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4">Questions, answered.</h2>
              <p className="mt-4 max-w-md leading-relaxed text-[#64748B]">
                Quick answers about courses, pricing, location, and working with
                our team.
              </p>
              <div className="mt-8 rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-[#0A1930]">
                  Still have a question?
                </p>
                <p className="mt-1 text-sm text-[#64748B]">
                  Speak directly with our team on WhatsApp.
                </p>
                <a
                  href={WHATSAPP_URL}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0A1930] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#102A56]"
                >
                  Chat with us
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div data-reveal style={{ transitionDelay: "80ms" }}>
              <FaqAccordion items={FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#07111F] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,162,91,0.18),transparent_68%)] blur-2xl" aria-hidden="true" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="eyebrow justify-center text-[#D8B878]">Ready when you are</p>
            <h2 className="mt-5 text-3xl text-white md:text-[2.8rem]">
              Build your next digital advantage with us.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#94A3B8]">
              Whether you want to learn a practical digital skill or build a
              technology solution for your organization, we are ready to help.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/enroll">
                <Button variant="accent" size="lg">
                  Enroll in a Course
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                >
                  Discuss a Business Project
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#94A3B8]">
              <a href={TEL_URL} className="transition-colors hover:text-white">
                {CONTACT_INFO.phone}
              </a>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <a href={WHATSAPP_URL} className="transition-colors hover:text-white">
                {CONTACT_INFO.whatsapp}
              </a>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <a href={GMAIL_URL} className="transition-colors hover:text-white">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
