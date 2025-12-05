"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "../components/BlogCard";
import ShareButtons from "../components/ShareButtons";
import { Article, categories } from "../data";

interface ArticleContentProps {
  article: Article;
  relatedArticles: Article[];
}

export default function ArticleContent({ article, relatedArticles }: ArticleContentProps) {
  const categoryColor = categories.find((c) => c.slug === article.category.slug)?.color || "#00F0FF";
  const siteUrl = "https://airipening.ru";

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0F]">
      <Header />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <div
          className="relative py-16"
          style={{
            background: `linear-gradient(135deg, ${categoryColor}10 0%, rgba(10, 10, 15, 0.95) 50%, rgba(10, 10, 15, 1) 100%)`,
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
                <Link href="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
                <span>/</span>
                <Link
                  href={`/blog/category/${article.category.slug}`}
                  className="hover:text-white transition-colors"
                  style={{ color: categoryColor }}
                >
                  {article.category.name}
                </Link>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: `${categoryColor}15`,
                    color: categoryColor,
                    border: `1px solid ${categoryColor}30`,
                  }}
                >
                  {article.category.name}
                </span>
                <span className="text-white/50">{formatDate(article.date)}</span>
                <span className="text-white/50">⏱ {article.readTime}</span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ textShadow: `0 0 60px ${categoryColor}30` }}
              >
                {article.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-white/70 mb-8">
                {article.description}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{
                    background: `${categoryColor}15`,
                    border: `1px solid ${categoryColor}30`,
                  }}
                >
                  {article.image}
                </div>
                <div>
                  <p className="text-white font-medium">{article.author.name}</p>
                  {article.author.role && (
                    <p className="text-white/50 text-sm">{article.author.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-white/10
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-white/70 prose-p:leading-relaxed
                prose-a:text-[#00F0FF] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-white/70 prose-ol:text-white/70
                prose-li:marker:text-[#00F0FF]
                prose-blockquote:border-l-[#A855F7] prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                prose-code:text-[#00F0FF] prose-code:bg-white/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:font-normal
                prose-pre:bg-[#12121A] prose-pre:border prose-pre:border-white/10
                prose-table:border-collapse
                prose-th:bg-white/10 prose-th:border prose-th:border-white/10 prose-th:p-3
                prose-td:border prose-td:border-white/10 prose-td:p-3
                prose-hr:border-white/10
              "
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Share */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(10, 10, 15, 0.9) 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <ShareButtons
                    url={`${siteUrl}/blog/${article.slug}`}
                    title={article.title}
                    description={article.description}
                  />
                </div>

                {/* Tags */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(10, 10, 15, 0.9) 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <h4 className="text-white font-bold mb-4">Теги</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${encodeURIComponent(tag)}`}
                        className="px-3 py-1.5 rounded-full text-xs bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
              border: "1px solid rgba(0, 240, 255, 0.2)",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Хотите узнать больше о Digital Affineur?
            </h3>
            <p className="text-white/70 mb-6">
              Запросите демо-доступ и получите персональную консультацию
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-black transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)",
              }}
            >
              Получить демо
              <span>→</span>
            </Link>
          </motion.div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-[#00F0FF]">📖</span>
                Связанные статьи
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <BlogCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

