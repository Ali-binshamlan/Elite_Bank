import BenefitsCard from "@/app/components/BenefitsCard";
import CardsHero from "@/app/components/Cards/CardsHero";
import FAQSection from "@/app/components/FAQSection";
import PaymentFeatures from "@/app/components/PaymentFeatures";
import TasheelPrograms from "@/app/components/TasheelPrograms";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CardsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-gray-50">
      <CardsHero locale={locale} />
      <BenefitsCard locale={locale} />
          <PaymentFeatures />
          <TasheelPrograms />
          <FAQSection/>
    </main>
  );
}
