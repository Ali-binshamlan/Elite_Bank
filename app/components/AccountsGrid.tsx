"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  PiggyBank,
  TrendingUp,
  Users,
  UserPlus,
  Crown,
  ArrowUpRight,
} from "lucide-react";

// --- تعريف أنماط SVG الخلفية (كما هي) ---
const BackgroundPatterns = {
  waves: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute inset-0 text-white"
    >
      <path
        d="M0,192 C120,320 240,64 360,192 L400,208 L400,400 L0,400 Z"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path
        d="M0,256 C120,384 240,128 360,256 L400,272 L400,400 L0,400 Z"
        fill="currentColor"
        fillOpacity="0.07"
      />
    </svg>
  ),
  dots: (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 text-white opacity-10"
    >
      <pattern
        id="dotPattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="2" fill="currentColor" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  ),
  circles: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 text-white"
    >
      <circle cx="0" cy="400" r="300" fill="currentColor" fillOpacity="0.05" />
      <circle cx="400" cy="0" r="200" fill="currentColor" fillOpacity="0.05" />
      <circle
        cx="200"
        cy="200"
        r="100"
        fill="currentColor"
        fillOpacity="0.03"
      />
    </svg>
  ),
};

const AccountCard = ({
  title,
  desc,
  icon: Icon,
  img,
  color,
  large = false,
  ctaText,
  patternType = "waves",
}: any) => {
  const SelectedPattern =
    BackgroundPatterns[patternType as keyof typeof BackgroundPatterns] ||
    BackgroundPatterns.waves;

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className={`
        relative overflow-hidden rounded-[2rem] group cursor-pointer
        ${large ? "lg:row-span-2 lg:col-span-1" : "col-span-1 h-[280px]"}
        bg-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500
      `}
    >
      {/* 1. الخلفية والصورة */}
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image src={img} alt={title} fill className="object-cover" />

        {/* SVG Pattern */}
        <motion.div
          variants={{
            rest: { opacity: 0.6, scale: 1, rotate: 0 },
            hover: { opacity: 1, scale: 1.1, rotate: 2 },
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay"
        >
          {SelectedPattern}
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          variants={{
            rest: {
              opacity: 0.4,
              background:
                "linear-gradient(to top, rgba(0,15,35,0.8), rgba(0,33,71,0.3))",
            },
            hover: {
              opacity: 0.95,
              background: `linear-gradient(to top, ${color}, ${color}cc, transparent)`,
            },
          }}
          className="absolute inset-0 transition-all duration-500 z-1"
        />
      </motion.div>

      {/* 2. المحتوى */}
      <div className="absolute inset-0 p-7 flex flex-col justify-between z-20">
        {/* الأيقونة العلوية (تم التعديل لتكون ملونة افتراضياً) */}
        <div className="flex justify-between items-start">
          <motion.div
            variants={{
              rest: {
                y: 0,
                color: "#color", // الأيقونة بيضاء
                backdropFilter: "blur(0px)",
              },
              hover: {
                y: -5,
                backgroundColor: "#ffffff", // عند الهوفر تصبح الخلفية بيضاء
                color: color, // والأيقونة تأخذ لون البطاقة
                backdropFilter: "blur(8px)",
              },
            }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <Icon size={26} className="transition-colors duration-300" />
          </motion.div>

          <motion.div
            variants={{
              rest: { opacity: 0, scale: 0.5, x: -10 },
              hover: { opacity: 1, scale: 1, x: 0 },
            }}
            className="w-10 h-10 rounded-full bg-white/20 text-white backdrop-blur-md flex items-center justify-center"
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        {/* النصوص */}
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: -15 },
          }}
        >
          <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
            {title}
          </h3>

          <motion.div
            variants={{
              rest: { opacity: 0, height: 0 },
              hover: { opacity: 1, height: "auto" },
            }}
            className="overflow-hidden"
          >
            <p className="text-white/90 text-base leading-relaxed mb-5 font-medium drop-shadow-md">
              {desc}
            </p>
            <button className="px-6 py-3 bg-white text-[#002147] rounded-xl text-sm font-bold shadow-lg hover:bg-gray-50 transition-colors">
              {ctaText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function AccountsGrid() {
  const t = useTranslations("AccountsGrid");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const accounts = [
    {
      id: "savings",
      large: true,
      img: "/images/Hero_5.png",
      color: "#33465c", // كحلي غامق
      icon: PiggyBank,
      pattern: "waves",
    },
    {
      id: "returns",
      large: false,
      img: "/images/hero_2.png",
      color: "#d9a55b", // ذهبي/برتقالي
      icon: TrendingUp,
      pattern: "dots",
    },
    {
      id: "family",
      large: false,
      img: "/images/hero_3.png",
      color: "#9e474e", // أحمر غامق
      icon: Users,
      pattern: "circles",
    },
    {
      id: "follower",
      large: false,
      img: "/images/Hero_4.png",
      color: "#4a7a72", // أخضر/تركواز غامق
      icon: UserPlus,
      pattern: "dots",
    },
    {
      id: "gold",
      large: false,
      img: "/images/Hero_1.png",
      color: "#8c7e56", // ذهبي مطفأ
      icon: Crown,
      pattern: "circles",
    },
  ];

  return (
    <section
      className="w-full py-16 md:py-24 bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {accounts.map((acc) => (
            <AccountCard
              key={acc.id}
              large={acc.large}
              title={t(`${acc.id}.title`)}
              desc={t(`${acc.id}.desc`)}
              icon={acc.icon}
              img={acc.img}
              color={acc.color}
              patternType={acc.pattern}
              ctaText={t("cta_view")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
