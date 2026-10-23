import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";

import "./globals.css";
import "../styles/header-and-ui.css";
import "../styles/hero-and-benefits.css";
import "../styles/benefit-visuals.css";
import "../styles/solutions-and-problems.css";
import "../styles/solution-visuals.css";
import "../styles/process.css";
import "../styles/closing-sections.css";
import "../styles/responsive.css";
import "../styles/creatives-and-motion.css";
import "../styles/service-previews.css";
import "../styles/project-offer.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: {
      url: "/brand/olimbo-favicon-cursor.png?v=20261023-transparent",
      type: "image/png",
      sizes: "64x64",
    },
    apple: {
      url: "/brand/olimbo-apple-touch-icon-transparent.png?v=20261023",
      type: "image/png",
      sizes: "180x180",
    },
  },
  title: "Olimbo | Criação de Sites, Sistemas e Automações",
  description:
    "Criação de sites profissionais, landing pages, softwares personalizados e automações. Conheça as soluções digitais da Olimbo para seu projeto ou negócio.",
  openGraph: {
    type: "website",
    url: "/",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Olimbo | Criação de Sites, Sistemas e Automações",
    description:
      "Sites profissionais, sistemas personalizados e automações para transformar necessidades em soluções digitais.",
    images: [{
      url: "/images/olimbo-project-offer.webp",
      width: 1536,
      height: 1024,
      alt: "Composição editorial de um laptop e materiais de trabalho em tons verdes e dourados.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olimbo | Criação de Sites, Sistemas e Automações",
    description:
      "Sites profissionais, sistemas personalizados e automações para projetos e negócios.",
    images: [{
      url: "/images/olimbo-project-offer.webp",
      alt: "Composição editorial de um laptop e materiais de trabalho em tons verdes e dourados.",
    }],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F7F6F2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
