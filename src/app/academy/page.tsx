import Link from "next/link";
import { getAvailableCourses, getPlannedCourses } from "@/lib/courses";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { PageHero } from "@/components/layout/page-hero";
import { CourseCard } from "@/components/courses/course-card";
import { TiltCard } from "@/components/ui/tilt-card";

const TRAINING_GROUPS = [
  {
    title: "Build & develop",
    description: "Technical skills for creating websites, applications, and automated systems.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    items: [
      "Web design and development",
      "UI/UX design",
      "Software development and vibe coding",
      "Website, web application, and mobile application development",
      "Business automation and AI workflow development",
    ],
  },
  {
    title: "Create & communicate",
    description: "Design, content, and marketing skills for brands, media, and digital products.",
    icon: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z",
    items: [
      "Graphic design and visual communication",
      "Video editing and post-production",
      "AI content creation",
      "AI filmmaking and cinematic video production",
      "Digital marketing",
      "Social media management",
      "Content creation and content strategy",
    ],
  },
  {
    title: "Work & productivity",
    description: "Essential digital skills for administration, data, and everyday business work.",
    icon: "M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM8 7h8M8 11h8M8 15h5",
    items: [
      "Microsoft Office and digital productivity",
      "Data processing and digital office skills",
      "Practical AI tools for business and productivity",
    ],
  },
];

const STEPS = [
  {
    title: "Choose a course",
    description: "Browse the catalog and pick the skill you want to build.",
  },
  {
    title: "Review the details",
    description: "Check the fee, duration, schedule, and delivery format.",
  },
  {
    title: "Submit enrollment",
    description: "Complete the enrollment form with your details.",
  },
  {
    title: "Confirm with our team",
    description: "Finalize your format, schedule, and payment.",
  },
  {
    title: "Start building",
    description: "Begin practical, project-based training with support.",
  },
];

export default function AcademyPage() {
  const available = getAvailableCourses();
  const planned = getPlannedCourses();
  const totalAreas = TRAINING_GROUPS.reduce(
    (total, group) => total + group.items.length,
    0,
  );

  return (
    <div className="relative overflow-hidden">
      <PageHero
        eyebrow="Wisnotech Academy"
        title={
          <>
            Learn by building.{" "}
            <span className="text-gradient-gold">Grow with confidence.</span>
          </>
        }
        description="Practical digital skills education for students, graduates, professionals, entrepreneurs, freelancers, career changers, and business owners. Every course is built around guided practice and real projects."
        primaryAction={{ href: "/courses", label: "Browse Courses" }}
        secondaryAction={{ href: "/enroll", label: "Start Enrollment" }}
        stats={[
          { value: `${totalAreas}`, label: "Training areas" },
          { value: `${available.length}`, label: "Available courses" },
          { value: "3", label: "Delivery formats" },
        ]}
        aside={
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_35%_20%,rgba(201,162,91,0.3),transparent_58%),radial-gradient(circle_at_80%_80%,rgba(16,42,86,0.25),transparent_55%)] blur-2xl" aria-hidden="true" />
            <TiltCard className="relative">
              <div className="image-frame">
                <img
                  src="/images/courses/students-collaborating.jpg"
                  alt="Students collaborating during a practical technology training session at Wisnotech Academy"
                  className="h-[420px] w-full object-cover object-center md:h-[500px]"
                  loading="eager"
                  width={896}
                  height={1200}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(7,17,31,0.75)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/65">
                    Portfolio-first learning
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Build work you can show employers and clients.
                  </p>
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
                <p className="text-xs font-bold text-[#0A1930]">Guided practice</p>
                <p className="text-[0.65rem] text-[#64748B]">Support at every stage</p>
              </div>
            </div>
          </div>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">Training areas</p>
            <h2 className="mt-4">Choose a skill. Build it through practice.</h2>
            <p>
              From foundational digital productivity to advanced software and AI
              workflows, our training is organized around practical capability.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {TRAINING_GROUPS.map((group, idx) => (
              <Card
                key={group.title}
                hoverable
                className="flex h-full flex-col"
                data-reveal
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A25B]/25 bg-[#C9A25B]/10 text-[#A87E34]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={group.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A1930]">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {group.description}
                </p>
                <ul className="mt-5 space-y-3 border-t border-[#E3E8EF] pt-5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#334155]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E3E8EF] bg-[#F6F8FC] py-16 md:py-24">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="eyebrow justify-center">How it works</p>
            <h2 className="mt-4">Five clear steps from interest to training.</h2>
            <p>
              A simple enrollment process with no guesswork. Our team confirms
              every detail with you before training begins.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, idx) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-[#E3E8EF] bg-white p-5 shadow-soft"
                data-reveal
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#102A56] font-display text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-[#0A1930]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#C9A25B]/25 bg-[#C9A25B]/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between" data-reveal>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#A87E34] shadow-sm">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
                </svg>
              </span>
              <p className="text-sm leading-relaxed text-[#7A5A22]">
                <strong className="font-bold">Important:</strong> Wisnotech does
                not promise employment, guaranteed income, or guaranteed business
                success. We focus on practical learning, guided projects, and
                portfolio development.
              </p>
            </div>
            <Link href="/courses" className="shrink-0">
              <Button size="sm">View Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="eyebrow">Available now</p>
              <h2 className="mt-4">Available courses</h2>
              <p className="mt-3 max-w-xl text-[#64748B]">
                Start with a course that matches your goals. Each program includes
                practical projects and guided support.
              </p>
            </div>
            <Link href="/enroll">
              <Button>Start Enrollment</Button>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {available.map((course, idx) => (
              <CourseCard
                key={course.id}
                course={course}
                delay={(idx % 4) * 60}
              />
            ))}
          </div>

          {planned.length > 0 && (
            <div className="mt-16 border-t border-[#E3E8EF] pt-12">
              <div className="mb-7 max-w-2xl" data-reveal>
                <p className="eyebrow">Coming soon</p>
                <h2 className="mt-3">Planned courses</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  These courses are awaiting confirmation. Register your interest
                  and we will notify you when enrollment opens.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {planned.map((course, idx) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    planned
                    delay={(idx % 4) * 60}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111F] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#C9A25B]/20 blur-3xl" aria-hidden="true" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="eyebrow justify-center text-[#D8B878]">Ready to start?</p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl">
              Build practical skills that travel with you.
            </h2>
            <p className="mt-4 leading-relaxed text-[#94A3B8]">
              Choose a course, confirm your training format, and start learning
              through guided projects.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/enroll">
                <Button variant="accent" size="lg">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                >
                  Ask a Question
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
