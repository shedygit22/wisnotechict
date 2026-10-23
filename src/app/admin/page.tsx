import Link from "next/link";

export default function AdminPage() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-[#0A1930] text-white rounded-xl p-8 md:p-12 text-center">
          <h1 className="text-3xl font-bold mb-6">Admin Area</h1>
          <p className="text-[#CBD5E1] mb-8">
            The administrator area is used to manage courses, pricing,
            blog posts, and inquiries.
          </p>
          <p className="text-sm text-[#94A3B8]">
            Admin functionality requires authentication and server-side
            configuration. Set up ADMIN_PASSWORD_HASH in your environment
            variables to enable the admin area.
          </p>
          <div className="mt-8">
            <Link href="/" className="text-sm font-semibold text-[#102A56] hover:underline">
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}