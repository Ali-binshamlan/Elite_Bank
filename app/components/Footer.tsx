"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing"; // استخدام Link المخصص
import { useTranslations, useLocale } from "next-intl"; // استيراد المكتبة
import { Phone, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  const currentYear = new Date().getFullYear();

  // إعادة بناء هيكل البيانات باستخدام الترجمة
  const footerData = {
    personal: {
      title: t("sections.personal.title"),
      links: [
        { name: t("sections.personal.links.current"), href: "#" },
        { name: t("sections.personal.links.savings"), href: "#" },
        { name: t("sections.personal.links.cards"), href: "#" },
        { name: t("sections.personal.links.finance"), href: "#" },
        { name: t("sections.personal.links.mortgage"), href: "#" },
      ],
    },
    business: {
      title: t("sections.business.title"),
      links: [
        { name: t("sections.business.links.accounts"), href: "#" },
        { name: t("sections.business.links.finance"), href: "#" },
        { name: t("sections.business.links.pos"), href: "#" },
        { name: t("sections.business.links.payroll"), href: "#" },
        { name: t("sections.business.links.trade"), href: "#" },
      ],
    },
    digital: {
      title: t("sections.digital.title"),
      links: [
        { name: t("sections.digital.links.app"), href: "#" },
        { name: t("sections.digital.links.online"), href: "#" },
        { name: t("sections.digital.links.wallet"), href: "#" },
        { name: t("sections.digital.links.rewards"), href: "#" },
      ],
    },
    about: {
      title: t("sections.about.title"),
      links: [
        { name: t("sections.about.links.overview"), href: "#" },
        { name: t("sections.about.links.board"), href: "#" },
        { name: t("sections.about.links.investors"), href: "#" },
        { name: t("sections.about.links.careers"), href: "#" },
      ],
    },
    legal: {
      links: [
        { name: t("bottom.legal.terms"), href: "#" },
        { name: t("bottom.legal.privacy"), href: "#" },
        { name: t("bottom.legal.security"), href: "#" },
        { name: t("bottom.legal.sitemap"), href: "#" },
      ],
    },
  };

  return (
    <footer
      className="bg-[#002147] text-white overflow-hidden relative font-sans"
      dir={dir}
    >
      {/* BACKGROUND SVGs & EFFECTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#002147] via-[#001835] to-[#001229] opacity-90 z-0" />
        <svg
          className="absolute bottom-0 left-0 w-full h-[600px] opacity-[0.07] z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#4F95FF"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[80px]"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 lg:gap-8 mb-16">
          {/* 1. Brand Section & Socials */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6 items-center md:items-start text-center md:text-start">
            <Link href="/" className="inline-block w-fit group">
              <div className="flex items-center gap-2">
                <Image
                  src="/Logo.png"
                  alt="Elite Bank"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>

            <p className="text-blue-100/70 text-sm leading-relaxed max-w-sm font-light">
              {t("brandDesc")}
            </p>

            {/* Social Icons (Static) */}
            <div className="flex flex-col gap-2 mt-2" dir="ltr">
              <div className="flex flex-row gap-2">
                {/* Instagram */}
                <button className="w-10 h-10 outline-none border-none bg-white rounded-[20px_4px_4px_4px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#cc39a4] group flex items-center justify-center">
                  <svg
                    className="fill-[#cc39a4] group-hover:fill-white transition-colors"
                    height={20}
                    width={20}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                {/* X */}
                <button className="w-10 h-10 outline-none border-none bg-white rounded-[4px_20px_4px_4px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-black group flex items-center justify-center">
                  <svg
                    className="fill-black group-hover:fill-white transition-colors"
                    height={18}
                    width={18}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-row gap-2">
                {/* LinkedIn */}
                <button className="w-10 h-10 outline-none border-none bg-white rounded-[4px_4px_4px_20px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#0077b5] group flex items-center justify-center">
                  <svg
                    className="fill-[#0077b5] group-hover:fill-white transition-colors"
                    height={18}
                    width={18}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                {/* Gmail */}
                <button className="w-10 h-10 outline-none border-none bg-white rounded-[4px_4px_20px_4px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#EA4335] group flex items-center justify-center">
                  <svg
                    className="fill-[#EA4335] group-hover:fill-white transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {[
            footerData.personal,
            footerData.business,
            footerData.digital,
            footerData.about,
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-base mb-6 text-white flex items-center justify-center md:justify-start gap-2">
                <span className="w-6 h-0.5 bg-blue-500 rounded-full"></span>
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-blue-100/60 hover:text-white text-[14px] transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group"
                    >
                      <span className="w-0 h-px bg-white group-hover:w-3 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 5. NEWSLETTER & CONTACT */}
        <div className="w-full mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Newsletter Text */}
              <div className="lg:w-1/3 text-center lg:text-start">
                <h3 className="font-bold text-white text-xl mb-2">
                  {t("newsletter.title")}
                </h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  {t("newsletter.desc")}
                </p>
              </div>

              {/* Newsletter Input */}
              <div className="w-full lg:w-1/3 relative">
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  className={`w-full bg-[#001229]/50 border border-blue-500/30 rounded-xl py-3 px-4 ${
                    isRTL ? "pl-14" : "pr-14"
                  } text-sm text-white placeholder:text-blue-300/30 focus:outline-none focus:border-blue-400 focus:bg-[#001229]/80 transition-all shadow-inner`}
                />
                <button
                  className={`absolute top-1.5 bottom-1.5 ${
                    isRTL ? "left-1.5" : "right-1.5"
                  } bg-blue-600 hover:bg-blue-500 text-white w-12 rounded-lg flex items-center justify-center transition-colors shadow-lg shadow-blue-600/20`}
                >
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>
              </div>

              {/* Contacts */}
              <div className="lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-2 w-full sm:w-auto">
                <a
                  href="tel:920000000"
                  className="flex items-center justify-center lg:justify-start gap-3 text-sm text-blue-100 hover:text-white transition-colors group/item bg-white/5 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none border border-white/5 lg:border-none"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                    <Phone size={14} />
                  </div>
                  <span dir="ltr" className="font-medium">
                    9200 00000
                  </span>
                </a>
                <a
                  href="mailto:care@elitebank.com"
                  className="flex items-center justify-center lg:justify-start gap-3 text-sm text-blue-100 hover:text-white transition-colors group/item bg-white/5 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none border border-white/5 lg:border-none"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                    <Mail size={14} />
                  </div>
                  <span className="font-medium">care@elitebank.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm">
          {/* Copyrights */}
          <div className="text-center md:text-start text-blue-200/50 space-y-1">
            <p className="font-medium">
              © {currentYear} {t("bottom.copyright")}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1.5">
              <CheckCircle2 size={12} className="text-emerald-500" />
              <span className="text-[10px] tracking-wide uppercase">
                {t("bottom.license")}
              </span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerData.legal.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-blue-200/70 hover:text-white text-xs transition-colors hover:underline underline-offset-4 decoration-blue-500/50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
