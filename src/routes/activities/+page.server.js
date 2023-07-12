import { supabase } from "$lib/supabaseClient";

export async function load() { 
  const { data } = await supabase.from("StreamData").select().eq('type','Live').order( 'actualStartTime', { ascending : true});
  return {
    live: data ?? [],
  };
}

export const config = {
    isr: {
      expiration: 10,
    },
  };