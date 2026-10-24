import { SolutionDetail } from "@/components/solutions/solution-detail";

const SOLUTION = {
  id: "school-management-system",
  title: "School Management System",
  seoTitle: "School Management System Development | Wisnotech",
  seoDescription:
    "Wisnotech builds school management systems, student information systems, and admission portals for schools in Uromi, Edo State and across Nigeria.",
  description:
    "A comprehensive school management system that centralizes student records, admissions, attendance, grading, and administrative workflows for schools and educational institutions.",
  problem:
    "Schools often rely on paper records, disconnected spreadsheets, and manual processes that make it difficult to track student information, manage admissions, and communicate with parents.",
  solution:
    "Wisnotech builds a customized school management system with student information management, an admission portal, attendance tracking, grade management, and administrative dashboards — all accessible through role-based logins for administrators, teachers, students, and parents.",
  deliverables: [
    "Student information system (SIS)",
    "Online admission and enrollment portal",
    "Student and parent portals",
    "Teacher portal for grades and attendance",
    "Administrative dashboard and reporting",
    "Role-based access control",
    "Data migration from existing records",
    "Training for school staff",
  ],
  intendedCustomer:
    "Primary and secondary schools, colleges, universities, and educational institutions in Nigeria.",
  process: [
    "Consultation to understand your school's administrative needs.",
    "Requirements gathering and system design.",
    "Proposed scope, timeline, and quotation.",
    "Development and testing of the school management system.",
    "Deployment, staff training, and handover.",
    "Agreed support and maintenance period.",
  ],
  value:
    "Reduce repetitive administrative work, improve student records and school operations, and give parents and students secure online access to information.",
  imageAlt: "School management system dashboard interface",
  image: "/images/courses/data-processing.svg",
};

export async function generateMetadata() {
  return {
    title: SOLUTION.seoTitle,
    description: SOLUTION.seoDescription,
    openGraph: {
      title: SOLUTION.seoTitle,
      description: SOLUTION.seoDescription,
      type: "website",
    },
  };
}

export default function SolutionPage() {
  return <SolutionDetail solution={SOLUTION} />;
}