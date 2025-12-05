"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console
    console.error("Application Error:", error);
    
    // Here you could also send to an error tracking service like Sentry
    // Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center py-20">
          {/* Error Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-error/20 rounded-full blur-3xl" />
            </div>
            
            {/* Error icon */}
            <motion.div
              className="relative w-32 h-32 mx-auto bg-error/10 rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                className="w-16 h-16 text-error"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Что-то пошло не так
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-foreground/60 mb-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Произошла непредвиденная ошибка. Мы уже работаем над её исправлением.
          </motion.p>

          {/* Error details (only in development) */}
          {process.env.NODE_ENV === "development" && (
            <motion.div
              className="mb-8 p-4 bg-error/10 rounded-xl text-left overflow-auto max-h-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-error text-sm font-mono">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-error/60 text-xs mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold text-lg shadow-lg shadow-accent/30 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Попробовать снова
            </motion.button>
            
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-primary/20 hover:border-primary text-primary rounded-xl font-semibold text-lg transition-colors w-full sm:w-auto"
              >
                На главную
              </motion.button>
            </Link>
          </motion.div>

          {/* Support contact */}
          <motion.div
            className="mt-12 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-foreground/50 text-sm">
              Если проблема повторяется, свяжитесь с нами:{" "}
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "support@airipening.ru"}`}
                className="text-accent hover:underline"
              >
                {process.env.NEXT_PUBLIC_EMAIL || "support@airipening.ru"}
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}


