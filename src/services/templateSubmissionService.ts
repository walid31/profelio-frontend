
import { supabase } from '@/integrations/supabase/client';

export type TemplateSubmission = {
  id?: string;
  user_id?: string;
  template_id: string;
  name: string;
  email: string;
  profession: string;
  about_content?: string;
  contact_info?: any;
  selected_sections?: string[];
  selected_skills?: string[];
  visual_customization?: any;
  services?: any[];
  projects?: any[];
  testimonials?: any[];
  certifications?: any[];
  education?: any[];
  portfolio_items?: any[];
  publications?: any[];
  timeline_items?: any[];
  status?: string;
  plan?: string;
  domain?: string;
  created_at?: string;
  updated_at?: string;
};

export const submitTemplate = async (templateData: TemplateSubmission) => {
  // Get the current user
  const { data: { user } } = await supabase.auth.getUser();
  
  // Add user_id if user is logged in
  const submissionData = {
    ...templateData,
    user_id: user?.id,
  };
  
  const { data, error } = await supabase
    .from('template_submissions')
    .insert([submissionData])
    .select();
    
  if (error) {
    throw error;
  }
  
  return data;
};

export const getTemplateSubmissions = async (status?: string) => {
  let query = supabase
    .from('template_submissions')
    .select('*');
    
  if (status) {
    query = query.eq('status', status);
  }
  
  const { data, error } = await query.order('created_at', { ascending: false });
  
  if (error) {
    throw error;
  }
  
  return data;
};

export const updateTemplateSubmission = async (id: string, updates: Partial<TemplateSubmission>) => {
  const { data, error } = await supabase
    .from('template_submissions')
    .update(updates)
    .eq('id', id)
    .select();
    
  if (error) {
    throw error;
  }
  
  return data;
};

export const getTemplateSubmissionById = async (id: string) => {
  const { data, error } = await supabase
    .from('template_submissions')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) {
    throw error;
  }
  
  return data;
};
