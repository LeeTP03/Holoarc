<script>
    import ButtonRow from './ButtonRow.svelte';
    import { onMount } from 'svelte';
    export let data
    let open = false
    $: ({newupcoming} = data)
    $: ({newlive} = data)
    let now = new Date()

    onMount(() => {
        if (data.newlive.length == 0){
        document.getElementById("nolivepara").innerHTML = "No lives currently. Check back later >.<";
        }
        if (data.newupcoming.length == 0){
        document.getElementById("noupcomingpara").innerHTML = "No upcoming streams currently. Check back later >.<";
        }
    });

    

    function hourString(int){
        if (Math.floor(int) >= 10){
            return int.toString().substring(0,2) + ' hours'
        }
        if (Math.floor(int) > 1){
            return int.toString().substring(0,1) + ' hours'
        }
        else if (Math.floor(int) == 1){
            return int.toString().substring(0,1) + " hour"
        }
        else if (Math.floor(int) == 0){
            int = int / 100 * 60
            return int.toString().substring(2,4) + " mins"
        }
    }

    for (let i = 0; i < data.newlive.length; i++){
        let utcDate = data.newlive[i]['actualStartTime']
        let localDate = new Date(utcDate)
        data.newlive[i]['localTime'] = localDate.toISOString().substring(11,19)
        const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
        data.newlive[i]['timeLive'] = 'for ' + hourString(hourDiff)
    }

    for (let i = 0; i < data.newupcoming.length; i++){
        let utcDate = data.newupcoming[i]['scheduledStartTime']
        let localDate = new Date(utcDate)
        const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
        data.newupcoming[i]['timeDiff'] = 'Starts in ' + hourString(hourDiff)
    }
</script>

<main>
  <div class='flex flex-row'>
    <ButtonRow></ButtonRow>
    <div class='pl-32 w-full'>
        <h1 class="text-6xl font-bold py-8 text-center">Live!</h1>
        <div>
            <p class='text-center text-2xl' id="nolivepara"></p>
            <div class=outerdiv>
          {#each newlive as dt}
              <div class=div>
                  <a href={dt.videolink}><img src={dt.thumbnail} alt='thumbnail'></a>
                  <div style="display:flex; flex-direction:row;">
                      <img class=channelicon style="margin: auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                      <div class="flex flex-col pt-4" >
                          <p class="text-left overflow-hidden text-ellipsis line-clamp-2 pl-2"><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                          <a href='/channels/{dt.channelId}'><p class="pl-2 pt-2 text-blue-400">{dt.channelTitle}</p></a>
                          <div class='pt-2' style='display:flex'>
                              <p class=live>Live now</p>
                              <p>{dt.timeLive}</p>
                              <p style="color:grey; padding-left: 7px">{dt.concurrentViewers} viewers</p>
                          </div>
                      </div>
                  </div>
              </div>
              {/each}
            </div>
        </div>
        
        <div>
            <h1 class="text-6xl font-bold py-8 text-center" >Upcoming Streams</h1>
            <p class='text-center text-2xl' id="noupcomingpara"></p>
            <div class=outerdiv>
            {#each newupcoming as dt}
                <div class=div>
                    <a href={dt.videolink}><img src={dt.thumbnail} alt='thumbnail'></a>
                    <div style="display:flex; flex-direction:rowl">
                        <img class=channelicon style="margin:auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                        <div class="flex flex-col pt-4">
                            <p class="text-left overflow-hidden text-ellipsis line-clamp-2 pl-2"><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                            <a href='/channels/{dt.channelId}'><p class="pl-2 pt-2 text-blue-400">{dt.channelTitle}</p></a>
                            <p class="pl-2 pt-2">{dt.timeDiff}</p>
                        </div>
                    </div>
                    
                </div>
            {/each}
       </div>
      </div>

    </div>
  </div>
</main>



<style lang="postcss">

  /* .side {
    background-color: rgb(52, 52, 52);
    padding: 4px;
    position: fixed;
    height: 100vh;
  } */

  p {
      margin-top : -8px;
  }

  .div {
      height: 300px;
      width: 320px;
      /* outline: 5px dotted green; */

  }

  .outerdiv {
      width : auto;
      display:flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 20px;
      padding-left: 50px;
      padding-top: 40px;
      flex-wrap: wrap;
      /* outline: 5px dotted green; */
  }

  .channelicon {
      height: 50px;
      /* outline: 5px dotted green; */
      border-radius: 50%;
  }

  .live{
      color : rgb(249, 71, 71);
      padding-left: 7px;
      padding-right: 7px;
  }
</style>