import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getArticlesByCategory, categories } from "../../data";
import CategoryContent from "./CategoryContent";

interface PageProps {
  params: Promise<{ category: string }>;
}

// Генерация статических путей для всех категорий
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

// Динамические мета-теги для SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Категория не найдена | Digital Affineur",
    };
  }

  const siteUrl = "https://airipening.ru";

  return {
    title: `${category.name} | Блог Digital Affineur`,
    description: `Статьи о теме "${category.name}" в блоге Digital Affineur. ${category.description}.`,
    openGraph: {
      title: `${category.name} | Блог Digital Affineur`,
      description: `Статьи о теме "${category.name}" в блоге Digital Affineur`,
      url: `${siteUrl}/blog/category/${category.slug}`,
      siteName: "Digital Affineur",
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(categorySlug);

  return <CategoryContent category={category} articles={articles} />;
}

