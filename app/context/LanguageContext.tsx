"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "AR" | "EN";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("AR");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "AR" ? "EN" : "AR"));
  };

  const dir = language === "AR" ? "rtl" : "ltr";

  // تحديث سمة الاتجاه في وسم الـ html تلقائياً
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language.toLowerCase();
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dir }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
