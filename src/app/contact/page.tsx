"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  Input,
  Select,
  Textarea,
} from "@/components/ui/input";
import { CONTACT_INFO, WHATSAPP_URL, GMAIL_URL, TEL_URL, BRAND } from "@/types";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-6">
                Contact Wisnotech
              </h1>
              <p className="text-lg text-[#344054] leading-relaxed mb-8">
                {BRAND.positioning}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#102A56]/10 flex items-center justify-center text-[#102A56] font-bold text-lg shrink-0">
                    ✉
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1930] mb-1">Email</h3>
                    <a
                      href={GMAIL_URL}
                      className="text-lg font-semibold text-[#0A1930] hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#102A56]/10 flex items-center justify-center text-[#102A56] font-bold text-lg shrink-0">
                    ☎
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1930] mb-1">Phone</h3>
                    <a
                      href={TEL_URL}
                      className="text-lg font-semibold text-[#0A1930] hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="text-sm text-[#64748B] mt=0.5">
                      {CONTACT_INFO.internationalPhone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#102A56]/10 flex items-center justify-center text-[#102A56] font-bold text-lg shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1930] mb-1">WhatsApp</h3>
                    <a
                      href={WHATSAPP_URL}
                      className="text-lg font-semibold text-[#0A1930] hover:underline"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#102A56]/10 flex items-center justify-center text-[#102A56] font-bold text-lg shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1930] mb-1">Location</h3>
                    <p className="text-lg font-semibold text-[#0A1930]">
                      {CONTACT_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-[#0A1930] mb-6">Send Us a Message</h2>
              <p className="text-sm text-[#64748B] mb-6">
                Use the form below to send us a general inquiry. We will
                respond via email or WhatsApp.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input
                  label="Full Name"
                  placeholder="Your full name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
                <Input
                  label="Phone / WhatsApp"
                  placeholder="+234 800 000 0000"
                  required
                />
                <Select
                  label="Inquiry Type"
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
                  placeholder="Tell us about your project or question..."
                  required
                  rows={5}
                />
                <Button type="submit" fullWidth className="md:w-auto">
                  Send Message
                </Button>
                <p className="text-xs text-[#64748B] mt=3">
                  Your message will be sent through our secure contact system.
                  We do not share your details with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}