const steps = [
  {
    icon: "📡",
    title: "Датчики",
    features: [
      "Температура, влажность, вес, pH, газы",
      "32 параметра контроля",
      "Данные каждые 5 минут",
    ],
    color: "bg-blue-500",
  },
  {
    icon: "🧠",
    title: "ИИ-аналитика",
    features: [
      "Прогноз аномалий",
      "Computer Vision анализ",
      "База 1000+ циклов",
    ],
    color: "bg-accent",
  },
  {
    icon: "⚙️",
    title: "Управление",
    features: [
      "Автоматическая корректировка",
      "Исполнительные устройства",
      "Уведомления технологу",
    ],
    color: "bg-green-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Технология
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Как это работает: от датчиков до результата
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Полный цикл контроля созревания сыра с применением искусственного интеллекта
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
              )}

              {/* Card */}
              <div className="bg-background rounded-2xl p-8 border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-3 mb-6 flex-1">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">✓</span>
                      <span className="text-foreground/70 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="text-primary font-medium text-sm hover:text-accent transition-colors flex items-center gap-2 group/btn">
                  Подробнее
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-6">
            Хотите узнать, как система адаптируется под ваше производство?
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-accent/30">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
}


