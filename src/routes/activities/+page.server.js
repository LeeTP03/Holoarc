import { supabase } from "$lib/supabaseClient";

export async function load() { 
  const { data } = await supabase.from("liveTable").select();
  return {
    live: data ?? [],
  };
}

export const config = {
    isr: {
      expiration: 10,
    },
  };