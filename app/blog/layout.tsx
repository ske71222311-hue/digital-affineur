import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Блог Digital Affineur",
    default: "Блог | Digital Affineur — ИИ для сыроварения",
  },
  description:
    "Статьи о биохимии созревания сыра, компьютерном зрении, экономике производства и реальных кейсах внедрения искусственного интеллекта в сыроварении.",
  keywords: [
    "блог сыроварение",
    "биохимия сыра",
    "компьютерное зрение",
    "ИИ в сыроварении",
    "созревание сыра",
    "автоматизация сыроварни",
  ],
  openGraph: {
    title: "Блог Digital Affineur",
    description: "Статьи о технологиях сыроварения и применении ИИ",
    type: "website",
    siteName: "Digital Affineur",
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог Digital Affineur",
    description: "Статьи о технологиях сыроварения и применении ИИ",
  },
};

export default function BlogRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

