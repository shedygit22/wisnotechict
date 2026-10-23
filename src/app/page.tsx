import Link from "next/link";
import { getAvailableCourses } from "@/lib/courses";
import { PRICING_RULES, formatNaira } from "@/lib/pricing";
import { CONTACT_INFO, WHATSAPP_URL, GMAIL_URL, TEL_URL, BRAND } from "@/types";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

const HERO_IMAGE = "/images/hero-training.svg";

export default function HomePage() {
  const availableCourses = getAvailableCourses().slice(0, 4);

  return (
    <div className="relative overflow-hidden">
      {/* Section 1: Hero */}
      <section className="relative px-4 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold tracking-wide text-[#102A56] uppercase bg-[#102A56]/10 rounded-full">
                Digital Agency & Training Academy
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight">
                Technology Skills and Digital Solutions for a Smarter Future.
              </h1>
              <p className="text-lg text-[#344054] leading-relaxed">
                Wisnotech equips individuals with practical digital skills and
                helps organizations build software, automate workflows, and use
                AI to solve real business problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses">
                  <Button size="lg">Explore Our Training</Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline" size="lg">
                    Build a Solution for Your Business
                  </Button>
                </Link>
                <a
                  href={WHATSAPP_URL}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#0A1930] border border-[#E3E8EF] rounded-md hover:bg-[#F5F7FA] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M12 12a5.855 5.855 0 01-5.855-5.855H14m0 0v1.5m0 0a5.855 5.855 0 015.855 5.855H18m0 0v1.5m0 0a5.855 5.855 0 01-5.855 5.855h-1.5m0 0a5.855 5.855 0 01-5.855-5.855V12m0 0h-1.5m0 0a5.855 5.855 0 015.855-5.855h1.5m0 0a5.855 5.855 0 01-5.855 5.855V12z"></path>
                  </svg>
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-[#E3E8EF] shadow-sm bg-[#F5F7FA]">
              <img
                src={HERO_IMAGE}
                alt="Students in a practical technology training session at Wisnotech Academy"
                className="w-full h-full object-cover"
                loading="eager"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust & Value Proposition */}
      <section className="py-16 border-y border-[#E3E8EF] bg-[#F5F7FA]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-4">
              Who We Serve
            </h2>
            <p className="text-[#344054] max-w-2xl mx-auto">
              We work with individuals, entrepreneurs, schools, media
              organizations, startups, and enterprise teams across Nigeria and
              internationally.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Individuals & Students",
                desc: "Practical digital skills training for learners at every level, from beginners to working professionals.",
              },
              {
                title: "Entrepreneurs & Freelancers",
                desc: "Build your own websites, market your business, and deliver digital services to clients.",
              },
              {
                title: "Schools & Institutions",
                desc: "School management systems, student portals, websites, and digital skills training for educators and students.",
              },
              {
                title: "Startups & Growing Businesses",
                desc: "Custom software, web and mobile apps, automation, and AI tools to scale your operations.",
              },
              {
                title: "Media Organizations",
                desc: "Publishing platforms, content management systems, and media company websites.",
              },
              {
                title: "Corporate & Enterprise Teams",
                desc: "Corporate digital training, internal business dashboards, CRM integrations, and digital transformation consulting.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-[#102A56]/10 text-[#102A56] font-bold text-lg">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#0A1930] mb-2">{item.title}</h3>
                <p className="text-sm text-[#344054] leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Two Customer Journeys */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-8 md:p-12 h-full flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[#102A56] flex items-center justify-center mb-6 text-white font-bold text-lg">
                A
              </div>
              <h2 className="text-2xl font-bold text-[#0A1930] mb-4">Learn a Digital Skill</h2>
              <p className="text-[#344054] leading-relaxed mb-6">
                Choose from practical, project-based courses in web development,
                graphic design, UI/UX, video editing, AI content creation,
                digital marketing, software development, and more. Learn by
                building real projects you can add to your portfolio.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Hands-on, guided practical training",
                  "Real projects and portfolio development",
                  "In-person, online, and hybrid formats",
                  "Student support and feedback",
                  "Transparent pricing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#344054]">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/courses">
                <Button fullWidth>Find Your Course</Button>
              </Link>
            </div>
            <div className="bg-[#0A1930] border border-[#102A56] rounded-xl p-8 md:p-12 h-full flex flex-col text-white">
              <div className="w-10 h-10 rounded-lg bg-[#102A56] flex items-center justify-center mb-6 text-white font-bold text-lg">
                B
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Build a Business Solution</h2>
              <p className="text-[#E3E8EF] leading-relaxed mb-6">
                We build custom software, school management systems, websites,
                mobile apps, automation workflows, and AI solutions for schools,
                startups, media houses, NGOs, and corporations.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Custom business software and management systems",
                  "School management systems and portals",
                  "Web and mobile application development",
                  "Business process automation",
                  "AI assistants and AI-powered customer service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#CBD5E1]">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/solutions">
                <Button variant="outline" fullWidth className="text-[#0A1930] border-white hover:text-white hover:bg-white">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Training Programs */}
      <section className="py-16 border-y border-[#E3E8EF]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-4">Featured Training Programs</h2>
            <p className="text-[#344054] max-w-2xl mx-auto">
              Practical, project-based courses designed to help you build real
              digital capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableCourses.map((course) => (
              <Card key={course.id} hoverable>
                <div className="h-32 rounded-lg bg-[#F5F7FA] overflow-hidden mb-4">
                  <img
                    src={course.image}
                    alt={course.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                </div>
                <span className="inline-block mb-2 text-xs font-semibold text-[#102A56] uppercase tracking-wide">
                  {course.status === "available" ? "Available" : "Planned"}
                </span>
                <h3 className="text-lg font-semibold text-[#0A1930] mb-2 leading-tight">{course.name}</h3>
                <p className="text-sm text-[#344054] leading-relaxed mb-4">
                  {course.shortDescription}
                </p>
                <div className="space-y-1 mb-4 text-xs text-[#64748B]">
                  <p>
                    {course.duration
                      ? `Duration: {course.duration}`
                      : "Duration: Request details"}
                  </p>
                  <p>{course.deliveryFormat.replace("-", " ")} training</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#0A1930]">
                    {course.baseFee ? formatNaira(course.baseFee) : "Request details"}
                  </span>
                  <Link href={`/courses/${course.slug}`} className="text-xs font-semibold text-[#102A56] hover:underline">
                    View Course
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/courses" className="text-sm font-semibold text-[#102A56] hover:underline">
              View all courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Business Solutions */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-4">Business Technology Solutions</h2>
            <p className="text-[#344054] max-w-2xl mx-auto">
              Custom digital systems for schools, startups, media houses, NGOs,
              and enterprises. We focus on business outcomes, not just
              technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "School Management Systems",
                desc: "Student information systems, admission portals, and administrative tools that improve school operations.",
                problem: "Disconnected records and manual administration slow down school operations.",
                value: "Centralized student records, automated admissions, and streamlined school management.",
              },
              {
                title: "Custom Software Development",
                desc: "Tailored business software and management systems built around your organization's workflows.",
                problem: "Generic tools don't fit your unique business processes.",
                value: "Software built for your operations, reducing repetitive work and replacing spreadsheets.",
              },
              {
                title: "Web & Mobile Development",
                desc: "Professional websites, e-commerce platforms, and mobile applications for businesses and institutions.",
                problem: "Weak online presence limits customer reach and credibility.",
                value: "A digital presence that represents your organization and serves your audience.",
              },
              {
                title: "Business Automation",
                desc: "Workflow automation and AI assistants that reduce manual effort and improve response times.",
                problem: "Repetitive administrative tasks consume staff time and create errors.",
                value: "Automated workflows that let your team focus on higher-value work.",
              },
              {
                title: "AI Solutions",
                desc: "AI-powered customer service, sales assistants, and knowledge-base tools for practical business use.",
                problem: "Customer inquiries and routine tasks overwhelm small teams.",
                value: "AI assistants that handle common queries and qualify leads around the clock.",
              },
              {
                title: "Media & Publishing",
                desc: "Publishing platforms, content management systems, and media company websites.",
                problem: "Media houses need flexible platforms to publish and manage content efficiently.",
                value: "CMS and publishing tools built for content teams and editorial workflows.",
              },
            ].map((item, idx) => (
              <Card key={idx} hoverable>
                <h3 className="text-lg font-semibold text-[#0A1930] mb-2">{item.title}</h3>
                <p className="text-sm text-[#344054] leading-relaxed mb-4">{item.desc}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#102A56] uppercase tracking-wide mb-1">The problem</p>
                  <p className="text-xs text-[#64748B]">{item.problem}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#102A56] uppercase tracking-wide mb-1">The value</p>
                  <p className="text-xs text-[#64748B]">{item.value}</p>
                </div>
                <Link
                  href="/solutions"
                  className="text-xs font-semibold text-[#102A56] hover:underline flex items-center gap-1"
                >
                  Learn more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/solutions" className="text-sm font-semibold text-[#102A56] hover:underline">
              Explore Our Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: How Wisnotech Works */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-6">How Training Works</h2>
              <ol className="space-y-5">
                {[
                  "Choose a course from our catalog.",
                  "Submit your enrollment details.",
                  "Confirm your training format, schedule, and fee.",
                  "Complete payment through an approved process.",
                  "Begin practical, project-based training.",
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#102A56] text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-[#344054] leading-relaxed">{step}</p>
                  </div>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-6">How Business Projects Work</h2>
              <ol className="space-y-5">
                {[
                  "Share your business challenge with us.",
                  "Discuss requirements with our team.",
                  "Receive a proposed scope and quotation.",
                  "Approve the project and implementation plan.",
                  "Build, test, deploy, and support under agreed terms.",
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A1930] text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-[#E3E8EF] leading-relaxed">{step}</p>
                  </div>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Practical Learning */}
      <section className="py-16 border-y border-[#E3E8EF] bg-[#F5F7FA]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-6">Practical Learning, Real Results</h2>
              <p className="text-[#344054] leading-relaxed mb-6">
                Every Wisnotech course emphasizes hands-on practice. Students
                build real projects, solve actual problems, and graduate with a
                portfolio of work they can show employers and clients.
              </p>
              <ul className="space-y-3">
                {[
                  "Guided projects in every course",
                  "Portfolio development support",
                  "Problem-solving focused curriculum",
                  "Real-world applications, not just theory",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#344054]">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#102A56]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden border border-[#E3E8EF] bg-[#F5F7FA] flex items-center justify-center">
              <img
                src="/images/courses/Students_collaborating_at_desk_w._20261023174037.jpg"
                alt="Students in practical training sessions building projects and portfolios at Wisnotech Academy"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Case Studies */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-4">Selected Work</h2>
            <p className="text-[#344054] max-w-2xl mx-auto">
              We publish only verified project demonstrations. Where client work
              is not yet available for publication, we show clearly labeled
              demonstration projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "School Management System — Demonstration",
                desc: "A demonstration of a student information system with admission portal and administrative dashboard.",
                type: "Demonstration Project",
              },
              {
                title: "Business Website — Demonstration",
                desc: "A responsive business website built for a professional services organization.",
                type: "Demonstration Project",
              },
              {
                title: "E-commerce Platform — Demonstration",
                desc: "An online store platform with product catalog, cart, and payment integration.",
                type: "Demonstration Project",
              },
            ].map((item, idx) => (
              <Card key={idx} hoverable>
                <div className="h-32 rounded-lg bg-[#F5F7FA] mb-4 flex items-center justify-center text-xs text-[#64748B]">
                  {item.type}
                </div>
                <h3 className="text-lg font-semibold text-[#0A1930] mb-2">{item.title}</h3>
                <p className="text-sm text-[#344054] leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-block text-xs font-semibold text-[#64748B] bg-[#F5F7FA] px-2 py-1 rounded">
                  {item.type}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: What to Expect */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-4">What to Expect</h2>
            <p className="text-[#344054] max-w-2xl mx-auto">
              Honest, practical training and technology solutions without
              exaggerated promises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "No guaranteed income",
                desc: "We focus on practical skills and portfolio development. We do not promise employment or income outcomes.",
              },
              {
                title: "Transparent pricing",
                desc: "Course fees are displayed upfront. Bespoke projects receive a quotation after assessment.",
              },
              {
                title: "Verified projects only",
                desc: "We publish only real, verified work. Demonstration projects are clearly labeled.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-semibold text-[#0A1930] mb-2">{item.title}</h3>
                <p className="text-sm text-[#344054] leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1930] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4" id="faq-list">
            {[
              {
                q: "What courses are available?",
                a: "Wisnotech Academy offers web development, graphic design, UI/UX design, video editing, AI content creation, digital marketing, software development, Microsoft Office, and data processing. Some courses are planned and not yet open for enrollment.",
              },
              {
                q: "Where is training located?",
                a: "In-person training is held in Uromi, Edo State, Nigeria. Some courses are available online or in hybrid format.",
              },
              {
                q: "Is accommodation provided?",
                a: "Accommodation may be available for eligible students travelling from outside Edo State for in-person programs, where the offer has been confirmed. Please confirm with our team.",
              },
              {
                q: "How much do courses cost?",
                a: "Course fees are listed on each course page. Standard in-person training starts at ₦300,000 for Edo State residents and ₦500,000 for students from outside Edo State. Online training has course-specific pricing.",
              },
              {
                q: "Do you build custom software?",
                a: "Yes. We build custom business software, school management systems, websites, mobile apps, and AI solutions. Prices are quoted after assessing your requirements.",
              },
              {
                q: "How do I enroll?",
                a: "Select your course on our website, complete the enrollment form, and submit your details. You will be directed to WhatsApp to continue the process with our team.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border border-[#E3E8EF] rounded-lg p-5">
                <button
                  className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#0A1930] hover:text-[#102A56] transition-colors"
                  aria-expanded="false"
                  aria-controls={`faq-${idx}`}
                >
                  {faq.q}
                  <svg className="w-4 h-4 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div id={`faq-${idx}`} className="hidden mt-3 text-sm text-[#344054] leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Final Conversion */}
      <section className="py-20 bg-[#0A1930] text-white border-t border-[#102A56]">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Next Digital Advantage?</h2>
          <p className="text-[#CBD5E1] leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you want to learn a practical digital skill or build a
            technology solution for your organization, we are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enroll">
              <Button size="lg">Enroll in a Course</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#0A1930]">
                Discuss a Business Project
              </Button>
            </Link>
          </div>
          <div className="mt-10 space-y-2 text-sm text-[#94A3B8]">
            <p>Phone: <a href={TEL_URL} className="text-[#102A56] underline">{CONTACT_INFO.phone}</a></p>
            <p>WhatsApp: <a href={WHATSAPP_URL} className="text-[#102A56] underline">{CONTACT_INFO.whatsapp}</a></p>
            <p>Email: <a href={GMAIL_URL} className="text-[#102A56] underline">{CONTACT_INFO.email}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}