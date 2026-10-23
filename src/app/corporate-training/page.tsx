import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function CorporateTrainingPage() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A1930] leading-tight mb-6">
          Corporate Digital Skills Training
        </h1>
        <p className="text-lg text-[#344054] leading-relaxed mb-8">
          Wisnotech provides practical digital skills training for
          organizations — from small businesses to corporate teams, schools,
          and media houses.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#0A1930] mb-4">Training Areas</h2>
            <ul className="space-y-3 text-[#344054] leading-relaxed mb-8">
              {[
                "Digital skills training for employees",
                "Microsoft Office and digital productivity",
                "Data processing and digital office skills",
                "Digital marketing for business teams",
                "AI tools for business and productivity",
                "Business automation and workflow development",
                "Custom software training for internal teams",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#102A56]/10 text-[#102A56] text-xs flex items-center justify-center">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F5F7FA] border border-[#E3E8EF] rounded-xl p-8">
            <h2 className="text-xl font-bold text-[#0A1930] mb-4">How Corporate Training Works</h2>
            <ol className="space-y-4 text-[#344054] leading-relaxed mb-8">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                We discuss your organization's training needs and goals.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                  2
                </span>
                We recommend suitable courses and delivery formats.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                  3
                </span>
                We provide a proposed scope and quotation.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#102A56] text-white flex items-center justify-center text-xs font-bold">
                  4
                </span>
                Training is delivered in-person, online, or hybrid.
              </li>
            </ol>
            <Link href="/contact">
              <Button>Discuss Corporate Training</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}