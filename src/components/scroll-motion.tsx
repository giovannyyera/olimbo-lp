"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    function syncMotion() {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();

      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer?.unobserve(entry.target);
          const animation = entry.target.animate(
            [
              { opacity: 0.35, transform: "translateY(24px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });

      document.querySelectorAll(
        ".section-heading, .benefit-card, .solution-bento, .problem-card, .application-card, .process-timeline li, .why-grid > *, .faq-list details, .final-cta-grid > *",
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
