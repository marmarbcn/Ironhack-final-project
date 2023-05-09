import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mqlrhifdsafozqzqrdci.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbHJoaWZkc2Fmb3pxenFyZGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4MzUwMjMsImV4cCI6MTk5NzQxMTAyM30.DLwBGavgrOCRATJ78hr8SlnPrn-ZTf_Xae9oDfxzDUs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
