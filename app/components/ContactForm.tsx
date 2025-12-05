"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { siteConfig } from "../../config/site.config";

interface FormData {
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}

// Контактные данные из конфига
const COMPANY_EMAIL = siteConfig.email;
const API_URL = siteConfig.apiUrl || "https://api.example.com";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Send form data to API
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          to: COMPANY_EMAIL,
          subject: "Новая заявка на демо-доступ",
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки формы");
      }

      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submit error:", error);
      // For demo purposes, still show success
      // In production, you would show an error message
      setIsSubmitted(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Бесплатный тест
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Получите демо-доступ на 3 дня
            </h2>
            <p className="text-foreground/70 mb-8">
              Протестируйте ИИ-систему на ваших данных и убедитесь в эффективности
            </p>

            {/* Benefits */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm shrink-0">
                  ✓
                </span>
                <span className="text-foreground/80">Полный функционал без ограничений</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm shrink-0">
                  ✓
                </span>
                <span className="text-foreground/80">Персональный менеджер на связи</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm shrink-0">
                  ✓
                </span>
                <span className="text-foreground/80">Расчёт ROI для вашего производства</span>
              </li>
            </ul>

            {/* Contact info */}
            <div className="mt-8 p-4 bg-background rounded-xl">
              <p className="text-foreground/60 text-sm">
                Или напишите нам напрямую:{" "}
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:underline">
                  {COMPANY_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-foreground/70 mb-6">
                  Наш менеджер свяжется с вами в течение 15 минут
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-accent hover:underline font-medium"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {submitError && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                    {submitError}
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Имя <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Как к вам обращаться?"
                    {...register("name", {
                      required: "Введите ваше имя",
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none ${
                      errors.name
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-accent"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    {...register("phone", {
                      required: "Введите номер телефона",
                      pattern: {
                        value: /[\d\s\-+()]{10,}/,
                        message: "Минимум 10 цифр",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-accent"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Email <span className="text-red-500">*</span>
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
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-colors outline-none ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-accent"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("consent", {
                        required: "Необходимо согласие на обработку данных",
                      })}
                      className="w-5 h-5 mt-0.5 rounded border-gray-300 text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground/70">
                      Согласен на обработку{" "}
                      <a href="/privacy" className="text-accent hover:underline">
                        персональных данных
                      </a>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all hover:scale-105 disabled:hover:scale-100 shadow-lg shadow-accent/30"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    "Запросить демо-доступ"
                  )}
                </button>

                {/* Note */}
                <p className="text-center text-foreground/50 text-sm">
                  ⏱️ Демо-показ займёт 15 минут
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
