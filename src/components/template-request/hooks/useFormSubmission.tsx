
import { useState } from 'react';
import { toast } from 'sonner';
import { sendConfirmationEmail } from '@/utils/emailService';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [additionalMessage, setAdditionalMessage] = useState("");

  const submitForm = async (formData) => {
    setIsSubmitting(true);
    
    try {
      // Log the form data that would be submitted
      console.log("Form data to submit:", formData);
      
      // Simulate a submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send confirmation email with form summary
      const emailResult = await sendConfirmationEmail(formData);
      
      if (emailResult.success) {
        toast.success("Votre demande a été envoyée avec succès. Un email de confirmation vous a été envoyé.");
        
        // Redirect to thank you page
        window.location.href = "/thank-you";
      } else {
        toast.error("Votre demande a été enregistrée, mais l'envoi de l'email a échoué. Nous vous contacterons bientôt.");
      }
      
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
    submitForm,
    additionalMessage,
    setAdditionalMessage
  };
};
