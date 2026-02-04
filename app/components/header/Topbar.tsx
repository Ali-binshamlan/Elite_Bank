"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext"; // استيراد الهوك
import {
  ZoomIn,
  ZoomOut,
  EyeOff,
  Maximize,
  HelpCircle,
  Newspaper,
  FileText,
} from "lucide-react";

export default function TopBar() {
  const { language, dir } = useLanguage(); // جلب حالة اللغة والاتجاه
  const [fontSize, setFontSize] = useState(100);
  const [isGrayscale, setIsGrayscale] = useState(false);

  // منطق تغيير حجم الخط
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  // منطق عمى الألوان
  useEffect(() => {
    document.documentElement.style.filter = isGrayscale
      ? "grayscale(100%)"
      : "none";
  }, [isGrayscale]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 10, 130));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 10, 80));
  const resetFont = () => setFontSize(100);

  // نصوص الترجمة
  const content = {
    disclosure:
      language === "AR"
        ? "قواعد الإفصاح عن أسعار المنتجات التمويلية"
        : "Disclosure rules for pricing of financing products",
    mediaCenter: language === "AR" ? "المركز الإعلامي" : "Media Center",
    support: language === "AR" ? "المساعدة والدعم" : "Help & Support",
    tooltips: {
      zoomIn: language === "AR" ? "تكبير الخط" : "Increase Font",
      zoomOut: language === "AR" ? "تصغير الخط" : "Decrease Font",
      reset: language === "AR" ? "إعادة ضبط" : "Reset",
      grayscale: language === "AR" ? "إزالة الألوان" : "Grayscale Mode",
      fullScreen: language === "AR" ? "ملء الشاشة" : "Full Screen",
    },
  };

  return (
    <div
      className="bg-[#002147] text-white py-2 border-b border-[#A8A9AD]/20 shadow-sm"
      dir={dir}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* القسم الأيمن/الأيسر (حسب اللغة): قواعد الإفصاح */}
        <div className="flex items-center">
          <a
            href="#"
            className={`flex items-center gap-2 text-[#A8A9AD] hover:text-white transition-colors font-medium ${
              language === "EN" ? "text-[10px]" : "text-xs"
            }`}
          >
            <FileText size={14} className="text-[#A8A9AD]" />
            <span>{content.disclosure}</span>
          </a>
        </div>

        {/* القسم الآخر: الروابط وأدوات الوصول */}
        <div className="flex items-center gap-6">
          {/* المركز الإعلامي والمساعدة - استخدام border-s (Start) للتكيف مع اللغة */}
          <div className="hidden md:flex items-center gap-6 border-s border-white/10 ps-6">
            <a
              href="#"
              className={`flex items-center gap-1 text-[#A8A9AD] hover:text-white transition-colors ${
                language === "EN" ? "text-[11px]" : "text-xs"
              }`}
            >
              <Newspaper size={14} />
              <span>{content.mediaCenter}</span>
            </a>
            <a
              href="#"
              className={`flex items-center gap-1 text-[#A8A9AD] hover:text-white transition-colors ${
                language === "EN" ? "text-[11px]" : "text-xs"
              }`}
            >
              <HelpCircle size={14} />
              <span>{content.support}</span>
            </a>
          </div>

          {/* أدوات الوصول Accessibility */}
          <div className="flex items-center gap-3">
            {/* أداة التحكم في الخط */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-2 py-1 gap-3">
              <button
                onClick={increaseFont}
                className="text-[#A8A9AD] hover:text-white transition-colors"
                title={content.tooltips.zoomIn}
              >
                <ZoomIn size={16} />
              </button>

              <button
                onClick={resetFont}
                className="text-[10px] text-white font-bold min-w-[30px] text-center"
                title={content.tooltips.reset}
              >
                {fontSize}%
              </button>

              <button
                onClick={decreaseFont}
                className="text-[#A8A9AD] hover:text-white transition-colors"
                title={content.tooltips.zoomOut}
              >
                <ZoomOut size={16} />
              </button>
            </div>

            {/* زر إزالة الألوان */}
            <button
              onClick={() => setIsGrayscale(!isGrayscale)}
              className={`p-1.5 rounded-md transition-all ${
                isGrayscale
                  ? "bg-[#A8A9AD] text-[#002147]"
                  : "text-[#A8A9AD] hover:bg-white/10"
              }`}
              title={content.tooltips.grayscale}
            >
              <EyeOff size={16} />
            </button>

            {/* زر تكبير الصفحة */}
            <button
              onClick={toggleFullScreen}
              className="p-1.5 text-[#A8A9AD] hover:text-white hover:bg-white/10 rounded-md transition-all"
              title={content.tooltips.fullScreen}
            >
              <Maximize size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
