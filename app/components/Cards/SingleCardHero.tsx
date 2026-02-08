"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BankCard3D from "../ui/BankCard3D";
import { cardsData } from "../../data/cardsData";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  DollarSign,
  Banknote,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Star,
  Zap,
  Gift,
} from "lucide-react";
import { notFound } from "next/navigation";

interface SingleCardHeroProps {
  locale: string;
  cardId: string;
}

export default function SingleCardHero({
  locale,
  cardId,
}: SingleCardHeroProps) {
  const t = useTranslations("CardsHero");
  const tCommon = useTranslations("Common");
  const isRTL = locale === "ar";

  const currentCard = cardsData.find((c) => c.id === cardId);

  if (!currentCard) {
    notFound();
  }

  const featureIcons = [
    <Globe key="1" size={24} />,
    <DollarSign key="2" size={24} />,
    <Banknote key="3" size={24} />,
  ];

  const extendedIcons = [
    <ShieldCheck key="ex1" size={28} />,
    <Star key="ex2" size={28} />,
    <Zap key="ex3" size={28} />,
    <Gift key="ex4" size={28} />,
  ];

  return (
    <>
      {/* ======================= Hero Section ======================= */}
      <section
        // استخدمنا min-h-[100dvh] لدعم متصفحات الجوال بشكل أفضل
        className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-white"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* خلفية الديسك توب */}
        <div
          className={`absolute top-0 bottom-0 w-[60%] z-0 ${currentCard.backdropColor} ${
            isRTL ? "right-0 rounded-bl-[500px]" : "left-0 rounded-br-[500px]"
          } hidden lg:block`}
        ></div>

        {/* خلفية الجوال: زدنا الارتفاع لـ 55% ليغطي النصوص */}
        <div
          className={`absolute top-0 left-0 w-full h-[55%] md:h-[45%] z-0 lg:hidden rounded-b-[40px] ${currentCard.backdropColor}`}
        ></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* 1. الجانب العلوي (البطاقة + العنوان) */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start order-1 relative z-20 mt-16 lg:mt-0">
              {/* زر العودة */}
              <div className="flex flex-wrap justify-center lg:mt-28 lg:justify-start gap-3 mb-6 lg:mb-10 w-full">
                <Link
                  href={`/Personal/Cards`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border-2 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-md"
                >
                  {isRTL ? (
                    <ChevronRight size={16} />
                  ) : (
                    <ChevronLeft size={16} />
                  )}
                  {tCommon("backToCards")}
                </Link>
              </div>

              {/* البطاقة 3D */}
              {/* max-w-[340px] للجوال لمنع خروج البطاقة عن الشاشة */}
              <div className="w-full max-w-[340px] md:max-w-md perspective-container mb-6 lg:mb-8">
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 100 : -100, rotateY: -30 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="w-full"
                >
                  <BankCard3D
                    type={t(`cards.${currentCard.id}.card_type`)}
                    cardNumber="4000 1234 5678 9010"
                    holderName="ALI SHAMLAN"
                    bgGradient={currentCard.bgGradient}
                    accentColor={currentCard.accentColor}
                  />
                </motion.div>
              </div>

              {/* العنوان والوصف */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center lg:text-start w-full max-w-md"
              >
                {/* تقليل حجم الخط في الجوال text-3xl */}
                <h1 className="text-3xl md:text-5xl font-black text-white lg:text-white mb-2 lg:mb-3 leading-tight drop-shadow-md">
                  {t(`cards.${currentCard.id}.title`)}
                </h1>
                <p className="text-base md:text-lg text-white/90 lg:text-white/80 font-medium leading-relaxed">
                  {t(`cards.${currentCard.id}.subtitle`)}
                </p>
              </motion.div>
            </div>

            {/* 2. الجانب السفلي (المميزات) */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 order-2 mt-4 lg:mt-24">
              <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
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
                          {t(`cards.${currentCard.id}.features.${i}.title`)}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {t(`cards.${currentCard.id}.features.${i}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* زر التقديم */}
              <div className="flex flex-wrap justify-center lg:justify-center gap-4 pt-2">
                <button
                  // w-full للجوال ليأخذ العرض الكامل
                  className={`w-full md:w-auto text-white px-8 md:px-16 py-4 rounded-xl font-bold text-lg md:text-xl hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-4 ${currentCard.backdropColor}`}
                >
                  {t("apply_btn")}
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= Extended Features Section (With SVG Waves) ======================= */}
      <section
        className="relative py-16 lg:py-28 bg-gray-50 overflow-hidden"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* الخلفية المتموجة */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg
            className="absolute bottom-0 left-0 w-full h-auto opacity-[0.03]"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="#002147"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path
              fill="#002147"
              fillOpacity="0.5"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg
            className="absolute top-0 left-0 w-full h-auto opacity-[0.02] transform rotate-180"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="#002147"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-[#002147] mb-6"
            >
              {t(`cards.${currentCard.id}.title`)}
            </motion.h2>
            <div className="w-24 h-1.5 rounded-full mx-auto mb-8 bg-[#002147]"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 leading-8 text-lg font-medium"
            >
              {t(`cards.${currentCard.id}.description_long`)}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 relative min-h-[350px] md:min-h-[500px] lg:min-h-full rounded-[32px] overflow-hidden shadow-2xl group order-1 lg:order-none">
              <Image
                src="/images/Hero_1.png"
                alt="Card Benefits"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className={`absolute inset-0 opacity-40 mix-blend-multiply ${currentCard.backdropColor}`}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-bold mb-2">
                  عالم من المزايا
                </h3>
                <p className="text-white/80">
                  اكتشف نمط حياة جديد صمم خصيصاً لك.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-none">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-gray-100 p-1 h-full min-h-[260px]"
                >
                  <div
                    className={`
                      group h-full w-full relative overflow-hidden flex flex-col justify-between p-8
                      bg-white rounded-2xl 
                      outline outline-gray-50 -outline-offset-8 
                      origin-bottom-right
                      transition-all duration-500
                      hover:rotate-2 hover:scale-[1.02] hover:shadow-lg
                      
                      after:absolute after:w-24 after:h-24 after:bg-blue-50/80 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:content-['']
                      after:duration-500 hover:after:duration-500 hover:after:translate-x-24
                      
                      before:absolute before:w-20 before:h-20 before:bg-indigo-50/80 before:rounded-full before:blur-xl before:top-20 before:right-16 before:content-['']
                      before:duration-500 hover:before:translate-y-12 hover:before:-translate-x-32
                    `}
                  >
                    <div className="z-10 flex flex-col items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 border border-gray-100 shadow-sm text-[#002147]">
                        <div>{extendedIcons[i] || <Star size={28} />}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#002147] mb-2 leading-tight">
                          {t(
                            `cards.${currentCard.id}.extended_features.${i}.title`,
                          )}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                          {t(
                            `cards.${currentCard.id}.extended_features.${i}.desc`,
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
