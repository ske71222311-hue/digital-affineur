"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { staggerContainer, staggerItem } from "../utils/animations";

// Tooltip component for interactive terms
function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <span
      className="relative inline-block cursor-help border-b border-dashed border-[#00F0FF]/50"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-lg text-xs text-white/90 leading-relaxed"
            style={{
              background: "linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(10, 10, 15, 0.98) 100%)",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)",
            }}
          >
            {content}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#0A0A0F] border-r border-b border-[#00F0FF]/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// Animated chat dialogue
function AIDialogue() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  
  const messages = [
    { type: "symbolic", text: "Правило #184: Если pH < 5.2 и температура > 14°C → риск горького вкуса." },
    { type: "neural", text: "Подтверждаю: обнаружила паттерн горькости в 92% схожих партий." },
    { type: "symbolic", text: "База знаний: в партии #842 снизили температуру на 1.8°C." },
    { type: "neural", text: "Прогноз: это даст +0.7 балла качества, но замедлит липолиз на 15%." },
    { type: "symbolic", text: "Компромисс: снижаем на 1.2°C, корректируем влажность." },
    { type: "result", text: "✓ Решение принято за 0.4 сек. Команда отправлена в климат-систему." },
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Reset after showing all
      const timer = setTimeout(() => {
        setVisibleMessages(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages, messages.length]);

  return (
    <div className="space-y-3 font-mono text-sm">
      {messages.slice(0, visibleMessages).map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: msg.type === "symbolic" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`flex items-start gap-3 ${
            msg.type === "result" ? "justify-center" : ""
          }`}
        >
          {msg.type !== "result" && (
            <span
              className={`flex-shrink-0 px-2 py-1 rounded text-xs font-bold ${
                msg.type === "symbolic"
                  ? "bg-[#00F0FF]/20 text-[#00F0FF]"
                  : "bg-purple-500/20 text-purple-400"
              }`}
            >
              {msg.type === "symbolic" ? "📖 SYM" : "🧠 NET"}
            </span>
          )}
          <span
            className={`${
              msg.type === "result"
                ? "text-[#00FF9D] bg-[#00FF9D]/10 px-4 py-2 rounded-lg"
                : "text-white/80"
            }`}
          >
            {msg.text}
          </span>
        </motion.div>
      ))}
      {visibleMessages < messages.length && (
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-[#00F0FF]/50"
        >
          Обработка...
        </motion.div>
      )}
    </div>
  );
}

// Comparison table row with animation
function ComparisonRow({ time, human, ai, delay }: { time: string; human: string; ai: string; delay: number }) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="border-b border-white/10"
    >
      <td className="py-4 px-4 text-[#00F0FF] font-mono text-sm">{time}</td>
      <td className="py-4 px-4 text-white/60 text-sm">{human}</td>
      <td className="py-4 px-4 text-[#00FF9D] text-sm">{ai}</td>
    </motion.tr>
  );
}

// Quote component with neon frame
function NeonQuote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative my-12 mx-auto max-w-3xl"
    >
      <div
        className="relative p-8 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
          boxShadow: "0 0 30px rgba(0, 240, 255, 0.1), inset 0 0 30px rgba(0, 240, 255, 0.03)",
        }}
      >
        {/* Neon border animation */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            border: "1px solid transparent",
            background: "linear-gradient(90deg, #00F0FF, #A855F7, #00F0FF) border-box",
            mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed">
          "{children}"
        </p>
        {author && (
          <footer className="mt-4 text-[#00F0FF] text-sm">— {author}</footer>
        )}
      </div>
    </motion.blockquote>
  );
}

