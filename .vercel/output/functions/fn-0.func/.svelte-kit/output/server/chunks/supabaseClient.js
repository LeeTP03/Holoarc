import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://rsewghalcnogktxzpgoa.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZXdnaGFsY25vZ2t0eHpwZ29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4MTk5MjMsImV4cCI6MjAwNDM5NTkyM30.js-EPcg0xI6AztFLBINA9QU_Z5937FDMRWqB3kRS-l0");
export {
  supabase as s
};
