"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing"; // تأكد من مسار استيراد Link الخاص بـ next-intl

// استيراد الصور
import img1 from "@/public/images/BankingCategories_1.png";
import img2 from "@/public/images/BankingCategories_2.png";
import img3 from "@/public/images/BankingCategories_3.png";
import img4 from "@/public/images/BankingCategories_4.png";

export default function BankingCategories() {
  const t = useTranslations("BankingCategories");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const [activeId, setActiveId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 1. تحديث البيانات لربط كل حساب بالمسار الصحيح (Href)
  const categories = [
    { id: 1, key: "current", image: img1, href: "/Personal/Accounts/current" },
    { id: 2, key: "savings", image: img2, href: "/Personal/Accounts/savings" },
    { id: 3, key: "elite", image: img3, href: "/Personal/Accounts/elite" },
    { id: 4, key: "minors", image: img4, href: "/Personal/Accounts/minors" },
  ];

  const handleInteraction = (id: number, type: "hover" | "click" | "leave") => {
    if (isMobile) {
      if (type === "click") {
        setActiveId(activeId === id ? null : id);
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
      <div className="container mx-auto px-4 relative z-10">
        {/* رأس القسم */}

        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#002147] mb-4 md:mb-6 leading-tight">
            {t("title")}
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 h-auto lg:h-[600px] transition-all duration-500">
          {categories.map((item, index) => {
            const isActive = activeId === item.id;
            const mobileHeightClass = isActive ? "h-[350px]" : "h-[100px]";
            const desktopFlexClass = isActive ? "lg:flex-[3.5]" : "lg:flex-[1]";

            return (
              <div
                key={item.id}
                onMouseEnter={() =>
                  !isMobile && handleInteraction(item.id, "hover")
                }
                onMouseLeave={() =>
                  !isMobile && handleInteraction(item.id, "leave")
                }
                onClick={() => handleInteraction(item.id, "click")}
                className={`
                  relative group overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer
                  transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  w-full ${desktopFlexClass} ${isMobile ? mobileHeightClass : "h-auto"}
                  shadow-md hover:shadow-xl
                `}
              >
                {/* الصورة الخلفية */}
                <div className="absolute inset-0 w-full h-full bg-[#d2e2f5]">
                  <Image
                    src={item.image}
                    alt={t(`items.${item.key}.title`)}
                    fill
                    className={`
                      object-cover transition-transform duration-1000
                      ${isActive ? "scale-110 opacity-100" : "scale-100 opacity-60 lg:opacity-100 lg:grayscale-[0.3]"}
                    `}
                    priority={index === 0}
                  />
                  <div
                    className={`
                    absolute inset-0 transition-opacity duration-700
                    bg-gradient-to-t from-[#002147] via-[#0c2f57]/70 to-transparent
                    ${isActive ? "opacity-95 lg:opacity-90" : "opacity-80"}
                  `}
                  />
                </div>

                {/* المحتوى الداخلي */}
                <div className="absolute inset-0 p-5 lg:p-8 flex flex-col justify-between z-20">
                  <div
                    className={`transition-all duration-500 transform ${isActive ? "translate-y-0" : "translate-y-2 lg:translate-y-4"}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="block text-3xl lg:text-5xl font-bold text-white/20 mb-1 lg:mb-2 font-serif">
                        0{index + 1}
                      </span>
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
                      {t(`items.${item.key}.title`)}
                    </h3>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? "max-h-40 opacity-100 mt-2 lg:mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-white/80 text-sm lg:text-lg leading-relaxed border-s-2 border-white/30 ps-3 lg:ps-4">
                        {t(`items.${item.key}.desc`)}
                      </p>
                    </div>
                  </div>

                  {/* الأزرار وروابط التنقل */}
                  <div
                    className={`flex items-end justify-between transition-opacity duration-300 ${isActive || !isMobile ? "opacity-100" : "opacity-0"}`}
                  >
                    <Link
                      href={item.href}
                      className={`
                        w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm
                        transition-all duration-500 hover:bg-white hover:text-[#002147]
                        ${isActive ? "bg-white text-[#002147] rotate-0" : "bg-transparent text-white -rotate-45"}
                      `}
                    >
                      <ArrowUpRight className="w-5 h-5 lg:w-7 lg:h-7" />
                    </Link>

                    <Link
                      href={item.href}
                      className={`
                        px-4 py-2 lg:px-7 lg:py-3 bg-white text-[#002147] font-bold rounded-xl shadow-lg text-sm lg:text-base
                        flex items-center gap-2 transition-all duration-500 transform origin-right
                        hover:bg-slate-100 active:scale-95
                        ${isActive ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-90 pointer-events-none"}
                      `}
                    >
                      <span>{t("learnMore")}</span>
                      <ChevronRight
                        className={`w-3 h-3 lg:w-4 lg:h-4 ${dir === "rtl" ? "rotate-180" : ""}`}
                      />
                    </Link>
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
