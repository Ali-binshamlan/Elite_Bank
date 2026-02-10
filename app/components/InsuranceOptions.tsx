"use client";

import { useTranslations } from "next-intl";
import {
  Car,
  ShieldCheck,
  Landmark,
  PlaneTakeoff,
  Home,
  Stethoscope,
  Users,
  FileText,
  HeartHandshake,
  ShieldAlert,
} from "lucide-react";
import InsuranceInfoCard from "@/app/components/Cards/InsuranceInfoCard";

interface InsuranceOptionsProps {
  locale: string;
}

export default function InsuranceOptions({ locale }: InsuranceOptionsProps) {
  const t = useTranslations("InsuranceOptions");
  const isRTL = locale === "ar";

  const options = [
    {
      id: "auto",
      icon: <Car size={24} strokeWidth={2} />,
      imageUrl:
        "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=2000&auto=format&fit=crop", // تأمين سيارات
    },
    {
      id: "retirement",
      icon: <Landmark size={24} strokeWidth={2} />,
      imageUrl:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop", // خطة تقاعد
    },
    
    
    {
      id: "home",
      icon: <Home size={24} strokeWidth={2} />,
      imageUrl:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop", // تأمين منزل
    },
    
  ];

  return (
    <section className="py-24 bg-gray-50/20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-black text-[#002147] mb-6 ${
              isRTL ? "text-3xl md:text-5xl" : "text-2xl md:text-4xl"
            }`}
          >
            {t("section_title")}
          </h2>

          <p
            className={`text-gray-500 max-w-2xl mx-auto leading-relaxed ${
              isRTL ? "text-lg" : "text-base"
            }`}
          >
            {t("section_subtitle")}
          </p>
        </div>

        {/* شبكة الكروت: تظهر 4 في الصف على الشاشات الكبيرة */}
        <div className="flex flex-wrap justify-center gap-10 items-stretch">
          {options.map((option) => (
            <InsuranceInfoCard
              key={option.id}
              title={t(`${option.id}.title`)}
              description={t(`${option.id}.desc`)}
              cta={t("learn_more")}
              icon={option.icon}
              imageUrl={option.imageUrl}
              isRTL={isRTL}
              link={`/${locale}/Personal/Insurance/${option.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
