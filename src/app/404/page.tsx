import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mb-8">
          <span className="text-6xl font-bold text-[#102A56]">404</span>
        </div>
        <h1 className="text-3xl font-bold text-[#0A1930] mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-[#344054] leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-[#102A56] text-white rounded-md font-semibold hover:bg-[#0A1930] transition-colors">
            Return to Homepage
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-[#E3E8EF] text-[#0A1930] rounded-md font-semibold hover:bg-[#F5F7FA] transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}