import type { WhatsAppContact } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type ContactCtaProps = {
  contact: WhatsAppContact;
  label: string;
  message?: string;
  variant?: "gold" | "dark" | "outline";
  className?: string;
};

const variantClass = {
  gold: "button button-gold",
  dark: "button button-dark",
  outline: "button button-outline",
} as const;

export function ContactCta({
  contact,
  label,
  message,
  variant = "gold",
  className = "",
}: ContactCtaProps) {
  const { phone, message: defaultMessage, unavailableMessage } = contact;
  const href = createWhatsAppUrl(phone, message ?? defaultMessage);
  const classes = `${variantClass[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (abre em nova aba)`}
      >
        <span>{label}</span>
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <button
      className={`${classes} button-disabled`}
      type="button"
      disabled
      aria-label={`${label}. ${unavailableMessage}`}
      title={unavailableMessage}
      data-contact-status="unavailable"
    >
      <span>{label}</span>
      <span aria-hidden="true">↗</span>
    </button>
  );
}
