import { supabase } from "$lib/supabaseClient";

export async function load({params}){
	const postData = getData(params.channelId)
	return {postData}
}

async function getData(id) {
    const { data: channelData } = await supabase.from('Channels').select().eq('id', id );
    // const { data: upcomingData } = await supabase.from('Upcoming').select("*").order( 'scheduledStartTime', { ascending : true});
  
    return {
      channel: channelData ?? [],
    //   upcoming: upcomingData ?? [],
    };
  }

