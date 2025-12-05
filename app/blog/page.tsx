"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogLayout from "./components/BlogLayout";
import BlogCard from "./components/BlogCard";
import { getAllArticles, getFeaturedArticles, categories } from "./data";

export default function BlogPage() {
  const allArticles = getAllArticles();
  const featuredArticles = getFeaturedArticles();
  const regularArticles = allArticles.filter((a) => !a.featured);

  return (
    <BlogLayout showSidebar={true}>
      {/* Hero */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6">
            <span>📝</span>
            <span className="text-[#00F0FF] text-sm font-medium">Блог Digital Affineur</span>
          </span>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ textShadow: "0 0 40px rgba(0, 240, 255, 0.2)" }}
          >
            Статьи о сыроварении и технологиях
          </h1>

          <p className="text-lg text-white/70 max-w-2xl">
            Биохимия созревания, компьютерное зрение, экономика производства и реальные кейсы внедрения ИИ
          </p>
        </motion.div>
      </div>

      {/* Categories quick links */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:scale-105"
            style={{
              background: `${category.color}10`,
              border: `1px solid ${category.color}20`,
            }}
          >
            <span>{category.icon}</span>
            <span className="text-sm font-medium" style={{ color: category.color }}>
              {category.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-[#00FF9D]">⭐</span> Рекомендуем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.slice(0, 2).map((article) => (
              <BlogCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
        </section>
      )}

      {/* All Articles */}
      <section>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-[#00F0FF]">📚</span> Все статьи
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {regularArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </div>

        {/* Show featured that weren't shown above */}
        {featuredArticles.length > 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {featuredArticles.slice(2).map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (regularArticles.length + i) * 0.1 }}
              >
                <BlogCard article={article} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </BlogLayout>
  );
}
