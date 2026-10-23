type FaqEntry = {
  question: string;
  answer: string;
};

export function createFaqStructuredData(faq: readonly FaqEntry[], siteUrl: string) {
  const url = new URL("/", siteUrl).href;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: "pt-BR",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeStructuredData(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
