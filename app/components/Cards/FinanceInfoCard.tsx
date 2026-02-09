"use client";

import React from "react";
import styled from "styled-components";
// ✅ استيراد Link
import Link from "next/link";
import Image from "next/image";

interface FinanceInfoCardProps {
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
  imageUrl: string;
  isRTL: boolean;
  link: string; // ✅ إضافة خاصية الرابط
}

const FinanceInfoCard = ({
  title,
  description,
  cta,
  icon,
  imageUrl,
  isRTL,
  link, // استقبال الرابط
}: FinanceInfoCardProps) => {
  return (
    <StyledWrapper $isRTL={isRTL}>
      <div className="card">
        {/* زر الأيقونة العلوية */}
        <button className="mail">
          <div className="icon-container">{icon}</div>
        </button>

        {/* الصورة */}
        <div className="profile-pic">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="profile-image-next"
            sizes="(max-width: 768px) 100vw, 380px"
          />
        </div>

        {/* الجزء السفلي (الأزرق) */}
        <div className="bottom">
          <div className="content">
            <span className="name">{title}</span>
            <span className="about-me">{description}</span>
          </div>

          <div className="bottom-bottom">
            {/* ✅ تغليف الزر برابط للتوجيه */}
            <Link href={link} style={{ textDecoration: "none" }}>
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
    width: 380px;
    height: 450px;
    background: white;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: rgba(0, 33, 71, 0.1) 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    direction: ${(props) => (props.$isRTL ? "rtl" : "ltr")};
  }

  .card .mail {
    position: absolute;
    right: ${(props) => (props.$isRTL ? "auto" : "2rem")};
    left: ${(props) => (props.$isRTL ? "2rem" : "auto")};
    top: 1.4rem;
    background: transparent;
    border: none;
    color: #002147;
    z-index: 10;
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    right: ${(props) => (props.$isRTL ? "3px" : "auto")};
    left: ${(props) => (props.$isRTL ? "auto" : "3px")};
    border-radius: 29px;
    z-index: 1;
    border: 0px solid #002147;
    overflow: hidden;
    transition:
      all 0.5s ease-in-out 0.2s,
      z-index 0.5s ease-in-out 0.2s;
    background: #f8fafc;
    position: relative;
  }

  .profile-image-next {
    transition: all 0.5s ease-in-out !important;
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #002147;
    top: 65%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px 0px inset;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }

  .card .bottom .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  .card .bottom .content .name {
    display: block;
    font-size: ${(props) => (props.$isRTL ? "1.6rem" : "1.3rem")};
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
    opacity: 1;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: ${(props) => (props.$isRTL ? "1rem" : "0.85rem")};
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    max-height: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease-in-out;
    overflow: hidden;
  }

  .card .bottom .bottom-bottom {
    opacity: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: auto;
    padding-top: 1rem;
  }

  .card .bottom .bottom-bottom .button {
    background: white;
    color: #002147;
    border: none;
    border-radius: 20px;
    font-size: ${(props) => (props.$isRTL ? "0.9rem" : "0.8rem")};
    font-weight: bold;
    padding: 0.7rem 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition:
      transform 0.2s,
      background 0.2s;
    flex-direction: ${(props) => (props.$isRTL ? "row" : "row-reverse")};
  }

  .card .bottom .bottom-bottom .button:hover {
    background: #f0f0f0;
    transform: scale(1.05);
  }

  .card:hover {
    border-top-left-radius: ${(props) => (props.$isRTL ? "32px" : "55px")};
    border-top-right-radius: ${(props) => (props.$isRTL ? "55px" : "32px")};
  }

  .card:hover .bottom {
    top: 25%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
  }

  .card:hover .content .about-me {
    max-height: 200px;
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  }

  .card:hover .profile-pic {
    width: 130px;
    height: 130px;
    aspect-ratio: 1;
    top: 20px;
    right: ${(props) => (props.$isRTL ? "20px" : "auto")};
    left: ${(props) => (props.$isRTL ? "auto" : "20px")};
    border-radius: 50%;
    z-index: 3;
    border: 5px solid #002147;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px 0px;
    transition:
      all 0.5s ease-in-out,
      z-index 0.5s ease-in-out 0.1s;
    background: white;
  }
`;

export default FinanceInfoCard;
