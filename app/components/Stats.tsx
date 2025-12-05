"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, useScrollAnimation } from "../utils/animations";

const stats = [
  {
    icon: "📊",
    value: "95%",
    label: "Точность прогноза",
  },
  {
    icon: "📈",
    value: "25%",
    label: "Рост выхода продукции",
  },
  {
    icon: "⏱️",
    value: "80%",
    label: "Экономия времени технолога",
  },
  {
    icon: "💰",
    value: "3-6 мес",
    label: "Срок окупаемости",
  },
];

export default function Stats() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Ключевые показатели
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Результаты внедрения ИИ-системы на сыроварнях наших клиентов
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-accent/20 transition-colors duration-300 group"
            >
              {/* Icon */}
              <motion.div
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-2xl">{stat.icon}</span>
              </motion.div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {stat.value}
              </div>

              {/* Label */}
              <p className="text-sm text-foreground/70 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
