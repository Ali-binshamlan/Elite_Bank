"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUpRight, ChevronRight, ShieldCheck } from "lucide-react";

// استيراد الصور (تأكد من صحة المسارات لديك)
import img1 from "@/public/images/BankingCategories_1.png";
import img2 from "@/public/images/BankingCategories_2.png";
import img3 from "@/public/images/BankingCategories_3.png";
import img4 from "@/public/images/BankingCategories_4.png";

export default function BankingCategories() {
  const { language, dir } = useLanguage();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const uiText = {
    sectionTitle:
      language === "AR"
        ? "خدمات مصرفية تناسب طموحك"
        : "Banking Services for Your Ambition",
    sectionSubtitle:
      language === "AR"
        ? "تنوع فريد في الفئات المصرفية لتلبية كافة احتياجاتك المالية بأسلوب راقٍ."
        : "Unique diversity in banking categories to meet all your financial needs with style.",
    learnMore: language === "AR" ? "اكتشف المزيد" : "Discover More",
  };

  const categories = [
    {
      id: 1,
      title: language === "AR" ? "المصرفية الكلاسيكية" : "Classic Banking",
      description:
        language === "AR"
          ? "الحل الأمثل لاحتياجاتك اليومية"
          : "The perfect solution for daily needs",
      image: img1,
    },
    {
      id: 2,
      title: language === "AR" ? "عالم التميز" : "Al-Tamayuz World",
      description:
        language === "AR"
          ? "رفاهية وخدمات حصرية لك"
          : "Luxury and exclusive services for you",
      image: img2,
    },
    {
      id: 3,
      title: language === "AR" ? "التميز الماسي" : "Diamond Al-Tamayuz",
      description:
        language === "AR"
          ? "آفاق جديدة من الاستثمار"
          : "New horizons of investment",
      image: img3,
    },
    {
      id: 4,
      title: language === "AR" ? "المصرفية الخاصة" : "Private Banking",
      description:
        language === "AR"
          ? "نخبة الخدمات لأعلى المستويات"
          : "Elite services for the highest levels",
      image: img4,
    },
  ];

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden bg-slate-50"
      dir={dir}
    >
      {/* ========================================= */}
      {/* خلفية زخرفية SVG (Brand Identity Pattern) */}
      {/* ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* شبكة نقاط خفيفة */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dot-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#002147" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>

        {/* دوائر كبيرة في الزوايا */}
        <svg
          className="absolute -top-20 -right-20 w-96 h-96 text-[#002147] opacity-[0.04]"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.2C83.9,-26.8,88.5,-11.7,85.8,2.3C83.1,16.3,73.1,29.2,63.1,40.8C53.1,52.4,43.1,62.7,31.4,69.6C19.7,76.5,6.3,80,-6.3,78.8C-18.9,77.6,-31.6,71.7,-43.3,64.2C-55,56.7,-65.7,47.6,-73.4,36.2C-81.1,24.8,-85.8,11.1,-84.6,-2.1C-83.4,-15.3,-76.3,-28,-67.2,-39.1C-58.1,-50.2,-47,-59.7,-35.1,-67.2C-23.2,-74.7,-10.5,-80.2,2.9,-85.2L16.3,-90.2"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ========================================= */}
        {/* رأس القسم */}
        {/* ========================================= */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#002147] mb-6 leading-tight">
            {uiText.sectionTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {uiText.sectionSubtitle}
          </p>
        </div>

        {/* ========================================= */}
        {/* حاوية البطاقات المتفاعلة */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px] transition-all duration-500">
          {categories.map((item, index) => {
            const isHovered = hoveredId === item.id;
            // إذا لم يتم تحديد أي عنصر، نعتبر العنصر الأول هو الافتراضي الموسع (اختياري)
            // أو نجعل الكل متساوياً. هنا سنجعل الكل متساوياً في البداية.
            const flexValue = isHovered ? "lg:flex-[3.5]" : "lg:flex-[1]";

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(isHovered ? null : item.id)}
                className={`
                  relative group overflow-hidden rounded-3xl cursor-pointer
                  transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${flexValue} h-[350px] lg:h-auto
                  shadow-xl hover:shadow-2xl hover:shadow-[#002147]/20
                `}
              >
                {/* الصورة الخلفية */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`
                      object-cover transition-transform duration-1000
                      ${isHovered ? "scale-110" : "scale-100 grayscale-[0.3]"}
                    `}
                  />
                  {/* طبقة التراكب اللوني المتدرجة */}
                  <div
                    className={`
                    absolute inset-0 transition-opacity duration-700
                    bg-gradient-to-t from-[#002147] via-[#002147]/60 to-transparent
                    ${isHovered ? "opacity-90" : "opacity-80"}
                  `}
                  />
                </div>

                {/* المحتوى الداخلي */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">
                  {/* الرقم التسلسلي والعنوان */}
                  <div
                    className={`transition-all duration-500 transform ${isHovered ? "translate-y-0" : "translate-y-4"}`}
                  >
                    <span className="block text-5xl font-bold text-white/10 mb-2 font-serif">
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-2xl md:text-3xl font-bold text-white mb-2 ${isHovered ? "" : "line-clamp-2"}`}
                    >
                      {item.title}
                    </h3>

                    {/* الوصف يظهر فقط عند التحويم أو في وضع الجوال */}
                    <div
                      className={`
                      overflow-hidden transition-all duration-700 ease-out
                      ${isHovered ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 lg:max-h-0"}
                    `}
                    >
                      <p className="text-white/80 text-lg leading-relaxed border-s-2 border-white/30 ps-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* منطقة الزر السفلي */}
                  <div className="flex items-end justify-between">
                    {/* أيقونة السهم الدائري */}
                    <div
                      className={`
                      w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm
                      transition-all duration-500
                      ${isHovered ? "bg-white text-[#002147] rotate-45" : "bg-transparent text-white rotate-0"}
                    `}
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </div>

                    {/* زر "المزيد" يظهر بانزلاق */}
                    <button
                      className={`
                      px-6 py-2.5 bg-white text-[#002147] font-bold rounded-lg shadow-lg
                      flex items-center gap-2 transition-all duration-500 transform origin-right
                      ${
                        isHovered
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 translate-x-10 scale-90 pointer-events-none"
                      }
                    `}
                    >
                      <span>{uiText.learnMore}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
