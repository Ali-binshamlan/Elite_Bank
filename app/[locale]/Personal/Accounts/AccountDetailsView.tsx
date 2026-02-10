"use client";
import styled from "styled-components";

import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FileText,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  Globe,
  Lock,
  Crown,
  Phone,
  MapPin,
  Laptop,
  TrendingUp,
  CreditCard,
  Users,
} from "lucide-react";
import AppDownloadSection from "@/app/components/AppDownloadSection";
import FAQSection from "@/app/components/FAQSection";

interface AccountDetailsProps {
  locale: string;
  type: string;
}

export default function AccountDetailsView({
  locale,
  type,
}: AccountDetailsProps) {
  const t = useTranslations("AccountDetails");
  const tCommon = useTranslations("Common");
  const isRTL = locale === "ar";

  // إعدادات الصور والألوان لكل حساب
  const accountConfig: any = {
    current: {
      color: "bg-[#002147]",
      text: "text-[#002147]",
      border: "border-[#002147]",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000",
    },
    savings: {
      color: "bg-[#F5A623]",
      text: "text-[#F5A623]",
      border: "border-[#F5A623]",
      img: "https://images.unsplash.com/photo-1616077168712-fc6c788db4af?q=80&w=2000",
    },
    elite: {
      color: "bg-[#111111]",
      text: "text-[#111111]",
      border: "border-[#111111]",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000",
    },
    minors: {
      color: "bg-[#00C49F]",
      text: "text-[#00C49F]",
      border: "border-[#00C49F]",
      img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2000",
    },
  };

  const currentConfig = accountConfig[type] || accountConfig.current;

  // تحضير بيانات المميزات
  const benefitsData = [0, 1, 2, 3].map((idx) => ({
    id: `benefit-${idx}`,
    icon: idx === 0 ? Star : idx === 1 ? ShieldCheck : idx === 2 ? Zap : Lock,
    title: t(`${type}.features.${idx}` as any),
  }));

  // بيانات بطاقات التواصل الثلاثة


  return (
    <main className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* ========================================= */}
      {/* 1. Hero Section */}
      {/* ========================================= */}
      <section className="relative h-[85vh] min-h-[600px]  flex items-center overflow-hidden bg-white">
        {/* 2. حاوية الصورة - ملاصقة تماماً للحافة */}
        <div
          className={`absolute top-0 bottom-0 w-[55%] z-10 hidden lg:block ${
            isRTL ? "left-0" : "right-0"
          }`}
          style={{
            // الحساب الرياضي: 45/55 = 81.8% لضمان تطابق الميلان مع الـ SVG تماماً
            clipPath: isRTL
              ? "polygon(0 0, 100% 0, 81.8% 100%, 0% 100%)"
              : "polygon(18.2% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <Image
            src={currentConfig.img}
            alt={t(`${type}.title`)}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
            sizes="60vw"
            // لضمان عدم وجود فجوة بيضاء عند الحافة الخارجية
            style={{ objectPosition: isRTL ? "left" : "right" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/40 to-transparent"></div>
        </div>

        {/* 3. المحتوى النصي داخل الحاوية القياسية */}
        <div className="container mx-auto  px-4 md:px-8 relative z-20 h-full">
          <div className="flex flex-col lg:flex-row md:mt-10 mt-0 items-center h-full">
            <div className="w-full lg:w-1/2 pt-20 lg:pt-0  space-y-8">
              <h1 className="text-5xl md:text-7xl font-black text-[#002147] leading-[1.1]">
                {t(`${type}.title`)}
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                {t(`${type}.desc`)}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#002147] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:bg-[#003366] active:scale-95 flex items-center gap-3">
                  {tCommon("applyNow")}
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. المميزات (Benefits) */}
      {/* ========================================= */}
      <StyledFeaturesStack $isRTL={isRTL}>
        {/* خلفية الـ SVG المزخرفة */}
        <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
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
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* الجزء الجانبي الثابت (Sticky Header) */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="section-title">{tCommon("featuresTitle")}</h2>
                <div className="title-underline"></div>
                <div className="mt-10 opacity-10 hidden lg:block">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
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

            {/* شبكة المميزات (Features Grid) */}
            <div className="w-full lg:w-2/3">
              <div className="features-grid">
                {benefitsData.map((item, index) => (
                  <div key={item.id} className="stack-container group">
                    <div className="card-stack">
                      <div className={`inner-content ${currentConfig.border}`}>
                        <div className="icon-wrapper">
                          <item.icon size={28} />
                        </div>
                        <div className="text-wrapper">
                          <p className="feature-number">
                            {isRTL
                              ? `ميزة ${index + 1}`
                              : `Feature ${index + 1}`}
                          </p>
                          <h3 className="feature-card-title">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </StyledFeaturesStack>

      {/* ========================================= */}
      {/* 3. المتطلبات (تم إصلاح الأيقونات) */}
      {/* ========================================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className={`absolute top-20 ${isRTL ? "left-0" : "right-0"} w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50`}
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* 1. العنوان والوصف الجانبي */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-5xl font-black text-[#002147] mb-4 leading-tight">
                  {tCommon("requirements")}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {isRTL
                    ? "لضمان تجربة سلسة وسريعة، يرجى التأكد من توفر المستندات والشروط التالية قبل البدء في عملية فتح الحساب."
                    : "To ensure a smooth experience, please ensure the following documents and conditions are met before opening an account."}
                </p>

                <div className="hidden lg:block p-6 bg-[#F8FAFC] rounded-2xl border border-dashed border-gray-200">
                  <p className="text-sm text-gray-500 font-medium flex gap-2">
                    <span className="text-blue-500">ℹ️</span>
                    {isRTL
                      ? "يمكنك استكمال الإجراءات عبر تطبيق النخبة أو زيارة الفرع في حال واجهت أي صعوبة."
                      : "You can complete the procedures via the Elite App or visit a branch if you face any difficulty."}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. شبكة بطاقات المتطلبات */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { Icon: ShieldCheck, key: 0 }, // ✅ تم تغيير icon إلى Icon (حرف كبير)
                  { Icon: MapPin, key: 1 },
                  { Icon: Users, key: 2 },
                  { Icon: Phone, key: 3 },
                ].map((req, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden bg-gray-100 p-8 rounded-[2rem] border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500`}
                  >
                    {/* SVG Background */}
                    <div className="absolute right-0 top-0 w-32 h-32 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none">
                        <path d="M0 0H100V100H0z" fill="none" />
                        <circle
                          cx="90"
                          cy="10"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={currentConfig.text}
                        />
                        <circle
                          cx="90"
                          cy="10"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={currentConfig.text}
                        />
                        <circle
                          cx="90"
                          cy="10"
                          r="60"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          className={currentConfig.text}
                        />
                      </svg>
                    </div>

                    {/* أيقونة المتطلب */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-[#002147] bg-opacity-5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {/* ✅ استدعاء الأيقونة كـ Component */}
                      <req.Icon size={28} className="text-white" />
                    </div>

                    {/* النصوص */}
                    <h3 className="text-xl font-bold text-[#002147] mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {t(`RequirementsList.${index}.title` as any)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {t(`RequirementsList.${index}.desc` as any)}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-${currentConfig.color.replace("bg-", "")} to-transparent w-0 group-hover:w-full transition-all duration-700 opacity-50`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. قسم التطبيق والتواصل */}
      {/* ========================================= */}
      <AppDownloadSection locale="{locale}" />
      <FAQSection />
    </main>
  );
}
const StyledFeaturesStack = styled.section<{ $isRTL: boolean }>`
  padding: 8rem 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
  direction: ${(props) => (props.$isRTL ? "rtl" : "ltr")};

  .section-title {
    font-size: 3.5rem;
    font-weight: 900;
    color: #002147;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .title-underline {
    width: 80px;
    height: 8px;
    border-radius: 99px;
    background-color: #002147;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .stack-container {
    perspective: 1000px;
  }

  .card-stack {
    height: 280px;
    background-color: #002147; /* اللون الخلفي للطبقات */
    position: relative;
    border-radius: 2rem;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

    /* الطبقات الخلفية */
    &:before,
    &:after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 2rem;
      border: 2px solid #002147;
      background-color: #fff;
      z-index: -1;
      transition: 0.4s ease;
    }

    &:before {
      transform: rotate(-3deg);
    }
    &:after {
      transform: rotate(3deg);
      opacity: 0.5;
    }

    &:hover {
      transform: translateY(-10px);
      &:before {
        transform: translateY(-12px) rotate(-6deg);
        background-color: #f1f5f9;
      }
      &:after {
        transform: translateY(12px) rotate(6deg);
      }
    }
  }

  .inner-content {
    height: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    border-radius: 2rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #e2e8f0;
    transition: 0.3s ease;

    &:hover {
      background-color: #ffffff;
    }
  }

  .icon-wrapper {
    width: 64px;
    height: 64px;
    background-color: rgba(0, 33, 71, 0.05);
    color: #002147;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s ease;

    .group:hover & {
      background-color: #002147;
      color: #fff;
      transform: scale(1.1) rotate(10deg);
    }
  }

  .feature-number {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #64748b;
    margin-bottom: 0.5rem;
  }

  .feature-card-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: #002147;
    line-height: 1.3;
  }

  @media (max-width: 1024px) {
    .section-title {
      font-size: 2.5rem;
    }
    .features-grid {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }
`;