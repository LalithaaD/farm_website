// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pumgwrndcewdjzzdhgsd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bWd3cm5kY2V3ZGp6emRoZ3NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQyNDYsImV4cCI6MjA2NTUyMDI0Nn0.an9t7Pw81-hCWjWBgBL7LT75eQ4RzCQyK34n10sOnb0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);