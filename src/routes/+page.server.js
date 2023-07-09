// import { supabase } from "$lib/supabaseClient";
// import { BYPASS_TOKEN } from '$env/static/private';

import {prisma} from "$lib/server/prisma"

// export async function load() {
//     const { data: liveData } = await supabase.from('liveTable').select();
//     const { data: upcomingData } = await supabase.from('upcomingTable').select();
  
//     return {
//       live: liveData ?? [],
//       upcoming: upcomingData ?? [],
//     };
//   }


/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    live: await prisma.live.findMany(),
    upcoming : await prisma.upcoming.findMany()
  }
  
}  

// export const config = {
//     isr: {
//         // Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
//         // Setting the value to `false` means it will never expire.
//         expiration: 60,
//     }
// };