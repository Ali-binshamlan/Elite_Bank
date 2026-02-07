// src/components/AccountsGrid/accountsData.ts

import {
  PiggyBank,
  TrendingUp,
  Users,
  UserPlus,
  Crown,
  LucideIcon,
} from "lucide-react";

// تعريف نوع البيانات لضمان عدم حدوث أخطاء (Type Safety)
export interface AccountItem {
  id: string;
  large: boolean;
  img: string;
  color: string;
  icon: LucideIcon;
  pattern: "waves" | "dots" | "circles"; // تحديد أنواع الخلفيات المتاحة
}

// مصفوفة البيانات الثابتة
export const accountsData: AccountItem[] = [
  {
    id: "savings",
    large: true,
    img: "/images/Hero_5.png",
    color: "#33465c", // كحلي غامق
    icon: PiggyBank,
    pattern: "waves",
  },
  {
    id: "returns",
    large: false,
    img: "/images/hero_2.png",
    color: "#d9a55b", // ذهبي/برتقالي
    icon: TrendingUp,
    pattern: "dots",
  },
  {
    id: "family",
    large: false,
    img: "/images/hero_3.png",
    color: "#9e474e", // أحمر غامق
    icon: Users,
    pattern: "circles",
  },
  {
    id: "follower",
    large: false,
    img: "/images/Hero_4.png",
    color: "#4a7a72", // أخضر/تركواز غامق
    icon: UserPlus,
    pattern: "dots",
  },
  {
    id: "gold",
    large: false,
    img: "/images/Hero_1.png",
    color: "#8c7e56", // ذهبي مطفأ
    icon: Crown,
    pattern: "circles",
  },
];
