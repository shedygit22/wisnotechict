import Link from "next/link";
import { getAvailableCourses, getPlannedCourses, COURSE_CATEGORIES, Course } from "@/lib/courses";
import { formatNaira } from "@/lib/pricing";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function AcademyPage() {
  const available = getAvailableCourses();
  const planned = getPlannedCourses();

  return (
    <div className="relative overflow-hidden">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-4">
              Wisnotech Academy
            </h1>
            <p className="text-lg text-[#344054] leading-relaxed max-w-2xl mx-auto">
              Practical digital skills education for students, graduates,
              working professionals, entrepreneurs, freelancers, career
              changers, and business owners. Learn by building real projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0A1930] mb-6">Training Areas</h2>
              <ul className="space-y-3">
                {[
                  "Web design and development",
                  "Graphic design and visual communication",
                  "UI/UX design",
                  "Video editing and post-production",
                  "AI content creation",
                  "AI filmmaking and cinematic video production",
                  "Digital marketing",
                  "Social media management",
                  "Content creation and content strategy",
                  "Software development and vibe coding",
                  "Website, web application, and mobile application development",
                  "Business automation and AI workflow development",
                  "Microsoft Office and digital productivity",
                  "Data processing and digital office skills",
                  "Practical AI tools for business and productivity",
                ].map((area, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#344054] leading-relaxed">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[#0A1930] mb-4">How It Works</h3>
              <ol className="space-y-4 text-sm text-[#344054] leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  Choose a course from the catalog below.
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  Review the fee, duration, and delivery format.
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  Submit your enrollment details.
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  Confirm format, schedule, and payment with our team.
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                    5
                  </span>
                  Begin practical, project-based training.
                </li>
              </ol>
              <div className="mt-6 p-4 rounded-lg bg-[#102A56]/5 border border-[#102A56]/10 text-sm text-[#344054]">
                <strong className="text-[#0A1930]">Important:</strong> Wisnotech
                does not promise employment, guaranteed income, or guaranteed
                business success. We focus on practical learning, guided
                projects, and portfolio development.
              </div>
            </div>
          </div>

          {/* Available Courses */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#0A1930] mb-8">Available Courses</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {available.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Planned Courses */}
          {planned.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-[#0A1930] mb-8">Coming Soon</h2>
              <p className="text-sm text-[#64748B] mb-6">
                The following courses are planned and awaiting confirmation.
                Contact us to register your interest.
              </p>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {planned.map((course) => (
                  <CourseCard key={course.id} course={course} planned />
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/enroll" className="text-sm font-semibold text-[#102A56] hover:underline inline-flex items-center gap-2">
              Start Enrollment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5L6 19"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CourseCard({ course, planned }: { course: Course; planned?: boolean }) {
  return (
    <Card hoverable className="flex flex-col h-full">
      <div className="h-32 rounded-lg bg-[#F5F7FA] overflow-hidden mb-4">
        <img
          src={course.image}
          alt={course.imageAlt}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          width={400}
          height={250}
        />
      </div>
      <span className={`inline-block mb-2 text-xs font-semibold uppercase tracking-wide ${
        planned
          ? "text-[#64748B] bg-[#E3E8EF]"
          : "text-[#102A56] bg-[#102A56]/10"
      }`}>
        {planned ? "Planned" : "Available"}
      </span>
      <h3 className="text-lg font-semibold text-[#0A1930] mb-2 leading-tight line-clamp-2">{course.name}</h3>
      <p className="text-sm text-[#344054] leading-relaxed mb-4 flex-1">{course.shortDescription}</p>
      <div className="mt-auto space-y-1 text-xs text-[#64748B]">
        <p>{course.duration ? `Duration: ${course.duration}` : "Duration: To be confirmed"}</p>
        <p>{course.location.replace("-", " ")} training</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-bold text-[#0A1930]">
          {course.baseFee ? formatNaira(course.baseFee) : "Request details"}
        </span>
        <Link
          href={planned ? "/contact" : `/courses/${course.slug}`}
          className="text-xs font-semibold text-[#102A56] hover:underline"
        >
          {planned ? "Register Interest" : "View Course"}
        </Link>
      </div>
    </Card>
  );
}