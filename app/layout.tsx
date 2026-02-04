import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ========================================================
// هنا يتم تعديل العنوان والشعار
// ========================================================
export const metadata: Metadata = {
  title: "بنك النخبة", // هذا هو النص الذي يظهر في التبويب
  description: "وصف مختصر للموقع يظهر في محركات البحث",
  icons: {
    icon: "/LogoTap.png", // تأكد أن الصورة موجودة في مجلد public
    apple: "/LogoTap.png", // اختياري: أيقونة لأجهزة آبل
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
