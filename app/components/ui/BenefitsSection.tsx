"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  Tag,
  Globe,
  Wifi,
  Bell,
  ShieldCheck,
  CalendarClock,
} from "lucide-react";

export default function BenefitsSection() {
  const t = useTranslations("Benefits");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const benefits = [
    { id: "discounts", icon: Tag },
    { id: "accepted", icon: Globe },
    { id: "nfc", icon: Wifi },
    { id: "notifications", icon: Bell },
    { id: "secure", icon: ShieldCheck },
    { id: "standing", icon: CalendarClock },
  ];

  return (
    <section
      className="relative w-full py-20 bg-gray-50 overflow-hidden" // إضافة overflow-hidden مهمة
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ========================================= */}
      {/* خلفية الأمواج (Waves SVG Background) */}
      {/* ========================================= */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#002147"
            fillOpacity="0.05"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="#002147"
            fillOpacity="0.03"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* الجانب الأيمن (الثابت): العنوان */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-black text-[#002147] leading-tight mb-6">
                {t("title")}
              </h2>
              <div className="w-80 h-2 bg-[#002147] rounded-full"></div>

              {/* زخرفة بصرية إضافية (دوائر) */}
              <div className="mt-10 opacity-10">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="#002147"
                    strokeWidth="20"
                    strokeDasharray="40 20"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر (المتحرك): البطاقات */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {benefits.map((item, index) => (
                <div key={item.id} className="stack-container group">
                  <div className="card">
                    <div className="image-area flex flex-col items-start justify-between p-6 h-full bg-white/80 backdrop-blur-sm">
                      {" "}
                      {/* إضافة شفافية للخلفية */}
                      {/* الأيقونة */}
                      <div className="w-12 h-12 bg-[#002147]/5 rounded-full flex items-center justify-center text-[#002147] mb-4 group-hover:bg-[#002147] group-hover:text-white transition-colors duration-300">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#002147] mb-3 group-hover:underline decoration-2 underline-offset-4">
                          {t(`cards.${item.id}.title`)}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          {t(`cards.${item.id}.desc`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stack-container {
          width: 100%;
          transition: 0.25s ease;
        }

        .stack-container:hover .card {
          transform: rotate(2deg);
        }

        .stack-container:hover .card:before {
          transform: translatey(-4%) rotate(-4deg);
        }

        .stack-container:hover .card:after {
          transform: translatey(4%) rotate(4deg);
        }

        .card {
          aspect-ratio: auto;
          min-height: 280px;
          border: 3px solid #002147;
          background-color: #fff;
          position: relative;
          transition: 0.2s ease;
          cursor: default;
          padding: 10px;
        }

        .card:before,
        .card:after {
          content: "";
          display: block;
          position: absolute;
          height: 100%;
          width: 100%;
          border: 3px solid #002147;
          background-color: #fff;
          transform-origin: center center;
          z-index: -1;
          transition: 0.2s ease;
          top: 0;
          left: 0;
          border-radius: 4px;
        }

        .card:before {
          transform: translatey(-2%) rotate(-3deg);
          opacity: 0.6;
        }

        .card:after {
          transform: translatey(2%) rotate(3deg);
          opacity: 0.4;
        }

        .image-area {
          width: 100%;
          height: 100%;
          border: 2px solid #002147;
          /* تم تعديل الخلفية لتكون شبه شفافة لتظهر الأمواج خلفها قليلاً */
          background-color: rgba(255, 255, 255, 0.9);
          position: relative;
        }
      `}</style>
    </section>
  );
}
