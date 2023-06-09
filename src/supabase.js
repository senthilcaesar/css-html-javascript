import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://boopivhrdfmdklmkonnq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvb3BpdmhyZGZtZGtsbWtvbm5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1NTE2OTksImV4cCI6MjAwMTEyNzY5OX0.uiLOCgiXziclphMa6FJMuhae7ZGYV8a-KEO5F_7UTbA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
