"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { staggerContainer, staggerItem } from "../utils/animations";

// Simulated real-time data values
const useAnimatedValue = (min: number, max: number, decimals: number = 1) => {
  const [value, setValue] = useState(min + (max - min) / 2);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = min + Math.random() * (max - min);
      setValue(Number(newValue.toFixed(decimals)));
    }, 2000 + Math.random() * 1000);
    
    return () => clearInterval(interval);
  }, [min, max, decimals]);
  
  return value;
};

// Terminal-style data display component
function DataTerminal() {
  const [lines, setLines] = useState<string[]>([
    "> Инициализация системы...",
    "> Подключение к сенсорной сети...",
    "> Загрузка биохимических моделей...",
  ]);
  
  const dataPoints = [
    "pH внешнего слоя: 5.42 → анализ...",
    "Влажность ядра: 47.3% [норма]",
    "Диффузия NaCl: 2.1 мм/ч",
    "Протеолиз: индекс 0.73",
    "T° созревания: 12.4°C [оптимум]",
    "CO₂ камеры: 0.8% → корректировка",
    "Активность P.camemberti: высокая",
    "Кристаллизация: прогноз +48ч",
  ];
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev, `> ${dataPoints[index % dataPoints.length]}`];
        if (newLines.length > 8) newLines.shift();
        return newLines;
      });
      index++;
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="font-mono text-xs sm:text-sm space-y-1">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${
            line.includes("[норма]") || line.includes("[оптимум]")
              ? "text-[#00FF9D]"
              : line.includes("корректировка")
              ? "text-yellow-400"
              : "text-[#00F0FF]"
          }`}
        >
          {line}
          {i === lines.length - 1 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              _
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Sensor visualization on cheese wheel
function CheeseWheelVisualization() {
  const sensorPositions = [
    { x: 50, y: 20, label: "pH" },
    { x: 25, y: 40, label: "NaCl" },
    { x: 75, y: 40, label: "H₂O" },
    { x: 35, y: 65, label: "T°" },
    { x: 65, y: 65, label: "O₂" },
    { x: 50, y: 50, label: "Core" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto">
      {/* Cheese wheel outline */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="0.5"
          opacity="0.3"
        />
        {/* Inner circles (diffusion layers) */}
        {[35, 25, 15].map((r, i) => (
          <motion.circle
            key={i}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#00F0FF"
            strokeWidth="0.3"
            strokeDasharray="2,2"
            opacity={0.2 + i * 0.1}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        {/* Diffusion animation */}
        <motion.circle
          cx="50"
          cy="50"
          r="5"
          fill="#00F0FF"
          opacity="0.1"
          animate={{ r: [5, 45], opacity: [0.3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      
      {/* Sensor points */}
      {sensorPositions.map((sensor, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${sensor.x}%`,
            top: `${sensor.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 w-4 h-4 rounded-full bg-[#00F0FF]"
              style={{ transform: "translate(-25%, -25%)" }}
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
            {/* Sensor dot */}
            <div
              className="w-2 h-2 rounded-full bg-[#00F0FF]"
              style={{ boxShadow: "0 0 8px #00F0FF" }}
            />
          </motion.div>
          <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[8px] text-[#00F0FF]/70 whitespace-nowrap">
            {sensor.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// Microbe culture visualization
function MicrobeVisualization() {
  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto">
      {/* Petri dish outline */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#00FF9D"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#00FF9D"
          strokeWidth="0.3"
          opacity="0.2"
        />
      </svg>
      
      {/* Animated microbe colonies */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 15 + (i % 3) * 10;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: i % 2 === 0 
                  ? "radial-gradient(circle, #00FF9D 0%, transparent 70%)"
                  : "radial-gradient(circle, #00F0FF 0%, transparent 70%)",
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Center culture */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-8 h-8 rounded-full"
          style={{
            background: "radial-gradient(circle, #00FF9D40 0%, transparent 70%)",
            boxShadow: "0 0 20px #00FF9D30",
          }}
        />
      </motion.div>
    </div>
  );
}

export default function ScienceSection() {
  const ph = useAnimatedValue(5.2, 5.8, 2);
  const humidity = useAnimatedValue(45, 52, 1);
  const temp = useAnimatedValue(11.5, 13.5, 1);
  const co2 = useAnimatedValue(0.5, 1.2, 2);

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #0D0D14 50%, #0A0A0F 100%)",
      }}
    >
      {/* Laboratory grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Coordinate grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern
              id="lab-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="0.5"
              />
              <circle cx="0" cy="0" r="1" fill="#00F0FF" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lab-grid)" />
        </svg>
        
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6">
              <span>🔬</span>
              <span className="text-[#00F0FF] text-sm font-medium">
                Биохимическая лаборатория
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Биохимия в цифрах:{" "}
              <span
                className="text-[#00F0FF]"
                style={{ textShadow: "0 0 20px rgba(0, 240, 255, 0.5)" }}
              >
                Полная наука о сыре
              </span>
              , оцифрованная в реальном времени
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
              Ваше производство становится оцифрованной биохимической лабораторией
            </p>
          </motion.div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
            {/* Left - Sensors */}
            <motion.div
              variants={staggerItem}
              className="relative"
            >
              <div
                className="h-full rounded-2xl p-6 md:p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{
                      background: "rgba(0, 240, 255, 0.1)",
                      border: "1px solid rgba(0, 240, 255, 0.3)",
                    }}
                  >
                    📡
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Сенсорная сеть</h3>
                    <p className="text-[#00F0FF] text-xs">Внутри головки</p>
                  </div>
                </div>

                <CheeseWheelVisualization />

                <p className="mt-6 text-white/70 text-sm leading-relaxed">
                  Сеть датчиков отслеживает{" "}
                  <span className="text-[#00F0FF]">диффузию соли</span>,{" "}
                  <span className="text-[#00F0FF]">pH</span> и{" "}
                  <span className="text-[#00F0FF]">влажность</span> в реальном
                  времени на каждом слое созревания.
                </p>

                {/* Live values */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-black/30 rounded-lg p-2 text-center">
                    <div className="text-[#00F0FF] text-lg font-mono">{ph}</div>
                    <div className="text-white/40 text-xs">pH</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-2 text-center">
                    <div className="text-[#00F0FF] text-lg font-mono">{humidity}%</div>
                    <div className="text-white/40 text-xs">Влажность</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center - Analytics */}
            <motion.div
              variants={staggerItem}
              className="relative"
            >
              <div
                className="h-full rounded-2xl p-6 md:p-8"
                style={{
                  background: "linear-gradient(180deg, rgba(0, 240, 255, 0.08) 0%, rgba(10, 10, 15, 0.95) 100%)",
                  border: "1px solid rgba(0, 240, 255, 0.3)",
                  boxShadow: "0 0 40px rgba(0, 240, 255, 0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{
                      background: "rgba(0, 240, 255, 0.15)",
                      border: "1px solid rgba(0, 240, 255, 0.4)",
                    }}
                  >
                    📊
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Аналитический центр</h3>
                    <p className="text-[#00F0FF] text-xs">500+ параметров/сек</p>
                  </div>
                </div>

                {/* Terminal Display */}
                <div
                  className="rounded-lg p-4 mb-4 h-48 overflow-hidden"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(0, 240, 255, 0.2)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#00F0FF]/20">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[#00F0FF]/50 text-xs ml-2">
                      affineur_core v2.4
                    </span>
                  </div>
                  <DataTerminal />
                </div>

                <div className="space-y-2">
                  <p className="text-white/70 text-sm">
                    <span className="text-[#00F0FF]">•</span> Модели кристаллизации
                  </p>
                  <p className="text-white/70 text-sm">
                    <span className="text-[#00F0FF]">•</span> Протеолиз & Липолиз
                  </p>
                  <p className="text-white/70 text-sm">
                    <span className="text-[#00F0FF]">•</span> Предиктивная аналитика
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Microbiology */}
            <motion.div
              variants={staggerItem}
              className="relative"
            >
              <div
                className="h-full rounded-2xl p-6 md:p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 255, 157, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                  border: "1px solid rgba(0, 255, 157, 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{
                      background: "rgba(0, 255, 157, 0.1)",
                      border: "1px solid rgba(0, 255, 157, 0.3)",
                    }}
                  >
                    🦠
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Микробиология</h3>
                    <p className="text-[#00FF9D] text-xs">Контроль культур</p>
                  </div>
                </div>

                <MicrobeVisualization />

                <p className="mt-6 text-white/70 text-sm leading-relaxed">
                  Полная наука о плесенях:{" "}
                  <span className="text-[#00FF9D] italic">P. camemberti</span>,{" "}
                  <span className="text-[#00FF9D] italic">G. candidum</span>.
                  Динамический контроль CO₂/O₂.
                </p>

                {/* Live values */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-black/30 rounded-lg p-2 text-center">
                    <div className="text-[#00FF9D] text-lg font-mono">{temp}°C</div>
                    <div className="text-white/40 text-xs">Температура</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-2 text-center">
                    <div className="text-[#00FF9D] text-lg font-mono">{co2}%</div>
                    <div className="text-white/40 text-xs">CO₂</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            variants={staggerItem}
            className="mt-12"
          >
            <div
              className="rounded-xl p-4 md:p-6"
              style={{
                background: "linear-gradient(90deg, rgba(0, 240, 255, 0.05) 0%, rgba(0, 255, 157, 0.05) 100%)",
                border: "1px solid rgba(0, 240, 255, 0.15)",
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-[#00F0FF]"
                    style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.5)" }}
                  >
                    500+
                  </motion.div>
                  <div className="text-white/50 text-sm">параметров/сек</div>
                </div>
                <div>
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-[#00F0FF]"
                    style={{ textShadow: "0 0 15px rgba(0, 240, 255, 0.5)" }}
                  >
                    300+
                  </motion.div>
                  <div className="text-white/50 text-sm">биохим. правил</div>
                </div>
                <div>
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-[#00FF9D]"
                    style={{ textShadow: "0 0 15px rgba(0, 255, 157, 0.5)" }}
                  >
                    12
                  </motion.div>
                  <div className="text-white/50 text-sm">типов культур</div>
                </div>
                <div>
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-[#00FF9D]"
                    style={{ textShadow: "0 0 15px rgba(0, 255, 157, 0.5)" }}
                  >
                    24/7
                  </motion.div>
                  <div className="text-white/50 text-sm">мониторинг</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

