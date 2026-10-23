"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const revealed = new WeakSet<Element>();
    let observer: IntersectionObserver | undefined;

    function syncMotion() {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();

      if (
        preference.matches ||
        !("IntersectionObserver" in window) ||
        !("animate" in Element.prototype)
      ) return;

      observer = new IntersectionObserver((entries) => {
        const groupPositions = new Map<Element | null, number>();
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer?.unobserve(entry.target);
          if (revealed.has(entry.target)) return;
          revealed.add(entry.target);
          const group = entry.target.parentElement;
          const position = groupPositions.get(group) ?? 0;
          groupPositions.set(group, position + 1);
          const animation = entry.target.animate(
            [
              { opacity: 0.3, transform: "translateY(28px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 720,
              delay: Math.min(position, 3) * 70,
              fill: "backwards",
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });

      document.querySelectorAll(
        ".section-heading, .benefit-card, .solution-bento, .problem-card, .process-timeline li, .project-offer-copy, .project-offer-visual, .faq-list details, .final-cta-grid > *",
      ).forEach((element) => observer?.observe(element));
    }

    syncMotion();
    preference.addEventListener("change", syncMotion);
    return () => {
      preference.removeEventListener("change", syncMotion);
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return null;
}
