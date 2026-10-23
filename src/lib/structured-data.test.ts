import { describe, expect, it } from "vitest";

import { siteConfig } from "../config/site";

import {
  createFaqStructuredData,
  serializeStructuredData,
} from "./structured-data";

describe("FAQ structured data", () => {
  it("espelha as perguntas exibidas na página", () => {
    const data = createFaqStructuredData(siteConfig.faq, siteConfig.url);

    expect(data["@type"]).toBe("FAQPage");
    expect(data.url).toBe("https://olimbo.dev.br/");
    expect(data["@id"]).toBe("https://olimbo.dev.br/#faq");
    expect(data.inLanguage).toBe("pt-BR");
    expect(data.mainEntity).toHaveLength(siteConfig.faq.length);
    expect(data.mainEntity.map(({ name, acceptedAnswer }) => ({
      question: name,
      answer: acceptedAnswer.text,
    }))).toEqual(siteConfig.faq);
  });

  it("escapa marcação antes de inserir o JSON no HTML", () => {
    const input = { value: '</script><script>alert("Olimbo")</script>' };
    const serialized = serializeStructuredData(input);
    expect(serialized).not.toContain("<");
    expect(JSON.parse(serialized)).toEqual(input);
  });
});
