import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
};

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/brand/olimbo-horizontal-transparent.png"
      alt="Olimbo"
      width={335}
      height={113}
      className="h-auto w-40 sm:w-44"
      sizes="(min-width: 640px) 176px, 160px"
      loading={priority ? "eager" : "lazy"}
      translate="no"
    />
  );
}
