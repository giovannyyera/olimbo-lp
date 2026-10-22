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
});
