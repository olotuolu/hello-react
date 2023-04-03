import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ikgbjhytedihspzbauid.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZ2JqaHl0ZWRpaHNwemJhdWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MzEyODYsImV4cCI6MTk5MzEwNzI4Nn0.MCAVdo9IL7Kda8sJ8A40pwZ_PHvwD-7G9lA2fARuC80';

export const supabase = createClient(supabaseUrl, supabaseKey)