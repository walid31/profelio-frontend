
import { useState } from 'react';
import { toast } from 'sonner';
import { submitTemplate } from '@/services/templateSubmissionService';
import { supabase } from '@/integrations/supabase/client';
import { sendConfirmationEmail } from '@/utils/emailService';

export const useSubmitTemplateForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: any, profilePhoto: File | null = null) => {
    setIsSubmitting(true);
    
    try {
      // Handle profile photo upload if provided
      let photoUrl = null;
      if (profilePhoto) {
        const { data: fileData, error: uploadError } = await supabase.storage
          .from('profile-photos')
          .upload(`${Date.now()}-${profilePhoto.name}`, profilePhoto);
        
        if (uploadError) {
          console.error("Error uploading photo:", uploadError);
        } else if (fileData) {
          const { data: urlData } = supabase.storage
            .from('profile-photos')
            .getPublicUrl(fileData.path);
          
          photoUrl = urlData.publicUrl;
          
          // Add photo URL to visual customization data
          if (formData.visualCustomization) {
            formData.visualCustomization.photoUrl = photoUrl;
          }
        }
      }
      
      // Prepare submission data
      const submissionData = {
        template_id: formData.templateId,
        name: formData.contactInfo?.name || 'Anonymous',
        email: formData.contactInfo?.email || '',
        profession: formData.visualCustomization?.profession || formData.visualCustomization?.customProfession || '',
        about_content: formData.aboutContent,
        contact_info: formData.contactInfo,
        selected_sections: formData.selectedSections,
        selected_skills: formData.selectedSkills,
        visual_customization: formData.visualCustomization,
        services: formData.services,
        projects: formData.projects,
        testimonials: formData.testimonials,
        certifications: formData.certifications,
        education: formData.education,
        portfolio_items: formData.portfolioItems,
        publications: formData.publications,
        timeline_items: formData.timelineItems,
        status: 'pending',
        plan: formData.plan,
        domain: formData.customDomain
      };
      
      // Submit to Supabase
      await submitTemplate(submissionData);
      
      // Send confirmation email with form summary
      try {
        await sendConfirmationEmail(formData);
      } catch (emailError) {
        console.error("Error sending confirmation email:", emailError);
        toast.error("Votre demande a été enregistrée, mais l'envoi de l'email a échoué. Nous vous contacterons bientôt.");
      }
      
      toast.success("Votre demande a été envoyée avec succès. Un email de confirmation vous a été envoyé.");
      
      // Redirect to thank you page
      window.location.href = "/thank-you";
      
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitForm
  };
};
