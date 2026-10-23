import { describe, expect, it } from "vitest";

import { createWhatsAppUrl } from "./whatsapp";

describe("createWhatsAppUrl", () => {
  it("não cria link sem um número oficial válido", () => {
    expect(createWhatsAppUrl(null, "Olá")).toBeNull();
    expect(createWhatsAppUrl("0000", "Olá")).toBeNull();
  });

  it("normaliza o número e inclui a mensagem", () => {
    expect(createWhatsAppUrl("+55 (11) 99999-9999", "Olá, Olimbo! ")).toBe(
      "https://wa.me/5511999999999?text=Ol%C3%A1%2C+Olimbo%21",
    );
  });

  it("rejeita números fora dos limites internacionais", () => {
    for (const phone of ["", "00000000", "1234567", "1234567890123456"]) {
      expect(createWhatsAppUrl(phone, "Olá")).toBeNull();
    }
  });

  it("preserva acentos, quebras de linha e símbolos na mensagem", () => {
    const message = "Olá, Olimbo!\nSites & automações? #projeto";
    const href = createWhatsAppUrl("+55 (18) 99671-6753", ` ${message} `);
    const url = new URL(href!);
    expect(url.pathname).toBe("/5518996716753");
    expect(url.searchParams.get("text")).toBe(message);
  });
});
