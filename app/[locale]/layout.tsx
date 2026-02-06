import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "../components/header/Navbar";
import Footer from "../components/Footer";

// 1. تعريف الخطوط (يجب أن يكون خارج المكون)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. تصدير Metadata (يجب أن يكون خارج المكون)
export const metadata: Metadata = {
  title: "بنك النخبة",
  description: "وصف مختصر للموقع يظهر في محركات البحث",
  icons: {
    icon: "/LogoTap.png",
    apple: "/LogoTap.png",
  },
};

// 3. دالة لتوليد المسارات الثابتة (مهمة للأداء)
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // التحقق من صحة اللغة
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // تفعيل التوليد الثابت للغة
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        // 4. تطبيق كلاسات الخطوط هنا
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <NextIntlClientProvider messages={messages}>
                  <Navbar/>
                  {children}
                  <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
