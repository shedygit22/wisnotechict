import { notFound } from "next/navigation";
import Link from "next/link";
import { getAvailableCourses, getCourseBySlug } from "@/lib/courses";
import { formatNaira } from "@/lib/pricing";
import { WHATSAPP_URL, SITE_URL } from "@/types";
import Button from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.seoTitle,
    description: course.seoDescription,
    openGraph: {
      title: course.seoTitle,
      description: course.seoDescription,
      type: "website",
      url: `${SITE_URL}/courses/${course.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const courses = getAvailableCourses?.() ?? [];
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const isAvailable = course.status === "available";
  const feeDisplay = course.baseFee ? formatNaira(course.baseFee) : "Request details";
  const faqs = course.faqs.map((faq) => ({ q: faq.question, a: faq.answer }));

  return (
    <div className="relative">
      <section className="hero-surface relative overflow-hidden px-4 pb-14 pt-10 md:pb-20 md:pt-12">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,black,transparent)]"
          aria-hidden="true"
        />
        <div className="hero-orb -right-24 top-0 h-72 w-72" aria-hidden="true" />
        <div className="container relative z-10">
          <nav className="mb-7 text-xs text-[#64748B]" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-[#102A56]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#CBD5E1]">/</li>
              <li>
                <Link href="/courses" className="transition-colors hover:text-[#102A56]">
                  Courses
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#CBD5E1]">/</li>
              <li className="text-[#0A1930]">{course.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.85fr] lg:items-start">
            <div>
              <div className="image-frame relative">
                <img
                  src={course.image}
                  alt={course.imageAlt}
                  className="h-[280px] w-full object-cover object-top md:h-[380px]"
                  loading="eager"
                  width={900}
                  height={500}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,17,31,0.45)_100%)]" />
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#0F766E] backdrop-blur">
                    {isAvailable ? "Available" : "Planned"}
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                    {course.deliveryFormat.replace("-", " ")}
                  </span>
                </div>
              </div>

              <h1 className="mt-7 text-[2.2rem] leading-[1.08] text-[#0A1930] sm:text-4xl lg:text-[3rem]">
                {course.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#475569]">
                {course.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
                <Link href="/enroll">
                  <Button>{isAvailable ? "Enroll Now" : "Register Interest"}</Button>
                </Link>
                <a href={WHATSAPP_URL}>
                  <Button variant="outline">Ask on WhatsApp</Button>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#E3E8EF] pt-5 text-sm text-[#64748B]">
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.25v5.25l3.5 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {course.duration ?? "Duration to be confirmed"}
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {course.location === "both" ? "Uromi & online" : course.location}
                </span>
                {course.schedule && (
                  <span className="inline-flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"></path>
                    </svg>
                    {course.schedule}
                  </span>
                )}
              </div>
            </div>

            <aside className="w-full">
              <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-lift">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#A87E34]">
                  {isAvailable ? "Course fee" : "Planned course"}
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-[#0A1930]">
                  {feeDisplay}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                  {isAvailable
                    ? "Fee is displayed upfront. Additional charges are listed where applicable."
                    : "This course is awaiting confirmation. Contact us to register your interest."}
                </p>

                {course.additionalCharges && course.additionalCharges.length > 0 && (
                  <div className="mt-4 rounded-xl border border-[#E3E8EF] bg-[#F8FAFC] px-4 py-3">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#64748B]">
                      Additional charges
                    </p>
                    <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-[#64748B]">
                      {course.additionalCharges.map((charge) => (
                        <li key={charge}>{charge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-5 space-y-3">
                  <Link href={isAvailable ? "/enroll" : "/contact"} className="block">
                    <Button fullWidth size="lg">
                      {isAvailable ? "Enroll in This Course" : "Register Interest"}
                    </Button>
                  </Link>
                  <a href={WHATSAPP_URL} className="block">
                    <Button variant="outline" fullWidth>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>

                <div className="mt-5 border-t border-[#E3E8EF] pt-4">
                  <p className="text-[0.68rem] leading-relaxed text-[#64748B]">
                    Submission is an enrollment application, not proof of payment
                    or guaranteed admission.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.85fr] lg:items-start">
            <div className="space-y-10">
              <div data-reveal>
                <p className="eyebrow">About this course</p>
                <h2 className="mt-3">What this course covers.</h2>
                <p className="mt-4 leading-relaxed text-[#475569]">
                  {course.description}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2" data-reveal>
                <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-[#0A1930]">Who this course is for</h3>
                  <ul className="mt-4 space-y-3">
                    {course.audience.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#475569]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#102A56]/10 text-[#102A56]">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-[#0A1930]">Entry requirements</h3>
                  <ul className="mt-4 space-y-3">
                    {course.prerequisites.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#475569]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A25B]/15 text-[#A87E34]">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div data-reveal>
                <p className="eyebrow">Learning outcomes</p>
                <h2 className="mt-3">What you will learn.</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {course.learningOutcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#E3E8EF] bg-white px-4 py-3.5 text-sm leading-relaxed text-[#334155] shadow-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-5 sm:grid-cols-2" data-reveal>
                <div className="rounded-2xl border border-[#E3E8EF] bg-[#F6F8FC] p-6">
                  <h3 className="text-lg font-bold text-[#0A1930]">Practical projects</h3>
                  <ul className="mt-4 space-y-2.5">
                    {course.practicalProjects.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#475569]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A25B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-[#0A1930]">Student support</h3>
                  <ul className="mt-4 space-y-2.5">
                    {course.studentSupport.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#475569]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F766E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div data-reveal>
                <p className="eyebrow">Tools & technologies</p>
                <h2 className="mt-3">What you will work with.</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.toolsTechnologies.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#E3E8EF] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#334155] shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {faqs.length > 0 && (
                <div data-reveal>
                  <p className="eyebrow">FAQ</p>
                  <h2 className="mt-3">Questions about this course.</h2>
                  <div className="mt-5">
                    <FaqAccordion items={faqs} />
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#A87E34]">
                  Course at a glance
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    ["Duration", course.duration ?? "To be confirmed"],
                    ["Format", course.deliveryFormat.replace("-", " ")],
                    ["Location", course.location === "both" ? "Uromi & online" : course.location],
                    ["Status", isAvailable ? "Available" : "Planned"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 border-b border-[#E3E8EF] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#64748B]">
                        {label}
                      </span>
                      <span className="text-right text-sm font-semibold capitalize text-[#0A1930]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#102A56]/15 bg-[#102A56]/[0.05] p-6">
                <h3 className="text-base font-bold text-[#0A1930]">Need guidance?</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Not sure if this course is right for you? Speak with our team
                  before you enroll.
                </p>
                <a href={WHATSAPP_URL} className="mt-4 inline-flex">
                  <Button size="sm">Ask a Question</Button>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
