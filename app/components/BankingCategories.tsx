"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUpRight, ChevronRight } from "lucide-react";

// استيراد الصور
import img1 from "@/public/images/BankingCategories_1.png";
import img2 from "@/public/images/BankingCategories_2.png";
import img3 from "@/public/images/BankingCategories_3.png";
import img4 from "@/public/images/BankingCategories_4.png";

export default function BankingCategories() {
  const { language, dir } = useLanguage();
  // نستخدم حالة واحدة للتحكم في العنصر النشط سواء باللمس أو التحويم
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // اكتشاف حجم الشاشة لضبط السلوك
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const uiText = {
    sectionTitle:
      language === "AR"
        ? "خدمات مصرفية تناسب طموحك"
        : "Banking Services for Your Ambition",
    sectionSubtitle:
      language === "AR"
        ? "تنوع فريد في الفئات المصرفية لتلبية كافة احتياجاتك المالية."
        : "Unique diversity in banking categories to meet all your needs.",
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

  // دالة التعامل مع التفاعل
  const handleInteraction = (id: number, type: "hover" | "click" | "leave") => {
    if (isMobile) {
      if (type === "click") {
        setActiveId(activeId === id ? null : id); // تبديل (Toggle) في الجوال
      }
    } else {
      if (type === "hover") {
        setActiveId(id);
      } else if (type === "leave") {
        setActiveId(null);
      }
    }
  };

  return (
    <section
      className="relative py-16 md:py-32 overflow-hidden bg-slate-50"
      dir={dir}
    >
      {/* ========================================= */}
      {/* خلفية مخففة: تظهر فقط في الشاشات الكبيرة */}
      {/* ========================================= */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
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
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#002147] mb-4 md:mb-6 leading-tight">
            {uiText.sectionTitle}
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {uiText.sectionSubtitle}
          </p>
        </div>

        {/* ========================================= */}
        {/* الحاوية: فليكس في الديسكتوب، عمودية في الجوال */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 h-auto lg:h-[600px] transition-all duration-500">
          {categories.map((item, index) => {
            const isActive = activeId === item.id;

            // تحديد الستايل بناءً على الجهاز
            // في الجوال: الارتفاع يتغير. في الديسكتوب: العرض (flex) يتغير
            const mobileHeightClass = isActive ? "h-[350px]" : "h-[100px]"; // أكورديون في الجوال
            const desktopFlexClass = isActive ? "lg:flex-[3.5]" : "lg:flex-[1]";

            return (
              <div
                key={item.id}
                // أحداث الديسكتوب
                onMouseEnter={() =>
                  !isMobile && handleInteraction(item.id, "hover")
                }
                onMouseLeave={() =>
                  !isMobile && handleInteraction(item.id, "leave")
                }
                // أحداث الجوال
                onClick={() => handleInteraction(item.id, "click")}
                className={`
                  relative group overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer
                  transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  w-full ${desktopFlexClass} ${isMobile ? mobileHeightClass : "h-auto"}
                  shadow-md hover:shadow-xl
                `}
              >
                {/* الصورة الخلفية - مُحسنة */}
                <div className="absolute inset-0 w-full h-full bg-[#d2e2f5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    // هذه الخاصية مهمة جداً للأداء في الجوال
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`
                      object-cover transition-transform duration-1000
                      ${isActive ? "scale-110 opacity-100" : "scale-100 opacity-60 lg:opacity-100 lg:grayscale-[0.3]"}
                    `}
                    priority={index === 0} // تحميل الصورة الأولى فوراً
                  />

                  {/* طبقة التراكب */}
                  <div
                    className={`
                    absolute inset-0 transition-opacity duration-700
                    bg-gradient-to-t from-[#002147] via-[#0c2f57]/70 to-transparent
                    ${isActive ? "opacity-95 lg:opacity-90" : "opacity-80"}
                  `}
                  />
                </div>

                {/* المحتوى الداخلي */}
                <div className="absolute inset-0 p-5 md:p-2 flex flex-col justify-between z-20">
                  {/* الجزء العلوي: الرقم والعنوان */}
                  <div
                    className={`transition-all duration-500 transform ${isActive ? "translate-y-0" : "translate-y-2 lg:translate-y-4"}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="block text-3xl lg:text-5xl font-bold text-white/20 mb-1 lg:mb-2 font-serif">
                        0{index + 1}
                      </span>
                      {/* أيقونة الحالة للجوال فقط (سهم صغير) */}
                      <div
                        className={`lg:hidden text-white/50 transition-transform duration-300 ${isActive ? "-rotate-90" : "rotate-90"}`}
                      >
                        <ChevronRight
                          size={20}
                          className={dir === "rtl" ? "rotate-180" : ""}
                        />
                      </div>
                    </div>

                    <h3
                      className={`text-xl lg:text-3xl font-bold text-white mb-2 ${isActive ? "" : "line-clamp-1"}`}
                    >
                      {item.title}
                    </h3>

                    {/* الوصف */}
                    <div
                      className={`
                      overflow-hidden transition-all duration-500 ease-out
                      ${isActive ? "max-h-40 opacity-100 mt-2 lg:mt-4" : "max-h-0 opacity-0"}
                    `}
                    >
                      <p className="text-white/80 text-sm lg:text-lg leading-relaxed border-s-2 border-white/30 ps-3 lg:ps-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* الجزء السفلي: الأزرار */}
                  <div
                    className={`flex items-end justify-between transition-opacity duration-300 ${isActive || !isMobile ? "opacity-100" : "opacity-0"}`}
                  >
                    {/* أيقونة السهم الدائري */}
                    <div
                      className={`
                      w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm
                      transition-all duration-500
                      ${isActive ? "bg-white text-[#002147] rotate-45" : "bg-transparent text-white rotate-0"}
                    `}
                    >
                      <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>

                    {/* زر "المزيد" */}
                    <button
                      className={`
                      px-4 py-2 lg:px-6 lg:py-2.5 bg-white text-[#002147] font-bold rounded-lg shadow-lg text-sm lg:text-base
                      flex items-center gap-2 transition-all duration-500 transform origin-right
                      ${isActive ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-90 pointer-events-none"}
                    `}
                    >
                      <span>{uiText.learnMore}</span>
                      <ChevronRight
                        className={`w-3 h-3 lg:w-4 lg:h-4 ${dir === "rtl" ? "rotate-180" : ""}`}
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
