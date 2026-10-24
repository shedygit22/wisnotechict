import Link from "next/link";
import type { Course } from "@/lib/courses";
import { formatNaira } from "@/lib/pricing";
import Card from "@/components/ui/card";

interface CourseCardProps {
  course: Course;
  planned?: boolean;
  delay?: number;
}

function formatCategory(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function CourseCard({ course, planned, delay = 0 }: CourseCardProps) {
  return (
    <Card
      hoverable
      className="group flex h-full flex-col p-4"
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-44 overflow-hidden rounded-xl bg-[#F5F7FA]">
        <img
          src={course.image}
          alt={course.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width={400}
          height={250}
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] backdrop-blur ${
            planned
              ? "bg-[#0A1930]/80 text-white"
              : "bg-white/90 text-[#0F766E]"
          }`}
        >
          {planned ? "Planned" : "Available"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-2 pt-4">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#A87E34]">
          {formatCategory(course.category)}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-[#0A1930]">
          {course.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">
          {course.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[#E3E8EF] pt-3 text-[0.7rem] text-[#64748B]">
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.25v5.25l3.5 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {course.duration ?? "To be confirmed"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            {course.deliveryFormat.replace("-", " ")}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-sm font-bold text-[#0A1930]">
            {course.baseFee ? formatNaira(course.baseFee) : "Request details"}
          </span>
          <Link
            href={planned ? "/contact" : `/courses/${course.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]"
          >
            {planned ? "Register" : "View course"}
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default CourseCard;
