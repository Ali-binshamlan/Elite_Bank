"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Percent,
  FileCheck,
} from "lucide-react";
// استيراد الداتا فقط
import {
  financeConfig,
  featureIcons,
  requirementIcons,
  FinanceType,
} from "@/app/data/financeData";

interface FinanceDetailsViewProps {
  locale: string;
  type: FinanceType;
}

export default function FinanceDetailsView({
  locale,
  type,
}: FinanceDetailsViewProps) {
  const t = useTranslations(`FinanceDetails.${type}`);
  const tCommon = useTranslations("FinanceDetails.Common");
  const tGeneral = useTranslations("Common"); // للأزرار العامة مثل applyNow
  const isRTL = locale === "ar";

  // 1. جلب الثيم والصور من ملف الداتا
  const theme = financeConfig[type] || financeConfig.general;
  const icons = featureIcons[type] || featureIcons.general;

  return (
    <main className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* ========================================= */}
      {/* ========================================= */}
      {/* 1. Hero Section */}
      {/* ========================================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#EFF4FA]">
        {/* الحاوية الرئيسية للمنحنى والصورة معاً */}
        <div
          className={`absolute top-0 bottom-0 w-[55%] z-0 ${
            isRTL
              ? "left-0 rounded-br-[400px] md:rounded-br-[550px]"
              : "right-0 rounded-bl-[400px] md:rounded-bl-[550px]"
          } hidden lg:block overflow-hidden shadow-2xl`}
        >
          {/* الصورة الآن داخل المنحنى مباشرة وتملأه بالكامل */}
          <Image
            src={theme.heroImage}
            alt={t("Hero.title")}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
            sizes="60vw"
          />

          {/* طبقة شفافة اختيارية فوق الصورة لإبراز النص إذا لزم الأمر */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* قسم النصوص - سياخذ نصف المساحة لترك المجال للصورة في الخلفية */}
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-start">
             

              <h1 className="text-4xl md:text-6xl font-black text-[#002147] leading-tight">
                {t("Hero.title")}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t("Hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#002147] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#003366] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                  {tGeneral("applyNow")}
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>
              </div>
            </div>

            {/* نترك الجهة الأخرى فارغة لأن الصورة أصبحت خلفية في الـ div المطلق */}
            <div className="w-full lg:w-1/2 pointer-events-none">
              {/* يمكنك وضع البطاقة العائمة هنا إذا كنت لا تزال تريدها */}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. المميزات (Features Grid) */}
      {/* ========================================= */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#002147] mb-6">
              {tCommon("whyChoose")}
            </h2>
            <p className="text-gray-500 text-lg">{tCommon("whyChooseDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((idx) => {
              const IconComponent = icons[idx] || CheckCircle;
              return (
                <div
                  key={idx}
                  className={`group p-8 rounded-3xl bg-gray-50 hover:bg-[#002147] transition-all duration-300 border ${theme.borderColor}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${theme.bgColor} ${theme.primaryColor} flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors`}
                  >
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#002147] mb-3 group-hover:text-white transition-colors">
                    {t(`Features.${idx}.title` as any)}
                  </h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {t(`Features.${idx}.desc` as any)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. المستندات والشروط (Requirements) */}
      {/* ========================================= */}
      <section className="py-24 bg-[#002147] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="100" cy="0" r="50" stroke="white" strokeWidth="0.5" />
            <circle cx="0" cy="100" r="70" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                {tCommon("requirementsTitle")}
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {tCommon("requirementsDesc")}
              </p>

              <div className="space-y-6">
                {/* استخدام الأيقونات من الداتا والنصوص من الترجمة */}
                {[1, 2, 3, 4].map((item, i) => {
                  const ReqIcon = requirementIcons[i] || FileCheck;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <ReqIcon
                          size={20}
                          className={theme.primaryColor.replace(
                            "text-",
                            "text-white ",
                          )}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">
                          {tCommon(`req${item}.title` as any)}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {tCommon(`req${item}.desc` as any)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* نموذج الطلب المصغر */}
            <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  {tCommon("formTitle")}
                </h3>
                <p className="text-gray-300">{tCommon("formDesc")}</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={tCommon("inputs.name")}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white w-full"
                  />
                  <input
                    type="text"
                    placeholder={tCommon("inputs.phone")}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder={tCommon("inputs.salary")}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white w-full"
                />

                <button
                  className={`w-full ${theme.accentColor} text-white font-bold py-4 rounded-xl hover:bg-white hover:text-[#002147] transition-colors`}
                >
                  {tCommon("inputs.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
