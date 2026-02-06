"use client";

import React from "react";
import { Wifi, Zap } from "lucide-react";

const RotatingCards = () => {
  // مصفوفة البطاقات بألوان رسمية مشتقة من الهوية #002147
  const cards = [
    {
      id: 1,
      title: "ELITE",
      num: "4822",
      img: "/images/Hero_1.png",
      // البطاقة الأساسية: لون الهوية الصريح
      color: "from-[#043872] to-[#939499]",
    },
    {
      id: 2,
      title: "SIGNATURE",
      num: "9901",
      img: "/images/Hero_2.png",
      // البطاقة السوداء الفخمة (تدرج للكحلي الغامق جداً)
      color: "from-[#a7b5da] to-[#00152e]",
    },
    {
      id: 3,
      title: "PLATINUM",
      num: "1044",
      img: "/images/Hero_3.png",
      // البطاقة الفضية/المعدنية (مزيج رمادي مع لمسة كحلي خفيفة)
      color: "from-[#475569] to-[#1e293b]",
    },
    {
      id: 4,
      title: "GOLD",
      num: "2030",
      img: "/images/Hero_4.png",
      // البطاقة الذهبية الفخمة (ليست صفراء فاقعة، بل ذهبي نحاسي)
      color: "from-[#aebece] to-[#163666]",
    },
    {
      id: 5,
      title: "BUSINESS",
      num: "8855",
      img: "/images/Hero_5.png",
      // بطاقة الأعمال: كحلي مائل للأزرق الملكي قليلاً للتميز
      color: "from-[#7995d8] to-[#142452]",
    },
  ];

  return (
    <div className="animation-container mt-20" dir="ltr">
      <div className="wrap_card">
        {cards.map((card, index) => (
          <div key={card.id} className={`card card-${index + 1}`}>
            <div className="content relative">
              {/* الصورة الخلفية للبطاقة (Overlay خفيف) */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-30 mix-blend-overlay"
                style={{ backgroundImage: `url(${card.img})` }}
              />

              {/* تدرج لوني أساسي للبطاقة */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-95 z-[-1]`}
              />

              

              {/* محتوى البطاقة (الشريحة، الاسم، الرقم) */}
              <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end z-10">
                

               

                <div className="text-white">
                  <div className="text-[9px] md:text-[10px] opacity-60 font-light mb-1 tracking-widest">
                    CARD NUMBER
                  </div>
                  <div className="font-mono text-lg md:text-xl tracking-widest drop-shadow-md text-white/90">
                    **** **** **** {card.num}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* الخطوط المضيئة أسفل البطاقات - تم تعديل لونها للأزرق الغامق */}
        <div className="lines">
          <div className="line" />
          <div className="line" />
        </div>
      </div>

      <style jsx>{`
        .animation-container {
          --w-card: 220px;
          --h-card: 320px;
          --rotate-card: 15deg;
          --w-wrap-card: calc(var(--w-card) * 1.8);

          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.85);
        }

        @media (min-width: 1024px) {
          .animation-container {
            transform: scale(1.1);
          }
        }

        .wrap_card {
          position: relative;
          width: var(--w-wrap-card);
          height: var(--h-card);
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .content {
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          /* إطار خفيف جداً ليعطي فخامة */
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.2);
        }

        .card {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          overflow: hidden;
          border-radius: 20px;
          width: var(--w-card);
          height: var(--h-card);
          /* ظل قوي للبطاقات */
          box-shadow: 0 30px 60px -12px rgba(0, 33, 71, 0.5);
          animation: rotating 15s cubic-bezier(0.75, 0, 0, 1) infinite;
        }

        .card-1 {
          animation-delay: 0s;
        }
        .card-2 {
          animation-delay: -3s;
        }
        .card-3 {
          animation-delay: -6s;
        }
        .card-4 {
          animation-delay: -9s;
        }
        .card-5 {
          animation-delay: -12s;
        }

        @keyframes rotating {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            z-index: 10;
            filter: brightness(1);
          }
          20% {
            transform: translate3d(60%, -10%, -50px) scale(0.85) rotate(10deg);
            z-index: 5;
            filter: brightness(0.7); /* تغميق البطاقات الجانبية */
          }
          40% {
            transform: translate3d(30%, -20%, -150px) scale(0.7) rotate(5deg);
            z-index: 1;
            filter: brightness(0.5);
            opacity: 1;
          }
          60% {
            transform: translate3d(-30%, -20%, -150px) scale(0.7) rotate(-5deg);
            z-index: 1;
            filter: brightness(0.5);
            opacity: 1;
          }
          80% {
            transform: translate3d(-60%, -10%, -50px) scale(0.85) rotate(-10deg);
            z-index: 5;
            filter: brightness(0.7);
          }
        }

        .lines {
          position: absolute;
          inset: auto 0 -40px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 0;
        }

        .line {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .line::before,
        .line::after {
          content: "";
          position: absolute;
          /* الخطوط الآن بلون الهوية */
          background: linear-gradient(
            to right,
            transparent,
            #002147,
            transparent
          );
          filter: blur(8px);
          width: 80%;
          height: 4px;
          opacity: 0.4;
        }
      `}</style>
    </div>
  );
};

export default RotatingCards;
