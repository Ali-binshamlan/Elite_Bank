import InsuranceHero from "@/app/components/InsuranceHero";
import InsuranceOptions from "@/app/components/InsuranceOptions";
import AppDownloadSection from "@/app/components/AppDownloadSection";
import FAQSection from "@/app/components/FAQSection";

export default async function InsurancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. قسم الواجهة الرئيسي مع الكروت الزجاجية */}
      <InsuranceHero />

      {/* 2. شبكة خدمات التأمين بتأثير التراكم (Stacked Cards) */}
      <InsuranceOptions locale={locale} />

      {/* 3. قسم تحميل التطبيق (للحفاظ على هوية البنك الرقمي) */}
      <AppDownloadSection locale={locale} />

      {/* 4. الأسئلة الشائعة حول التأمين */}
      <FAQSection />
    </main>
  );
}
