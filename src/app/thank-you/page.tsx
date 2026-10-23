import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#102A56]/10 flex items-center justify-center mx-auto mb-6 text-[#102A56] font-bold text-2xl">
            ✓
          </div>
          <h1 className="text-3xl font-bold text-[#0A1930] mb-4">
            Thank You
          </h1>
          <p className="text-lg text-[#344054] leading-relaxed mb-8">
            Your submission has been received. We will review your inquiry and
            get back to you shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="text-sm font-semibold text-[#102A56] hover:underline">
              Return to homepage
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-[#102A56] hover:underline">
              Contact us again
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}