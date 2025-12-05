"use client";

import Link from "next/link";
import { siteConfig } from "../../config/site.config";

const navLinks = [
  { href: "/technology", label: "Технология" },
  { href: "/solutions", label: "Решения" },
  { href: "/economy", label: "Экономика" },
  { href: "/blog", label: "Блог" },
];

const socialLinks = [
  { name: "Telegram", icon: "📱", href: siteConfig.social.telegram },
  { name: "VK", icon: "💬", href: siteConfig.social.vk },
  { name: "YouTube", icon: "▶️", href: siteConfig.social.youtube },
];

// Контактные данные из конфига
const PHONE_NUMBER = siteConfig.phone;
const PHONE_HREF = `tel:${PHONE_NUMBER.replace(/[\s()-]/g, "")}`;
const EMAIL = siteConfig.email;

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Logo & Slogan */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-xl">🧀</span>
              </div>
              <span className="text-white font-bold text-xl">
                AI<span className="text-accent">.Ripening</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contacts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <span>📞</span>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <span>✉️</span>
                  {EMAIL}
                </a>
              </li>
              <li className="text-white/60 text-sm flex items-center gap-2">
                <span>📍</span>
                {siteConfig.address}
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Подписка на новости</h4>
            <p className="text-white/60 text-sm mb-4">
              Получайте новости о сыроварении и технологиях ИИ
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-lg text-sm font-medium transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} AI.Ripening. Все права защищены.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-white/80 transition-colors text-sm"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-white/80 transition-colors text-sm"
              >
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
