"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Layers, Code, TrendingUp } from "lucide-react";
import { useTranslations, useLocale } from "next-intl"; // استيراد المكتبة

type UndrCategoriesProps = {
  autoPlayInterval?: number;
};

export default function UndrCategories({
  autoPlayInterval = 6000,
}: UndrCategoriesProps) {
  // 1. تفعيل الترجمة
  const t = useTranslations("ExclusiveServices");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 2. تعريف البيانات الثابتة (التي لا تحتاج ترجمة)
 const items = [
   {
     id: "strategy",
     imagePath:
       "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
     icon: <Layers size={24} />,
   },
   {
     id: "development",
     imagePath:
       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
     icon: <Code size={24} />,
   },
   {
     id: "growth",
     imagePath:
       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
     icon: <TrendingUp size={24} />,
   },
 ];

  // اكتشاف الجوال
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // التعامل مع التغيير التلقائي
  useEffect(() => {
    if (isMobile) return;

    const intervalTime = 50;
    const step = 100 / (autoPlayInterval / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % items.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [items.length, autoPlayInterval, activeIndex, isMobile]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const brandColor = "#002147";

  return (
    <section
      className="relative w-full min-h-auto lg:h-[750px] bg-slate-50 overflow-hidden flex flex-col"
      dir={dir}
    >
      {/* خلفية SVG */}
      <div
        className={`hidden lg:block absolute inset-0 pointer-events-none z-0 ${!isRTL ? "scale-x-[-1]" : ""}`}
      >
        <svg
          className="absolute w-full h-full text-[#002147]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M30 0 L15 100 L40 100 L55 0 Z"
            fill="currentColor"
            fillOpacity="0.03"
          />
          <line
            x1="58"
            y1="0"
            x2="43"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.2"
            strokeOpacity="0.1"
          />
          <line
            x1="62"
            y1="0"
            x2="47"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.1"
            strokeOpacity="0.1"
          />
          <path d="M0 0 L20 0 L0 20 Z" fill="currentColor" fillOpacity="0.05" />
        </svg>

        <div
          className="absolute bottom-0 right-0 w-64 h-64 opacity-10"
          style={{
            backgroundImage: `radial-gradient(${brandColor} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="flex flex-col lg:flex-row h-full relative z-10 w-full">
        {/* الجانب: عرض الصور */}
        <div className="order-1 lg:order-2 w-full lg:w-[55%] relative h-[250px] md:h-[350px] lg:h-auto overflow-hidden">
          <div
            className={`absolute inset-0 overflow-hidden shadow-2xl bg-white z-20 h-full
            ${
              isRTL
                ? "lg:ml-8 lg:rounded-tr-[4rem] lg:rounded-bl-[4rem]"
                : "lg:mr-8 lg:rounded-tl-[4rem] lg:rounded-br-[4rem]"
            }
            rounded-b-[2rem] lg:rounded-b-none
            `}
          >
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  className={`
                        absolute inset-0 w-full h-full transition-all duration-700 ease-in-out
                        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-110"}
                      `}
                >
                  <Image
                    src={item.imagePath}
                    // العنوان للصورة من الترجمة
                    alt={t(`items.${item.id}.title`)}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />

                  <div className="absolute inset-0 bg-[#002147]/20 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-80 lg:opacity-90" />

                  {/* المحتوى العائم فوق الصورة */}
                  <div
                    className={`
                          absolute bottom-0 w-full p-6 lg:p-10 transform transition-all duration-700 ${isRTL ? "left-0" : "right-0"}
                          ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                        `}
                    dir={dir}
                  >
                    <div className="hidden lg:block">
                      <div className="flex items-center gap-4 text-white mb-2">
                        <span className="w-12 h-[1px] bg-white/50"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                          {t("imageLabel")}
                        </span>
                      </div>
                      <p className="text-xl font-medium text-white/90 max-w-lg leading-relaxed">
                        {t(`items.${item.id}.desc`)}
                      </p>
                    </div>
                    {/* في الجوال نعرض العنوان فقط */}
                    <div className="lg:hidden">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {t(`items.${item.id}.title`)}
                      </h3>
                      <div className="w-12 h-1 bg-blue-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* الجانب: القائمة والمحتوى */}
        <div className="order-2 lg:order-1 w-full lg:w-[45%] p-6 md:p-10 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6 lg:mb-10">
            <span className="w-8 lg:w-10 h-1 bg-[#002147] rounded-full"></span>
            <span className="text-[#002147] font-bold tracking-wider text-xs lg:text-sm uppercase">
              {t("sectionTitle")}
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-[#002147] mb-8 lg:mb-12 leading-tight">
            {t("mainTitle.part1")} <br />
            <span className="relative inline-block">
              <span
                className={`relative z-10 text-transparent bg-clip-text bg-gradient-to-${isRTL ? "l" : "r"} from-[#002147] to-blue-600`}
              >
                {t("mainTitle.part2")}
              </span>
              <svg
                className="absolute -bottom-1 lg:-bottom-2 w-full h-2 lg:h-3 text-blue-200 -z-0"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </h2>

          <div className="space-y-4 lg:space-y-5">
            {items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(index)}
                  className={`
                    group cursor-pointer rounded-xl p-4 lg:p-5 transition-all duration-500 border
                    ${
                      isActive
                        ? `bg-white border-blue-100 shadow-lg lg:shadow-xl shadow-blue-900/5 ${isRTL ? "lg:translate-x-2" : "lg:-translate-x-2"}`
                        : "bg-white/60 lg:bg-white/40 border-transparent hover:bg-white hover:border-gray-100"
                    }
                  `}
                >
                  <div className="flex items-start gap-4 lg:gap-5">
                    {/* الأيقونة */}
                    <div
                      className={`
                        flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center transition-all duration-500
                        ${
                          isActive
                            ? "bg-[#002147] text-white rotate-3"
                            : "bg-white border border-gray-200 text-gray-400 group-hover:border-[#002147]/20 group-hover:text-[#002147]"
                        }
                      `}
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-center">
                        <h3
                          className={`text-base lg:text-lg font-bold transition-colors ${isActive ? "text-[#002147]" : "text-gray-600"}`}
                        >
                          {t(`items.${item.id}.title`)}
                        </h3>
                      </div>

                      {/* الوصف القابل للتمدد */}
                      <div
                        className={`
                          grid transition-all duration-500 ease-in-out
                          ${isActive ? "grid-rows-[1fr] opacity-100 mt-2 lg:mt-3" : "grid-rows-[0fr] opacity-0 mt-0"}
                        `}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`text-gray-500 text-sm leading-relaxed border-[#002147]/10 ${isRTL ? "border-r-2 pr-4" : "border-l-2 pl-4"}`}
                          >
                            {t(`items.${item.id}.desc`)}
                          </p>

                          {/* شريط التقدم */}
                          {!isMobile && (
                            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-${isRTL ? "r" : "l"} from-[#002147] to-blue-600`}
                                style={{
                                  width: `${progress}%`,
                                  transition: "width 100ms linear",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
