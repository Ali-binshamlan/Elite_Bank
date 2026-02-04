"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";

// 1. تعريف شكل بيانات البطاقة
type CardData = {
  id: number;
  img: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
};

// 2. تعريف شكل الشريحة (Slide)
type SlideData = {
  originalIndex: number;
  data: CardData;
  position: number;
};

export default function Hero() {
  const { language, dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(2);

  // =========================================================
  // بيانات البطاقات (تم تحديد النوع هنا لتجنب الأخطاء)
  // =========================================================
  const cards: CardData[] = [
    {
      id: 1,
      img: "images/Hero_1.png",
      titleAr: "البطاقة اللانهائية",
      titleEn: "Infinite Card",
      categoryAr: "رفاهية بلا حدود",
      categoryEn: "Limitless Luxury",
    },
    {
      id: 2,
      img: "images/Hero_2.png",
      titleAr: "البطاقة البلاتينية",
      titleEn: "Platinum Card",
      categoryAr: "رفيق السفر",
      categoryEn: "Travel Companion",
    },
    {
      id: 3,
      img: "images/Hero_3.png",
      titleAr: "بطاقة النخبة",
      titleEn: "Elite Card",
      categoryAr: "تميز واستثناء",
      categoryEn: "Pure Excellence",
    },
    {
      id: 4,
      img: "images/Hero_4.png",
      titleAr: "البطاقة الذهبية",
      titleEn: "Gold Card",
      categoryAr: "مكافآت يومية",
      categoryEn: "Daily Rewards",
    },
    {
      id: 5,
      img: "images/Hero_5.png",
      titleAr: "بطاقة الأعمال",
      titleEn: "Business Card",
      categoryAr: "حلول الشركات",
      categoryEn: "Corporate Solutions",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getVisibleSlides = () => {
    // 3. تحديد نوع المصفوفة هنا هو الحل الأساسي للمشكلة
    const visibleSlides: SlideData[] = [];

    for (let i = -2; i <= 2; i++) {
      let index = (currentIndex + i + cards.length) % cards.length;
      visibleSlides.push({
        originalIndex: index,
        data: cards[index],
        position: i,
      });
    }
    return visibleSlides;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); // تم إضافة currentIndex لضمان تزامن الـ interval

  return (
    <section
      className="relative pt-32 pb-8 bg-[#fafbfd] overflow-hidden"
      dir={dir}
    >
      {/* ========================================= */}
      {/* خلفية الصفحة العامة */}
      {/* ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="small-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#002147"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#small-grid)" />
        </svg>
        <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-white via-[#fafbfd]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ========================================= */}
        {/* منطقة العنوان */}
        {/* ========================================= */}
        <div className="relative text-center mb-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none -z-10">
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full animate-[spin_60s_linear_infinite]"
            >
              <circle
                cx="300"
                cy="300"
                r="150"
                fill="none"
                stroke="#002147"
                strokeOpacity="0.05"
                strokeWidth="1"
                strokeDasharray="10 10"
              />
              <circle
                cx="300"
                cy="300"
                r="220"
                fill="none"
                stroke="#002147"
                strokeOpacity="0.03"
                strokeWidth="1"
              />
              <circle
                cx="300"
                cy="300"
                r="280"
                fill="none"
                stroke="#002147"
                strokeOpacity="0.02"
                strokeWidth="40"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-blue-200/20 blur-[80px] rounded-full" />
          </div>

          <h1 className="text-[#002147] text-5xl md:text-7xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            {language === "AR" ? "عالم من الخيارات" : "A World of Choices"}
            <br />
            <span className="relative inline-block">
              <svg
                className="absolute w-full h-3 -bottom-3 left-0 text-blue-500/30"
                viewBox="0 0 200 9"
                preserveAspectRatio="none"
              >
                <path
                  d="M2.00025 6.99997C2.00025 6.99997 96.5002 -3.49997 197.5 5.49999"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#002147] to-[#2563eb]">
                {language === "AR" ? "صممت خصيصاً لك" : "Tailored For You"}
              </span>
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {language === "AR"
              ? "اكتشف مجموعة بطاقاتنا المتنوعة التي تلبي كافة احتياجاتك اليومية والعملية."
              : "Discover our diverse range of cards meeting all your daily and business needs."}
          </p>
        </div>

        {/* ========================================= */}
        {/* السلايدر */}
        {/* ========================================= */}
        <div className="relative h-[400px] md:h-[550px] w-full flex items-center justify-center">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center perspective-[1200px]">
            <AnimatePresence mode="popLayout">
              {getVisibleSlides().map((slide) => {
                const isCenter = slide.position === 0;
                const absPos = Math.abs(slide.position);
                const xOffset =
                  dir === "rtl" ? slide.position * -240 : slide.position * 240;

                return (
                  <motion.div
                    key={slide.originalIndex}
                    initial={false}
                    animate={{
                      x: xOffset,
                      scale: isCenter ? 1.05 : 1 - absPos * 0.15,
                      opacity: 1 - absPos * 0.3,
                      zIndex: 10 - absPos,
                      rotateY:
                        dir === "rtl"
                          ? slide.position * 25
                          : slide.position * -25,
                      z: -absPos * 60,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 22,
                      mass: 1,
                    }}
                    className="absolute w-[270px] md:w-[350px] aspect-[3/4.5] cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      visibility: absPos > 2 ? "hidden" : "visible",
                    }}
                    onClick={() => setCurrentIndex(slide.originalIndex)}
                  >
                    {/* ======================================================= */}
                    {/* جسم الكارت */}
                    {/* ======================================================= */}
                    <div
                      className={`
                        relative w-full h-full rounded-[2.5rem] overflow-hidden transition-all duration-300 group
                        ${
                          isCenter
                            ? "shadow-[0_25px_60px_-15px_rgba(0,33,71,0.5)] ring-1 ring-white/20 border border-white/10"
                            : "brightness-[0.7] grayscale-[0.2] shadow-xl"
                        }
                      `}
                    >
                      {/* 1. التدرج الخلفي */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d3daf8] via-[#304ba3] to-[#1e3a8a]" />

                      {/* 2. نقش SVG */}
                      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <svg
                          className="w-full h-full"
                          width="100%"
                          height="100%"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <pattern
                              id="cardPattern"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                              patternUnits="userSpaceOnUse"
                            >
                              <path
                                d="M0 20 L20 0 M-5 5 L5 -5 M15 25 L25 15"
                                stroke="white"
                                strokeWidth="0.5"
                                strokeOpacity="0.3"
                                fill="none"
                              />
                            </pattern>
                            <linearGradient
                              id="fadeGrad"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="white"
                                stopOpacity="0.2"
                              />
                              <stop
                                offset="100%"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            fill="url(#cardPattern)"
                          />
                          <circle
                            cx="90"
                            cy="10"
                            r="40"
                            fill="url(#fadeGrad)"
                            opacity="0.3"
                          />
                          <path
                            d="M0 80 Q 50 50 100 80"
                            stroke="white"
                            strokeWidth="0.5"
                            fill="none"
                            opacity="0.4"
                          />
                          <path
                            d="M0 85 Q 50 55 100 85"
                            stroke="white"
                            strokeWidth="0.5"
                            fill="none"
                            opacity="0.3"
                          />
                        </svg>
                      </div>

                      {/* 3. Noise Texture */}
                      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />

                      {/* 4. صورة البطاقة */}
                      <img
                        src={slide.data.img}
                        alt={slide.data.titleEn}
                        className="relative z-10 w-full h-full object-cover mix-blend-hard-light opacity-90 hover:scale-105 transition-transform duration-700"
                        draggable={false}
                      />

                      {/* 5. النصوص (ديناميكية حسب نوع البطاقة) */}
                      {isCenter && (
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#000f21] via-transparent to-transparent flex flex-col justify-end p-8">
                          <div className="text-white">
                            {/* التصنيف العلوي الصغير */}
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs font-medium text-blue-200 uppercase tracking-widest mb-1 block"
                            >
                              {language === "AR"
                                ? slide.data.categoryAr
                                : slide.data.categoryEn}
                            </motion.span>

                            <div className="flex justify-between items-center">
                              <motion.h3
                                key={slide.data.id} // Re-animate on change
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl font-bold tracking-wide drop-shadow-md"
                              >
                                {language === "AR"
                                  ? slide.data.titleAr
                                  : slide.data.titleEn}
                              </motion.h3>

                              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all cursor-pointer">
                                <ArrowUpRight size={20} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================= */}
        {/* أزرار التحكم */}
        {/* ========================================= */}
        <div className="flex items-center justify-center gap-6 mt-8 relative z-20">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-white border border-slate-200 text-[#002147] flex items-center justify-center hover:bg-[#002147] hover:text-white transition-all hover:scale-105 shadow-sm"
          >
            {dir === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </button>

          <div className="flex gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${currentIndex === i ? "w-10 bg-[#002147]" : "w-2 bg-slate-300"}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-white border border-slate-200 text-[#002147] flex items-center justify-center hover:bg-[#002147] hover:text-white transition-all hover:scale-105 shadow-sm"
          >
            {dir === "rtl" ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
      </div>
    </section>
  );
}
