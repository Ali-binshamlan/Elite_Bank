"use client";

import Image from "next/image";
import { CreditCard, TrendingUp, Zap, Star } from "lucide-react";
// 1. استيراد الـ Context
import { useLanguage } from "../context/LanguageContext";

export default function AppFeaturesSection() {
  // 2. جلب اللغة الحالية
  const { language } = useLanguage();
  const isRTL = language === "AR";

  // 3. تعريف المحتوى للنصين (العربي والإنجليزي)
  const content = {
    AR: {
      badge: "تحديث جديد كلياً",
      titlePart1: "+ 200 خدمة في تطبيق",
      titlePart2: "بنك النخبة",
      description:
        "خدمات رقمية سهلة وآمنة، تواكب احتياجات يومك وتدعم طموحاتك. أنجز معاملاتك المالية، سدد فواتيرك، وحقق أهدافك بلمسة واحدة.",
      buttons: {
        google: "Google Play",
        googleSub: "GET IT ON",
        apple: "App Store",
        appleSub: "Download on the",
      },
      cards: {
        savings: {
          label: "هدف توفير",
          title: "شراء سيارة",
        },
        bills: {
          status: "تم السداد",
          label: "فواتير الخدمات",
          provider: "الكهرباء السعودية",
          currency: "ر.س",
        },
        credit: {
          label: "الرصيد المتاح",
          currency: "ر.س",
        },
      },
    },
    EN: {
      badge: "All New Update",
      titlePart1: "+ 200 Services in",
      titlePart2: "Elite Bank App",
      description:
        "Secure and easy digital services that keep up with your daily needs. Manage your finances, pay bills, and achieve your goals with a single touch.",
      buttons: {
        google: "Google Play",
        googleSub: "GET IT ON",
        apple: "App Store",
        appleSub: "Download on the",
      },
      cards: {
        savings: {
          label: "Savings Goal",
          title: "Buy a Car",
        },
        bills: {
          status: "Paid",
          label: "Utility Bills",
          provider: "Saudi Electricity",
          currency: "SAR",
        },
        credit: {
          label: "Available Balance",
          currency: "SAR",
        },
      },
    },
  };

  // اختيار النصوص بناءً على اللغة
  const t = content[language] || content.AR;

  return (
    <section
      className="relative w-full py-4 bg-[#f8fafc] overflow-hidden flex flex-col items-center justify-center min-h-[900px]"
      // 4. جعل الاتجاه ديناميكياً
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* خلفية جمالية خفيفة */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-[#002147]/5 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* ========================================= */}
        {/* 1. النصوص العلوية (Header Text) */}
        {/* ========================================= */}
        <div className="text-center max-w-3xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs mb-6 shadow-sm">
            <Star size={14} className="fill-blue-700" />
            {t.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#002147] mb-6 leading-tight">
            {t.titlePart1} <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#002147] to-blue-600">
              {t.titlePart2}
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
            {t.description}
          </p>

          {/* ========================================= */}
          {/* أزرار التحميل (Download Buttons) */}
          {/* ========================================= */}
          <div className="flex flex-wrap justify-center gap-4 w-full" dir="ltr">
            {/* جعلنا الأزرار دائما LTR للحفاظ على شكل العلامة التجارية، أو يمكن عكسها حسب الرغبة */}

            {/* زر Google Play */}
            <button className="group relative transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95">
              <div className="flex w-48 h-14 px-4 gap-3 rounded-xl items-center justify-start bg-black text-white shadow-lg shadow-blue-900/10 group-hover:shadow-xl group-hover:shadow-blue-900/20 group-hover:bg-gray-900 transition-all border border-transparent group-hover:border-gray-700">
                <svg viewBox="30 336.7 120.9 129.2" className="w-8">
                  <path
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    fill="#FFD400"
                  />
                  <path
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    fill="#FF3333"
                  />
                  <path
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    fill="#48FF48"
                  />
                  <path
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    fill="#3BCCFF"
                  />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <div className="text-[10px] font-medium text-gray-300">
                    {t.buttons.googleSub}
                  </div>
                  <div className="text-lg font-bold font-sans mt-0.5">
                    {t.buttons.google}
                  </div>
                </div>
              </div>
            </button>

            {/* زر App Store */}
            <button className="group relative transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95">
              <div className="flex w-48 h-14 px-4 gap-3 rounded-xl items-center justify-start bg-black text-white shadow-lg shadow-blue-900/10 group-hover:shadow-xl group-hover:shadow-blue-900/20 group-hover:bg-gray-900 transition-all border border-transparent group-hover:border-gray-700">
                <svg viewBox="0 0 384 512" className="w-8 fill-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <div className="text-[10px] font-medium text-gray-300">
                    {t.buttons.appleSub}
                  </div>
                  <div className="text-lg font-bold font-sans mt-0.5">
                    {t.buttons.apple}
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. حاوية الهاتف والعناصر العائمة (Visuals) */}
        {/* ========================================= */}
        <div className="relative w-[300px] lg:w-[360px] flex justify-center perspective-1000 mb-10">
          {/* دوائر خلفية للهاتف */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] border border-blue-100/50 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] border border-dashed border-blue-200/50 rounded-full"></div>

          {/* صورة الهاتف */}
          <div className="relative z-10 w-full drop-shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/phonee.png"
              alt="Elite Bank App Interface"
              width={360}
              height={700}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* --- البطاقات العائمة --- */}

          {/* أ. بطاقة أهداف التوفير (يمين علوي) */}
          <div
            className={`absolute top-20 z-20 animate-float-slow ${isRTL ? "-right-24 lg:-right-32" : "-left-24 lg:-left-32"}`}
          >
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 w-48 lg:w-56">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold">
                    {t.cards.savings.label}
                  </p>
                  <p className="text-sm font-bold text-[#002147]">
                    {t.cards.savings.title}
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`bg-green-500 h-full w-[75%] rounded-full`}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
                <span>75,000 {t.cards.credit.currency}</span>
                <span>100,000 {t.cards.credit.currency}</span>
              </div>
            </div>
          </div>

          {/* ب. بطاقة سداد الفواتير (يسار سفلي) */}
          <div
            className={`absolute bottom-32 z-20 animate-float-medium ${isRTL ? "-left-20 lg:-left-28" : "-right-20 lg:-right-28"}`}
          >
            <div className="bg-[#002147] text-white p-4 rounded-2xl shadow-xl shadow-blue-900/20 border border-blue-800/50 w-48 lg:w-52 relative overflow-hidden">
              {/* تأثير لمعان */}
              <div
                className={`absolute top-0 w-20 h-20 bg-white/10 blur-2xl rounded-full -mt-10 ${isRTL ? "right-0 -mr-10" : "left-0 -ml-10"}`}
              ></div>

              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                  <Zap size={18} className="text-yellow-400 fill-yellow-400" />
                </div>
                <span className="bg-green-500/20 text-green-300 text-[10px] px-2 py-1 rounded-md backdrop-blur-sm border border-green-500/30">
                  {t.cards.bills.status}
                </span>
              </div>
              <p className="text-xs text-blue-200 mb-1">
                {t.cards.bills.label}
              </p>
              <h4 className="font-bold text-lg mb-3">
                {t.cards.bills.provider}
              </h4>
              <div className="flex items-center justify-between text-[10px] text-blue-200 border-t border-white/10 pt-2">
                <span className="font-bold text-white text-base">380.50</span>
                <span className="text-xs">{t.cards.bills.currency}</span>
              </div>
            </div>
          </div>

          {/* ج. بطاقة الفيزا (يمين سفلي - أقرب للهاتف) */}
          <div
            className={`absolute bottom-48 z-30 animate-float-fast ${isRTL ? "-right-16 lg:-right-24" : "-left-16 lg:-left-24"}`}
          >
            <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 w-52">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md opacity-80"></div>
                <CreditCard size={18} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-xs mb-1">
                {t.cards.credit.label}
              </p>
              <p className="text-xl font-black text-[#002147] mb-3">
                24,500{" "}
                <span className="text-xs font-normal">
                  {t.cards.credit.currency}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 space-x-reverse">
                  <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                </div>
                <span className="text-[10px] text-gray-500 font-bold tracking-widest">
                  **** 8899
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for animation */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
