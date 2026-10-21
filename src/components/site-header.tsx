import { siteConfig } from "@/config/site";

import { BrandLogo } from "./brand-logo";
import { ContactCta } from "./contact-cta";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <a className="brand-link" href="#inicio" aria-label="Orbe, início">
          <BrandLogo priority />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="desktop-cta">
          <ContactCta
            contact={siteConfig.contact.whatsapp}
            label="Falar sobre meu projeto"
          />
        </div>

        <MobileMenu
          navigation={siteConfig.navigation}
          contact={siteConfig.contact.whatsapp}
        />
      </div>
    </header>
  );
}
