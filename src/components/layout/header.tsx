"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { CONTACT_INFO, WHATSAPP_URL, GMAIL_URL, TEL_URL } from "@/types";

export interface HeaderProps {}

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academy", label: "Academy" },
  { href: "/solutions", label: "Solutions" },
  { href: "/ai-innovation", label: "AI & Innovation" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (props, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <header ref={ref} className="sticky top-0 z-50 border-b border-[#E3E8EF] bg-white/95 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Logo className="h-8" />
              </Link>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden p-2 text-[#0A1930] hover:bg-[#F5F7FA] rounded-md"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            <nav className="hidden md:flex items-center gap-8 md:gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#344054] hover:text-[#102A56] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/enroll"
                className="px-4 py-2.5 text-sm font-semibold text-white bg-[#102A56] rounded-md hover:bg-[#0A1930] transition-colors"
              >
                Enroll Now
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={TEL_URL}
                className="text-sm text-[#344054] hover:text-[#102A56] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 012 1.68l9.664 9.664a2 2 0 011.68 2l.64.64a2 2 0 010 2.84l-.64.64a2 2 0 01-2 1.68l-9.664-9.664A2 2 0 015.28 3H3a2 2 0 01-2-2z"></path>
                </svg>
                {CONTACT_INFO.phone}
              </a>
              <a
                href={WHATSAPP_URL}
                className="px-4 py-2.5 text-sm font-semibold text-white bg-[#0A1930] rounded-md hover:bg-[#102A56] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden border-t border-[#E3E8EF] bg-white ${isOpen ? "block" : "hidden"}`}
        >
          <div className="container py-4">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[#344054] hover:bg-[#F5F7FA] hover:text-[#102A56] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#E3E8EF]">
                <a
                  href="/enroll"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-white bg-[#102A56] rounded-md text-center hover:bg-[#0A1930] transition-colors"
                >
                  Enroll Now
                </a>
                <div className="mt-4 space-y-2">
                  <a
                    href={TEL_URL}
                    className="block px-4 py-2 text-sm text-[#344054] hover:bg-[#F5F7FA] rounded-md"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    className="block px-4 py-2 text-sm text-[#344054] hover:bg-[#F5F7FA] rounded-md"
                  >
                    WhatsApp: {CONTACT_INFO.whatsapp}
                  </a>
                  <a
                    href={GMAIL_URL}
                    className="block px-4 py-2 text-sm text-[#344054] hover:bg-[#F5F7FA] rounded-md"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  },
);

Header.displayName = "Header";
export default Header;