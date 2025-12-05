"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "./BlogCard";
import { categories, getPopularArticles, getAllTags, searchArticles } from "../data";

interface BlogLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export default function BlogLayout({ children, showSidebar = true }: BlogLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchArticles>>([]);
  const [isSearching, setIsSearching] = useState(false);

  const popularArticles = getPopularArticles(4);
  const allTags = getAllTags().slice(0, 10);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length >= 2) {
      setIsSearching(true);
      const results = searchArticles(query);
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0F]">
      <Header />

      <main className="flex-1 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className={`flex flex-col ${showSidebar ? "lg:flex-row" : ""} gap-12`}>
            {/* Main Content */}
            <div className={showSidebar ? "flex-1 lg:max-w-[calc(100%-320px)]" : "w-full"}>
              {children}
            </div>

            {/* Sidebar */}
            {showSidebar && (
              <aside className="w-full lg:w-80 flex-shrink-0">
                <div className="lg:sticky lg:top-24 space-y-8">
                  {/* Search */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                      border: "1px solid rgba(0, 240, 255, 0.15)",
                    }}
                  >
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span>🔍</span> Поиск
                    </h3>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Искать статьи..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-[#00F0FF] focus:outline-none transition-colors"
                      />
                      {isSearching && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden z-50"
                          style={{
                            background: "rgba(10, 10, 15, 0.98)",
                            border: "1px solid rgba(0, 240, 255, 0.2)",
                          }}
                        >
                          {searchResults.length > 0 ? (
                            <div className="max-h-80 overflow-y-auto">
                              {searchResults.map((article) => (
                                <Link
                                  key={article.id}
                                  href={`/blog/${article.slug}`}
                                  className="block p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                  onClick={() => {
                                    setSearchQuery("");
                                    setIsSearching(false);
                                  }}
                                >
                                  <p className="text-white font-medium text-sm line-clamp-1">
                                    {article.title}
                                  </p>
                                  <p className="text-white/50 text-xs mt-1">
                                    {article.category.name} • {article.readTime}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="p-4 text-white/50 text-sm text-center">
                              Ничего не найдено
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Categories */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                      border: "1px solid rgba(168, 85, 247, 0.15)",
                    }}
                  >
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span>📂</span> Категории
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/blog/category/${category.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <span
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                            style={{
                              background: `${category.color}15`,
                            }}
                          >
                            {category.icon}
                          </span>
                          <div className="flex-1">
                            <p
                              className="text-white font-medium text-sm group-hover:text-[#00F0FF] transition-colors"
                              style={{ color: category.color }}
                            >
                              {category.name}
                            </p>
                            <p className="text-white/40 text-xs">{category.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Popular Articles */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 255, 157, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                      border: "1px solid rgba(0, 255, 157, 0.15)",
                    }}
                  >
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span>🔥</span> Популярное
                    </h3>
                    <div className="space-y-1">
                      {popularArticles.map((article) => (
                        <BlogCard key={article.id} article={article} variant="compact" />
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                      border: "1px solid rgba(245, 158, 11, 0.15)",
                    }}
                  >
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span>🏷️</span> Теги
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <Link
                          key={tag.name}
                          href={`/blog/tag/${encodeURIComponent(tag.name)}`}
                          className="px-3 py-1.5 rounded-full text-xs bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                        >
                          #{tag.name}
                          <span className="ml-1 opacity-50">({tag.count})</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)",
                      border: "1px solid rgba(0, 240, 255, 0.2)",
                    }}
                  >
                    <h3 className="text-white font-bold mb-2">📬 Подписка</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Новые статьи раз в неделю
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Ваш email"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-[#00F0FF] focus:outline-none transition-colors text-sm"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                        style={{
                          background: "linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)",
                          color: "#000",
                        }}
                      >
                        Подписаться
                      </button>
                    </form>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

