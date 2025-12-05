"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

// Client-side SEO utilities
export function SEO({
  title,
  description,
  canonical,
  noIndex = false,
  noFollow = false,
}: SEOProps) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://airipening.ru";
  const currentUrl = canonical || `${baseUrl}${pathname}`;

  useEffect(() => {
    // Update document title if provided
    if (title) {
      document.title = title;
    }

    // Update meta description if provided
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }

    // Update canonical link if needed
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // Update robots meta if needed
    if (noIndex || noFollow) {
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      const robotsContent = [
        noIndex ? "noindex" : "index",
        noFollow ? "nofollow" : "follow",
      ].join(", ");
      robotsMeta.setAttribute("content", robotsContent);
    }
  }, [title, description, currentUrl, noIndex, noFollow]);

  return null;
}

// Generate metadata for pages (use in page.tsx exports)
export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://airipening.ru";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      ...(image && { images: [image] }),
    },
    twitter: {
      title,
      description,
      ...(image && { images: [image] }),
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

// Pre-defined metadata for common pages
export const pageMetadata = {
  home: generatePageMetadata({
    title: "AI.Ripening - ИИ-технолог для созревания сыра",
    description:
      "Снижаем брак с 30% до 5%. Первая в России ИИ-система управления созреванием сыра. Точность прогноза 95%, окупаемость 3-6 месяцев.",
    path: "",
  }),

  technology: generatePageMetadata({
    title: "Технология",
    description:
      "Узнайте, как работает ИИ-система AI.Ripening: датчики, компьютерное зрение, машинное обучение и автоматическое управление процессом созревания сыра.",
    path: "/technology",
  }),

  solutions: generatePageMetadata({
    title: "Решения",
    description:
      "Решения AI.Ripening для малых сыроварен, среднего производства и крупных заводов. Индивидуальный подход к каждому клиенту.",
    path: "/solutions",
  }),

  economy: generatePageMetadata({
    title: "Экономика",
    description:
      "Рассчитайте экономию от внедрения AI.Ripening. Снижение брака, увеличение выхода продукции, окупаемость за 3-6 месяцев.",
    path: "/economy",
  }),

  blog: generatePageMetadata({
    title: "Блог",
    description:
      "Статьи о сыроварении, автоматизации производства, внедрении ИИ-технологий в пищевой промышленности.",
    path: "/blog",
  }),

  contact: generatePageMetadata({
    title: "Контакты",
    description:
      "Свяжитесь с нами для получения демо-доступа к системе AI.Ripening или консультации по внедрению.",
    path: "/contact",
  }),
};

