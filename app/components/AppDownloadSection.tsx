"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Zap,
  CreditCard,
  Phone,
  MapPin,
  Laptop,
} from "lucide-react";

interface AppDownloadSectionProps {
  locale: string;
}

export default function AppDownloadSection({
  locale,
}: AppDownloadSectionProps) {
  const tApp = useTranslations("AppSection");
  const isRTL = locale === "ar";

  const contactCards = [
    {
      id: "apply",
      title: tApp("cards.apply.title"),
      desc: tApp("cards.apply.desc"),
      action: tApp("cards.apply.action"),
      btnColor: "bg-[#002147] text-white hover:bg-[#00152e]",
      Icon: Laptop,
    },
    {
      id: "contact",
      title: tApp("cards.contact.title"),
      desc: tApp("cards.contact.desc"),
      action: tApp("cards.contact.action"),
      btnColor: "bg-gray-100 text-[#002147] hover:bg-gray-200",
      Icon: Phone,
    },
    {
      id: "visit",
      title: tApp("cards.visit.title"),
      desc: tApp("cards.visit.desc"),
      action: tApp("cards.visit.action"),
      btnColor: "bg-gray-100 text-[#002147] hover:bg-gray-200",
      Icon: MapPin,
    },
  ];

  return (
   <section className="py-20 lg:py-32 bg-[#EFF4FA] overflow-hidden relative">
           <div className="container mx-auto px-4 md:px-8 relative z-10">
             <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
               {/* الجانب الأيمن: (العنوان + الهاتف) */}
               <div className="flex flex-col items-center order-1 w-full lg:w-auto">
                 {/* --- العنوان --- */}
                 <div className="text-center mb-12 relative z-20">
                   <h2 className="text-3xl md:text-4xl font-black text-[#002147] mb-3">
                     {tApp("title")}
                   </h2>
                   <p className="text-gray-500 text-base max-w-xs mx-auto leading-relaxed">
                     {tApp("subtitle")}
                   </p>
                   <div
                     className={`w-16 h-1.5 rounded-full mx-auto mt-4 `}
                   ></div>
                 </div>
   
                 {/* الهاتف والعناصر العائمة */}
                 <div className="relative w-[260px] lg:w-[320px] flex justify-center">
                   <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-blue-200/50 rounded-full animate-[spin_60s_linear_infinite]"></div>
                   <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-blue-300/50 rounded-full"></div>
   
                   <div className="relative z-10 w-full drop-shadow-2xl">
                     <Image
                       src="/images/phonee.png"
                       alt="Elite Bank App"
                       width={300}
                       height={600}
                       className="w-full h-auto drop-shadow-2xl"
                       priority
                     />
                   </div>
   
                   {/* البطاقات العائمة */}
                   <div
                     className={`absolute z-20 animate-float-slow scale-75 lg:scale-90 top-0 ${isRTL ? "-right-14" : "-left-14"}`}
                   >
                     <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 w-52">
                       <div className="flex items-center gap-3 mb-3">
                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                           <TrendingUp size={20} />
                         </div>
                         <div>
                           <p className="text-xs text-gray-500 font-bold">
                             {tApp("cards.floating.savings")}
                           </p>
                           <p className="text-sm font-bold text-[#002147]">
                             12,500 SAR
                           </p>
                         </div>
                       </div>
                       <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                         <div className="bg-green-500 h-full w-[75%] rounded-full"></div>
                       </div>
                     </div>
                   </div>
   
                   <div
                     className={`absolute z-20 animate-float-medium scale-75 lg:scale-90 bottom-12 ${isRTL ? "-left-10" : "-right-10"}`}
                   >
                     <div className="bg-[#002147] text-white p-4 rounded-2xl shadow-xl border border-blue-800/50 w-48">
                       <div className="flex justify-between items-start mb-4">
                         <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                           <Zap
                             size={18}
                             className="text-yellow-400 fill-yellow-400"
                           />
                         </div>
                         <span className="bg-green-500/20 text-green-300 text-[10px] px-2 py-1 rounded-md border border-green-500/30">
                           Paid
                         </span>
                       </div>
                       <p className="text-xs text-blue-200 mb-1">
                         {tApp("cards.floating.bills")}
                       </p>
                       <h4 className="font-bold text-lg">
                         {" "}
                         {tApp("cards.floating.billss")}
                       </h4>
                     </div>
                   </div>
   
                   <div
                     className={`absolute z-30 animate-float-fast scale-75 lg:scale-90 bottom-28 ${isRTL ? "-right-10" : "-left-10"}`}
                   >
                     <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 w-48">
                       <div className="flex items-center justify-between mb-4">
                         <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md opacity-80"></div>
                         <CreditCard size={18} className="text-gray-400" />
                       </div>
                       <p className="text-xl font-black text-[#002147] mb-1">
                         24,500 <span className="text-xs font-normal">SAR</span>
                       </p>
                       <span className="text-[10px] text-gray-500 font-bold tracking-widest">
                         **** 8899
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
   
               {/* الجانب الأيسر: 3 بطاقات عمودية */}
               <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2">
                 {contactCards.map((card) => (
                   <div
                     key={card.id}
                     className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-6"
                   >
                     <div className="w-16 h-16 bg-[#F5F8FA] rounded-2xl flex items-center justify-center text-[#002147] shrink-0 group-hover:scale-110 transition-transform duration-300">
                       <card.Icon size={32} strokeWidth={1.5} />
                     </div>
   
                     <div className="flex-1">
                       <h3 className="text-2xl font-bold text-[#002147] mb-2">
                         {card.title}
                       </h3>
                       <p className="text-gray-500 mb-6 text-sm lg:text-base leading-relaxed">
                         {card.desc}
                       </p>
   
                       <button
                         className={`
                         px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 mx-auto sm:mx-0 transition-all active:scale-95
                         ${card.btnColor}
                       `}
                       >
                         {card.action}
                         {card.id !== "contact" &&
                           (isRTL ? (
                             <ArrowLeft size={18} />
                           ) : (
                             <ArrowRight size={18} />
                           ))}
                       </button>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </section>
  );
}
