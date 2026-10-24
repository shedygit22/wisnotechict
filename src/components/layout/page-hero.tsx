import type { ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

interface PageHeroAction {
  href: string;
  label: string;
}

interface PageHeroStat {
  value: string;
  label: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryAction?: PageHeroAction;
  secondaryAction?: PageHeroAction;
  stats?: PageHeroStat[];
  align?: "left" | "center";
  aside?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats,
  align = "left",
  aside,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className="hero-surface relative overflow-hidden px-4 pb-14 pt-12 md:pb-20 md:pt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="hero-orb -right-24 top-0 h-72 w-72 md:h-96 md:w-96" aria-hidden="true" />
      <div className="hero-orb hero-orb-secondary -left-32 bottom-0 h-64 w-64" aria-hidden="true" />

      <div className="container relative z-10">
        <div
          className={
            aside
              ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
              : centered
                ? "mx-auto max-w-3xl text-center"
                : "max-w-3xl"
          }
        >
          <div className={centered ? "mx-auto max-w-3xl" : ""}>
            <span
              className={`hero-animate inline-flex items-center gap-2.5 rounded-full border border-[#E3E8EF] bg-white/80 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#102A56] shadow-sm backdrop-blur ${
                centered ? "justify-center" : ""
              }`}
            >
              <span className="eyebrow-dot" />
              {eyebrow}
            </span>

            <h1
              className="hero-animate mt-5 text-[2.3rem] leading-[1.06] text-[#0A1930] sm:text-5xl lg:text-[3.5rem]"
              style={{ animationDelay: "100ms" }}
            >
              {title}
            </h1>

            <p
              className={`hero-animate mt-5 text-lg leading-relaxed text-[#475569] ${
                centered ? "mx-auto max-w-2xl" : "max-w-2xl"
              }`}
              style={{ animationDelay: "180ms" }}
            >
              {description}
            </p>

            {(primaryAction || secondaryAction) && (
              <div
                className={`hero-animate mt-7 flex flex-wrap gap-3 ${
                  centered ? "justify-center" : ""
                }`}
                style={{ animationDelay: "260ms" }}
              >
                {primaryAction && (
                  <Link href={primaryAction.href}>
                    <Button size="lg">
                      {primaryAction.label}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Button>
                  </Link>
                )}
                {secondaryAction && (
                  <Link href={secondaryAction.href}>
                    <Button variant="outline" size="lg">
                      {secondaryAction.label}
                    </Button>
                  </Link>
                )}
              </div>
            )}

            {stats && stats.length > 0 && (
              <div
                className={`hero-animate mt-9 grid max-w-lg gap-5 border-t border-[#E3E8EF] pt-6 ${
                  centered ? "mx-auto grid-cols-3 text-center" : "grid-cols-3"
                }`}
                style={{ animationDelay: "340ms" }}
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold text-[#0A1930]">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {aside && (
            <div
              className="hero-animate relative mx-auto w-full max-w-md lg:max-w-none"
              style={{ animationDelay: "240ms" }}
            >
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
