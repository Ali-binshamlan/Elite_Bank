"use client";

import styled from "styled-components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, CheckCircle, FileCheck } from "lucide-react";
import {
  financeConfig,
  featureIcons,
  requirementIcons,
  FinanceType,
} from "@/app/data/financeData";

interface FinanceDetailsViewProps {
  locale: string;
  type: FinanceType;
}

export default function FinanceDetailsView({
  locale,
  type,
}: FinanceDetailsViewProps) {
  const t = useTranslations(`FinanceDetails.${type}`);
  const tCommon = useTranslations("FinanceDetails.Common");
  const tGeneral = useTranslations("Common");
  const isRTL = locale === "ar";


  return (
    <main className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#EFF4FA]">
        <div
          className={`absolute top-0 bottom-0 w-[55%] z-0 ${
            isRTL
              ? "left-0 rounded-br-[400px] md:rounded-br-[550px]"
              : "right-0 rounded-bl-[400px] md:rounded-bl-[550px]"
          } hidden lg:block overflow-hidden shadow-2xl`}
        >
          <Image
            src={theme.heroImage}
            alt={t("Hero.title")}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
            sizes="60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-start">
              <h1 className="text-4xl md:text-6xl font-black text-[#002147] leading-tight">
                {t("Hero.title")}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t("Hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#002147] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#003366] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                  {tGeneral("applyNow")}
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. المميزات (Stacked Text Cards) */}
      {/* ========================================= */}
      <StyledFeaturesStack $isRTL={isRTL}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="section-title">{tCommon("whyChoose")}</h2>
            <p className="section-subtitle">{tCommon("whyChooseDesc")}</p>
          </div>

          <div className="features-grid">
            {[0, 1, 2, 3].map((idx) => {
              const IconComponent = icons[idx] || CheckCircle;
              return (
                <div key={idx} className="feature-item">
                  <div className="stack">
                    <div className="card-stack">
                      <div className="inner-content">
                        {/* الأيقونة في الأعلى */}
                        <div className="icon-wrapper">
                          <IconComponent
                            size={32}
                            className={theme.primaryColor}
                            strokeWidth={2}
                          />
                        </div>

                        {/* النصوص داخل الكارد */}
                        <h3 className="feature-card-title">
                          {t(`Features.${idx}.title` as any)}
                        </h3>
                        <p className="feature-card-desc">
                          {t(`Features.${idx}.desc` as any)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </StyledFeaturesStack>

      {/* 3. المستندات والشروط */}
      <section className="py-24 bg-[#002147] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="100" cy="0" r="50" stroke="white" strokeWidth="0.5" />
            <circle cx="0" cy="100" r="70" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                {tCommon("requirementsTitle")}
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {tCommon("requirementsDesc")}
              </p>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((item, i) => {
                  const ReqIcon = requirementIcons[i] || FileCheck;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <ReqIcon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">
                          {tCommon(`req${item}.title` as any)}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {tCommon(`req${item}.desc` as any)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* نموذج الطلب المصغر */}
            <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  {tCommon("formTitle")}
                </h3>
                <p className="text-gray-300">{tCommon("formDesc")}</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={tCommon("inputs.name")}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white w-full"
                  />
                  <input
                    type="text"
                    placeholder={tCommon("inputs.phone")}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder={tCommon("inputs.salary")}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white w-full"
                />
                <button className="w-full bg-white text-[#002147] font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors">
                  {tCommon("inputs.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const StyledFeaturesStack = styled.section<{ $isRTL: boolean }>`
  padding: 6rem 0;
  background-color: #ffffff;
  direction: ${(props) => (props.$isRTL ? "rtl" : "ltr")};

  .section-title {
    font-size: 2.5rem;
    font-weight: 900;
    color: #002147;
    margin-bottom: 1rem;
  }

  .section-subtitle {
    color: #64748b;
    font-size: 1.1rem;
  }

  .features-grid {
    display: grid;
    /* ✅ فرض 4 أعمدة متساوية في الشاشات الكبيرة */
    grid-template-columns: repeat(4, 1fr); 
    gap: 2rem; /* تقليل الفجوة قليلاً لتناسب الصف الواحد */
    width: 100%;
  }

  .feature-item {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .stack {
    width: 100%;
    max-width: 280px; /* تقليل العرض الأقصى ليتناسب 4 في الصف */
    transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &:hover {
      transform: translateY(-10px);
      .card-stack:before {
        transform: translateY(-5%) rotate(-6deg);
        background-color: #f1f5f9;
      }
      .card-stack:after {
        transform: translateY(5%) rotate(6deg);
        background-color: #f8fafc;
      }
    }
  }

  .card-stack {
    min-height: 250px; 
    border: 3px solid #002147;
    background-color: #fff;
    position: relative;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 1;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      border: 3px solid #002147;
      background-color: #fff;
      transform-origin: center center;
      z-index: -1;
      transition: 0.3s ease;
      top: 0;
      left: 0;
    }

    &:before { transform: translateY(-2%) rotate(-4deg); }
    &:after { transform: translateY(2%) rotate(4deg); }
  }

  .inner-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  .icon-wrapper {
    width: 55px;
    height: 55px;
    background: #f1f5f9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    border: 2px solid #002147;
  }

  .feature-card-title {
    font-size: 1.1rem; /* تصغير الخط قليلاً ليناسب العرض الجديد */
    font-weight: 800;
    color: #002147;
    line-height: 1.3;
  }

  .feature-card-desc {
    font-size: 0.85rem;
    color: #64748b;
    line-height: 1.5;
  }

  /* ✅ التجاوب مع الشاشات المتوسطة والصغيرة */
  @media (max-width: 1200px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr); /* 2 في الصف للأجهزة المتوسطة */
      gap: 4rem 2rem;
    }
  }

  @media (max-width: 640px) {
    .features-grid {
      grid-template-columns: 1fr; /* 1 في الصف للجوال */
      gap: 5rem;
    }
  }
`;