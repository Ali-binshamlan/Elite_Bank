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
export type FinanceType = "auto" | "realestate" | "personal";

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
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
  },
  personal: {
    primaryColor: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    accentColor: "bg-purple-600",
    heroImage:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2000&auto=format&fit=crop",
  },
 
};

// 2. إعدادات أيقونات المميزات (Features Icons)
// يتم ترتيبها حسب الـ Index (0, 1, 2, 3) لتتطابق مع ملف الترجمة
export const featureIcons: Record<FinanceType, LucideIcon[]> = {
  auto: [Percent, Clock, CheckCircle, Calculator],
  realestate: [Landmark, CalendarDays, ShieldCheck, Calculator],
  personal: [Briefcase, Clock, Percent, UserCheck],
};

// 3. إعدادات أيقونات المستندات المطلوبة (Requirements Icons)
export const requirementIcons = [FileCheck, MapPin, Users, Phone];
