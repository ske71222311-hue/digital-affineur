"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";

const problems = [
  {
    icon: "👨‍🔬",
    title: "Кадровый голод",
    highlight: "Меньше 50",
    text: "сертифицированных специалистов в России",
  },
  {
    icon: "📚",
    title: "Недоступная экспертиза",
    highlight: "8-10 лет",
    text: "обучения для эксперта",
  },
  {
    icon: "💸",
    title: "Дорогой брак",
    highlight: "23%",
    text: "потерь из-за человеческих ошибок",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #0A0A0F 50%, #1A1A2E 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Glow effects */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="text-center mb-6">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{
                textShadow: "0 0 40px rgba(255, 100, 100, 0.3)",
              }}
            >
              Проблема, которая стоит{" "}
              <span
                className="text-red-400"
                style={{
                  textShadow: "0 0 20px rgba(248, 113, 113, 0.5)",
                }}
              >
                миллионов
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="text-center text-white/70 text-lg sm:text-xl md:text-2xl mb-16 max-w-3xl mx-auto"
          >
            Искусство аффинажа уходит вместе с его носителями
          </motion.p>

          {/* Problems List */}
          <motion.div
            variants={staggerItem}
            className="space-y-0"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Divider line (before each item except first) */}
                {index > 0 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6 md:my-8" />
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-4">
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl md:text-3xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {problem.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg md:text-xl mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-white/60 text-base md:text-lg">
                      <span
                        className="font-bold text-[#00F0FF]"
                        style={{
                          textShadow: "0 0 15px rgba(0, 240, 255, 0.5)",
                        }}
                      >
                        {problem.highlight}
                      </span>{" "}
                      {problem.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider before conclusion */}
          <motion.div
            variants={staggerItem}
            className="h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent my-10 md:my-12"
          />

          {/* Conclusion */}
          <motion.div
            variants={staggerItem}
            className="text-center"
          >
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Ваше производство зависит от ресурса,{" "}
              <span
                className="text-red-400 font-bold"
                style={{
                  textShadow: "0 0 20px rgba(248, 113, 113, 0.4)",
                }}
              >
                которого почти не осталось
              </span>
            </motion.p>
          </motion.div>

          {/* Warning indicator */}
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-400/30"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(248, 113, 113, 0.1)",
                  "0 0 40px rgba(248, 113, 113, 0.2)",
                  "0 0 20px rgba(248, 113, 113, 0.1)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-red-400 text-xl">⚠️</span>
              <span className="text-red-300 text-sm font-medium">
                Критическая зависимость
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

