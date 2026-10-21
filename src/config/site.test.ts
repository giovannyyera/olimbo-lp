import { describe, expect, it } from "vitest";

import { siteConfig } from "./site";

describe("siteConfig", () => {
  it("mantém soluções e âncoras únicas", () => {
    const solutionTitles = siteConfig.solutions.map(({ title }) =>
      title.trim().toLocaleLowerCase("pt-BR"),
    );
    const anchors = siteConfig.navigation.map(({ href }) => href);

    expect(solutionTitles.every(Boolean)).toBe(true);
    expect(new Set(solutionTitles).size).toBe(solutionTitles.length);
    expect(new Set(anchors).size).toBe(anchors.length);
  });

  it("mantém a estrutura comercial da V2 completa", () => {
    expect(siteConfig.benefits).toHaveLength(4);
    expect(siteConfig.solutions).toHaveLength(4);
    expect(siteConfig.problemSolutions).toHaveLength(5);
    expect(siteConfig.applications).toHaveLength(3);
    expect(siteConfig.process).toHaveLength(4);
    expect(siteConfig.principles).toHaveLength(5);
    expect(siteConfig.faq).toHaveLength(7);
    expect(
      siteConfig.solutions.every(({ whatsappMessage }) =>
        whatsappMessage.startsWith("Olá, Orbe!"),
      ),
    ).toBe(true);
  });

  it("não publica um WhatsApp sem número oficial", () => {
    expect(siteConfig.contact.whatsapp.phone).toBeNull();
  });
});
