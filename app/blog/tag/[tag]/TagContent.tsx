"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogLayout from "../../components/BlogLayout";
import BlogCard from "../../components/BlogCard";
import { Article, getAllTags } from "../../data";

interface TagContentProps {
  tag: string;
  articles: Article[];
}

export default function TagContent({ tag, articles }: TagContentProps) {
  const allTags = getAllTags().slice(0, 15);

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
            <span className="text-[#00F0FF]">#{tag}</span>
          </div>

          {/* Tag Icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-6"
            style={{
              background: "rgba(0, 240, 255, 0.1)",
              border: "1px solid rgba(0, 240, 255, 0.2)",
            }}
          >
            🏷️
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ textShadow: "0 0 40px rgba(0, 240, 255, 0.2)" }}
          >
            #{tag}
          </h1>

          {/* Stats */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(0, 240, 255, 0.1)",
              border: "1px solid rgba(0, 240, 255, 0.2)",
            }}
          >
            <span className="text-white/70">{articles.length}</span>
            <span className="text-white/50">
              {articles.length === 1 ? "статья" : articles.length > 4 ? "статей" : "статьи"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Other Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {allTags
          .filter((t) => t.name.toLowerCase() !== tag.toLowerCase())
          .map((t) => (
            <Link
              key={t.name}
              href={`/blog/tag/${encodeURIComponent(t.name)}`}
              className="px-3 py-1.5 rounded-full text-xs bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              #{t.name}
              <span className="ml-1 opacity-50">({t.count})</span>
            </Link>
          ))}
      </div>

      {/* Articles */}
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
    </BlogLayout>
  );
}

