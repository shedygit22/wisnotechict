"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export const Header = React.forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      ref={ref}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#E3E8EF]/90 bg-white/90 shadow-[0_18px_40px_-32px_rgba(10,25,48,0.5)] backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,162,91,0.8),rgba(16,42,86,0.4),transparent)]" />
      <div className="container">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-2.5" : "py-3.5"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2">
            <span className="transition-transform duration-300 group-hover:scale-[1.03]">
              <Logo className="h-8" />
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={isActive}
                  className={`nav-link text-[0.86rem] font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-[#102A56]"
                      : "text-[#475569] hover:text-[#102A56]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={WHATSAPP_URL}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E3E8EF] text-[#102A56] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#102A56]/30 hover:bg-[#F5F7FA]"
              aria-label="Chat on WhatsApp"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
              </svg>
            </a>
            <Link
              href="/enroll"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#102A56_0%,#0A1930_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(10,25,48,0.9)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Enroll Now</span>
              <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E3E8EF] text-[#0A1930] transition-colors hover:bg-[#F5F7FA] lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[#E3E8EF]/80 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#344054] transition-colors hover:bg-[#F5F7FA] hover:text-[#102A56]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 space-y-3 border-t border-[#E3E8EF] pt-4">
            <Link
              href="/enroll"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-[linear-gradient(135deg,#102A56_0%,#0A1930_100%)] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Enroll Now
            </Link>
            <div className="grid gap-2">
              <a
                href={TEL_URL}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-[#344054] transition-colors hover:bg-[#F5F7FA]"
              >
                <svg className="h-4 w-4 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 012 1.68l9.664 9.664a2 2 0 011.68 2l.64.64a2 2 0 010 2.84l-.64.64a2 2 0 01-2 1.68l-9.664-9.664A2 2 0 015.28 3H3a2 2 0 01-2-2z"></path>
                </svg>
                {CONTACT_INFO.phone}
              </a>
              <a
                href={WHATSAPP_URL}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-[#344054] transition-colors hover:bg-[#F5F7FA]"
              >
                <svg className="h-4 w-4 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                </svg>
                WhatsApp: {CONTACT_INFO.whatsapp}
              </a>
              <a
                href={GMAIL_URL}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-[#344054] transition-colors hover:bg-[#F5F7FA]"
              >
                <svg className="h-4 w-4 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
