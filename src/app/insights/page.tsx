import Link from "next/link";

const ARTICLES = [
  {
    slug: "digital-skills-for-nigerian-youth",
    title: "Digital Skills Every Nigerian Youth Should Learn",
    category: "Digital Skills",
    excerpt:
      "A practical guide to the digital skills that open opportunities for students, graduates, and young professionals in Nigeria.",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    slug: "ai-for-small-business",
    title: "Practical AI Tools for Small Businesses",
    category: "AI and Automation",
    excerpt:
      "How small businesses can use AI tools for customer service, content creation, and workflow automation without technical complexity.",
    date: "2024-02-10",
    readTime: "6 min read",
  },
  {
    slug: "school-management-systems-nigeria",
    title: "Why Schools in Nigeria Need Management Systems",
    category: "Education Technology",
    excerpt:
      "The benefits of digitizing student records, admissions, and administration for Nigerian schools.",
    date: "2024-03-05",
    readTime: "7 min read",
  },
];

export default function InsightsPage() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-4">
            Insights
          </h1>
          <p className="text-lg text-[#344054] leading-relaxed">
            Guides, resources, and articles on digital skills, technology, and
            business innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="block"
            >
              <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl overflow-hidden">
                <div className="h-32 bg-[#E3E8EF] flex items-center justify-center text-xs text-[#64748B]">
                  Featured image
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold text-[#102A56] uppercase tracking-wide mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0A1930] mb-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#344054] leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-[#64748B]">
          More articles coming soon. Subscribe to our updates for new guides.
        </div>
      </div>
    </section>
  );
}