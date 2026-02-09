"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FileText,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  Globe,
  Lock,
  Crown,
  Phone,
  MapPin,
  Laptop,
  TrendingUp,
  CreditCard,
  Users,
} from "lucide-react";
import AppDownloadSection from "@/app/components/AppDownloadSection";

interface AccountDetailsProps {
  locale: string;
  type: string;
}

export default function AccountDetailsView({
  locale,
  type,
}: AccountDetailsProps) {
  const t = useTranslations("AccountDetails");
  const tCommon = useTranslations("Common");
  const isRTL = locale === "ar";

  // إعدادات الصور والألوان لكل حساب
  const accountConfig: any = {
    current: {
      color: "bg-[#002147]",
      text: "text-[#002147]",
      border: "border-[#002147]",
      img: "/images/hero_2.png",
    },
    savings: {
      color: "bg-[#F5A623]",
      text: "text-[#F5A623]",
      border: "border-[#F5A623]",
      img: "/images/saudi_man_phone.png",
    },
    elite: {
      color: "bg-[#111111]",
      text: "text-[#111111]",
      border: "border-[#111111]",
      img: "/images/Hero_1.png",
    },
    minors: {
      color: "bg-[#00C49F]",
      text: "text-[#00C49F]",
      border: "border-[#00C49F]",
      img: "/images/saudi_kid.png",
    },
  };

  const currentConfig = accountConfig[type] || accountConfig.current;

  // تحضير بيانات المميزات
  const benefitsData = [0, 1, 2, 3].map((idx) => ({
    id: `benefit-${idx}`,
    icon: idx === 0 ? Star : idx === 1 ? ShieldCheck : idx === 2 ? Zap : Lock,
    title: t(`${type}.features.${idx}` as any),
  }));

  // بيانات بطاقات التواصل الثلاثة


  return (
    <main className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* ========================================= */}
      {/* 1. Hero Section */}
      {/* ========================================= */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 w-full h-full">
          <svg
            className={`w-full h-full ${isRTL ? "" : "scale-x-[-1]"}`}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 0 H55 L45 100 H0 Z" fill="#F1F5F9" />
            <path
              d="M55 0 L45 100"
              stroke="#002147"
              strokeOpacity="0.1"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full">
          <div className="flex flex-col lg:flex-row items-center h-full gap-12">
            <div className="w-full lg:w-1/2 pt-20 lg:pt-0 space-y-8">
              <h1 className="text-5xl md:text-7xl font-black text-[#002147] leading-[1.1]">
                {t(`${type}.title`)}
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                {t(`${type}.desc`)}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#002147] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:bg-[#003366] active:scale-95 flex items-center gap-3">
                  {tCommon("applyNow")}
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative flex items-center justify-center">
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-white/60 rounded-full blur-3xl -z-10`}
              />
              <Image
                src={currentConfig.img}
                alt={t(`${type}.title`)}
                fill
                className="object-contain object-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. المميزات (Benefits) */}
      {/* ========================================= */}
      <section className="relative w-full py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#002147"
              fillOpacity="0.05"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-6xl font-black text-[#002147] leading-tight mb-6">
                  {tCommon("featuresTitle")}
                </h2>
                <div className={`w-24 h-2 rounded-full bg-[#002147]`}></div>
                <div className="mt-10 opacity-10">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      stroke="#002147"
                      strokeWidth="20"
                      strokeDasharray="40 20"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {benefitsData.map((item, index) => (
                  <div key={item.id} className="stack-container group">
                    <div className={`card bg-[#002147]`}>
                      <div
                        className={`image-area flex flex-col items-start justify-between p-6 h-full bg-white/90 backdrop-blur-sm ${currentConfig.border}`}
                      >
                        <div
                          className={`w-14 h-14 ${currentConfig.color}/10 rounded-full flex items-center justify-center  mb-4 group-hover:bg-[#002147] group-hover:text-white transition-colors duration-300`}
                        >
                          <item.icon size={28} />
                        </div>
                        <div>
                          <p className="text-xs font-bold opacity-50 uppercase tracking-widest mb-2">
                            {isRTL
                              ? `ميزة ${index + 1}`
                              : `Feature ${index + 1}`}
                          </p>
                          <h3
                            className={`text-xl font-bold text-[#002147] leading-snug decoration-2 underline-offset-4`}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. المتطلبات (تم إصلاح الأيقونات) */}
      {/* ========================================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className={`absolute top-20 ${isRTL ? "left-0" : "right-0"} w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50`}
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* 1. العنوان والوصف الجانبي */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-5xl font-black text-[#002147] mb-4 leading-tight">
                  {tCommon("requirements")}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {isRTL
                    ? "لضمان تجربة سلسة وسريعة، يرجى التأكد من توفر المستندات والشروط التالية قبل البدء في عملية فتح الحساب."
                    : "To ensure a smooth experience, please ensure the following documents and conditions are met before opening an account."}
                </p>

                <div className="hidden lg:block p-6 bg-[#F8FAFC] rounded-2xl border border-dashed border-gray-200">
                  <p className="text-sm text-gray-500 font-medium flex gap-2">
                    <span className="text-blue-500">ℹ️</span>
                    {isRTL
                      ? "يمكنك استكمال الإجراءات عبر تطبيق النخبة أو زيارة الفرع في حال واجهت أي صعوبة."
                      : "You can complete the procedures via the Elite App or visit a branch if you face any difficulty."}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. شبكة بطاقات المتطلبات */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { Icon: ShieldCheck, key: 0 }, // ✅ تم تغيير icon إلى Icon (حرف كبير)
                  { Icon: MapPin, key: 1 },
                  { Icon: Users, key: 2 },
                  { Icon: Phone, key: 3 },
                ].map((req, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden bg-gray-100 p-8 rounded-[2rem] border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500`}
                  >
                    {/* SVG Background */}
                    <div className="absolute right-0 top-0 w-32 h-32 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none">
                        <path d="M0 0H100V100H0z" fill="none" />
                        <circle
                          cx="90"
                          cy="10"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={currentConfig.text}
                        />
                        <circle
                          cx="90"
                          cy="10"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={currentConfig.text}
                        />
                        <circle
                          cx="90"
                          cy="10"
                          r="60"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          className={currentConfig.text}
                        />
                      </svg>
                    </div>

                    {/* أيقونة المتطلب */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-[#002147] bg-opacity-5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {/* ✅ استدعاء الأيقونة كـ Component */}
                      <req.Icon size={28} className="text-white" />
                    </div>

                    {/* النصوص */}
                    <h3 className="text-xl font-bold text-[#002147] mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {t(`RequirementsList.${index}.title` as any)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {t(`RequirementsList.${index}.desc` as any)}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-${currentConfig.color.replace("bg-", "")} to-transparent w-0 group-hover:w-full transition-all duration-700 opacity-50`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. قسم التطبيق والتواصل */}
      {/* ========================================= */}
      <AppDownloadSection locale="{locale}"/>
    </main>
  );
}
