"use client";

import Image from "next/image";
import { useState } from "react";

import { creatives } from "@/config/creatives";

export function HeroProductVisual() {
  const [selected, setSelected] = useState(0);

  return (
    <figure className="hero-showcase" aria-label="Explore nossas soluções em imagens">
      <div className="showcase-stage">
        {creatives.map((creative, index) => (
          <div
            className="showcase-slide"
            id={`creative-${creative.id}`}
            data-active={selected === index}
            aria-hidden={selected !== index}
            key={creative.id}
          >
            <Image
              src={creative.src}
              alt={creative.alt}
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 544px, 100vw"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </div>
        ))}
        <div className="showcase-brand" aria-hidden="true">
          <Image src="/brand/olimbo-logo-symbol.png" alt="" width={36} height={36} />
          <span>Ideias em movimento.</span>
        </div>
        <span className="showcase-counter" aria-hidden="true">0{selected + 1} / 03</span>
      </div>
      <div className="showcase-controls" role="group" aria-label="Escolha uma solução">
        {creatives.map((creative, index) => (
          <button
            type="button"
            aria-pressed={selected === index}
            aria-controls={`creative-${creative.id}`}
            onClick={() => setSelected(index)}
            key={creative.id}
          >
            <span aria-hidden="true">0{index + 1}</span> {creative.label}
          </button>
        ))}
      </div>
      <figcaption aria-live="polite" aria-atomic="true">
        <strong>{creatives[selected].title}</strong>
        <span>Cena ilustrativa gerada por IA · Explore as possibilidades</span>
      </figcaption>
    </figure>
  );
}
