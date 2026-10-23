import { siteConfig } from "@/config/site";
import {
  createFaqStructuredData,
  serializeStructuredData,
} from "@/lib/structured-data";

export function StructuredData() {
  const faqData = createFaqStructuredData(siteConfig.faq, siteConfig.url);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(faqData) }}
    />
  );
}
