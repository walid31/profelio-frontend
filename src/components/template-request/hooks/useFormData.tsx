
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export const useFormData = () => {
  const { user } = useAuth();
  
  const [formData] = useState({
    fullName: user?.user_metadata?.full_name || '',
    email: user?.email || '',
    phone: user?.user_metadata?.phone || '',
    profession: user?.user_metadata?.profession || ''
  });
  
  const [additionalMessage, setAdditionalMessage] = useState("");

  return {
    formData,
    additionalMessage,
    setAdditionalMessage
  };
};
