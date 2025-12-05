"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "../../config/site.config";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/technology", label: "Технология" },
  { href: "/solutions", label: "Решения" },
  { href: "/economy", label: "Экономика" },
  { href: "/blog", label: "Блог" },
];

// Контактные данные из конфига
const PHONE_NUMBER = siteConfig.phone;
const PHONE_HREF = `tel:${PHONE_NUMBER.replace(/[\s()-]/g, "")}`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white text-lg font-bold">🧀</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              AI<span className="text-accent">.Ripening</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone */}
            <a
              href={PHONE_HREF}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              {PHONE_NUMBER}
            </a>

            {/* Theme Toggle */}
            <ThemeToggle className="text-white" />

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-md"
            >
              Заказать демо
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            {...{ "aria-expanded": isMenuOpen }}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary/95 backdrop-blur-sm border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-white hover:bg-white/10 transition-colors py-3 px-4 rounded-lg text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            {/* Phone */}
            <a
              href={PHONE_HREF}
              className="text-white/90 hover:text-white transition-colors py-2 px-4 text-base font-medium"
            >
              📞 {PHONE_NUMBER}
            </a>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-white/70 text-sm">Тема</span>
              <ThemeToggle className="text-white" />
            </div>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="bg-accent hover:bg-accent/90 text-white px-5 py-3 rounded-lg font-semibold text-base transition-all shadow-md mx-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Заказать демо
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
