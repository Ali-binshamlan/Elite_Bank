"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// استيراد الأيقونات الخاصة بواجهة المستخدم فقط (وليس البيانات)
import {
  User,
  Menu,
  X,
  ChevronDown,
  Globe,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import TopBar from "./Topbar";
// استيراد دالة البيانات من الملف الجديد
import { getMenuData } from "@/app/data/menuData";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const dir = locale === "ar" ? "rtl" : "ltr";

  const [activeSegment, setActiveSegment] = useState("individuals");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(
    null,
  );
  const [scrolled, setScrolled] = useState(false);

  // --- جلب البيانات هنا ---
  // نقوم بتمرير دالة الترجمة t ليتم ترجمة النصوص داخل ملف البيانات
const menuData = getMenuData(t, locale);
  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace({ pathname }, { locale: nextLocale });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeMenuData = menuData.find((item) => item.id === activeDropdown);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all"
        dir={dir}
        onMouseLeave={() => setActiveDropdown(null)}
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
              ? "bg-white/60 backdrop-blur-md shadow-md py-3 border-gray-200"
              : "bg-white/80 py-4 border-gray-100"
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center h-14">
              {/* الشعار */}
              <div className="flex items-center gap-6 xl:gap-12">
                <Link href="/" className="flex-shrink-0 relative group">
                  <Image
                    src="/Logo.png"
                    alt="Elite Bank"
                    width={150}
                    height={40}
                    priority
                    className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* التبديل بين الأفراد والأعمال */}
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
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />

                  {[
                    { id: "individuals", label: t("segments.individuals") },
                    { id: "business", label: t("segments.business") },
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

              {/* الروابط (Desktop) */}
              <div className="hidden lg:flex items-center gap-1">
                {menuData.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href || "#"}
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    className={`
                      relative group h-14 flex items-center gap-1.5 px-4 rounded-full text-[#002147] font-bold transition-all duration-300
                      ${activeDropdown === item.id ? "" : ""}
                      ${locale === "en" ? "text-sm" : "text-[15px]"} 
                    `}
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
                  </Link>
                ))}
              </div>

              {/* الإجراءات */}
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={toggleLanguage}
                  className="hidden lg:flex items-center gap-2 text-gray-600 font-bold hover:text-[#002147] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50"
                >
                  <Globe size={18} />
                  <span className="text-xs uppercase tracking-wider pt-0.5">
                    {locale === "ar" ? "En" : "عربي"}
                  </span>
                </button>

                <button className="hidden lg:flex relative overflow-hidden bg-[#002147] text-white px-6 py-2.5 rounded-full font-bold items-center gap-2 shadow-lg shadow-[#002147]/20 hover:shadow-[#002147]/40 active:scale-95 transition-all group">
                  <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <User size={18} className="relative z-10" />
                  <span
                    className={`relative z-10 ${
                      locale === "en" ? "text-sm" : "text-[15px]"
                    }`}
                  >
                    {t("actions.login")}
                  </span>
                </button>

                <button
                  onClick={toggleLanguage}
                  className="lg:hidden flex items-center justify-center w-10 h-10 text-[#002147] hover:bg-gray-50 rounded-full transition-colors"
                >
                  <span className="font-bold text-xs">
                    {locale === "ar" ? "EN" : "عربي"}
                  </span>
                </button>

                <button
                  className="lg:hidden p-2.5 text-[#002147] bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* القائمة المنسدلة (Desktop Dropdown) */}
          <AnimatePresence>
            {activeDropdown && activeMenuData && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full flex justify-center pt-2 pointer-events-none z-40"
              >
                <div
                  className="bg-white pointer-events-auto rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,33,71,0.15)] border border-gray-100 overflow-hidden w-[800px] p-8 mx-4"
                  onMouseEnter={() => setActiveDropdown(activeDropdown)}
                >
                  <motion.div
                    key={activeDropdown}
                    initial={{ opacity: 0, x: dir === "rtl" ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-8"
                  >
                    <div className="flex-1">
                      <Link
                        href={activeMenuData.href || "#"}
                        className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 group"
                      >
                        <div className="p-3 bg-[#002147]/5 rounded-2xl text-[#002147] group-hover:bg-[#002147] group-hover:text-white transition-colors">
                          {activeMenuData.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#002147] text-xl leading-none mb-1.5 ">
                            {activeMenuData.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {activeMenuData.description}
                          </p>
                        </div>
                      </Link>

                      <div className="grid grid-cols-2 gap-4">
                        {activeMenuData.subItems.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href || "#"}
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

      {/* قائمة الجوال */}
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
                  {[
                    { id: "individuals", label: t("segments.individuals") },
                    { id: "business", label: t("segments.business") },
                  ].map((seg) => (
                    <button
                      key={seg.id}
                      onClick={() => setActiveSegment(seg.id)}
                      className={`flex-1 py-3 text-center rounded-lg font-bold text-[15px] transition-all shadow-sm ${
                        activeSegment === seg.id
                          ? "bg-white text-[#002147]"
                          : "text-gray-400 hover:text-gray-600 bg-transparent shadow-none"
                      }`}
                    >
                      {seg.label}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar space-y-2">
                  {menuData.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <div
                        className={`w-full flex items-center justify-between py-2 px-2 rounded-lg transition-colors ${
                          mobileExpandedItem === item.id
                            ? "bg-gray-50 text-[#002147]"
                            : "text-gray-600"
                        }`}
                      >
                        <Link
                          href={item.href || "#"}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-4 flex-1 py-2"
                        >
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
                        </Link>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileExpandedItem(
                              mobileExpandedItem === item.id ? null : item.id,
                            );
                          }}
                          className="p-2 border-l border-gray-200 pl-4 h-full"
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${
                              mobileExpandedItem === item.id
                                ? "rotate-180 text-[#002147]"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      </div>

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
                              href={sub.href || "#"}
                              onClick={() => setIsMobileMenuOpen(false)}
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
                    <span>{t("actions.login")}</span>
                  </button>

                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-center gap-3 py-4 border border-gray-200 hover:border-[#002147] hover:bg-[#002147]/5 rounded-xl text-[#002147] font-bold transition-all text-lg"
                  >
                    <Globe size={22} />
                    {locale === "ar" ? "Switch to English" : "التحويل للعربية"}
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
