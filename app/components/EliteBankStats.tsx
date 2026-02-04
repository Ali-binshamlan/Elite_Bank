"use client";

import {
  Users,
  Building2,
  CreditCard,
  Landmark,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

export default function RoyalBankStats() {
  // 1. جلب اللغة الحالية
  const { language } = useLanguage();

  // 2. تصحيح المقارنة لتكون مع الأحرف الكبيرة كما في كود Hero
  const isRTL = language === "AR";

  const brandColor = "#002147";

  // 3. قاموس المحتوى (تم تغيير المفاتيح إلى AR و EN)
  const content = {
    AR: {
      // تغيير هنا: ar -> AR
      titlePart1: "نترجم الثقة إلى",
      titlePart2: "أرقام قياسية",
      description:
        "في بنك النخبة، نفخر بقاعدة صلبة من الأصول والعملاء، مما يجعلنا الشريك الأمثل لطموحاتك المالية.",
      cta: "الاطلاع على التقرير السنوي",
      stats: [
        {
          id: 1,
          label: "إجمالي الأصول",
          value: "1,043",
          suffix: "مليار",
          subLabel: null,
        },
        {
          id: 2,
          label: "حساب عميل",
          value: "+19",
          suffix: "مليون",
          subLabel: null,
        },
        {
          id: 3,
          label: "جهاز صراف آلي",
          value: "4,322",
          suffix: "جهاز",
          subLabel: null,
        },
        {
          id: 4,
          label: "فروع حول المملكة",
          value: "537",
          suffix: "فرع",
          subLabel: null,
        },
        {
          id: 5,
          label: "صافي الأرباح",
          value: "24.79",
          suffix: "مليار",
          subLabel: "نتائج الربع الرابع 2025",
        },
      ],
    },
    EN: {
      // تغيير هنا: en -> EN
      titlePart1: "Translating Trust into",
      titlePart2: "Record Numbers",
      description:
        "At Elite Bank, we pride ourselves on a solid base of assets and clients, making us the ideal partner for your financial ambitions.",
      cta: "View Annual Report",
      stats: [
        {
          id: 1,
          label: "Total Assets",
          value: "1,043",
          suffix: "Billion",
          subLabel: null,
        },
        {
          id: 2,
          label: "Customer Accounts",
          value: "+19",
          suffix: "Million",
          subLabel: null,
        },
        {
          id: 3,
          label: "ATMs",
          value: "4,322",
          suffix: "Unit",
          subLabel: null,
        },
        {
          id: 4,
          label: "Branches Nationwide",
          value: "537",
          suffix: "Branch",
          subLabel: null,
        },
        {
          id: 5,
          label: "Net Profits",
          value: "24.79",
          suffix: "Billion",
          subLabel: "Q4 2025 Results",
        },
      ],
    },
  };

  // اختيار النصوص (الآن سيعمل لأن المفاتيح متطابقة)
  const t = content[language] || content.AR;

  const icons = [
    <Landmark key="1" className="w-7 h-7" />,
    <Users key="2" className="w-7 h-7" />,
    <CreditCard key="3" className="w-7 h-7" />,
    <Building2 key="4" className="w-7 h-7" />,
    <TrendingUp key="5" className="w-7 h-7" />,
  ];

  return (
    <section
      className="relative w-full py-8 bg-[#f8fafc] overflow-hidden transition-all duration-300"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="bg-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke={brandColor}
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bg-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 mt-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#002147] mb-6 leading-tight">
            {t.titlePart1} <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#002147] to-[#1e40af]">
              {t.titlePart2}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#002147]/20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {t.stats.map((stat, index) => {
            const isHighlight = index === 4;

            return (
              <div
                key={stat.id}
                className={`
                  group relative flex flex-col justify-between p-6 h-[280px] rounded-[32px] overflow-hidden transition-all duration-500
                  ${
                    isHighlight
                      ? "bg-[#002147] text-white shadow-2xl shadow-[#002147]/40 scale-105 z-10"
                      : "bg-white text-[#002147] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,33,71,0.15)] border border-transparent hover:border-[#002147]/10"
                  }
                `}
              >
                {!isHighlight && (
                  <div className="absolute -right-10 -top-10 w-40 h-40 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="50" cy="50" r="40" />
                      <circle cx="50" cy="50" r="30" />
                      <circle cx="50" cy="50" r="20" />
                    </svg>
                  </div>
                )}

                {isHighlight && (
                  <>
                    <div className="absolute inset-0 opacity-10">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                      </svg>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 blur-[50px] rounded-full pointer-events-none"></div>
                  </>
                )}

                <div className="relative">
                  <div
                    className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center text-lg mb-4 transition-transform duration-300 group-hover:scale-110
                      ${
                        isHighlight
                          ? "bg-white/10 backdrop-blur-sm text-white border border-white/20"
                          : "bg-[#F5F8FA] text-[#002147] group-hover:bg-[#002147] group-hover:text-white"
                      }
                    `}
                  >
                    {icons[index]}
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-4xl font-black tracking-tight font-[system-ui]">
                      {stat.value}
                    </h3>
                    <span
                      className={`text-sm font-medium ${
                        isHighlight ? "text-blue-200" : "text-slate-400"
                      }`}
                    >
                      {stat.suffix}
                    </span>
                  </div>

                  <div
                    className={`w-12 h-1 rounded-full mt-4 mb-4 ${
                      isHighlight
                        ? "bg-blue-500"
                        : "bg-[#002147]/10 group-hover:bg-[#002147]"
                    } transition-colors duration-300`}
                  ></div>

                  <div className="flex flex-col">
                    <p
                      className={`font-bold text-lg ${
                        isHighlight ? "text-white" : "text-[#002147]"
                      }`}
                    >
                      {stat.label}
                    </p>
                    {stat.subLabel && (
                      <p className="text-xs text-blue-300 mt-1">
                        {stat.subLabel}
                      </p>
                    )}
                  </div>
                </div>

                {!isHighlight && (
                  <div
                    className={`absolute bottom-6 ${
                      isRTL ? "left-6 -translate-x-2" : "right-6 translate-x-2"
                    } opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#002147]`}
                  >
                    {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="group relative px-8 py-4 bg-white text-[#002147] font-bold rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#002147]/5">
            <div className="absolute inset-0 w-0 bg-[#002147] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <span className="relative flex items-center gap-3">
              {t.cta}
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
