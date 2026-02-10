"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

interface InsuranceInfoCardProps {
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
  imageUrl: string;
  isRTL: boolean;
  link: string; // رابط صفحة تفاصيل التأمين
}

const InsuranceInfoCard = ({
  title,
  description,
  cta,
  icon,
  imageUrl,
  isRTL,
  link,
}: InsuranceInfoCardProps) => {
  return (
    <StyledWrapper $isRTL={isRTL}>
      <div className="card">
       

        {/* صورة الخدمة (مثلاً صورة سيارة مؤمنة أو عائلة) */}
        <div className="profile-pic">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="insurance-image-next"
            sizes="(max-width: 768px) 100vw, 380px"
          />
        </div>

        {/* الجزء السفلي (الهوية البصرية للتأمين) */}
        <div className="bottom">
          <div className="content">
            <span className="name">{title}</span>
            <span className="about-me">{description}</span>
          </div>

          <div className="bottom-bottom">
            <Link href={link} style={{ textDecoration: "none", width: "100%" }}>
              <button className="button">{cta}</button>
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $isRTL: boolean }>`
  .card {
    /* تم تصغير العرض قليلاً من 380px إلى 350px ليناسب توزيع الـ 3 كروت */
    width: 350px;
    height: 450px;
    background: white;
    /* باقي التنسيقات كما هي... */
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: rgba(0, 33, 71, 0.08) 0px 40px 30px -20px;
    transition: all 0.5s ease-in-out;
    border: 1px solid #f1f5f9;
    overflow: hidden;
    direction: ${(props) => (props.$isRTL ? "rtl" : "ltr")};
  }
  
  .card .category-icon {
    position: absolute;
    right: ${(props) => (props.$isRTL ? "auto" : "2rem")};
    left: ${(props) => (props.$isRTL ? "2rem" : "auto")};
    top: 1.4rem;
    background: white;
    padding: 10px;
    border-radius: 12px;
    border: none;
    color: #002147;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0.2s;
    background: #f8fafc;
  }

  .insurance-image-next {
    transition: all 0.5s ease-in-out !important;
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #002147; /* لون البنك الأساسي */
    top: 68%;
    border-radius: 29px;
    z-index: 2;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }

  .card .bottom .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.4rem;
    color: white;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
    max-height: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease-in-out;
  }

  .card .bottom .bottom-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-top: 1rem;
  }

  .card .bottom .bottom-bottom .button {
    width: 100%;
    background: white;
    color: #002147;
    border: none;
    border-radius: 16px;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card .bottom .bottom-bottom .button:hover {
    background: #f8fafc;
    transform: translateY(-2px);
  }

  /* تأثيرات الـ Hover */
  .card:hover .bottom {
    top: 25%;
    border-radius: 60px 29px 29px 29px;
  }

  .card:hover .content .about-me {
    max-height: 200px;
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  }

  .card:hover .profile-pic {
    width: 120px;
    height: 120px;
    top: 20px;
    border-radius: 50%;
    z-index: 3;
    border: 4px solid white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export default InsuranceInfoCard;
