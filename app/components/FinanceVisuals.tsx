"use client";

import { useTranslations } from "next-intl"; // 1. استيراد الهوك
import { Home, Car, Banknote } from "lucide-react";

export default function FinanceVisuals() {
  const t = useTranslations("FinanceVisuals"); // 2. تفعيل الترجمة

  const cards = [
    {
      id: 1,
      title: t("real_estate"), // 3. استخدام مفتاح الترجمة
      icon: <Home size={64} strokeWidth={1.5} />,
      rotate: "-15deg",
      zIndex: 10,
    },
    {
      id: 2,
      title: t("auto"), // 3. استخدام مفتاح الترجمة
      icon: <Car size={64} strokeWidth={1.5} />,
      rotate: "0deg",
      zIndex: 20,
    },
    {
      id: 3,
      title: t("personal"), // 3. استخدام مفتاح الترجمة
      icon: <Banknote size={64} strokeWidth={1.5} />,
      rotate: "15deg",
      zIndex: 10,
    },
  ];

  return (
    <div className="relative w-full mt-20 max-w-[600px] h-[450px] flex items-center justify-center py-10">
      {/* 1. خلفية ملونة (Blob) */}
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#002147] to-[#00418c] rounded-full blur-[100px] opacity-80 animate-pulse" />

      {/* 2. حاوية الكروت */}
      <div className="relative flex gap-10 justify-center items-center group">
        {cards.map((card) => (
          <div
            key={card.id}
            className="glass-card relative flex flex-col justify-center items-center transition-all duration-500 ease-in-out"
            style={
              {
                "--r": card.rotate,
                zIndex: card.zIndex,
              } as React.CSSProperties
            }
          >
            {/* الأيقونة */}
            <div className="text-white drop-shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>

            {/* النص السفلي (Data Text) */}
            <div className="absolute bottom-0 w-full h-16 bg-white/10 flex justify-center items-center text-[#002147] text-xl font-bold tracking-wider backdrop-blur-[4px] border-t border-white/20 group-hover:bg-white/80 transition-colors duration-300">
              {card.title}
            </div>
          </div>
        ))}
      </div>

      {/* 3. ستايلات مخصصة */}
      <style jsx>{`
        .glass-card {
          width: 160px;
          height: 220px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 30px 40px rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          overflow: hidden;

          /* الحالة الافتراضية */
          transform: rotate(var(--r));
          margin: 0 -30px;
        }

        

        /* أحجام الديسك توب */
        @media (min-width: 768px) {
          .glass-card {
            width: 180px;
            height: 250px;
            margin: 0 -50px;
            border-radius: 24px;
          }
          
        }
      `}</style>
    </div>
  );
}
