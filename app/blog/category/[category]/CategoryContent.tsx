"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogLayout from "../../components/BlogLayout";
import BlogCard from "../../components/BlogCard";
import { Article, Category, categories } from "../../data";

interface CategoryContentProps {
  category: Category;
  articles: Article[];
}

export default function CategoryContent({ category, articles }: CategoryContentProps) {
  return (
    <BlogLayout showSidebar={true}>
      {/* Hero */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/blog" className="hover:text-white transition-colors">
              Блог
            </Link>
            <span>/</span>
            <span style={{ color: category.color }}>{category.name}</span>
          </div>

          {/* Category Icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-6"
            style={{
              background: `${category.color}15`,
              border: `1px solid ${category.color}30`,
            }}
          >
            {category.icon}
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ textShadow: `0 0 40px ${category.color}30` }}
          >
            {category.name}
          </h1>

          <p className="text-lg text-white/70 max-w-2xl mb-6">
            {category.description}
          </p>

          {/* Stats */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: `${category.color}10`,
              border: `1px solid ${category.color}20`,
            }}
          >
            <span className="text-white/70">{articles.length}</span>
            <span className="text-white/50">
              {articles.length === 1 ? "статья" : articles.length > 4 ? "статей" : "статьи"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Other Categories */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories
          .filter((c) => c.slug !== category.slug)
          .map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:scale-105"
              style={{
                background: `${cat.color}10`,
                border: `1px solid ${cat.color}20`,
              }}
            >
              <span>{cat.icon}</span>
              <span className="text-sm font-medium" style={{ color: cat.color }}>
                {cat.name}
              </span>
            </Link>
          ))}
      </div>

      {/* Articles */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((article, i) => (
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
      ) : (
        <div
          className="text-center py-20 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(10, 10, 15, 0.9) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="text-5xl mb-4">📭</div>
          <h3 className="text-xl font-bold text-white mb-2">
            Пока нет статей в этой категории
          </h3>
          <p className="text-white/60 mb-6">
            Скоро здесь появятся новые материалы
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)",
            }}
          >
            Все статьи
            <span>→</span>
          </Link>
        </div>
      )}
    </BlogLayout>
  );
}

