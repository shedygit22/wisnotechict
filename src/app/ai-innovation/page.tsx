import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

const AI_SERVICES = [
  {
    title: "AI Integration and Implementation",
    problem:
      "Organizations want to use AI but lack a clear path to integrate it into existing systems and workflows.",
    solution:
      "We assess your operations, identify suitable AI use cases, and implement AI tools that integrate with your current systems — from knowledge bases to customer service platforms.",
    benefit: "Practical AI adoption that fits your existing operations without disruption.",
  },
  {
    title: "Business Process Automation",
    problem:
      "Repetitive manual tasks consume staff time and create errors across departments.",
    solution:
      "We automate workflows using AI-assisted tools and process automation platforms, connecting your applications and reducing manual data entry.",
    benefit: "Streamlined operations and staff time freed for higher-value work.",
  },
  {
    title: "AI Assistants and Knowledge-Base Chatbots",
    problem:
      "Customer and employee questions overwhelm teams, slowing response times.",
    solution:
      "We build AI assistants trained on your knowledge base that handle common queries, qualify leads, and provide instant answers around the clock.",
    benefit: "Faster responses and reduced load on your support and sales teams.",
  },
  {
    title: "AI-Powered Customer Service",
    problem:
      "Support teams struggle to respond to growing volumes of customer inquiries.",
    solution:
      "AI-powered customer service tools that handle routine inquiries, route complex issues to humans, and improve resolution times.",
    benefit: "Improved customer responsiveness without scaling headcount proportionally.",
  },
  {
    title: "AI Sales and Lead-Generation Workflows",
    problem:
      "Sales teams spend too much time on unqualified leads and manual follow-up.",
    solution:
      "AI-assisted lead qualification and outreach workflows that help your sales team focus on high-potential prospects.",
    benefit: "More efficient sales processes and better lead conversion.",
  },
  {
    title: "AI Training for Teams and Organizations",
    problem:
      "Staff lack the skills to use AI tools effectively and safely in their work.",
    solution:
      "Practical AI training for teams — covering AI tools, prompt engineering, and responsible AI use — tailored to your industry and workflows.",
    benefit: "A workforce equipped to use AI productively and responsibly.",
  },
];

export default function AIInnovationPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-4">
              AI & Innovation
            </h1>
            <p className="text-lg text-[#344054] leading-relaxed max-w-2xl mx-auto">
              Wisnotech helps organizations use AI in practical, commercially
              useful ways. We focus on real business outcomes — not hype.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_SERVICES.map((service, i) => (
              <Card key={i} hoverable className="flex flex-col h-full">
                <div className="w-10 h-10 rounded-lg bg-[#102A56]/10 flex items-center justify-center mb-5 text-[#102A56] font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#0A1930] mb-3">
                  {service.title}
                </h3>
                <div className="mb-4 flex-1">
                  <p className="text-xs font-semibold text-[#102A56] uppercase tracking-wide mb-1">The problem</p>
                  <p className="text-sm text-[#344054] leading-relaxed mb-3">
                    {service.problem}
                  </p>
                  <p className="text-xs font-semibold text-[#102A56] uppercase tracking-wide mb-1">Our approach</p>
                  <p className="text-sm text-[#344054] leading-relaxed mb-3">
                    {service.solution}
                  </p>
                </div>
                <div className="mt-auto p-4 rounded-lg bg-[#F5F7FA] border border-[#E3E8EF]">
                  <p className="text-xs font-bold text-[#102A56] uppercase tracking-wide mb-1">
                    Operational benefit
                  </p>
                  <p className="text-xs text-[#344054]">{service.benefit}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-[#0A1930] text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Explore AI for Your Organization</h2>
            <p className="text-[#CBD5E1] leading-relaxed mb-6 max-w-xl mx-auto">
              We help you identify where AI can add real value to your
              operations and implement it responsibly.
            </p>
            <Link href="/contact">
              <Button size="lg">Discuss AI Solutions</Button>
            </Link>
            <p className="mt-4 text-xs text-[#94A3B8]">
              We do not promise automated results or guaranteed returns from AI.
              Every implementation starts with an assessment of your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}