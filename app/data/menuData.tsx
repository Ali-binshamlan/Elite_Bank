import {
  CreditCard,
  Wallet,
  Banknote,
  Gem,
  Baby,
  TrendingUp,
  PiggyBank,
  ShieldCheck,
  Percent,
  Landmark,
  Car,
  Home,
  RefreshCw,
  Plane,
  HeartPulse,
} from "lucide-react";
import { cardsData } from "@/app/data/cardsData";

// 1. خريطة الأيقونات لربط كل نوع بطاقة بأيقونة مناسبة
const cardIcons: Record<string, any> = {
  prepaid: Wallet,
  credit: CreditCard,
  monthly: Banknote,
  platinum: Gem,
};

// 2. دالة البيانات المحدثة بالروابط الصحيحة
export const getMenuData = (t: any, locale: string) => [
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
        href: "/Personal/Accounts/current", // تم التحديث لمسار ديناميكي
      },
      {
        name: t("menu.accounts.items.savings"),
        icon: <PiggyBank size={20} />,
        href: "/Personal/Accounts/savings",
      },
      {
        name: t("menu.accounts.items.elite"),
        icon: <TrendingUp size={20} />,
        href: "/Personal/Accounts/elite",
      },
      {
        name: t("menu.accounts.items.minors"),
        icon: <Baby size={20} />,
        href: "/Personal/Accounts/minors",
      },
    ],
  },
  {
    id: "cards",
    name: t("menu.cards.title"),
    description: t("menu.cards.desc"),
    icon: <CreditCard size={22} />,
    href: `/Personal/Cards`,
    subItems: cardsData.map((card) => {
      const IconComponent = cardIcons[card.id] || CreditCard;
      return {
        name: t(`menu.cards.items.${card.id}`),
        icon: <IconComponent size={20} />,
        href: `/Personal/Cards/${card.id}`,
      };
    }),
  },
  {
    id: "finance",
    name: t("menu.finance.title"),
    description: t("menu.finance.desc"),
    icon: <Landmark size={22} />,
    href: "/Personal/Finance",
    subItems: [
      {
        name: t("menu.finance.items.personal"),
        icon: <Banknote size={20} />,
        href: "/Personal/Finance/personal", // تم التحديث
      },
      {
        name: t("menu.finance.items.realestate"),
        icon: <Home size={20} />,
        href: "/Personal/Finance/realestate",
      },
      {
        name: t("menu.finance.items.auto"),
        icon: <Car size={20} />,
        href: "/Personal/Finance/auto",
      },
      {
        name: t("menu.finance.items.refinance"),
        icon: <RefreshCw size={20} />,
        href: "/Personal/Finance/refinance",
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
        href: "/Personal/Insurance/auto", // تم التحديث ليتوافق مع المفتاح في insuranceData
      },
      {
        name: t("menu.insurance.items.home"), // تم التعديل من health إلى home حسب توافر البيانات
        icon: <Home size={20} />,
        href: "/Personal/Insurance/home",
      },
      {
        name: t("menu.insurance.items.retirement"), // تم التعديل لتتوافق معretirement في insuranceData
        icon: <TrendingUp size={20} />,
        href: "/Personal/Insurance/retirement",
      },
    ],
  },
 
];

// --- أيقونات مساعدة مخصصة ---
const UtensilsIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

const ShoppingBagIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const CalendarClockIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
    <path d="M22 22l-2.5-2.5" />
    <path d="M20 16a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
  </svg>
);

const StarIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
