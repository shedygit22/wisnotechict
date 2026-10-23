"use client";

import * as React from "react";
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
    <footer className="bg-[#0A1930] text-[#E3E8EF] border-t border-[#102A56]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Logo className="h-7 inverted" />
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              {BRAND.positioning}
            </p>
            <div className="flex gap-3">
              {[
                { label: "Email", href: GMAIL_URL },
                { label: "WhatsApp", href: WHATSAPP_URL },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-8 h-8 rounded flex items-center justify-center border border-[#344054] hover:border-[#102A56] transition-colors"
                  aria-label={item.label}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_NAV).map(([key, items]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#94A3B8] hover:text-[#102A56] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1F2A44] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94A3B8]">
            <p>
              Wisnotech &bull; Uromi, Edo State, Nigeria
            </p>
            <p>
              Email:{" "}
              <a href={GMAIL_URL} className="text-[#102A56] hover:text-white underline">
                {CONTACT_INFO.email}
              </a>
              &bull;
              Phone:{" "}
              <a href={TEL_URL} className="text-[#102A56] hover:text-white underline">
                {CONTACT_INFO.phone}
              </a>
              &bull;
              WhatsApp:{" "}
              <a
                href={WHATSAPP_URL}
                className="text-[#102A56] hover:text-white underline"
              >
                {CONTACT_INFO.whatsapp}
              </a>
            </p>
            <p className="text-[11px] uppercase tracking-wider mt-2 md:mt-0">
              &copy; {new Date().getFullYear()} Wisnotech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;