"use client";

import { useEffect, useRef, useState } from "react";

import type { NavigationItem, WhatsAppContact } from "@/config/site";

import { ContactCta } from "./contact-cta";

type MobileMenuProps = {
  navigation: readonly NavigationItem[];
  contact: WhatsAppContact;
};

export function MobileMenu({ navigation, contact }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div className="mobile-menu-wrap">
      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">{isOpen ? "Fechar" : "Menu"}</span>
        <span
          className={`menu-icon ${isOpen ? "menu-icon-open" : ""}`}
          aria-hidden="true"
        >
          <i />
          <i />
        </span>
      </button>

      {isOpen ? (
        <div className="mobile-menu" id="mobile-navigation">
          <nav aria-label="Navegação móvel">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span aria-hidden="true">↘</span>
              </a>
            ))}
          </nav>
          <ContactCta
            contact={contact}
            label="Falar sobre meu projeto"
            className="w-full"
          />
        </div>
      ) : null}
    </div>
  );
}
