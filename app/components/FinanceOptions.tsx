"use client";

import { useTranslations } from "next-intl";
import { Car, Home, Banknote } from "lucide-react";
import FinanceInfoCard from "@/app/components/Cards/FinanceInfoCard";

interface FinanceOptionsProps {
  locale: string;
}

export default function FinanceOptions({ locale }: FinanceOptionsProps) {
  const t = useTranslations("FinanceOptions");
  const isRTL = locale === "ar";

  // استخدام صور من الداتا (أو صورة افتراضية)

  const options = [
    {
      id: "auto",
      icon: <Car size={24} strokeWidth={2} />,
      imageUrl:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop", // صورة سيارة
    },
    {
      id: "personal",
      icon: <Banknote size={24} strokeWidth={2} />,
      imageUrl:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "realestate",
      icon: <Home size={24} strokeWidth={2} />,
      imageUrl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gray-50/30" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-black text-[#002147] mb-4 ${
              isRTL ? "text-3xl md:text-5xl" : "text-2xl md:text-4xl"
            }`}
          >
            {t("section_title")}
          </h2>

          <p
            className={`text-gray-500 max-w-2xl mx-auto ${
              isRTL ? "text-base" : "text-sm"
            }`}
          >
            {t("section_subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {options.map((option) => (
            <FinanceInfoCard
              key={option.id}
              title={t(`${option.id}.title`)}
              description={t(`${option.id}.desc`)}
              cta={t(`${option.id}.cta`)}
              icon={option.icon}
              imageUrl={option.imageUrl}
              isRTL={isRTL}
              // ✅ هنا نمرر الرابط الديناميكي للصفحة التي أنشأناها سابقاً
              link={`/Personal/Finance/${option.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
