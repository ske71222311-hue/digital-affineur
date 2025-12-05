import { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getAllTags } from "../../data";
import TagContent from "./TagContent";

interface PageProps {
  params: Promise<{ tag: string }>;
}

// Генерация статических путей для всех тегов
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag.name),
  }));
}

// Динамические мета-теги для SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam);

  const siteUrl = "https://airipening.ru";

  return {
    title: `#${tag} | Блог Digital Affineur`,
    description: `Статьи по тегу "${tag}" в блоге Digital Affineur`,
    openGraph: {
      title: `#${tag} | Блог Digital Affineur`,
      description: `Статьи по тегу "${tag}" в блоге Digital Affineur`,
      url: `${siteUrl}/blog/tag/${encodeURIComponent(tag)}`,
      siteName: "Digital Affineur",
      type: "website",
    },
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam);
  
  // Найти статьи с этим тегом
  const tagArticles = articles.filter((article) =>
    article.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );

  if (tagArticles.length === 0) {
    notFound();
  }

  return <TagContent tag={tag} articles={tagArticles} />;
}

