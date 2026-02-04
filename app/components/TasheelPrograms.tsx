"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Percent,
  CreditCard,
  Zap,
} from "lucide-react";
// 1. استيراد الـ Context
import { useLanguage } from "../context/LanguageContext";

export default function TasheelSlider3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 2. جلب اللغة وتحديد الاتجاه
  const { language } = useLanguage();
  const isRTL = language === "AR";

  // 3. تعريف المحتوى والبيانات (Data & Content)
  const content = {
    AR: {
      header: {
        titlePrefix: "اكتشف عالم",
        titleHighlight: "التميز المالي",
        description:
          "حلول مالية مبتكرة تلبي احتياجاتك بأعلى معايير الجودة والأمان",
      },
      badges: {
        active: "نشط الآن",
      },
      slides: [
        {
          id: 1,
          imagePath: "/images/Image_1.png",
          icon: <Percent className="w-6 h-6" />,
          subtitle: "برنامج تساهيل",
          title: "مرونة في الدفع",
          description:
            "حوّل مشترياتك باستخدام البطاقة الائتمانية إلى أقساط ميسرة وبدون فوائد إضافية.",
        },
        {
          id: 2,
          imagePath: "/images/Image_2.png",
          icon: <ShoppingBag className="w-6 h-6" />,
          subtitle: "شبكة واسعة",
          title: "تسوق من شركائنا",
          description:
            "ادفع جميع احتياجاتك بكل سهولة من خلال شبكة واسعة من شركائنا المعتمدين حول المملكة.",
        },
        {
          id: 3,
          imagePath: "/images/Image_3.jpeg",
          icon: <CreditCard className="w-6 h-6" />,
          subtitle: "سهولة الإجراءات",
          title: "حلول ائتمانية",
          description:
            "لا حاجة لمعاملات ورقية معقدة. حول عملياتك فوراً عبر التطبيق بضغطة زر واحدة.",
        },
      ],
    },
    EN: {
      header: {
        titlePrefix: "Discover a World of",
        titleHighlight: "Financial Excellence",
        description:
          "Innovative financial solutions meeting your needs with the highest standards of quality and security.",
      },
      badges: {
        active: "Active Now",
      },
      slides: [
        {
          id: 1,
          imagePath: "/images/Image_1.png",
          icon: <Percent className="w-6 h-6" />,
          subtitle: "Tasheel Program",
          title: "Payment Flexibility",
          description:
            "Convert your credit card purchases into easy installments with 0% interest.",
        },
        {
          id: 2,
          imagePath: "/images/Image_2.png",
          icon: <ShoppingBag className="w-6 h-6" />,
          subtitle: "Wide Network",
          title: "Shop with Partners",
          description:
            "Pay for all your needs easily through a wide network of authorized partners across the Kingdom.",
        },
        {
          id: 3,
          imagePath: "/images/Image_3.jpeg",
          icon: <CreditCard className="w-6 h-6" />,
          subtitle: "Easy Procedures",
          title: "Credit Solutions",
          description:
            "No complex paperwork needed. Convert your transactions instantly via the app with a single click.",
        },
      ],
    },
  };

  const t = content[language] || content.AR;
  const currentSlidesData = t.slides;

  // --- Logic for Slider ---

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % currentSlidesData.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, currentSlidesData.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) =>
        (prev - 1 + currentSlidesData.length) % currentSlidesData.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, currentSlidesData.length]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    const total = currentSlidesData.length;

    for (let i = -1; i <= 1; i++) {
      let index = (currentIndex + i + total) % total;
      visibleSlides.push({
        item: currentSlidesData[index],
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

  const currentItem = currentSlidesData[currentIndex];
  const visibleSlides = getVisibleSlides();

  return (
    <section
      className="relative w-full min-h-[90vh] bg-gradient-to-b from-gray-50 via-white to-[#002147]/5 flex items-center py-16 md:py-24 overflow-hidden"
      // 4. جعل الاتجاه ديناميكي
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 w-96 h-96 bg-gradient-to-br from-[#002147]/5 to-transparent rounded-full blur-3xl ${isRTL ? "left-0" : "right-0"}`}
        />
        <div
          className={`absolute bottom-0 w-96 h-96 bg-gradient-to-tr from-[#002147]/5 to-transparent rounded-full blur-3xl ${isRTL ? "right-0" : "left-0"}`}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#002147]/3 via-gray-200/20 to-[#002147]/3 rounded-full" />

        {/* خطوط شبكية */}
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
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          ></motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            {t.header.titlePrefix}
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-[#002147] via-[#284b75] to-[#002147] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {t.header.titleHighlight}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t.header.description}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* تفاصيل النص */}
          <div
            className={`w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center ${isRTL ? "lg:text-right order-2 lg:order-1" : "lg:text-left order-2 lg:order-1"}`}
          >
            <motion.div
              key={currentItem.id} // Important for re-animating on change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* بطاقة الميزة */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100/50 mb-8 relative overflow-hidden group">
                {/* تأثير زخرفي خفيف */}
                <div
                  className={`absolute top-0 w-32 h-32 bg-[#002147]/5 transition-all duration-500 group-hover:bg-[#002147]/10 ${isRTL ? "right-0 rounded-bl-[100px]" : "left-0 rounded-br-[100px]"}`}
                />

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className={`p-3.5 rounded-2xl bg-[#002147] text-white shadow-lg shadow-[#002147]/20`}
                  >
                    {currentItem.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500">
                      {currentItem.subtitle}
                    </div>
                    <div className="text-2xl font-bold text-[#002147]">
                      {currentItem.title}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6 relative z-10">
                  {currentItem.description}
                </p>
              </div>

              {/* أزرار التنقل */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="p-4 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-white hover:bg-[#002147] hover:border-[#002147] hover:shadow-lg disabled:opacity-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group"
                    aria-label="Previous Slide"
                  >
                    {/* عكس الأيقونات بناء على اللغة */}
                    {isRTL ? (
                      <ChevronRight className="w-6 h-6" />
                    ) : (
                      <ChevronLeft className="w-6 h-6" />
                    )}
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="p-4 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-white hover:bg-[#002147] hover:border-[#002147] hover:shadow-lg disabled:opacity-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md group"
                    aria-label="Next Slide"
                  >
                    {isRTL ? (
                      <ChevronLeft className="w-6 h-6" />
                    ) : (
                      <ChevronRight className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* السلايدر ثلاثي الأبعاد */}
          <div
            className={`w-full lg:w-7/12 h-[500px] md:h-[600px] relative flex items-center justify-center perspective-[1200px] order-1 lg:order-2`}
            // نجعل السلايدر دائما LTR للحفاظ على اتجاه الحركة المنطقي للكروت، أو يمكن عكسها حسب الرغبة.
            // لكن غالباً في الـ 3D carousel، الاتجاه الفيزيائي يفضل ثباته.
            dir="ltr"
          >
            {visibleSlides.map((slide) => {
              const isCenter = slide.position === 0;
              const xOffset = slide.position * 200; // المسافة بين الكروت
              const rotateY = slide.position * 20; // دوران الكروت الجانبية

              return (
                <motion.div
                  key={slide.item.id}
                  className="absolute w-[280px] md:w-[340px] aspect-[3/4.5] cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    x: xOffset,
                    scale: isCenter ? 1.15 : 0.85,
                    opacity: isCenter
                      ? 1
                      : slide.position === -1 || slide.position === 1
                        ? 0.7
                        : 0.4,
                    zIndex: 30 - Math.abs(slide.position) * 5,
                    rotateY: rotateY,
                    z: -Math.abs(slide.position) * 100,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 1,
                  }}
                  onClick={() => goToSlide(slide.originalIndex)}
                >
                  <div
                    className={`relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 transition-colors duration-300 ${
                      isCenter
                        ? "border-white shadow-[0_20px_50px_-12px_rgba(0,33,71,0.5)]"
                        : "border-transparent"
                    }`}
                  >
                    {/* الصورة */}
                    <div className="absolute inset-0 bg-gray-200">
                      <img
                        src={slide.item.imagePath}
                        alt={slide.item.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>

                    {/* طبقة التدرج */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#002147]/90 via-transparent to-transparent ${
                        !isCenter ? "opacity-60" : "opacity-0"
                      }`}
                    />

                    {/* تأثيرات خاصة للبطاقة النشطة */}
                    {isCenter && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#002147]/20 to-transparent pointer-events-none" />
                        <div
                          className={`absolute top-4 ${isRTL ? "left-4" : "right-4"}`}
                        >
                          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#002147] flex items-center gap-1.5 shadow-sm">
                            <Zap className="w-3 h-3 text-yellow-500" />
                            {t.badges.active}
                          </div>
                        </div>
                      </>
                    )}

                    {/* معلومات البطاقة داخل الصورة */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                        isCenter ? "translate-y-0" : "translate-y-4"
                      }`}
                      // نضبط اتجاه النص داخل الكارت ليكون متوافق مع اللغة المختارة
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      <div
                        className={`bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl ${
                          !isCenter ? "opacity-80" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`p-2 rounded-lg bg-[#002147] text-white`}
                          >
                            {slide.item.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-[#002147] text-lg">
                              {slide.item.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                              {slide.item.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* ظل أرضي */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-[#002147]/20 blur-2xl rounded-full" />
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
