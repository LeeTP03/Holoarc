import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data } = await supabase.from("liveTable").select();
  return {
    live: data ?? []
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
