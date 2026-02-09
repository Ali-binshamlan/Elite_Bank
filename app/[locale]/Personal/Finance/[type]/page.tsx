import { notFound } from "next/navigation";
import FinanceDetailsView from "./FinanceDetailsView";
import FAQSection from "@/app/components/FAQSection";
// استيراد الأنواع والبيانات للتحقق من صحة الرابط
import { financeConfig } from "@/app/data/financeData";

interface FinanceTypePageProps {
  params: Promise<{
    type: string;
    locale: string;
  }>;
}

// هذه الدالة تخبر Next.js بالصفحات التي يجب بناؤها مسبقاً (SEO & Performance)
export function generateStaticParams() {
  const types = Object.keys(financeConfig);
  return types.map((type) => ({ type }));
}

export default async function FinanceTypePage({
  params,
}: FinanceTypePageProps) {
  // انتظار الباراميترات (مهم جداً في Next.js 15)
  const { type, locale } = await params;

  // 1. التحقق: هل النوع الموجود في الرابط (مثلاً /auto) موجود في بياناتنا؟
  const validTypes = Object.keys(financeConfig);

  if (!validTypes.includes(type)) {
    // إذا كتب المستخدم رابطاً خاطئاً، نرسله لصفحة 404
    notFound();
  }

  // الآن نحن متأكدون أن النوع صحيح، نقوم بتحويله للنوع المناسب
  const financeType = type as keyof typeof financeConfig;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. عرض تفاصيل التمويل (الهيرو + المميزات + الشروط) */}
      <FinanceDetailsView type={financeType} locale={locale} />

      {/* 2. قسم تحميل التطبيق (مشترك) */}

      {/* 3. الأسئلة الشائعة (مشترك) */}
      <FAQSection />
    </main>
  );
}
