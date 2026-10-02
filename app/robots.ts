import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://artechnohub.com.np/sitemap.xml",
    host: "https://artechnohub.com.np",
  };
}
