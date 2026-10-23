import { notFound } from "next/navigation";
import { getAvailableCourses, getCourseBySlug } from "@/lib/courses";
import { formatNaira } from "@/lib/pricing";
import { CONTACT_INFO, WHATSAPP_URL, GMAIL_URL, TEL_URL, BRAND, SITE_URL } from "@/types";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";

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

  return (
    <div className="relative overflow-hidden">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <nav className="mb-8 text-xs text-[#64748B]">
            <ol className="flex flex-wrap gap-2" aria-label="Breadcrumb">
              <li>
                <Link href="/" className="hover:text-[#102A56]">Home</Link>
              </li>
              <li>
                <span className="text-[#344054]">/</span>
                <Link href="/courses" className="hover:text-[#102A56]">Courses</Link>
              </li>
              <li>
                <span className="text-[#344054]">/</span>
                <span className="text-[#0A1930]">{course.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10">
            <article className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="rounded-xl overflow-hidden border border-[#E3E8EF] shadow-sm mb-6">
                  <img
                    src={course.image}
                    alt={course.imageAlt}
                    className="w-full h-48 object-cover"
                    loading="eager"
                    width={600}
                    height={350}
                  />
                </div>
                <div className="space-y-3">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${
                    isAvailable
                      ? "text-[#102A56] bg-[#102A56]/10"
                      : "text-[#64748B] bg-[#E3E8EF]"
                  }`}>
                    {isAvailable ? "Available" : "Planned"}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full text-[#64748B] bg-[#F5F7FA]">
                    {course.deliveryFormat.replace("-", " ")}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full text-[#64748B] bg-[#F5F7FA]">
                    {course.location.replace("-", " ")}
                  </span>
                  {course.duration && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full text-[#64748B] bg-[#F5F7FA]">
                      Duration: {course.duration}
                    </span>
                  )}
                  <div className="pt-4 border-t border-[#E3E8EF]">
                    <p className="text-sm font-bold text-[#0A1930] mb-1">Course Fee</p>
                    <p className="text-lg font-bold text-[#0A1930]">{feeDisplay}</p>
                    {course.additionalCharges?.length && (
                      <p className="text-xs text-[#64748B] mt-1">
                        {course.additionalCharges.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href="/enroll">
                    <Button fullWidth>Enroll Now</Button>
                  </Link>
                  <a href={WHATSAPP_URL} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#0A1930] border border-[#E3E8EF] rounded-md hover:bg-[#F5F7FA] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-8">
                <h1 className="text-3xl font-bold text-[#0A1930] leading-tight">{course.name}</h1>
                <p className="text-lg text-[#344054] leading-relaxed">{course.tagline}</p>

                <section>
                  <h2 className="text-xl font-bold text-[#0A1930] mb-4">About This Course</h2>
                  <p className="text-[#344054] leading-relaxed mb-4">{course.description}</p>
                </section>

                <section className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1930] mb-3">Who This Course Is For</h3>
                    <ul className="space-y-2 text-[#344054] leading-relaxed">
                      {course.audience.map((a, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                            •
                          </span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1930] mb-3">Entry Requirements</h3>
                    <ul className="space-y-2 text-[#344054] leading-relaxed">
                      {course.prerequisites.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                            •
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#0A1930] mb-4">What You Will Learn</h2>
                  <ul className="space-y-2 text-[#344054] leading-relaxed mb-6">
                    {course.learningOutcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                          •
                        </span>
                        {o}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-bold text-[#0A1930] mb-3">Practical Projects</h3>
                  <ul className="space-y-2 text-[#344054] leading-relaxed mb-6">
                    {course.practicalProjects.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                          •
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-bold text-[#0A1930] mb-3">Tools & Technologies</h3>
                  <p className="text-[#344054] leading-relaxed mb-6">
                    {course.toolsTechnologies.join(", ")}
                  </p>

                  <h3 className="text-lg font-bold text-[#0A1930] mb-3">Student Support</h3>
                  <ul className="space-y-2 text-[#344054] leading-relaxed">
                    {course.studentSupport.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                          •
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-6">
                  <h2 className="text-xl font-bold text-[#0A1930] mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {course.faqs.map((faq, i) => (
                      <div key={i}>
                        <button
                          className="w-full flex justify-between items-center text-left text-sm font-semibold text-[#0A1930] hover:text-[#102A56]/80 transition-colors py-2"
                          aria-expanded="false"
                        >
                          {faq.question}
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        <p className="text-sm text-[#344054] leading-relaxed pl-1 pb-2 border-b border-[#E3E8EF]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {isAvailable && (
                  <section className="bg-[#0A1930] text-white rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">Ready to Enroll?</h2>
                    <p className="text-[#CBD5E1] mb-6 leading-relaxed">
                      Secure your place in {course.name}. Submit your enrollment
                      details and we will confirm your schedule, format, and
                      fee.
                    </p>
                    <Link href="/enroll">
                      <Button fullWidth size="lg">Enroll in This Course</Button>
                    </Link>
                    <p className="mt-4 text-xs text-[#94A3B8]">
                      Submission is an enrollment application, not proof of
                      payment or guaranteed admission.
                    </p>
                  </section>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}