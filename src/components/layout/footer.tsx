import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { CONTACT_INFO, WHATSAPP_URL, GMAIL_URL, TEL_URL, BRAND } from "@/types";

const FOOTER_NAV: Record<string, { href: string; label: string }[]> = {
  company: [
    { href: "/about", label: "About Wisnotech" },
    { href: "/academy", label: "Wisnotech Academy" },
    { href: "/solutions", label: "Digital Solutions" },
    { href: "/ai-innovation", label: "AI & Innovation" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  training: [
    { href: "/courses", label: "Course Directory" },
    { href: "/enroll", label: "Enroll Now" },
    { href: "/corporate-training", label: "Corporate Training" },
    { href: "/refund-policy", label: "Refund Policy" },
  ],
  solutions: [
    { href: "/solutions/school-management-system", label: "School Management System" },
    { href: "/solutions/custom-software-development", label: "Custom Software" },
    { href: "/solutions/web-development", label: "Web Development" },
    { href: "/solutions/mobile-app-development", label: "Mobile App Development" },
    { href: "/solutions/business-automation", label: "Business Automation" },
    { href: "/solutions/ai-solutions", label: "AI Solutions" },
    { href: "/solutions/media-and-publishing", label: "Media & Publishing" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms and Conditions" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07111F] text-[#E3E8EF]">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.45]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(201,162,91,0.16),transparent_65%)] blur-2xl" aria-hidden="true" />
      <div className="container relative py-14 md:py-20">
        <div className="mb-14 grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#D8B878]">Start a conversation</p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-[1.12] text-white md:text-4xl">
              Let&apos;s build something useful, practical, and built to last.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#94A3B8]">
              {BRAND.positioning}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/enroll"
              className="group inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#D8B878_0%,#C9A25B_55%,#A87E34_100%)] px-5 py-3 text-sm font-semibold text-[#0A1930] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(201,162,91,0.8)]"
            >
              Enroll in a Course
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
            >
              Discuss a Project
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <Link href="/" className="mb-5 inline-flex items-center gap-2">
              <Logo className="h-7" inverted />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[#94A3B8]">
              Practical digital skills training and technology solutions for
              individuals and organizations.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={GMAIL_URL}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[#CBD5E1] transition-colors hover:border-[#C9A25B]/60 hover:text-[#D8B878]"
                aria-label="Email Wisnotech"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[#CBD5E1] transition-colors hover:border-[#C9A25B]/60 hover:text-[#D8B878]"
                aria-label="Chat on WhatsApp"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                </svg>
              </a>
              <a
                href={TEL_URL}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[#CBD5E1] transition-colors hover:border-[#C9A25B]/60 hover:text-[#D8B878]"
                aria-label="Call Wisnotech"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 012 1.68l9.664 9.664a2 2 0 011.68 2l.64.64a2 2 0 010 2.84l-.64.64a2 2 0 01-2 1.68l-9.664-9.664A2 2 0 015.28 3H3a2 2 0 01-2-2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_NAV).map(([key, items]) => (
            <div key={key}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#94A3B8] transition-colors hover:text-[#D8B878]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-[#94A3B8] md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Wisnotech. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>Uromi, Edo State, Nigeria</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <a href={TEL_URL} className="transition-colors hover:text-white">
              {CONTACT_INFO.phone}
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <a href={GMAIL_URL} className="transition-colors hover:text-white">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
