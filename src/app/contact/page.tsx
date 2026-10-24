"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/input";
import { PageHero } from "@/components/layout/page-hero";
import {
  CONTACT_INFO,
  WHATSAPP_URL,
  GMAIL_URL,
  TEL_URL,
  BRAND,
} from "@/types";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: CONTACT_INFO.email,
    href: GMAIL_URL,
    note: "For detailed inquiries and proposals.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: TEL_URL,
    note: CONTACT_INFO.internationalPhone,
    icon: "M3 5a2 2 0 012-2h3.28a2 2 0 012 1.68l.9 4.5a2 2 0 01-1.1 2.2l-2.1 1a12 12 0 005.6 5.6l1-2.1a2 2 0 012.2-1.1l4.5.9a2 2 0 011.68 2V19a2 2 0 01-2 2A16 16 0 013 5z",
  },
  {
    label: "WhatsApp",
    value: CONTACT_INFO.whatsapp,
    href: WHATSAPP_URL,
    note: "The fastest way to reach our team.",
    icon: "M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z",
  },
  {
    label: "Location",
    value: CONTACT_INFO.location,
    href: undefined,
    note: "In-person training and project meetings.",
    icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const inquiry = data.get("inquiry")?.toString() ?? "General inquiry";
    const message = [
      "Website inquiry",
      `Name: ${data.get("name")?.toString() ?? ""}`,
      `Email: ${data.get("email")?.toString() ?? ""}`,
      `Phone / WhatsApp: ${data.get("phone")?.toString() ?? ""}`,
      `Inquiry type: ${inquiry}`,
      "",
      "Message:",
      data.get("message")?.toString() ?? "",
    ].join("\n");

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="relative overflow-hidden">
      <PageHero
        eyebrow="Contact Wisnotech"
        title={
          <>
            Let&apos;s talk about what you want to{" "}
            <span className="text-gradient-gold">build or learn.</span>
          </>
        }
        description="Speak with our team about training, software, automation, AI, or a general inquiry. We will respond through WhatsApp, email, or phone."
        align="center"
      />

      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div data-reveal>
              <p className="eyebrow">Reach us directly</p>
              <h2 className="mt-4">Choose the channel that works for you.</h2>
              <p className="mt-3 max-w-md leading-relaxed text-[#64748B]">
                For the quickest response, message us on WhatsApp. For detailed
                proposals or documentation, email is best.
              </p>

              <div className="mt-7 space-y-3">
                {CONTACT_METHODS.map((method) => {
                  const content = (
                    <div className="group flex items-start gap-4 rounded-2xl border border-[#E3E8EF] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#102A56]/25 hover:shadow-soft">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#102A56]/[0.07] text-[#102A56] transition-colors group-hover:bg-[#102A56] group-hover:text-white">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={method.icon}></path>
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#A87E34]">
                          {method.label}
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold text-[#0A1930]">
                          {method.value}
                        </p>
                        <p className="mt-1 text-xs text-[#64748B]">{method.note}</p>
                      </div>
                    </div>
                  );

                  return method.href ? (
                    <a key={method.label} href={method.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={method.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-[#C9A25B]/25 bg-[#C9A25B]/10 px-5 py-4">
                <p className="text-sm leading-relaxed text-[#7A5A22]">
                  <strong className="font-bold">Note:</strong> {BRAND.name} does
                  not publish fixed prices for bespoke software. Projects are
                  quoted after a requirements assessment.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-lift md:p-8"
              data-reveal
              style={{ transitionDelay: "80ms" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#A87E34]">
                    Send a message
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-[#0A1930]">
                    Tell us what you need.
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    Complete the form and we will open WhatsApp with your message
                    ready to send.
                  </p>
                </div>
                <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E] sm:flex">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                  </svg>
                </span>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <Input
                  label="Full Name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                  <Input
                    label="Phone / WhatsApp"
                    name="phone"
                    placeholder="+234 800 000 0000"
                    required
                  />
                </div>
                <Select
                  label="Inquiry Type"
                  name="inquiry"
                  options={[
                    { value: "general", label: "General Inquiry" },
                    { value: "training", label: "Training & Enrollment" },
                    { value: "software", label: "Custom Software Development" },
                    { value: "school", label: "School Management System" },
                    { value: "ai", label: "AI Solutions" },
                    { value: "media", label: "Media & Publishing" },
                  ]}
                />
                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Tell us about your project or question..."
                  required
                  rows={5}
                />
                <Button type="submit" fullWidth>
                  Send via WhatsApp
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Button>
                <p className="text-xs leading-relaxed text-[#64748B]">
                  Prefer email? Write to{" "}
                  <a href={GMAIL_URL} className="font-semibold text-[#102A56] hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                  . We do not share your details with third parties.
                </p>
              </form>

              <div className="mt-6 border-t border-[#E3E8EF] pt-5 text-center">
                <p className="text-sm text-[#64748B]">
                  Looking to enroll in a course instead?
                </p>
                <Link
                  href="/enroll"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#102A56] hover:text-[#A87E34]"
                >
                  Use the enrollment form
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
