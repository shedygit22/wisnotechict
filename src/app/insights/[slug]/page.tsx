import Link from "next/link";
import { notFound } from "next/navigation";

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

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <nav className="mb-8 text-xs text-[#64748B]">
          <Link href="/insights" className="hover:text-[#102A56]">← Back to Insights</Link>
        </nav>
        <article>
          <span className="inline-block text-xs font-semibold text-[#102A56] uppercase tracking-wide mb-2 block">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#64748B] mb-8">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <div className="prose prose-lg text-[#344054] leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </section>
  );
}