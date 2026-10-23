import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: `${siteConfig.url}/sitemap.xml`,
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
