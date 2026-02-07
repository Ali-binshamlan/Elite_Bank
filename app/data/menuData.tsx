import React from "react";
import {
  Landmark,
  Banknote,
  PiggyBank,
  TrendingUp,
  Baby,
  CreditCard,
  Smartphone,
  Wallet,
  Gift,
  Home,
  Car,
  RefreshCw,
  ShieldCheck,
  HeartPulse,
  Plane,
  Umbrella,
  Percent,
  Utensils,
  ShoppingBag,
  Zap,
} from "lucide-react";

// تعريف نوع البيانات لضمان عدم حدوث أخطاء
export interface SubMenuItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  subItems: SubMenuItem[];
}

// دالة تستقبل المترجم (t) وتعيد البيانات
export const getMenuData = (t: any): MenuItem[] => [
  {
    id: "accounts",
    name: t("menu.accounts.title"),
    description: t("menu.accounts.desc"),
    icon: <Landmark size={22} />,
    href: "/Personal/Accounts",
    subItems: [
      {
        name: t("menu.accounts.items.current"),
        icon: <Banknote size={20} />,
        href: "/Personal/Accounts/Current",
      },
      {
        name: t("menu.accounts.items.savings"),
        icon: <PiggyBank size={20} />,
        href: "/Personal/Accounts/Savings",
      },
      {
        name: t("menu.accounts.items.elite"),
        icon: <TrendingUp size={20} />,
        href: "/Personal/Accounts/Elite",
      },
      {
        name: t("menu.accounts.items.minors"),
        icon: <Baby size={20} />,
        href: "/Personal/Accounts/Minors",
      },
    ],
  },
  {
    id: "cards",
    name: t("menu.cards.title"),
    description: t("menu.cards.desc"),
    icon: <CreditCard size={22} />,
    href: "/Personal/Cards",
    subItems: [
      {
        name: t("menu.cards.items.credit"),
        icon: <CreditCard size={20} />,
        href: "#",
      },
      {
        name: t("menu.cards.items.mada"),
        icon: <Smartphone size={20} />,
        href: "#",
      },
      {
        name: t("menu.cards.items.prepaid"),
        icon: <Wallet size={20} />,
        href: "#",
      },
      {
        name: t("menu.cards.items.rewards"),
        icon: <Gift size={20} />,
        href: "#",
      },
    ],
  },
  {
    id: "finance",
    name: t("menu.finance.title"),
    description: t("menu.finance.desc"),
    icon: <Wallet size={22} />,
    href: "/Personal/Finance",
    subItems: [
      {
        name: t("menu.finance.items.personal"),
        icon: <Banknote size={20} />,
        href: "#",
      },
      {
        name: t("menu.finance.items.realestate"),
        icon: <Home size={20} />,
        href: "#",
      },
      {
        name: t("menu.finance.items.auto"),
        icon: <Car size={20} />,
        href: "#",
      },
      {
        name: t("menu.finance.items.refinance"),
        icon: <RefreshCw size={20} />,
        href: "#",
      },
    ],
  },
  {
    id: "insurance",
    name: t("menu.insurance.title"),
    description: t("menu.insurance.desc"),
    icon: <ShieldCheck size={22} />,
    href: "/Personal/Insurance",
    subItems: [
      {
        name: t("menu.insurance.items.car"),
        icon: <Car size={20} />,
        href: "#",
      },
      {
        name: t("menu.insurance.items.health"),
        icon: <HeartPulse size={20} />,
        href: "#",
      },
      {
        name: t("menu.insurance.items.travel"),
        icon: <Plane size={20} />,
        href: "#",
      },
      {
        name: t("menu.insurance.items.protection"),
        icon: <Umbrella size={20} />,
        href: "#",
      },
    ],
  },
  {
    id: "offers",
    name: t("menu.offers.title"),
    description: t("menu.offers.desc"),
    icon: <Percent size={22} />,
    href: "/Personal/Offers",
    subItems: [
      {
        name: t("menu.offers.items.dining"),
        icon: <Utensils size={20} />,
        href: "#",
      },
      {
        name: t("menu.offers.items.shopping"),
        icon: <ShoppingBag size={20} />,
        href: "#",
      },
      {
        name: t("menu.offers.items.installments"),
        icon: <Percent size={20} />,
        href: "#",
      },
      {
        name: t("menu.offers.items.exclusive"),
        icon: <Zap size={20} />,
        href: "#",
      },
    ],
  },
];
