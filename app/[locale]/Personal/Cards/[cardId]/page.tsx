import SingleCardHero from "@/app/components/Cards/SingleCardHero";
import PaymentFeatures from "@/app/components/PaymentFeatures";
import BenefitsCard from "@/app/components/BenefitsCard"
import { cardsData } from "@/app/data/cardsData";
import FAQSection from "@/app/components/FAQSection";

// تعريف الخصائص المتوقعة
type Props = {
  params: Promise<{ locale: string; cardId: string }>;
};

// دالة لتوليد المسارات الثابتة (اختياري، يحسن الأداء)
export async function generateStaticParams() {
  return cardsData.map((card) => ({
    cardId: card.id,
  }));
}

export default async function SingleCardPage({ params }: Props) {
  const { locale, cardId } = await params;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* قسم البطاقة الفردية */}
      <SingleCardHero locale={locale} cardId={cardId} />

      <BenefitsCard locale={locale} />

      {/* خصائص الدفع */}
      <PaymentFeatures />

      <FAQSection />
    </main>
  );
}
