import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ar", "en"], // جميع اللغات التي تدعمها
  defaultLocale: "ar"    // اللغة الافتراضية
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"] // تطابق كل المسارات ما عدا api و _next و الملفات الثابتة
};
