import { supabase } from "$lib/supabaseClient";

export async function load() { 
  const { data } = await supabase.from("Live").select().order( 'actualStartTime', { ascending : true});
  return {
    live: data ?? [],
  };
}

export const config = {
    isr: {
      expiration: 10,
    },
  };