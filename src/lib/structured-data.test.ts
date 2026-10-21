import { describe, expect, it } from "vitest";

import { siteConfig } from "../config/site";

import {
  createFaqStructuredData,
  serializeStructuredData,
} from "./structured-data";

describe("FAQ structured data", () => {
  it("espelha as perguntas exibidas na página", () => {
    const data = createFaqStructuredData(siteConfig.faq);

    expect(data["@type"]).toBe("FAQPage");
    expect(data.mainEntity).toHaveLength(siteConfig.faq.length);
    expect(data.mainEntity[0]?.name).toBe(siteConfig.faq[0].question);
  });

  it("escapa marcação antes de inserir o JSON no HTML", () => {
    expect(serializeStructuredData({ value: "</script>" })).not.toContain("<");
  });
});
