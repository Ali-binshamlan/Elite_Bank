"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import BankCard3D from "../ui/BankCard3D";
import { cardsData } from "../../data/cardsData";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  DollarSign,
  Banknote,
} from "lucide-react";

interface CardsHeroProps {
  locale: string;
}

export default function CardsHero({ locale }: CardsHeroProps) {
  const t = useTranslations("CardsHero");
  const isRTL = locale === "ar";

  // الحالة النشطة
  const [activeTab, setActiveTab] = useState("prepaid");

  // جلب بيانات البطاقة المختارة
  const currentCard = cardsData.find((c) => c.id === activeTab) || cardsData[0];

  const featureIcons = [
    <Globe key="1" size={24} />,
    <DollarSign key="2" size={24} />,
    <Banknote key="3" size={24} />,
  ];

  return (
    <section
      className="relative w-full min-h-[100vh] md:mt-0 mt-10 flex items-center overflow-hidden bg-white transition-colors duration-700"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* 1. الخلفية المنحنية المتغيرة */}
      <div
        className={`absolute top-0 bottom-0 w-[60%] z-0 transition-colors duration-700 ease-in-out
        ${currentCard.backdropColor} 
        ${isRTL ? "right-0 rounded-bl-[500px]" : "left-0 rounded-br-[500px]"} 
        hidden lg:block`}
      >
      </div>

      {/* خلفية للجوال */}
      <div
        className={`absolute top-0 left-0 w-full h-[45%] z-0 lg:hidden rounded-b-[50px] transition-colors duration-700 ${currentCard.backdropColor}`}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* ======================================================= */}
          {/* 1. الجانب الأيمن (البطاقة + الأزرار) */}
          {/* ======================================================= */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start order-1 relative z-20">
            {/* --- أزرار التبديل (Tabs) تم نقلها هنا --- */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {cardsData.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setActiveTab(card.id)}
                  className={`
                    relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2
                    ${
                      activeTab === card.id
                        ? `bg-white ${currentCard.featuresIconColor} border-white shadow-lg transform scale-105`
                        : "bg-white/10 text-white/70 border-white/20 hover:bg-white/20 hover:text-white"
                    }
                  `}
                >
                  {t(`tabs.${card.id}`)}
                </button>
              ))}
            </div>

            {/* --- البطاقة --- */}
            <div className="w-full max-w-md perspective-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  // حركة الدخول
                  initial={{ opacity: 0, x: isRTL ? 100 : -100, rotateY: -30 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="w-full"
                >
                  <BankCard3D
                    type={t(`cards.${activeTab}.card_type`)}
                    cardNumber="4000 1234 5678 9010"
                    holderName="ALI SHAMLAN"
                    bgGradient={currentCard.bgGradient}
                    accentColor={currentCard.accentColor}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ======================================================= */}
          {/* 2. الجانب الأيسر (النصوص والمميزات فقط) */}
          {/* ======================================================= */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 mt-24">
            

            {/* قائمة المميزات المتغيرة */}
            <div className="space-y-4 max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-features"}
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow duration-300 mb-4"
                    >
                      <div
                        className={`w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${currentCard.featuresIconColor}`}
                      >
                        {featureIcons[i]}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#002147] text-lg">
                          {t(`cards.${activeTab}.features.${i}.title`)}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {t(`cards.${activeTab}.features.${i}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* أزرار الإجراءات */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className={`text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-2 ${currentCard.backdropColor}`}
              >
                {t("apply_btn")}
                {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </button>
              <button className="bg-white text-[#002147] border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-gray-300 active:scale-95 transition-all">
                {t("more_btn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
