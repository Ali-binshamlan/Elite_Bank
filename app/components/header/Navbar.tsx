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
  Banknote,
  PiggyBank,
  TrendingUp,
  Baby,
  Smartphone,
  Gift,
  Home,
  Car,
  RefreshCw,
  HeartPulse,
  Plane,
  Umbrella,
  Utensils,
  ShoppingBag,
  Zap,
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData = [
    {
      id: "accounts",
      name: language === "AR" ? "الحسابات" : "Accounts",
      description:
        language === "AR"
          ? "حلول مصرفية تناسب نمط حياتك"
          : "Banking solutions for your lifestyle",
      icon: <Landmark size={22} />,
      subItems:
        language === "AR"
          ? [
              { name: "الحساب الجاري", icon: <Banknote size={20} /> },
              { name: "حساب الادخار", icon: <PiggyBank size={20} /> },
              {
                name: "حساب النخبة الاستثماري",
                icon: <TrendingUp size={20} />,
              },
              { name: "حسابات القصر", icon: <Baby size={20} /> },
            ]
          : [
              { name: "Current Account", icon: <Banknote size={20} /> },
              { name: "Savings Account", icon: <PiggyBank size={20} /> },
              { name: "Elite Investment", icon: <TrendingUp size={20} /> },
              { name: "Minors Accounts", icon: <Baby size={20} /> },
            ],
    },
    {
      id: "cards",
      name: language === "AR" ? "البطاقات" : "Cards",
      description:
        language === "AR"
          ? "انفق بذكاء وتمتع بمكافآت لا تنتهي"
          : "Spend smartly with endless rewards",
      icon: <CreditCard size={22} />,
      subItems:
        language === "AR"
          ? [
              { name: "بطاقات الائتمان", icon: <CreditCard size={20} /> },
              { name: "بطاقات مدى", icon: <Smartphone size={20} /> },
              { name: "البطاقات المسبقة الدفع", icon: <Wallet size={20} /> },
              { name: "مكافآت النخبة", icon: <Gift size={20} /> },
            ]
          : [
              { name: "Credit Cards", icon: <CreditCard size={20} /> },
              { name: "mada Cards", icon: <Smartphone size={20} /> },
              { name: "Prepaid Cards", icon: <Wallet size={20} /> },
              { name: "Elite Rewards", icon: <Gift size={20} /> },
            ],
    },
    {
      id: "finance",
      name: language === "AR" ? "التمويل" : "Finance",
      description:
        language === "AR"
          ? "حقق أحلامك بتمويل مرن وميسر"
          : "Achieve dreams with flexible finance",
      icon: <Wallet size={22} />,
      subItems:
        language === "AR"
          ? [
              { name: "التمويل الشخصي", icon: <Banknote size={20} /> },
              { name: "التمويل العقاري", icon: <Home size={20} /> },
              { name: "تمويل السيارات", icon: <Car size={20} /> },
              { name: "إعادة التمويل", icon: <RefreshCw size={20} /> },
            ]
          : [
              { name: "Personal Finance", icon: <Banknote size={20} /> },
              { name: "Home Finance", icon: <Home size={20} /> },
              { name: "Auto Finance", icon: <Car size={20} /> },
              { name: "Refinancing", icon: <RefreshCw size={20} /> },
            ],
    },
    {
      id: "insurance",
      name: language === "AR" ? "التأمين" : "Insurance",
      description:
        language === "AR"
          ? "حماية لك ولمن تحب"
          : "Protection for you and loved ones",
      icon: <ShieldCheck size={22} />,
      subItems:
        language === "AR"
          ? [
              { name: "تأمين المركبات", icon: <Car size={20} /> },
              { name: "التأمين الصحي", icon: <HeartPulse size={20} /> },
              { name: "تأمين السفر", icon: <Plane size={20} /> },
              { name: "تأمين الحماية والادخار", icon: <Umbrella size={20} /> },
            ]
          : [
              { name: "Car Insurance", icon: <Car size={20} /> },
              { name: "Health Insurance", icon: <HeartPulse size={20} /> },
              { name: "Travel Insurance", icon: <Plane size={20} /> },
              { name: "Protection & Savings", icon: <Umbrella size={20} /> },
            ],
    },
    {
      id: "offers",
      name: language === "AR" ? "العروض" : "Offers",
      description:
        language === "AR"
          ? "عروض حصرية لعملاء النخبة"
          : "Exclusive offers for elite clients",
      icon: <Percent size={22} />,
      subItems:
        language === "AR"
          ? [
              { name: "عروض المطاعم", icon: <Utensils size={20} /> },
              { name: "خصومات التسوق", icon: <ShoppingBag size={20} /> },
              { name: "تقسيط بسعر الكاش", icon: <Percent size={20} /> },
              { name: "عروض حصرية", icon: <Zap size={20} /> },
            ]
          : [
              { name: "Dining Offers", icon: <Utensils size={20} /> },
              { name: "Shopping Discounts", icon: <ShoppingBag size={20} /> },
              { name: "0% Installments", icon: <Percent size={20} /> },
              { name: "Exclusive Offers", icon: <Zap size={20} /> },
            ],
    },
  ];

  // Helper to find the active menu data
  const activeMenuData = menuData.find((item) => item.id === activeDropdown);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all"
        dir={dir}
        onMouseLeave={() => setActiveDropdown(null)} // إغلاق القائمة عند الخروج من الناف بار بالكامل
      >
        <div
          className={`z-20 relative overflow-hidden transition-all duration-500 ease-in-out hidden lg:block ${
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          }`}
        >
          <TopBar />
        </div>

        <nav
          className={`w-full transition-all duration-300 border-b relative z-10
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-gray-200"
              : "bg-white py-4 border-gray-100" // تقليل البادينغ قليلاً
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center h-14">
              {/* 1. الشعار والقطاعات */}
              <div className="flex items-center gap-6 xl:gap-12">
                <Link href="/" className="flex-shrink-0 relative group">
                  <Image
                    src="/Logo.png"
                    alt="Elite Bank"
                    width={150} // تصغير الشعار قليلاً ليتناسب مع الخط الأصغر
                    height={40}
                    priority
                    className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Toggle Switcher */}
                <div className="hidden lg:flex bg-gray-100/80 p-1 rounded-full relative">
                  <motion.div
                    className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm z-0"
                    initial={false}
                    animate={{
                      x:
                        activeSegment === "individuals"
                          ? 0
                          : dir === "rtl"
                            ? -100
                            : 100,
                      width: 100,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
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
                          relative z-10 px-4 py-1.5 rounded-full text-[14px] font-bold flex items-center gap-2 transition-colors duration-300 w-[100px] justify-center
                          ${
                            activeSegment === seg.id
                              ? "text-[#002147]"
                              : "text-gray-500 hover:text-gray-700"
                          }
                        `}
                    >
                      {seg.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. روابط القائمة (Centered Dropdown Logic) */}
              <div className="hidden lg:flex items-center gap-1">
                {menuData.map((item) => (
                  <button
                    key={item.id}
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    className={`
                      relative group h-14 flex items-center gap-1.5 px-4 rounded-full text-[#002147] font-bold transition-all duration-300
                      hover:bg-gray-50
                      ${
                        activeDropdown === item.id ? "bg-gray-50" : ""
                      } // إبقاء الخلفية نشطة عند فتح القائمة
                      ${language === "EN" ? "text-sm" : "text-[15px]"} 
                    `} // تم تصغير الخط هنا (14px/15px)
                  >
                    {item.name}
                    <ChevronDown
                      size={15}
                      className={`text-gray-400 transition-transform duration-300 ${
                        activeDropdown === item.id
                          ? "rotate-180 text-[#002147]"
                          : ""
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* 3. الإجراءات (لغة + دخول) */}
              <div className="flex items-center gap-2 md:gap-4">
                {/* --- زر اللغة للكمبيوتر (مخفي في الجوال) --- */}
                <button
                  onClick={toggleLanguage}
                  className="hidden lg:flex items-center gap-2 text-gray-600 font-bold hover:text-[#002147] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50"
                >
                  <Globe size={18} />
                  <span className="text-xs uppercase tracking-wider pt-0.5">
                    {language === "AR" ? "En" : "عربي"}
                  </span>
                </button>

                {/* --- زر تسجيل الدخول (مخفي في الجوال) --- */}
                <button className="hidden lg:flex relative overflow-hidden bg-[#002147] text-white px-6 py-2.5 rounded-full font-bold items-center gap-2 shadow-lg shadow-[#002147]/20 hover:shadow-[#002147]/40 active:scale-95 transition-all group">
                  <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <User size={18} className="relative z-10" />
                  <span
                    className={`relative z-10 ${
                      language === "EN" ? "text-sm" : "text-[15px]"
                    }`}
                  >
                    {language === "AR" ? "تسجيل الدخول" : "Login"}
                  </span>
                </button>

                {/* +++ جديد: زر اللغة للجوال (يظهر بجانب المينيو) +++ */}
                <button
                  onClick={toggleLanguage}
                  className="lg:hidden flex items-center justify-center w-10 h-10 text-[#002147] hover:bg-gray-50 rounded-full transition-colors"
                >
                  <span className="font-bold text-xs">
                    {language === "AR" ? "EN" : "عربي"}
                  </span>
                </button>

                {/* --- زر القائمة للجوال --- */}
                <button
                  className="lg:hidden p-2.5 text-[#002147] bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* === CENTRALIZED MEGA DROPDOWN === 
            موجودة خارج اللوب لتكون ثابتة في المنتصف 
          */}
          <AnimatePresence>
            {activeDropdown && activeMenuData && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full flex justify-center pt-2 pointer-events-none z-40"
              >
                {/* البطاقة الفعلية - pointer-events-auto لتفعيل التفاعل بداخلها */}
                <div
                  className="bg-white pointer-events-auto rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,33,71,0.15)] border border-gray-100 overflow-hidden w-[800px] p-8 mx-4"
                  onMouseEnter={() => setActiveDropdown(activeDropdown)} // الإبقاء مفتوحاً عند دخول الماوس للقائمة نفسها
                >
                  <motion.div
                    // إضافة key لإعادة تشغيل الأنيميشن عند تغيير التبويب إذا أردت، أو إزالتها لتبديل سلس
                    key={activeDropdown}
                    initial={{ opacity: 0, x: dir === "rtl" ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-8"
                  >
                    {/* المحتوى */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                        <div className="p-3 bg-[#002147]/5 rounded-2xl text-[#002147]">
                          {activeMenuData.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#002147] text-xl leading-none mb-1.5">
                            {activeMenuData.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {activeMenuData.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {activeMenuData.subItems.map((sub, idx) => (
                          <Link
                            key={idx}
                            href="#"
                            className="group/link flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F5F8FA] border border-transparent hover:border-gray-100 transition-all duration-200"
                          >
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm text-gray-400 group-hover/link:text-[#002147] group-hover/link:shadow-md transition-all">
                              {sub.icon}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-gray-700 font-bold text-sm group-hover/link:text-[#002147] transition-colors">
                                  {sub.name}
                                </span>
                                <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 rtl:translate-x-2 rtl:group-hover/link:translate-x-0 transition-all duration-300 text-[#002147]">
                                  {dir === "rtl" ? (
                                    <ArrowLeft size={16} />
                                  ) : (
                                    <ArrowRight size={16} />
                                  )}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* --- Mobile Menu (بدون تغييرات جوهرية سوى المزامنة) --- */}
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
              className={`fixed top-0 ${
                dir === "rtl" ? "right-0" : "left-0"
              } h-full w-[85%] max-w-[360px] bg-white z-[70] shadow-2xl flex flex-col`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                  <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={110}
                    height={35}
                    className="h-9 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                  >
                    <X size={26} />
                  </button>
                </div>

                <div className="flex bg-gray-100 p-1.5 rounded-xl mb-8">
                  {["individuals", "business"].map((seg) => (
                    <button
                      key={seg}
                      onClick={() => setActiveSegment(seg)}
                      className={`flex-1 py-3 text-center rounded-lg font-bold text-[15px] transition-all shadow-sm ${
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
                        className={`w-full flex items-center justify-between py-4 px-2 rounded-lg transition-colors ${
                          mobileExpandedItem === item.id
                            ? "bg-gray-50 text-[#002147]"
                            : "text-gray-600"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`${
                              mobileExpandedItem === item.id
                                ? "text-[#002147]"
                                : "text-gray-400"
                            }`}
                          >
                            {item.icon}
                          </span>
                          <span className="font-bold text-lg">{item.name}</span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            mobileExpandedItem === item.id
                              ? "rotate-180 text-[#002147]"
                              : "text-gray-300"
                          }`}
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
                        <div className="pb-4 pr-12 pl-4 space-y-2">
                          {item.subItems.map((sub, idx) => (
                            <Link
                              key={idx}
                              href="#"
                              className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <span className="text-gray-400">{sub.icon}</span>
                              <span className="text-gray-600 hover:text-[#002147] text-[15px] font-medium transition-colors">
                                {sub.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#002147] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#002147]/20 active:scale-95 transition-all text-lg">
                    <User size={22} />
                    <span>{language === "AR" ? "تسجيل الدخول" : "Login"}</span>
                  </button>

                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-center gap-3 py-4 border border-gray-200 hover:border-[#002147] hover:bg-[#002147]/5 rounded-xl text-[#002147] font-bold transition-all text-lg"
                  >
                    <Globe size={22} />
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
