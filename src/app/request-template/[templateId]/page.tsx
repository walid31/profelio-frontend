"use client";

import { use } from "react";
import TemplateRequestLayout from "@/components/template-request/TemplateRequestLayout";
import ProgressBar from "@/components/template-request/ProgressBar";
import StepRenderer from "@/components/template-request/StepRenderer";
import HeaderSection from "@/components/template-request/HeaderSection";
import { useTemplateForm } from "@/components/template-request/hooks/useTemplateForm";

export default function TemplateRequestPage({ params }: { params: Promise<{ templateId: string }> }) {
  const { templateId } = use(params);
  const { step } = useTemplateForm(templateId);

  return (
    <TemplateRequestLayout>
      <HeaderSection templateId={templateId} />
      <ProgressBar step={step} />
      <StepRenderer templateId={templateId} />
    </TemplateRequestLayout>
  );
}
