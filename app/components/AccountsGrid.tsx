"use client";

import styled from "styled-components";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing"; // تأكد من صحة مسار الاستيراد في مشروعك
import {
  ArrowUpRight,
  Banknote,
  PiggyBank,
  TrendingUp,
  Baby,
} from "lucide-react";

// ✅ 1. تعريف الأنماط الخلفية أولاً (خارج المكون لتجنب ReferenceError)
const BackgroundPatterns: Record<string, React.ReactNode> = {
  waves: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute inset-0 text-white"
    >
      <path
        d="M0,192 C120,320 240,64 360,192 L400,208 L400,400 L0,400 Z"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path
        d="M0,256 C120,384 240,128 360,256 L400,272 L400,400 L0,400 Z"
        fill="currentColor"
        fillOpacity="0.07"
      />
    </svg>
  ),
  dots: (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 text-white opacity-10"
    >
      <pattern
        id="dotPattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="2" fill="currentColor" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  ),
};

const accountsList = [
  {
    id: "current",
    icon: Banknote,
    color: "#002147",
    pattern: "waves",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000",
    href: "/Personal/Accounts/current",
  },
  {
    id: "savings",
    icon: PiggyBank,
    color: "#00418c",
    pattern: "dots",
    img: "https://images.unsplash.com/photo-1616077168712-fc6c788db4af?q=80&w=2000",
    href: "/Personal/Accounts/savings",
  },
  {
    id: "elite",
    icon: TrendingUp,
    color: "#dda36c",
    pattern: "waves",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000",
    href: "/Personal/Accounts/elite",
  },
  {
    id: "minors",
    icon: Baby,
    color: "#67aaf7",
    pattern: "dots",
    img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2000",
    href: "/Personal/Accounts/minors",
  },
];

export default function BentoAccountsGrid() {
  const t = useTranslations("menu.accounts");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <StyledBentoWrapper $isRTL={isRTL}>
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="bento-grid">
          {accountsList.map((acc, index) => {
            const area = String.fromCharCode(97 + index);
            const Icon = acc.icon;
            const SelectedPattern =
              BackgroundPatterns[acc.pattern] || BackgroundPatterns.waves;

            return (
              <motion.div
                key={acc.id}
                initial="rest"
                whileHover="hover"
                className={`bento-card area-${area}`}
                style={{ gridArea: area }}
              >
                {/* رابط يغطي الكارت بالكامل لتسهيل تجربة المستخدم */}
                <Link href={acc.href} className="absolute inset-0 z-30" />

                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                  className="absolute inset-0"
                >
                  <Image
                    src={acc.img}
                    alt={acc.id}
                    fill
                    className="object-cover"
                  />
                  <div className="pattern-overlay">{SelectedPattern}</div>
                  <motion.div
                    className="gradient-overlay"
                    variants={{
                      rest: {
                        opacity: 0.6,
                        background:
                          "linear-gradient(to top, rgba(0,20,40,0.9), transparent)",
                      },
                      hover: {
                        opacity: 0.9,
                        background: `linear-gradient(to top, ${acc.color}, transparent)`,
                      },
                    }}
                  />
                </motion.div>

                <div className="card-content">
                  <div className="top-row">
                    <motion.div
                      variants={{
                        rest: {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          color: "#fff",
                        },
                        hover: { backgroundColor: "#fff", color: acc.color },
                      }}
                      className="icon-box"
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div className="arrow-box">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <div className="text-box">
                    <h3 className="card-title">{t(`items.${acc.id}`)}</h3>
                    <motion.div
                      variants={{
                        rest: { opacity: 0, height: 0 },
                        hover: { opacity: 1, height: "auto" },
                      }}
                      className="overflow-hidden"
                    >
                      {/* وصف مخصص أو مترجم */}
                      <p className="card-desc">
                        {isRTL
                          ? "إدارة مرنة وحلول ذكية تلبي طموحاتك المالية."
                          : "Smart and flexible management for your financial goals."}
                      </p>

                      {/* زر اكتشف المزيد المفعل */}
                      <Link
                        href={acc.href}
                        className="relative z-40 block w-fit"
                      >
                        <button
                          className="cta-button"
                          style={{ color: acc.color }}
                        >
                          {isRTL ? "اكتشف المزيد" : "Explore More"}
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </StyledBentoWrapper>
  );
}

const StyledBentoWrapper = styled.div<{ $isRTL: boolean }>`
  direction: ${(props) => (props.$isRTL ? "rtl" : "ltr")};

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 320px);
    grid-template-areas:
      "a b b"
      "a c d";
    gap: 20px;
  }

  .bento-grid:hover > .bento-card:not(:hover) {
    filter: blur(8px);
    transform: scale(0.98);
    opacity: 0.6;
  }

  .bento-card {
    position: relative;
    border-radius: 2.5rem;
    overflow: hidden;
    background: #002147;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card-content {
    position: relative;
    z-index: 10;
    height: 100%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: none; /* للسماح للرابط الخلفي باستلام النقرات */
  }

  .text-box {
    pointer-events: auto; /* إعادة تفعيل النقرات للنصوص والأزرار */
  }

  .icon-box {
    width: 54px;
    height: 54px;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .card-title {
    color: white;
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  .card-desc {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .cta-button {
    background: white;
    padding: 0.6rem 1.8rem;
    border-radius: 1.2rem;
    font-weight: 800;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .gradient-overlay {
    position: absolute;
    inset: 0;
  }
  .pattern-overlay {
    position: absolute;
    inset: 0;
    mix-blend-mode: overlay;
  }
  .top-row {
    display: flex;
    justify-content: space-between;
  }
  .arrow-box {
    color: white;
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "a b" "c d";
      grid-template-rows: repeat(2, 350px);
    }
  }

  @media (max-width: 768px) {
    .bento-grid {
      display: flex;
      flex-direction: column;
    }
    .bento-card {
      height: 320px;
    }
  }
`;
