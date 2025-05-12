"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PersonaLayout, {
  PersonaSection,
} from "@/components/persona/PersonaLayout";
import AboutSection from "@/components/persona/AboutSection";
import ServicesSection from "@/components/persona/ServicesSection";
import TestimonialsSection from "@/components/persona/TestimonialsSection";
import { Globe, BarChart2, Languages, Users } from "lucide-react";

const RtlTemplate = () => {
  const router = useRouter();

  const handleEditRequest = () => {
    router.push("/template-request/rtl");
  };

  // Define sections for this persona - content in Arabic
  const sections = [
    {
      id: "about",
      title: "نبذة عني",
      component: (
        <AboutSection
          description="مستشار محترف مع أكثر من 10 سنوات من الخبرة في مساعدة الشركات على تطوير أعمالها. متخصص في استراتيجية الأعمال والتسويق الرقمي والتحول الرقمي."
          skills={[
            "استراتيجية الأعمال",
            "التسويق الرقمي",
            "تحليل البيانات",
            "إدارة المشاريع",
            "التحول الرقمي",
            "التخطيط الاستراتيجي",
            "تطوير الأعمال",
          ]}
        />
      ),
    },
    {
      id: "services",
      title: "الخدمات",
      component: (
        <ServicesSection
          services={[
            {
              icon: "Globe",
              title: "استشارات استراتيجية",
              description:
                "تطوير خطط وحلول استراتيجية لتنمية أعمالك وتحقيق أهدافك.",
            },
            {
              icon: "BarChart2",
              title: "تحليل البيانات",
              description:
                "استخدام البيانات لاتخاذ قرارات مستنيرة وتحسين الأداء التجاري.",
            },
            {
              icon: "Languages",
              title: "التسويق الرقمي",
              description:
                "استراتيجيات تسويقية فعالة لزيادة الوعي بالعلامة التجارية وجذب العملاء.",
            },
            {
              icon: "Users",
              title: "التحول الرقمي",
              description:
                "مساعدة الشركات على التكيف مع العصر الرقمي وتحسين عملياتها.",
            },
          ]}
        />
      ),
    },
    {
      id: "testimonials",
      title: "آراء العملاء",
      component: (
        <TestimonialsSection
          testimonials={[
            {
              name: "محمد عبدالله",
              position: "مدير التسويق، شركة التقنية",
              content:
                "لقد ساعدتنا على زيادة مبيعاتنا بنسبة 40% خلال 6 أشهر. نحن سعداء جدًا بالنتائج.",
            },
            {
              name: "سارة الأحمد",
              position: "الرئيس التنفيذي، ستارت أب",
              content:
                "استراتيجياتك ساعدتنا على النمو بشكل كبير. أنت مستشار ممتاز.",
            },
            {
              name: "أحمد محمود",
              position: "مدير العمليات، المجموعة الدولية",
              content:
                "لقد قدمت لنا رؤى قيمة ساعدتنا على تحسين عملياتنا وتقليل التكاليف.",
            },
          ]}
        />
      ),
    },
  ];

  return (
    <>
      <div dir="rtl" className="text-right">
        <PersonaLayout persona="مستشار أعمال" sections={sections} />
      </div>
    </>
  );
};

export default RtlTemplate;
