"use client";

import React from "react";
import Image from "next/image";

interface BankCard3DProps {
  type: string;
  cardNumber: string;
  holderName: string;
  bgGradient: string;
  accentColor: string;
}

export default function BankCard3D({
  type,
  cardNumber,
  holderName,
  bgGradient,
  accentColor,
}: BankCard3DProps) {
  return (
    <div className="card-container group" dir="ltr">
      <div className="main-container">
        {/* 1. طبقة البطاقة والمحتوى */}
        <div className="card">
          {/* ✅ طبقة اللمعة المتحركة الجديدة */}
          <div className="card-shine-effect"></div>

          <div className="shadow-effect">
            <div className="content">
              {/* Header: Logo & Type */}
              <div className="flex justify-between items-start">
                <div className="relative w-36 h-12">
                  <Image
                    src="/Logo.png"
                    alt="Elite Bank"
                    fill
                    className="object-contain object-left brightness-0 invert opacity-90"
                  />
                </div>

                <p className="card-type text-xs uppercase tracking-widest opacity-80 mt-1 font-sans">
                  {type}
                </p>
              </div>

              {/* Chip SVG */}
              <svg
                className="chip mt-6 mb-6"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 50 50"
              >
                <image
                  width={50}
                  height={50}
                  x={0}
                  y={0}
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOYfEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSWekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GSe0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOWekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bfu3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWuafUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrbtnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOhg0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU/f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dEorDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2NgGAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVgOkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3dI2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6alKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkIJVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0FqBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGmBSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCETamiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdCS24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
                />
              </svg>

              {/* Mastercard Logo */}
              <div className="master-logo absolute bottom-6 right-6 flex">
                <div className="circle red bg-[#eb001b] z-10 -mr-3"></div>
                <div className="circle orange bg-[#f79e1b]"></div>
              </div>

              {/* Info */}
              <div className="mt-auto">
                <p className="card-number font-mono text-base md:text-xl tracking-widest mb-2 drop-shadow-md text-left">
                  {cardNumber}
                </p>
                <div className="flex justify-between items-end">
                  <p className="card-holder font-mono text-sm md:text-base uppercase opacity-90 tracking-wider text-left">
                    {holderName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. طبقة الحدود المضيئة */}
        <div className="border-glow"></div>
      </div>

      <style jsx>{`
        .card-container {
          perspective: 1100px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .main-container {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 1.58;
          border-radius: 20px;
          transition:
            transform 0.4s ease-out,
            box-shadow 0.4s ease;
        }

        .group:hover .main-container {
          transform: rotateX(5deg) rotateY(5deg) scale(1.02) translateY(-10px);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5);
        }

        .card {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          background: ${bgGradient};
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        /* ✅ كود اللمعة المتحركة المستوحى من المثال */
        .card-shine-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background-image: linear-gradient(
            -80deg,
            hsla(0, 0%, 100%, 0) 55%,
            hsla(0, 0%, 100%, 0.3) 65%,
            /* قوة اللمعة */ hsla(0, 0%, 100%, 0) 80%
          );
          z-index: 2;
          animation: shine-animation 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes shine-animation {
          from {
            transform: translate3d(-100%, 0, 0);
          }
          to {
            transform: translate3d(50%, 0, 0);
          }
        }

        .border-glow {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 2px;
          background: ${accentColor};
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 2;
        }

        .shadow-effect {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(255, 255, 255, 0.2) 0%,
              transparent 50%
            ),
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 100%
            );
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.2);
          z-index: 3; /* فوق اللمعة أو تحتها حسب الرغبة */
        }

        .content {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 20px;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          z-index: 4;
        }

        .circle {
          width: 35px;
          height: 45px;
          border-radius: 50%;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
