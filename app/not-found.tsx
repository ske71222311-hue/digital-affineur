"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16 md:pt-20 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center py-20">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            </div>
            
            {/* 404 Number */}
            <motion.h1
              className="text-[150px] sm:text-[200px] font-bold text-primary/10 leading-none select-none relative"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              404
            </motion.h1>
            
            {/* Cheese emoji floating */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="text-7xl sm:text-8xl block"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🧀
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Страница не найдена
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-foreground/60 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Извините, мы не можем найти эту страницу. Возможно, она была перемещена или удалена.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold text-lg shadow-lg shadow-accent/30 transition-colors"
              >
                Вернуться на главную
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.history.back()}
              className="px-8 py-4 border-2 border-primary/20 hover:border-primary text-primary rounded-xl font-semibold text-lg transition-colors"
            >
              Назад
            </motion.button>
          </motion.div>

          {/* Helpful links */}
          <motion.div
            className="mt-12 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-foreground/50 text-sm mb-4">
              Возможно, вас заинтересует:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/technology", label: "Технология" },
                { href: "/solutions", label: "Решения" },
                { href: "/economy", label: "Экономика" },
                { href: "/#contact", label: "Контакты" },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-primary hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


