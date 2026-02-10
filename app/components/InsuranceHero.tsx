"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import InsuranceVisuals from "@/app/components/InsuranceVisuals";

export default function InsuranceHero() {
  const t = useTranslations("InsuranceHero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full min-h-[600px] lg:h-[85vh] flex items-center overflow-hidden bg-white">
      {/* الخلفية المقصوصة بلون مختلف للتأمين (مثلاً تدرج مخضر أو أزرق مختلف) */}
      <div
        className={`
          absolute top-0 bottom-0 w-[60%] h-full bg-[#F0F9FF] z-0
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
          <div className="w-full lg:w-1/2 text-center lg:text-start pt-10 lg:pt-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-xl mx-auto lg:mx-0"
            >
             

              <h1
                className={`font-black text-[#002147] mb-6 leading-tight ${
                  isRTL ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"
                }`}
              >
                {t("title")}
              </h1>

              <p
                className={`text-gray-600 mb-8 leading-relaxed font-medium ${
                  isRTL ? "text-lg md:text-xl" : "text-base md:text-lg"
                }`}
              >
                {t("desc")}
              </p>

              <button className="bg-[#002147] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#003366] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 mx-auto lg:mx-0">
                <span>{t("cta")}</span>
                {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </button>
            </motion.div>
          </div>

          {/* 2. المحتوى البصري للتأمين */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[400px] lg:h-full">
            <div className="mt-10 lg:mt-0 scale-90 lg:scale-110">
              <InsuranceVisuals />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
