import { supabase } from "$lib/supabaseClient";

export async function load({params}){
	const postData = getData(params.channelId)
	return {postData}
}

async function getData(id) {
    const { data: liveData } = await supabase.from('StreamData').select().eq('channelId', id ).eq('type', "Live" ).order( 'actualStartTime', { ascending : true});
    const { data: archiveData } = await supabase.from('StreamData').select().eq('channelId', id ).eq('type', "Archive" ).order( 'actualEndTime', { ascending : false});
    const { data: channelData } = await supabase.from('Channels').select().eq('id', id );
    // const { data: upcomingData } = await supabase.from('Upcoming').select("*").order( 'scheduledStartTime', { ascending : true});
  
    return {
      live: liveData ?? [],
      archive: archiveData ?? [],
      channel: channelData ?? [],
    //   upcoming: upcomingData ?? [],
    };
  }

