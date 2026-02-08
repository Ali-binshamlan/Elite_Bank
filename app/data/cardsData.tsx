// src/components/Cards/cardsData.ts

export interface CardData {
  id: string;
  bgGradient: string;
  accentColor: string;
  backdropColor: string;
  featuresIconColor: string;
}

export const cardsData: CardData[] = [
  {
    id: "prepaid",
    bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "rgba(118, 75, 162, 0.6)",
    backdropColor: "bg-[#3b2d82]",
    featuresIconColor: "text-[#764ba2]",
  },
  {
    id: "credit",
    bgGradient: "linear-gradient(135deg, #141E30 0%, #243B55 100%)",
    accentColor: "rgba(255, 215, 0, 0.5)",
    backdropColor: "bg-[#1a2b45]",
    featuresIconColor: "text-[#1a2b45]",
  },
  {
    id: "monthly",
    bgGradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    accentColor: "rgba(56, 239, 125, 0.6)",
    backdropColor: "bg-[#0f6b55]",
    featuresIconColor: "text-[#0f6b55]",
  },
  // --- البطاقة الجديدة (البلاتينية) ---
  {
    id: "platinum",
    // تدرج رمادي معدني (Silver/Dark Grey)
    bgGradient: "linear-gradient(135deg, #434343 0%, #ff0000 100%)",
    accentColor: "rgba(255, 255, 255, 0.4)", // وهج أبيض/فضي
    backdropColor: "bg-[#ec2c2c]", // خلفية رمادية غامقة للصفحة
    featuresIconColor: "text-[#ff0000]",
  },
  {
    id: "world_elite",
    // تدرج أسود ملكي مع لمسة ذهبية
    bgGradient:
      "linear-gradient(135deg, #000000 0%, #2b2b2b 74%, #1a1a1a 100%)",
    accentColor: "rgba(212, 175, 55, 0.5)", // لون ذهبي
    backdropColor: "bg-[#121212]", // خلفية سوداء داكنة جداً
    featuresIconColor: "text-[#D4AF37]", // لون النص والأيقونات ذهبي
  },
];
