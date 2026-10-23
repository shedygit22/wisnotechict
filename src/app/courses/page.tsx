import Link from "next/link";
import { getAvailableCourses, getPlannedCourses, Course } from "@/lib/courses";
import { formatNaira } from "@/lib/pricing";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function CoursesPage() {
  const available = getAvailableCourses();
  const planned = getPlannedCourses();

  return (
    <div className="relative overflow-hidden">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-4">
              Course Directory
            </h1>
            <p className="text-lg text-[#344054] leading-relaxed max-w-2xl mx-auto">
              Browse our complete catalog of digital skills training courses.
              Each course includes detailed modules, practical projects, and
              transparent pricing.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Link href="/courses" className="px-4 py-2 text-sm font-semibold text-[#102A56] bg-[#102A56]/10 rounded-md hover:bg-[#102A56]/20 transition-colors">
              All Courses
            </Link>
            {[
              "web-development",
              "graphic-design",
              "ui-ux-design",
              "video-editing",
              "ai-content-creation",
              "digital-marketing",
              "software-development",
              "business-automation",
              "digital-productivity",
              "data-processing",
            ].map((cat) => (
              <Link
                key={cat}
                href={`/courses?category=${cat}`}
                className="px-4 py-2 text-sm font-semibold text-[#344054] bg-white border border-[#E3E8EF] rounded-md hover:border-[#102A56] transition-colors"
              >
                {cat.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {available.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {planned.length > 0 && (
            <div className="mt-16 border-t border-[#E3E8EF] pt-12">
              <h2 className="text-2xl font-bold text-[#0A1930] mb-8">Planned Courses</h2>
              <p className="text-sm text-[#64748B] mb-6">
                These courses are planned and awaiting confirmation. Contact us
                to register your interest.
              </p>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {planned.map((course) => (
                  <CourseCard key={course.id} course={course} planned />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function CourseCard({ course, planned }: { course: Course; planned?: boolean }) {
  return (
    <Card hoverable className="flex flex-col h-full">
      <div className="h-36 rounded-lg bg-[#F5F7FA] overflow-hidden mb-4 flex items-center justify-center">
        <span className="text-xs text-[#64748B]">{course.category.replace(/-/g, " ")}</span>
      </div>
      <span className={`inline-block mb-2 text-xs font-semibold uppercase tracking-wide ${
        planned ? "text-[#64748B] bg-[#E3E8EF]" : "text-[#102A56] bg-[#102A56]/10"
      }`}>
        {planned ? "Planned" : "Available"}
      </span>
      <h3 className="text-lg font-semibold text-[#0A1930] mb-2 leading-tight line-clamp-2">{course.name}</h3>
      <p className="text-sm text-[#344054] leading-relaxed mb-4 flex-1">{course.shortDescription}</p>
      <div className="mt-auto space-y-1 text-xs text-[#64748B]">
        <p>
          {course.duration ? `Duration: ${course.duration}` : "Duration: To be confirmed"}
        </p>
        <p>{course.deliveryFormat.replace("-", " ")}</p>
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