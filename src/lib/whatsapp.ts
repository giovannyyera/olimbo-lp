const WHATSAPP_NUMBER_PATTERN = /^[1-9]\d{7,14}$/;

export function createWhatsAppUrl(
  phone: string | null,
  message: string,
): string | null {
  if (!phone) {
    return null;
  }

  const normalizedPhone = phone.replace(/\D/g, "");

  if (!WHATSAPP_NUMBER_PATTERN.test(normalizedPhone)) {
    return null;
  }

  const params = new URLSearchParams({ text: message.trim() });

  return `https://wa.me/${normalizedPhone}?${params.toString()}`;
}
