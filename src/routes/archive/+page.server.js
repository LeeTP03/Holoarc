import { supabase } from "$lib/supabaseClient";

export async function load() { 
  const { data } = await supabase.from("Archive").select().order( 'actualEndTime', { ascending : False});
  return {
    archive: data ?? [],
  };
}

export const config = {
    isr: {
      expiration: 10,
    },
  };