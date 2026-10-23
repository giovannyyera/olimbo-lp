import { siteConfig } from "@/config/site";

import { SectionHeading } from "@/components/section-heading";

export function FaqSection() {
  return (
    <section className="section faq-section reveal" id="faq">
      <div className="shell faq-grid">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tire suas dúvidas. Dê o primeiro passo."
          description="Você não precisa chegar com todas as respostas. Veja como começar a conversa sobre o seu projeto."
        />
        <div className="faq-list">
          {siteConfig.faq.map((item, index) => (
            <details key={item.question} name="faq">
              <summary>
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
