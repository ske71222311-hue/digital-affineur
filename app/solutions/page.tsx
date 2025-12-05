import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Решения - AI.Ripening",
  description: "Решения для сыроварен любого масштаба: от малых производств до крупных заводов.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Решения
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Решения для <span className="text-accent">вашего бизнеса</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Индивидуальный подход для сыроварен любого масштаба
            </p>
          </div>
        </section>

        {/* Content Placeholder */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
              <div className="text-6xl mb-6">💼</div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Страница в разработке
              </h2>
              <p className="text-foreground/60">
                Здесь будут описаны решения для разных типов производств
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


