import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
};

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/brand/orbe-wordmark.png"
      alt="Orbe"
      width={1100}
      height={296}
      className="h-auto w-32 sm:w-36"
      loading={priority ? "eager" : "lazy"}
      translate="no"
    />
  );
}
