"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ===== HERO SECTION =====
function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #12121A 100%)",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00F0FF" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1.5" fill="#00F0FF" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20">
              <span className="text-[#00F0FF] text-sm font-medium tracking-wider">
                ТЕХНОЛОГИЯ DIGITAL AFFINEUR
              </span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ textShadow: "0 0 40px rgba(0, 240, 255, 0.3)" }}
          >
            Нейро-символическая{" "}
            <span
              className="text-[#00F0FF]"
              style={{
                textShadow: "0 0 20px #00F0FF, 0 0 40px rgba(0, 240, 255, 0.5)",
              }}
            >
              архитектура
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8"
          >
            Уникальная система, объединяющая формальную логику биохимии и 
            адаптивное машинное обучение для управления созреванием сыра
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { value: "300+", label: "правил созревания" },
              { value: "94%", label: "точность прогноза" },
              { value: "0.4 сек", label: "время реакции" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold text-[#00F0FF]"
                  style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.5)" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
    </section>
  );
}

// ===== HOW IT WORKS SECTION =====
function HowItWorksSection() {
  const layers = [
    {
      id: "symbolic",
      icon: "📖",
      title: "Символический слой",
      subtitle: "Формальная логика",
      color: "#00F0FF",
      description: "Книга знаний мастеров-аффинеров, оцифрованная в виде формальных правил",
      items: [
        "300+ биохимических правил созревания",
        "Формализованные знания экспертов",
        "Логические цепочки причин и следствий",
        "Детерминированные рекомендации",
      ],
    },
    {
      id: "neural",
      icon: "🧠",
      title: "Нейросетевой слой",
      subtitle: "Машинное обучение",
      color: "#A855F7",
      description: "Интуиция и опыт, полученные из анализа тысяч партий сыра",
      items: [
        "Глубокие сверточные нейросети",
        "Обучение на 50,000+ изображений",
        "Распознавание скрытых паттернов",
        "Адаптация к новым условиям",
      ],
    },
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #0D0D14 50%, #0A0A0F 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="#00F0FF" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="#A855F7" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6">
              <span>⚡</span>
              <span className="text-[#00F0FF] text-sm font-medium">Как это работает</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Два слоя интеллекта,{" "}
              <span className="text-[#00F0FF]" style={{ textShadow: "0 0 20px rgba(0, 240, 255, 0.5)" }}>
                работающих синхронно
              </span>
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
              Символический слой обеспечивает объяснимость и надёжность, нейросетевой — адаптивность и точность
            </p>
          </motion.div>

          {/* Layers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {layers.map((layer) => (
              <motion.div
                key={layer.id}
                variants={staggerItem}
                className="relative group"
              >
                <div
                  className="relative rounded-2xl p-8 h-full"
                  style={{
                    background: `linear-gradient(135deg, ${layer.color}08 0%, rgba(10, 10, 15, 0.95) 100%)`,
                    border: `1px solid ${layer.color}30`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                      style={{
                        background: `linear-gradient(135deg, ${layer.color}20 0%, ${layer.color}10 100%)`,
                        border: `1px solid ${layer.color}40`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {layer.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-white font-bold text-xl">{layer.title}</h3>
                      <p className="text-sm font-medium" style={{ color: layer.color }}>
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/70 mb-6">{layer.description}</p>

                  {/* Items */}
                  <ul className="space-y-3">
                    {layer.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ background: layer.color, boxShadow: `0 0 10px ${layer.color}` }}
                        />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 0 40px ${layer.color}20, inset 0 0 40px ${layer.color}05` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting Arrow & Result */}
          <motion.div variants={staggerItem} className="flex flex-col items-center">
            {/* Arrow */}
            <div className="relative mb-8">
              <svg className="w-32 h-16 hidden md:block" viewBox="0 0 128 64">
                <motion.path
                  d="M 0 0 Q 32 64 64 32"
                  stroke="#00F0FF"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                <motion.path
                  d="M 128 0 Q 96 64 64 32"
                  stroke="#A855F7"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </svg>
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2"
                style={{
                  background: "linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)",
                  boxShadow: "0 0 40px rgba(0, 240, 255, 0.4), 0 0 40px rgba(168, 85, 247, 0.4)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
            </div>

            {/* Result Card */}
            <div
              className="max-w-2xl w-full rounded-2xl p-8 text-center mt-8"
              style={{
                background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
              }}
            >
              <p className="text-[#00F0FF] text-sm font-medium tracking-wider uppercase mb-4">
                Результат синергии
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Digital Affineur: система, которая{" "}
                <span className="text-[#00F0FF]">понимает</span> и{" "}
                <span className="text-[#A855F7]">чувствует</span> сыр
              </h3>
              <p className="text-white/60">
                Объединение формальных знаний и машинной интуиции даёт результат, недостижимый для каждого подхода по отдельности
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== MACHINE VISION SECTION =====
function MachineVisionSection() {
  const capabilities = [
    { value: "1200", label: "текстурных признаков корки", comparison: "человек различает ~20" },
    { value: "8K", label: "гиперспектральная съемка", comparison: "16-битный диапазон цвета" },
    { value: "0.03 мм", label: "глубина микротрещин", comparison: "в 10 раз тоньше волоса" },
    { value: "5", label: "оттенков белого плесени", comparison: "невидимых человеческому глазу" },
    { value: "50+", label: "параметров в реальном времени", comparison: "анализ каждую секунду" },
    { value: "99.2%", label: "точность классификации", comparison: "дефектов и аномалий" },
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #0D0D14 50%, #0A0A0F 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6">
              <span>👁️</span>
              <span className="text-[#00F0FF] text-sm font-medium">Компьютерное зрение</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Машинное зрение,{" "}
              <span className="text-[#00F0FF]" style={{ textShadow: "0 0 20px rgba(0, 240, 255, 0.5)" }}>
                которое видит невидимое
              </span>
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
              Не просто камера — это цифровая лупа с суперспособностями, анализирующая каждый миллиметр поверхности
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl group hover:scale-105 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                  border: "1px solid rgba(0, 240, 255, 0.15)",
                }}
              >
                <div
                  className="text-3xl font-bold text-[#00F0FF] mb-2"
                  style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.5)" }}
                >
                  {cap.value}
                </div>
                <div className="text-white font-medium mb-2">{cap.label}</div>
                <div className="text-white/40 text-sm">{cap.comparison}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Vision Demo Block */}
          <motion.div
            variants={staggerItem}
            className="rounded-2xl p-8"
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(0, 240, 255, 0.2)",
            }}
          >
            <p className="text-white/60 text-sm mb-4">
              Когда сыровар видит «белую плесень», Digital Affineur видит:
            </p>
            <div
              className="font-mono text-sm p-4 rounded-lg overflow-x-auto"
              style={{ background: "rgba(0, 0, 0, 0.5)" }}
            >
              <span className="text-white/40">species:</span>{" "}
              <span className="text-[#00F0FF]">Penicillium camemberti</span>{" "}
              <span className="text-white/40">strain:</span>{" "}
              <span className="text-[#00FF9D]">B35</span>{" "}
              <span className="text-white/40">age:</span>{" "}
              <span className="text-[#00F0FF]">9d</span>{" "}
              <span className="text-white/40">protease_activity:</span>{" "}
              <span className="text-[#00F0FF]">73%</span>{" "}
              <span className="text-yellow-400">⚠️ overripe_risk:</span>{" "}
              <span className="text-yellow-400">42h</span>
            </div>
            <p className="text-white/50 text-xs mt-4 text-center">
              Анализ в реальном времени • Прогнозирование рисков • Автоматические рекомендации
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== COMPARISON TABLE SECTION =====
function ComparisonSection() {
  const comparisons = [
    {
      aspect: "Точность оценки",
      traditional: "Субъективная, зависит от опыта",
      digital: "99.2% объективная точность",
    },
    {
      aspect: "Скорость анализа",
      traditional: "2-5 минут на головку",
      digital: "0.4 секунды на партию",
    },
    {
      aspect: "Работа 24/7",
      traditional: "Ограничено сменами",
      digital: "Непрерывный мониторинг",
    },
    {
      aspect: "Обнаружение дефектов",
      traditional: "Видимые глазу",
      digital: "Микроуровень (0.03 мм)",
    },
    {
      aspect: "Прогнозирование",
      traditional: "Интуиция, опыт",
      digital: "Математические модели",
    },
    {
      aspect: "Документирование",
      traditional: "Ручное, неполное",
      digital: "100% автоматическое",
    },
    {
      aspect: "Передача знаний",
      traditional: "Годы обучения",
      digital: "Мгновенный доступ к базе",
    },
    {
      aspect: "Адаптация",
      traditional: "Медленная",
      digital: "Непрерывное обучение",
    },
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #12121A 50%, #0A0A0F 100%)",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/20 mb-6">
              <span>📊</span>
              <span className="text-[#00FF9D] text-sm font-medium">Сравнение методов</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Традиционные методы vs{" "}
              <span className="text-[#00FF9D]" style={{ textShadow: "0 0 20px rgba(0, 255, 157, 0.5)" }}>
                Digital Affineur
              </span>
            </h2>
          </motion.div>

          {/* Comparison Table */}
          <motion.div variants={staggerItem} className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#00F0FF]/30">
                  <th className="py-4 px-4 text-left text-white/70 text-sm font-medium w-1/4">
                    Критерий
                  </th>
                  <th className="py-4 px-4 text-left text-white/50 text-sm font-medium w-[37.5%]">
                    👤 Традиционный подход
                  </th>
                  <th className="py-4 px-4 text-left text-[#00FF9D] text-sm font-medium w-[37.5%]">
                    🤖 Digital Affineur
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-[#00F0FF] font-medium text-sm">
                      {row.aspect}
                    </td>
                    <td className="py-4 px-4 text-white/50 text-sm">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-4 text-[#00FF9D] text-sm font-medium">
                      {row.digital}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Summary */}
          <motion.div
            variants={staggerItem}
            className="mt-12 text-center"
          >
            <div
              className="inline-flex items-center gap-4 px-6 py-4 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(0, 255, 157, 0.1) 0%, rgba(10, 10, 15, 0.9) 100%)",
                border: "1px solid rgba(0, 255, 157, 0.2)",
              }}
            >
              <span className="text-3xl">🏆</span>
              <div className="text-left">
                <p className="text-white font-bold">Результат: снижение брака с 30% до 5%</p>
                <p className="text-white/50 text-sm">Окупаемость инвестиций за 3-6 месяцев</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== FAQ SECTION =====
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Как работает нейро-символическая архитектура?",
      answer: "Система объединяет два подхода: символический слой содержит 300+ формализованных правил созревания сыра от экспертов-аффинеров (логика «если-то»), а нейросетевой слой обучается на данных камер и сенсоров, находя скрытые паттерны. Оба слоя работают синхронно: логика обеспечивает объяснимость решений, а нейросеть — адаптивность и точность.",
    },
    {
      question: "Какое оборудование необходимо для внедрения?",
      answer: "Базовый комплект включает: промышленные камеры высокого разрешения (8K гиперспектральные), датчики температуры, влажности и pH, контроллер климат-системы и сервер для обработки данных. Система интегрируется с существующим оборудованием камер созревания. Полное развёртывание занимает 2-4 недели.",
    },
    {
      question: "Насколько точны прогнозы системы?",
      answer: "Точность прогнозирования качества составляет 94% при горизонте 7 дней. Точность классификации дефектов — 99.2%. Система непрерывно обучается на данных вашего производства, повышая точность с каждой партией. Среднее время реакции на аномалию — 0.4 секунды.",
    },
    {
      question: "Может ли система работать с разными сортами сыра?",
      answer: "Да, Digital Affineur адаптируется к любым сортам: мягкие (камамбер, бри), полутвёрдые (гауда, эдам), твёрдые (пармезан, грюйер), с плесенью (рокфор, дорблю). База знаний содержит профили для 50+ сортов, и система может обучаться на ваших уникальных рецептурах.",
    },
    {
      question: "Как происходит интеграция с существующим производством?",
      answer: "Внедрение проходит в 4 этапа: 1) Аудит и установка оборудования (1 неделя), 2) Калибровка под ваши сорта и условия (1-2 недели), 3) Тестовый период в режиме рекомендаций (2 недели), 4) Полная автоматизация с контролем технолога. Весь процесс занимает 4-6 недель.",
    },
    {
      question: "Какова стоимость и срок окупаемости?",
      answer: "Стоимость зависит от масштаба производства. Типичный срок окупаемости — 3-6 месяцев за счёт снижения брака с 30% до 5% и оптимизации расхода ресурсов. Предлагаем модели покупки, аренды и подписки. Для расчёта ROI под ваше производство запросите персональную консультацию.",
    },
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #0D0D14 50%, #0A0A0F 100%)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20 mb-6">
              <span>❓</span>
              <span className="text-[#A855F7] text-sm font-medium">Частые вопросы</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Вопросы и ответы
            </h2>
          </motion.div>

          {/* FAQ List */}
          <motion.div variants={staggerItem} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                  border: `1px solid ${openIndex === i ? "rgba(168, 85, 247, 0.3)" : "rgba(168, 85, 247, 0.1)"}`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    className="text-[#A855F7] flex-shrink-0"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-white/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== DOCUMENTATION FORM SECTION =====
interface DocFormData {
  name: string;
  email: string;
  company: string;
  position: string;
  consent: boolean;
}

function DocumentationFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DocFormData>();

  const onSubmit = async (data: DocFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Documentation request:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #12121A 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#A855F7]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6">
                <span>📄</span>
                <span className="text-[#00F0FF] text-sm font-medium">Техническая документация</span>
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Запросить полную{" "}
                <span className="text-[#00F0FF]">техническую документацию</span>
              </h2>
              
              <p className="text-white/70 mb-8">
                Получите детальное описание архитектуры, спецификации оборудования, 
                примеры интеграции и расчёт ROI для вашего производства
              </p>

              <ul className="space-y-4">
                {[
                  "Полная архитектура нейро-символической системы",
                  "Спецификации камер и сенсоров",
                  "API документация для интеграции",
                  "Кейсы внедрения и результаты",
                  "Расчёт окупаемости инвестиций",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#00F0FF]/20 text-[#00F0FF] rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div variants={staggerItem}>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(10, 10, 15, 0.95) 100%)",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                }}
              >
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#00FF9D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Запрос отправлен!
                    </h3>
                    <p className="text-white/70 mb-6">
                      Документация будет отправлена на вашу почту в течение 24 часов
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#00F0FF] hover:underline font-medium"
                    >
                      Отправить ещё один запрос
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Имя <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        {...register("name", { required: "Введите имя" })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-colors outline-none text-white placeholder-white/40 ${
                          errors.name ? "border-red-400" : "border-white/10 focus:border-[#00F0FF]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        {...register("email", {
                          required: "Введите email",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Введите корректный email",
                          },
                        })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-colors outline-none text-white placeholder-white/40 ${
                          errors.email ? "border-red-400" : "border-white/10 focus:border-[#00F0FF]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Компания
                      </label>
                      <input
                        type="text"
                        placeholder="Название компании"
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00F0FF] transition-colors outline-none text-white placeholder-white/40"
                      />
                    </div>

                    {/* Position Field */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Должность
                      </label>
                      <input
                        type="text"
                        placeholder="Ваша должность"
                        {...register("position")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00F0FF] transition-colors outline-none text-white placeholder-white/40"
                      />
                    </div>

                    {/* Consent */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register("consent", { required: "Необходимо согласие" })}
                          className="w-5 h-5 mt-0.5 rounded bg-white/5 border-white/20"
                        />
                        <span className="text-sm text-white/60">
                          Согласен на обработку{" "}
                          <a href="/privacy" className="text-[#00F0FF] hover:underline">
                            персональных данных
                          </a>
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-red-400 text-sm mt-1">{errors.consent.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all disabled:opacity-50"
                      style={{
                        background: "linear-gradient(135deg, #00F0FF 0%, #00D4E0 100%)",
                        color: "#000",
                        boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Отправка...
                        </span>
                      ) : (
                        "Запросить документацию"
                      )}
                    </button>

                    <p className="text-center text-white/40 text-sm">
                      📧 Документация придёт на указанный email
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== MAIN PAGE COMPONENT =====
export default function TechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0F]">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        <HeroSection />
        <HowItWorksSection />
        <MachineVisionSection />
        <ComparisonSection />
        <FAQSection />
        <DocumentationFormSection />
      </main>

      <Footer />
    </div>
  );
}
