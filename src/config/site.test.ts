import { describe, expect, it } from "vitest";

import { siteConfig } from "./site";
import { projectOffer } from "./project-offer";
import { createWhatsAppUrl } from "../lib/whatsapp";

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
    expect(siteConfig.process).toHaveLength(4);
    expect(siteConfig.faq).toHaveLength(7);
    expect(
      siteConfig.solutions.every(({ whatsappMessage }) =>
        whatsappMessage.startsWith("Olá, Olimbo!"),
      ),
    ).toBe(true);
  });

  it("gera destinos de WhatsApp com o número centralizado e as mensagens", () => {
    const { phone, message } = siteConfig.contact.whatsapp;
    expect(phone).toMatch(/^\+55 \(\d{2}\) 9\d{4}-\d{4}$/);

    for (const text of [
      message,
      ...siteConfig.solutions.map(({ whatsappMessage }) => whatsappMessage),
      projectOffer.message,
    ]) {
      const href = createWhatsAppUrl(phone, text);
      expect(href).not.toBeNull();
      const url = new URL(href!);
      expect(url.origin).toBe("https://wa.me");
      expect(url.pathname).toBe(`/${phone?.replace(/\D/g, "")}`);
      expect(url.searchParams.get("text")).toBe(text);
    }
  });
});
