"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Percent,
  CreditCard,
  Zap,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl"; // استيراد المكتبة

// --- Types ---
type SlideItem = {
  id: string; // المفتاح للترجمة
  imagePath: string;
  icon: React.ReactNode;
};

export default function TasheelPrograms() {
  // 1. تفعيل الترجمة
  const t = useTranslations("TasheelPrograms");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- Mobile Detection ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

 const slidesData: SlideItem[] = [
   {
     id: "tasheel",
     // صورة تعبر عن المرونة والتمويل السهل
     imagePath:
       "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1200&auto=format&fit=crop",
     icon: <Percent className="w-5 h-5 md:w-6 md:h-6" />,
   },
   {
     id: "partners",
     // صورة تعبر عن التسوق من متاجر الشركاء
     imagePath:
       "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
     icon: <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />,
   },
   {
     id: "credit",
     // صورة تعبر عن البطاقات الائتمانية والتعاملات البنكية
     imagePath:
       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
     icon: <CreditCard className="w-5 h-5 md:w-6 md:h-6" />,
   },
 ];

  // --- Logic ---

  const nextSlide = useCallback(() => {
    if (isAnimating && !isMobile) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slidesData.length, isMobile]);

  const prevSlide = useCallback(() => {
    if (isAnimating && !isMobile) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slidesData.length, isMobile]);

  const goToSlide = (index: number) => {
    if ((isAnimating && !isMobile) || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      isRTL ? nextSlide() : prevSlide(); // تعديل الاتجاه بناءً على اللغة
    } else if (info.offset.x < -threshold) {
      isRTL ? prevSlide() : nextSlide();
    }
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    const total = slidesData.length;
    const range = 1;

    for (let i = -range; i <= range; i++) {
      let index = (currentIndex + i + total) % total;
      visibleSlides.push({
        item: slidesData[index],
        originalIndex: index,
        position: i,
      });
    }
    return visibleSlides;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentItem = slidesData[currentIndex];
  const visibleSlides = getVisibleSlides();

  return (
    <section
      className="relative w-full min-h-[85vh] md:min-h-[90vh] bg-gradient-to-b from-gray-50 via-white to-[#002147]/5 flex items-center py-12 md:py-24 overflow-hidden"
      dir={dir}
    >
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden md:block">
          <div
            className={`absolute top-0 w-96 h-96 bg-gradient-to-br from-[#002147]/5 to-transparent rounded-full blur-3xl ${
              isRTL ? "left-0" : "right-0"
            }`}
          />
          <div
            className={`absolute bottom-0 w-96 h-96 bg-gradient-to-tr from-[#002147]/5 to-transparent rounded-full blur-3xl ${
              isRTL ? "right-0" : "left-0"
            }`}
          />
        </div>
        <div className="md:hidden absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#002147]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#002147]/3 via-gray-200/20 to-[#002147]/3 rounded-full opacity-50 md:opacity-100" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #002147 1px, transparent 1px),
                              linear-gradient(to bottom, #002147 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-10 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            {t("header.prefix")}
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-[#002147] via-[#284b75] to-[#002147] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {t("header.highlight")}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2"
          >
            {t("header.desc")}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* تفاصيل النص */}
          <div
            className={`w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center ${
              isRTL
                ? "lg:text-right order-2 lg:order-1"
                : "lg:text-left order-2 lg:order-1"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {/* بطاقة الميزة */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl md:shadow-2xl border border-gray-100/50 mb-6 md:mb-8 relative overflow-hidden group">
                  <div
                    className={`absolute top-0 w-32 h-32 bg-[#002147]/5 transition-all duration-500 group-hover:bg-[#002147]/10 ${
                      isRTL
                        ? "right-0 rounded-bl-[100px]"
                        : "left-0 rounded-br-[100px]"
                    }`}
                  />

                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10 text-start">
                    <div className="p-2.5 md:p-3.5 rounded-2xl bg-[#002147] text-white shadow-lg shadow-[#002147]/20">
                      {currentItem.icon}
                    </div>
                    <div>
                      <div className="text-xs md:text-sm font-semibold text-gray-500">
                        {t(`items.${currentItem.id}.subtitle`)}
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-[#002147]">
                        {t(`items.${currentItem.id}.title`)}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed relative z-10 text-start">
                    {t(`items.${currentItem.id}.desc`)}
                  </p>
                </div>

                {/* أزرار التنقل */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-4 justify-center lg:justify-start">
                  {/* نقاط التحديد للجوال */}
                  <div className="flex md:hidden gap-2 my-2">
                    {slidesData.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? "w-8 bg-[#002147]"
                            : "w-1.5 bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="hidden md:flex gap-3">
                    <button
                      onClick={prevSlide}
                      className="p-4 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-white hover:bg-[#002147] hover:border-[#002147] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                    >
                      {isRTL ? (
                        <ChevronRight size={24} />
                      ) : (
                        <ChevronLeft size={24} />
                      )}
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-4 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-white hover:bg-[#002147] hover:border-[#002147] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                    >
                      {isRTL ? (
                        <ChevronLeft size={24} />
                      ) : (
                        <ChevronRight size={24} />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* السلايدر ثلاثي الأبعاد */}
          <div
            className="w-full lg:w-7/12 h-[400px] md:h-[600px] relative flex items-center justify-center perspective-[1200px] order-1 lg:order-2 touch-pan-y"
            dir="ltr" // السلايدر دائما LTR للحسابات الرياضية، والنصوص بداخله توجه حسب اللغة
          >
            <AnimatePresence mode="popLayout">
              {visibleSlides.map((slide) => {
                const isCenter = slide.position === 0;
                const xDist = isMobile ? 40 : 200;
                const xOffset = slide.position * xDist;
                const rotateY = isMobile
                  ? slide.position * 5
                  : slide.position * 20;
                const scaleVal = isCenter
                  ? isMobile
                    ? 1.05
                    : 1.15
                  : isMobile
                    ? 0.9
                    : 0.85;
                const zVal = isMobile
                  ? -Math.abs(slide.position) * 40
                  : -Math.abs(slide.position) * 100;

                return (
                  <motion.div
                    key={slide.item.id}
                    drag={isCenter ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.05}
                    onDragEnd={handleDragEnd}
                    className="absolute w-[80vw] max-w-[300px] md:max-w-[340px] aspect-[3/4.5] cursor-grab active:cursor-grabbing md:cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                      x: xOffset,
                      scale: scaleVal,
                      opacity: isCenter
                        ? 1
                        : slide.position === -1 || slide.position === 1
                          ? 0.6
                          : 0,
                      zIndex: 30 - Math.abs(slide.position) * 5,
                      rotateY: rotateY,
                      z: zVal,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 24,
                    }}
                    onClick={() => {
                      if (!isCenter || !isMobile)
                        goToSlide(slide.originalIndex);
                    }}
                  >
                    <div
                      className={`relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-2 md:border-4 transition-all duration-300 ${
                        isCenter
                          ? "border-white shadow-[0_15px_30px_-10px_rgba(0,33,71,0.4)]"
                          : "border-transparent brightness-90"
                      }`}
                    >
                      {/* الصورة */}
                      <div className="absolute inset-0 bg-gray-200">
                        <img
                          src={slide.item.imagePath}
                          alt={t(`items.${slide.item.id}.title`)}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </div>

                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[#002147]/90 via-transparent to-transparent ${
                          !isCenter ? "opacity-70" : "opacity-0"
                        }`}
                      />

                      {isCenter && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#002147]/20 to-transparent pointer-events-none" />
                          <div
                            className={`absolute top-4 ${
                              isRTL ? "left-4" : "right-4"
                            }`}
                          >
                            <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-[#002147] flex items-center gap-1.5 shadow-sm">
                              <Zap className="w-3 h-3 text-yellow-500" />
                              {t("badge")}
                            </div>
                          </div>
                        </>
                      )}

                      {/* معلومات البطاقة داخل الصورة */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-300 ${
                          isCenter ? "translate-y-0" : "translate-y-4"
                        }`}
                        dir={dir}
                      >
                        <div
                          className={`bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl ${
                            !isCenter ? "opacity-0 md:opacity-80" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="p-1.5 md:p-2 rounded-lg bg-[#002147] text-white">
                              {slide.item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-[#002147] text-base md:text-lg truncate">
                                {t(`items.${slide.item.id}.title`)}
                              </h3>
                              <p className="text-gray-500 text-xs md:text-sm truncate">
                                {t(`items.${slide.item.id}.subtitle`)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[50%] md:w-[60%] h-8 md:h-12 bg-[#002147]/20 blur-xl md:blur-2xl rounded-full" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
}
