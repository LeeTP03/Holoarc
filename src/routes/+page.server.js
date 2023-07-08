import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data: liveData } = await supabase.from('liveTable').select();
    const { data: upcomingData } = await supabase.from('upcomingTable').select();
  
    return {
      live: liveData ?? [],
      upcoming: upcomingData ?? [],
    };
  }

export const config = {
    isr: {
      expiration: 10,
    },
  };