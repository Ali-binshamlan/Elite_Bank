import { Car, Home, Landmark } from "lucide-react";

// ✅ تم حصر الأنواع في 3 فقط بناءً على طلبك
export type InsuranceType = "auto" | "home" | "retirement";

export const insuranceConfig: Record<InsuranceType, any> = {
  auto: {
    heroImage:
      "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=2000",
    primaryColor: "text-blue-600",
    bgColor: "bg-blue-50",
    accentColor: "bg-blue-600",
    borderColor: "border-blue-100",
  },
  home: {
    heroImage:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000",
    primaryColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    accentColor: "bg-emerald-600",
    borderColor: "border-emerald-100",
  },
  retirement: {
    heroImage:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2000",
    primaryColor: "text-amber-600",
    bgColor: "bg-amber-50",
    accentColor: "bg-amber-600",
    borderColor: "border-amber-100",
  },
};
