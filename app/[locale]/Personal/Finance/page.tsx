import FAQSection from "@/app/components/FAQSection";
import FinanceHero from "./FinanceHero";
import FinanceOptions from "@/app/components/FinanceOptions";
import AppDownloadSection from "@/app/components/AppDownloadSection"; // استدعاء المكون الجديد

export default async function FinancePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <FinanceHero />

      {/* 2. Options Grid Section */}
      <FinanceOptions locale={locale} />
      {/* 4. App Section (تم فصله لحل مشكلة styled-jsx) */}
      <AppDownloadSection locale={locale} />
      {/* 3. FAQ Section */}
      <FAQSection />
    </main>
  );
}
