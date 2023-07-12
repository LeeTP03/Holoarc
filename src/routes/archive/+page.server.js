import { supabase } from "$lib/supabaseClient";

export async function load() { 
  const { data } = await supabase.from("StreamData").select().eq('type','Archive').order( 'actualEndTime', { ascending : false});
  return {
    archive: data ?? [],
  };
}

export const config = {
    isr: {
      expiration: 10,
    },
  };