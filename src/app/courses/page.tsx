import Link from "next/link";
import {
  getAvailableCourses,
  getPlannedCourses,
  COURSE_CATEGORIES,
} from "@/lib/courses";
import Button from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { CourseCard } from "@/components/courses/course-card";

interface CoursesPageProps {
  searchParams: Promise<{ category?: string | string[] }>;
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;
  const categoryParam =
    typeof params.category === "string" ? params.category : undefined;
  const activeCategory =
    categoryParam && COURSE_CATEGORIES[categoryParam] ? categoryParam : undefined;

  const allAvailable = getAvailableCourses();
  const allPlanned = getPlannedCourses();
  const available = activeCategory
    ? allAvailable.filter((course) => course.category === activeCategory)
    : allAvailable;
  const planned = activeCategory
    ? allPlanned.filter((course) => course.category === activeCategory)
    : allPlanned;

  return (
    <div className="relative overflow-hidden">
      <PageHero
        eyebrow="Course directory"
        title={
          <>
            Practical skills.{" "}
            <span className="text-gradient-gold">Real capability.</span>
          </>
        }
        description="Explore project-based courses in technology, design, marketing, AI, and digital productivity. Learn with guided practice, build a portfolio, and choose the format that fits your life."
        primaryAction={{ href: "/enroll", label: "Start Enrollment" }}
        secondaryAction={{ href: "/contact", label: "Ask a Question" }}
        stats={[
          { value: `${allAvailable.length}`, label: "Available courses" },
          { value: `${Object.keys(COURSE_CATEGORIES).length}`, label: "Categories" },
          { value: "3", label: "Delivery formats" },
        ]}
        aside={
          <div className="relative overflow-hidden rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft md:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#A87E34]">
                  Academy snapshot
                </p>
                <p className="mt-1 text-lg font-bold text-[#0A1930]">
                  Training that fits your schedule.
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102A56]/10 text-[#102A56]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.25v5.25l3.5 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {[
                ["In-person", "Uromi, Edo State"],
                ["Online", "Join from anywhere"],
                ["Hybrid", "Combine both formats"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-[#E3E8EF] bg-[#F8FAFC] px-4 py-3"
                >
                  <span className="text-sm font-semibold text-[#0A1930]">{label}</span>
                  <span className="text-xs text-[#64748B]">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#C9A25B]/10 px-4 py-3 text-xs font-semibold text-[#7A5A22]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A87E34]" />
              No guaranteed income or employment claims. Practical skills only.
            </div>
          </div>
        }
      />

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 border-b border-[#E3E8EF] pb-8" data-reveal>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/courses"
                aria-current={!activeCategory ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  !activeCategory
                    ? "bg-[#0A1930] text-white shadow-[0_12px_24px_-18px_rgba(10,25,48,0.8)]"
                    : "border border-[#E3E8EF] bg-white text-[#475569] hover:border-[#102A56]/35 hover:text-[#102A56]"
                }`}
              >
                All Courses
              </Link>
              {Object.entries(COURSE_CATEGORIES).map(([slug, category]) => (
                <Link
                  key={slug}
                  href={`/courses?category=${slug}`}
                  aria-current={activeCategory === slug ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    activeCategory === slug
                      ? "bg-[#0A1930] text-white shadow-[0_12px_24px_-18px_rgba(10,25,48,0.8)]"
                      : "border border-[#E3E8EF] bg-white text-[#475569] hover:border-[#102A56]/35 hover:text-[#102A56]"
                  }`}
                >
                  {category.label}
                </Link>
              ))}
            </div>
            <p className="text-sm text-[#64748B]">
              {activeCategory
                ? `${available.length} course${available.length === 1 ? "" : "s"} in ${COURSE_CATEGORIES[activeCategory].label}.`
                : "Showing all available courses."}
            </p>
          </div>

          {available.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {available.map((course, idx) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  delay={(idx % 4) * 60}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 py-16 text-center" data-reveal>
              <h2 className="text-xl">No available courses in this category yet.</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#64748B]">
                This category may be planned or awaiting confirmation. Contact us
                to register your interest.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/courses">
                  <Button variant="outline">View All Courses</Button>
                </Link>
                <Link href="/contact">
                  <Button>Register Interest</Button>
                </Link>
              </div>
            </div>
          )}

          {planned.length > 0 && (
            <div className="mt-16 border-t border-[#E3E8EF] pt-12">
              <div className="mb-7 max-w-2xl" data-reveal>
                <p className="eyebrow">Coming soon</p>
                <h2 className="mt-3">Planned courses</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  These courses are planned and awaiting confirmation. Contact us
                  to register your interest and be notified when enrollment opens.
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

      <section className="border-t border-[#E3E8EF] bg-[#F6F8FC] py-16 md:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0A1930_0%,#102A56_60%,#0A1930_100%)] px-6 py-10 text-center text-white shadow-lift md:px-12 md:py-14" data-reveal>
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-[#C9A25B]/20 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow justify-center text-[#D8B878]">Need guidance?</p>
              <h2 className="mt-4 text-3xl text-white">Not sure which course is right for you?</h2>
              <p className="mt-3 leading-relaxed text-[#CBD5E1]">
                Tell us about your goals and experience level. We will help you
                choose a course and training format that fits.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/contact">
                  <Button variant="accent" size="lg">
                    Talk to Our Team
                  </Button>
                </Link>
                <Link href="/enroll">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                  >
                    Enroll Now
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
