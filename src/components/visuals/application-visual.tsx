import Image from "next/image";

import { creatives } from "@/config/creatives";

type ApplicationVisualProps = {
  type: "website" | "dashboard" | "workflow";
};

export function ApplicationVisual({ type }: ApplicationVisualProps) {
  const creative = creatives.find((item) => item.id === type)!;

  return (
    <div className="application-visual application-image">
      <Image
        src={creative.src}
        alt={creative.alt}
        fill
        sizes={type === "workflow"
          ? "(min-width: 1024px) 33vw, 100vw"
          : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
      />
      <span className="application-image-label" aria-hidden="true">{creative.label}</span>
    </div>
  );
}
