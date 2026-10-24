import Link from "next/link";
import Card from "@/components/ui/card";
import { PageHero } from "@/components/layout/page-hero";

const ARTICLES = [
  {
    slug: "digital-skills-for-nigerian-youth",
    title: "Digital Skills Every Nigerian Youth Should Learn",
    category: "Digital Skills",
    excerpt:
      "A practical guide to the digital skills that open opportunities for students, graduates, and young professionals in Nigeria.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/images/courses/students-collaborating.jpg",
    imageAlt: "Students learning digital skills together at Wisnotech Academy",
  },
  {
    slug: "ai-for-small-business",
    title: "Practical AI Tools for Small Businesses",
    category: "AI and Automation",
    excerpt:
      "How small businesses can use AI tools for customer service, content creation, and workflow automation without technical complexity.",
    date: "2024-02-10",
    readTime: "6 min read",
    image: "/images/courses/ai-content-creation.jpg",
    imageAlt: "Content creator using AI tools for a small business",
  },
  {
    slug: "school-management-systems-nigeria",
    title: "Why Schools in Nigeria Need Management Systems",
    category: "Education Technology",
    excerpt:
      "The benefits of digitizing student records, admissions, and administration for Nigerian schools.",
    date: "2024-03-05",
    readTime: "7 min read",
    image: "/images/courses/data-processing.jpg",
    imageAlt: "Administrator working with digital records on a computer",
  },
];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <div className="relative overflow-hidden">
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Practical thinking for a{" "}
            <span className="text-gradient-gold">digital future.</span>
          </>
        }
        description="Guides, resources, and articles on digital skills, technology, AI, and business innovation. Written for people who want practical direction, not hype."
        stats={[
          { value: `${ARTICLES.length}`, label: "Articles" },
          { value: "3", label: "Topics" },
          { value: "Practical", label: "Focus" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="eyebrow">Latest reading</p>
              <h2 className="mt-3">Start with the essentials.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#64748B]">
              Short, focused guides on skills, tools, and technology decisions
              that matter to individuals and organizations.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Link
              href={`/insights/${featured.slug}`}
              className="group block"
              data-reveal
            >
              <Card hoverable className="flex h-full flex-col overflow-hidden p-4">
                <div className="relative h-64 overflow-hidden rounded-xl bg-[#F5F7FA] md:h-80">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={900}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(7,17,31,0.45)_100%)]" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#102A56] backdrop-blur">
                    Featured
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-2 pt-5">
                  <div className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#A87E34]">
                    <span>{featured.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
                    <span className="text-[#64748B]">{featured.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-[#0A1930]">
                    {featured.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-[#64748B]">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#E3E8EF] pt-4">
                    <span className="text-xs text-[#64748B]">
                      {formatDate(featured.date)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]">
                      Read article
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            </Link>

            <div className="flex flex-col gap-6">
              {rest.map((article, idx) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group block"
                  data-reveal
                  style={{ transitionDelay: `${idx * 70}ms` }}
                >
                  <Card hoverable className="flex h-full flex-col p-4">
                    <div className="flex items-start gap-4">
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#F5F7FA] sm:h-28 sm:w-32">
                        <img
                          src={article.image}
                          alt={article.imageAlt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          width={300}
                          height={220}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#A87E34]">
                          {article.category}
                        </p>
                        <h3 className="mt-2 text-base font-bold leading-snug text-[#0A1930]">
                          {article.title}
                        </h3>
                        <div className="mt-3 flex items-center gap-2 text-[0.68rem] text-[#64748B]">
                          <span>{formatDate(article.date)}</span>
                          <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#102A56] transition-colors group-hover:text-[#A87E34]">
                      Read article
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-[#64748B]" data-reveal>
            More articles are coming soon. Follow our updates for new guides.
          </p>
        </div>
      </section>
    </div>
  );
}
