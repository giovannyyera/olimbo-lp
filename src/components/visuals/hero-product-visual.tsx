"use client";

import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";

import { creatives } from "@/config/creatives";

const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(motionQuery).matches;
}

export function HeroProductVisual({ previews }: { previews: ReactNode[] }) {
  const [selected, setSelected] = useState(0);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, () => true);
  const rotating = !reducedMotion;

  useEffect(() => {
    if (!rotating) return;
    let timer: ReturnType<typeof setInterval> | undefined;

    function syncTimer() {
      clearInterval(timer);
      if (!document.hidden) {
        timer = setInterval(() => {
          setSelected((current) => (current + 1) % creatives.length);
        }, 5000);
      }
    }

    syncTimer();
    document.addEventListener("visibilitychange", syncTimer);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", syncTimer);
    };
  }, [rotating]);

  return (
    <figure
      className="hero-showcase"
      aria-label="Explore as possibilidades para seu negócio"
    >
      <div className="showcase-heading">
        <span>DO PRIMEIRO CLIQUE À PRÓXIMA ETAPA</span>
      </div>
      <div className="showcase-stage">
        {creatives.map((creative, index) => (
          <div
            className="showcase-slide"
            id={`creative-${creative.id}`}
            data-active={selected === index}
            aria-hidden={selected !== index}
            key={creative.id}
          >
            {previews[index]}
          </div>
        ))}
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
      <figcaption aria-live={rotating ? "off" : "polite"} aria-atomic="true">
        <strong>{creatives[selected].title}</strong>
        <span>{creatives[selected].description}</span>
      </figcaption>
    </figure>
  );
}
