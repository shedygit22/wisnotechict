import Link from "next/link";
import { WHATSAPP_URL } from "@/types";
import Button from "@/components/ui/button";

export interface SolutionDetailData {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  deliverables: string[];
  intendedCustomer: string;
  process: string[];
  value: string;
  imageAlt: string;
  image: string;
}

export function SolutionDetail({ solution }: { solution: SolutionDetailData }) {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-[#07111F] px-4 pb-16 pt-10 text-white md:pb-24 md:pt-14">
        <div
          className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.16] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]"
          aria-hidden="true"
        />
        <div className="hero-orb -right-32 top-0 h-96 w-96 opacity-30" aria-hidden="true" />
        <div className="container relative z-10">
          <nav className="mb-8 text-xs text-[#94A3B8]" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li>
                <Link href="/solutions" className="transition-colors hover:text-white">
                  Solutions
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-[#E2E8F0]">{solution.title}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow text-[#D8B878]">
                Business solution
              </p>
              <h1 className="mt-5 max-w-3xl text-balance text-[2.4rem] leading-[1.04] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
                {solution.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#CBD5E1]">
                {solution.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button size="lg">Request a Proposal</Button>
                </Link>
                <a href={WHATSAPP_URL}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    Discuss on WhatsApp
                  </Button>
                </a>
              </div>

              <p className="mt-5 max-w-xl text-xs leading-relaxed text-[#94A3B8]">
                We do not publish fixed prices for bespoke software. Every project
                receives a quotation after a requirements assessment.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_50px_100px_-50px_rgba(0,0,0,0.9)] backdrop-blur-sm">
                <div className="overflow-hidden rounded-xl bg-[#F8FAFC]">
                  <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    className="h-auto w-full object-contain"
                    loading="eager"
                    width={1200}
                    height={700}
                  />
                </div>
              </div>

              <div className="floating-chip absolute -bottom-6 left-4 hidden max-w-[16rem] rounded-xl px-4 py-3 md:left-6 md:block">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#A87E34]">
                  Scoped around your operations
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                  Requirements review, deployment, training, and handover included
                  in the agreed scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.8fr] lg:items-start">
            <div className="space-y-12">
              <div data-reveal>
                <p className="eyebrow">The challenge</p>
                <h2 className="mt-3">Why this matters.</h2>
                <p className="mt-4 leading-relaxed text-[#475569]">
                  {solution.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft md:p-8" data-reveal>
                <p className="eyebrow">Our approach</p>
                <h2 className="mt-3">How Wisnotech solves it.</h2>
                <p className="mt-4 leading-relaxed text-[#475569]">
                  {solution.solution}
                </p>
              </div>

              <div data-reveal>
                <p className="eyebrow">What you get</p>
                <h2 className="mt-3">Scope and deliverables.</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {solution.deliverables.map((item) => (
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

              <div data-reveal>
                <p className="eyebrow">How we work</p>
                <h2 className="mt-3">A clear delivery process.</h2>
                <ol className="mt-6 space-y-0">
                  {solution.process.map((step, index) => (
                    <li key={step} className="relative flex gap-4 pb-7 last:pb-0">
                      {index < solution.process.length - 1 && (
                        <span
                          className="absolute left-[0.9rem] top-8 h-[calc(100%-1.5rem)] w-px bg-[#E3E8EF]"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#102A56]/15 bg-[#102A56]/[0.06] text-xs font-bold text-[#102A56]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1.5 text-sm leading-relaxed text-[#475569]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-2xl bg-[#0A1930] p-6 text-white shadow-lift">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#D8B878]">
                  Business value
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                  {solution.value}
                </p>
              </div>

              <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#A87E34]">
                  Who it is for
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  {solution.intendedCustomer}
                </p>
              </div>

              <div className="rounded-2xl border border-[#102A56]/15 bg-[#102A56]/[0.05] p-6">
                <h3 className="text-base font-bold text-[#0A1930]">
                  Ready to discuss your project?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Tell us about your organization and the workflow you want to
                  improve. We will recommend a practical next step.
                </p>
                <div className="mt-4 space-y-2.5">
                  <Link href="/contact" className="block">
                    <Button fullWidth>Request a Proposal</Button>
                  </Link>
                  <a href={WHATSAPP_URL} className="block">
                    <Button variant="outline" fullWidth>
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionDetail;
