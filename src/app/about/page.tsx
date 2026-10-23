import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { CONTACT_INFO, WHATSAPP_URL, GMAIL_URL, TEL_URL, BRAND } from "@/types";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-6">
            About Wisnotech
          </h1>
          <p className="text-lg text-[#344054] leading-relaxed mb-8">
            {BRAND.positioning}
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0A1930] mb-4">Our Story</h2>
              <p className="text-[#344054] leading-relaxed mb-6">
                Wisnotech is a Nigerian technology company and digital agency
                based in Uromi, Edo State. We serve individuals, startups,
                small and medium-sized businesses, schools, media houses,
                corporations, nonprofits, and other organizations in Nigeria
                and internationally.
              </p>
              <p className="text-[#344054] leading-relaxed mb-6">
                Our work is organized around three divisions:
              </p>
              <ul className="space-y-3 text-[#344054] leading-relaxed mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <strong>Wisnotech Academy</strong> — Practical digital skills
                  training for individuals and professionals.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <strong>Wisnotech Digital Solutions</strong> — Custom
                  technology solutions for businesses and institutions.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <strong>Wisnotech AI & Innovation</strong> — Practical AI
                  implementation for organizations.
                </li>
              </ul>
            </div>
            <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#0A1930] mb-4">Contact Wisnotech</h2>
              <p className="text-[#344054] mb-6">
                Have a question or want to discuss a project? Get in touch.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1930]">Email</p>
                    <a href={GMAIL_URL} className="text-sm text-[#344054] hover:underline">{CONTACT_INFO.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 012 1.68l9.664 9.664a2 2 0 011.68 2l.64.64a2 2 0 010 2.84l-.64.64a2 2 0 01-2 1.68l-9.664-9.664A2 2 0 015.28 3H3a2 2 0 01-2-2z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1930]">Phone</p>
                    <a href={TEL_URL} className="text-sm text-[#344054] hover:underline">{CONTACT_INFO.phone}</a>
                    <p className="text-xs text-[#64748B] mt=0.5">{CONTACT_INFO.internationalPhone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1930]">WhatsApp</p>
                    <a href={WHATSAPP_URL} className="text-sm text-[#344054] hover:underline">{CONTACT_INFO.whatsapp}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1930]">Location</p>
                    <p className="text-sm text-[#344054]">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Link href="/enroll">
                  <Button fullWidth>Enroll Now</Button>
                </Link>
                <Link href="/contact" className="flex-1">
                  <Button variant="outline" fullWidth>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}