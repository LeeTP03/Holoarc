import { supabase } from "$lib/supabaseClient";

export async function load() { 
  const { data } = await supabase.from("Live").select();
  return {
    live: data ?? [],
  };
}

export const config = {
    isr: {
      expiration: 10,
    },
  };