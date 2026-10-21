import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
};

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/brand/orbe-logo1.png"
      alt="Orbe"
      width={2172}
      height={724}
      className="h-auto w-32 sm:w-36"
      priority={priority}
      translate="no"
    />
  );
}
