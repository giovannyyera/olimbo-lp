import Image from "next/image";

import { ContactCta } from "@/components/contact-cta";
import { projectOffer } from "@/config/project-offer";
import { siteConfig } from "@/config/site";

export function WhyOlimboSection() {
  return (
    <section
      className="project-offer section-anchor"
      id="sobre"
      aria-labelledby="project-offer-title"
    >
      <div className="shell project-offer-grid">
        <div className="project-offer-copy reveal">
          <p className="project-offer-eyebrow">{projectOffer.eyebrow}</p>
          <h2 id="project-offer-title">{projectOffer.title}</h2>
          <p className="project-offer-description">{projectOffer.description}</p>
          <ul className="project-offer-benefits">
            {projectOffer.benefits.map((benefit) => (
              <li key={benefit.title}>
                <span className="project-offer-check" aria-hidden="true">✓</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="project-offer-action">
            <ContactCta
              contact={siteConfig.contact.whatsapp}
              label={projectOffer.ctaLabel}
              message={projectOffer.message}
              className="project-offer-button"
            />
            <p className="project-offer-next-step">{projectOffer.nextStep}</p>
            <p className="project-offer-contact-note">
              {siteConfig.contact.whatsapp.note}
            </p>
          </div>
        </div>
        <div className="project-offer-visual reveal">
          <Image
            src="/images/olimbo-project-offer.webp"
            alt=""
            width={1536}
            height={1024}
            sizes="(min-width: 64rem) 1350px, (min-width: 40rem) 100vw, 720px"
            className="project-offer-image"
          />
          <div className="project-offer-visual-shade" aria-hidden="true" />
          <p className="project-offer-image-label">{projectOffer.visualLabel}</p>
          <div className="project-offer-card">
            <div className="project-offer-card-brand">
              <Image
                src="/brand/olimbo-symbol-transparent.png"
                alt="Olimbo"
                width={48}
                height={48}
              />
            </div>
            <p className="project-offer-card-title">{projectOffer.visualTitle}</p>
            <ul className="project-offer-services" aria-label="Soluções Olimbo">
              {projectOffer.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
