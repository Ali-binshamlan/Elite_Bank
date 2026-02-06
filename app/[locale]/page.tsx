import { setRequestLocale } from "next-intl/server";
import Hero from "../components/Hero";
import BankingCategories from "../components/BankingCategories";
import UndrCategories from "../components/UndrCategories";
import TasheelPrograms from "../components/TasheelPrograms";
import EliteBankStats from "../components/EliteBankStats";
import AppFeaturesSection from "../components/AppFeaturesSection";

// تعريف نوع الخصائص للتوافق مع Next.js 15/16
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  // 1. انتظار البارامترات (إجباري في Next.js 15+)
  const { locale } = await params;

  // 2. تفعيل التوافق مع التوليد الثابت (Static Rendering)
  // هذه الخطوة مهمة لتحسين الأداء وتجنب مشاكل الـ Dynamic Rendering
  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* تأكد أن هذا المكون هو الذي قمنا بتحديثه سابقاً */}

      <main>
        <Hero />
        <BankingCategories />
        <UndrCategories />
        <TasheelPrograms />
        <AppFeaturesSection />
        <EliteBankStats />
      </main>

    </div>
  );
}
