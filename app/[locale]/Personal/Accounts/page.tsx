import AccountsHero from "../../../components/AccountsHero";
import AccountsGrid from "../../../components/AccountsGrid"; // استيراد المكون الجديد
import BenefitsSection from "@/app/components/ui/BenefitsSection";
import FAQSection from "@/app/components/FAQSection";

export default function AccountsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. القسم الأول: البطاقات المتكدسة والمنفرشة */}
      <AccountsHero />

      {/* 2. القسم الثاني: الشبكة الموزعة (نفس الصورة الثانية) */}
      <AccountsGrid />

          <BenefitsSection />
          <FAQSection/>
    </main>
  );
}