// Animated digital twin visualization
function DigitalTwin() {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-[#00F0FF]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* Data points */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2 + (rotation * Math.PI) / 180;
        const x = 50 + Math.cos(angle) * 40;
        const y = 50 + Math.sin(angle) * 40;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#00F0FF]"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              boxShadow: "0 0 10px #00F0FF",
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}
      {/* Center cheese visualization */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-200/20 to-amber-600/10 border border-amber-400/30 flex items-center justify-center">
        <span className="text-4xl">🧀</span>
      </div>
      {/* Scanning line */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-px h-16 bg-gradient-to-b from-[#00F0FF] to-transparent origin-top"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}

// Section divider
function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 my-16"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
        style={{
          background: "linear-gradient(135deg, #00F0FF20 0%, #A855F720 100%)",
          border: "1px solid #00F0FF30",
        }}
      >
        <span className="text-[#00F0FF]">{number}</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-[#00F0FF]/30 to-transparent" />
    </motion.div>
  );
}

export default function TechnologyMasterpiece() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0F 0%, #080810 50%, #0A0A0F 100%)",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="article-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00F0FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#article-grid)" />
        </svg>
        
        {/* Floating data particles (reduced for performance) */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00F0FF]/30"
            style={{
              left: `${(i * 10) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.article
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Article Header */}
          <motion.header variants={staggerItem} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-8">
              <span className="text-[#00F0FF] text-sm font-medium tracking-wider">
                LONGREAD • 12 МИН ЧТЕНИЯ
              </span>
            </div>
            
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ textShadow: "0 0 40px rgba(0, 240, 255, 0.2)" }}
            >
              Digital Affineur:{" "}
              <span className="text-[#00F0FF]">Когда ИИ становится сомелье сыра</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Первая система, которая чувствует сыр лучше человека. Рассказываем, как{" "}
              <Tooltip content="Комбинация логических правил и нейронных сетей, где система использует и формальные знания экспертов, и паттерны из данных">
                нейро-символический интеллект
              </Tooltip>{" "}
              переписывает правила 4000-летнего ремесла.
            </p>
            
            {/* Digital Twin Preview */}
            <div className="mt-12">
              <DigitalTwin />
              <p className="text-[#00F0FF]/50 text-xs mt-4">Цифровой двойник: сканирование в реальном времени</p>
            </div>
          </motion.header>

          {/* Section 1: Prologue */}
          <SectionDivider number="01" title="Утро, которое изменило сыроварню" />
          
          <motion.div variants={staggerItem} className="prose prose-invert max-w-none">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              В <span className="text-[#00F0FF] font-mono">4:37</span> утра, пока технолог спал, 
              компьютерное зрение заметило то, что человек не видит даже при свете дня: 
              микротрещину в корке камамбера.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              За <span className="text-[#00F0FF] font-mono">0.8</span> секунды{" "}
              <Tooltip content="Глубокая сверточная нейросеть, обученная на 50,000+ изображениях сырных дефектов">
                нейросеть
              </Tooltip>{" "}
              распознала{" "}
              <Tooltip content="Благородная плесень, используемая в производстве камамбера и бри. Мутация G12A может влиять на вкусовой профиль">
                <em>Penicillium camemberti</em> с мутацией G12A
              </Tooltip>.
            </p>
            
            <NeonQuote>
              Система не стала будить людей. Она знала, что делать.
            </NeonQuote>
          </motion.div>

          {/* Section 2: Machine Vision */}
          <SectionDivider number="02" title="Машинное зрение, которое видит невидимое" />
          
          <motion.div variants={staggerItem}>
            <p className="text-[#00F0FF] text-sm font-medium mb-4">
              Не "камера", а "цифровая лупа"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { value: "1200", label: "текстурных признаков корки", human: "человек различает 20" },
                { value: "8K", label: "гиперспектральная съемка", human: "16-битный диапазон цвета" },
                { value: "0.03 мм", label: "глубина микротрещин", human: "в 10 раз тоньше волоса" },
                { value: "5", label: "оттенков белого плесени", human: "невидимых глазу" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(10, 10, 15, 0.9) 100%)",
                    border: "1px solid rgba(0, 240, 255, 0.15)",
                  }}
                >
                  <div className="text-2xl font-bold text-[#00F0FF] mb-1">{item.value}</div>
                  <div className="text-white/80 text-sm mb-2">{item.label}</div>
                  <div className="text-white/40 text-xs">{item.human}</div>
                </motion.div>
              ))}
            </div>

            <div
              className="p-6 rounded-xl mb-8"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
              }}
            >
              <p className="text-white/60 text-sm mb-2">Когда сыровар видит "белую плесень", Digital Affineur видит:</p>
              <p className="text-[#00F0FF] font-mono text-sm">
                <span className="text-white/40">species:</span> Penicillium camemberti {" "}
                <span className="text-white/40">strain:</span> B35 {" "}
                <span className="text-white/40">age:</span> 9d {" "}
                <span className="text-white/40">protease_activity:</span> 73% {" "}
                <span className="text-yellow-400">⚠️ overripe_risk:</span> 42h
              </p>
            </div>
          </motion.div>

          {/* Section 3: Neuro-Symbolic Dialogue */}
          <SectionDivider number="03" title="Как ИИ думает о сыре" />
          
          <motion.div variants={staggerItem}>
            <p className="text-white/70 mb-6">
              Диалог между{" "}
              <Tooltip content="Логический слой, содержащий 300+ формализованных правил созревания сыра от экспертов-аффинеров">
                символическим
              </Tooltip>{" "}
              и{" "}
              <Tooltip content="Нейросеть, обученная на миллионах точек данных, находит скрытые паттерны, недоступные формальной логике">
                нейросетевым
              </Tooltip>{" "}
              слоями в реальном времени:
            </p>
            
            <div
              className="p-6 rounded-xl min-h-[280px]"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#00F0FF]/20">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[#00F0FF]/50 text-xs ml-2">neuro_symbolic_core.log</span>
              </div>
              <AIDialogue />
            </div>
            
            <NeonQuote>
              Это не алгоритм — это мышление.
            </NeonQuote>
          </motion.div>

          {/* Section 4: Comparison Table */}
          <SectionDivider number="04" title="Человек vs Digital Affineur" />
          
          <motion.div variants={staggerItem} className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#00F0FF]/30">
                  <th className="py-3 px-4 text-left text-[#00F0FF] text-sm font-medium">Время</th>
                  <th className="py-3 px-4 text-left text-white/50 text-sm font-medium">👤 Человек-аффинер</th>
                  <th className="py-3 px-4 text-left text-[#00FF9D] text-sm font-medium">🤖 Digital Affineur</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow time="00:00" human="Спит" ai="Сканирует партию #304: 142 головки" delay={0} />
                <ComparisonRow time="04:30" human="Глубокий сон" ai="Обнаружил аномалию: отклонение веса 2.3%" delay={0.1} />
                <ComparisonRow time="08:00" human="Пришел на работу" ai="Уже выполнил 14 корректировок" delay={0.2} />
                <ComparisonRow time="12:00" human="Осматривает 10% партии" ai="Проанализировал 100%, обновил двойники" delay={0.3} />
                <ComparisonRow time="16:00" human="Устал, субъективные решения" ai="Пик точности: 99.7% предсказаний" delay={0.4} />
                <ComparisonRow time="20:00" human="Ушел домой" ai="Обучается, улучшил модель на 0.3%" delay={0.5} />
                <ComparisonRow time="24:00" human="—" ai="Отчет: 0 брака, экономия 42 000 ₽" delay={0.6} />
              </tbody>
            </table>
          </motion.div>

          {/* Section 5: Ecosystem */}
          <SectionDivider number="05" title="Экосистема возможностей" />
          
          <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔬",
                title: "Биохимический сканер",
                color: "#00F0FF",
                items: [
                  "Мониторинг протеолиза с точностью 0.01%",
                  "3D-карта диффузии соли",
                  "Тепловая карта активности ферментов",
                ],
              },
              {
                icon: "🦠",
                title: "Предиктивная микробиология",
                color: "#00FF9D",
                items: [
                  "Прогноз роста 27 культур плесени",
                  "Моделирование конкуренции штаммов",
                  "Оптимальный баланс для нужного вкуса",
                ],
              },
              {
                icon: "🌡️",
                title: "Климат-инженерия",
                color: "#A855F7",
                items: [
                  "Управление метаболизмом сыра",
                  "Динамический баланс CO₂/O₂",
                  "Индивидуальный микроклимат каждой головки",
                ],
              },
              {
                icon: "📚",
                title: "Самообучающаяся база знаний",
                color: "#F59E0B",
                items: [
                  "Каждая партия → новый кейс",
                  "Система задает вопросы",
                  "Находит скрытые корреляции",
                ],
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${block.color}08 0%, rgba(10, 10, 15, 0.9) 100%)`,
                  border: `1px solid ${block.color}30`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{block.icon}</span>
                  <h4 className="text-white font-bold">{block.title}</h4>
                </div>
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/70 text-sm">
                      <span style={{ color: block.color }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Section 6: Case Study */}
          <SectionDivider number="06" title="Кейс: Спасение легендарной партии" />
          
          <motion.div variants={staggerItem}>
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(0, 255, 157, 0.05) 0%, rgba(10, 10, 15, 0.95) 100%)",
                border: "1px solid rgba(0, 255, 157, 0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🏆</span>
                <div>
                  <h4 className="text-white font-bold">Сыроварня "Белое облако"</h4>
                  <p className="text-[#00FF9D] text-sm">Эксклюзивный сыр для Мишлен</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6">
                За 72 часа до готовности человек заметил "что-то не то".
                Digital Affineur уже <span className="text-[#00FF9D]">6 дней</span> знал:
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#00FF9D]">✓</span>
                  <span className="text-white/80">Это не брак, а редкий штамм <em className="text-[#00FF9D]">P. roqueforti B-12</em></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00FF9D]">✓</span>
                  <span className="text-white/80">Он даст уникальный ореховый оттенок</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00FF9D]">✓</span>
                  <span className="text-white/80">Нужно: влажность +4%, доступ O₂ в 22:00</span>
                </div>
              </div>
              
              <div
                className="p-4 rounded-lg text-center"
                style={{
                  background: "rgba(0, 255, 157, 0.1)",
                  border: "1px solid rgba(0, 255, 157, 0.3)",
                }}
              >
                <div className="text-4xl font-bold text-[#00FF9D] mb-1">98/100</div>
                <div className="text-white/60 text-sm">Профиль "Мишлен-идеал" добавлен в базу знаний</div>
              </div>
            </div>
          </motion.div>

          {/* Section 7: Epilogue */}
          <SectionDivider number="07" title="Что такое Digital Affineur на самом деле" />
          
          <motion.div variants={staggerItem}>
            <p className="text-lg text-white/80 mb-8">Это не система. Это:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { emoji: "👴", text: "Цифровой наследник", sub: "мастеров, уходящих на пенсию" },
                { emoji: "🔭", text: "Бессменный дежурный", sub: "который не спит 24/7" },
                { emoji: "🧪", text: "Ученый-сыровар", sub: "эксперименты в реальном времени" },
                { emoji: "🛡️", text: "Страховой полис", sub: "от брака на миллионы рублей" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <div className="text-white font-medium">{item.text}</div>
                    <div className="text-white/50 text-sm">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <NeonQuote author="Digital Affineur Philosophy">
              Он не заменит человека. Он сделает его Богом сыроварения.
            </NeonQuote>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={staggerItem}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              style={{
                background: "linear-gradient(135deg, #00F0FF 0%, #00D4E0 100%)",
                color: "#000",
                boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
              }}
            >
              <span>Хочу такого коллегу на свою сыроварню</span>
              <span>→</span>
            </motion.a>
            <p className="mt-4 text-white/40 text-sm">
              Бесплатная консультация • 15 минут • Без обязательств
            </p>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}

