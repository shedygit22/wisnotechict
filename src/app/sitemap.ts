import { getAvailableCourses } from "@/lib/courses";

export async function generateSitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://wisnotech.vercel.app";

  const staticRoutes = [
    "",
    "/about",
    "/academy",
    "/courses",
    "/solutions",
    "/solutions/school-management-system",
    "/solutions/custom-software-development",
    "/solutions/web-development",
    "/solutions/mobile-app-development",
    "/solutions/business-automation",
    "/solutions/ai-solutions",
    "/solutions/media-and-publishing",
    "/ai-innovation",
    "/corporate-training",
    "/projects",
    "/insights",
    "/contact",
    "/enroll",
    "/privacy-policy",
    "/terms",
    "/refund-policy",
    "/thank-you",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const courseRoutes = getAvailableCourses().map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const insightRoutes = [
    "digital-skills-for-nigerian-youth",
    "ai-for-small-business",
    "school-management-systems-nigeria",
  ].map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...insightRoutes];
}

export default generateSitemap;