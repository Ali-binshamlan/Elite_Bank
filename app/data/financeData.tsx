import {
  Percent,
  Clock,
  CheckCircle,
  Calculator,
  Landmark,
  CalendarDays,
  ShieldCheck,
  Briefcase,
  UserCheck,
  FileCheck,
  LucideIcon,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

// تعريف الأنواع
export type FinanceType = "auto" | "realestate" | "personal" | "general";

interface FinanceTheme {
  primaryColor: string; // لون النص الأساسي
  bgColor: string; // لون الخلفية الفاتح
  borderColor: string; // لون الحدود
  accentColor: string; // لون مميز للأزرار أو الفواصل
  heroImage: string; // رابط الصورة
}

// 1. إعدادات الثيم والصور لكل نوع
export const financeConfig: Record<FinanceType, FinanceTheme> = {
  auto: {
    primaryColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    accentColor: "bg-blue-600",
    heroImage:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
  },
  realestate: {
    primaryColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    accentColor: "bg-emerald-600",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?q=80&w=2070&auto=format&fit=crop",
  },
  personal: {
    primaryColor: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    accentColor: "bg-purple-600",
    heroImage:
      "https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?q=80&w=2059&auto=format&fit=crop",
  },
  general: {
    primaryColor: "text-[#002147]",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    accentColor: "bg-[#002147]",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
};

// 2. إعدادات أيقونات المميزات (Features Icons)
// يتم ترتيبها حسب الـ Index (0, 1, 2, 3) لتتطابق مع ملف الترجمة
export const featureIcons: Record<FinanceType, LucideIcon[]> = {
  auto: [Percent, Clock, CheckCircle, Calculator],
  realestate: [Landmark, CalendarDays, ShieldCheck, Calculator],
  personal: [Briefcase, Clock, Percent, UserCheck],
  general: [CheckCircle, CheckCircle, CheckCircle, CheckCircle],
};

// 3. إعدادات أيقونات المستندات المطلوبة (Requirements Icons)
export const requirementIcons = [FileCheck, MapPin, Users, Phone];
