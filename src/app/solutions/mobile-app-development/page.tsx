import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { WHATSAPP_URL } from "@/types";

const SOLUTION = {
  id: "mobile-app-development",
  title: "Mobile Application Development",
  seoTitle: "Mobile App Development Company Nigeria | Wisnotech",
  seoDescription:
    "Wisnotech builds mobile applications for iOS and Android for businesses and organizations in Nigeria and internationally.",
  description:
    "Mobile applications for iOS and Android that extend your services to customers and users on their devices.",
  problem:
    "Customers and users increasingly expect mobile access to services, information, and transactions.",
  solution:
    "Wisnotech builds mobile applications that bring your products and services directly to your users — from customer-facing apps to internal team tools.",
  deliverables: [
    "Mobile app design and prototyping",
    "iOS and Android application development",
    "API integration and backend setup",
    "App store submission guidance",
    "User training and documentation",
    "Launch and handover",
  ],
  intendedCustomer:
    "Businesses, startups, schools, and organizations that want to reach users on mobile devices.",
  process: [
    "Consultation to define your mobile app goals.",
    "Design and prototyping.",
    "Development and testing.",
    "Review and revisions.",
    "App store submission and launch.",
  ],
  value:
    "Mobile access to your services, improved user engagement, and a modern channel to reach your audience.",
  imageAlt: "Mobile application development",
  image: "/images/solutions/mobile-app-development.svg",
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
                <Link href="/solutions" className="hover:text-[#102A56]">Solutions</Link>
              </li>
              <li>
                <span className="text-[#344054]">/</span>
                <span className="text-[#0A1930]">{SOLUTION.title}</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-6">
            {SOLUTION.title}
          </h1>
          <p className="text-lg text-[#344054] leading-relaxed mb-8">
            {SOLUTION.description}
          </p>

          <div className="mb-10 rounded-xl overflow-hidden border border-[#E3E8EF] shadow-sm bg-[#F5F7FA]">
            <img
              src={SOLUTION.image}
              alt={SOLUTION.imageAlt}
              className="w-full h-auto object-cover"
              loading="eager"
              width={1200}
              height={700}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-[#0A1930] mb-4">The Problem</h2>
                <p className="text-[#344054] leading-relaxed">
                  {SOLUTION.problem}
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-[#0A1930] mb-4">Our Solution</h2>
                <p className="text-[#344054] leading-relaxed mb-4">
                  {SOLUTION.solution}
                </p>
                <h3 className="text-lg font-bold text-[#0A1930] mb-3">Deliverables</h3>
                <ul className="space-y-2 text-[#344054] leading-relaxed">
                  {SOLUTION.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                        •
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-6">
                <h2 className="text-xl font-bold text-[#0A1930] mb-4">Intended Customer</h2>
                <p className="text-[#344054] leading-relaxed">
                  {SOLUTION.intendedCustomer}
                </p>
                <h3 className="text-lg font-bold text-[#0A1930] mt-6 mb-3">Business Value</h3>
                <p className="text-[#344054] leading-relaxed">
                  {SOLUTION.value}
                </p>
              </section>
            </div>

            <div className="bg-[#0A1930] text-white rounded-xl p-8 md:p-10">
              <h2 className="text-xl font-bold mb-6">Implementation Process</h2>
              <ol className="space-y-4 text-[#CBD5E1] leading-relaxed mb-8">
                {SOLUTION.process.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </ol>
              <div className="space-y-4">
                <Link href="/contact">
                  <Button fullWidth size="lg">Request a Proposal</Button>
                </Link>
                <a
                  href={WHATSAPP_URL}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#0A1930] border border-[#E3E8EF] rounded-md bg-white hover:bg-[#F5F7FA] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                  </svg>
                  WhatsApp Inquiry
                </a>
                <p className="mt-4 text-xs text-[#94A3B8]">
                  Project pricing is quoted after assessing your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}