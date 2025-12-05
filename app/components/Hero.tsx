"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";

// Pre-defined floating dots to avoid hydration mismatch
const floatingDots = [
  { width: 3, height: 4, left: 5, top: 15, opacity: 0.3, duration: 5, delay: 0 },
  { width: 4, height: 3, left: 15, top: 25, opacity: 0.4, duration: 6, delay: 0.5 },
  { width: 2, height: 5, left: 25, top: 10, opacity: 0.2, duration: 4, delay: 1 },
  { width: 5, height: 4, left: 35, top: 45, opacity: 0.5, duration: 7, delay: 0.3 },
  { width: 3, height: 3, left: 45, top: 65, opacity: 0.3, duration: 5, delay: 1.2 },
  { width: 4, height: 5, left: 55, top: 20, opacity: 0.4, duration: 6, delay: 0.8 },
  { width: 2, height: 3, left: 65, top: 75, opacity: 0.2, duration: 4, delay: 1.5 },
  { width: 5, height: 2, left: 75, top: 35, opacity: 0.5, duration: 5, delay: 0.2 },
  { width: 3, height: 4, left: 85, top: 55, opacity: 0.3, duration: 6, delay: 1.8 },
  { width: 4, height: 3, left: 95, top: 85, opacity: 0.4, duration: 7, delay: 0.6 },
  { width: 2, height: 5, left: 10, top: 80, opacity: 0.2, duration: 4, delay: 1.1 },
  { width: 5, height: 4, left: 20, top: 60, opacity: 0.5, duration: 5, delay: 0.4 },
  { width: 3, height: 3, left: 30, top: 90, opacity: 0.3, duration: 6, delay: 1.7 },
  { width: 4, height: 5, left: 40, top: 30, opacity: 0.4, duration: 7, delay: 0.9 },
  { width: 2, height: 3, left: 50, top: 5, opacity: 0.2, duration: 4, delay: 1.4 },
  { width: 5, height: 2, left: 60, top: 50, opacity: 0.5, duration: 5, delay: 0.1 },
  { width: 3, height: 4, left: 70, top: 95, opacity: 0.3, duration: 6, delay: 1.6 },
  { width: 4, height: 3, left: 80, top: 40, opacity: 0.4, duration: 7, delay: 0.7 },
  { width: 2, height: 5, left: 90, top: 70, opacity: 0.2, duration: 4, delay: 1.3 },
  { width: 5, height: 4, left: 3, top: 50, opacity: 0.5, duration: 5, delay: 1.9 },
];

export default function Hero() {
  // Marquee text content
  const marqueeText = "Мониторинг: 50+ параметров | Точность прогноза: 94% | Обучено на 247+ партиях";

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #1A1A2E 100%)",
      }}
    >
      {/* Abstract dot and line pattern background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* SVG Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              {/* Dots */}
              <circle cx="2" cy="2" r="1" fill="#00F0FF" opacity="0.5" />
              <circle cx="30" cy="30" r="1.5" fill="#00F0FF" opacity="0.3" />
              <circle cx="58" cy="58" r="1" fill="#00F0FF" opacity="0.4" />
              {/* Lines */}
              <line
                x1="0"
                y1="30"
                x2="60"
                y2="30"
                stroke="#00F0FF"
                strokeWidth="0.3"
                opacity="0.2"
              />
              <line
                x1="30"
                y1="0"
                x2="30"
                y2="60"
                stroke="#00F0FF"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {/* Animated floating dots */}
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: dot.width + "px",
              height: dot.height + "px",
              background: "#00F0FF",
              left: dot.left + "%",
              top: dot.top + "%",
              opacity: dot.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}

        {/* Connecting lines animation */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="40%"
            stroke="#00F0FF"
            strokeWidth="0.5"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1], pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.line
            x1="70%"
            y1="15%"
            x2="90%"
            y2="35%"
            stroke="#00F0FF"
            strokeWidth="0.5"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0.1, 0.4, 0.1], pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.line
            x1="20%"
            y1="70%"
            x2="50%"
            y2="85%"
            stroke="#00F0FF"
            strokeWidth="0.5"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1], pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
          <motion.line
            x1="60%"
            y1="60%"
            x2="85%"
            y2="75%"
            stroke="#00F0FF"
            strokeWidth="0.5"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0.1, 0.35, 0.1], pathLength: 1 }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
          />
        </svg>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00F0FF]/5 rounded-full blur-[80px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col justify-center py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title - Digital Affineur */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
            style={{
              color: "#00F0FF",
              textShadow: `
                0 0 10px #00F0FF,
                0 0 20px #00F0FF,
                0 0 40px #00F0FF,
                0 0 80px rgba(0, 240, 255, 0.5)
              `,
            }}
          >
            Digital Affineur
          </motion.h1>

          {/* Subtitle - Цифровой аффинер */}
          <motion.h2
            variants={staggerItem}
            className="text-white font-bold mb-8"
            style={{
              fontSize: "2.5rem",
            }}
          >
            Цифровой аффинер
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Автономная система управления созреванием сыра. Нейро-символический
            ИИ, который видит, учится и действует как опытный аффинер.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button - Рассчитать экономию */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px #00F0FF, 0 0 40px rgba(0, 240, 255, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              style={{
                backgroundColor: "#00F0FF",
                color: "#000000",
              }}
            >
              Рассчитать экономию
            </motion.button>

            {/* Secondary Button - Смотреть демо */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#00F0FF",
                color: "#000000",
                borderColor: "#00F0FF",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all duration-300"
              style={{
                backgroundColor: "transparent",
                border: "1px solid white",
              }}
            >
              Смотреть демо
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-8 left-0 right-0 py-4 bg-gradient-to-r from-[#0A0A0F]/80 via-transparent to-[#0A0A0F]/80 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate text for seamless loop */}
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-white/60 text-sm sm:text-base font-medium tracking-wide"
              style={{
                textShadow: "0 0 10px rgba(0, 240, 255, 0.3)",
              }}
            >
              {marqueeText} &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1A2E] to-transparent pointer-events-none" />
    </section>
  );
}
