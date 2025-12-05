"use client";

import { useState } from "react";

const volumeOptions = [
  { id: "small", label: "до 50 кг", value: 30 },
  { id: "medium", label: "50-500 кг", value: 250 },
  { id: "large", label: "500+ кг", value: 750 },
];

export default function RoiCalculator() {
  const [volume, setVolume] = useState<string>("medium");
  const [defectRate, setDefectRate] = useState<number>(20);
  const [result, setResult] = useState<{ savings: number; payback: number } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateRoi = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const selectedVolume = volumeOptions.find((v) => v.id === volume)?.value || 250;
      const savings = selectedVolume * defectRate * 1000;
      const payback = Math.ceil(500000 / savings);
      
      setResult({ savings, payback });
      setIsCalculating(false);
    }, 500);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("ru-RU").format(num);
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Калькулятор ROI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Рассчитайте вашу экономию
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Узнайте, сколько вы можете сэкономить с нашей ИИ-системой
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Inputs */}
            <div className="space-y-8">
              {/* Volume Selection */}
              <div>
                <label className="block text-foreground font-semibold mb-4">
                  Ваш объём производства (в день)
                </label>
                <div className="space-y-3">
                  {volumeOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        volume === option.id
                          ? "border-accent bg-accent/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="volume"
                        value={option.id}
                        checked={volume === option.id}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-5 h-5 text-accent focus:ring-accent"
                      />
                      <span className="text-foreground font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Defect Rate Input */}
              <div>
                <label className="block text-foreground font-semibold mb-4">
                  Текущий процент брака: <span className="text-accent">{defectRate}%</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={defectRate}
                  onChange={(e) => setDefectRate(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-accent"
                  aria-label="Процент брака"
                  title="Выберите текущий процент брака"
                />
                <div className="flex justify-between text-sm text-foreground/50 mt-2">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateRoi}
                disabled={isCalculating}
                className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all hover:scale-105 disabled:hover:scale-100 shadow-lg shadow-accent/30"
              >
                {isCalculating ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Расчёт...
                  </span>
                ) : (
                  "Рассчитать"
                )}
              </button>
            </div>

            {/* Right Column - Results */}
            <div className="flex flex-col">
              <div
                className={`flex-1 rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
                  result
                    ? "bg-gradient-to-br from-primary to-primary/80"
                    : "bg-gray-100"
                }`}
              >
                {result ? (
                  <div className="h-full flex flex-col justify-center text-center">
                    <div className="mb-6">
                      <p className="text-white/70 text-sm mb-2">Ваша экономия</p>
                      <p className="text-4xl sm:text-5xl font-bold text-white">
                        {formatNumber(result.savings)}
                        <span className="text-xl ml-2">₽/мес</span>
                      </p>
                    </div>
                    
                    <div className="mb-8">
                      <p className="text-white/70 text-sm mb-2">Окупаемость</p>
                      <p className="text-3xl sm:text-4xl font-bold text-accent">
                        {result.payback}
                        <span className="text-lg ml-2">
                          {result.payback === 1 ? "месяц" : result.payback < 5 ? "месяца" : "месяцев"}
                        </span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/20">
                      <p className="text-white/60 text-sm mb-4">
                        Экономия за год: <span className="text-white font-semibold">{formatNumber(result.savings * 12)} ₽</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl">📊</span>
                    </div>
                    <p className="text-foreground/50">
                      Выберите параметры и нажмите &quot;Рассчитать&quot;
                    </p>
                  </div>
                )}
              </div>

              {/* Detail Button */}
              {result && (
                <button className="mt-4 w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 px-8 rounded-xl font-semibold transition-all">
                  Получить детальный расчёт
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

