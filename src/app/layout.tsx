import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";
import "../styles/header-and-ui.css";
import "../styles/hero-and-benefits.css";
import "../styles/solutions-and-problems.css";
import "../styles/applications-and-process.css";
import "../styles/closing-sections.css";
import "../styles/responsive.css";
import "../styles/creatives-and-motion.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Orbe | Criação de Sites, Sistemas e Automações",
  description:
    "Criação de sites profissionais, landing pages, softwares personalizados e automações. Conheça as soluções digitais da Orbe para seu projeto ou negócio.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Orbe",
    title: "Orbe | Criação de Sites, Sistemas e Automações",
    description:
      "Sites profissionais, sistemas personalizados e automações para transformar necessidades em soluções digitais.",
  },
  twitter: {
    card: "summary",
    title: "Orbe | Criação de Sites, Sistemas e Automações",
    description:
      "Sites profissionais, sistemas personalizados e automações para projetos e negócios.",
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
