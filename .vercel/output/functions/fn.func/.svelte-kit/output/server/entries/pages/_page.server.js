import { s as supabase } from "../../chunks/supabaseClient.js";
async function load() {
  const { data: liveData } = await supabase.from("liveTable").select();
  const { data: upcomingData } = await supabase.from("upcomingTable").select();
  return {
    live: liveData ?? [],
    upcoming: upcomingData ?? []
  };
}
const config = {
  isr: {
    expiration: 10
  }
};
export {
  config,
  load
};
