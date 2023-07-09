import { supabase } from "$lib/supabaseClient";

export async function load() { 
  const { data } = await supabase.from("Archive").select().order( 'actualEndTime', { ascending : false});
  return {
    archive: data ?? [],
  };
}

export const config = {
    isr: {
      expiration: 10,
    },
  };