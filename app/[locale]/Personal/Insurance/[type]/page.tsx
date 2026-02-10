import { notFound } from "next/navigation";
import InsuranceDetailsView from "./InsuranceDetailsView";
import FAQSection from "@/app/components/FAQSection";
import AppDownloadSection from "@/app/components/AppDownloadSection";
import { insuranceConfig } from "@/app/data/insuranceData";

interface InsuranceTypePageProps {
  params: Promise<{
    type: string;
    locale: string;
  }>;
}

// ✅ توليد الروابط الثابتة بناءً على الأنواع الـ 3 فقط
export async function generateStaticParams() {
  const types = Object.keys(insuranceConfig);
  // سينتج: [{ type: 'auto' }, { type: 'home' }, { type: 'retirement' }]
  return types.map((type) => ({ type }));
}

export default async function InsuranceTypePage({
  params,
}: InsuranceTypePageProps) {
  const { type, locale } = await params;

  // ✅ التحقق الصارم: إذا حاول المستخدم دخول رابط غير موجود (مثل travel) سيتم تحويله لصفحة 404
  if (!insuranceConfig[type as keyof typeof insuranceConfig]) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* عرض تفاصيل التأمين بناءً على النوع المختار */}
      <InsuranceDetailsView type={type as any} locale={locale} />

      {/* المكونات الإضافية */}
      <AppDownloadSection locale={locale} />

      {/* يمكنك تمرير النوع للأسئلة الشائعة لعرض أسئلة مخصصة لكل تأمين مستقبلاً */}
      <FAQSection />
    </main>
  );
}
