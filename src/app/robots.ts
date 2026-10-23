export async function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://wisnotech.vercel.app/sitemap.xml",
  };
}

export default robots;