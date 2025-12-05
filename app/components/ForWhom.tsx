"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, useScrollAnimation } from "../utils/animations";

const segments = [
  {
    icon: "🏠",
    title: "Малая сыроварня",
    scale: "5-50 кг/день",
    problem: "Нет денег на технолога",
    solution: "ИИ-технолог за 1/10 стоимости",
    color: "border-blue-400",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    icon: "🏭",
    title: "Среднее производство",
    scale: "50-500 кг/день",
    problem: "Скачки качества между партиями",
    solution: "Стандартизация 25+ сортов",
    color: "border-accent",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
    featured: true,
  },
  {
    icon: "🏢",
    title: "Крупный завод",
    scale: "500+ кг/день",
    problem: "Масштабные потери = миллионные убытки",
    solution: "Предиктивная аналитика и KPI",
    color: "border-green-400",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
  },
];

export default function ForWhom() {
  const { ref, isInView } = useScrollAnimation();
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();

  return (
    <section className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Кому подходит
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Для какого бизнеса подойдёт решение?
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Независимо от масштаба производства, ИИ-система адаптируется под ваши задачи
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: segment.featured ? 1.02 : 1.03,
                y: -8,
              }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-2xl border-2 ${segment.color} ${segment.bgColor} p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col ${
                segment.featured ? "md:-mt-4 md:mb-4 md:scale-105" : ""
              }`}
            >
              {/* Featured Badge */}
              {segment.featured && (
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ delay: 0.5 }}
                >
                  Популярный выбор
                </motion.div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`w-14 h-14 ${segment.iconBg} rounded-xl flex items-center justify-center`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-3xl">{segment.icon}</span>
                </motion.div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{segment.title}</h3>
                  <span className="text-foreground/50 text-sm">{segment.scale}</span>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-sm font-medium text-foreground/70">Проблема</span>
                </div>
                <p className="text-foreground/80 pl-6">
                  {segment.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm font-medium text-foreground/70">Решение</span>
                </div>
                <p className="text-foreground font-medium pl-6">
                  {segment.solution}
                </p>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                  segment.featured
                    ? "bg-accent text-white hover:bg-accent/90 shadow-md"
                    : "bg-white text-primary border-2 border-primary/20 hover:border-primary"
                }`}
              >
                Решение для вас →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-foreground/50 text-sm">
            Не уверены, какой тариф подойдёт? 
            <a href="#" className="text-accent hover:underline ml-1">
              Получите бесплатную консультацию
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
