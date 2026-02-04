"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Menu,
  X,
  ChevronDown,
  Globe,
  CreditCard,
  Landmark,
  ShieldCheck,
  Percent,
  Wallet,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Smile,
} from "lucide-react";
import TopBar from "./Topbar";

export default function Navbar() {
  const { language, toggleLanguage, dir } = useLanguage();
  const [activeSegment, setActiveSegment] = useState("individuals");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(
    null,
  );
  const [scrolled, setScrolled] = useState(false);

  // الكود الخاص باكتشاف السكرول (موجود مسبقاً)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ... (menuData data array remains the same) ...
  const menuData = [
    {
      id: "accounts",
      name: language === "AR" ? "الحسابات" : "Accounts",
      icon: <Landmark size={20} />,
      subItems:
        language === "AR"
          ? [
              "الحساب الجاري",
              "حساب الادخار",
              "حساب النخبة الاستثماري",
              "حسابات القصر",
            ]
          : [
              "Current Account",
              "Savings Account",
              "Elite Investment",
              "Minors Accounts",
            ],
    },
    {
      id: "cards",
      name: language === "AR" ? "البطاقات" : "Cards",
      icon: <CreditCard size={20} />,
      subItems:
        language === "AR"
          ? [
              "بطاقات الائتمان",
              "بطاقات مدى",
              "البطاقات المسبقة الدفع",
              "مكافآت النخبة",
            ]
          : ["Credit Cards", "mada Cards", "Prepaid Cards", "Elite Rewards"],
    },
    {
      id: "finance",
      name: language === "AR" ? "التمويل" : "Finance",
      icon: <Wallet size={20} />,
      subItems:
        language === "AR"
          ? [
              "التمويل الشخصي",
              "التمويل العقاري",
              "تمويل السيارات",
              "إعادة التمويل",
            ]
          : ["Personal Finance", "Home Finance", "Auto Finance", "Refinancing"],
    },
    {
      id: "insurance",
      name: language === "AR" ? "التأمين" : "Insurance",
      icon: <ShieldCheck size={20} />,
      subItems:
        language === "AR"
          ? [
              "تأمين المركبات",
              "التأمين الصحي",
              "تأمين السفر",
              "تأمين الحماية والادخار",
            ]
          : [
              "Car Insurance",
              "Health Insurance",
              "Travel Insurance",
              "Protection & Savings",
            ],
    },
    {
      id: "offers",
      name: language === "AR" ? "العروض" : "Offers",
      icon: <Percent size={20} />,
      subItems:
        language === "AR"
          ? ["عروض المطاعم", "خصومات التسوق", "تقسيط بسعر الكاش", "عروض حصرية"]
          : [
              "Dining Offers",
              "Shopping Discounts",
              "0% Installments",
              "Exclusive Offers",
            ],
    },
  ];

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all"
        dir={dir}
      >
        {/* التعديل هنا:
            تم إضافة كلاسات للتحكم في الارتفاع (max-h) والشفافية (opacity) بناءً على حالة scrolled
            overflow-hidden ضروري لكي يختفي المحتوى عند تقليص الارتفاع
         */}
        <div
          className={`z-20 relative overflow-hidden transition-all duration-500 ease-in-out ${
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          }`}
        >
          <TopBar />
        </div>

        {/* الناف بار الأساسي */}
        <nav
          className={`w-full transition-all duration-300 border-b relative z-10
          ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-gray-200" : "bg-white py-4 border-gray-100"}`}
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center h-16">
              {/* 1. الشعار والقطاعات */}
              <div className="flex items-center gap-6 xl:gap-12">
                <Link href="/" className="flex-shrink-0 relative group">
                  <Image
                    src="/Logo.png"
                    alt="Elite Bank"
                    width={140}
                    height={40}
                    priority
                    className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Toggle Switcher */}
                <div className="hidden lg:flex bg-gray-100 p-1.5 rounded-full relative">
                  <motion.div
                    className="absolute top-1.5 bottom-1.5 bg-white rounded-full shadow-sm z-0"
                    initial={false}
                    animate={{
                      x:
                        activeSegment === "individuals"
                          ? 0
                          : dir === "rtl"
                            ? -98
                            : 98,
                      width: 98,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />

                  {[
                    {
                      id: "individuals",
                      label: language === "AR" ? "الأفراد" : "Individuals",
                    },
                    {
                      id: "business",
                      label: language === "AR" ? "الأعمال" : "Business",
                    },
                  ].map((seg) => (
                    <button
                      key={seg.id}
                      onClick={() => setActiveSegment(seg.id)}
                      className={`
                          relative z-10 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 transition-colors duration-300 w-[98px] justify-center
                          ${activeSegment === seg.id ? "text-[#002147]" : "text-gray-500 hover:text-gray-700"}
                      `}
                    >
                      {seg.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. روابط القائمة (Desktop) */}
              <div className="hidden lg:flex items-center gap-1">
                {menuData.map((item) => (
                  <div
                    key={item.id}
                    className="relative group h-16 flex items-center"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`
                      flex items-center gap-1.5 px-4 py-2 rounded-full text-[#002147] font-bold transition-all duration-300
                      hover:bg-gray-50
                      ${language === "EN" ? "text-[14px]" : "text-[15px]"}
                    `}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`text-gray-400 transition-transform duration-300 ${activeDropdown === item.id ? "rotate-180 text-[#002147]" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[80%] start-0 min-w-[260px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,33,71,0.15)] border border-gray-100 overflow-hidden z-50 p-2"
                        >
                          {/* محتوى القائمة المنسدلة... */}
                          <div className="px-4 py-3 bg-gray-50/50 rounded-t-xl mb-2 flex items-center gap-3 border-b border-gray-100">
                            <span className="p-2 bg-white rounded-lg shadow-sm text-[#002147]">
                              {item.icon}
                            </span>
                            <span className="font-bold text-[#002147] text-sm">
                              {item.name}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub}
                                href="#"
                                className="group/link flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#F5F8FA] transition-colors"
                              >
                                <span className="text-gray-600 font-medium text-sm group-hover/link:text-[#002147] transition-colors">
                                  {sub}
                                </span>
                                <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-[#002147]">
                                  {dir === "rtl" ? (
                                    <ArrowLeft size={14} />
                                  ) : (
                                    <ArrowRight size={14} />
                                  )}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* 3. الإجراءات (لغة + دخول) */}
              <div className="flex items-center gap-3 md:gap-5">
                <button
                  onClick={toggleLanguage}
                  className="hidden sm:flex items-center gap-2 text-gray-500 font-bold hover:text-[#002147] transition-colors px-2 py-1 rounded-lg hover:bg-gray-50"
                >
                  <Globe size={18} />
                  <span className="text-xs uppercase tracking-wider">
                    {language === "AR" ? "En" : "عربي"}
                  </span>
                </button>

                <button className="relative overflow-hidden bg-[#002147] text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-[#002147]/20 hover:shadow-[#002147]/40 active:scale-95 transition-all group">
                  <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <User size={18} className="relative z-10" />
                  <span
                    className={`relative z-10 ${language === "EN" ? "text-sm" : "text-base"}`}
                  >
                    {language === "AR" ? "تسجيل الدخول" : "Login"}
                  </span>
                </button>

                <button
                  className="lg:hidden p-2 text-[#002147] bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* --- Mobile Menu (Side Drawer) --- */}
      {/* (نفس كود القائمة الجانبية السابق) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: dir === "rtl" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: dir === "rtl" ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 ${dir === "rtl" ? "right-0" : "left-0"} h-full w-[85%] max-w-[340px] bg-white z-[70] shadow-2xl flex flex-col`}
            >
              {/* محتوى الموبايل كما هو... */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                  <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={100}
                    height={30}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
                  >
                    <X size={24} />
                  </button>
                </div>
                {/* ... بقية عناصر الموبايل */}
                <div className="flex bg-gray-100 p-1.5 rounded-xl mb-8">
                  {["individuals", "business"].map((seg) => (
                    <button
                      key={seg}
                      onClick={() => setActiveSegment(seg)}
                      className={`flex-1 py-2.5 text-center rounded-lg font-bold text-sm transition-all shadow-sm ${
                        activeSegment === seg
                          ? "bg-white text-[#002147]"
                          : "text-gray-400 hover:text-gray-600 bg-transparent shadow-none"
                      }`}
                    >
                      {seg === "individuals"
                        ? language === "AR"
                          ? "الأفراد"
                          : "Individuals"
                        : language === "AR"
                          ? "الأعمال"
                          : "Business"}
                    </button>
                  ))}
                </div>
                {/* Links List */}
                <div className="flex-1 overflow-y-auto no-scrollbar space-y-2">
                  {menuData.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <button
                        onClick={() =>
                          setMobileExpandedItem(
                            mobileExpandedItem === item.id ? null : item.id,
                          )
                        }
                        className={`w-full flex items-center justify-between py-4 px-2 rounded-lg transition-colors ${mobileExpandedItem === item.id ? "bg-gray-50 text-[#002147]" : "text-gray-600"}`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`${mobileExpandedItem === item.id ? "text-[#002147]" : "text-gray-400"}`}
                          >
                            {item.icon}
                          </span>
                          <span className="font-bold text-base">
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${mobileExpandedItem === item.id ? "rotate-180 text-[#002147]" : "text-gray-300"}`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: mobileExpandedItem === item.id ? "auto" : 0,
                          opacity: mobileExpandedItem === item.id ? 1 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pr-12 pl-4 space-y-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub}
                              href="#"
                              className="block py-2.5 text-gray-500 hover:text-[#002147] text-sm font-medium transition-colors border-l-2 border-gray-100 hover:border-[#002147] px-4"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
                {/* Footer */}
                <div className="mt-auto pt-6">
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-200 hover:border-[#002147] hover:bg-[#002147]/5 rounded-xl text-[#002147] font-bold transition-all"
                  >
                    <Globe size={20} />
                    {language === "AR"
                      ? "Switch to English"
                      : "التحويل للعربية"}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
