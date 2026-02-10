"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type CardData = {
  id: number;
  key: string;
  img: string;
  title: string;
  category: string;
  href: string;
};

type SlideData = {
  originalIndex: number;
  data: CardData;
  position: number;
};

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards: CardData[] = useMemo(
    () => [
      {
        id: 1,
        key: "infinite",
        img: "/images/Hero_1.png",
        title: t("cards.infinite.title"),
        category: t("cards.infinite.category"),
        href: "/Personal/Cards/infinite",
      },
      {
        id: 2,
        key: "platinum",
        img: "/images/Hero_2.png",
        title: t("cards.platinum.title"),
        category: t("cards.platinum.category"),
        href: "/Personal/Cards/platinum",
      },
      {
        id: 3,
        key: "elite",
        img: "/images/Hero_3.png",
        title: t("cards.elite.title"),
        category: t("cards.elite.category"),
        href: "/Personal/Cards/world_elite",
      },
      {
        id: 4,
        key: "gold",
        img: "/images/Hero_4.png",
        title: t("cards.gold.title"),
        category: t("cards.gold.category"),
        href: "/Personal/Cards/monthly",
      },
      {
        id: 5,
        key: "business",
        img: "/images/Hero_5.png",
        title: t("cards.business.title"),
        category: t("cards.business.category"),
        href: "/Personal/Cards/prepaid",
      },
    ],
    [t],
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      dir === "rtl" ? nextSlide() : prevSlide();
    } else if (info.offset.x < -threshold) {
      dir === "rtl" ? prevSlide() : nextSlide();
    }
  };

  const getVisibleSlides = () => {
    const visibleSlides: SlideData[] = [];
    const range = isMobile ? 1 : 2;
    for (let i = -range; i <= range; i++) {
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
  }, [nextSlide]);

  return (
    <section
      className="relative pt-24 pb-12 md:pt-32 md:pb-8 bg-[#fafbfd] overflow-hidden min-h-[85vh] flex flex-col justify-center"
      dir={dir}
    >
      {/* الخلفية كما هي بدون تغيير */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[80px]"
        />

        <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-10">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#002147"
              fillOpacity="0.5"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute top-20 right-[15%] opacity-5"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              stroke="#002147"
              strokeWidth="1"
              fill="none"
            />

            <rect
              x="30"
              y="30"
              width="40"
              height="40"
              stroke="#002147"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </motion.div>

        <div className="absolute top-[40%] left-[5%] opacity-10">
          <svg width="80" height="80">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#002147" />
              </pattern>
            </defs>

            <rect width="80" height="80" fill="url(#dots)" />
          </svg>
        </div>

        <div className="absolute top-0 w-full h-full md:h-64 bg-gradient-to-b from-white via-[#fafbfd]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        {/* منطقة العنوان - استخدام الترجمة */}

        <div className="relative text-center mb-6 md:mb-8">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none -z-10">
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full animate-[spin_80s_linear_infinite]"
            >
              <circle
                cx="300"
                cy="300"
                r="280"
                fill="none"
                stroke="#002147"
                strokeOpacity="0.03"
                strokeWidth="1"
                strokeDasharray="20 20"
              />

              <circle
                cx="300"
                cy="300"
                r="220"
                fill="none"
                stroke="#002147"
                strokeOpacity="0.04"
                strokeWidth="0.5"
              />

              <circle
                cx="300"
                cy="300"
                r="160"
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth="2"
                strokeOpacity="0.1"
              />

              <defs>
                <linearGradient
                  id="blueGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#2563eb" />

                  <stop offset="100%" stopColor="#002147" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className="text-[#002147] text-4xl md:text-7xl lg:text-7xl font-black mb-4 md:mb-6 leading-[1.2] md:leading-[1.1] tracking-tight">
            {t("title")}

            <br />

            <span className="relative inline-block">
              <svg
                className="hidden md:block absolute w-[110%] h-4 -bottom-2 -left-[5%] text-blue-500/20"
                viewBox="0 0 200 9"
                preserveAspectRatio="none"
              >
                <path
                  d="M2.00025 6.99997C30.5002 0.99997 120.5 -5.00003 197.5 5.49999"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#002147] to-[#2563eb]">
                {t("subtitle")}
              </span>
            </span>
          </h1>

          <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2">
            {t("description")}
          </p>
        </div>

        {/* Slider Area */}
        <div className="relative h-[420px] md:h-[550px] w-full flex items-center justify-center touch-pan-y">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center perspective-[1200px]">
            <AnimatePresence mode="popLayout">
              {getVisibleSlides().map((slide) => {
                const isCenter = slide.position === 0;
                const absPos = Math.abs(slide.position);
                const xSpacing = isMobile ? 45 : 240;
                const xOffset =
                  dir === "rtl"
                    ? slide.position * -xSpacing
                    : slide.position * xSpacing;

                return (
                  <motion.div
                    key={slide.originalIndex}
                    drag={isCenter ? "x" : false}
                    onDragEnd={handleDragEnd}
                    animate={{
                      x: xOffset,
                      scale: isCenter
                        ? isMobile
                          ? 1
                          : 1.05
                        : 1 - absPos * (isMobile ? 0.1 : 0.15),
                      opacity: isCenter
                        ? 1
                        : 1 - absPos * (isMobile ? 0.4 : 0.3),
                      zIndex: 10 - absPos,
                      rotateY:
                        dir === "rtl"
                          ? slide.position * (isMobile ? 15 : 25)
                          : slide.position * (isMobile ? -15 : -25),
                      z: -absPos * (isMobile ? 40 : 60),
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 22 }}
                    className="absolute w-[75vw] max-w-[300px] md:max-w-none md:w-[350px] aspect-[3/4.5] cursor-grab active:cursor-grabbing md:cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      visibility: isMobile && absPos > 1 ? "hidden" : "visible",
                    }}
                    onClick={() => setCurrentIndex(slide.originalIndex)}
                  >
                    <div
                      className={`relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-300 group ${isCenter ? "shadow-2xl border border-white/10" : "brightness-75 grayscale-[0.2]"}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d3daf8] via-[#304ba3] to-[#1e3a8a]" />
                      <img
                        src={slide.data.img}
                        alt={slide.data.title}
                        className="relative z-10 w-full h-full object-cover mix-blend-hard-light opacity-90 transition-transform duration-700 pointer-events-none"
                      />
                      {isCenter && (
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#000f21] via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                          <div className="text-white">
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[10px] md:text-xs font-medium text-blue-200 uppercase tracking-widest mb-1 block"
                            >
                              {slide.data.category}
                            </motion.span>
                            <div className="flex justify-between items-center">
                              <motion.h3
                                key={slide.data.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-xl md:text-2xl font-bold tracking-wide"
                              >
                                {slide.data.title}
                              </motion.h3>
                              <Link
                                href={`/${locale}${slide.data.href}`}
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all cursor-pointer z-30"
                              >
                                <ArrowUpRight
                                  size={18}
                                  className="md:w-5 md:h-5 text-white"
                                />
                              </Link>
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

        {/* ✅ أزرار التحكم (الأسهم والنقاط) */}
        <div className="flex items-center justify-center gap-6 mt-10 relative z-20">
          {/* زر السابق */}
          <button
            onClick={prevSlide}
            className="hidden md:flex w-14 h-14 rounded-full bg-white border border-slate-200 text-[#002147] items-center justify-center hover:bg-[#002147] hover:text-white transition-all hover:scale-105 shadow-sm"
          >
            {dir === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </button>

          {/* نقاط المؤشر (Dots) */}
          <div className="flex gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-500 ${
                  currentIndex === i
                    ? "w-8 h-2 md:w-10 md:h-2 bg-[#002147]"
                    : "w-2 h-2 md:w-2 md:h-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* زر التالي */}
          <button
            onClick={nextSlide}
            className="hidden md:flex w-14 h-14 rounded-full bg-white border border-slate-200 text-[#002147] items-center justify-center hover:bg-[#002147] hover:text-white transition-all hover:scale-105 shadow-sm"
          >
            {dir === "rtl" ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
      </div>
    </section>
  );
}
