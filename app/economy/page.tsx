import Header from "../components/Header";
import Footer from "../components/Footer";
import RoiCalculator from "../components/RoiCalculator";

export const metadata = {
  title: "Экономика - Рассчитайте вашу экономию | AI.Ripening",
  description: "Узнайте, сколько вы можете сэкономить с ИИ-системой для созревания сыра. ROI 300% в год, окупаемость за 3-6 месяцев.",
};

export default function EconomyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* ROI Calculator Section */}
        <RoiCalculator />
      </main>

      <Footer />
    </div>
  );
}
