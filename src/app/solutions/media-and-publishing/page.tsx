import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { WHATSAPP_URL } from "@/types";

const SOLUTION = {
  id: "media-and-publishing",
  title: "Media & Publishing Platforms",
  seoTitle: "Media Company Website and Publishing Platform | Wisnotech",
  seoDescription:
    "Wisnotech builds publishing platforms, content management systems, and media company websites for media organizations in Nigeria.",
  description:
    "Publishing platforms, content management systems, and media company websites built for content teams and editorial workflows.",
  problem:
    "Media houses need flexible, reliable platforms to publish, manage, and distribute content efficiently to their audiences.",
  solution:
    "Wisnotech builds content management systems, publishing platforms, and media company websites designed for editorial workflows, content management, and audience engagement.",
  deliverables: [
    "Content management system (CMS) setup",
    "Media company website design and development",
    "Publishing platform development",
    "Content migration and setup",
    "Editorial team training",
    "Launch and handover",
  ],
  intendedCustomer:
    "Media houses, publishing companies, news organizations, and content creators.",
  process: [
    "Consultation to understand your publishing needs.",
    "Platform design and architecture proposal.",
    "Development and content integration.",
    "Review and revisions.",
    "Launch and editorial team training.",
  ],
  value:
    "A publishing platform that helps content teams publish faster, manage content efficiently, and reach their audience effectively.",
  imageAlt: "Media and publishing platform",
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