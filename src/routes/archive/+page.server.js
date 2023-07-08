import { supabase } from "$lib/supabaseClient";

export async function load() { 
  const { data } = await supabase.from("archiveTable").select();
  return {
    archive: data ?? [],
  };
}

export const config = {
    isr: {
      expiration: 10,
    },
  };