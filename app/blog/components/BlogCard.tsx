"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Article, categories } from "../data";

interface BlogCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
}

export default function BlogCard({ article, variant = "default" }: BlogCardProps) {
  const categoryColor = categories.find((c) => c.slug === article.category.slug)?.color || "#00F0FF";

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (variant === "compact") {
    return (
      <Link href={`/blog/${article.slug}`} className="group block">
        <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: `${categoryColor}15`,
              border: `1px solid ${categoryColor}20`,
            }}
          >
            {article.image}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-medium text-sm line-clamp-2 group-hover:text-[#00F0FF] transition-colors">
              {article.title}
            </h4>
            <p className="text-white/40 text-xs mt-1">{formatDate(article.date)}</p>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <Link href={`/blog/${article.slug}`}>
          <div
            className="relative rounded-2xl overflow-hidden h-full"
            style={{
              background: `linear-gradient(135deg, ${categoryColor}10 0%, rgba(10, 10, 15, 0.95) 100%)`,
              border: `1px solid ${categoryColor}30`,
            }}
          >
            {/* Featured badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00FF9D]/20 text-[#00FF9D] border border-[#00FF9D]/30">
                ⭐ Рекомендуем
              </span>
            </div>

            <div className="p-8">
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-6"
                style={{
                  background: `${categoryColor}15`,
                  border: `1px solid ${categoryColor}30`,
                }}
              >
                {article.image}
              </div>

              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${categoryColor}15`,
                    color: categoryColor,
                  }}
                >
                  {article.category.name}
                </span>
                <span className="text-white/40 text-sm">{formatDate(article.date)}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors">
                {article.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 mb-6 line-clamp-3">
                {article.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded text-xs bg-white/5 text-white/50">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-sm">⏱ {article.readTime}</span>
                </div>
                <span className="text-[#00F0FF] font-medium group-hover:translate-x-1 transition-transform">
                  Читать →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${article.slug}`}>
        <div
          className="h-full rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(10, 10, 15, 0.9) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Icon */}
          <div
            className="w-full h-36 rounded-xl flex items-center justify-center text-5xl mb-5"
            style={{
              background: `linear-gradient(135deg, ${categoryColor}10 0%, rgba(10,10,15,0.5) 100%)`,
              border: `1px solid ${categoryColor}20`,
            }}
          >
            {article.image}
          </div>

          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${categoryColor}15`,
                color: categoryColor,
                border: `1px solid ${categoryColor}30`,
              }}
            >
              {article.category.name}
            </span>
            <span className="text-white/40 text-sm">{formatDate(article.date)}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm mb-4 line-clamp-2">
            {article.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-white/40 text-sm">⏱ {article.readTime}</span>
            <span className="text-[#00F0FF] text-sm font-medium group-hover:translate-x-1 transition-transform">
              Читать →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

