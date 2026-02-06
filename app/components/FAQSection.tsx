"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const t = useTranslations("FAQSection");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const questions = [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q10",
  ];

  const [openIndex, setOpenIndex] = useState<string | null>(null); // جعلتها null في البداية ليكون الشكل مرتباً

  const toggleQuestion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 md:px-8">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#002147]/5 rounded-full text-[#002147] font-bold text-sm mb-4">
            <HelpCircle size={18} />
            <span>{t("title")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#002147] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* شبكة الأسئلة (Grid Layout) */}
        {/* التغيير الرئيسي هنا: استخدام grid و gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {questions.map((id) => (
            <div
              key={id}
              className={`
                group rounded-2xl border transition-all duration-300 h-fit
                ${
                  openIndex === id
                    ? "border-[#002147] bg-[#EFF4FA] shadow-md"
                    : "border-gray-200 bg-white hover:border-[#002147]/30 hover:shadow-sm"
                }
              `}
            >
              <button
                onClick={() => toggleQuestion(id)}
                className="w-full flex items-start justify-between p-6 text-start focus:outline-none gap-4"
              >
                <span
                  className={`font-bold text-lg leading-snug ${
                    openIndex === id
                      ? "text-[#002147]"
                      : "text-gray-700 group-hover:text-[#002147]"
                  }`}
                >
                  {t(`items.${id}.question`)}
                </span>

                {/* الأيقونة */}
                <span
                  className={`
                    flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 shrink-0 mt-0.5
                    ${openIndex === id ? "bg-[#002147] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-[#002147]/10 group-hover:text-[#002147]"}
                  `}
                >
                  {openIndex === id ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-[#002147]/10 mt-2 pt-4">
                      {t(`items.${id}.answer`)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
