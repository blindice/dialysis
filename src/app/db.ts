import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghtsmeuihrxwujhhlxjo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodHNtZXVpaHJ4d3VqaGhseGpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3Mzk1NzA4MiwiZXhwIjoxOTg5NTMzMDgyfQ.CkBoICHuLrqWfccuanX_UiQAyJzbtIdnIePGeCeT1FQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
