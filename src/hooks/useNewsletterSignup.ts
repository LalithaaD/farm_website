
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useNewsletterSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const signupForNewsletter = async (email: string) => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Signup Failed",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        }
        return false;
      }

      toast({
        title: "Welcome to our newsletter! 🌱",
        description: "You'll receive fresh updates about our farm and produce.",
      });
      
      return true;
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Signup Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signupForNewsletter,
    isLoading,
  };
};
