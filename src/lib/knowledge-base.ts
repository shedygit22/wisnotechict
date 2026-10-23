import type { Course } from "./courses";
import { getCourseBySlug } from "./courses";

export interface KbArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  keywords: string[];
}

export const KNOWLEDGE_BASE: KbArticle[] = [
  {
    id: "company-profile",
    title: "Wisnotech Company Profile",
    category: "company",
    keywords: ["wisnotech", "about", "company", "profile", "uromi", "edo state", "nigeria"],
    content: `Wisnotech is a Nigerian technology company and digital agency based in Uromi, Edo State, Nigeria. We help individuals develop practical digital skills and help organizations build better businesses through technology, software, and artificial intelligence. Our services include digital skills training, custom software development, web and mobile development, business automation, AI integration, and school management systems. Contact: wisnotech@gmail.com, 09153541297, WhatsApp +2349153541297.`,
  },
  {
    id: "training-divisions",
    title: "Training Divisions and Services",
    category: "services",
    keywords: ["academy", "solutions", "ai", "services", "training", "divisions"],
    content: `Wisnotech operates three main divisions: Wisnotech Academy (digital skills training), Wisnotech Digital Solutions (business technology solutions), and Wisnotech AI & Innovation (AI implementation and automation). Academy courses include web development, graphic design, UI/UX design, video editing, AI content creation, digital marketing, software development, business automation, Microsoft Office, and data processing. Solutions include custom business software, school management systems, website development, mobile apps, business automation, AI assistants, and media platforms.`,
  },
  {
    id: "course-list",
    title: "Available Courses",
    category: "courses",
    keywords: ["courses", "course list", "available", "catalog", "training"],
    content: `Available courses at Wisnotech Academy: Web Design and Development (₦150,000, 8 weeks), Graphic Design and Visual Communication (₦120,000, 6 weeks), UI/UX Design (₦160,000, 8 weeks), Video Editing and Post-Production (₦140,000, 6 weeks), AI Content Creation (₦80,000, 4 weeks, online), Digital Marketing (₦100,000, 6 weeks), Software Development (₦250,000, 12 weeks), Microsoft Office and Digital Productivity (₦60,000, 4 weeks), Data Processing and Digital Office Skills (₦70,000, 5 weeks). Business Automation and AI Workflow Development is planned but not yet available.`,
  },
  {
    id: "pricing-rules",
    title: "Training Fees and Location Pricing",
    category: "pricing",
    keywords: ["fee", "price", "cost", "pricing", "edo state", "outside edo", "online", "accommodation"],
    content: `Standard in-person training for Edo State residents: ₦300,000. Standard in-person training for students from outside Edo State: ₦500,000 (includes accommodation where confirmed). Online training has course-specific pricing. Course-specific fees may override these defaults. International applicants should contact us to confirm availability, delivery format, fees, and logistics. Accommodation is not automatically promised for every course or cohort.`,
  },
  {
    id: "enrollment-process",
    title: "Enrollment Process",
    category: "enrollment",
    keywords: ["enroll", "enrollment", "apply", "registration", "how to join", "process"],
    content: `To enroll, select your course(s), choose your training format and location, review the displayed fee breakdown, and submit your details. Submission is an enrollment application, not proof of payment or guaranteed admission. After submission, you will be directed to WhatsApp (+2349153541297) with a prefilled message containing your details. A Wisnotech representative will contact you to confirm your training format, schedule, and payment process.`,
  },
  {
    id: "contact-details",
    title: "Contact Details",
    category: "contact",
    keywords: ["contact", "email", "phone", "whatsapp", "address", "location"],
    content: `Wisnotech is located in Uromi, Edo State, Nigeria. Email: wisnotech@gmail.com. Phone: 09153541297 (international: +234 915 354 1297). WhatsApp: +2349153541297. Email links open Gmail compose. Phone links are clickable to call. WhatsApp link: https://wa.me/2349153541297.`,
  },
  {
    id: "school-management-system",
    title: "School Management Systems",
    category: "solutions",
    keywords: ["school", "management system", "student portal", "admission", "school software"],
    content: `Wisnotech builds school management systems, student information systems, school portals, admission portals, and administrative tools for schools and educational institutions. These systems help improve student records, school operations, and administrative efficiency. Contact us for a proposal - we do not publish fixed prices for bespoke software projects.`,
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    category: "solutions",
    keywords: ["custom software", "software development", "business software", "management system"],
    content: `Wisnotech builds custom business software and management systems for startups, SMEs, NGOs, corporate organizations, and enterprises. We help reduce repetitive administrative work, replace disconnected spreadsheets with structured systems, and build digital infrastructure that can grow with an organization. Request a proposal for your project.`,
  },
  {
    id: "ai-solutions",
    title: "AI and Automation Services",
    category: "ai",
    keywords: ["ai", "artificial intelligence", "automation", "chatbot", "workflow"],
    content: `Wisnotech helps organizations use AI in practical ways: AI integration and implementation, business process automation, AI assistants and knowledge-base chatbots, AI-powered customer service, AI sales and lead-generation workflows, and AI training for teams. We avoid exaggerated claims and focus on commercially useful applications.`,
  },
  {
    id: "refund-policy",
    title: "Refund and Cancellation Policy",
    category: "policy",
    keywords: ["refund", "cancellation", "policy", "money back"],
    content: `Wisnotech's refund and cancellation policy applies to training enrollments and service engagements. Submission of an enrollment form is an application, not proof of payment. Fees are confirmed before payment. Please review the full refund policy at /refund-policy. Details marked for confirmation by Wisnotech or qualified legal counsel.`,
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    category: "policy",
    keywords: ["privacy", "data", "personal information", "gdpr", "ndpa"],
    content: `Wisnotech collects personal information through enrollment and contact forms to process training applications and business inquiries. We do not sell personal data. WhatsApp and email interactions are processed through those platforms. The AI chatbot processes visitor messages through a server-side endpoint. Please review the full privacy policy at /privacy-policy.`,
  },
  {
    id: "faq-courses",
    title: "Frequently Asked Questions - Courses",
    category: "faq",
    keywords: ["faq", "courses", "eligibility", "duration", "schedule", "certificate"],
    content: `Q: Who can enroll? A: Individuals, students, graduates, working professionals, entrepreneurs, freelancers, career changers, and business owners. Q: Are courses available online? A: Some courses are online, some in-person in Uromi, and some hybrid. Check each course page. Q: Is accommodation provided? A: Accommodation may be available for eligible outside-Edo State in-person students where confirmed. Q: Will I get a job? A: We do not promise employment or guaranteed income. We focus on practical learning and portfolio development.`,
  },
  {
    id: "faq-business",
    title: "Frequently Asked Questions - Business Solutions",
    category: "faq",
    keywords: ["faq", "business", "software", "quote", "proposal", "consultation"],
    content: `Q: Do you publish software prices? A: No. Bespoke software projects require assessment. We provide proposals and quotations after discussing your requirements. Q: What types of organizations do you serve? A: Schools, educational institutions, media houses, startups, SMEs, NGOs, corporate organizations, and enterprises. Q: How do I start? A: Contact us to discuss your business challenge and schedule a consultation.`,
  },
];

export function getKnowledgeBase(): KbArticle[] {
  return KNOWLEDGE_BASE;
}

export function searchKnowledgeBase(query: string): KbArticle[] {
  const q = query.toLowerCase();
  return KNOWLEDGE_BASE.filter((article) => {
    const haystack = `${article.title} ${article.content} ${article.keywords.join(" ")}`.toLowerCase();
    return article.keywords.some((k) => q.includes(k)) || haystack.includes(q);
  });
}

export function getCourseInfo(slugOrId: string): Course | undefined {
  return getCourseBySlug(slugOrId);
}
