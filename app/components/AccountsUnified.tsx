"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  PiggyBank,
  TrendingUp,
  Users,
  UserPlus,
  User,
} from "lucide-react";

export default function AccountsUnified() {
  const t = useTranslations("AccountsGrid"); // نستخدم ترجمات الشبكة لأنها تحتوي على تفاصيل البطاقات
  const tHero = useTranslations("AccountsHero"); // وترجمات الهيرو للعنوان الرئيسي
  const locale = useLocale();
  const isRTL = locale === "ar";

  // مرجع للحاوية الكبيرة للتحكم في السكرول
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ==========================================
  // إعدادات الحركة (The Magic)
  // ==========================================

  // 1. حركة نصوص الهيرو (تختفي عند النزول)
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // 2. حركة البطاقات (من التكدس إلى الشبكة)
  // النطاق [0, 0.5] يعني أن الحركة تكتمل عند منتصف السكرول

  // دالة مساعدة لحساب الحركة لكل بطاقة
  const createCardAnimation = (
    index: number,
    targetTop: string,
    targetLeft: string,
    targetWidth: string,
    startRotate: number,
  ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const top = useTransform(scrollYProgress, [0, 0.6], ["20%", targetTop]); // من أعلى الهيرو إلى مكانها في الشبكة
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const left = useTransform(
      scrollYProgress,
      [0, 0.6],
      [isRTL ? "10%" : "55%", targetLeft],
    ); // من جانب الهيرو إلى مكانها
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const width = useTransform(
      scrollYProgress,
      [0, 0.6],
      ["300px", targetWidth],
    ); // تكبر البطاقة
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const rotate = useTransform(scrollYProgress, [0, 0.4], [startRotate, 0]); // تستقيم
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const contentOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]); // يظهر المحتوى الداخلي

    return { top, left, width, rotate, contentOpacity };
  };

  // تعريف البطاقات ومواقعها النهائية في الشبكة
  // ملاحظة: النسب المئوية تقريبية لتناسب الشاشة الكبيرة
  const cardsConfig = [
    {
      id: "savings",
      color: "#EFF4FA", // خلفية فاتحة
      iconBg: "#00A651",
      icon: <PiggyBank size={24} />,
      // الموقع النهائي (الشبكة - العمود الأول الطويل)
      targetTop: "55%",
      targetLeft: isRTL ? "60%" : "5%",
      targetWidth: "35%",
      startRotate: -5,
      hasImage: true, // هذه البطاقة فيها صورة رجل
    },
    {
      id: "returns",
      color: "#EFF4FA",
      iconBg: "#F5A623",
      icon: <TrendingUp size={24} />,
      // الموقع النهائي
      targetTop: "55%",
      targetLeft: isRTL ? "30%" : "45%",
      targetWidth: "25%",
      startRotate: 5,
      hasImage: false,
    },
    {
      id: "family",
      color: "#EFF4FA",
      iconBg: "#E63946",
      icon: <Users size={24} />,
      // الموقع النهائي
      targetTop: "55%",
      targetLeft: isRTL ? "2%" : "73%",
      targetWidth: "25%",
      startRotate: -10,
      hasImage: false,
    },
    {
      id: "follower",
      color: "#EFF4FA",
      iconBg: "#00C49F",
      icon: <UserPlus size={24} />,
      // الموقع النهائي (الصف الثاني)
      targetTop: "80%", // أسفل قليلاً
      targetLeft: isRTL ? "30%" : "45%",
      targetWidth: "25%",
      startRotate: 3,
      hasImage: false,
    },
  ];

  return (
    // الحاوية الرئيسية: ارتفاعها كبير (250vh) للسماح بالسكرول الطويل
    <div ref={containerRef} className="relative w-full h-[250vh] bg-white">
      {/* Sticky Container: هذا القسم يظل ثابتاً أمام المستخدم بينما يتم السكرول 
        بداخله تحدث كل الحركة
      */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center">
        {/* الخلفية المائلة (تبقى ثابتة) */}
        <div
          className={`
            absolute top-0 bottom-0 w-[60%] h-full bg-[#EFF4FA] z-0
            ${isRTL ? "left-0" : "right-0"}
          `}
          style={{
            clipPath: isRTL
              ? "polygon(0 0, 100% 0, 60% 100%, 0% 100%)"
              : "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />

        {/* ========================================= */}
        {/* 1. قسم نصوص الهيرو (يختفي مع السكرول) */}
        {/* ========================================= */}
        <motion.div
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="container mx-auto px-8 relative z-10 -mt-40"
        >
          <div
            className={`w-full lg:w-1/2 ${isRTL ? "mr-auto text-right" : "ml-auto text-left"}`}
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#002147] mb-6 leading-tight">
              {tHero("title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium">
              {tHero("desc")}
            </p>
            <button className="group flex items-center gap-3 text-[#002147] font-bold text-xl hover:gap-5 transition-all">
              <span>{tHero("cta")}</span>
              <span className="bg-[#002147] text-white p-3 rounded-full shadow-lg">
                {isRTL ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
              </span>
            </button>
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* 2. البطاقات المتحركة (The Flying Cards) */}
        {/* ========================================= */}
        {cardsConfig.map((card, i) => {
          // حساب الحركة لكل بطاقة
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { top, left, width, rotate, contentOpacity } =
            createCardAnimation(
              i,
              card.targetTop,
              card.targetLeft,
              card.targetWidth,
              card.startRotate,
            );

          return (
            <motion.div
              key={card.id}
              style={{
                top,
                left,
                width,
                rotate,
                zIndex: cardsConfig.length - i, // الترتيب: الأولى في الأعلى عند التكدس
                backgroundColor: card.color,
                // نغير الارتفاع ديناميكياً: في التكدس قصير، في الشبكة طويل
                height: useTransform(
                  scrollYProgress,
                  [0, 0.6],
                  ["240px", card.id === "savings" ? "500px" : "280px"],
                ),
              }}
              className="absolute rounded-[2rem] shadow-xl border border-white/20 overflow-hidden flex flex-col justify-between origin-top-left"
            >
              {/* المحتوى الداخلي للبطاقة (يظهر تدريجياً) */}
              <motion.div
                style={{ opacity: contentOpacity }}
                className="p-6 relative z-10 h-full flex flex-col"
              >
                {/* رأس البطاقة */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#002147] leading-snug">
                    {t(`${card.id}.title` as any)}
                  </h3>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* الوصف (يظهر فقط في البطاقة الكبيرة) */}
                {card.id === "savings" && (
                  <p className="text-gray-600 text-sm mb-4 font-medium leading-relaxed">
                    {t(`${card.id}.desc` as any)}
                  </p>
                )}

                {/* الزر والصورة (للبطاقة الكبيرة فقط) */}
                {card.id === "savings" && (
                  <div className="mt-auto">
                    <button className="w-full py-3 bg-[#0047FF] text-white rounded-xl font-bold shadow-lg text-sm mb-4">
                      {t("savings.cta")}
                    </button>
                    {/* مكان الصورة داخل البطاقة */}
                    <div className="relative h-[180px] w-full">
                      <Image
                        src="/images/saudi_man_phone.png" // تأكد من الصورة
                        alt="Savings"
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>
                  </div>
                )}

                {/* صورة للبطاقات الصغيرة */}
                {!card.hasImage && (
                  <div className="relative flex-1 mt-4 rounded-xl overflow-hidden bg-white/50">
                    <Image
                      src={`/images/hero_${i + 2}.png`} // صور عشوائية للأقسام
                      alt={card.id}
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                )}
              </motion.div>

              {/* غطاء وهمي يظهر أثناء التكدس فقط ليغطي المحتوى (اختياري لتحسين الشكل) */}
              <motion.div
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
                }}
                className="absolute inset-0 bg-[#002147] flex items-center justify-center z-20"
              >
                {/* أيقونة في وضع التكدس */}
                <div className="text-white opacity-20">{card.icon}</div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* ========================================= */}
        {/* 3. بطاقة الحساب الجاري (تبقى ثابتة في الهيرو ثم تختفي) */}
        {/* ========================================= */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.15], [1, 0.8]),
            // موقعها في الهيرو (وضع التكدس)
            top: "20%",
            left: isRTL ? "10%" : "60%",
          }}
          className="absolute z-50 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[220px]"
        >
          <div className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center text-white">
            <User size={24} />
          </div>
          <div>
            <p className="text-[#002147] font-bold text-lg">
              {tHero("cards.current")}
            </p>
            <div className="w-10 h-1 bg-[#00B4D8] rounded-full mt-1"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
