import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation'; // لاحظ التغيير هنا

export const routing = defineRouting({
  // قائمة اللغات التي يدعمها تطبيقك
  locales: ['en', 'ar'],

  // اللغة الافتراضية
  defaultLocale: 'ar'
});

// لاحظ استخدام createNavigation بدلاً من الاسم القديم الطويل
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);