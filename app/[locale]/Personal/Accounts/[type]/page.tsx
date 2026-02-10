import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AccountDetailsView from "@/app/[locale]/Personal/Accounts/AccountDetailsView"; // استيراد المكون الجديد

// لتوليد الصفحات بشكل ثابت (Static Generation)
export function generateStaticParams() {
  return ["current", "savings", "elite", "minors"].map((type) => ({ type }));
}

export default async function AccountPage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale, type } = await params;

  // تفعيل اللغة في السيرفر
  setRequestLocale(locale);

  // التحقق من صحة الرابط
  const validTypes = ["current", "savings", "elite", "minors"];
  const accountType = type.toLowerCase();

  if (!validTypes.includes(accountType)) {
    notFound();
  }

  // استدعاء مكون العرض وتمرير البيانات له
  return <AccountDetailsView locale={locale} type={accountType} />;
  
}
