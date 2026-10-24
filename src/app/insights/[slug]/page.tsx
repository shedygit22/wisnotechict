import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/button";

const ARTICLES: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "digital-skills-for-nigerian-youth": {
    title: "Digital Skills Every Nigerian Youth Should Learn",
    category: "Digital Skills",
    date: "January 15, 2024",
    readTime: "5 min read",
    content: `
      <p>Digital skills have become essential for students, graduates, and young professionals in Nigeria. Whether you're looking to start a career, freelance, or build your own business, practical digital skills open doors to opportunities.</p>
      <h2>Web Design and Development</h2>
      <p>Learn to build websites using HTML, CSS, and JavaScript. This is one of the most accessible entry points into technology, and you can start building projects immediately.</p>
      <h2>Graphic Design and Visual Communication</h2>
      <p>Create designs for print and digital media. Branding, layout, and visual communication skills are valuable across every industry.</p>
      <h2>Digital Marketing</h2>
      <p>Promote products and services online using social media, search engines, and email marketing.</p>
      <p>At Wisnotech Academy, we offer practical, project-based training in these areas and more. Our courses emphasize hands-on learning and portfolio development.</p>
    `,
  },
  "ai-for-small-business": {
    title: "Practical AI Tools for Small Businesses",
    category: "AI and Automation",
    date: "February 10, 2024",
    readTime: "6 min read",
    content: `
      <p>Artificial intelligence is no longer just for large technology companies. Small businesses can use practical AI tools to improve customer service, create content, and automate routine tasks.</p>
      <h2>AI Assistants for Customer Service</h2>
      <p>AI-powered chatbots can handle common customer inquiries, freeing your team to focus on complex issues.</p>
      <h2>AI Content Creation</h2>
      <p>Generative AI tools can help with writing, image creation, and video production for marketing.</p>
      <h2>Workflow Automation</h2>
      <p>Connect your business applications and automate repetitive tasks using no-code and low-code tools.</p>
      <p>Wisnotech helps organizations adopt AI in practical, commercially useful ways. Contact us to discuss AI solutions for your business.</p>
    `,
  },
  "school-management-systems-nigeria": {
    title: "Why Schools in Nigeria Need Management Systems",
    category: "Education Technology",
    date: "March 5, 2024",
    readTime: "7 min read",
    content: `
      <p>Many schools in Nigeria still rely on paper records and manual processes. A school management system digitizes student records, admissions, attendance, and administration.</p>
      <h2>Student Information System</h2>
      <p>Centralize student records, grades, and attendance in one secure system.</p>
      <h2>Admission Portal</h2>
      <p>Streamline the admissions process with online applications and automated workflows.</p>
      <h2>Parent and Student Portals</h2>
      <p>Give parents and students secure online access to information.</p>
      <p>Wisnotech builds school management systems, student information systems, and school portals for educational institutions in Nigeria.</p>
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: `${article.category} • ${article.readTime}`,
  };
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export default async function InsightArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  const related = Object.entries(ARTICLES).filter(([key]) => key !== slug);

  return (
    <div className="relative">
      <section className="hero-surface relative overflow-hidden px-4 pb-12 pt-10 md:pb-16 md:pt-12">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,black,transparent)]"
          aria-hidden="true"
        />
        <div className="hero-orb -right-24 top-0 h-72 w-72" aria-hidden="true" />
        <div className="container relative z-10">
          <nav className="mb-8 text-xs text-[#64748B]" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-[#102A56]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#CBD5E1]">/</li>
              <li>
                <Link href="/insights" className="transition-colors hover:text-[#102A56]">
                  Insights
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#CBD5E1]">/</li>
              <li className="line-clamp-1 text-[#0A1930]">{article.title}</li>
            </ol>
          </nav>

          <span className="rounded-full border border-[#E3E8EF] bg-white/80 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#102A56] shadow-sm">
            {article.category}
          </span>
          <h1 className="mt-5 max-w-4xl text-[2.4rem] leading-[1.04] text-[#0A1930] sm:text-5xl lg:text-[3.4rem]">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E3E8EF] pt-5 text-sm text-[#64748B]">
            <span>{article.date}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
            <span>{article.readTime}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
            <span>Wisnotech Insights</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <article>
              <div
                className="article-body max-w-3xl"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="mt-10 max-w-3xl rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft md:p-8" data-reveal>
                <p className="eyebrow">Keep learning</p>
                <h2 className="mt-3">Build practical skills with Wisnotech.</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  Explore project-based training at Wisnotech Academy or speak
                  with our team about a solution for your organization.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/courses">
                    <Button>Explore Courses</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">Talk to Us</Button>
                  </Link>
                </div>
              </div>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-[#E3E8EF] bg-white p-6 shadow-soft">
                <p className="eyebrow">More insights</p>
                <div className="mt-4 space-y-4">
                  {related.map(([relatedSlug, relatedArticle]) => (
                    <Link
                      key={relatedSlug}
                      href={`/insights/${relatedSlug}`}
                      className="group block border-b border-[#E3E8EF] pb-4 last:border-0 last:pb-0"
                    >
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#A87E34]">
                        {relatedArticle.category}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold leading-snug text-[#0A1930] transition-colors group-hover:text-[#102A56]">
                        {relatedArticle.title}
                      </p>
                      <p className="mt-1.5 text-xs text-[#64748B]">
                        {relatedArticle.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#0A1930] p-6 text-white shadow-lift">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#D8B878]">
                  Need guidance?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#CBD5E1]">
                  Tell us what you want to learn or build. We will recommend a
                  practical next step.
                </p>
                <Link href="/contact" className="mt-4 block">
                  <Button fullWidth>Contact Wisnotech</Button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
