"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FinanceVisuals from "@/app/components/FinanceVisuals";

export default function FinanceHero() {
  const t = useTranslations("FinanceHero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full min-h-[600px] lg:h-[85vh] flex items-center overflow-hidden bg-white">
      {/* الخلفية المقصوصة */}
      <div
        className={`
          absolute top-0 bottom-0 w-[60%] h-full bg-[#EFF4FA] z-0
          ${isRTL ? "left-0" : "right-0"}
        `}
        style={{
          clipPath: isRTL
            ? "polygon(0 0, 100% 0, 75% 100%, 0% 100%)"
            : "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-12 lg:gap-0">
          {/* 1. المحتوى النصي */}
          <div className="w-full lg:w-1/2 text-center lg:text-start pt-10 lg:pt-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-xl mx-auto lg:mx-0"
            >
              {/* التعديل 1: حجم خط العنوان */}
              <h1
                className={`font-black text-[#002147] mb-6 leading-tight ${
                  isRTL ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"
                }`}
              >
                {t("title")}
              </h1>

              {/* التعديل 2: حجم خط الوصف */}
              <p
                className={`text-gray-600 mb-8 leading-relaxed font-medium ${
                  isRTL ? "text-lg md:text-xl" : "text-base md:text-lg"
                }`}
              >
                {t("desc")}
              </p>

              {/* التعديل 3: حجم خط الزر */}
              <button
                className={`group flex items-center gap-3 text-[#002147] font-bold hover:gap-5 transition-all duration-300 mx-auto lg:mx-0 ${
                  isRTL ? "text-lg md:text-xl" : "text-base md:text-lg"
                }`}
              >
                <span>{t("cta")}</span>
                <span className="bg-[#002147] text-white p-2 rounded-full transition-transform group-hover:scale-110">
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </span>
              </button>
            </motion.div>
          </div>

          {/* 2. المحتوى البصري */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[400px] lg:h-full">
            <div className="mt-10 lg:mt-0 scale-90 lg:scale-110">
              <FinanceVisuals />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
