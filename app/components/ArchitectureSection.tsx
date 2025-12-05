"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";

const layers = [
  {
    id: "symbolic",
    icon: "📖",
    title: "Символический слой",
    subtitle: "Логика",
    color: "#00F0FF",
    items: [
      "300+ биохимических правил созревания",
      "Книга знаний аффинера в цифре",
    ],
  },
  {
    id: "neural",
    icon: "🧠",
    title: "Нейросетевой слой",
    subtitle: "Интуиция",
    color: "#A855F7",
    items: [
      "Самообучается на данных камер и сенсоров",
      "Чутьё и опыт аффинера",
    ],
  },
];

export default function ArchitectureSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #12121A 50%, #0A0A0F 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 240, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        {/* Connecting line decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line
            x1="20%"
            y1="30%"
            x2="80%"
            y2="70%"
            stroke="#00F0FF"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <line
            x1="80%"
            y1="30%"
            x2="20%"
            y2="70%"
            stroke="#A855F7"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
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
            <p className="text-[#00F0FF] text-sm font-medium tracking-wider uppercase mb-4">
              Уникальная архитектура
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Мы не используем AI. Мы создали{" "}
              <span
                className="text-[#00F0FF]"
                style={{
                  textShadow: "0 0 20px rgba(0, 240, 255, 0.5)",
                }}
              >
                Digital Affineur
              </span>{" "}
              — цифрового ученика величайших мастеров.
            </h2>
          </motion.div>

          {/* Architecture Diagram */}
          <div className="relative">
            {/* Layers Grid */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8"
            >
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Card with gradient border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${layer.color}40 0%, transparent 50%, ${layer.color}20 100%)`,
                      padding: "1px",
                    }}
                  />
                  <div
                    className="relative rounded-2xl p-6 md:p-8 h-full"
                    style={{
                      background: "linear-gradient(135deg, rgba(20, 20, 30, 0.9) 0%, rgba(10, 10, 15, 0.95) 100%)",
                      border: `1px solid ${layer.color}30`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${layer.color}20 0%, ${layer.color}10 100%)`,
                          border: `1px solid ${layer.color}40`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {layer.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-white font-bold text-lg md:text-xl">
                          {layer.title}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: layer.color }}
                        >
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Items */}
                    <ul className="space-y-4">
                      {layer.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + itemIndex * 0.1 }}
                        >
                          <span
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{
                              background: layer.color,
                              boxShadow: `0 0 10px ${layer.color}`,
                            }}
                          />
                          <span className="text-white/80 text-base md:text-lg">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `0 0 40px ${layer.color}20, inset 0 0 40px ${layer.color}05`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Connecting Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center my-6"
            >
              <div className="relative">
                {/* Arrow lines from both cards */}
                <svg
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-8 hidden md:block"
                  viewBox="0 0 160 32"
                >
                  <motion.path
                    d="M 0 0 Q 40 32 80 16"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 160 0 Q 120 32 80 16"
                    stroke="#A855F7"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>

                {/* Center merge indicator */}
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #00F0FF 0%, #A855F7 100%)",
                    boxShadow: "0 0 30px rgba(0, 240, 255, 0.3), 0 0 30px rgba(168, 85, 247, 0.3)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 30px rgba(0, 240, 255, 0.3), 0 0 30px rgba(168, 85, 247, 0.3)",
                      "0 0 50px rgba(0, 240, 255, 0.5), 0 0 50px rgba(168, 85, 247, 0.5)",
                      "0 0 30px rgba(0, 240, 255, 0.3), 0 0 30px rgba(168, 85, 247, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-xl">⚡</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Result Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div
                className="relative rounded-2xl p-6 md:p-8 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0, 240, 255, 0.1), 0 0 40px rgba(168, 85, 247, 0.05)",
                      "0 0 30px rgba(0, 240, 255, 0.2), 0 0 60px rgba(168, 85, 247, 0.1)",
                      "0 0 20px rgba(0, 240, 255, 0.1), 0 0 40px rgba(168, 85, 247, 0.05)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <p className="text-[#00F0FF] text-sm font-medium tracking-wider uppercase mb-3">
                  Результат
                </p>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                  style={{
                    textShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
                  }}
                >
                  Единственная система, которая{" "}
                  <span className="text-[#00F0FF]">понимает</span> науку о сыре
                </h3>

                {/* Decorative elements */}
                <div className="flex justify-center gap-4 mt-6">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#00F0FF]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "linear-gradient(135deg, #00F0FF, #A855F7)" }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#A855F7]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom decoration */}
          <motion.div
            variants={staggerItem}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center gap-3 text-white/40 text-sm">
              <span>📖 Логика</span>
              <span className="text-[#00F0FF]">+</span>
              <span>🧠 Интуиция</span>
              <span className="text-[#00F0FF]">=</span>
              <span className="text-[#00F0FF] font-medium">⚡ Digital Affineur</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

