"use client";

import React from "react";

interface BankCard3DProps {
  type: string;
  cardNumber: string;
  holderName: string;
  // ألوان متدرجة للبطاقة (CSS Gradient string)
  bgGradient: string;
  // لون الحدود/اللمعان
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
    <div className="card-container group">
      <div className="main-container">
        <div className="border-glow">
          <div className="card">
            <div className="shadow-effect">
              <div className="content">
                {/* النصوص والشعارات */}
                <p className="bank-name text-xs md:text-sm font-bold tracking-widest opacity-90">
                  ELITE BANK
                </p>
                <p className="card-type text-[10px] uppercase tracking-widest opacity-80">
                  {type}
                </p>

                {/* الشريحة (Chip) - SVG */}
                <svg
                  className="chip"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
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

                {/* شعار ماستركارد (دوائر CSS) */}
                <div className="master-logo">
                  <div className="circle red"></div>
                  <div className="circle orange"></div>
                </div>

                <p className="card-number font-mono">{cardNumber}</p>
                <p className="card-holder font-mono">{holderName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الستايلات المستوحاة من الكود الأصلي مع تحسينات */}
      <style jsx>{`
        .card-container {
          perspective: 1000px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .main-container {
          position: relative;
          width: 100%;
          max-width: 320px;
          aspect-ratio: 1.58;
          border-radius: 16px;
          transition:
            transform 0.4s ease-out,
            box-shadow 0.4s ease;
        }

        /* تأثير الحركة عند التحويم */
        .group:hover .main-container {
          transform: rotateX(5deg) rotateY(5deg) scale(1.05) translateY(-10px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
        }

        .border-glow {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px; /* سماكة الحدود */
          background: ${accentColor}; /* لون الحدود ديناميكي */
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .card {
          width: 100%;
          height: 100%;
          border-radius: 14px;
          /* الخلفية الديناميكية */
          background: ${bgGradient};
          position: relative;
          overflow: hidden;
        }

        /* طبقة اللمعان والظل */
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
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
        }

        .content {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 20px;
          color: white;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        }

        .bank-name {
          position: absolute;
          top: 20px;
          left: 20px;
        }

        .card-type {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .chip {
          position: absolute;
          top: 60px;
          left: 20px;
          width: 45px;
          height: 45px;
        }

        .master-logo {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
        }
        .circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          opacity: 0.8;
        }
        .red {
          background: #eb001b;
          margin-right: -10px;
        }
        .orange {
          background: #f79e1b;
        }

        .card-number {
          position: absolute;
          bottom: 50px;
          left: 20px;
          font-size: 1.1rem;
          letter-spacing: 2px;
        }

        .card-holder {
          position: absolute;
          bottom: 20px;
          left: 20px;
          font-size: 0.8rem;
          text-transform: uppercase;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
