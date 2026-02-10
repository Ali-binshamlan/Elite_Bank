"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function InsuranceVisuals() {
  const t = useTranslations("InsuranceVisualss");

  // ✅ المحتوى الجديد المعتمد على صور التأمين (سيارات، منزل، تقاعد)
  const cards = [
    {
      id: 1,
      title: t("auto"),
      img: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=2000&auto=format&fit=crop",
      rotate: "-15deg",
      zIndex: 10,
    },
    {
      id: 2,
      title: t("home"),
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000&auto=format&fit=crop",
      rotate: "0deg",
      zIndex: 20,
    },
    {
      id: 3,
      title: t("retirement"),
      img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2000&auto=format&fit=crop",
      rotate: "15deg",
      zIndex: 10,
    },
  ];

  return (
    <div className="relative w-full mt-20 max-w-[600px] h-[450px] flex items-center justify-center py-10">
      {/* 1. خلفية ملونة (Blob) */}
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-200 to-blue-400 rounded-full blur-[100px] opacity-50 animate-pulse" />

      {/* 2. حاوية الكروت */}
      <div className="relative flex justify-center items-center group">
        {cards.map((card) => (
          <div
            key={card.id}
            className="glass-card relative overflow-hidden transition-all duration-500 ease-in-out"
            style={
              {
                "--r": card.rotate,
                zIndex: card.zIndex,
              } as React.CSSProperties
            }
          >
            {/* الصورة الخلفية للكارت */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700"
              />
              {/* Overlay لتسهيل قراءة النص */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* النص السفلي المصمم بأسلوب Glass */}
            <div className="absolute bottom-0 w-full h-16 bg-white/10 flex justify-center items-center text-white text-lg font-bold tracking-wider backdrop-blur-md border-t border-white/20 transition-all duration-300">
              {card.title}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .glass-card {
          width: 160px;
          height: 220px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          border-radius: 20px;
          /* الحالة الافتراضية (متداخلة) */
          transform: rotate(var(--r));
          margin: 0 -40px;
          transition: 0.5s ease;
        }

        /* عند هوفر المجموعة: الكروت تتوزع وتعتدل */
        .group:hover .glass-card {
          transform: rotate(0deg) translateY(-10px);
          margin: 0 10px;
        }

        @media (min-width: 768px) {
          .glass-card {
            width: 200px;
            height: 280px;
            margin: 0 -60px;
            border-radius: 24px;
          }
          .group:hover .glass-card {
            margin: 0 15px;
          }
        }
      `}</style>
    </div>
  );
}
