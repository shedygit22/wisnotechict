import Link from "next/link";
import Button from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <section className="hero-surface relative overflow-hidden px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="hero-orb -right-24 top-0 h-72 w-72" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-xl rounded-2xl border border-[#E3E8EF] bg-white p-8 text-center shadow-lift md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="eyebrow mt-6 justify-center">Submission received</p>
          <h1 className="mt-3 text-[2.4rem] leading-tight text-[#0A1930]">Thank you.</h1>
          <p className="mt-4 leading-relaxed text-[#475569]">
            Your submission has been received. We will review your inquiry and
            get back to you shortly.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button fullWidth>Return Home</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" fullWidth>
                Contact Us Again
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
